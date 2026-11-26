# Cafetería de brunch (`brunch-cafe`)

> Landing cálida y divertida para una cafetería de brunch, con el nombre en serif gigante sobre una ventana de foto, polaroids dispersas, pegatinas giratorias y reseñas en carrusel de vídeo.

| Campo | Valor |
|---|---|
| Identificador | `brunch-cafe` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/brunch-cafe (capturado el 2026-11-25) |
| Catálogo de origen | "Brunch Cafe", grupo Live, kit `toasted` |
| Categoría | restauración / cafetería |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | cafeterías de brunch, panaderías, cafés de especialidad, pastelerías, restaurantes de desayuno, salones de té |
| Estilo | cálido y desenfadado, crema con rojo intenso, serif condensada gigante, fondo de rayas finas, etiquetas en monoespaciada con barras ("/menu"), pegatinas y polaroids |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: DM Mono, Geist, Instrument Serif, Inter, Inter Tight, Manrope, Playfair Display |
| Idiomas | en |
| Tamaño | 7.5 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Loader que pasa varias fotos de platos como en un tirón de paneles, con dos rótulos.
- Navegación con enlaces precedidos de barra ("/Menu") y botón de reservar.
- Hero con el nombre en serif gigante, descripción, foto en ventana que se agranda con el scroll y marquesina de palabras.
- Sección "por qué" con polaroids dispersas con pie de foto y pegatinas de texto giratorio.
- Servicios en tarjetas apiladas (brunch, cenas, clases) con foto principal, foto de detalle y botón.
- Bloque de historia con textura, retrato, pie de foto y pegatina.
- Productos más pedidos en una pista horizontal con nombre y precio.
- Testimonios en coverflow de tarjetas tipo vídeo con nombre, pie y cita.
- CTA con foto a pantalla completa y tarjeta, y footer con marca en marquesina, boletín y columnas de dirección, horario, contacto y redes.

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
| 1 | `LoaderPanelFlick` | — | — |
| 2 | `NavbarSlashLinks` | — | — |
| 3 | `HeroWordmarkWindow` | `#hero` | hero |
| 4 | `AboutScatteredPolaroids` | `#about` | about |
| 5 | `FeaturesStackedOffers` | `#services` | services |
| 6 | `StatementStoryTexture` | `#statement` | statement |
| 7 | `ProductBestsellerTrack` | `#product` | product |
| 8 | `TestimonialVideoCoverflow` | `#testimonial` | testimonial |
| 9 | `CtaDevourWindow` | `#cta` | cta |
| 10 | `FooterWordmarkMarquee` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-BXvy9nty.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#f8f5e9` |
| `--foreground` | `#ad0000` |
| `--card` | `#f6efc9` |
| `--card-foreground` | `#ad0000` |
| `--popover` | `#f8f5e9` |
| `--popover-foreground` | `#ad0000` |
| `--primary` | `#ad0000` |
| `--primary-foreground` | `#f8f5e9` |
| `--secondary` | `#efe5d2` |
| `--secondary-foreground` | `#ad0000` |
| `--muted` | `#e9e6de` |
| `--muted-foreground` | `#a8443c` |
| `--accent` | `#efe5d2` |
| `--accent-foreground` | `#ad0000` |
| `--deep` | `#3a1a14` |
| `--brand` | `#ad0000` |
| `--sand` | `#efe5d2` |
| `--deep-foreground` | `#f8f5e9` |
| `--destructive` | `#ad0000` |
| `--destructive-foreground` | `#f8f5e9` |
| `--border` | `#e9e3d6` |
| `--input` | `#ad0000` |
| `--ring` | `#ad0000` |
| `--tint-1` | `#f6efc9` |
| `--tint-2` | `#f3e3d3` |
| `--tint-3` | `#e9e6de` |
| `--heading-weight` | `400` |
| `--heading-tracking` | `-.045em` |
| `--heading-leading` | `1.05` |
| `--text-display` | `clamp(4rem, 1.8rem + 10vw, 11rem)` |
| `--text-h1` | `clamp(2.25rem, 1.6rem + 2.6vw, 3.5rem)` |
| `--text-h2` | `clamp(1.75rem, 1.4rem + 1.4vw, 2.5rem)` |
| `--text-h3` | `clamp(1.375rem, 1.2rem + .75vw, 1.75rem)` |
| `--text-body-lg` | `clamp(1.0625rem, 1rem + .3vw, 1.25rem)` |
| `--text-body` | `clamp(.975rem, .95rem + .12vw, 1.0625rem)` |
| `--text-small` | `clamp(.875rem, .85rem + .1vw, .9375rem)` |
| `--text-label` | `1rem` |
| `--label-tracking` | `.02em` |
| `--label-case` | `uppercase` |
| `--gutter` | `clamp(1rem, .6rem + 1.6vw, 2.5rem)` |
| `--max-w` | `1360px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(5rem, 3.8rem + 4vw, 8.5rem)` |
| `--gap` | `clamp(1rem, .9rem + .4vw, 1.5rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.22, 1, .36, 1)` |
| `--ease-in-out` | `cubic-bezier(.65, 0, .35, 1)` |
| `--dur-fast` | `.35s` |
| `--dur-base` | `.9s` |
| `--dur-slow` | `1.3s` |
| `--reveal-distance` | `1.5rem` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Instrument Serif", Georgia, "Times New Roman", serif` |
| `--font-body` | `"Manrope", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"DM Mono", ui-monospace, Menlo, monospace` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1335×2000 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×1199 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1335×2000 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×1199 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-16-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-16-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-17.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-18-1600.webp` | 1600×1064 (recorte con transparencia) |
| `assets/media/image-18-800.webp` | 800×532 (recorte con transparencia) |
| `assets/media/image-19-1600.webp` | 1600×1459 (recorte con transparencia) |
| `assets/media/image-19-800.webp` | 800×730 (recorte con transparencia) |
| `assets/media/image-20-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-20-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-21-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-21-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-22-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-22-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-23-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-23-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-24-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-24-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-25-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-25-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-26-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-27-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-27-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-26-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-28-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-28-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-29-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-29-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-30-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-30-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-31-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-31-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-32-1600.webp` | 1600×2134 (recorte con transparencia) |
| `assets/media/image-32-800.webp` | 800×1067 (recorte con transparencia) |
| `assets/media/image-33-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-33-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-34-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-34-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-35-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-35-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-36-1600.webp` | 1600×2397 (recorte con transparencia) |
| `assets/media/image-36-800.webp` | 800×1199 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
