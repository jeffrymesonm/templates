/**
 * check-webild-brands.cjs — Brand check for templates extracted from Webild (compiled builds, where a file grep
 * is meaningless). For each template it renders the page with dom-text.cjs and searches the rendered text and
 * attributes for: the global terms below plus the template's own original names in
 * source/webild/brand-terms.json ({ "<id>": ["Original Brand", "Person", ...] }).
 *
 * Usage: node tools/check-webild-brands.cjs [id ...]      Exit code 1 when any template has a hit.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const LIBRARY = path.resolve(__dirname, '..');
const GLOBAL_TERMS = ['Webild', 'storage.googleapis', 'Lorem ipsum'];
const termsFile = path.join(LIBRARY, 'source', 'webild', 'brand-terms.json');
const termsById = fs.existsSync(termsFile) ? JSON.parse(fs.readFileSync(termsFile, 'utf8')) : {};
const templatesDir = path.join(LIBRARY, 'templates');
const ids = process.argv.slice(2).length ? process.argv.slice(2)
  : fs.readdirSync(templatesDir).filter(id => fs.existsSync(path.join(templatesDir, id, 'assets', 'page.js')));

let failed = 0;
for (const id of ids) {
  const terms = [...GLOBAL_TERMS, ...(termsById[id] || [])];
  try {
    execFileSync(process.execPath, [path.join(__dirname, 'dom-text.cjs'), id, '--terms', terms.join(','), '--out', path.join(require('os').tmpdir(), `dom-${id}.json`)], { stdio: 'pipe' });
    console.log(`clean ${id} (${terms.length} terms)`);
  } catch (error) {
    failed++;
    console.log(`HITS  ${id}\n${String(error.stdout).trim()}`);
  }
}
process.exit(failed ? 1 : 0);
