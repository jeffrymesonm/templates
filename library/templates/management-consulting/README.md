# Consultora de gestión (`management-consulting`)

> Landing oscura y tecnológica para una consultora o firma de servicios B2B, con un campo de hilos de luz animado en 3D detrás del contenido, tarjetas de cristal esmerilado y un hero con un abanico de fotos en curva.

| Campo | Valor |
|---|---|
| Identificador | `management-consulting` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/management-consulting (capturado el 2026-11-25) |
| Catálogo de origen | "Management Consulting", grupo Live, kit `strand` |
| Categoría | servicios profesionales / consultoría |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | consultoras de estrategia y operaciones, asesorías de empresa, consultores independientes, agencias B2B, firmas de transformación digital, coaching ejecutivo |
| Estilo | oscuro casi negro con acentos azul lavanda, tarjetas de cristal (glassmorphism) y líneas finas, tipografía sans geométrica (Onest), fondo de hilos de luz en 3D y animaciones suaves |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Onest, Playfair Display |
| Idiomas | en |
| Tamaño | 7.8 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Fondo fijo con un haz de hilos de luz en 3D (Three.js, `StrandField`) que acompaña todo el scroll, y preloader con un anillo de hilos y el nombre de la marca.
- Navegación fina: icono y nombre de marca, botón de llamada y menú desplegable con los enlaces de las secciones.
- Hero centrado con etiqueta "New" enlazada, titular grande, dos botones y un abanico de 8 fotos verticales dispuestas en curva.
- Servicios en tarjetas de cristal apiladas que se superponen con el scroll (numeradas 01/03, 02/03, 03/03), cada una con foto y botón.
- Resultados en una galería de tarjetas de cristal con icono, cifra destacada, resumen y foto (5 casos).
- Comparativa en dos columnas: "lo habitual" frente a tu enfoque, con 5 puntos en cada lista y la marca en la columna propia.
- Equipo en tarjetas de líneas finas con retrato, nombre, cargo y etiqueta opcional de ubicación (6 personas).
- Testimonios en carrusel con flechas anterior/siguiente, logo-icono de empresa, cita, nombre y cargo.
- Formulario de contacto sobre tarjeta de cristal con foto (nombre, apellido, correo, empresa, mensaje); al enviar solo muestra el mensaje de éxito (no envía datos: hay que conectarlo a un servicio). Footer con columnas de enlaces, correo y redes.

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
| 1 | `StrandField` | — | — |
| 2 | `LoaderStrandRing` | — | — |
| 3 | `NavbarHairline` | — | — |
| 4 | `HeroBadgeCentered` | `#hero` | hero |
| 5 | `FeaturesStackedGlass` | `#services` | services |
| 6 | `GalleryGlassScroll` | `#work` | product |
| 7 | `AboutCompareLists` | `#approach` | about |
| 8 | `TeamHairlineCards` | `#team` | team |
| 9 | `TestimonialLogoCarousel` | `#testimonial` | testimonial |
| 10 | `ContactFormGlassPhoto` | `#contact` | contact |
| 11 | `FooterQuietColumns` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-BxISf2yR.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#090a0e` |
| `--foreground` | `#eef2fb` |
| `--card` | `#0d1018` |
| `--card-foreground` | `#eef2fb` |
| `--popover` | `#0d1018` |
| `--popover-foreground` | `#eef2fb` |
| `--primary` | `#8fb8ff` |
| `--primary-foreground` | `#050b1d` |
| `--secondary` | `#12151e` |
| `--secondary-foreground` | `#eef2fb` |
| `--muted` | `#0f121b` |
| `--muted-foreground` | `#9aa5c0` |
| `--accent` | `#8fb8ff` |
| `--accent-foreground` | `#050b1d` |
| `--deep` | `#040406` |
| `--deep-foreground` | `#eef2fb` |
| `--destructive` | `#ff6b6b` |
| `--destructive-foreground` | `#050605` |
| `--border` | `#1b202d` |
| `--input` | `#0f121b` |
| `--ring` | `#eef2fb` |
| `--strand-tint` | `#c79bff` |
| `--heading-weight` | `500` |
| `--heading-tracking` | `-.035em` |
| `--heading-leading` | `1.08` |
| `--text-display` | `clamp(2.875rem, 2.5rem + 1.6vw, 3.875rem)` |
| `--text-h1` | `clamp(2.45rem, 2.24rem + .98vw, 3.25rem)` |
| `--text-h2` | `clamp(1.75rem, 1.65rem + .45vw, 2.25rem)` |
| `--text-h3` | `clamp(1.1875rem, 1.12rem + .3vw, 1.375rem)` |
| `--text-body-lg` | `1.125rem` |
| `--text-body` | `1rem` |
| `--text-small` | `.875rem` |
| `--text-label` | `.75rem` |
| `--label-tracking` | `.06em` |
| `--label-case` | `uppercase` |
| `--gutter` | `clamp(1rem, .4rem + 2.2vw, 2.25rem)` |
| `--max-w` | `1120px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(4.5rem, 4rem + 1.6vw, 6rem)` |
| `--gap` | `clamp(.875rem, .7rem + .6vw, 1.25rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.16, 1, .3, 1)` |
| `--ease-in-out` | `cubic-bezier(.65, 0, .35, 1)` |
| `--dur-fast` | `.35s` |
| `--dur-base` | `.8s` |
| `--dur-slow` | `1.3s` |
| `--reveal-distance` | `1.5rem` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Onest", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Onest", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"Onest", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-accent` | `"Onest", "Helvetica Neue", Helvetica, Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×900 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1600×900 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1125×2000 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×1423 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1600×2397 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×1199 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1600×900 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/image-16.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-17-1600.webp` | 1335×2000 (recorte con transparencia) |
| `assets/media/image-17-800.webp` | 800×1199 (recorte con transparencia) |
| `assets/media/image-18-1600.webp` | 1600×900 (recorte con transparencia) |
| `assets/media/image-18-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/image-19-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-19-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-20-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-20-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/set-01/image-01.webp` | 1254×1254 (recorte con transparencia) |
| `assets/media/set-01/image-02.webp` | 1086×1448 (recorte con transparencia) |
| `assets/media/set-01/image-03.webp` | 1448×1086 (recorte con transparencia) |
| `assets/media/set-02/image-01.webp` | 1536×1024 (recorte con transparencia) |
| `assets/media/set-02/image-02.webp` | 1536×1024 (recorte con transparencia) |
| `assets/media/set-02/image-03.webp` | 1536×1024 (recorte con transparencia) |
| `assets/media/image-21-1600.webp` | 1335×2000 (recorte con transparencia) |
| `assets/media/image-21-800.webp` | 800×1199 (recorte con transparencia) |
| `assets/media/image-22-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-22-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-23-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-23-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-24-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-24-800.webp` | 800×534 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
