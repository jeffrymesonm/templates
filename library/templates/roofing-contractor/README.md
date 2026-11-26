# Empresa de techos y cubiertas (`roofing-contractor`)

> Landing clara y sobria para un contratista de techos, con rejilla de líneas finas sobre toda la página, galería de proyectos que se desplaza en horizontal con el scroll y un wordmark gigante en verde lima en el pie.

| Campo | Valor |
|---|---|
| Identificador | `roofing-contractor` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/roofing-contractor (capturado el 2026-11-25) |
| Catálogo de origen | "Roofing Contractor", grupo Live, kit `hydra` |
| Categoría | servicios / construcción y hogar |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | techadores, reparación de cubiertas, impermeabilización, canaletas, contratistas de exteriores, reformas del hogar |
| Estilo | claro y editorial, gris claro con fondo oscuro verde petróleo y acento lima, rejilla de columnas con líneas finas, titulares grandes de tracking cerrado, etiquetas en monoespaciada |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, PT Mono, Playfair Display |
| Idiomas | en |
| Tamaño | 6.6 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Preloader con la marca centrada sobre las líneas de columna, que da paso a la página (la nav entra con un retardo de 1,7 s, `introDelay`).
- Barra de navegación en caja flotante con enlaces y botón de presupuesto; por debajo de escritorio se convierte en un menú desplegable ("Menu").
- Hero a pantalla completa con foto de fondo ligada al scroll y titular que aparece línea a línea (`MaskedLineReveal`).
- Sección "Nosotros" con una frase larga revelada por líneas y foto con parallax.
- Servicios en mosaicos con inclinación 3D; cada uno abre un panel de detalles con tres datos clave ("Show details" / "Close details").
- Galería de proyectos en una pista horizontal que avanza con el scroll vertical, con etiqueta al pasar el ratón.
- Testimonios en coverflow con profundidad, botones anterior/siguiente y contador "1 / 5".
- FAQ en filas desplegables con glifo animado, y formulario de contacto con fotos que rotan cada 4 s; al enviar solo muestra el mensaje de éxito (no envía datos: hay que conectarlo a un servicio).
- Footer con wordmark gigante y un reloj en vivo de la ciudad (`city` y `timeZone` en `assets/page.js`).

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
| 1 | `LoaderHairlineColumns` | — | — |
| 2 | `NavbarBoxLinks` | — | — |
| 3 | `HeroColumnGrid` | `#hero` | hero |
| 4 | `AboutIntroStatement` | `#about` | about |
| 5 | `ServicesIndustryTiles` | `#services` | services |
| 6 | `GalleryProjectTrack` | `#gallery` | gallery |
| 7 | `TestimonialDeepCoverflow` | `#testimonial` | testimonial |
| 8 | `FaqGlyphRows` | `#faq` | faq |
| 9 | `ContactColumnWindow` | `#contact` | contact |
| 10 | `FooterLimeWordmark` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-DTN5z0Xl.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#f5f5f5` |
| `--foreground` | `#000` |
| `--card` | `#e9e9e9` |
| `--card-foreground` | `#000` |
| `--popover` | `#f5f5f5` |
| `--popover-foreground` | `#000` |
| `--primary` | `#000` |
| `--primary-foreground` | `#f5f5f5` |
| `--secondary` | `#e9e9e9` |
| `--secondary-foreground` | `#000` |
| `--muted` | `#e9e9e9` |
| `--muted-foreground` | `#4f5859` |
| `--accent` | `#e1fcad` |
| `--accent-foreground` | `#122023` |
| `--deep` | `#122023` |
| `--deep-foreground` | `#e1fcad` |
| `--destructive` | `#e5484d` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#d8d8d8` |
| `--input` | `#c4c4c4` |
| `--ring` | `#000` |
| `--tint-1` | `#1a2c30` |
| `--tint-2` | `#eef7dc` |
| `--tint-3` | `#f1f6e7` |
| `--heading-weight` | `400` |
| `--heading-tracking` | `-.04em` |
| `--heading-leading` | `1.05` |
| `--text-display` | `clamp(2.5rem, 1.664rem + 3.429vw, 4.75rem)` |
| `--text-h1` | `clamp(2.5rem, 1.664rem + 3.429vw, 4.75rem)` |
| `--text-h2` | `clamp(2.25rem, 1.6rem + 2.667vw, 4rem)` |
| `--text-h3` | `clamp(1.5rem, 1.221rem + 1.143vw, 2.25rem)` |
| `--text-body-lg` | `clamp(1.25rem, 1.157rem + .381vw, 1.5rem)` |
| `--text-body` | `clamp(1rem, .977rem + .095vw, 1.0625rem)` |
| `--text-small` | `.9375rem` |
| `--text-label` | `.8125rem` |
| `--label-tracking` | `0em` |
| `--label-case` | `uppercase` |
| `--gutter` | `1rem` |
| `--max-w` | `1280px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(6.25rem, 4.857rem + 5.714vw, 10rem)` |
| `--gap` | `1rem` |
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
| `--font-body` | `"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"PT Mono", ui-monospace, Menlo, monospace` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×900 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1600×1513 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×757 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-12.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1600×1953 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×977 (recorte con transparencia) |
| `assets/media/image-16-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-16-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-17-1600.webp` | 1600×2000 (recorte con transparencia) |
| `assets/media/image-17-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-18-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-18-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-19-1600.webp` | 1600×1103 (recorte con transparencia) |
| `assets/media/image-19-800.webp` | 800×552 (recorte con transparencia) |
| `assets/media/image-20-1600.webp` | 1600×1710 (recorte con transparencia) |
| `assets/media/image-20-800.webp` | 800×855 (recorte con transparencia) |
| `assets/media/image-21-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-21-800.webp` | 800×1201 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
