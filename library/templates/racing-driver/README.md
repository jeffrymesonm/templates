# Piloto de carreras (`racing-driver`)

> Landing oscura para un piloto de automovilismo, con retrato 3D que reacciona al cursor, trazado de circuito que se dibuja con el scroll y un coche en 3D con recorrido aerodinámico.

| Campo | Valor |
|---|---|
| Identificador | `racing-driver` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/racing-driver (capturado el 2026-11-25) |
| Catálogo de origen | "Racing Driver", grupo Live, kit `pitlane` |
| Categoría | Deporte / marca personal |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | Pilotos de automovilismo, karting y motociclismo, equipos de carreras, deportistas de motor y sus marcas personales |
| Estilo | Oscuro y deportivo: negro con rojo de acento, tipografía ancha en mayúsculas combinada con serif condensada, líneas de contorno de fondo |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Archivo, Caveat Brush, Geist, Instrument Serif, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 7.4 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Pantalla de carga con la silueta de un casco que se llena y el nombre de la marca.
- Menú con wordmark apilado en dos líneas, dorsal en el centro y menú a pantalla completa con imágenes.
- Hero con retrato en 3D (Three.js) que sigue al cursor, casco en 3D y tarjeta "próxima carrera" con dorsal y equipo.
- Sección de próxima carrera con el trazado del circuito que se dibuja al hacer scroll y contador animado de distancia.
- Coche en 3D con scroll: presentación, cifras animadas y recorrido aerodinámico paso a paso con velocidad y carga.
- Galería de fotos dispersas con cita destacada y trazo a mano que se dibuja.
- Carrusel de patrocinadores con estilos tipográficos distintos y feed social en abanico.
- Pie con firma/trazo animado, recorte del piloto con casco, enlaces y botón de contacto comercial.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- **Chunks parcheados al neutralizar** (solo literales; mismos textos neutros que en `page.js`):
  - `racingPaths-*.js`: el trazado del circuito original (export `n`) pasa a ser un circuito genérico, y la firma
    manuscrita del piloto (export `t`, usada en el hero, la galería y el pie) pasa a ser un trazo neutro.
  - `LoaderHelmetFill-*.js`, `NavbarStackedWordmark-*.js`, `HeroPortraitHelmetZoom-*.js`, `MetricsTrackDraw-*.js`,
    `ProductCarAeroScroll-*.js`, `GalleryScatterRun-*.js`, `SocialProofBrushMarquee-*.js`, `SocialFeedFan-*.js`,
    `FooterSignaturePanel-*.js`: valores por defecto de las props (nombre, dorsal, equipo, circuito, coche,
    patrocinadores, lema, créditos) cambiados a textos neutros.
  - Los mismos chunks (salvo `LoaderHelmetFill`, `MetricsTrackDraw`, `SocialProofBrushMarquee`) y `page.js`: la ruta
    base `assets/media/templates/racing-driver` se corrigió a `assets/media`, donde están los archivos.
- En `page.js`, las imágenes `helmet-portrait`, `driver-portrait`, `race-car-front` y `race-car-rear` no existen en
  `assets/media/`; sus referencias apuntan de momento a `race-suit-helmet-cutout`, `leather-coat-editorial`,
  `pit-wall-race-suit` y `team-garage`. Sustitúyelas por imágenes propias.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `LoaderHelmetFill` | — | — |
| 2 | `NavbarStackedWordmark` | — | — |
| 3 | `HeroPortraitHelmetZoom` | `#hero` | hero |
| 4 | `MetricsTrackDraw` | `#metrics` | metrics |
| 5 | `ProductCarAeroScroll` | `#product` | product |
| 6 | `GalleryScatterRun` | `#gallery` | gallery |
| 7 | `SocialProofBrushMarquee` | `#social-proof` | social-proof |
| 8 | `SocialFeedFan` | `#social` | social |
| 9 | `FooterSignaturePanel` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-WXMZurhY.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#050505` |
| `--foreground` | `#fff` |
| `--card` | `#0b0b0b` |
| `--card-foreground` | `#fff` |
| `--popover` | `#0b0b0b` |
| `--popover-foreground` | `#fff` |
| `--primary` | `#e10600` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#f2f0ea` |
| `--secondary-foreground` | `#0d0d0d` |
| `--muted` | `#161616` |
| `--muted-foreground` | `#9c9c9c` |
| `--accent` | `#e10600` |
| `--accent-foreground` | `#fff` |
| `--deep` | `#0b0b0b` |
| `--deep-foreground` | `#fff` |
| `--destructive` | `#e10600` |
| `--destructive-foreground` | `#fff` |
| `--border` | `var(--foreground)` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Archivo", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Archivo", "Helvetica Neue", Helvetica, Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/bulldog-at-home-1600.webp` | 614×1100 (recorte con transparencia) |
| `assets/media/bulldog-at-home-800.webp` | 614×1100 (recorte con transparencia) |
| `assets/media/circuit-spa.webp` | 312×199 (recorte con transparencia) |
| `assets/media/cockpit-seat-1600.webp` | 614×1100 (recorte con transparencia) |
| `assets/media/cockpit-seat-800.webp` | 614×1100 (recorte con transparencia) |
| `assets/media/gala-tuxedo-1600.webp` | 1100×1100 (recorte con transparencia) |
| `assets/media/gala-tuxedo-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/grid-walk-1600.webp` | 614×1100 (recorte con transparencia) |
| `assets/media/grid-walk-800.webp` | 614×1100 (recorte con transparencia) |
| `assets/media/image-01.png` | 434×512 (recorte con transparencia) |
| `assets/media/helmet.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/leather-coat-editorial-1600.webp` | 821×1100 (recorte con transparencia) |
| `assets/media/leather-coat-editorial-800.webp` | 800×1072 (recorte con transparencia) |
| `assets/media/neon-night-portrait-1600.webp` | 614×1100 (recorte con transparencia) |
| `assets/media/neon-night-portrait-800.webp` | 614×1100 (recorte con transparencia) |
| `assets/media/image-02.webp` | 512×512 (recorte con transparencia) |
| `assets/media/paddock-smile-1600.webp` | 614×1100 (recorte con transparencia) |
| `assets/media/paddock-smile-800.webp` | 614×1100 (recorte con transparencia) |
| `assets/media/paddock-walk-1600.webp` | 821×1100 (recorte con transparencia) |
| `assets/media/paddock-walk-800.webp` | 800×1072 (recorte con transparencia) |
| `assets/media/person-alpha.webp` | 2048×2048 (recorte con transparencia) |
| `assets/media/person-depth.webp` | 512×512 (recorte con transparencia) |
| `assets/media/person-diffuse.webp` | 2048×2048 (recorte con transparencia) |
| `assets/media/person-normal.webp` | 512×512 (recorte con transparencia) |
| `assets/media/pit-wall-race-suit-1600.webp` | 1100×821 (recorte con transparencia) |
| `assets/media/pit-wall-race-suit-800.webp` | 800×598 (recorte con transparencia) |
| `assets/media/podium-celebration-1600.webp` | 614×1100 (recorte con transparencia) |
| `assets/media/podium-celebration-800.webp` | 614×1100 (recorte con transparencia) |
| `assets/media/race-suit-helmet-cutout-1600.webp` | 1400×1400 (recorte con transparencia) |
| `assets/media/race-suit-helmet-cutout-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/sf26.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/studio-light.hdr` | mapa de iluminación 3D genérico (sin marca) |
| `assets/media/team-garage-1600.webp` | 1100×821 (recorte con transparencia) |
| `assets/media/team-garage-800.webp` | 800×598 (recorte con transparencia) |
| `assets/media/training-session-1600.webp` | 1100×1100 (recorte con transparencia) |
| `assets/media/training-session-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/varsity-jacket-street-1600.webp` | 614×1100 (recorte con transparencia) |
| `assets/media/varsity-jacket-street-800.webp` | 614×1100 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
