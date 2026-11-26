# Marca de refrescos con lata 3D (`soda-brand`)

> Tienda de una página para una marca de bebidas en lata, con una lata 3D en tiempo real que acompaña el scroll, titulares serif gigantes que se destapan letra a letra y un selector de sabores que cambia el color de toda la sección.

| Campo | Valor |
|---|---|
| Identificador | `soda-brand` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/prebiotic-soda (capturado el 2026-11-25) |
| Catálogo de origen | "Soda Brand", grupo Live, kit `weeby` |
| Categoría | alimentación y bebidas / e-commerce de producto |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | marcas de refrescos, kombuchas, aguas con gas, cervezas artesanas, zumos, bebidas funcionales, cafés en lata, cualquier marca de producto envasado con pocos sabores o variantes |
| Estilo | divertido y de producto, fondo claro con granate profundo y rojo intenso, serif negra muy gruesa en mayúsculas para titulares, sans geométrica para el cuerpo, escena 3D y transiciones de color por sabor |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 8.2 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- **Lata 3D fija (Three.js)** que viaja por el hero, el selector de sabores y la sección de ingredientes, con fruta flotante y un vertido animado. Necesita los modelos `.glb` originales (ver "Recursos").
- **Loader con garabato** que se desenrolla sobre un fondo de color y muestra el logo antes de entrar.
- **Hero de dos líneas** en serif gigante que se destapa letra a letra, con tarjeta de producto destacado y una franja de descuento por email.
- **Selector de sabores** a pantalla completa: al elegir un sabor cambian el color de fondo, el texto y la etiqueta de la lata.
- **Carrusel de productos** con imagen alternativa al pasar el ratón, etiqueta "Best Seller" y botones anterior/siguiente.
- **Navegación con menú de tienda** desplegable (al pasar el ratón o con el foco) con mini fichas de producto, cuenta y carrito.
- **Testimonios con fotos fijas** (sticky) que cambian con el scroll y mini fichas de producto al lado.
- **FAQ en acordeón** con líneas, formulario de suscripción por email y pie con columnas y logo grande.
- **Píldora flotante** con lata y descuento que se puede ocultar.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- **Ruta de medios corregida en chunks compilados**: la base de medios apuntaba a una carpeta que no existía
  (`assets/media/templates/<slug>`); se cambió por `assets/media` en `page.js` y en `CanFlavourStage-*.js`,
  `FooterFizzWordmark-*.js`, `HeroCanStage-*.js`, `MiniProductCard-*.js`, `NavbarCartWordmark-*.js`,
  `ProductCardCarousel-*.js`, `ProductFlavourSlider-*.js` y `TestimonialStickyPhotos-*.js` (solo ese literal).
- **Los valores por defecto de los chunks** (si se omite una prop) conservan los textos de la demo original; no se
  ven porque `page.js` pasa todas las props. Si quitas una prop, revisa qué texto aparece.
- **La escena 3D no carga con los modelos de ejemplo**: `CanFlavourStage` espera una malla llamada `Can`, una cámara y
  animaciones dentro de `AnimCan.glb`. Con el bloque neutro falla (error en consola) y la página sigue sin la lata.
- **Pendiente de neutralizar en `assets/media/`**: los logos `img/*-logo-white.png` y `img/*-logo-cream.png` conservan
  en su transparencia la silueta del logotipo original (se ve en la navegación, el loader y el pie, porque el
  componente usa el PNG como máscara), y los nombres de archivo de los placeholders (que también se dibujan como
  etiqueta) llevan el nombre de la marca demo. Sustituye esos archivos por los tuyos.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `CanFlavourStage` | — | — |
| 2 | `LoaderScribbleUnwind` | — | — |
| 3 | `NavbarCartWordmark` | — | navbar |
| 4 | `HeroCanStage` | `#hero` | hero |
| 5 | `ProductFlavourSlider` | `#flavours` | product |
| 6 | `ProductCardCarousel` | `#products` | products |
| 7 | `FeaturesPourStage` | `#features` | features |
| 8 | `TestimonialStickyPhotos` | `#testimonial` | testimonial |
| 9 | `FaqLineAccordion` | `#faq` | faq |
| 10 | `ContactEmailLine` | `#contact` | contact |
| 11 | `FooterFizzWordmark` | `#footer` | footer |
| 12 | `FloatingCanPill` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-OqIy3boT.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#fcfcfc` |
| `--foreground` | `#2c0c18` |
| `--card` | `#f2f2f2` |
| `--card-foreground` | `#2c0c18` |
| `--popover` | `#fcfcfc` |
| `--popover-foreground` | `#2c0c18` |
| `--primary` | `#3b1222` |
| `--primary-foreground` | `#fcfcfc` |
| `--secondary` | `#e4dfdb` |
| `--secondary-foreground` | `#2c0c18` |
| `--muted` | `#e4dfdb` |
| `--muted-foreground` | `#6a545c` |
| `--accent` | `#c4061c` |
| `--accent-foreground` | `#fff3e8` |
| `--deep` | `#1a0204` |
| `--deep-foreground` | `#f2f2f2` |
| `--destructive` | `#e5484d` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#b9afb3` |
| `--input` | `#b9afb3` |
| `--ring` | `#2c0c18` |
| `--accent-deep` | `var(--accent)` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Recoleta", Georgia, "Times New Roman", serif` |
| `--font-body` | `"ITC Avant Garde Gothic", "Helvetica Neue", Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/set-01/hdr.ktx2` | mapa de iluminación 3D genérico (sin marca) |
| `assets/media/set-02/ITCAvantGardeStd-Demi.otf` | tipografía propia del diseño: **licencia por verificar antes de publicar** |
| `assets/media/set-02/ITCAvantGardeStd-Medium.otf` | tipografía propia del diseño: **licencia por verificar antes de publicar** |
| `assets/media/set-02/Recoleta-Black.otf` | tipografía propia del diseño: **licencia por verificar antes de publicar** |
| `assets/media/set-02/Recoleta-SemiBold.otf` | tipografía propia del diseño: **licencia por verificar antes de publicar** |
| `assets/media/set-03/weeby-berry-card.webp` | 490×512 (recorte con transparencia) |
| `assets/media/set-03/weeby-berry-ice.webp` | 928×1170 (recorte con transparencia) |
| `assets/media/set-03/weeby-berry-studio.webp` | 1392×1755 (recorte con transparencia) |
| `assets/media/set-03/image-01.webp` | 163×240 (recorte con transparencia) |
| `assets/media/set-03/weeby-guava-card.webp` | 490×512 (recorte con transparencia) |
| `assets/media/set-03/weeby-guava-ice.webp` | 928×1170 (recorte con transparencia) |
| `assets/media/set-03/weeby-guava-studio.webp` | 1392×1755 (recorte con transparencia) |
| `assets/media/set-03/weeby-lemon-card.webp` | 490×512 (recorte con transparencia) |
| `assets/media/set-03/weeby-lemon-ice.webp` | 928×1170 (recorte con transparencia) |
| `assets/media/set-03/weeby-lemon-studio.webp` | 1392×1755 (recorte con transparencia) |
| `assets/media/set-03/weeby-logo-cream.png` | 1408×376 (recorte con transparencia) |
| `assets/media/set-03/image-02.png` | 1017×318 (recorte con transparencia) |
| `assets/media/set-03/weeby-testimonial-bg1.webp` | 1920×1200 (recorte con transparencia) |
| `assets/media/set-03/weeby-testimonial-bg2.webp` | 1920×1200 (recorte con transparencia) |
| `assets/media/set-03/weeby-testimonial-bg3.webp` | 1920×1200 (recorte con transparencia) |
| `assets/media/set-03/weeby-testimonial-h1.webp` | 356×372 (recorte con transparencia) |
| `assets/media/set-03/weeby-testimonial-h2.webp` | 356×372 (recorte con transparencia) |
| `assets/media/set-03/weeby-testimonial-h3.webp` | 356×372 (recorte con transparencia) |
| `assets/media/set-03/weeby-variety-card.webp` | 980×1024 (recorte con transparencia) |
| `assets/media/set-03/weeby-variety-ice.webp` | 928×1170 (recorte con transparencia) |
| `assets/media/set-03/weeby-variety-studio.webp` | 1392×1755 (recorte con transparencia) |
| `assets/media/set-04/AnimCan.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/set-04/CanWater.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/set-05/blackberry.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/set-05/blueberry.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/set-05/guava.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/set-05/kiwi-half.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/set-05/kiwi.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/set-05/lemon.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/set-05/lime-half.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/set-05/lime.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/set-05/raspberry.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/set-04/Paper.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-06/droplet_matcap.webp` | 256×256 (recorte con transparencia) |
| `assets/media/set-06/glass-alpha.webp` | 496×1169 (recorte con transparencia) |
| `assets/media/set-06/noise.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-06/normal-edge.webp` | 496×1169 (recorte con transparencia) |
| `assets/media/set-06/voronoi.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-06/weeby-berry.webp` | 2048×2048 (recorte con transparencia) |
| `assets/media/set-06/weeby-guava.webp` | 2048×2048 (recorte con transparencia) |
| `assets/media/set-06/weeby-lemon.webp` | 2048×2048 (recorte con transparencia) |
| `assets/media/set-06/weeby-stream.png` | 512×1024 (recorte con transparencia) |
| `assets/media/set-07/SodaLoop.webm` | vídeo 496x1169, 3.9 s |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
