/**
 * compare-live.cjs — Check that a Webild template still has the original page geometry.
 * Loads the live Webild page and the local template at 375 and 1440 px, scrolls both through, and compares the
 * number of [data-section] blocks and each block's height. Texts were rewritten, so small differences are
 * expected; a block that changes height by more than the tolerance, or disappears, is flagged.
 *
 * Usage: node tools/compare-live.cjs [id ...] [--tolerance 0.2]
 * Reads the Webild slug of each id from source/webild/build-list.tsv. Exit code 1 if anything is flagged.
 */
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { startServer } = require('./verify.cjs');

const LIBRARY = path.resolve(__dirname, '..');
const slugById = Object.fromEntries(fs.readFileSync(path.join(LIBRARY, 'source/webild/build-list.tsv'), 'utf8').trim().split('\n').map(line => line.split('\t').reverse()));

/**
 * Scroll through a page and return the height of every [data-section] block, in document order.
 * @returns {Promise<{sections:Array<{name:string,height:number}>, total:number}>}
 */
async function geometry(browser, url, width) {
  const page = await browser.newPage({ viewport: { width, height: width < 768 ? 812 : 900 } });
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(5000);
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); }
      window.scrollTo(0, 0); await new Promise(r => setTimeout(r, 800));
    });
    return await page.evaluate(() => ({
      sections: [...document.querySelectorAll('[data-section]')].map(node => ({ name: node.getAttribute('data-section'), height: Math.round(node.getBoundingClientRect().height) })),
      total: document.documentElement.scrollHeight,
    }));
  } finally {
    await page.close();
  }
}

(async () => {
  const args = process.argv.slice(2);
  const toleranceIndex = args.indexOf('--tolerance');
  const tolerance = toleranceIndex >= 0 ? Number(args.splice(toleranceIndex, 2)[1]) : 0.2;
  const ids = args.length ? args : Object.keys(slugById);
  const server = await startServer();
  const browser = await chromium.launch({ channel: 'chrome' });
  let flagged = 0;
  try {
    for (const id of ids) {
      const problems = [];
      for (const width of [375, 1440]) {
        const live = await geometry(browser, `https://webild-mcp-components.vercel.app/templates/${slugById[id]}`, width);
        const local = await geometry(browser, `http://127.0.0.1:${server.address().port}/${id}/`, width);
        if (live.sections.length !== local.sections.length) problems.push(`${width}px: ${live.sections.length} sections live vs ${local.sections.length} local`);
        live.sections.forEach((section, index) => {
          const mine = local.sections[index];
          if (!mine) return;
          const ratio = Math.abs(mine.height - section.height) / Math.max(section.height, 1);
          if (ratio > tolerance && Math.abs(mine.height - section.height) > 60) problems.push(`${width}px ${section.name}: ${section.height}→${mine.height}px`);
        });
        const totalRatio = Math.abs(local.total - live.total) / live.total;
        if (totalRatio > tolerance) problems.push(`${width}px page: ${live.total}→${local.total}px`);
      }
      if (problems.length) flagged++;
      console.log(`${problems.length ? 'DIFF' : 'same'} ${id}${problems.length ? ' — ' + problems.join(' | ') : ''}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
  process.exit(flagged ? 1 : 0);
})();
