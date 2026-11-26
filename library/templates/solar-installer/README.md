# Instalador de placas solares (`solar-installer`)

> Landing oscura con estética de levantamiento topográfico para un instalador de energía solar: terreno de puntos 3D que cambia con cada sección, coordenadas, retículas y etiquetas tipo HUD.

| Campo | Valor |
|---|---|
| Identificador | `solar-installer` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/solar-installer (capturado el 2026-11-25) |
| Catálogo de origen | "Solar Installer", grupo Live, kit `nebula` |
| Categoría | servicios para el hogar / energía |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | instaladores de placas solares, empresas de baterías y cargadores de coche eléctrico, electricistas, empresas de eficiencia energética, climatización |
| Estilo | oscuro con acento amarillo lima, terreno de partículas 3D, esquinas de retícula, coordenadas y etiquetas monoespaciadas, tipografía sans grande |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Familjen Grotesk, Geist, Inter, Inter Tight, Martian Mono, Playfair Display |
| Idiomas | en |
| Tamaño | 7.2 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Fondo 3D de terreno de puntos (Three.js) que cambia de forma según la sección (`data-terrain`).
- Loader con retícula que se fija sobre unas coordenadas.
- Navegación con esquinas tipo HUD, botón de presupuesto y enlace de correo.
- Hero con título en dos líneas, baliza con coordenadas y elevación, lectura de datos y dos botones.
- Sección "about" en forma de nota de inspección con foto, coordenadas y cinco cifras.
- Servicios en canales apilados numerados y proceso en un raíl horizontal de cinco pasos con foto.
- Galería de instalaciones en pila de tarjetas con categoría y coordenadas.
- Precios en fichas técnicas y testimonios en índice de clientes con retrato.
- Formulario de presupuesto con baliza (al enviar solo muestra el mensaje de éxito: hay que conectarlo a un servicio) y footer con marca, coordenadas y columnas.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `TerrainDotStage` | — | — |
| 2 | `LoaderCrosshairLock` | — | — |
| 3 | `NavbarHudCorners` | — | — |
| 4 | `HeroSplitHorizon` | `#hero` | hero |
| 5 | `AboutSurveyNote` | `#about` | about |
| 6 | `ServicesStackedChannels` | `#services` | services |
| 7 | `ProcessTransectRail` | `#process` | process |
| 8 | `GallerySurveyStack` | `#gallery` | gallery |
| 9 | `PricingSpecSheet` | `#pricing` | pricing |
| 10 | `TestimonialClientIndex` | `#testimonial` | testimonial |
| 11 | `ContactBeaconForm` | `#contact` | contact |
| 12 | `FooterHorizonMark` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-p-769IkI.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#08090d` |
| `--foreground` | `#f4f6ee` |
| `--card` | `#12141a` |
| `--card-foreground` | `#f4f6ee` |
| `--popover` | `#08090d` |
| `--popover-foreground` | `#f4f6ee` |
| `--primary` | `#f4f6ee` |
| `--primary-foreground` | `#08090d` |
| `--secondary` | `#363a17` |
| `--secondary-foreground` | `#f4f6ee` |
| `--muted` | `#12141a` |
| `--muted-foreground` | `#a6ab9c` |
| `--accent` | `#ecff3e` |
| `--accent-foreground` | `#08090d` |
| `--deep` | `#08090d` |
| `--deep-foreground` | `#f4f6ee` |
| `--destructive` | `#e5484d` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#1f2229` |
| `--input` | `#2c2f37` |
| `--ring` | `#f4f6ee` |
| `--tint-1` | `#43491a` |
| `--tint-2` | `#2a2e14` |
| `--tint-3` | `#181a10` |
| `--heading-weight` | `400` |
| `--heading-tracking` | `-.035em` |
| `--heading-leading` | `.95` |
| `--text-display` | `clamp(3.5rem, 1.6rem + 7.8vw, 8.25rem)` |
| `--text-h1` | `clamp(2.25rem, 1.5rem + 2.6vw, 3.5rem)` |
| `--text-h2` | `clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)` |
| `--text-h3` | `clamp(1.25rem, 1.05rem + .7vw, 1.75rem)` |
| `--text-body-lg` | `clamp(1.0625rem, 1rem + .25vw, 1.25rem)` |
| `--text-body` | `1rem` |
| `--text-small` | `.8125rem` |
| `--text-label` | `.75rem` |
| `--label-tracking` | `0em` |
| `--label-case` | `uppercase` |
| `--gutter` | `clamp(.75rem, .4714rem + 1.143vw, 1.5rem)` |
| `--max-w` | `1280px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(4rem, 3.2571rem + 3.048vw, 6rem)` |
| `--gap` | `clamp(1rem, .9536rem + .19vw, 1.125rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.16, 1, .3, 1)` |
| `--ease-in-out` | `cubic-bezier(.65, 0, .35, 1)` |
| `--dur-fast` | `.3s` |
| `--dur-base` | `.8s` |
| `--dur-slow` | `1.3s` |
| `--reveal-distance` | `2rem` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Familjen Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"Martian Mono", ui-monospace, Menlo, monospace` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×1199 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×600 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1600×900 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1500×2000 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×1067 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×900 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-12.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1334×2000 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-16-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-16-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-17-1600.webp` | 1600×900 (recorte con transparencia) |
| `assets/media/image-17-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/image-18-1600.webp` | 1295×2000 (recorte con transparencia) |
| `assets/media/image-18-800.webp` | 800×1236 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
