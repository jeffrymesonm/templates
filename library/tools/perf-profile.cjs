/**
 * perf-profile.cjs — Find what keeps a template busy while the visitor does nothing.
 * Records a 5 s JavaScript CPU profile of the idle page (phone profile, 4× CPU throttle, after intros)
 * and prints self-time grouped by script file (i.e. by compiled section/library) and by top functions.
 *
 * Usage: node tools/perf-profile.cjs <id> [--scroll]
 */
const { chromium } = require('playwright');
const { startServer } = require('./verify.cjs');

(async () => {
  const [id] = process.argv.slice(2).filter(arg => !arg.startsWith('--'));
  const scroll = process.argv.includes('--scroll');
  const server = await startServer();
  const browser = await chromium.launch({ channel: 'chrome' });
  try {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    const page = await context.newPage();
    const cdp = await context.newCDPSession(page);
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
    await page.goto(`http://127.0.0.1:${server.address().port}/${id}/`, { waitUntil: 'load' });
    await page.waitForTimeout(6000);
    if (scroll) await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight / 3));
    await page.waitForTimeout(1000);
    await cdp.send('Profiler.enable');
    await cdp.send('Profiler.setSamplingInterval', { interval: 500 });
    await cdp.send('Profiler.start');
    await page.waitForTimeout(5000);
    const { profile } = await cdp.send('Profiler.stop');
    const byNode = new Map(profile.nodes.map(node => [node.id, node]));
    const selfTime = new Map();
    const deltas = profile.timeDeltas;
    profile.samples.forEach((nodeId, index) => selfTime.set(nodeId, (selfTime.get(nodeId) || 0) + (deltas[index] || 0)));
    const byFile = new Map(), byFunction = new Map();
    let total = 0;
    for (const [nodeId, time] of selfTime) {
      const frame = byNode.get(nodeId).callFrame;
      if (['(idle)', '(program)', '(garbage collector)'].includes(frame.functionName) && !frame.url) {
        byFile.set(frame.functionName, (byFile.get(frame.functionName) || 0) + time); total += time; continue;
      }
      const file = (frame.url.split('/').pop() || '(native)').replace(/-[\w]{8}\.js$/, '.js');
      byFile.set(file, (byFile.get(file) || 0) + time);
      const name = `${frame.functionName || '(anonymous)'} @ ${file}:${frame.lineNumber}`;
      byFunction.set(name, (byFunction.get(name) || 0) + time);
      total += time;
    }
    const show = map => [...map].sort((a, b) => b[1] - a[1]).slice(0, 12)
      .map(([name, time]) => `  ${(100 * time / total).toFixed(1).padStart(5)}%  ${name}`).join('\n');
    console.log(`${id}${scroll ? ' (scrolled)' : ''} — self time by file:\n${show(byFile)}\n top functions:\n${show(byFunction)}`);
  } finally {
    await browser.close();
    server.close();
  }
})();
