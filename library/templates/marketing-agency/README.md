# Agencia de marketing editorial (`marketing-agency`)

> Landing clara y editorial para una agencia creativa: la marca en letras gigantes desfila en el hero con fotos que se intercalan, y las secciones se deslizan unas sobre otras al hacer scroll.

| Campo | Valor |
|---|---|
| Identificador | `marketing-agency` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/marketing-agency (capturado el 2026-11-25) |
| Catálogo de origen | "Marketing Agency", grupo Live |
| Categoría | creativos / agencia de marketing |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | agencias de marketing y publicidad, estudios de branding y diseño, productoras de contenido, consultoras de comunicación, freelancers creativos |
| Estilo | minimalista editorial, fondo claro + negro, tipografía sans gigante, botones en píldora en mayúsculas, mucho espacio en blanco |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave), Motion (Framer Motion) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.2 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Hero con la marca en un marquee de letras gigantes y una secuencia de fotos que se suceden en el centro, seguida de una imagen principal.
- Bloque "sobre nosotros" que sube por encima del hero con una galería de paneles de imágenes.
- Sección del estudio (texto a dos párrafos + imagen) sobre la que se desliza la sección de proyectos (`SlideOverSections`).
- Rejilla de proyectos numerados con título y año, y contador total.
- Testimonio destacado con cita grande, autor y dos imágenes en pareja.
- Pie con título de cierre, botón a correo, índice de navegación, datos de contacto, horario y enlaces legales.
- Menú a pantalla completa desde el botón circular de la cabecera; textos que aparecen con fundido o subida al entrar en pantalla.

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
| 1 | `NavbarFullscreen` | — | navbar-wrap |
| 2 | `HeroBrandMarquee` | `#home` | hero |
| 3 | `AboutPanelGallery` | `#about` | about |
| 4 | `SlideOverSections` | — | — |
| 5 | `AboutStudioSplit` | `#studio` | studio |
| 6 | `FeaturesProjectGrid` | `#work` | work |
| 7 | `TestimonialImagePair` | — | testimonial |
| 8 | `FooterBrandIndex` | `#contact` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-CowtoakZ.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#fcfcfc` |
| `--foreground` | `#000` |
| `--card` | `#f2f2f2` |
| `--card-foreground` | `#000` |
| `--popover` | `#fcfcfc` |
| `--popover-foreground` | `#000` |
| `--primary` | `#000` |
| `--primary-foreground` | `#fcfcfc` |
| `--secondary` | `#eee` |
| `--secondary-foreground` | `#000` |
| `--muted` | `#e8e8e8` |
| `--muted-foreground` | `#323232` |
| `--accent` | `#000` |
| `--accent-foreground` | `#fcfcfc` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#d6d6d6` |
| `--input` | `#d6d6d6` |
| `--ring` | `#000` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1427×1727 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×969 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1086×1448 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×1067 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1536×1024 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-07.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 736×914 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 736×914 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1087×1447 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×1065 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1200×1800 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1500×2000 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×1067 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1200×1800 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 750×937 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 750×937 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 750×937 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 750×937 (recorte con transparencia) |
| `assets/media/image-16-1600.webp` | 1024×1536 (recorte con transparencia) |
| `assets/media/image-16-800.webp` | 800×1200 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
