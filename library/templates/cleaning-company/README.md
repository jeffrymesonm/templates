# Empresa de limpieza estilo lienzo de diseño (`cleaning-company`)

> Landing clara y juguetona para una empresa de limpieza, con estética de herramienta de diseño: reglas en píxeles, marcos de selección, notas adhesivas, letra pixelada y comentarios manuscritos.

| Campo | Valor |
|---|---|
| Identificador | `cleaning-company` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/cleaning-company (capturado el 2026-11-25) |
| Catálogo de origen | "Cleaning Company", grupo Live, kit `nudge` |
| Categoría | servicios / limpieza |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | empresas de limpieza de hogares y oficinas, limpieza profunda y de mudanza, lavado de ventanas, mantenimiento, servicios a domicilio con equipo pequeño |
| Estilo | claro con cuadrícula de fondo, interfaz de editor de diseño (reglas, marcos con tiradores), tipografía pixelada y manuscrita, acentos verde, azul y amarillo |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: DM Mono, Geist, Inter, Inter Tight, Just Me Again Down Here, Pixelify Sans, Playfair Display |
| Idiomas | en |
| Tamaño | 6.6 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Preloader con un bocadillo verde que escribe un saludo letra a letra (prop `word` de `LoaderTypingBubble`).
- Navegación con regla en píxeles bajo la barra, botón de presupuesto y menú desplegable.
- Hero con el nombre de la marca en letra pixelada dentro de un marco de selección con tiradores, notas adhesivas inclinadas, etiquetas con cursores flotantes, avatar y reloj en vivo (`timeZone`).
- Trabajos recientes como carpetas apiladas con pestaña ("Job 01"), fecha, etiquetas y una ficha tipo archivo ("After.jpg").
- Equipo en muro de polaroids y opiniones en tarjetas de comentario con contador de reacciones y carrusel con flechas.
- Precios en pestañas de carpeta con tres planes, y FAQ como hilos de comentarios con avatar de quien responde.
- Formulario de contacto (nombre, email, teléfono, mensaje) con mensaje de éxito y foto enmarcada con nota manuscrita.
- Footer oscuro con regla, wordmark pixelado en marco de selección, reloj de la ciudad y botón "volver arriba".
- Notas manuscritas (fuente Just Me Again Down Here) sobre cada título de sección y scroll suave con Lenis.

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
| 1 | `LoaderTypingBubble` | — | — |
| 2 | `NavbarTabStrip` | — | — |
| 3 | `HeroCanvasName` | `#hero` | hero |
| 4 | `GalleryFolderStack` | `#services` | gallery |
| 5 | `TeamPolaroidWall` | `#team` | team |
| 6 | `TestimonialCommentCards` | `#reviews` | testimonial |
| 7 | `PricingFolderTabs` | `#pricing` | pricing |
| 8 | `FaqCommentThreads` | `#faq` | faq |
| 9 | `ContactFramedWindow` | `#contact` | contact |
| 10 | `FooterRulerIndex` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-DMByqp0m.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#f6fbf8` |
| `--foreground` | `#0f1f1a` |
| `--card` | `#e8f2ed` |
| `--card-foreground` | `#0f1f1a` |
| `--popover` | `#e8f2ed` |
| `--popover-foreground` | `#0f1f1a` |
| `--primary` | `#0f1f1a` |
| `--primary-foreground` | `#f6fbf8` |
| `--secondary` | `#9be38f` |
| `--secondary-foreground` | `#0f1f1a` |
| `--muted` | `#dff3c9` |
| `--muted-foreground` | `#4c5e57` |
| `--accent` | `#1f5fe0` |
| `--accent-foreground` | `#fff` |
| `--deep` | `#0f1f1a` |
| `--deep-foreground` | `#f6fbf8` |
| `--destructive` | `#e5484d` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#d9e7e0` |
| `--input` | `#b9cbc3` |
| `--ring` | `#0f1f1a` |
| `--tint-1` | `#ffcf5c` |
| `--tint-2` | `#dff3c9` |
| `--tint-3` | `#67d4e6` |
| `--heading-weight` | `700` |
| `--heading-tracking` | `0em` |
| `--heading-leading` | `.9` |
| `--text-display` | `clamp(3.5rem, 1.6rem + 7.8vw, 9.375rem)` |
| `--text-h1` | `clamp(2.75rem, 1.6rem + 4.7vw, 6.25rem)` |
| `--text-h2` | `clamp(2rem, 1.25rem + 3vw, 4.25rem)` |
| `--text-h3` | `clamp(1.5rem, 1.2rem + 1.2vw, 2.5rem)` |
| `--text-body-lg` | `clamp(1.0625rem, .98rem + .3vw, 1.25rem)` |
| `--text-body` | `clamp(.9375rem, .9rem + .15vw, 1.0625rem)` |
| `--text-small` | `.875rem` |
| `--text-label` | `clamp(.8125rem, .78rem + .12vw, .9375rem)` |
| `--label-tracking` | `0em` |
| `--label-case` | `uppercase` |
| `--gutter` | `clamp(1.25rem, -.2rem + 5.9vw, 6.25rem)` |
| `--max-w` | `1240px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(4.5rem, 3.3rem + 4.9vw, 8.125rem)` |
| `--gap` | `clamp(1rem, .6rem + 1.6vw, 2rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.19, 1, .22, 1)` |
| `--ease-in-out` | `cubic-bezier(.52, 0, 0, 1)` |
| `--dur-fast` | `.3s` |
| `--dur-base` | `.7s` |
| `--dur-slow` | `1.2s` |
| `--reveal-distance` | `1.5rem` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Pixelify Sans", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"DM Mono", ui-monospace, Menlo, monospace` |
| `--font-script` | `"Just Me Again Down Here", "Comic Sans MS", cursive` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1065 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×533 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-09.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1600×1064 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×532 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1600×1065 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1331×2000 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×1203 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×533 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-16-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-16-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-17-1600.webp` | 1331×2000 (recorte con transparencia) |
| `assets/media/image-17-800.webp` | 800×1203 (recorte con transparencia) |
| `assets/media/image-18-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-18-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-19-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-19-800.webp` | 800×534 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
