/**
 * preview-server.cjs — Local server to browse the library while it is being built.
 *
 * http://localhost:4321/ lists every folder in templates/ (re-read on each visit, auto-refresh every 20 s)
 * with its origin and processing state; each card opens the template at /<id>/.
 * States: "extrayendo" (capture in progress), "con marca original" (README still has COMPLETAR markers),
 * "limpio" (neutralized, final check pending), "verificado" (README Estado row says Verificado).
 *
 * Usage: node tools/preview-server.cjs [port]
 */
const fs = require('fs');
const http = require('http');
const path = require('path');
const { serveFile, TEMPLATES_DIR } = require('./verify.cjs');

const PORT = Number(process.argv[2]) || 4321;
const STATES = {
  building: ['extrayendo', 'state-building'],
  branded: ['con marca original', 'state-branded'],
  clean: ['limpio, sin verificar', 'state-clean'],
  verified: ['verificado', 'state-verified'],
};

/**
 * Escape text for HTML output.
 * @param {string} text
 * @returns {string}
 */
function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

/**
 * Describe one template folder for the index.
 * @param {string} id - Folder name.
 * @returns {{id:string, name:string, origin:string, category:string, state:string}}
 */
function describe(id) {
  const folder = path.join(TEMPLATES_DIR, id);
  const isWebild = fs.existsSync(path.join(folder, 'assets', 'page.js')) || !fs.existsSync(path.join(folder, 'assets', 'css'));
  const readmePath = path.join(folder, 'README.md');
  const readme = fs.existsSync(readmePath) ? fs.readFileSync(readmePath, 'utf8') : '';
  const title = (readme.match(/^# (.+?) \(`/m) || [])[1] || '';
  const category = (readme.match(/^\| Categoría \| (.+) \|$/m) || [])[1] || '';
  let state = 'verified';
  if (!fs.existsSync(path.join(folder, 'index.html'))) state = 'building';
  else if (!readme || readme.includes('COMPLETAR')) state = 'branded';
  else if (!/\| Estado \| Verificado/.test(readme)) state = 'clean';
  return {
    id,
    name: title && !title.includes('COMPLETAR') ? title : id,
    origin: isWebild ? 'Webild · React compilado' : 'GitHub · HTML estático',
    category: category.includes('COMPLETAR') ? '' : category,
    state,
  };
}

/**
 * Build the index page HTML.
 * @returns {string}
 */
function indexPage() {
  const entries = fs.readdirSync(TEMPLATES_DIR, { withFileTypes: true }).filter(entry => entry.isDirectory()).map(entry => describe(entry.name));
  const counts = Object.fromEntries(Object.keys(STATES).map(state => [state, entries.filter(entry => entry.state === state).length]));
  const cards = entries.map(entry => `
      <a class="card" href="/${encodeURIComponent(entry.id)}/" target="_blank" rel="noopener">
        <span class="state ${STATES[entry.state][1]}">${STATES[entry.state][0]}</span>
        <strong>${escapeHtml(entry.name)}</strong>
        <code>${escapeHtml(entry.id)}</code>
        <span class="meta">${escapeHtml(entry.origin)}${entry.category ? ' · ' + escapeHtml(entry.category) : ''}</span>
      </a>`).join('');
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="refresh" content="20">
  <title>Web-Templates · vista previa</title>
  <link rel="icon" href="data:,">
  <style>
    :root { --bg: #f4f4f2; --card: #fff; --ink: #1d1d1f; --muted: #6b6b70; --line: #e2e2de;
            --building: #8a8a8f; --branded: #b45309; --clean: #1d4ed8; --verified: #15803d; }
    @media (prefers-color-scheme: dark) {
      :root { --bg: #151517; --card: #1f1f22; --ink: #f2f2f2; --muted: #a0a0a6; --line: #2e2e33; }
    }
    * { box-sizing: border-box; }
    body { margin: 0; background: var(--bg); color: var(--ink); font: 15px/1.45 system-ui, sans-serif; }
    main { max-width: 1200px; margin: 0 auto; padding: 32px 16px 64px; }
    h1 { margin: 0 0 4px; font-size: 26px; }
    p { margin: 0 0 24px; color: var(--muted); }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 12px; }
    .card { display: flex; flex-direction: column; gap: 6px; padding: 16px; background: var(--card); border: 1px solid var(--line);
            border-radius: 12px; color: inherit; text-decoration: none; transition: transform .15s, border-color .15s; }
    .card:hover { transform: translateY(-2px); border-color: var(--muted); }
    .card code { color: var(--muted); font-size: 12px; }
    .meta { color: var(--muted); font-size: 13px; }
    .state { align-self: flex-start; font-size: 12px; font-weight: 600; padding: 2px 8px; border-radius: 99px; color: #fff; }
    .state-building { background: var(--building); } .state-branded { background: var(--branded); }
    .state-clean { background: var(--clean); } .state-verified { background: var(--verified); }
  </style>
</head>
<body>
  <main>
    <h1>Web-Templates</h1>
    <p>${entries.length} templates · ${counts.verified} verificados · ${counts.clean} limpios sin verificar ·
       ${counts.branded} con marca original (en limpieza) · ${counts.building} extrayéndose. Se actualiza cada 20 s.</p>
    <div class="grid">${cards}</div>
  </main>
</body>
</html>`;
}

http.createServer((request, response) => {
  if (new URL(request.url, 'http://x').pathname === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    response.end(indexPage());
    return;
  }
  serveFile(request, response);
}).listen(PORT, '127.0.0.1', () => console.log(`Vista previa: http://localhost:${PORT}/`));
