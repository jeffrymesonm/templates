# Cafetería con vaso 3D (`matcha-cafe`)

> Landing para una cafetería o bar de bebidas: un vaso en 3D gira y acompaña al visitante por todas las secciones mientras hace scroll, sobre un fondo que cambia de tono.

| Campo | Valor |
|---|---|
| Identificador | `matcha-cafe` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/matcha-cafe (capturado el 2026-11-25) |
| Catálogo de origen | "Matcha Cafe", grupo Live, kit `more` |
| Categoría | restaurante / cafetería |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | cafeterías, bares de matcha o té, juguerías y bubble tea, heladerías, panaderías con barra de bebidas, marcas de bebidas con local |
| Estilo | fresco y juguetón, verde salvia + verde bosque + blanco, textura de grano, tipografía condensada en mayúsculas, botones en píldora con flecha |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, React Three Fiber, Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Barlow Condensed, Barlow Semi Condensed, Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 9.8 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Pantalla de carga con la marca que sube letra a letra antes de mostrar la página.
- Modelo 3D de un vaso (Three.js) fijo en pantalla que cambia de giro, tamaño y posición en cada sección al hacer scroll; el fondo cambia de tono a la vez.
- Hero con la marca en letras gigantes, titular, descripción y un marquee curvo con el eslogan.
- Sección "sobre nosotros" con fotos inclinadas en tiras, enlace a reseñas y botón al menú.
- Productos en tarjetas tipo cinta, galería de locales en marcos inclinados y reseñas en carrusel con flechas y estrellas.
- Menú/precios en tarjetas con anillo, extras y botón de pedido; preguntas frecuentes en filas desplegables con círculo.
- Formulario de encargos/eventos (nombre, correo, mensaje) en panel.
- Pie con panel de imagen, enlaces, redes sociales y la marca a todo el ancho; menú en diálogo desde la cabecera.

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
| 2 | `ModelStage` | — | — |
| 3 | `LoaderWordmarkRise` | — | — |
| 4 | `NavbarPillLinks` | — | — |
| 5 | `HeroWordmarkProduct` | `#hero` | hero |
| 6 | `AboutTiltedReels` | `#about` | about |
| 7 | `FeaturesRibbonCards` | `#services` | services |
| 8 | `GalleryTiltedFrames` | `#gallery` | gallery |
| 9 | `TestimonialPhotoRail` | `#testimonial` | testimonial |
| 10 | `PricingRingCards` | `#pricing` | pricing |
| 11 | `FaqCircleRows` | `#faq` | faq |
| 12 | `ContactPanelForm` | `#contact` | contact |
| 13 | `FooterPanelWordmark` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-kOYTqze_.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#e8efe4` |
| `--foreground` | `#335c30` |
| `--card` | `#afc69b` |
| `--card-foreground` | `#184916` |
| `--popover` | `#e8efe4` |
| `--popover-foreground` | `#335c30` |
| `--primary` | `#335c30` |
| `--primary-foreground` | `#e8efe4` |
| `--secondary` | `#fff` |
| `--secondary-foreground` | `#335c30` |
| `--muted` | `#fff` |
| `--muted-foreground` | `#4d6c49` |
| `--accent` | `#689146` |
| `--accent-foreground` | `#1f3a1d` |
| `--deep` | `#1f2b1d` |
| `--deep-foreground` | `#e8efe4` |
| `--destructive` | `#e5484d` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#d2ddce` |
| `--input` | `#c4d2c0` |
| `--ring` | `#335c30` |
| `--tint-1` | `#afc79d` |
| `--tint-2` | `#1f4f1d` |
| `--tint-3` | `#d6e4cc` |
| `--heading-weight` | `600` |
| `--heading-tracking` | `-.02em` |
| `--heading-leading` | `.88` |
| `--text-display` | `clamp(7.6875rem, 3.4393rem + 17.429vw, 19.125rem)` |
| `--text-h1` | `clamp(3.75rem, 2.8214rem + 3.81vw, 6.25rem)` |
| `--text-h2` | `clamp(3rem, 1.8857rem + 4.571vw, 6rem)` |
| `--text-h3` | `clamp(2.5rem, 1.7571rem + 3.048vw, 4.5rem)` |
| `--text-body-lg` | `clamp(1.5rem, 1.2214rem + 1.143vw, 2.25rem)` |
| `--text-body` | `clamp(1.1875rem, 1.0714rem + .476vw, 1.5rem)` |
| `--text-small` | `clamp(1rem, .9071rem + .381vw, 1.25rem)` |
| `--text-label` | `clamp(1.125rem, .9857rem + .571vw, 1.5rem)` |
| `--label-tracking` | `-.01em` |
| `--label-case` | `none` |
| `--gutter` | `clamp(1.25rem, .7857rem + 1.905vw, 2.5rem)` |
| `--max-w` | `1600px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(4.0625rem, 3.3429rem + 2.952vw, 6rem)` |
| `--gap` | `clamp(1rem, .675rem + 1.333vw, 1.875rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.19, 1, .22, 1)` |
| `--ease-in-out` | `cubic-bezier(.52, 0, 0, 1)` |
| `--dur-fast` | `.3s` |
| `--dur-base` | `.7s` |
| `--dur-slow` | `1.2s` |
| `--reveal-distance` | `2rem` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Barlow Condensed", "Arial Narrow", "Helvetica Neue", Arial, sans-serif` |
| `--font-body` | `"Barlow Semi Condensed", "Arial Narrow", "Helvetica Neue", Arial, sans-serif` |
| `--font-label` | `"Barlow Condensed", "Arial Narrow", "Helvetica Neue", Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1429×2000 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×1120 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/set-01/model-01.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/set-02/model-01.glb` | modelo 3D genérico (sin marca) |
| `assets/media/image-07.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1600×1064 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×532 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
