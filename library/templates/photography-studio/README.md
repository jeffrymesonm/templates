# Estudio de fotografía (`photography-studio`)

> Landing clara y luminosa para un estudio de fotografía, con fotos en forma de arco, una palabra del titular que rota resaltada en pastel y un gran wordmark que se revela en el pie.

| Campo | Valor |
|---|---|
| Identificador | `photography-studio` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/photography-studio (capturado el 2026-11-25) |
| Catálogo de origen | "Photography Studio", grupo Live, kit `bungee` |
| Categoría | creativos / fotografía |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | fotógrafos de retrato, bodas y familias, estudios de fotografía de marca y producto, videógrafos, estudios creativos pequeños |
| Estilo | claro y minimalista, fondo blanco, acentos pastel (lila, verde, rosa), formas de arco, tipografía grotesca grande (Inter Tight) con interletrado ajustado |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: DM Mono, Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 7.1 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Preloader oscuro con el nombre de la marca y tres arcos pastel que suben antes de mostrar la página.
- Navegación mínima con la inicial de la marca y un botón en cruz que abre un menú a pantalla completa con enlaces, correo y redes.
- Hero con titular grande en el que una palabra rota (`rotatingWords`) dentro de una píldora pastel, dos botones y una fila de fotos en arco que se desplaza.
- Sección "Nosotros" con una frase grande que se revela desenfocada al hacer scroll, junto a una foto del estudio.
- Galería de sesiones recientes en una pista horizontal de arcos ligada al scroll, con título, fecha y contador (01/06).
- Servicios en tarjetas apiladas que se superponen al hacer scroll, cada una con descripción, etiquetas y foto.
- Precios en tres planes de colores pastel, con un plan destacado y etiqueta "Most booked".
- Testimonios con retratos apilados y navegación numerada (01/04); formulario de contacto con selector de tipo de sesión y mensaje de confirmación.
- Pie a pantalla completa con boletín, enlaces, redes y un gran wordmark de la marca que aparece al llegar al final.

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
| 1 | `LoaderArchRise` | — | — |
| 2 | `NavbarCrossMenu` | — | — |
| 3 | `HeroArchWordmark` | `#hero` | hero |
| 4 | `AboutBlurStatementVideo` | `#about` | about |
| 5 | `GalleryArchTrack` | `#gallery` | gallery |
| 6 | `ServicesStackCards` | `#services` | services |
| 7 | `PricingPastelPlans` | `#pricing` | pricing |
| 8 | `TestimonialStackPortraits` | `#testimonial` | testimonial |
| 9 | `ContactArchWindow` | `#contact` | contact |
| 10 | `FooterNewsletterReveal` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-BoCH4CrL.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#fff` |
| `--foreground` | `#1e1e1e` |
| `--card` | `#eef0f5` |
| `--card-foreground` | `#1e1e1e` |
| `--popover` | `#fff` |
| `--popover-foreground` | `#1e1e1e` |
| `--primary` | `#1e1e1e` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#eef0f5` |
| `--secondary-foreground` | `#1e1e1e` |
| `--muted` | `#eef0f5` |
| `--muted-foreground` | `#6b6f7a` |
| `--accent` | `#d6fcb8` |
| `--accent-foreground` | `#1e1e1e` |
| `--deep` | `#1e1e1e` |
| `--deep-foreground` | `#fff` |
| `--destructive` | `#f35b3a` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#e3e5ea` |
| `--input` | `#c9ccd4` |
| `--ring` | `#1e1e1e` |
| `--tint-1` | `#e6dcf5` |
| `--tint-2` | `#d6fcb8` |
| `--tint-3` | `#fbd3d1` |
| `--heading-weight` | `500` |
| `--heading-tracking` | `-.035em` |
| `--heading-leading` | `1` |
| `--text-display` | `clamp(4.5rem, 2.4rem + 9vw, 12rem)` |
| `--text-h1` | `clamp(2.75rem, 2rem + 3vw, 4.5rem)` |
| `--text-h2` | `clamp(1.875rem, 1.5rem + 1.6vw, 3rem)` |
| `--text-h3` | `clamp(1.375rem, 1.2rem + .75vw, 1.875rem)` |
| `--text-body-lg` | `clamp(1.125rem, 1.02rem + .45vw, 1.5rem)` |
| `--text-body` | `clamp(1rem, .96rem + .16vw, 1.125rem)` |
| `--text-small` | `clamp(.875rem, .85rem + .1vw, .9375rem)` |
| `--text-label` | `.8125rem` |
| `--label-tracking` | `.02em` |
| `--label-case` | `uppercase` |
| `--gutter` | `clamp(1rem, .6rem + 1.6vw, 2rem)` |
| `--max-w` | `1200px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(5rem, 3.8rem + 4vw, 8rem)` |
| `--gap` | `clamp(1rem, .9rem + .4vw, 1.5rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.22, 1, .36, 1)` |
| `--ease-in-out` | `cubic-bezier(.65, 0, .35, 1)` |
| `--dur-fast` | `.35s` |
| `--dur-base` | `.9s` |
| `--dur-slow` | `1.3s` |
| `--reveal-distance` | `1.5rem` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"DM Mono", ui-monospace, Menlo, monospace` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1428×2000 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×1121 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1429×2000 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×1120 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1335×2000 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×1199 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1600×2352 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×1176 (recorte con transparencia) |
| `assets/media/image-16.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-17-1600.webp` | 1335×2000 (recorte con transparencia) |
| `assets/media/image-17-800.webp` | 800×1199 (recorte con transparencia) |
| `assets/media/image-18-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-18-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-19-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-19-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-20-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-20-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-21-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-21-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-22-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-22-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-23-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-23-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-24-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-24-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-25-1600.webp` | 1600×1141 (recorte con transparencia) |
| `assets/media/image-25-800.webp` | 800×571 (recorte con transparencia) |
| `assets/media/image-26-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-26-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-27-1600.webp` | 1331×2000 (recorte con transparencia) |
| `assets/media/image-27-800.webp` | 800×1203 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
