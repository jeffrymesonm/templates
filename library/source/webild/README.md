# Webild: material de referencia

Esta carpeta guarda solo **metadatos** del catálogo de Webild. No contiene su código ni sus imágenes, que no tienen
licencia de reutilización (ver `docs/LICENCIAS.md`).

- `catalog-nav.json`: los 63 templates del menú del catálogo (grupos Live y Paused, título, ruta y kit).
  Se extrajo el 2026-11-25 del bundle `assets/index-CEuECR5F.js` de https://webild-mcp-components.vercel.app/templates/.
- El inventario completo de las 150 rutas, con su clasificación y su estado, está en `catalog/webild-inventory.json`.

## Cómo se obtuvo

1. La página es una SPA de Vite, por lo que el HTML está vacío. El bundle principal define las rutas
   `/templates/<slug>` y les asigna un chunk `page-*.js` mediante `lazy(() => import(...))`.
2. Cada chunk `page-*.js` contiene la composición de la página: qué componentes de sección usa y con qué props
   (textos, imágenes de `storage.googleapis.com/webild/...`). Los componentes están compilados y minificados.
3. No hay sourcemaps (403) ni endpoint MCP o API (`/mcp` y `/api/mcp` responden 405 a POST).
