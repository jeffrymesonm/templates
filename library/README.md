# Web-Templates — biblioteca local de templates web

Templates de una página, sin marca, listos para adaptarlos a un negocio nuevo. Cada uno conserva el diseño, las
animaciones y las interacciones del original; los textos, las imágenes y los datos de contacto son valores de
ejemplo fáciles de reemplazar.

- **Qué hay:** 63 templates. Índice por categoría, negocio, estilo, tecnología y características en
  [`catalog/README.md`](catalog/README.md).
  - 8 en **HTML estático** (origen `jeffrymesonm/templates`): todo el código es editable.
  - 55 **builds compilados de React** extraídos de Webild: el contenido se edita en `assets/page.js`.
- **Reglas comunes:** [`docs/CONVENCIONES.md`](docs/CONVENCIONES.md).
- **Antes de usar uno con un cliente:** lee [`docs/LICENCIAS.md`](docs/LICENCIAS.md). Ninguna fuente concede licencia,
  y los de Webild son código de Webild copiado para uso interno.
- **Para verlos todos:** `node tools/preview-server.cjs` → http://localhost:4321/

## Estructura

```
Web-Templates/
├── README.md, PROOF_OF_WORK.md
├── catalog/
│   ├── README.md               # índice (generado por tools/build-catalog.cjs)
│   ├── templates.json          # mismos datos en JSON (generado)
│   └── webild-inventory.json   # las 150 rutas de Webild: tipo, secciones, estado y motivo
├── docs/
│   ├── CONVENCIONES.md         # dos tipos de template, estructura, valores de ejemplo, placeholders
│   ├── NEUTRALIZAR-WEBILD.md   # cómo quitar la marca a un template extraído de Webild
│   ├── PLANTILLA-README.md     # ficha de los templates estáticos
│   ├── DUPLICADOS.md           # equivalencias y decisiones
│   └── LICENCIAS.md            # situación legal y decisión del dueño
├── source/
│   ├── github-templates/       # clon intacto de https://github.com/jeffrymesonm/templates (commit a7e51c7; no se sube al repo: es el propio repo)
│   └── webild/                 # metadatos: lista del catálogo, capturas (captures/), términos prohibidos, registros
├── templates/<id>/             # un template por carpeta, independiente, con su README
└── tools/                      # ver tabla
```

| Herramienta | Para qué |
|---|---|
| `preview-server.cjs` | Galería local de todos los templates con su estado |
| `verify.cjs` | Chrome a 375/768/1440: consola, 404, desbordes, imágenes rotas, menús y acordeones. `STRICT_EXTERNAL=1` marca cualquier carga externa salvo Google Fonts |
| `interactions.cjs` | Idioma, filtros, sliders y formularios de los templates estáticos |
| `check-brands.sh` | Marcas y datos reales en los templates estáticos (búsqueda en archivos) |
| `check-webild-brands.cjs` + `dom-text.cjs` | Marcas en los templates de Webild, buscadas en el texto que se ve en pantalla (`source/webild/brand-terms.json`) |
| `perf.cjs` | Consumo de CPU en reposo y al hacer scroll, FPS, WebGL y peso: sirve para priorizar optimizaciones |
| `perf-guard.js` + `webild_perf_guard.py` + `perf-guard.test.cjs` | Módulo de rendimiento (modo ligero automático en móviles modestos, 30 fps y resolución limitada en táctil). **Preparado pero no instalado**: la optimización se detuvo el 2026-11-26 por decisión del dueño. Para retomarla: `python -I tools/webild_perf_guard.py templates/<id>` y verificar con `MODEST_TOUCH=1 node tools/verify.cjs` |
| `perf-profile.cjs`, `compare-live.cjs` | Perfil de CPU de un template en reposo; geometría por sección frente a la web en vivo de Webild |
| `webild-build.sh` | Extrae un template de Webild completo: captura, medios, nombres neutros, siluetas y README |
| `make_placeholders.py` | Placeholders para templates estáticos |
| `build-catalog.cjs` | Regenera el catálogo |

## Usar un template

```bash
cp -r templates/<id> ../mi-cliente      # trabaja siempre sobre una copia
cd ../mi-cliente && npx serve .         # o: python -m http.server 8000 (los de Webild necesitan servidor)
```

Después sigue la sección "Personalización" de su README.

## Mantener la biblioteca

```bash
cd tools && npm install                 # una vez: Playwright y Prettier (usa el Google Chrome instalado)
cd .. && STRICT_EXTERNAL=1 node tools/verify.cjs   # todos; o: node tools/verify.cjs <id>
node tools/interactions.cjs
bash tools/check-brands.sh              # estáticos: debe terminar con "check-brands: clean"
node tools/check-webild-brands.cjs      # Webild: todos "clean"
node tools/build-catalog.cjs            # tras añadir o editar un template
```

Añadir un template de Webild: añade la línea a `source/webild/build-list.tsv`, ejecuta
`bash tools/webild-build.sh <slug> <id>` y sigue `docs/NEUTRALIZAR-WEBILD.md`.
