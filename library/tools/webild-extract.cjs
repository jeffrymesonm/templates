/**
 * webild-extract.cjs — Turn one live Webild template page into a standalone static folder.
 *
 * 1. Opens https://webild-mcp-components.vercel.app/templates/<slug> in Chrome, scrolls the whole page
 *    and records every file the page loads.
 * 2. Saves the same-origin files (JS chunks, CSS, fonts, models) under <out>/assets/... and the
 *    external media URLs (photos/videos on storage.googleapis.com) to <reportFile> (default <out>/../<slug>.external.json).
 * 3. Patches the entry so it renders only this template (no 150-route library router), makes Vite's
 *    preload helper resolve relative to its own URL (works from any sub-folder), and renames the
 *    template's page module to assets/page.js — the file that holds all texts, links and image props.
 *
 * Usage: node tools/webild-extract.cjs <slug> <outDir> [reportFile]
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ORIGIN = 'https://webild-mcp-components.vercel.app';

/**
 * Scroll the page slowly to the bottom and back so scroll-triggered sections load their files.
 * @param {import('playwright').Page} page
 */
async function scrollThrough(page) {
  await page.evaluate(async () => {
    const pause = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
    for (let y = 0; y < document.documentElement.scrollHeight; y += Math.round(window.innerHeight * 0.5)) {
      window.scrollTo(0, y);
      await pause(250);
    }
    await pause(1500);
    window.scrollTo(0, 0);
    await pause(800);
  });
}

/**
 * Record every response of the live template page at desktop and mobile widths.
 * @returns {Promise<Map<string, {status:number, body:Buffer|null, type:string}>>}
 */
async function capture(slug) {
  const browser = await chromium.launch({ channel: 'chrome' });
  const files = new Map();
  try {
    for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
      const page = await browser.newPage({ viewport });
      page.on('response', async response => {
        const url = response.url().split('#')[0];
        if (files.has(url) || url.startsWith('data:')) return;
        const entry = { status: response.status(), body: null, type: response.headers()['content-type'] || '' };
        files.set(url, entry);
        if (url.startsWith(ORIGIN) && response.status() === 200) entry.body = await response.body().catch(() => null);
      });
      await page.goto(`${ORIGIN}/templates/${slug}`, { waitUntil: 'load', timeout: 60000 });
      await page.waitForTimeout(5000);
      await scrollThrough(page);
      await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
      await page.close();
    }
  } finally {
    await browser.close();
  }
  return files;
}

/**
 * Download same-origin files referenced statically by the saved chunks/CSS but not requested during
 * the capture (sections that load on click, at other widths, or lazily). Follows, recursively:
 * `from"./x.js"`, `import("./x.js")`, Vite `__vite__mapDeps` lists inside chunks, CSS `url(...)`,
 * and the page's own deps list in the entry. Throws when a referenced file cannot be downloaded.
 * @param {string} outDir - Template folder. @param {string} entryName - Entry chunk file name.
 * @param {string[]} pageDeps - "assets/..." paths the entry preloads for the page.
 * @returns {Promise<string[]>} Paths downloaded in this step.
 */
async function completeClosure(outDir, entryName, pageDeps) {
  const assetsDir = path.join(outDir, 'assets');
  const added = [];
  const queue = [...pageDeps.map(dep => dep.replace(/^assets\//, '')), ...fs.readdirSync(assetsDir)];
  const seen = new Set();
  while (queue.length) {
    const name = queue.shift();
    if (seen.has(name)) continue;
    seen.add(name);
    const file = path.join(assetsDir, name);
    if (!fs.existsSync(file)) {
      const response = await fetch(`${ORIGIN}/assets/${name}`, { signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error(`closure: ${name} → HTTP ${response.status}`);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, Buffer.from(await response.arrayBuffer()));
      added.push(name);
    }
    if (name === entryName || !/\.(js|css)$/.test(name)) continue;
    const code = fs.readFileSync(file, 'utf8');
    const references = name.endsWith('.css')
      ? [...code.matchAll(/url\((?:"|')?(?!data:|https?:|#)([^"')]+)/g)].map(match => match[1].replace(/^\.\//, '').replace(/^\/assets\//, ''))
      : [
        ...[...code.matchAll(/(?:from\s*|import\s*\(\s*)["'`]\.\/([^"'`]+)["'`]/g)].map(match => match[1]),
        ...[...code.matchAll(/["'`]assets\/([^"'`]+\.(?:js|css))["'`]/g)].map(match => match[1]),
      ];
    for (const reference of references) if (!reference.startsWith('/') && !reference.startsWith('..')) queue.push(reference.split('?')[0]);
  }
  return added;
}

/**
 * Replace a substring exactly once, failing loudly when the bundle no longer matches.
 */
function replaceOnce(text, search, replacement, label) {
  const count = text.split(search).length - 1;
  if (count !== 1) throw new Error(`${label}: expected 1 match, found ${count}`);
  return text.replace(search, () => replacement);
}

(async () => {
  const [slug, outArgument, reportArgument] = process.argv.slice(2);
  if (!slug || !outArgument) throw new Error('Usage: node webild-extract.cjs <slug> <outDir>');
  const outDir = path.resolve(outArgument);
  if (fs.existsSync(outDir)) throw new Error(`${outDir} already exists; refusing to overwrite`);

  const files = await capture(slug);
  const external = [];
  const missing = [];
  for (const [url, entry] of files) {
    if (!url.startsWith(ORIGIN)) { external.push({ url, status: entry.status, type: entry.type }); continue; }
    const pathname = decodeURIComponent(new URL(url).pathname);
    if (pathname.startsWith('/templates/') || pathname === '/favicon.svg') continue; // SPA document, Webild icon
    if (/text\/html/.test(entry.type)) continue; // SPA fallback served for odd URLs such as "/assets/#n"
    if (!entry.body) { missing.push(`${entry.status} ${pathname}`); continue; }
    const target = path.join(outDir, pathname);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, entry.body);
  }

  const assetsDir = path.join(outDir, 'assets');
  const entryName = fs.readdirSync(assetsDir).find(name => /^index-.*\.js$/.test(name));
  let entry = fs.readFileSync(path.join(assetsDir, entryName), 'utf8');

  // Which lazy component renders this route, and which page module it imports.
  const routeMatch = entry.match(new RegExp(`path:\`/templates/${slug}\`,element:\\(0,S\\.jsx\\)\\(([\\w$]+),\\{\\}\\)`));
  if (!routeMatch) throw new Error(`route /templates/${slug} not found in ${entryName}`);
  const component = routeMatch[1];
  const lazyMatch = entry.match(new RegExp(`[,;\\s]${component.replace(/\$/g, '\\$')}=\\(0,b\\.lazy\\)\\(\\(\\)=>i\\(\\(\\)=>import\\(\`\\./(page-[\\w-]+\\.js)\``));
  if (!lazyMatch) throw new Error(`lazy import for ${component} not found`);
  const pageChunk = lazyMatch[1];

  // The page's preload list: indices into the entry's __vite__mapDeps table.
  const depsTable = JSON.parse(entry.match(/m\.f\|\|\(m\.f=(\[[^\]]*\])/)[1]);
  const lazyCall = entry.slice(lazyMatch.index, lazyMatch.index + 2000);
  const depIndices = JSON.parse((lazyCall.match(/__vite__mapDeps\((\[[\d,]*\])\)/) || [, '[]'])[1]);
  const closureAdded = await completeClosure(outDir, entryName, depIndices.map(index => depsTable[index]));
  if (missing.length) throw new Error(`files failed during capture: ${missing.join(', ')}`);

  // Render only this template inside the original router + Suspense.
  entry = replaceOnce(entry, '(0,S.jsx)(Ll,{})', `(0,S.jsx)(b.Suspense,{fallback:null,children:(0,S.jsx)(${component},{})})`, 'root render');

  // Rename the page module to assets/page.js everywhere it is referenced.
  for (const name of fs.readdirSync(assetsDir).filter(file => file.endsWith('.js'))) {
    const file = path.join(assetsDir, name);
    const code = name === entryName ? entry : fs.readFileSync(file, 'utf8');
    const updated = code.split(pageChunk).join('page.js');
    if (name === entryName) entry = updated; else if (updated !== code) fs.writeFileSync(file, updated);
  }
  fs.writeFileSync(path.join(assetsDir, entryName), entry);
  fs.renameSync(path.join(assetsDir, pageChunk), path.join(assetsDir, 'page.js'));

  // Vite resolves preloads from the site root ("/assets/..."); make it relative to the helper file.
  const helperName = fs.readdirSync(assetsDir).find(name => name.startsWith('preload-helper-'));
  const helperPath = path.join(assetsDir, helperName);
  fs.writeFileSync(helperPath, replaceOnce(fs.readFileSync(helperPath, 'utf8'),
    't=function(e){return`/`+e}', 't=function(e){return new URL(`../`+e,import.meta.url).href}', 'preload base'));

  // Shell: the original index.html with relative asset paths.
  const shell = await (await fetch(`${ORIGIN}/templates/${slug}`, { signal: AbortSignal.timeout(20000) })).text();
  const html = shell
    .replace(/(href|src)="\/assets\//g, '$1="assets/')
    .replace(/<link rel="icon"[^>]*>/, '<link rel="icon" href="data:,">') // neutral: no Webild icon, no /favicon.ico request
    .replace(/<title>[^<]*<\/title>/, '<title>Your Brand</title>');
  fs.writeFileSync(path.join(outDir, 'index.html'), html);

  const report = { slug, pageChunk, component, external, closureAdded, savedFiles: [...files.keys()].filter(url => url.startsWith(ORIGIN)).length };
  const reportFile = reportArgument ? path.resolve(reportArgument) : path.join(path.dirname(outDir), `${slug}.external.json`);
  fs.mkdirSync(path.dirname(reportFile), { recursive: true });
  fs.writeFileSync(reportFile, JSON.stringify(report, null, 1));
  console.log(`${slug}: page=${pageChunk} component=${component} saved=${report.savedFiles} closure+${closureAdded.length} external=${external.length}`);
})().catch(error => { console.error(`ERROR ${error.message}`); process.exit(1); });
