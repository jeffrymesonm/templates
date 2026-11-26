"""
webild_readme.py — Generate the README of a template extracted from Webild.

Fills everything that can be read from the files: sections (in page order, from assets/page.js), palette and
font variables (the :root block of assets/theme-*.css), Google Fonts, JS libraries bundled, placeholder media
with sizes, and the licence notice. Descriptive fields are left as <!-- COMPLETAR: ... --> markers.

Usage: python -I tools/webild_readme.py <templateDir> <capture.json> <catalogInventory.json>
"""
import json
import re
import subprocess
import sys
from datetime import date
from pathlib import Path
from PIL import Image

LIBRARY_HINTS = {'three.module': 'Three.js', 'react-three-fiber': 'React Three Fiber', 'lenis': 'Lenis (scroll suave)',
                 'gsap': 'GSAP', 'use-motion-template': 'Motion (Framer Motion)', 'ogl': 'OGL (WebGL)'}


def sections(page_code):
    """Return [(order, component, wrapper id, data-section)] in render order."""
    imports = {}
    for match in re.finditer(r'import\s+(?:\{\s*t\s+as\s+(\w+)\s*\}|(\w+))\s+from\s+"\./([A-Z]\w+)-[\w-]+\.js"', page_code):
        imports[match.group(1) or match.group(2)] = match.group(3)
    rows = []
    for match in re.finditer(r'\(0,\s*\w+\.jsxs?\)\(\s*([A-Za-z_$][\w$]*)\s*,', page_code):
        component = imports.get(match.group(1))
        if not component or component in {'SmoothScroll'}:
            continue
        context = page_code[max(0, match.start() - 260):match.start()]
        wrapper_id = (re.findall(r'\bid:\s*`([^`]+)`', context) or [''])[-1]
        data_section = (re.findall(r'"data-section":\s*`([^`]+)`', context) or [''])[-1]
        rows.append((len(rows) + 1, component, wrapper_id, data_section))
    return rows


def palette(assets):
    """Return (theme file name, {variable: value}) for the template's :root palette."""
    for css in sorted(assets.glob('theme-*.css')):
        block = re.search(r':root\{(--background:[^}]+)\}', css.read_text(encoding='utf-8', errors='ignore'))
        if block:
            variables = dict(re.findall(r'(--[\w-]+):([^;]+)', block.group(1)))
            return css.name, variables
    return None, {}


def google_fonts(template_dir):
    """Google Fonts families requested by the theme CSS (the index.html ones are the library's defaults)."""
    families = set()
    sources = [*(template_dir / 'assets').glob('theme-*.css'), template_dir / 'index.html']
    for source in sources:
        for query in re.findall(r'fonts\.googleapis\.com/css2\?([^")\']+)', source.read_text(encoding='utf-8', errors='ignore')):
            families.update(family.split(':')[0].replace('+', ' ') for family in re.findall(r'family=([^&]+)', query))
    return sorted(families)


def media_rows(template_dir):
    """(path, size/kind) for every local placeholder media file."""
    rows = []
    for file in sorted((template_dir / 'assets' / 'media').rglob('*')):
        if not file.is_file():
            continue
        relative = file.relative_to(template_dir).as_posix()
        suffix = file.suffix.lower()
        if suffix in ('.webp', '.png', '.jpg', '.jpeg'):
            with Image.open(file) as image:
                detail = f'{image.width}×{image.height}' + (' (recorte con transparencia)' if image.mode in ('RGBA', 'LA') and image.getextrema()[3][0] < 250 else '')
        elif suffix in ('.mp4', '.webm', '.mov'):
            probe = subprocess.run(['ffprobe', '-v', 'error', '-select_streams', 'v:0', '-show_entries',
                                    'stream=width,height:format=duration', '-of', 'csv=p=0:s=x', str(file)],
                                   capture_output=True, text=True).stdout.split()
            detail = f'vídeo {probe[0] if probe else "?"}, {float(probe[1]) if len(probe) > 1 else 0:.1f} s'
        elif suffix in ('.otf', '.ttf', '.woff', '.woff2'):
            detail = 'tipografía propia del diseño: **licencia por verificar antes de publicar**'
        elif suffix in ('.exr', '.hdr', '.ktx2'):
            detail = 'mapa de iluminación 3D genérico (sin marca)'
        elif suffix in ('.m4a', '.mp3', '.wav', '.ogg'):
            detail = 'sonido de interfaz genérico'
        elif suffix == '.glb':
            detail = 'modelo 3D ' + ('de ejemplo (bloque neutro)' if file.stat().st_size < 4096 else 'genérico (sin marca)')
        else:
            detail = suffix
        rows.append((relative, detail))
    return rows


def main():
    """Write README.md for one extracted template."""
    template_dir = Path(sys.argv[1])
    capture = json.loads(Path(sys.argv[2]).read_text(encoding='utf-8'))
    inventory = {row['slug']: row for row in json.loads(Path(sys.argv[3]).read_text(encoding='utf-8'))}
    slug, template_id = capture['slug'], template_dir.name
    entry = inventory.get(slug, {})
    assets = template_dir / 'assets'
    page_rows = sections((assets / 'page.js').read_text(encoding='utf-8'))
    theme_file, variables = palette(assets)
    names = ' '.join(file.name for file in assets.iterdir())
    libraries = ['React 19 (compilado)'] + [label for hint, label in LIBRARY_HINTS.items() if hint in names]
    fonts = google_fonts(template_dir)
    size_mb = sum(file.stat().st_size for file in template_dir.rglob('*') if file.is_file()) / 1e6
    color_rows = '\n'.join(f'| `{name}` | `{value}` |' for name, value in variables.items()
                           if not name.startswith('--font') and not name.startswith('--radius') and not name.startswith('--height'))
    font_variables = {name: value for name, value in variables.items() if name.startswith('--font')}
    if not font_variables:  # some themes declare fonts in a separate block
        for css in assets.glob('theme-*.css'):
            font_variables.update(re.findall(r'(--font-(?:heading|body|display))\s*:\s*([^;}]+)', css.read_text(encoding='utf-8', errors='ignore')))
    font_rows = '\n'.join(f'| `{name}` | `{value}` |' for name, value in font_variables.items()) or '| — | (tipografía por defecto del tema) |'
    section_rows = '\n'.join(f'| {order} | `{component}` | {("`#" + wrapper_id + "`") if wrapper_id else "—"} | {data_section or "—"} |'
                             for order, component, wrapper_id, data_section in page_rows)
    media_table = '\n'.join(f'| `{path}` | {detail} |' for path, detail in media_rows(template_dir))
    readme = f"""# <!-- COMPLETAR: nombre descriptivo en español --> (`{template_id}`)

> <!-- COMPLETAR: una frase: qué tipo de web es y qué la hace especial -->

| Campo | Valor |
|---|---|
| Identificador | `{template_id}` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/{slug} (capturado el {date.today().isoformat()}) |
| Catálogo de origen | "{entry.get('title') or '—'}", grupo {entry.get('catalogGroup') or '—'}{', kit `' + entry['kit'] + '`' if entry.get('kit') else ''} |
| Categoría | <!-- COMPLETAR --> |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | <!-- COMPLETAR --> |
| Estilo | <!-- COMPLETAR --> |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | {', '.join(libraries)} — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: {', '.join(fonts) or '—'} |
| Idiomas | en |
| Tamaño | {size_mb:.1f} MB |
| Estado | Pendiente de verificación |

## Características visuales y funcionales

<!-- COMPLETAR: 5-9 viñetas -->

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, {{ ...props }})`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
{section_rows}

Para quitar una sección, borra su llamada en `assets/page.js`. Para moverla, mueve la llamada completa. Para
reutilizarla en otra página, impórtala igual que el resto y pásale las mismas props.

## Instalar y ejecutar

No hay dependencias que instalar ni build. Necesita un servidor HTTP, porque los módulos ES no cargan desde `file://`:

```bash
npx serve .          # o: python -m http.server 8000
```

## Personalización

| Qué | Dónde |
|---|---|
| Marca, textos, enlaces, contacto | `assets/page.js` (busca `Your Brand`, `hello@example.com`, `+00 000 000 0000`) |
| Título de la pestaña | `<title>` en `index.html` |
| Colores y tipografías | bloque `:root{{--background:…}}` en `assets/{theme_file or 'theme-*.css'}` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
{color_rows}

Tipografías:

| Variable | Valor |
|---|---|
{font_rows}

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
{media_table}

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
"""
    (template_dir / 'README.md').write_text(readme, encoding='utf-8')
    print(f'{template_id}: README with {len(page_rows)} sections, {len(variables)} variables, {len(fonts)} fonts')


if __name__ == '__main__':
    main()
