# Artista musical: retrato con lentes, eras y polaroids (`music-artist`)

> Landing oscura y editorial para un artista musical: retrato en el hero con reflejo en las gafas, discografía como cartas doradas sobre un campo y muro de polaroids.

| Campo | Valor |
|---|---|
| Identificador | `music-artist` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/drake (capturado el 2026-11-25) |
| Catálogo de origen | "Music Artist", grupo Live, kit `jettas` |
| Categoría | Música y entretenimiento — artista / marca personal |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | Cantantes, raperos, DJ, bandas, productores, sellos discográficos y marcas personales de creadores |
| Estilo | Oscuro y cinematográfico, crema y dorado, titulares condensados enormes, texturas de papel y cuero, mucho movimiento al hacer scroll |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, League Gothic, Manrope, Mrs Saint Delafield, Playfair Display, Space Mono |
| Idiomas | en |
| Tamaño | 10.4 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Pantalla de carga con un emblema de tres piezas que se rellena con un porcentaje y da paso al hero.
- Hero con retrato en WebGL: profundidad que reacciona al ratón, gafas que reflejan un vídeo y firma manuscrita con el nombre (`signatureText`).
- Discografía ("Defining Eras") como cartas doradas en 3D sobre un campo con regla de años; cada carta abre su vídeo.
- Sección "Story" con titular que se deshace en puntos y tres polaroids que entran con el scroll.
- Proyectos paralelos ("Ventures") en un escenario fijo que cambia de imagen y texto con el scroll, con indicador de puntos.
- Bloque de causa/fundación con tira de fotos tipo acordeón.
- Marquesina infinita de polaroids con pie de foto y titular animado palabra a palabra.
- Pie con panel de cristal, menú, redes y trazo dibujado; menú a pantalla completa con letras inclinadas.
- Scroll suave con Lenis y textura de fondo tipo papel (pebble) en toda la página.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- **Neutralización (sin marca):** en `page.js` la carpeta de imágenes pasó de `assets/media/templates/<original>` (no
  existía y daba 404) a `assets/media`, y el emblema del original (dibujado con `path` SVG en las props `emblem` del
  loader, la navegación y el pie) se cambió por tres bloques neutros. Los años van como `20XX`: la regla de años de
  la galería (`syncYears`) solo muestra años reales de 4 cifras, así que queda vacía hasta que pongas los tuyos.
- **Chunks compilados parcheados** (solo literales y datos de `path`; el kit `jettas` traía por defecto textos de
  otro famoso):
  - `LoaderEmblemFill-BQFSg_mJ.js`: emblema por defecto → tres bloques neutros (y sus rangos de relleno); texto alternativo por defecto.
  - `NavbarSlantMenu-zs2hzytB.js`: emblema por defecto; marca, copyright, nota y crédito por defecto.
  - `FooterRecordPanel-DiDYDjUW.js`: emblema por defecto; el trazo dibujado sobre el titular → onda neutra; copyright, nota, crédito, alt y nombres de logos por defecto.
  - `HeroPortraitSignatureDepth-CfBCkkEM.js`: firma manuscrita dibujada (máscaras y rellenos SVG) → onda neutra; nombre, textos y alts por defecto.
  - `GalleryCardField-IWU2aIM_.js`, `AboutQuotePolaroids-B1SPr-_v.js`, `TestimonialPolaroidMarquee-DJbGo-0c.js`, `FeaturesPartnerStage-BhKTYT_o.js`: títulos, estadísticas, citas, pies de foto, alts y nombres de patrocinadores por defecto.
- **Pendiente (fuera de `page.js`):** los placeholders con transparencia conservan la silueta de la foto original
  (el retrato del hero y el recorte del pie muestran una silueta de persona). Las dos lentes doradas del hero son
  polígonos de `lensOutline` en `page.js`, trazados sobre la foto original: ajústalos a tu retrato. La carpeta
  `assets/media/set-01/` conserva el nombre del kit y la URL de la fila "Fuente", el del original.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `LoaderEmblemFill` | — | — |
| 2 | `NavbarSlantMenu` | — | navbar |
| 3 | `HeroPortraitSignatureDepth` | `#hero` | hero |
| 4 | `GalleryCardField` | `#gallery` | gallery |
| 5 | `AboutQuotePolaroids` | `#about` | about |
| 6 | `FeaturesPartnerStage` | `#services` | services |
| 7 | `CtaStripAccordionHold` | `#cta` | cta |
| 8 | `TestimonialPolaroidMarquee` | `#testimonial` | testimonial |
| 9 | `FooterRecordPanel` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-B5Oij75H.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#0f0d0a` |
| `--foreground` | `#f3ecdf` |
| `--card` | `#1d1913` |
| `--card-foreground` | `#f3ecdf` |
| `--popover` | `#0f0d0a` |
| `--popover-foreground` | `#f3ecdf` |
| `--primary` | `#f3ecdf` |
| `--primary-foreground` | `#0f0d0a` |
| `--secondary` | `#d1a23c` |
| `--secondary-foreground` | `#0f0d0a` |
| `--muted` | `#18150f` |
| `--muted-foreground` | `#b3a994` |
| `--accent` | `#d8b56a` |
| `--accent-foreground` | `#0f0d0a` |
| `--deep` | `#070605` |
| `--deep-foreground` | `#f3ecdf` |
| `--destructive` | `#e5484d` |
| `--destructive-foreground` | `#fff` |
| `--border` | `var(--foreground)` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"League Gothic", "Arial Narrow", Impact, sans-serif` |
| `--font-body` | `"Manrope", "Helvetica Neue", Helvetica, Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/concert-1-1600.webp` | 512×682 (recorte con transparencia) |
| `assets/media/concert-1-800.webp` | 512×682 (recorte con transparencia) |
| `assets/media/concert-2-1600.webp` | 512×682 (recorte con transparencia) |
| `assets/media/concert-2-800.webp` | 512×682 (recorte con transparencia) |
| `assets/media/concert-3-1600.webp` | 512×682 (recorte con transparencia) |
| `assets/media/concert-3-800.webp` | 512×682 (recorte con transparencia) |
| `assets/media/concert-4-1600.webp` | 512×682 (recorte con transparencia) |
| `assets/media/concert-4-800.webp` | 512×682 (recorte con transparencia) |
| `assets/media/concert-5-1600.webp` | 512×682 (recorte con transparencia) |
| `assets/media/concert-5-800.webp` | 512×682 (recorte con transparencia) |
| `assets/media/crowd-1600.webp` | 832×1108 (recorte con transparencia) |
| `assets/media/crowd-800.webp` | 800×1066 (recorte con transparencia) |
| `assets/media/cutout-1600.webp` | 1600×1544 (recorte con transparencia) |
| `assets/media/cutout-800.webp` | 800×772 (recorte con transparencia) |
| `assets/media/fire-1600.webp` | 896×1195 (recorte con transparencia) |
| `assets/media/fire-800.webp` | 800×1067 (recorte con transparencia) |
| `assets/media/hero-alpha-1600.webp` | 1880×1352 (recorte con transparencia) |
| `assets/media/hero-depth-1600.webp` | 1880×1352 (recorte con transparencia) |
| `assets/media/hero-diffuse-1600.webp` | 1880×1352 (recorte con transparencia) |
| `assets/media/hero-lens-1600.webp` | 1880×1352 (recorte con transparencia) |
| `assets/media/hero-portrait-mobile-1600.webp` | 900×647 (recorte con transparencia) |
| `assets/media/hero-portrait-mobile-800.webp` | 800×575 (recorte con transparencia) |
| `assets/media/hero-tint-1600.webp` | 1880×1352 (recorte con transparencia) |
| `assets/media/intro-1600.mp4` | vídeo 1920x1080, 17.2 s |
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/still-1-1600.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-1-800.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-2-1600.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-2-800.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-3-1600.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-3-800.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-4-1600.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-4-800.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-5-1600.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-5-800.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-6-1600.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-6-800.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-7-1600.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-7-800.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-8-1600.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-8-800.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-9-1600.webp` | 512×640 (recorte con transparencia) |
| `assets/media/still-9-800.webp` | 512×640 (recorte con transparencia) |
| `assets/media/set-01/video-01-1600.mp4` | vídeo 1920x1080, 43.0 s |
| `assets/media/set-01/image-01-1600.webp` | 1160×1600 (recorte con transparencia) |
| `assets/media/set-01/image-01-800.webp` | 580×800 (recorte con transparencia) |
| `assets/media/set-01/image-02-1600.webp` | 1160×1600 (recorte con transparencia) |
| `assets/media/set-01/image-02-800.webp` | 580×800 (recorte con transparencia) |
| `assets/media/set-01/image-03-1600.webp` | 1160×1600 (recorte con transparencia) |
| `assets/media/set-01/image-03-800.webp` | 580×800 (recorte con transparencia) |
| `assets/media/set-01/tex-grass-1600.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-01/tex-leather-1600.webp` | 844×844 (recorte con transparencia) |
| `assets/media/set-01/tex-light-01-1600.webp` | 2880×1620 (recorte con transparencia) |
| `assets/media/set-01/tex-light-03-1600.webp` | 1440×810 (recorte con transparencia) |
| `assets/media/set-01/tex-paper-grain-1600.webp` | 1024×1024 (recorte con transparencia) |
| `assets/media/set-01/tex-pebble-1600.webp` | 844×844 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
