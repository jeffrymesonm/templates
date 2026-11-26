/**
 * verify.cjs — Automated smoke test for every template in ../templates.
 *
 * Serves the templates folder over HTTP (with Range support so scroll-scrubbed videos can seek),
 * opens each template in Chrome at 375, 768 and 1440 px, scrolls to the bottom, and reports:
 * console errors, uncaught exceptions, failed/4xx/5xx requests, horizontal overflow, and whether
 * every visible [aria-expanded] control (menus, accordions) toggles when clicked.
 * Saves a viewport screenshot per width to the folder given by --shots (optional).
 *
 * Usage:  node tools/verify.cjs [templateId ...] [--shots <dir>]
 * Exit code 1 when any template fails.
 */
const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('playwright');

// TEMPLATES_DIR env var lets the same check run on the untouched originals (baseline comparison).
const TEMPLATES_DIR = path.resolve(process.env.TEMPLATES_DIR || path.join(__dirname, '..', 'templates'));
const WIDTHS = [375, 768, 1440];
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.svg': 'image/svg+xml', '.mp4': 'video/mp4', '.webp': 'image/webp', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.json': 'application/json', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
  '.gif': 'image/gif', '.avif': 'image/avif', '.webm': 'video/webm', '.glb': 'model/gltf-binary',
};

/**
 * Serve one file from TEMPLATES_DIR (directories → index.html), with Range support for video seeking.
 * @param {http.IncomingMessage} request
 * @param {http.ServerResponse} response
 */
function serveFile(request, response) {
    const urlPath = decodeURIComponent(new URL(request.url, 'http://x').pathname);
    let filePath = path.join(TEMPLATES_DIR, urlPath);
    if (!filePath.startsWith(TEMPLATES_DIR)) { response.writeHead(403).end(); return; }
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) filePath = path.join(filePath, 'index.html');
    if (!fs.existsSync(filePath)) { response.writeHead(404).end(); return; }
    const size = fs.statSync(filePath).size;
    const headers = { 'Content-Type': MIME_TYPES[path.extname(filePath)] || 'application/octet-stream', 'Accept-Ranges': 'bytes' };
    const range = /bytes=(\d*)-(\d*)/.exec(request.headers.range || '');
    if (range) {
      const start = range[1] ? Number(range[1]) : 0;
      const end = range[2] ? Number(range[2]) : size - 1;
      response.writeHead(206, { ...headers, 'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': end - start + 1 });
      fs.createReadStream(filePath, { start, end }).pipe(response);
      return;
    }
    response.writeHead(200, { ...headers, 'Content-Length': size });
    fs.createReadStream(filePath).pipe(response);
}

/**
 * Start a static file server rooted at TEMPLATES_DIR.
 * @returns {Promise<http.Server>} Listening server on a random port.
 */
function startServer() {
  const server = http.createServer(serveFile);
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

/**
 * Scroll the page to the bottom in steps so scroll-triggered reveals and lazy media run.
 * @param {import('playwright').Page} page
 */
async function scrollThrough(page) {
  await page.evaluate(async () => {
    const step = Math.max(200, Math.round(window.innerHeight * 0.6));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise(resolve => setTimeout(resolve, 120));
    }
    window.scrollTo(0, document.documentElement.scrollHeight);
    await new Promise(resolve => setTimeout(resolve, 400));
  });
}

/**
 * Click each visible [aria-expanded] control and check that its state flips.
 * @param {import('playwright').Page} page
 * @returns {Promise<{tested:number, broken:string[]}>}
 */
async function testToggles(page) {
  const controls = await page.$$('[aria-expanded]');
  const broken = [];
  let tested = 0;
  for (const control of controls) {
    if (!(await control.isVisible())) continue;
    const before = await control.getAttribute('aria-expanded');
    try {
      await control.scrollIntoViewIfNeeded({ timeout: 2000 });
      await control.click({ timeout: 2000 });
    } catch (error) {
      continue; // covered by an overlay (e.g. an open menu): not a toggle failure
    }
    await page.waitForTimeout(250);
    const after = await control.getAttribute('aria-expanded');
    tested++;
    const label = (await control.getAttribute('aria-label')) || (await control.innerText()).trim().slice(0, 40);
    if (after !== before) { await control.click({ timeout: 2000 }).catch(() => {}); await page.waitForTimeout(250); continue; }
    if (before === 'true') continue; // accordion that always keeps one item open: clicking the open one is a no-op
    await control.hover({ timeout: 2000 }).catch(() => {}); // menus that open on hover instead of click
    await page.waitForTimeout(400);
    let opened = (await control.getAttribute('aria-expanded')) !== before;
    await page.mouse.move(0, 0);
    if (!opened) { // disclosure that opens on keyboard focus
      await control.focus().catch(() => {});
      await page.waitForTimeout(400);
      opened = (await control.getAttribute('aria-expanded')) !== before;
      await control.evaluate(node => node.blur()).catch(() => {});
    }
    if (!opened) broken.push(label);
  }
  return { tested, broken };
}

/**
 * Verify one template at every width.
 * @returns {Promise<object>} Result with problems per width.
 */
async function verifyTemplate(browser, baseUrl, templateId, shotsDir) {
  const result = { templateId, widths: {}, ok: true };
  for (const width of WIDTHS) {
    // MODEST_TOUCH=1: emulate a modest touch device (4 cores) so tools/perf-guard.js turns on its light mode,
    // 30 fps loops and canvas resolution cap — the light path must work as well as the full one.
    const modestTouch = !!process.env.MODEST_TOUCH;
    const context = await browser.newContext({
      viewport: { width, height: width < 768 ? 812 : 900 },
      ...(modestTouch ? { isMobile: width < 1024, hasTouch: true, deviceScaleFactor: 3 } : {}),
    });
    if (modestTouch) await context.addInitScript(() => Object.defineProperty(navigator, 'hardwareConcurrency', { get: () => 4 }));
    const page = await context.newPage();
    const problems = [];
    page.on('console', message => { if (message.type() === 'error') problems.push(`console: ${message.text().slice(0, 160)}`); });
    page.on('pageerror', error => problems.push(`exception: ${error.message.slice(0, 160)}`));
    page.on('requestfailed', request => {
      const reason = request.failure()?.errorText || '';
      if (!reason.includes('ERR_ABORTED')) problems.push(`failed: ${request.url()} ${reason}`);
    });
    page.on('response', response => { if (response.status() >= 400) problems.push(`HTTP ${response.status()}: ${response.url()}`); });
    // Original media hosts must never be contacted: every asset has to be local.
    await page.route(/^https?:\/\/(storage\.googleapis\.com|[^/]*webild[^/]*)\//, route => { problems.push(`remote original asset: ${route.request().url()}`); route.abort(); });
    // STRICT_EXTERNAL=1: any request leaving the machine (other than Google Fonts) is a problem — templates must be self-contained.
    if (process.env.STRICT_EXTERNAL) page.on('request', request => {
      const url = request.url();
      if (/^https?:/.test(url) && !url.startsWith(baseUrl) && !/^https:\/\/fonts\.(googleapis|gstatic)\.com\//.test(url)) problems.push(`external request: ${url.slice(0, 120)}`);
    });
    await page.goto(`${baseUrl}/${templateId}/`, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(3500); // preloaders / intro animations
    await scrollThrough(page);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    if (overflow > 1) problems.push(`horizontal overflow: ${overflow}px`);
    const brokenImages = await page.evaluate(() => [...document.images].filter(image => image.complete && image.currentSrc && image.naturalWidth === 0).map(image => image.currentSrc));
    if (brokenImages.length) problems.push(`broken images: ${brokenImages.slice(0, 3).join(', ')}`);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(600);
    if (shotsDir) await page.screenshot({ path: path.join(shotsDir, `${templateId}-${width}.png`) });
    const toggles = await testToggles(page);
    if (toggles.broken.length) problems.push(`toggles not responding: ${toggles.broken.join(', ')}`);
    result.widths[width] = { problems, togglesTested: toggles.tested };
    if (problems.length) result.ok = false;
    await context.close();
  }
  return result;
}

module.exports = { startServer, serveFile, TEMPLATES_DIR };

if (require.main === module) (async () => {
  const args = process.argv.slice(2);
  const shotsIndex = args.indexOf('--shots');
  const shotsDir = shotsIndex >= 0 ? args.splice(shotsIndex, 2)[1] : null;
  if (shotsDir) fs.mkdirSync(shotsDir, { recursive: true });
  const ids = args.length ? args : fs.readdirSync(TEMPLATES_DIR).filter(name => fs.existsSync(path.join(TEMPLATES_DIR, name, 'index.html')));
  const server = await startServer();
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ channel: 'chrome' });
  let failed = false;
  try {
    for (const id of ids) {
      const result = await verifyTemplate(browser, baseUrl, id, shotsDir);
      failed ||= !result.ok;
      console.log(JSON.stringify(result));
    }
  } finally {
    await browser.close();
    server.close();
  }
  process.exit(failed ? 1 : 0);
})();
