# Plataforma de anuncios UGC con IA (`ai-ugc-creator`)

> Landing clara para un producto SaaS de creación de vídeos: fondo con degradado y ruido, carrusel de vídeos verticales tipo creador en el hero y reseñas en columnas que se desplazan sin fin.

| Campo | Valor |
|---|---|
| Identificador | `ai-ugc-creator` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/ai-ugc-creator (capturado el 2026-11-25) |
| Catálogo de origen | "AI UGC Creator", grupo Paused |
| Categoría | tecnología / SaaS |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | herramientas de IA para vídeo y anuncios, plataformas de contenido UGC, apps de marketing, generadores de creatividades, agencias de performance, startups SaaS con planes de suscripción |
| Estilo | claro, moderno, rosado + rojo, titulares sans grandes con una palabra en cursiva serif, tarjetas blancas redondeadas sobre degradado con textura |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.2 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Fondo fijo con degradado suave y textura de ruido que acompaña todo el scroll.
- Barra de navegación flotante en forma de cápsula con botón "+" que despliega los enlaces y el botón principal.
- Hero con titular que aparece con desenfoque y palabra destacada en cursiva, y un carrusel continuo de vídeos verticales con avatar, insignia de verificado, seguidores y etiqueta.
- Tarjetas de cifras con icono (contadores de ejemplo).
- Proceso en cuatro pasos numerados con imagen y texto alternando a izquierda y derecha.
- Reseñas en varias columnas que se desplazan en vertical sin fin, con foto, nombre y cargo.
- Tres planes de precios con el central destacado ("Most Popular") y lista de características.
- Preguntas frecuentes en acordeón a dos columnas; pie con imagen de fondo, columnas de enlaces y aviso legal.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- Neutralización: solo se cambió `assets/page.js` (ningún chunk compilado parcheado). Las fotos de los testimonios, que el original cargaba de randomuser.me, apuntan ahora a los placeholders locales `assets/media/set-02/*.webp`: cámbialas por fotos propias en `assets/page.js`.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `NoiseGradientBackground` | — | — |
| 2 | `NavbarFloating` | — | — |
| 3 | `HeroBillboardCreator` | `#hero` | hero |
| 4 | `MetricsIconCards` | `#metrics` | metrics |
| 5 | `FeaturesAlternatingSplit` | `#features` | features |
| 6 | `TestimonialColumnMarqueeCards` | `#testimonials` | testimonials |
| 7 | `PricingHighlightedCards` | `#pricing` | pricing |
| 8 | `FaqTwoColumn` | `#faq` | faq |
| 9 | `FooterSimpleMedia` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-O7oGNPdc.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `snow` |
| `--foreground` | `#1a0000` |
| `--card` | `#fff` |
| `--card-foreground` | `#1a0000` |
| `--popover` | `#fff` |
| `--popover-foreground` | `#1a0000` |
| `--primary` | `#e63946` |
| `--primary-foreground` | `snow` |
| `--secondary` | `#fff` |
| `--secondary-foreground` | `#1a0000` |
| `--muted` | `#ede6e6` |
| `--muted-foreground` | `#6a5858` |
| `--accent` | `#f5c4c7` |
| `--accent-foreground` | `#1a0000` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#e4dcdc` |
| `--input` | `#e4dcdc` |
| `--ring` | `#e63946` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-01/image-01.webp` | 1124×1120 (recorte con transparencia) |
| `assets/media/set-01/image-02.webp` | 1128×1120 (recorte con transparencia) |
| `assets/media/set-01/image-03.webp` | 1672×941 (recorte con transparencia) |
| `assets/media/set-01/image-04.webp` | 1123×1120 (recorte con transparencia) |
| `assets/media/set-02/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-02/image-02.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-02/image-03.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-02/image-04.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-02/image-05.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-02/image-06.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-01/image-05.webp` | 1123×1120 (recorte con transparencia) |
| `assets/media/set-01/image-06.webp` | 96×96 (recorte con transparencia) |
| `assets/media/set-03/video-01.mp4` | vídeo 720x1280, 2.5 s |
| `assets/media/set-03/video-02.mp4` | vídeo 720x1280, 4.0 s |
| `assets/media/set-03/video-03.mp4` | vídeo 720x1280, 2.4 s |
| `assets/media/set-03/video-04.mp4` | vídeo 720x1280, 4.0 s |
| `assets/media/set-03/video-05.mp4` | vídeo 720x1280, 4.0 s |
| `assets/media/set-03/video-06.mp4` | vídeo 720x1280, 4.0 s |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
