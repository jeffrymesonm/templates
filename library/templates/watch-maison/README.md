# Relojería de lujo (`watch-maison`)

> Landing monocroma para un producto de lujo único (un reloj) con un modelo 3D que acompaña todo el scroll, tipografía gigante y un fondo que cambia de tono entre secciones claras y oscuras.

| Campo | Valor |
|---|---|
| Identificador | `watch-maison` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/watch-maison (capturado el 2026-11-25) |
| Catálogo de origen | "Watch Maison", grupo Live, kit `thewatch` |
| Categoría | comercio / producto de lujo |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | relojerías y marcas de relojes, joyerías, marcas de accesorios premium, fabricantes artesanales, lanzamientos de un único producto |
| Estilo | minimalista y monocromo (grises y negro), tipografía display enorme y fina, mucho aire, modelo 3D protagonista y animaciones lentas |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, React Three Fiber, Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Lexend, Playfair Display |
| Idiomas | en |
| Tamaño | 8.4 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Preloader con un anillo de progreso que se cierra antes de mostrar la página.
- Modelo 3D fijo (`ModelStage`) que gira, cambia de pose y se desmonta en piezas según la sección; ahora es un bloque neutro de ejemplo hasta que pongas tu `.glb` (las piezas se nombran en `items[].part`).
- Hero con el nombre del modelo a tamaño de pantalla, esfera de reloj dibujada detrás y selector de acabados.
- Sección "sobre nosotros" con una frase en líneas de texto gigante que aparecen con el scroll y dos bloques de historia.
- Proceso con las piezas del producto (esfera, rotor, platina…) que se separan en el aire con su nombre.
- Métrica con contador animado (0 → 60 h) sobre fondo oscuro.
- Precios en cuatro columnas con características y botón por edición.
- CTA a pantalla partida y contacto con datos (dirección, correo, teléfono, horario) y formulario; al enviar solo muestra el mensaje de éxito (hay que conectarlo a un servicio).
- Footer con la marca ajustada al ancho de la pantalla, columnas de enlaces y enlaces legales.

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
| 3 | `LoaderRingProgress` | — | — |
| 4 | `NavbarHairlineRing` | — | — |
| 5 | `HeroWordmarkDial` | `#hero` | hero |
| 6 | `AboutBigTypeStack` | `#about` | about |
| 7 | `ProcessExplodedParts` | `#process` | process |
| 8 | `MetricsMechanicalHeart` | `#metrics` | metrics |
| 9 | `PricingAxisColumns` | `#pricing` | pricing |
| 10 | `CtaSplitAnchor` | `#cta` | cta |
| 11 | `ContactAnchorDetails` | `#contact` | contact |
| 12 | `FooterWordmark` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-CqeK2UYq.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#ebebeb` |
| `--foreground` | `#000` |
| `--card` | `#e2e2e2` |
| `--card-foreground` | `#0a0a0a` |
| `--popover` | `#ebebeb` |
| `--popover-foreground` | `#0a0a0a` |
| `--primary` | `#0a0a0a` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#dcdcdc` |
| `--secondary-foreground` | `#0a0a0a` |
| `--muted` | `#e2e2e2` |
| `--muted-foreground` | `#5c5c5c` |
| `--accent` | `#0a0a0a` |
| `--accent-foreground` | `#fff` |
| `--deep` | `#0a0a0a` |
| `--deep-foreground` | `#fff` |
| `--destructive` | `#b3261e` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#c4c4c4` |
| `--input` | `#c4c4c4` |
| `--ring` | `#000` |
| `--tint-1` | `#767676` |
| `--tint-2` | `#999` |
| `--tint-3` | `#bcbcbc` |
| `--backdrop-shade` | `0 0 0` |
| `--backdrop-light` | `radial-gradient(ellipse 55% 95% at 100% 0%, rgb(var(--backdrop-shade) / calc(.3 * var(--backdrop-strength,1))) 0%, rgb(var(--backdrop-shade) / calc(.08 * var(--backdrop-strength,1))) 60%, transparent 100%), linear-gradient(125deg, transparent 8%, rgb(var(--backdrop-shade) / calc(.14 * var(--backdrop-strength,1))) 28%, transparent 48%)` |
| `--backdrop-deep-shade` | `255 255 255` |
| `--backdrop-deep` | `radial-gradient(ellipse 55% 95% at 100% 0%, rgb(var(--backdrop-deep-shade) / .12) 0%, rgb(var(--backdrop-deep-shade) / .03) 60%, transparent 100%), linear-gradient(125deg, transparent 8%, rgb(var(--backdrop-deep-shade) / .06) 28%, transparent 48%)` |
| `--heading-weight` | `300` |
| `--heading-tracking` | `.01em` |
| `--heading-leading` | `.82` |
| `--mask-pad-t` | `.15em` |
| `--mask-pad-b` | `.15em` |
| `--text-display` | `clamp(4rem, .9rem + 12.4vw, 12rem)` |
| `--text-h1` | `clamp(2.5rem, 1.9rem + 2.6vw, 4rem)` |
| `--text-h2` | `clamp(1.75rem, 1.5rem + 1vw, 2.5rem)` |
| `--text-h3` | `clamp(1.25rem, 1.15rem + .4vw, 1.5rem)` |
| `--text-body-lg` | `clamp(1rem, .96rem + .18vw, 1.125rem)` |
| `--text-body` | `clamp(.875rem, .85rem + .1vw, .9375rem)` |
| `--text-small` | `.8125rem` |
| `--text-label` | `.6875rem` |
| `--label-tracking` | `.06em` |
| `--label-case` | `uppercase` |
| `--gutter` | `clamp(1rem, .2rem + 3.3vw, 3rem)` |
| `--max-w` | `1280px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(5rem, 4rem + 4vw, 8rem)` |
| `--gap` | `clamp(1rem, .85rem + .6vw, 1.5rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.215, .61, .355, 1)` |
| `--ease-in-out` | `cubic-bezier(.65, 0, .35, 1)` |
| `--dur-fast` | `.4s` |
| `--dur-base` | `.8s` |
| `--dur-slow` | `1.2s` |
| `--reveal-distance` | `1.5rem` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Lexend", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1428×2000 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1121 (recorte con transparencia) |
| `assets/media/set-01/model-01.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/set-02/envmap.b70a253b421b.exr` | mapa de iluminación 3D genérico (sin marca) |
| `assets/media/set-02/model-01.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/set-02/noise.f89691c0682f.png` | 256×256 (recorte con transparencia) |
| `assets/media/image-03.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×1200 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
