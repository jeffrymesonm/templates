# Joyería artesanal de anillos (`fine-jewellery`)

> Landing cálida en tonos rosados para un taller de joyería, con un anillo en 3D que acompaña el scroll, serif clásica combinada con letra manuscrita y palabras "fantasma" en cursiva detrás de los titulares.

| Campo | Valor |
|---|---|
| Identificador | `fine-jewellery` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/fine-jewellery (capturado el 2026-11-25) |
| Catálogo de origen | "Fine Jewellery", grupo Live, kit `lustre` |
| Categoría | comercio / joyería y lujo |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | joyerías y talleres de joyería, anillos de compromiso y alianzas, orfebres, diseñadores de bisutería fina, relojerías, tiendas de regalos premium |
| Estilo | romántico y delicado, rosa empolvado con marrones, serif de alto contraste en mayúsculas, acentos en letra manuscrita, arcos finos y destellos, animaciones suaves |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, React Three Fiber, Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Archivo, Geist, Inter, Inter Tight, Playfair Display, Playfair Display SC, Qwitcher Grypen |
| Idiomas | en |
| Tamaño | 7.0 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Preloader con la marca y una frase manuscrita que se revela antes de entrar.
- Navegación en píldora con la marca, una nota (ciudad) y botón de cita.
- Hero con la marca partida a ambos lados de un arco con el modelo 3D del producto, frase manuscrita en curva y palabra fantasma en cursiva.
- Modelo 3D fijo (`ModelStage`) que cambia de pose en cada sección; ahora es un bloque neutro de ejemplo hasta que pongas tu `.glb`.
- Sección "sobre nosotros" con frase en líneas de texto grande y dos bloques de historia.
- Proceso en cinco pasos (de boceto a prueba final) y ficha técnica del producto en ocho filas numeradas.
- Precios en dos columnas con características y botón por opción.
- FAQ en filas desplegables numeradas y contacto con datos (dirección, correo, teléfono, horario) y formulario; al enviar solo muestra el mensaje de éxito (hay que conectarlo a un servicio).
- Footer con boletín (campo de correo), columnas de enlaces, enlaces legales y la marca como wordmark con frase manuscrita.

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
| 3 | `LoaderJewelReveal` | — | — |
| 4 | `NavbarSerifPill` | — | — |
| 5 | `HeroJewelDial` | `#hero` | hero |
| 6 | `AboutBigTypeStack` | `#about` | about |
| 7 | `ProcessExplodedParts` | `#process` | process |
| 8 | `ProductPartsLedger` | `#parts` | product |
| 9 | `PricingAxisColumns` | `#pricing` | pricing |
| 10 | `FaqTrackedRows` | `#faq` | faq |
| 11 | `ContactAnchorDetails` | `#contact` | contact |
| 12 | `FooterScriptWordmark` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-Bs9AT1yE.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#f3d2cf` |
| `--foreground` | `#52322b` |
| `--card` | `#f8e2df` |
| `--card-foreground` | `#52322b` |
| `--popover` | `#f8e2df` |
| `--popover-foreground` | `#52322b` |
| `--primary` | `#52322b` |
| `--primary-foreground` | `#fbeeec` |
| `--secondary` | `#ecc3bf` |
| `--secondary-foreground` | `#52322b` |
| `--muted` | `#f8e2df` |
| `--muted-foreground` | `#7a4f45` |
| `--accent` | `#a8432d` |
| `--accent-foreground` | `#fff` |
| `--deep` | `#2e1c18` |
| `--deep-foreground` | `#f6dcd8` |
| `--destructive` | `#b3261e` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#d9a9a4` |
| `--input` | `#d9a9a4` |
| `--ring` | `#52322b` |
| `--tint-1` | `#b47f78` |
| `--tint-2` | `#cf9d97` |
| `--tint-3` | `#e6bcb7` |
| `--backdrop-shade` | `120 50 62` |
| `--backdrop-glow` | `255 255 255` |
| `--backdrop-light` | `radial-gradient(ellipse 70% 60% at 50% 45%, rgb(var(--backdrop-glow) / .28) 0%, transparent 70%), radial-gradient(ellipse 120% 110% at 50% 50%, transparent 55%, rgb(var(--backdrop-shade) / .22) 100%)` |
| `--backdrop-deep-shade` | `255 255 255` |
| `--backdrop-deep` | `radial-gradient(ellipse 70% 60% at 50% 45%, rgb(var(--backdrop-deep-shade) / .06) 0%, transparent 70%), radial-gradient(ellipse 120% 110% at 50% 50%, transparent 55%, #00000059 100%)` |
| `--heading-weight` | `400` |
| `--heading-tracking` | `-.01em` |
| `--heading-leading` | `.92` |
| `--text-display` | `clamp(3.5rem, 1.6rem + 7.8vw, 8.5rem)` |
| `--text-h1` | `clamp(2.75rem, 1.9rem + 3.5vw, 5rem)` |
| `--text-h2` | `clamp(2rem, 1.6rem + 1.7vw, 3.25rem)` |
| `--text-h3` | `clamp(1.25rem, 1.15rem + .4vw, 1.5rem)` |
| `--text-script` | `clamp(2.25rem, 1.9rem + 1.4vw, 3.25rem)` |
| `--text-body-lg` | `clamp(.9375rem, .9rem + .15vw, 1.0625rem)` |
| `--text-body` | `clamp(.8125rem, .79rem + .1vw, .875rem)` |
| `--text-small` | `.75rem` |
| `--text-label` | `.6875rem` |
| `--label-tracking` | `.12em` |
| `--label-case` | `uppercase` |
| `--display-case` | `none` |
| `--metric-title-font` | `var(--font-heading)` |
| `--photo-radius` | `999px` |
| `--photo-ticks` | `none` |
| `--photo-saturate` | `1` |
| `--mask-pad-t` | `.14em` |
| `--mask-pad-b` | `.12em` |
| `--quote-leading` | `1.35` |
| `--gutter` | `clamp(1.25rem, .4143rem + 3.429vw, 3.5rem)` |
| `--max-w` | `1280px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(5.5rem, 4rem + 5vw, 9rem)` |
| `--gap` | `clamp(1rem, .85rem + .6vw, 1.5rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.19, 1, .22, 1)` |
| `--ease-in-out` | `cubic-bezier(.65, 0, .35, 1)` |
| `--dur-fast` | `.4s` |
| `--dur-base` | `.9s` |
| `--dur-slow` | `1.4s` |
| `--reveal-distance` | `1.5rem` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Playfair Display SC", "Didot", "Bodoni 72", Georgia, serif` |
| `--font-body` | `"Archivo", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"Archivo", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-accent` | `"Qwitcher Grypen", "Snell Roundhand", cursive` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1272×2000 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1258 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/set-01/model-01.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/set-02/model-01.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/image-04.webp` | 512×512 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
