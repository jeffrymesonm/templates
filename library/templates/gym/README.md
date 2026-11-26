# Gimnasio de fuerza (`gym`)

> Landing enérgica para un gimnasio o box de entrenamiento, con contador de entrada, cifras que giran como un odómetro en el hero y botones amarillos con la etiqueta que rueda al pasar el ratón.

| Campo | Valor |
|---|---|
| Identificador | `gym` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/gym (capturado el 2026-11-25) |
| Catálogo de origen | "Gym", grupo Live, kit `nickho` |
| Categoría | salud y deporte / gimnasio |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | gimnasios, boxes de entrenamiento cruzado, centros de entrenamiento de fuerza, entrenadores personales, estudios de entrenamiento funcional, clubes de halterofilia |
| Estilo | contraste alto negro, blanco y amarillo, tipografía condensada en mayúsculas, rejilla de columnas de fondo, bloques rectos sin redondeo |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Anton, Arimo, Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.3 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Pantalla de entrada con una fila de cuadros amarillos que se van llenando y un contador grande que sube antes de mostrar la página.
- Hero a pantalla completa con el nombre en letra condensada gigante y tres cifras que se animan como un odómetro (`100+`, `10`, `50`).
- Navegación mínima: marca a la izquierda y un botón cuadrado amarillo que abre un panel con los enlaces, el botón de reserva y las redes sociales.
- Botones con la etiqueta que rueda (el texto sube y se sustituye por una copia) al pasar el ratón.
- Clases en filas con foto, descripción y una línea de horario o precio.
- Entrenadores en tarjetas con la foto en blanco y negro que recupera el color al pasar el ratón.
- Testimonios de uno en uno con una frase resaltada (se marca entre `*asteriscos*` en `page.js`), flechas anterior/siguiente y contador `1 / 3`.
- Tres planes de precio en columnas separadas por líneas, con uno destacado; FAQ en acordeón accesible (`aria-expanded`).
- Contacto en una tarjeta blanca sobre una palabra gigante translúcida (`ghostWord`, por defecto `Join`), con formulario de nombre, apellido, correo y mensaje.

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
| 1 | `NavbarYellowTile` | — | — |
| 2 | `HeroStatsTakeover` | `#home` | hero |
| 3 | `FeaturesRideAlongRows` | `#classes` | services |
| 4 | `TeamSaturateCards` | `#coaches` | team |
| 5 | `TestimonialHighlightSkip` | `#results` | testimonial |
| 6 | `PricingLineColumns` | `#memberships` | pricing |
| 7 | `FaqHighlightRows` | `#faq` | faq |
| 8 | `ContactGhostWordCard` | `#join` | contact |
| 9 | `FooterColumnLines` | — | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-eIdhzBCk.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#fff` |
| `--foreground` | `#333` |
| `--card` | `#fff` |
| `--card-foreground` | `#000` |
| `--popover` | `#fff` |
| `--popover-foreground` | `#333` |
| `--primary` | `#fed60a` |
| `--primary-foreground` | `#000` |
| `--secondary` | `#f2f2f2` |
| `--secondary-foreground` | `#333` |
| `--muted` | `#f2f2f2` |
| `--muted-foreground` | `#666` |
| `--accent` | `#fed60a` |
| `--accent-foreground` | `#000` |
| `--deep` | `#000` |
| `--deep-foreground` | `#fff` |
| `--destructive` | `#d92d20` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#e6e6e6` |
| `--input` | `#f2f2f2` |
| `--ring` | `#000` |
| `--heading-weight` | `400` |
| `--heading-tracking` | `0em` |
| `--heading-leading` | `1.1` |
| `--text-display` | `clamp(5rem, 2.214rem + 11.43vw, 12.5rem)` |
| `--text-h1` | `clamp(2.5rem, 2.268rem + .952vw, 3.125rem)` |
| `--text-h2` | `clamp(1.75rem, 1.657rem + .381vw, 2rem)` |
| `--text-h3` | `clamp(1.25rem, 1.111rem + .571vw, 1.625rem)` |
| `--text-body-lg` | `clamp(1.125rem, 1.079rem + .19vw, 1.25rem)` |
| `--text-body` | `clamp(.9375rem, .91rem + .1vw, 1rem)` |
| `--text-small` | `clamp(.8125rem, .79rem + .1vw, .875rem)` |
| `--text-label` | `1rem` |
| `--label-tracking` | `0em` |
| `--label-case` | `uppercase` |
| `--gutter` | `clamp(1.5rem, .2rem + 5.333vw, 5rem)` |
| `--max-w` | `1280px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(4rem, 2.514rem + 6.095vw, 8rem)` |
| `--gap` | `clamp(1rem, .81rem + .76vw, 1.5rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.16, 1, .3, 1)` |
| `--ease-in-out` | `cubic-bezier(.87, 0, .13, 1)` |
| `--dur-fast` | `.35s` |
| `--dur-base` | `.6s` |
| `--dur-slow` | `1.2s` |
| `--reveal-distance` | `2.5rem` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Anton", Impact, "Arial Narrow", sans-serif` |
| `--font-body` | `"Arimo", Helvetica, Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1334×2000 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×1065 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×533 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1536×1024 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-11.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×534 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
