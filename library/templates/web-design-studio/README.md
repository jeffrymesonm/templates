# Estudio de diseño web (`web-design-studio`)

> Landing oscura para un estudio de diseño web cuyo hero es un túnel 3D de pantallas con vídeos de proyectos por el que se "cae" al hacer scroll, seguida de un bento de servicios con partículas y un carrusel curvo de trabajos.

| Campo | Valor |
|---|---|
| Identificador | `web-design-studio` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/web-design-studio (capturado el 2026-11-25) |
| Catálogo de origen | "Web Design Studio", grupo Live |
| Categoría | agencias y estudios creativos / diseño web |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | estudios de diseño y desarrollo web, agencias digitales, freelancers de diseño, productoras de vídeo y motion, estudios de branding |
| Estilo | oscuro e inmersivo, casi negro con texto crema y acento azul, titulares en serif fina (Instrument Serif) con texto en sans, mucho 3D y movimiento ligado al scroll |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Instrument Serif, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 9.3 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- **Hero en túnel 3D (Three.js)**: paredes de pantallas que reproducen vídeos de proyectos; al hacer scroll la cámara baja por el túnel y las pantallas giran según la velocidad y la dirección.
- **Capítulos sobre el scroll**: tres textos numerados (01-03) aparecen y desaparecen en tramos concretos del recorrido del hero, alternando izquierda y derecha.
- **Interacción con el ratón**: pasar el cursor dispersa las pantallas y arrastrar hace girar el túnel.
- **Servicios en bento con partículas**: cinco tarjetas con icono, número, descripción y etiquetas.
- **Trabajos en carrusel curvo**: proyectos con póster y vídeo, nombre, categoría, año, contador "07 / 07" y barra de progreso.
- **Testimonios arrastrables**: carrusel con foto recortada, cita, nombre y cargo, enlace a "caso de estudio", botones anterior/siguiente y tarjeta final de llamada a la acción.
- **Contacto en sala con foco**: imagen de estudio iluminada por un foco, correo visible y botón `mailto:`.
- **Scroll suave** con Lenis y entradas animadas en cada sección.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- La constante de medios de `assets/page.js` (`c`) apunta a `assets/media` (la extracción la dejó en una subcarpeta inexistente y los vídeos y pósteres daban 404).
- No se ha parcheado ningún chunk compilado: la marca y los textos están todos en `assets/page.js`.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `HeroScreenWell` | `#hero` | hero |
| 2 | `ServicesParticleBento` | `#services` | services |
| 3 | `ProjectsCurvedReel` | `#work` | gallery |
| 4 | `TestimonialDragCarousel` | `#testimonials` | testimonial |
| 5 | `ContactSpotlightRoom` | `#contact` | contact |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-Cj5Brpla.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#020206` |
| `--foreground` | `#f4f2ee` |
| `--card` | `#0c0c12` |
| `--card-foreground` | `#f4f2ee` |
| `--popover` | `#fff` |
| `--popover-foreground` | `#1a1a1a` |
| `--primary` | `#f4f2ee` |
| `--primary-foreground` | `#020206` |
| `--secondary` | `#f0ece6` |
| `--secondary-foreground` | `#1a1a1a` |
| `--muted` | `#e8e6e3` |
| `--muted-foreground` | `#8d8b88` |
| `--accent` | `#2f7bff` |
| `--accent-foreground` | `#fff` |
| `--deep` | `#1a1a1a` |
| `--deep-foreground` | `#faf8f5` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#1f1f27` |
| `--input` | `#dfdddb` |
| `--ring` | `#1a1a1a` |
| `--tint-1` | `#8c8a86` |
| `--tint-2` | `#adaca7` |
| `--tint-3` | `#cecdc9` |
| `--heading-weight` | `400` |
| `--heading-tracking` | `-.01em` |
| `--heading-leading` | `1.08` |
| `--text-display` | `clamp(2.875rem, 2.6429rem + .952vw, 3.5rem)` |
| `--text-h1` | `clamp(2.875rem, 2.6429rem + .952vw, 3.5rem)` |
| `--text-h2` | `clamp(2.375rem, 2.1429rem + .952vw, 3rem)` |
| `--text-h3` | `clamp(1.625rem, 1.5321rem + .381vw, 1.875rem)` |
| `--text-body-lg` | `1.125rem` |
| `--text-body` | `1rem` |
| `--text-small` | `.875rem` |
| `--text-label` | `.875rem` |
| `--label-tracking` | `0em` |
| `--label-case` | `none` |
| `--gutter` | `clamp(1.5rem, -.729rem + 9.14vw, 7.5rem)` |
| `--max-w` | `1200px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(4.5rem, 3.9429rem + 2.286vw, 6rem)` |
| `--gap` | `clamp(1rem, -.7179rem + 7.048vw, 5.625rem)` |
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
| `--font-heading` | `"Instrument Serif", Georgia, Helvetica, Arial, sans-serif` |
| `--font-body` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/set-01/studio.webp` | 1672×941 (recorte con transparencia) |
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-02/burger-restaurant.jpg` | 1280×800 |
| `assets/media/set-02/car-showroom.jpg` | 1280×800 |
| `assets/media/set-02/craft-soda.jpg` | 1280×800 |
| `assets/media/set-02/prebiotic-soda.jpg` | 1280×800 |
| `assets/media/set-02/saas-product.jpg` | 1280×800 |
| `assets/media/set-02/seaside-hotel.jpg` | 1280×800 |
| `assets/media/set-02/watch-maison.jpg` | 1280×800 |
| `assets/media/set-03/burger-restaurant.mp4` | vídeo 1280x800, 13.8 s |
| `assets/media/set-03/car-showroom.mp4` | vídeo 1280x800, 13.4 s |
| `assets/media/set-03/craft-soda.mp4` | vídeo 1280x800, 12.7 s |
| `assets/media/set-03/prebiotic-soda.mp4` | vídeo 1280x800, 15.3 s |
| `assets/media/set-03/saas-product.mp4` | vídeo 1280x800, 14.4 s |
| `assets/media/set-03/seaside-hotel.mp4` | vídeo 1280x800, 17.1 s |
| `assets/media/set-03/watch-maison.mp4` | vídeo 1280x800, 12.8 s |
| `assets/media/set-04/image-01-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/set-04/image-01-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/set-04/image-02-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/set-04/image-02-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/set-04/image-03-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/set-04/image-03-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/set-04/image-04-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/set-04/image-04-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/set-04/image-05-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/set-04/image-05-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/set-05/bakery.mp4` | vídeo 640x400, 3.0 s |
| `assets/media/set-05/burger-restaurant.mp4` | vídeo 640x400, 13.8 s |
| `assets/media/set-05/car-showroom.mp4` | vídeo 640x400, 13.4 s |
| `assets/media/set-05/craft-soda.mp4` | vídeo 640x400, 12.7 s |
| `assets/media/set-05/ecommerce-dark.mp4` | vídeo 640x400, 2.2 s |
| `assets/media/set-05/essentia-safari.mp4` | vídeo 640x400, 4.3 s |
| `assets/media/set-05/joes-coffee.mp4` | vídeo 640x400, 13.6 s |
| `assets/media/set-05/kinimatic.mp4` | vídeo 640x400, 1.5 s |
| `assets/media/set-05/le-cercle.mp4` | vídeo 640x400, 11.2 s |
| `assets/media/set-05/prebiotic-soda.mp4` | vídeo 640x400, 15.2 s |
| `assets/media/set-05/racing-driver.mp4` | vídeo 640x400, 15.5 s |
| `assets/media/set-05/rev-productions.mp4` | vídeo 640x400, 3.0 s |
| `assets/media/set-05/saas-product.mp4` | vídeo 640x400, 14.4 s |
| `assets/media/set-05/seaside-hotel.mp4` | vídeo 640x400, 17.1 s |
| `assets/media/set-05/watch-maison.mp4` | vídeo 640x400, 12.8 s |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
