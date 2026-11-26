/**
 * perf.cjs — Measure how heavy each template is for the visitor's device, to rank optimization work.
 *
 * For each template (Chrome, 1440×900 and a 4× CPU-throttled 390×844 "mid phone"):
 *   - idleCpu: share of main-thread time busy during 5 s with the page untouched (continuous animations,
 *     WebGL render loops and timers keep this high; a calm page is near 0 %)
 *   - scrollCpu: same while scrolling the whole page
 *   - fps while scrolling (requestAnimationFrame count)
 *   - webgl: number of live WebGL canvases; animations: running CSS/WAAPI animations; domNodes
 *   - jsKB / totalKB: bytes downloaded
 *
 * Usage: node tools/perf.cjs [id ...] [--out file.json] [--repeat 3] [--phone-only]
 *        [--variant hide-below-fold|hide-hero|hide-fixed|pause-css|reduced-motion]
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { startServer, TEMPLATES_DIR } = require('./verify.cjs');

const PROFILES = [
  { name: 'desktop', viewport: { width: 1440, height: 900 }, cpuThrottle: 1 },
  // Real phones render at 3× pixel density: canvases cost 9× the pixels of a 1× emulation.
  { name: 'phone', viewport: { width: 390, height: 844 }, cpuThrottle: 4, mobile: true, deviceScaleFactor: 3 },
];

/**
 * Diagnostic variants (--variant): applied after the intro, before measuring, to attribute idle cost.
 * hide-below-fold / hide-hero / hide-fixed / pause-css run in the page; reduced-motion is a context option.
 */
const VARIANTS = {
  'hide-below-fold': () => document.querySelectorAll('[data-section]').forEach(node => { if (node.getBoundingClientRect().top > innerHeight) node.style.contentVisibility = 'hidden'; }),
  'hide-hero': () => { const hero = document.querySelector('[data-section]'); if (hero) hero.style.contentVisibility = 'hidden'; },
  'hide-fixed': () => document.querySelectorAll('body *').forEach(node => {
    const style = getComputedStyle(node), box = node.getBoundingClientRect();
    if (style.position === 'fixed' && box.width * box.height > innerWidth * innerHeight * 0.5) node.style.display = 'none';
  }),
  'pause-css': () => { document.getAnimations().forEach(animation => animation.pause()); },
  // Realistic offscreen pause: the browser skips rendering sections far from the viewport and remembers their size.
  'offscreen-auto': () => document.querySelectorAll('[data-section]').forEach(node => {
    if (node.querySelector('.pin-spacer, [style*="sticky"]') || getComputedStyle(node).position === 'sticky') return;
    node.style.contentVisibility = 'auto';
    node.style.containIntrinsicSize = `auto ${Math.round(node.getBoundingClientRect().height)}px`;
  }),
};
/** Variants injected before any page script runs (addInitScript). */
const INIT_VARIANTS = {
  // A modest phone for tools/perf-guard.js: 4 cores → light mode (prefers-reduced-motion reported as "reduce").
  'low-end': () => Object.defineProperty(navigator, 'hardwareConcurrency', { get: () => 4 }),
  // Animation loops at ~30 fps: every requestAnimationFrame callback waits for every second frame.
  'raf-30': () => {
    const native = window.requestAnimationFrame.bind(window);
    let even = false;
    window.requestAnimationFrame = callback => native(function skip(time) { even = !even; return even ? callback(time) : native(skip); });
  },
};

/**
 * Busy fraction of the main thread over a window, split by kind of work (CDP Performance metrics).
 * @returns {Promise<{busy:number, script:number, style:number, layout:number}>} fractions 0..1
 */
async function busyFraction(cdp, run) {
  const read = async () => Object.fromEntries((await cdp.send('Performance.getMetrics')).metrics.map(metric => [metric.name, metric.value]));
  const before = await read();
  await run();
  const after = await read();
  const wall = after.Timestamp - before.Timestamp;
  const share = name => (wall > 0 ? Math.min(1, (after[name] - before[name]) / wall) : 0);
  return { busy: share('TaskDuration'), script: share('ScriptDuration'), style: share('RecalcStyleDuration'), layout: share('LayoutDuration') };
}

/**
 * Measure one template under one device profile.
 * @returns {Promise<object>}
 */
async function measure(browser, baseUrl, id, profile, variant) {
  const context = await browser.newContext({
    viewport: profile.viewport, isMobile: !!profile.mobile, hasTouch: !!profile.mobile,
    deviceScaleFactor: profile.deviceScaleFactor || 1, reducedMotion: variant === 'reduced-motion' ? 'reduce' : 'no-preference',
  });
  if (INIT_VARIANTS[variant]) await context.addInitScript(INIT_VARIANTS[variant]);
  const page = await context.newPage();
  const cdp = await context.newCDPSession(page);
  await cdp.send('Performance.enable');
  if (profile.cpuThrottle > 1) await cdp.send('Emulation.setCPUThrottlingRate', { rate: profile.cpuThrottle });
  let jsBytes = 0, totalBytes = 0;
  page.on('response', async response => {
    const length = Number(response.headers()['content-length'] || 0);
    totalBytes += length;
    if (/javascript/.test(response.headers()['content-type'] || '')) jsBytes += length;
  });
  // no-guard: same device with tools/perf-guard.js switched off (?perf=full), for before/after comparisons.
  await page.goto(`${baseUrl}/${id}/${variant === 'no-guard' ? '?perf=full' : ''}`, { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(6000); // let preloaders and intros finish
  if (VARIANTS[variant]) await page.evaluate(VARIANTS[variant]);
  if (variant === 'custom' && process.env.PERF_EVAL) await page.evaluate(process.env.PERF_EVAL); // ad-hoc diagnosis
  let longFrames = 0;
  const idle = await busyFraction(cdp, async () => {
    longFrames = await page.evaluate(() => new Promise(resolve => {
      let last = performance.now(), slow = 0;
      const end = last + 5000;
      const tick = now => { if (now - last > 50) slow++; last = now; if (now < end) requestAnimationFrame(tick); else resolve(slow); };
      requestAnimationFrame(tick);
    }));
  });
  const idleCpu = idle.busy;
  let frames = 0, seconds = 0;
  const { busy: scrollCpu } = await busyFraction(cdp, async () => {
    const result = await page.evaluate(async () => {
      let count = 0, running = true;
      const tick = () => { count++; if (running) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
      const start = performance.now();
      const height = document.documentElement.scrollHeight;
      for (let y = 0; y < height; y += 120) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 50)); }
      running = false;
      return { count, seconds: (performance.now() - start) / 1000 };
    });
    frames = result.count; seconds = result.seconds;
  });
  const snapshot = await page.evaluate(() => ({
    webgl: [...document.querySelectorAll('canvas')].filter(canvas => {
      try { return !!(canvas.getContext('webgl2') || canvas.getContext('webgl')); } catch { return false; }
    }).length,
    canvases: document.querySelectorAll('canvas').length,
    animations: document.getAnimations().filter(animation => animation.playState === 'running').length,
    domNodes: document.getElementsByTagName('*').length,
  }));
  await context.close();
  return {
    idleCpu: Math.round(idleCpu * 100), idleScript: Math.round(idle.script * 100), idleStyle: Math.round(idle.style * 100),
    idleLayout: Math.round(idle.layout * 100), idleLongFrames: longFrames,
    scrollCpu: Math.round(scrollCpu * 100), fps: Math.round(frames / Math.max(seconds, 0.1)),
    ...snapshot, jsKB: Math.round(jsBytes / 1024), totalKB: Math.round(totalBytes / 1024),
  };
}

(async () => {
  const args = process.argv.slice(2);
  const option = name => { const index = args.indexOf(name); return index >= 0 ? args.splice(index, 2)[1] : null; };
  const outFile = option('--out');
  const variant = option('--variant') || 'none';
  const repeat = Number(option('--repeat') || 1);
  const phoneOnly = args.includes('--phone-only') && args.splice(args.indexOf('--phone-only'), 1);
  const ids = args.length ? args : fs.readdirSync(TEMPLATES_DIR).filter(id => fs.existsSync(path.join(TEMPLATES_DIR, id, 'index.html')));
  const server = await startServer();
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ channel: 'chrome' });
  const results = {};
  try {
    for (const id of ids) {
      results[id] = {};
      for (const profile of PROFILES.filter(item => !phoneOnly || item.name === 'phone')) {
        const runs = [];
        for (let run = 0; run < repeat; run++) runs.push(await measure(browser, baseUrl, id, profile, variant).catch(error => ({ error: error.message.slice(0, 120) })));
        // Median run by idle CPU: single runs are noisy (±20 points seen on the same template).
        results[id][profile.name] = runs.sort((a, b) => (a.idleCpu ?? 0) - (b.idleCpu ?? 0))[Math.floor(runs.length / 2)];
        results[id][profile.name].idleRuns = runs.map(item => item.idleCpu);
      }
      const phone = results[id].phone;
      console.log(`${id.padEnd(24)} [${variant}] phone idle ${String(phone.idleCpu).padStart(3)}% (script ${phone.idleScript} style ${phone.idleStyle} layout ${phone.idleLayout}, runs ${phone.idleRuns}) long ${phone.idleLongFrames} scroll ${phone.fps}fps webgl ${phone.webgl} anim ${phone.animations}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
  if (outFile) fs.writeFileSync(outFile, JSON.stringify(results, null, 1));
})();
