# Deportista profesional: cartas doradas, patrocinios y fundación (`pro-athlete`)

> Landing editorial para un deportista profesional: retrato en el hero con firma dibujada, momentos de su carrera como cartas coleccionables sobre un campo y escenario de patrocinadores.

| Campo | Valor |
|---|---|
| Identificador | `pro-athlete` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/jettas (capturado el 2026-11-25) |
| Catálogo de origen | "Pro Athlete", grupo Paused, kit `jettas` |
| Categoría | Deporte — atleta / marca personal |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | Deportistas profesionales y universitarios, agencias de representación, fundaciones de deportistas, creadores del mundo del deporte |
| Estilo | Editorial y de estadio: crema, morado oscuro y dorado, titulares condensados enormes, cartas brillantes en 3D, mucho movimiento al hacer scroll |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: DM Mono, Geist, Inter, Inter Tight, League Gothic, Playfair Display |
| Idiomas | en |
| Tamaño | 39.5 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Intro con vídeo y emblema de tres piezas que se rellena con porcentaje antes de mostrar la página.
- Hero con retrato en WebGL (profundidad que reacciona al ratón, reflejo en las gafas), carta de novato flotante y firma que se dibuja sola.
- "Signature Moments": momentos de la carrera como cartas doradas en 3D sobre un campo con yardas; cada carta abre su vídeo.
- Cita personal con titular que se deshace en puntos y tres polaroids.
- Patrocinios en un escenario fijo: el producto o la foto de cada marca cambia con el scroll, con indicador de puntos.
- Fundación con tira de fotos tipo acordeón y botón "Learn more".
- Marquesina infinita de polaroids con pie de foto y titular animado palabra a palabra.
- Pie con panel de cristal, menú, redes, trazo dibujado y franja de logos de patrocinadores (vacía por defecto); menú a pantalla completa con sonidos de interfaz.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- **Neutralización (sin marca):** en `page.js`, `logos` (patrocinios y pie) quedó como `[]` y `lensLogoSrc` como
  cadena vacía: los placeholders de esos logos conservan la silueta del logotipo real. Para mostrar la franja de
  logos, pon de nuevo una lista `{ src, alt }` (patrocinios) o `{ imageSrc, imageAlt }` (pie) con tus logos.
- **Chunks compilados parcheados** (solo literales y datos de `path`):
  - `LoaderEmblemFill-BQFSg_mJ.js`: emblema por defecto (se ve en la intro) → tres bloques neutros, con sus rangos de relleno; texto alternativo por defecto.
  - `NavbarSlantMenu-zs2hzytB.js`: emblema por defecto (se ve en la navegación); marca, copyright, nota y crédito por defecto.
  - `FooterRecordPanel-DiDYDjUW.js`: emblema por defecto; el trazo dibujado sobre el titular → onda neutra; copyright, nota, crédito, alt y nombres de logos por defecto.
  - `HeroPortraitSignature-v1gHndD8.js`: la firma manuscrita dibujada (máscaras y rellenos SVG) → onda neutra; nombre, textos y alts por defecto.
  - `CtaStripAccordion-DlvBUUjW.js`, `GalleryCardField-IWU2aIM_.js`, `AboutQuotePolaroids-B1SPr-_v.js`, `TestimonialPolaroidMarquee-DJbGo-0c.js`, `FeaturesPartnerStage-BhKTYT_o.js`: nombre de la fundación, títulos, estadísticas, citas, pies de foto, alts y nombres de patrocinadores por defecto.
- **Pendiente (fuera de `page.js`):** varios archivos de `assets/media/` aún llevan nombres del original
  (`sig-*`, `gatorade-*`, `partner-*`, `logo-*`, `gallery-paris-*`, `foundation-griddy-*`…) y los placeholders con
  transparencia conservan la silueta original (casco, bota, auriculares, retrato). La URL de la fila "Fuente" conserva el nombre del kit.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `LoaderEmblemFill` | — | — |
| 2 | `NavbarSlantMenu` | — | — |
| 3 | `HeroPortraitSignature` | `#hero` | hero |
| 4 | `GalleryCardField` | `#gallery` | gallery |
| 5 | `AboutQuotePolaroids` | `#about` | about |
| 6 | `FeaturesPartnerStage` | `#services` | services |
| 7 | `CtaStripAccordion` | `#cta` | cta |
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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-BqOiOaD6.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#171220` |
| `--foreground` | `#f4efe6` |
| `--card` | `#251c34` |
| `--card-foreground` | `#f4efe6` |
| `--popover` | `#171220` |
| `--popover-foreground` | `#f4efe6` |
| `--primary` | `#f4efe6` |
| `--primary-foreground` | `#171220` |
| `--secondary` | `#eeac1a` |
| `--secondary-foreground` | `#171220` |
| `--muted` | `#1e1a2a` |
| `--muted-foreground` | `#b0a89d` |
| `--accent` | `#9e6de9` |
| `--accent-foreground` | `#171220` |
| `--deep` | `#0b0a0f` |
| `--deep-foreground` | `#f4efe6` |
| `--destructive` | `#e5484d` |
| `--destructive-foreground` | `#fff` |
| `--border` | `var(--foreground)` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"League Gothic", "Arial Narrow", Impact, sans-serif` |
| `--font-body` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×1351 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×675 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1216×1600 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 608×800 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×533 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1281×1600 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 640×800 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1281×1600 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 640×800 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1024 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×512 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1280×1600 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 640×800 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1208×1600 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 604×800 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1067×1600 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 533×800 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1067×1600 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 533×800 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×533 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1067×1600 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 533×800 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1067×1600 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 533×800 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1067×1600 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 533×800 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1200×1600 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 600×800 (recorte con transparencia) |
| `assets/media/image-16-1600.webp` | 1067×1600 (recorte con transparencia) |
| `assets/media/image-16-800.webp` | 533×800 (recorte con transparencia) |
| `assets/media/image-17-1600.webp` | 1067×1600 (recorte con transparencia) |
| `assets/media/image-17-800.webp` | 533×800 (recorte con transparencia) |
| `assets/media/image-18-1600.webp` | 1080×1295 (recorte con transparencia) |
| `assets/media/image-18-800.webp` | 667×800 (recorte con transparencia) |
| `assets/media/image-19-1600.webp` | 1200×1600 (recorte con transparencia) |
| `assets/media/image-19-800.webp` | 600×800 (recorte con transparencia) |
| `assets/media/image-20-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-20-800.webp` | 800×533 (recorte con transparencia) |
| `assets/media/image-21-1600.webp` | 1067×1600 (recorte con transparencia) |
| `assets/media/image-21-800.webp` | 533×800 (recorte con transparencia) |
| `assets/media/image-22-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-22-800.webp` | 800×533 (recorte con transparencia) |
| `assets/media/image-23-1600.webp` | 1208×1510 (recorte con transparencia) |
| `assets/media/image-23-800.webp` | 640×800 (recorte con transparencia) |
| `assets/media/image-24-1600.webp` | 1134×1420 (recorte con transparencia) |
| `assets/media/image-24-800.webp` | 639×800 (recorte con transparencia) |
| `assets/media/image-25-1600.webp` | 1134×1420 (recorte con transparencia) |
| `assets/media/image-25-800.webp` | 639×800 (recorte con transparencia) |
| `assets/media/image-26-1600.webp` | 2432×1750 (recorte con transparencia) |
| `assets/media/image-27-1600.webp` | 2432×1750 (recorte con transparencia) |
| `assets/media/image-28-1600.webp` | 2432×1750 (recorte con transparencia) |
| `assets/media/image-29-1600.webp` | 900×648 (recorte con transparencia) |
| `assets/media/image-29-800.webp` | 800×576 (recorte con transparencia) |
| `assets/media/image-30-1600.webp` | 2432×1750 (recorte con transparencia) |
| `assets/media/hero-shades-logo-1600.webp` | 2432×1750 (recorte con transparencia) |
| `assets/media/image-31-1600.webp` | 2432×1750 (recorte con transparencia) |
| `assets/media/video-01-1600.mp4` | vídeo 1920x1080, 43.0 s |
| `assets/media/logo-abercrombie-800.webp` | 738×270 (recorte con transparencia) |
| `assets/media/logo-beats-800.webp` | 480×480 (recorte con transparencia) |
| `assets/media/logo-ea-sports-800.webp` | 480×333 (recorte con transparencia) |
| `assets/media/logo-gatorade-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/logo-general-mills-800.webp` | 480×408 (recorte con transparencia) |
| `assets/media/logo-little-caesars-800.webp` | 776×195 (recorte con transparencia) |
| `assets/media/logo-lowes-800.webp` | 480×211 (recorte con transparencia) |
| `assets/media/logo-oakley-800.webp` | 480×254 (recorte con transparencia) |
| `assets/media/logo-pepsi-800.webp` | 800×798 (recorte con transparencia) |
| `assets/media/logo-raising-canes-800.webp` | 360×361 (recorte con transparencia) |
| `assets/media/logo-sleep-number-800.webp` | 800×131 (recorte con transparencia) |
| `assets/media/logo-under-armour-800.webp` | 480×304 (recorte con transparencia) |
| `assets/media/logo-us-bank-800.webp` | 480×121 (recorte con transparencia) |
| `assets/media/image-32-1600.webp` | 1039×1514 (recorte con transparencia) |
| `assets/media/image-32-800.webp` | 549×800 (recorte con transparencia) |
| `assets/media/image-33-1600.webp` | 1036×1519 (recorte con transparencia) |
| `assets/media/image-33-800.webp` | 546×800 (recorte con transparencia) |
| `assets/media/image-34-1600.webp` | 1023×1537 (recorte con transparencia) |
| `assets/media/image-34-800.webp` | 532×800 (recorte con transparencia) |
| `assets/media/image-35-1600.webp` | 1046×1503 (recorte con transparencia) |
| `assets/media/image-35-800.webp` | 557×800 (recorte con transparencia) |
| `assets/media/image-36-1600.webp` | 1036×1519 (recorte con transparencia) |
| `assets/media/image-36-800.webp` | 546×800 (recorte con transparencia) |
| `assets/media/image-37.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-38-1600.webp` | 1600×1280 (recorte con transparencia) |
| `assets/media/image-38-800.webp` | 800×640 (recorte con transparencia) |
| `assets/media/image-39-1600.webp` | 1600×1429 (recorte con transparencia) |
| `assets/media/image-39-800.webp` | 800×715 (recorte con transparencia) |
| `assets/media/image-40-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-40-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-41-1600.webp` | 1600×1210 (recorte con transparencia) |
| `assets/media/image-41-800.webp` | 800×605 (recorte con transparencia) |
| `assets/media/image-42-1600.webp` | 1600×900 (recorte con transparencia) |
| `assets/media/image-42-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/image-43-1600.webp` | 1160×1600 (recorte con transparencia) |
| `assets/media/image-43-800.webp` | 580×800 (recorte con transparencia) |
| `assets/media/image-44-1600.webp` | 1160×1600 (recorte con transparencia) |
| `assets/media/image-44-800.webp` | 580×800 (recorte con transparencia) |
| `assets/media/image-45-1600.webp` | 1160×1600 (recorte con transparencia) |
| `assets/media/image-45-800.webp` | 580×800 (recorte con transparencia) |
| `assets/media/sfx-click-800.m4a` | sonido de interfaz genérico |
| `assets/media/sfx-hover-800.m4a` | sonido de interfaz genérico |
| `assets/media/sfx-toggle-off-800.m4a` | sonido de interfaz genérico |
| `assets/media/sfx-toggle-on-800.m4a` | sonido de interfaz genérico |
| `assets/media/image-46-800.svg` | .svg |
| `assets/media/image-47-800.svg` | .svg |
| `assets/media/tex-grass-1600.webp` | 512×512 (recorte con transparencia) |
| `assets/media/tex-leather-1600.webp` | 844×844 (recorte con transparencia) |
| `assets/media/tex-light-01-1600.webp` | 2880×1620 (recorte con transparencia) |
| `assets/media/tex-light-03-1600.webp` | 1440×810 (recorte con transparencia) |
| `assets/media/tex-paper-grain-1600.webp` | 1024×1024 (recorte con transparencia) |
| `assets/media/tex-pebble-1600.webp` | 844×844 (recorte con transparencia) |
| `assets/media/video-02-800.mp4` | vídeo 1280x720, 186.7 s |
| `assets/media/video-03-800.mp4` | vídeo 1280x720, 194.9 s |
| `assets/media/video-04-800.mp4` | vídeo 1280x720, 597.7 s |
| `assets/media/video-05-800.mp4` | vídeo 1280x720, 31.2 s |
| `assets/media/video-06-800.mp4` | vídeo 1280x720, 37.3 s |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
