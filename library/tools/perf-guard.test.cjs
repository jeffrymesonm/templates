// perf-guard.test.cjs — Self-check of tools/perf-guard.js in Chrome: ~30 fps on touch, cancelAnimationFrame works,
// DPR cap, light mode (prefers-reduced-motion) only on modest devices. Usage: node tools/perf-guard.test.cjs
const path = require('path');
const { chromium } = require('playwright');
const guard = require('fs').readFileSync(path.join(__dirname, 'perf-guard.js'), 'utf8');
(async () => {
  const browser = await chromium.launch({ channel: 'chrome' });
  const run = async (options, cores) => {
    const context = await browser.newContext(options);
    await context.addInitScript(c => Object.defineProperty(navigator, 'hardwareConcurrency', { get: () => c }), cores);
    const page = await context.newPage();
    await page.route('http://guard.test/', route => route.fulfill({ contentType: 'text/html', body: '<!doctype html><html><head><meta charset="utf-8"><script>' + guard + '</script><title>t</title></head><body></body></html>' }));
    await page.goto('http://guard.test/');
    const result = await page.evaluate(() => new Promise(resolve => {
      let frames = 0, cancelledRan = false;
      const start = performance.now();
      const loop = () => { frames++; if (performance.now() - start < 1000) requestAnimationFrame(loop); else done(); };
      const second = () => {}; requestAnimationFrame(loop); requestAnimationFrame(function again() { second(); if (performance.now() - start < 1000) requestAnimationFrame(again); });
      const id = requestAnimationFrame(() => { cancelledRan = true; }); cancelAnimationFrame(id);
      const done = () => resolve({ fps: frames, cancelledRan, reduce: matchMedia('(prefers-reduced-motion: reduce)').matches,
        boolReduce: matchMedia('(prefers-reduced-motion)').matches, noPref: matchMedia('(prefers-reduced-motion: no-preference)').matches,
        dpr: devicePixelRatio, mode: document.documentElement.getAttribute('data-perf') });
    }));
    await context.close();
    return result;
  };
  const results = {
    desktopStrong: await run({ viewport: { width: 1440, height: 900 } }, 16),
    phoneStrong: await run({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 3 }, 8),
    phoneModest: await run({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 3 }, 4),
  };
  console.log(JSON.stringify(results, null, 1));
  const ok = results.desktopStrong.fps > 50 && results.desktopStrong.mode === 'full' && !results.desktopStrong.reduce
    && results.phoneStrong.fps >= 25 && results.phoneStrong.fps <= 36 && results.phoneStrong.dpr === 2 && !results.phoneStrong.reduce
    && results.phoneModest.reduce && results.phoneModest.boolReduce && !results.phoneModest.noPref && results.phoneModest.dpr === 1.5
    && Object.values(results).every(r => !r.cancelledRan);
  console.log(ok ? 'GUARD SELF-CHECK OK' : 'GUARD SELF-CHECK FAILED');
  await browser.close();
  process.exit(ok ? 0 : 1);
})();
