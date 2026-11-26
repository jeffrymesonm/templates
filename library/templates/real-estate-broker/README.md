# Agencia inmobiliaria local (`real-estate-broker`)

> Landing negra y amarilla para una inmobiliaria, con un edificio dibujado con miles de caracteres (arte ASCII animado) que se deshace y recompone con el scroll, secciones numeradas tipo índice y wordmark ajustado al ancho en el footer.

| Campo | Valor |
|---|---|
| Identificador | `real-estate-broker` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/real-estate-broker (capturado el 2026-11-25) |
| Catálogo de origen | "Real Estate Broker", grupo Live, kit `dragonfly` |
| Categoría | inmobiliaria |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | agencias inmobiliarias, agentes y brokers independientes, gestoras de alquileres, promotoras, administradores de fincas, servicios de reubicación |
| Estilo | oscuro y tipográfico, negro con amarillo mostaza, mayúsculas condensadas, caracteres monoespaciados que forman figuras, etiquetas de código (SEC-01), botones rectos |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 7.4 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Preloader de columnas de caracteres (`LoaderGlyphColumns`) con la marca.
- Fondo fijo de caracteres (`GlyphFieldStage`, variante `architecture`) que dibuja edificios y se disuelve en polvo de letras con el scroll.
- Navegación compacta con marca, indicador de píxeles y menú a pantalla completa.
- Hero con titular grande en mayúsculas, descripción y dos botones.
- Inmuebles en carril horizontal de tarjetas con foto, etiqueta (en venta, vendido, alquiler, obra nueva) y descripción con precio.
- Servicios en cajas con etiqueta sobre una foto fija, y tarifas en tres columnas con precio en porcentaje o importe.
- Proceso de venta en capítulos fijos con foto que cambian con el scroll y reseñas en carrusel con puntos de navegación.
- Formulario de contacto con foto, campos obligatorios y selector de tema; al enviar solo muestra el mensaje de éxito (hay que conectarlo a un servicio).
- Footer en columnas de índice, texto informativo con dirección y horario, y la marca ajustada al ancho.

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
| 1 | `GlyphFieldStage` | — | — |
| 2 | `LoaderGlyphColumns` | — | — |
| 3 | `NavbarPixelBar` | — | — |
| 4 | `HeroGlyphField` | `#hero` | hero |
| 5 | `GalleryGlyphRail` | `#gallery` | gallery |
| 6 | `ServicesPixelBoxes` | `#services` | services |
| 7 | `PricingPixelPlans` | `#pricing` | pricing |
| 8 | `ProcessColumnSteps` | `#process` | process |
| 9 | `TestimonialPixelCarousel` | `#testimonial` | testimonial |
| 10 | `ContactFormPhoto` | `#contact` | contact |
| 11 | `FooterIndexColumns` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-CP2KwgsJ.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#000` |
| `--foreground` | `#f2f2f2` |
| `--card` | `#131313` |
| `--card-foreground` | `#f2f2f2` |
| `--popover` | `#131313` |
| `--popover-foreground` | `#f2f2f2` |
| `--primary` | `#f2f2f2` |
| `--primary-foreground` | `#000` |
| `--secondary` | `#131313` |
| `--secondary-foreground` | `#f2f2f2` |
| `--muted` | `#131313` |
| `--muted-foreground` | `#8a8a8a` |
| `--accent` | `#e8b02a` |
| `--accent-foreground` | `#000` |
| `--deep` | `#000` |
| `--deep-foreground` | `#f2f2f2` |
| `--destructive` | `#e5484d` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#1d1d1d` |
| `--input` | `#131313` |
| `--ring` | `#f2f2f2` |
| `--tint-1` | `#745815` |
| `--tint-2` | `#513e0f` |
| `--tint-3` | `#2e2308` |
| `--heading-weight` | `400` |
| `--heading-tracking` | `-.04em` |
| `--heading-leading` | `.92` |
| `--text-display` | `clamp(3.5rem, 1.0857rem + 9.905vw, 10rem)` |
| `--text-h1` | `clamp(2rem, 1.7rem + 1.2vw, 2.5rem)` |
| `--text-h2` | `clamp(2.5rem, 1.3857rem + 4.571vw, 5.5rem)` |
| `--text-h3` | `clamp(1rem, .93rem + .3vw, 1.25rem)` |
| `--text-body-lg` | `clamp(1.125rem, .93rem + .8vw, 1.5rem)` |
| `--text-body` | `1rem` |
| `--text-small` | `.8125rem` |
| `--text-label` | `.6875rem` |
| `--label-tracking` | `.08em` |
| `--label-case` | `uppercase` |
| `--gutter` | `clamp(.75rem, .5rem + 1vw, 1.5rem)` |
| `--max-w` | `1280px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(3.5rem, 1.5rem + 8.4vw, 10rem)` |
| `--gap` | `clamp(.5rem, .3rem + .6vw, 1rem)` |
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
| `--font-heading` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |

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
| `assets/media/image-04-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1600×2000 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-14.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-16-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-16-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-17-1600.webp` | 1600×1103 (recorte con transparencia) |
| `assets/media/image-17-800.webp` | 800×552 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
