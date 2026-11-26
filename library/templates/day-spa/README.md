# Spa y centro de bienestar (`day-spa`)

> Landing nocturna en violetas para un spa de día, con una escena 3D de esferas de cristal flotando sobre agua con ondas, tarjetas de cristal y anillos como motivo gráfico.

| Campo | Valor |
|---|---|
| Identificador | `day-spa` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/day-spa (capturado el 2026-11-25) |
| Catálogo de origen | "Day Spa", grupo Live, kit `halo` |
| Categoría | salud y bienestar / spa |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | spas de día, centros de bienestar, saunas y baños termales, centros de masaje, hoteles con spa, centros de estética |
| Estilo | oscuro y envolvente, degradado violeta y lila con cielo estrellado, tarjetas de cristal (glass), sans redondeada, botones en píldora y animaciones suaves |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Figtree, Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 7.1 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Preloader con contador (`LoaderRingCounter`) y la marca con su icono de anillo abierto.
- Navegación en píldora con menú desplegable, botón de reserva y botón secundario (tarjetas regalo).
- Hero con escena 3D en tiempo real: esfera de cristal partida en dos alrededor de una perla, flotando sobre agua con reflejos y ondas.
- Sección del espacio con un texto largo que se revela palabra a palabra y tres tarjetas con foto (instalaciones).
- Tratamientos en tarjetas con foto, duración y precio, y membresías en tres planes con precio mensual y características.
- Testimonios en carrusel con retrato, nombre y tipo de cliente, con botones anterior/siguiente.
- FAQ en acordeón (`FaqRippleAccordion`) y formulario de reserva con foto; al enviar solo muestra el mensaje de éxito (hay que conectarlo a un servicio).
- Footer con dirección destacada, nota con correo y teléfono, columnas de enlaces y enlaces legales.

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
| 1 | `LoaderRingCounter` | — | — |
| 2 | `NavbarGlidePill` | — | — |
| 3 | `HeroFloatingCard` | `#home` | hero |
| 4 | `AboutRingStatement` | `#about` | about |
| 5 | `ProductCardTiers` | `#treatments` | product |
| 6 | `PricingRingPlans` | `#pricing` | pricing |
| 7 | `TestimonialRingQuotes` | `#testimonial` | testimonial |
| 8 | `FaqRippleAccordion` | `#faq` | faq |
| 9 | `ContactRingForm` | `#contact` | contact |
| 10 | `FooterRingHorizon` | — | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-ggNAy1t4.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#040015` |
| `--foreground` | `#f6f2ff` |
| `--card` | `#fbfaff` |
| `--card-foreground` | `#160d33` |
| `--popover` | `#fbfaff` |
| `--popover-foreground` | `#160d33` |
| `--primary` | `#6d4cff` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#0f032e` |
| `--secondary-foreground` | `#f6f2ff` |
| `--muted` | `#190f3d` |
| `--muted-foreground` | `#a39cba` |
| `--accent` | `#8c6cff` |
| `--accent-foreground` | `#040015` |
| `--accent-strong` | `#2a14a8` |
| `--deep` | `#010008` |
| `--deep-foreground` | `#f6f2ff` |
| `--destructive` | `#ff6b8a` |
| `--destructive-foreground` | `#040015` |
| `--border` | `#282344` |
| `--input` | `#282344` |
| `--ring` | `#f6f2ff` |
| `--sky-top` | `#150d3c` |
| `--sky-mid` | `#4b33a6` |
| `--sky-low` | `#7a5cc8` |
| `--sky-glow` | `#ff9fd0` |
| `--sky-core` | `#fff2f8` |
| `--sky-light` | `#a99bff` |
| `--water-deep` | `#0f0828` |
| `--water-horizon` | `#5a3f9e` |
| `--water-glint` | `#ffb6dd` |
| `--halo-ring` | `#5a3aa8` |
| `--scene-tone` | `dark` |
| `--btn-bg` | `#fff` |
| `--btn-fg` | `var(--card-foreground)` |
| `--glass-ink` | `#fff` |
| `--hero-background` | `var(--background)` |
| `--hero-foreground` | `var(--foreground)` |
| `--hero-secondary` | `var(--secondary)` |
| `--hero-border` | `var(--border)` |
| `--hero-sky-top` | `var(--sky-top)` |
| `--hero-sky-mid` | `var(--sky-mid)` |
| `--hero-sky-low` | `var(--sky-low)` |
| `--hero-sky-glow` | `var(--sky-glow)` |
| `--hero-sky-core` | `var(--sky-core)` |
| `--hero-sky-light` | `var(--sky-light)` |
| `--hero-water-deep` | `var(--water-deep)` |
| `--hero-water-horizon` | `var(--water-horizon)` |
| `--hero-water-glint` | `var(--water-glint)` |
| `--hero-halo-ring` | `var(--halo-ring)` |
| `--heading-weight` | `400` |
| `--heading-tracking` | `-.035em` |
| `--heading-leading` | `1` |
| `--text-display` | `clamp(2.625rem, 1.3rem + 3.6vw, 4.5rem)` |
| `--text-h1` | `clamp(2.25rem, 1.3rem + 2.8vw, 3.625rem)` |
| `--text-h2` | `clamp(1.875rem, 1.3rem + 1.9vw, 3rem)` |
| `--text-h3` | `clamp(1.5rem, 1.25rem + .7vw, 2rem)` |
| `--text-body-lg` | `clamp(1.0625rem, 1rem + .25vw, 1.25rem)` |
| `--text-body` | `clamp(1rem, .95rem + .15vw, 1.125rem)` |
| `--text-small` | `.9375rem` |
| `--text-label` | `.8125rem` |
| `--label-tracking` | `0em` |
| `--label-case` | `none` |
| `--gutter` | `clamp(1.125rem, .4rem + 2.2vw, 2.5rem)` |
| `--max-w` | `1280px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(5rem, 3.6rem + 4.4vw, 9rem)` |
| `--gap` | `clamp(1.25rem, .9rem + 1.2vw, 2.5rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.22, 1, .36, 1)` |
| `--ease-in-out` | `cubic-bezier(.76, 0, .24, 1)` |
| `--dur-fast` | `.3s` |
| `--dur-base` | `.45s` |
| `--dur-slow` | `.9s` |
| `--reveal-distance` | `1.625rem` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Figtree", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Figtree", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"Figtree", "Helvetica Neue", Helvetica, Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-04.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×1601 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×801 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1600×900 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1600×1036 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×518 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1600×2397 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×1199 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×534 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
