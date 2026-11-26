/**
 * dom-text.cjs — Dump the text a template actually renders (including hidden menus/dialogs and SVG text)
 * plus alt/aria-label/title/placeholder/href/src attributes, at 375 and 1440 px, and flag forbidden terms.
 * Catches text hard-coded inside compiled section components, which file greps on page.js miss.
 *
 * Usage: node tools/dom-text.cjs <templateId> [--terms "a,b,c"] [--out file.json]
 * Exit code 1 when a term is found. Terms are matched case-insensitively as whole words.
 */
const fs = require('fs');
const { chromium } = require('playwright');
const { startServer } = require('./verify.cjs');

/**
 * Collect rendered text and attributes from the current page.
 * @returns {Promise<{title:string, text:string, attributes:string[]}>}
 */
function collect(page) {
  return page.evaluate(() => {
    const clone = document.body.cloneNode(true);
    clone.querySelectorAll('script, style, noscript').forEach(node => node.remove());
    const attributes = [];
    for (const element of document.querySelectorAll('[alt], [aria-label], [title], [placeholder], a[href], [src], meta[content]')) {
      for (const name of ['alt', 'aria-label', 'title', 'placeholder', 'href', 'src', 'content']) {
        const value = element.getAttribute(name);
        if (value && !value.startsWith('data:')) attributes.push(`${name}=${value}`);
      }
    }
    return { title: document.title, text: clone.textContent.replace(/\s+/g, ' ').trim(), attributes: [...new Set(attributes)] };
  });
}

(async () => {
  const args = process.argv.slice(2);
  const option = name => { const index = args.indexOf(name); return index >= 0 ? args.splice(index, 2)[1] : null; };
  const terms = (option('--terms') || '').split(',').map(term => term.trim()).filter(Boolean);
  const outFile = option('--out');
  const [templateId] = args;
  const server = await startServer();
  const browser = await chromium.launch({ channel: 'chrome' });
  const result = { templateId, widths: {}, hits: [] };
  try {
    for (const width of [375, 1440]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      await page.goto(`http://127.0.0.1:${server.address().port}/${templateId}/`, { waitUntil: 'load' });
      await page.waitForTimeout(3500);
      await page.evaluate(async () => {
        for (let y = 0; y < document.documentElement.scrollHeight; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 100)); }
      });
      result.widths[width] = await collect(page);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }
  const haystack = Object.values(result.widths).map(w => [w.title, w.text, ...w.attributes].join('\n')).join('\n');
  for (const term of terms) {
    const pattern = new RegExp(`(^|[^\\p{L}\\p{N}])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}($|[^\\p{L}\\p{N}])`, 'giu');
    const matches = [...haystack.matchAll(pattern)].map(match => haystack.slice(Math.max(0, match.index - 40), match.index + term.length + 40).replace(/\n/g, ' | '));
    if (matches.length) result.hits.push({ term, count: matches.length, samples: [...new Set(matches)].slice(0, 5) });
  }
  if (outFile) fs.writeFileSync(outFile, JSON.stringify(result, null, 1));
  else console.log(result.widths[1440].text);
  for (const hit of result.hits) console.log(`HIT ${hit.term} ×${hit.count}: ${hit.samples.join(' ··· ')}`);
  process.exit(result.hits.length ? 1 : 0);
})();
