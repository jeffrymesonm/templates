# Proof of work

## 2026-11-25 · Creación de la biblioteca

**Pedido:** crear una biblioteca local de templates reutilizables a partir de `jeffrymesonm/templates` y del catálogo
de Webild. Había que quitar las marcas, documentar cada template, catalogarlo, resolver duplicados y licencias, y verificarlo.

**Hecho:**
- `source/github-templates/`: clon intacto (commit `a7e51c7`); `git status` vacío al terminar.
- `templates/`: 8 templates copiados y procesados.
  - Fotos y vídeos: 123 imágenes pasaron a placeholders SVG con las mismas medidas y el color medio de cada foto, y los 4 vídeos a degradados con la misma resolución y duración.
  - Textos: neutralizados en ES y EN, con datos de contacto de ejemplo.
  - Documentación: un README por template.
- Webild: inventario de las 150 rutas (`catalog/webild-inventory.json`), cada una con su tipo, sus secciones y su estado. No se incorporó ninguna, por falta de código fuente y de licencia (`docs/LICENCIAS.md`).
- Documentos y catálogo: `docs/` (convenciones, plantilla de README, duplicados, licencias) y `catalog/`, generado con `tools/build-catalog.cjs`.
- Herramientas en `tools/`: `make_placeholders.py`, `verify.cjs`, `interactions.cjs`, `check-brands.sh` y `build-catalog.cjs`.

**Verificación (local, Chrome 158):**
- Línea base con los originales: `verify.cjs` sobre `source/` dio 8/8 OK.
- Después del proceso: `verify.cjs` dio 8/8 OK a 375, 768 y 1440 px, sin errores de consola, sin 404 y sin scroll horizontal. Respondieron el mismo número de menús y acordeones que en los originales.
- `interactions.cjs`: 11/11 OK (idioma ES→EN en 4, filtro del menú, 4 sliders, 4 formularios). Tres formularios abren el correo; el de luxury está en modo demo.
- `check-brands.sh`: limpio (solo aparece `#08090a`, un color que el filtro excluye a mano).
- Revisión visual de capturas antes y después: el hero de los 8 y los elementos de riesgo (wordmarks ajustados al ancho, pie de luxury a 375 px, precios de seaside, preloader de vip).

**No hecho / pendiente:** reconstruir templates de Webild (lo decide el dueño) y confirmar la licencia del repo de origen.

## 2026-11-25 · Incorporación de los 55 templates de Webild

**Pedido:** el dueño ordenó entrar en cada template del catálogo de Webild y sacar su código o copiar su diseño.

**Hecho:**
- `tools/webild-extract.cjs`: captura cada página en vivo y guarda su build compilado. Parchea la entrada para montar solo esa página y el cargador para que funcione en cualquier subcarpeta. `page.js` queda como el archivo de contenido.
- `tools/webild_media.py`: placeholders locales con el mismo nombre, formato y medidas que el original.
  - Fotos y vídeos: sustituidos por placeholders.
  - Modelos 3D de marca (Porsche, casco, Ferrari): bloque neutro. Los modelos genéricos se conservan.
  - Tipografías, mapas de luz y sonidos: se copian.
- `tools/webild_rename_media.py`: nombres neutros, solo cuando es seguro. Los logos pasan a una forma lisa.
- `tools/webild_soften_cutouts.py`: siluetas de recortes irreconocibles.
- Decodificadores 3D (Draco, Basis) y una tipografía externa pasados a local.
- 55 templates neutralizados por agentes según `docs/NEUTRALIZAR-WEBILD.md`, con fichas completas. Los términos prohibidos de cada uno están en `source/webild/brand-terms.json`.
- Catálogo: 63 templates con categorías agrupadas. Inventario de Webild: 55 incorporados y 8 omitidos por duplicados.
- `tools/preview-server.cjs`: galería local en http://localhost:4321/.

**Verificación (local, Chrome 158):**
- `STRICT_EXTERNAL=1 tools/verify.cjs`: 63/63 OK a 375, 768 y 1440 px. Sin errores de consola, sin 404 y sin cargas externas salvo Google Fonts. Menús y acordeones probados.
- `tools/check-webild-brands.cjs`: 55/55 limpios en el texto y los atributos renderizados.
- `tools/check-brands.sh`: limpio para los 8 estáticos.

**Limitaciones conocidas:**
- En los de Webild, el interior de cada sección es código compilado, no editable.
- Algunos nombres de archivo de medios montados por código conservan nombres genéricos del original (por ejemplo `circuit-spa.webp`, `sf26.glb`).
- Los catálogos internos de Webild (`kit-*.js`, `index-*.js`) contienen nombres de otras demos que no se muestran en pantalla.
- Las tipografías propias tienen la licencia por verificar.
