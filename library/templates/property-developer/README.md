# Promotora inmobiliaria con skyline 3D (`property-developer`)

> Landing premium para lanzar una promoción de viviendas: hero con un skyline 3D entre nubes, tarjeta de vivienda destacada, galería con parallax y precios por tipo de vivienda.

| Campo | Valor |
|---|---|
| Identificador | `property-developer` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/property-developer (capturado el 2026-11-25) |
| Catálogo de origen | "Property Developer", grupo Paused, kit `zenith` |
| Categoría | inmobiliaria / promoción de obra nueva |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | promotoras inmobiliarias, lanzamientos de torres o residenciales de obra nueva, constructoras con venta sobre plano, comercializadoras de proyectos, residencias de lujo |
| Estilo | cinematográfico y sobrio, escena 3D con niebla, titulares finos y grandes con una parte atenuada, fotos amplias y mucho espacio en blanco |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave), Motion (Framer Motion) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Lexend, Playfair Display |
| Idiomas | en |
| Tamaño | 7.1 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Pantalla de carga con anillo y contador de progreso.
- Navegación transparente con botón de registro y menú desplegable.
- Hero con skyline 3D (Three.js) entre nubes, titular que entra palabra a palabra, dos botones y tarjeta de vivienda destacada con imagen y precio.
- Tres tipos de vivienda en un trío de imágenes con título y descripción.
- "Por qué elegirnos" en paneles apilados con imagen que se revela, número y botón.
- Galería de nueve imágenes con desplazamiento escalonado (parallax) y pies de foto.
- Precios en tres columnas por tipo de vivienda, con "desde", lista de lo incluido y botón.
- Preguntas frecuentes en tarjetas por parejas y formulario de registro sobre foto con selector de vivienda de interés.
- Pie con la marca en grande y cuatro columnas de enlaces.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- **Imágenes externas sustituidas (neutralización):** el original enlazaba 15 fotos de bancos externos (`img.b2bpic.net` y `images.pexels.com`, vía el helper `p()` de `page.js`) que el extractor no convirtió en placeholders. Ahora apuntan a placeholders que ya existían en `assets/media/` (los mismos que usan las secciones compiladas por defecto), así que algunas proporciones no coinciden con las fotos originales. El helper `p()` sigue definido en `page.js` pero ya no se usa. Ningún chunk compilado se modificó.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `LoaderRingCounter` | — | — |
| 2 | `NavbarClearLinks` | — | — |
| 3 | `HeroSkylineStage` | `#hero` | hero |
| 4 | `ServicesImageTrio` | `#services` | services |
| 5 | `AboutStackedPanels` | `#about` | about |
| 6 | `GalleryOffsetParallax` | `#gallery` | gallery |
| 7 | `PricingResidenceCards` | `#pricing` | pricing |
| 8 | `FaqPairedCards` | `#faq` | faq |
| 9 | `ContactPhotoForm` | `#contact` | contact |
| 10 | `FooterBrand` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-BX8QoMcX.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#faf8f5` |
| `--foreground` | `#1a1a1a` |
| `--card` | `#fff` |
| `--card-foreground` | `#1a1a1a` |
| `--popover` | `#fff` |
| `--popover-foreground` | `#1a1a1a` |
| `--primary` | `#1a1a1a` |
| `--primary-foreground` | `#faf8f5` |
| `--secondary` | `#f0ece6` |
| `--secondary-foreground` | `#1a1a1a` |
| `--muted` | `#e8e6e3` |
| `--muted-foreground` | `#686867` |
| `--accent` | `#c9a96e` |
| `--accent-foreground` | `#1a1a1a` |
| `--deep` | `#1a1a1a` |
| `--deep-foreground` | `#faf8f5` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#dfdddb` |
| `--input` | `#dfdddb` |
| `--ring` | `#1a1a1a` |
| `--tint-1` | `#8c8a86` |
| `--tint-2` | `#adaca7` |
| `--tint-3` | `#cecdc9` |
| `--heading-weight` | `300` |
| `--heading-tracking` | `-.02em` |
| `--heading-leading` | `1.08` |
| `--text-display` | `clamp(2.875rem, 2.6429rem + .952vw, 3.5rem)` |
| `--text-h1` | `clamp(2.875rem, 2.6429rem + .952vw, 3.5rem)` |
| `--text-h2` | `clamp(2.375rem, 2.1429rem + .952vw, 3rem)` |
| `--text-h3` | `clamp(1.625rem, 1.5321rem + .381vw, 1.875rem)` |
| `--text-body-lg` | `1.125rem` |
| `--text-body` | `1rem` |
| `--text-small` | `.875rem` |
| `--text-label` | `.875rem` |
| `--label-tracking` | `0em` |
| `--label-case` | `none` |
| `--gutter` | `clamp(1.5rem, -.729rem + 9.14vw, 7.5rem)` |
| `--max-w` | `1200px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(4.5rem, 3.9429rem + 2.286vw, 6rem)` |
| `--gap` | `clamp(1rem, -.7179rem + 7.048vw, 5.625rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.19, 1, .22, 1)` |
| `--ease-in-out` | `cubic-bezier(.52, 0, 0, 1)` |
| `--dur-fast` | `.3s` |
| `--dur-base` | `.7s` |
| `--dur-slow` | `1.2s` |
| `--reveal-distance` | `2rem` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Lexend", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/set-01/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-01/image-02.webp` | 1024×1024 (recorte con transparencia) |
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-02/image-01.webp` | 2304×1728 (recorte con transparencia) |
| `assets/media/set-02/image-02.webp` | 2048×1536 (recorte con transparencia) |
| `assets/media/set-02/image-03.webp` | 2048×1536 (recorte con transparencia) |
| `assets/media/set-02/image-04.webp` | 2048×1536 (recorte con transparencia) |
| `assets/media/set-03/image-01.webp` | 412×334 (recorte con transparencia) |
| `assets/media/set-03/image-02.webp` | 1448×1086 (recorte con transparencia) |
| `assets/media/set-04/image-01.webp` | 1254×1254 (recorte con transparencia) |
| `assets/media/set-04/image-02.webp` | 1254×1254 (recorte con transparencia) |
| `assets/media/set-04/image-03.webp` | 1254×1254 (recorte con transparencia) |
| `assets/media/set-04/image-04.webp` | 1254×1254 (recorte con transparencia) |
| `assets/media/set-04/image-05.webp` | 1254×1254 (recorte con transparencia) |
| `assets/media/set-05/image-01.webp` | 1368×2000 (recorte con transparencia) |
| `assets/media/set-05/image-02.webp` | 1368×2000 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
