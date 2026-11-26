# Plataforma SaaS de email marketing con IA (`ai-email-platform`)

> Landing clara y luminosa para un producto SaaS, con rayos de luz de fondo, tarjetas flotantes alrededor del titular y una captura grande del panel que se endereza en 3D al hacer scroll.

| Campo | Valor |
|---|---|
| Identificador | `ai-email-platform` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/ai-email-platform (capturado el 2026-11-25) |
| Catálogo de origen | "AI Email Platform", grupo Paused |
| Categoría | software / SaaS |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | plataformas SaaS, herramientas de email marketing y automatización, startups de IA, apps B2B, CRMs, herramientas de analítica |
| Estilo | claro y tecnológico, fondo gris muy claro con azul eléctrico, tarjetas con bordes suaves, sombras azuladas en los botones, animaciones de aparición con desenfoque |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.1 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Fondo fijo de rayos de luz centrados y menú flotante tipo píldora con desplegable.
- Hero con grupo de avatares ("Trusted by…"), titular grande, dos botones, nota de confianza y cuatro tarjetas de logo flotando a los lados.
- Captura del panel del producto que se inclina en 3D y se endereza con el scroll, más una cinta de logos en movimiento.
- Rejilla de funcionalidades partida (dos tarjetas arriba y una destacada abajo con botón y avatares).
- Tres métricas grandes con lista de puntos y sección "cómo funciona" en tres pasos con imagen.
- Tres planes de precios en tarjetas de dos capas (precio y botón arriba, lista de ventajas debajo).
- Carrusel de testimonios con foto grande y botones anterior/siguiente, FAQ a dos columnas con acordeón y blog en tarjetas.
- Llamada a la acción final con dos botones y pie con tres columnas de enlaces.
- Textos que aparecen palabra a palabra con efecto de desenfoque (`textAnimation: fade-blur`).

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- **Parche de maquetación en `assets/HeroBillboardFloatingCards-*.js`**: la tarjeta flotante "middle-right" pasa de
  `right-0` a `right-4`. Con `right-0` y su giro, a 768 px sobresalía unos píxeles y creaba scroll horizontal (ya
  ocurría en el original de Webild). No se cambió ningún texto en los chunks compilados.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `LightRaysCenterBackground` | — | — |
| 2 | `NavbarDropdown` | — | — |
| 3 | `HeroBillboardFloatingCards` | `#hero` | hero |
| 4 | `FeaturesGridSplit` | `#features` | features |
| 5 | `MetricsFeatureCards` | `#metrics` | metrics |
| 6 | `FeaturesMediaCards` | — | — |
| 7 | `PricingLayeredCards` | `#pricing` | pricing |
| 8 | `TestimonialDetailedCards` | `#testimonials` | testimonials |
| 9 | `FaqTwoColumn` | `#faq` | faq |
| 10 | `BlogSimpleCards` | `#blog` | blog |
| 11 | `ContactCta` | `#contact` | contact |
| 12 | `FooterSimple` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-DrZn2XNn.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#f8fafc` |
| `--foreground` | `#0f172a` |
| `--card` | `#f1f5f9` |
| `--card-foreground` | `#0f172a` |
| `--popover` | `#f1f5f9` |
| `--popover-foreground` | `#0f172a` |
| `--primary` | `#106feb` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#e2e8f0` |
| `--secondary-foreground` | `#0f172a` |
| `--muted` | `#e5e8eb` |
| `--muted-foreground` | `#616674` |
| `--accent` | `#b4d4f8` |
| `--accent-foreground` | `#0f172a` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#dcdfe3` |
| `--input` | `#dcdfe3` |
| `--ring` | `#106feb` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01.webp` | 128×128 (recorte con transparencia) |
| `assets/media/image-02.webp` | 128×128 (recorte con transparencia) |
| `assets/media/image-03.webp` | 128×128 (recorte con transparencia) |
| `assets/media/image-04.webp` | 128×128 (recorte con transparencia) |
| `assets/media/image-05.webp` | 1672×941 (recorte con transparencia) |
| `assets/media/image-06.webp` | 1672×941 (recorte con transparencia) |
| `assets/media/image-07.webp` | 1672×941 (recorte con transparencia) |
| `assets/media/image-08.webp` | 1254×1254 (recorte con transparencia) |
| `assets/media/image-09.webp` | 1254×1254 (recorte con transparencia) |
| `assets/media/image-10.webp` | 1254×1254 (recorte con transparencia) |
| `assets/media/image-11.webp` | 1254×1254 (recorte con transparencia) |
| `assets/media/image-12.webp` | 5852×3544 (recorte con transparencia) |
| `assets/media/image-13.webp` | 1500×1494 (recorte con transparencia) |
| `assets/media/image-14.webp` | 1500×1494 (recorte con transparencia) |
| `assets/media/image-15.webp` | 1500×1494 (recorte con transparencia) |
| `assets/media/image-16.webp` | 1256×1256 (recorte con transparencia) |
| `assets/media/image-17.webp` | 1241×1241 (recorte con transparencia) |
| `assets/media/image-18.webp` | 1184×1256 (recorte con transparencia) |
| `assets/media/image-19.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-20.webp` | 1199×1599 (recorte con transparencia) |
| `assets/media/image-21.webp` | 2304×1728 (recorte con transparencia) |
| `assets/media/image-22.webp` | 2304×1728 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
