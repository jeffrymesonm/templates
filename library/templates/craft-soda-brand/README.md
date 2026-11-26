# Marca de refrescos artesanales (`craft-soda-brand`)

> Landing de producto para una marca de bebidas con una lata 3D flotante que se puede girar, rejilla técnica de fondo, tipografía pixelada y tarjetas que se inclinan o se arrastran.

| Campo | Valor |
|---|---|
| Identificador | `craft-soda-brand` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/craft-soda-brand (capturado el 2026-11-25) |
| Catálogo de origen | "Craft Soda Brand", grupo Live, kit `brew` |
| Categoría | producto / alimentación y bebidas |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | marcas de refrescos, kombucha, cerveza artesanal, zumos, agua con gas, bebidas funcionales, venta por suscripción de cajas |
| Estilo | técnico y gráfico, gris claro con acento naranja, rejilla de líneas finas, tipografía display pixelada y monoespaciada en mayúsculas, fondo que cambia de tono con el scroll |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, React Three Fiber, Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 7.8 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Fondo que cambia de tono según la sección y loader en rejilla que forma el nombre de la marca.
- Barra de navegación flotante con marca, enlaces y botón.
- Hero con modelo 3D de lata flotante (React Three Fiber) que se puede girar, título en dos palabras, etiquetas, coordenadas y tira de datos del producto con ficha (ingredientes, descripción).
- Sección "about" con texto que se entinta al hacer scroll y cuatro cifras.
- Servicios en bento de seis tarjetas que se inclinan con el ratón, con foto y enlace.
- CTA con frase que se revela al hacer scroll, palabra destacada e imágenes.
- Testimonios en tarjetas que se arrastran, con retrato, nombre, cargo y cita.
- Precios en tres planes de suscripción con contorno, cifras y lista de ventajas.
- Formulario de contacto con campos de contorno (no envía datos: hay que conectarlo a un servicio) y footer con marca gigante, boletín, columnas y redes.

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
| 1 | `ScrollToneBackdrop` | — | — |
| 2 | `LoaderGridWordmark` | — | — |
| 3 | `NavbarFloatingBar` | — | — |
| 4 | `HeroFloatingModel` | `#hero` | hero |
| 5 | `AboutInkStatement` | `#about` | about |
| 6 | `ServicesTiltBento` | `#services` | services |
| 7 | `CtaScrubStatement` | `#cta` | cta |
| 8 | `TestimonialDragCards` | `#testimonial` | testimonial |
| 9 | `PricingOutlineTiers` | `#pricing` | pricing |
| 10 | `ContactOutlineForm` | `#contact` | contact |
| 11 | `FooterGiantWordmark` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-BRHmO9ft.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#e4e4e4` |
| `--foreground` | `#1b1b1b` |
| `--card` | `#f6f6f6` |
| `--card-foreground` | `#1b1b1b` |
| `--popover` | `#f6f6f6` |
| `--popover-foreground` | `#1b1b1b` |
| `--primary` | `#1b1b1b` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#f6f6f6` |
| `--secondary-foreground` | `#1b1b1b` |
| `--muted` | `#d9d9d9` |
| `--muted-foreground` | `#5e5e5e` |
| `--accent` | `#ff7120` |
| `--accent-foreground` | `#1b1b1b` |
| `--deep` | `#1b1b1b` |
| `--deep-foreground` | `#fff` |
| `--destructive` | `#e5484d` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#1b1b1b` |
| `--input` | `#1b1b1b` |
| `--ring` | `#1b1b1b` |
| `--tint-1` | `#f6f6f6` |
| `--tint-2` | `#d9d9d9` |
| `--tint-3` | `#2a2a2a` |
| `--heading-weight` | `400` |
| `--heading-tracking` | `0em` |
| `--heading-leading` | `.9` |
| `--text-display` | `clamp(2.75rem, 9.5vw + .25rem, 8.5rem)` |
| `--text-h1` | `clamp(2rem, 5vw + .5rem, 4.5rem)` |
| `--text-h2` | `clamp(1.75rem, 3vw, 2.75rem)` |
| `--text-h3` | `clamp(1.25rem, 2vw, 1.875rem)` |
| `--text-body-lg` | `clamp(1rem, .95rem + .25vw, 1.1875rem)` |
| `--text-body` | `clamp(.875rem, 1vw, 1.125rem)` |
| `--text-small` | `clamp(.75rem, .8vw, .875rem)` |
| `--text-label` | `clamp(.875rem, 1.5vw, 1.375rem)` |
| `--label-tracking` | `0em` |
| `--label-case` | `uppercase` |
| `--gutter` | `10vw` |
| `--max-w` | `1280px` |
| `--container` | `calc(round(down, min(100% - 2 * var(--gutter), var(--max-w)) - 5px, 4px) + 5px)` |
| `--grid-cols` | `2` |
| `--grid-col` | `calc((var(--container) - 1px) / var(--grid-cols))` |
| `--line` | `var(--foreground)` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"at", "Arial Black", sans-serif` |
| `--font-body` | `"Inter", system-ui, sans-serif` |
| `--font-label` | `"mono", ui-monospace, monospace` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1334×2000 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×994 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×497 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/set-01/at.woff` | tipografía propia del diseño: **licencia por verificar antes de publicar** |
| `assets/media/set-01/mono.ttf` | tipografía propia del diseño: **licencia por verificar antes de publicar** |
| `assets/media/image-08-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1500×2000 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×1067 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/set-02/model-01.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/image-12.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-16-1600.webp` | 1344×2000 (recorte con transparencia) |
| `assets/media/image-16-800.webp` | 800×1191 (recorte con transparencia) |
| `assets/media/image-17-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-17-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-18-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-18-800.webp` | 800×1201 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
