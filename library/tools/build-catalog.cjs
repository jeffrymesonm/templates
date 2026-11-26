/**
 * build-catalog.cjs — Regenerate catalog/templates.json and catalog/README.md.
 *
 * Reads the metadata table, feature bullets and sections table of every templates/<id>/README.md,
 * plus catalog/webild-inventory.json (status of every Webild route), and writes a searchable index
 * by category, technology, style, business type and feature. Run after adding or editing a template:
 *   node tools/build-catalog.cjs
 */
const fs = require('fs');
const path = require('path');

const LIBRARY_DIR = path.resolve(__dirname, '..');
const TEMPLATES_DIR = path.join(LIBRARY_DIR, 'templates');
const CATALOG_DIR = path.join(LIBRARY_DIR, 'catalog');

/**
 * Split a comma-separated README cell into trimmed, lowercase tags.
 * @param {string} cell - Table cell text.
 * @returns {string[]} Tags.
 */
function toTags(cell) {
  return (cell || '').split(/,(?![^(]*\))/).map(tag => tag.replace(/`/g, '').trim().toLowerCase()).filter(Boolean);
}

/**
 * Parse one template README into a catalog entry.
 * @param {string} id - Template folder name.
 * @returns {object} Catalog entry.
 */
function parseTemplate(id) {
  const readme = fs.readFileSync(path.join(TEMPLATES_DIR, id, 'README.md'), 'utf8');
  const field = name => {
    const match = readme.match(new RegExp(`^\\| ${name}[^|]* \\| (.+) \\|$`, 'm'));
    if (!match) throw new Error(`${id}/README.md: missing "${name}" row`);
    return match[1].trim();
  };
  const featureBlock = readme.split('## Características visuales y funcionales')[1]?.split('\n## ')[0] || '';
  const sectionBlock = readme.split('## Secciones')[1]?.split('\n## ')[0] || '';
  const sections = [...sectionBlock.matchAll(/^\| \d+ \| ([^|]+) \|/gm)].map(match => match[1].trim());
  const fonts = (field('Dependencias').match(/Google Fonts: ([^.|]+)/) || [])[1] || '';
  const framework = field('Framework');
  const libraries = readme.match(/^\| Librerías incluidas \| (.+?) — /m)?.[1] || '';
  // Two kinds of template: hand-written static HTML, or a compiled React build extracted from Webild.
  const technology = /React/.test(framework)
    ? ['react (build compilado)', 'vite', 'tailwind css', 'javascript', ...libraries.split(', ').filter(name => !/^React/.test(name)).map(name => name.toLowerCase())]
    : ['html', 'css', 'javascript', 'sin build'];
  return {
    id,
    name: readme.match(/^# (.+?) \(`/m)?.[1] || id,
    summary: readme.match(/^> (.+)$/m)?.[1] || '',
    path: `templates/${id}`,
    category: field('Categoría'),
    categoryGroup: categoryGroup(`${id} ${field('Categoría')}`),
    businesses: toTags(field('Negocios a los que sirve')),
    style: toTags(field('Estilo')),
    technology,
    source: /Webild —/.test(field('Fuente')) ? 'webild' : 'github-templates',
    fonts: fonts.split(/,(?![^(]*\))/).map(font => font.replace(/\(.*?\)/g, '').trim()).filter(Boolean),
    languages: field('Idiomas').replace(/`/g, ''),
    designReference: (/\| Diseño de referencia \|/.test(readme) ? field('Diseño de referencia') : field('Catálogo de origen')).replace(/`/g, ''),
    features: [...featureBlock.matchAll(/^- (.+)$/gm)].map(match => match[1].trim()),
    sections,
    status: field('Estado').replace(/`/g, ''),
  };
}

/**
 * Group template ids by each value of a list-valued key.
 * @returns {Map<string, string[]>} value -> ids.
 */
function indexBy(entries, pick) {
  const index = new Map();
  for (const entry of entries) for (const value of [].concat(pick(entry))) {
    if (!index.has(value)) index.set(value, []);
    index.get(value).push(entry.id);
  }
  return new Map([...index].sort(([a], [b]) => a.localeCompare(b, 'es')));
}

// Free-text categories differ per README; this fixed list groups them for the index (first match wins).
const CATEGORY_GROUPS = [
  ['Marca personal', /artist|athlete|driver|blogger|personal|portfolio|creative-portfolio|deportista|artista|piloto/i],
  ['Automoción', /auto-|detailing|sports-car|automoci|coche/i],
  ['Transporte', /transport|logistic|transporte/i],
  ['Restauración y bebidas', /burger|cafe|coffee|matcha|brunch|restaur|cafeter|vita-lenta|soda|bebida/i],
  ['Hoteles y viajes', /hotel|travel|viaje|turismo|alojamiento/i],
  ['Inmobiliaria', /real-estate|property|inmobili|promotor/i],
  ['Salud, belleza y bienestar', /spa|dental|medical|clinic|wellness|skincare|salud|bienestar|estétic|gym|gimnas/i],
  ['Tecnología y SaaS', /saas|software|\bai-|email-platform|ugc|tecnolog|inteligencia artificial/i],
  ['Hogar, construcción y oficios', /plumb|roof|clean|construction|landscap|solar|hvac|fontaner|tejad|limpieza|paisaj|climatiz|construcc/i],
  ['Agencias y estudios', /agency|studio|marketing|photography|designer|agencia|estudio|fotograf/i],
  ['Servicios profesionales', /law|financial|accounting|consult|legal|finanz|contab|consultor/i],
  ['Marcas y tiendas', /brand|store|jewel|watch|perfume|supplement|clothing|product|tienda|moda|joyer|reloj/i],
];
const categoryGroup = text => (CATEGORY_GROUPS.find(([, pattern]) => pattern.test(text)) || ['Otros'])[0];

const link = id => `[\`${id}\`](../templates/${id}/README.md)`;
const indexTable = (title, index) => [`### ${title}`, '', '| Valor | Templates |', '|---|---|',
  ...[...index].map(([value, ids]) => `| ${value} | ${ids.map(link).join(', ')} |`), ''].join('\n');

const ids = fs.readdirSync(TEMPLATES_DIR).filter(name => fs.existsSync(path.join(TEMPLATES_DIR, name, 'README.md'))).sort();
const entries = ids.map(parseTemplate);
fs.writeFileSync(path.join(CATALOG_DIR, 'templates.json'), JSON.stringify(entries, null, 2) + '\n');

const webild = JSON.parse(fs.readFileSync(path.join(CATALOG_DIR, 'webild-inventory.json'), 'utf8'));
const count = (rows, key) => rows.reduce((totals, row) => ({ ...totals, [row[key]]: (totals[row[key]] || 0) + 1 }), {});
const webildRows = webild.map(row => `| \`${row.slug}\` | ${row.title || '—'} | ${row.catalogGroup || '—'} | ${row.type} | ${row.demoBrand || '—'} | ${row.status} | ${row.reason} |`);

const markdown = `# Catálogo de templates

> Generado por \`tools/build-catalog.cjs\` a partir de los README de cada template y de \`webild-inventory.json\`. No editar a mano.

## Templates disponibles (${entries.length})

| Template | Origen | Categoría | Estilo (resumen) | Idiomas | Secciones |
|---|---|---|---|---|---|
${entries.map(entry => `| ${link(entry.id)} — ${entry.name} | ${entry.source} | ${entry.category} | ${entry.style.slice(0, 3).join(', ')} | ${entry.languages.split(' (')[0]} | ${entry.sections.length} |`).join('\n')}

Dos tipos: **HTML estático** (origen \`github-templates\`: HTML + CSS + JS escritos a mano, sin build) y **build compilado de React** (origen \`webild\`: el contenido se edita en \`assets/page.js\`, necesita servidor HTTP). Única dependencia externa: Google Fonts. Ver \`templates.json\` para los datos completos.

## Índices

${indexTable('Por categoría', indexBy(entries, entry => entry.categoryGroup))}
${indexTable('Por tipo de negocio', indexBy(entries, entry => entry.businesses))}
${indexTable('Por estilo', indexBy(entries, entry => entry.style))}
${indexTable('Por origen', indexBy(entries, entry => entry.source))}
${indexTable('Por tecnología', indexBy(entries, entry => entry.technology))}
${indexTable('Por tipografía', indexBy(entries, entry => entry.fonts))}

### Por características

${entries.map(entry => `**${link(entry.id)}**\n\n${entry.features.map(feature => `- ${feature}`).join('\n')}\n`).join('\n')}

## Inventario de Webild (${webild.length} rutas)

Fuente: https://webild-mcp-components.vercel.app/templates/ — por tipo: ${JSON.stringify(count(webild, 'type'))}; por estado: ${JSON.stringify(count(webild, 'status'))}.
Motivos y decisión pendiente: \`docs/LICENCIAS.md\` y \`docs/DUPLICADOS.md\`.

| Ruta | Título en catálogo | Grupo | Tipo | Marca demo | Estado | Motivo |
|---|---|---|---|---|---|---|
${webildRows.join('\n')}
`;
fs.writeFileSync(path.join(CATALOG_DIR, 'README.md'), markdown);
console.log(`catalog: ${entries.length} templates, ${webild.length} Webild routes`);
