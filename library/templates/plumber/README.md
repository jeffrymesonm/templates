# Fontanería con panel de datos (`plumber`)

> Landing clara para una empresa de fontanería o servicios del hogar: hero con tarjetas de métricas animadas tipo panel, servicios que se apilan al hacer scroll y precios cerrados por plan.

| Campo | Valor |
|---|---|
| Identificador | `plumber` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/plumber (capturado el 2026-11-25) |
| Catálogo de origen | "Plumber", grupo Live, kit `makro` |
| Categoría | servicios / fontanería y hogar |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | fontaneros, calefacción y calderas, electricistas, urgencias del hogar, reformas de baño, mantenimiento para propietarios y administradores de fincas |
| Estilo | limpio tipo producto SaaS, gris azulado claro + gris oscuro + acento lima, tipografía sans fina y grande, tarjetas tipo bandeja |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.3 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Pantalla de carga con la marca en una píldora que se rellena.
- Navegación flotante en píldora con botón de reserva y menú desplegable.
- Hero con titular grande, dos botones e imagen enmarcada con tarjetas de métricas (tiempo medio con mini gráfica, valoración, trabajos del mes) cuyos números se animan.
- Servicios en mosaicos que se apilan al hacer scroll, cada uno con etiqueta, icono, título, descripción, nota e imagen.
- "Cómo funciona" en tres pasos numerados con imagen, sobre un fondo que cambia de tono.
- Precios en tres planes con lista de ventajas y un bloque extra para clientes empresa (propietarios).
- Reseñas en carrusel destacado con foto, cita y dos datos del resultado; preguntas frecuentes en acordeón con tarjeta de urgencias y botón de llamada.
- Formulario de contacto oscuro con mensaje de éxito; pie con columnas de enlaces, botón "volver arriba" y la marca en letras gigantes.

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
| 2 | `LoaderChipFill` | — | — |
| 3 | `NavbarFloatingPill` | — | — |
| 4 | `HeroBoardFrame` | `#home` | hero |
| 5 | `FeaturesStackingTilesMakro` | `#services` | features |
| 6 | `FeaturesStepWashCards` | `#process` | process |
| 7 | `PricingTrayPlans` | `#pricing` | pricing |
| 8 | `TestimonialSpotlightCarousel` | `#reviews` | testimonial |
| 9 | `FaqTrayAccordion` | — | faq |
| 10 | `ContactDarkFormCard` | `#contact` | contact |
| 11 | `FooterTrayWordmark` | — | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-CEYw6LUs.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#ebeff5` |
| `--foreground` | `#242426` |
| `--card` | `#fff` |
| `--card-foreground` | `#242426` |
| `--popover` | `#fff` |
| `--popover-foreground` | `#242426` |
| `--primary` | `#35363b` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#fff` |
| `--secondary-foreground` | `#242426` |
| `--muted` | `#f5f7fa` |
| `--muted-foreground` | `#5b5b5d` |
| `--accent` | `#d9ff5c` |
| `--accent-foreground` | `#242426` |
| `--deep` | `#35363b` |
| `--deep-foreground` | `#fff` |
| `--destructive` | `#e5484d` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#d8dde5` |
| `--input` | `#d8dde5` |
| `--ring` | `#35363b` |
| `--heading-weight` | `400` |
| `--heading-tracking` | `-.04em` |
| `--heading-leading` | `1.2` |
| `--text-display` | `clamp(2.75rem, 1.729rem + 4.19vw, 5.5rem)` |
| `--text-h1` | `clamp(2.25rem, 1.786rem + 1.905vw, 3.5rem)` |
| `--text-h2` | `clamp(1.625rem, 1.393rem + .952vw, 2.25rem)` |
| `--text-h3` | `clamp(1.5rem, 1.314rem + .762vw, 2rem)` |
| `--text-body-lg` | `clamp(1rem, .954rem + .19vw, 1.125rem)` |
| `--text-body` | `clamp(.875rem, .85rem + .1vw, .9375rem)` |
| `--text-small` | `clamp(.8125rem, .79rem + .1vw, .875rem)` |
| `--text-label` | `.875rem` |
| `--label-tracking` | `0em` |
| `--label-case` | `none` |
| `--gutter` | `clamp(1.5rem, 1.129rem + 1.524vw, 2.5rem)` |
| `--max-w` | `1280px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--panel-inset` | `clamp(.5rem, .314rem + .762vw, 1rem)` |
| `--section-space` | `clamp(5rem, 4.071rem + 3.81vw, 7.5rem)` |
| `--gap` | `clamp(1rem, .814rem + .762vw, 1.5rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.22, 1, .36, 1)` |
| `--ease-in-out` | `cubic-bezier(.65, 0, .35, 1)` |
| `--dur-fast` | `.4s` |
| `--dur-base` | `.8s` |
| `--dur-slow` | `1s` |
| `--reveal-distance` | `3rem` |
| `--chip-arrow` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 12h16M13 5l7 7-7 7'/%3E%3C/svg%3E")` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Inter", "Inter Display", ui-sans-serif, system-ui, sans-serif` |
| `--font-body` | `"Inter", "Inter Display", ui-sans-serif, system-ui, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-07.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1600×1140 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×570 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×1201 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
