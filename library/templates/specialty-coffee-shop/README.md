# Cafetería de especialidad cálida (`specialty-coffee-shop`)

> Landing para una cafetería o tostador: la marca en letra manuscrita gigante, vídeo con tarjetas flotantes, menú con filtros, un túnel de fotos al hacer scroll y club de suscripción de café.

| Campo | Valor |
|---|---|
| Identificador | `specialty-coffee-shop` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/specialty-coffee-shop (capturado el 2026-11-25) |
| Catálogo de origen | "Specialty Coffee Shop", grupo Paused, kit `joes` |
| Categoría | restaurante / cafetería |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | cafeterías de especialidad, tostadores de café, panaderías con barra de café, casas de té, bares de desayuno, tiendas con suscripción mensual de producto |
| Estilo | cálido y artesanal, crema + marrón café, fondo de aurora suave, tarjetas de vidrio, marca en letra manuscrita, botones en píldora con sombra |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.0 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Pantalla de carga con un trazo en espiral que se dibuja y desaparece.
- Cabecera con botón de pedido y menú a pantalla completa.
- Hero con la marca a todo el ancho en letra manuscrita, descripción, dos botones y vídeo con dos tarjetas de producto flotantes.
- Menú en cuadrícula con pestañas para filtrar por categoría (Espresso, Iced, Bakery).
- Historia en un túnel de fotos que avanza al hacer scroll, con titular y botón.
- Galería de fotos con título por foto que se recorre con el scroll.
- Suscripción en tres planes con foto, precio mensual, características y botón.
- Preguntas frecuentes en filas de vidrio desplegables junto a una foto con etiqueta.
- Barra de contacto con WhatsApp, correo y teléfono, y pie con la marca y tres columnas de enlaces.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- Las fotos que el original cargaba de bancos de imágenes externos (img.b2bpic.net y Pexels) apuntan ahora a los placeholders locales de `assets/media/templates/joes-coffee/`. El helper `_` del principio de `page.js` reparte esos placeholders entre el túnel de fotos, la galería y las preguntas frecuentes: cámbialo o pon rutas propias en cada `imageSrc`.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `AuroraBackground` | — | — |
| 2 | `LoaderSwirl` | — | — |
| 3 | `NavbarFullscreen` | — | — |
| 4 | `HeroBillboardBrandFloatingCards` | `#hero` | hero |
| 5 | `FeaturesFilterGrid` | `#menu` | menu |
| 6 | `HeroImageTunnel` | `#bean-to-cup` | story |
| 7 | `GalleryCupTrack` | `#gallery` | gallery |
| 8 | `PricingBeanClub` | `#pricing` | pricing |
| 9 | `FaqGlassRows` | `#faq` | faq |
| 10 | `ContactBar` | `#contact` | contact |
| 11 | `FooterBrand` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-Ck6600cW.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#f5f0e8` |
| `--foreground` | `#2c1810` |
| `--card` | `#ede7db` |
| `--card-foreground` | `#2c1810` |
| `--popover` | `#ede7db` |
| `--popover-foreground` | `#2c1810` |
| `--primary` | `#2c1810` |
| `--primary-foreground` | `#f5f0e8` |
| `--secondary` | `#fff` |
| `--secondary-foreground` | `#2c1810` |
| `--muted` | `#e5dfd7` |
| `--muted-foreground` | `#72645c` |
| `--accent` | `#8b7355` |
| `--accent-foreground` | `#2c1810` |
| `--deep` | `#2c1810` |
| `--deep-foreground` | `#f5f0e8` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#ddd6ce` |
| `--input` | `#ddd6ce` |
| `--ring` | `#2c1810` |
| `--heading-weight` | `600` |
| `--heading-tracking` | `0em` |
| `--heading-leading` | `1.15` |
| `--text-display` | `clamp(4.5rem, .8rem + 17.5vw, 16.5rem)` |
| `--text-h1` | `clamp(2.25rem, 1.3rem + 3.6vw, 4.5rem)` |
| `--text-h2` | `clamp(1.875rem, 1.45rem + 1.75vw, 3rem)` |
| `--text-h3` | `clamp(1.25rem, 1.08rem + .7vw, 1.875rem)` |
| `--text-body-lg` | `clamp(1rem, .92rem + .33vw, 1.25rem)` |
| `--text-body` | `clamp(1rem, .96rem + .17vw, 1.125rem)` |
| `--text-small` | `.9375rem` |
| `--text-label` | `.875rem` |
| `--label-tracking` | `0em` |
| `--label-case` | `none` |
| `--gutter` | `1.5rem` |
| `--max-w` | `1104px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `5rem` |
| `--gap` | `clamp(.75rem, .65rem + .4vw, 1rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.16, 1, .3, 1)` |
| `--ease-in-out` | `cubic-bezier(.7, 0, .3, 1)` |
| `--dur-fast` | `.3s` |
| `--dur-base` | `.7s` |
| `--dur-slow` | `1.2s` |
| `--reveal-distance` | `1.5rem` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Messy Handwritten", sans-serif` |
| `--font-body` | `"Inter", sans-serif` |
| `--font-label` | `"Inter", sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-01/video-01.mp4` | vídeo 1280x720, 4.7 s |
| `assets/media/set-01/image-01.webp` | 1086×1448 (recorte con transparencia) |
| `assets/media/set-02/image-01.webp` | 600×400 (recorte con transparencia) |
| `assets/media/set-02/image-02.webp` | 600×609 (recorte con transparencia) |
| `assets/media/set-02/image-03.webp` | 600×900 (recorte con transparencia) |
| `assets/media/set-02/image-04.webp` | 600×400 (recorte con transparencia) |
| `assets/media/set-02/image-05.webp` | 600×899 (recorte con transparencia) |
| `assets/media/set-02/image-06.webp` | 600×410 (recorte con transparencia) |
| `assets/media/set-02/image-07.webp` | 600×400 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
