# Inmobiliaria de lujo (`luxury-real-estate`)

> Landing bilingüe (español / inglés) para una inmobiliaria de alto nivel, con un hero de vídeo que avanza al hacer scroll y títulos que se rellenan palabra a palabra.

| Campo | Valor |
|---|---|
| Identificador | `luxury-real-estate` |
| Fuente | `source/github-templates/luxury-real-estate` — https://github.com/jeffrymesonm/templates (commit `a7e51c7`) |
| Diseño de referencia | Webild `/templates/luxury-real-estate` (kit no documentado en el repo original), reconstruido en HTML estático en el repo original |
| Categoría | inmobiliaria |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | inmobiliarias de lujo, promotoras, agentes independientes, alquiler vacacional premium, arquitectos o constructoras de vivienda unifamiliar |
| Estilo | editorial, minimalista, cálido (crema + negro + dorado), fotografía a sangre, vidrio esmerilado, animaciones suaves |
| Framework / lenguaje | HTML + CSS + JavaScript (sin framework, sin build) |
| Dependencias | Google Fonts: Inter Tight (400, 500), Urbanist (400, 500). Ninguna librería JS externa. |
| Idiomas | es + en con selector (ES/EN en la barra y en el menú) |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` + `tools/interactions.cjs`): 375/768/1440 px sin scroll horizontal, consola limpia, 0 recursos rotos; probados menú, cambio ES↔EN y formulario (modo demo: valida pero no envía hasta configurar `data-endpoint`) |

## Características visuales y funcionales

- Preloader oscuro: la línea de marca se rellena de izquierda a derecha y una barra de progreso avanza mientras carga el vídeo del hero (máx. 8 s).
- Hero fijo de 300vh: el vídeo avanza y retrocede con el scroll (scroll-scrubbing) mientras el texto queda anclado; el título y la entradilla aparecen palabra a palabra.
- Menú a pantalla completa con cortinilla (clip-path), enlaces que suben escalonados, bloqueo de scroll, `Escape` para cerrar y gestión de foco.
- Selector de idioma ES/EN: idioma elegido por `?lang=`, elección guardada, idioma del navegador o español; sin parpadeo del idioma base.
- Frase manifiesto cuyas palabras pasan de 15 % a 100 % de opacidad con el scroll; fotos con zoom suave al cruzar la pantalla.
- Cuadrícula de 6 propiedades con aparición escalonada.
- Tarjeta de contacto esmerilada sobre una foto con parallax; formulario validado (modo demo o envío a un endpoint) y botón de email.
- Pie con 4 columnas y año actualizado automáticamente.
- `prefers-reduced-motion`: sin preloader, sin vídeo (queda el póster) y sin animaciones.

## Secciones

`assets/js/translations.js` e `assets/js/i18n.js` afectan a todas las secciones (textos traducibles).

| Orden | Sección | Selector | JS que usa |
|---|---|---|---|
| 1 | Preloader | `[data-preloader]` | `assets/js/preloader.js` |
| 2 | Navegación (barra + menú a pantalla completa) | `.site-nav` (`[data-menu-root]`) | `assets/js/menu.js` |
| 3 | Hero (vídeo con scroll) | `#top` (`[data-hero]`) | `assets/js/hero-video.js`, `assets/js/scroll-effects.js`, `assets/js/words.js`, `assets/js/preloader.js` |
| 4 | Manifiesto (Nosotros) | `#about` | `assets/js/words.js`, `assets/js/scroll-effects.js` |
| 5 | Propiedades | `#properties` | `assets/js/words.js`, `assets/js/reveal.js`, `assets/js/scroll-effects.js` |
| 6 | Contacto | `#contact` | `assets/js/contact-form.js`, `assets/js/reveal.js`, `assets/js/scroll-effects.js` |
| 7 | Pie de página | `.site-footer` | `assets/js/reveal.js`, `assets/js/footer-year.js` |

Para quitar o mover una sección: mueve su bloque en `index.html` (desde su comentario hasta `</section>`);
si quitas la última que usa un JS, puedes quitar también su `<script>`.

## Instalar y ejecutar

No hay dependencias que instalar.

```bash
npx serve .          # o: python -m http.server 8000
```

Abrir `http://localhost:3000` (o `:8000`). Abrir `index.html` con doble clic también funciona, salvo el envío real del
formulario a un `data-endpoint` (desde `file://` el origen es `null` y la mayoría de servicios lo rechazan). Las
fuentes de Google necesitan conexión en ambos casos.

## Personalización

| Qué | Dónde |
|---|---|
| Nombre de marca | buscar `Tu Marca` / `Your Brand` en `index.html` y `assets/js/` |
| Colores | `assets/css/styles.css` → `:root` (`--color-bg` #faf8f5, `--color-fg` #1a1a1a, `--color-secondary` #f0ece6, `--color-accent` #c9a96e, `--color-white`, `--color-error`); además `<meta name="theme-color">` y el favicon SVG en línea del `<head>` |
| Tipografías | `<link>` de Google Fonts en `index.html` + `--font-body` (Inter Tight) y `--font-heading` (Urbanist) |
| Medidas | `:root` → `--radius`, `--max-w`, `--gutter`, `--section-space` |
| Contacto | email del botón `.email-pill` (`mailto:hola@example.com`) y dirección del pie (`Calle Ejemplo 123, Ciudad`) en `index.html`. No hay teléfono ni WhatsApp. |
| Formulario | `data-endpoint=""` en `<form data-contact-form>`: vacío = modo demo (no envía nada y muestra el mensaje de éxito); con una URL `https://…` envía un POST `FormData` y espera un 2xx. Mensajes en `translations.js` (`contact.*`) y respaldo en español en `contact-form.js` (`FALLBACK`) |
| Textos traducidos | español en `index.html` (idioma base); inglés en `assets/js/translations.js` → `en`; mensajes que escribe el JS en `translations.js` → `es` |
| Textos sin traducción | el logo, las 4 zonas del pie (`Zona 1`…`Zona 4`), la marca del copyright y la dirección no tienen clave `data-i18n`: se ven igual en los dos idiomas |
| Año del pie | lo escribe `footer-year.js`; `20XX` solo se ve sin JS |

## Recursos que deben sustituirse

| Archivo | Medidas | Dónde se usa |
|---|---|---|
| `assets/video/hero.mp4` | 1920×1080, 30 fps, 7,4 s | Hero (pantallas ≥ 768 px), avanza con el scroll |
| `assets/video/hero-small.mp4` | 1280×720 | Hero en móviles (< 768 px) |
| `assets/img/hero-poster.svg` | 1920×1080 | Póster del vídeo del hero (y hero fijo con movimiento reducido) |
| `assets/img/statement.svg` | 2400×1350 | Foto del manifiesto (`#about`) |
| `assets/img/villa-1.svg` … `villa-6.svg` | 1400×1400 | Fotos de las 6 tarjetas de propiedades |
| `assets/img/contact.svg` | 2400×1600 | Fondo con parallax de la sección de contacto |
| `assets/img/avatar.svg` | 160×160 | Avatar del botón de email en la tarjeta de contacto |

El hero avanza el vídeo con el scroll, así que el vídeo propio necesita keyframes frecuentes o el scroll irá a saltos:
`ffmpeg -i entrada.mp4 -c:v libx264 -g 5 -crf 23 -an -movflags +faststart hero.mp4` (y lo mismo para `hero-small.mp4`
a 1280×720). `hero-video.js` descarga el vídeo completo antes de reproducirlo, así que conviene que pese poco.

## Licencia y condiciones de uso

- El repositorio de origen (https://github.com/jeffrymesonm/templates) no incluye archivo de licencia (GitHub
  `licenseInfo`: null): todos los derechos quedan reservados por su autor (jeffrymesonm) salvo que conceda permiso.
- La maquetación es una recreación estática de una plantilla de Webild (webild.io), un catálogo propietario cuyos
  elementos se marcan como «Webild original».
- Las fotos y vídeos originales se han eliminado y sustituido por placeholders; los textos y datos de la marca original
  se han neutralizado.
- El icono de flecha está adaptado de Lucide (licencia ISC).
- Antes de usarla en un proyecto publicado, consigue permiso del autor del repositorio y revisa las condiciones de Webild.
