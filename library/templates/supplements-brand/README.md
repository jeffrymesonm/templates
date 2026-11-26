# Marca de suplementos naturales (`supplements-brand`)

> Landing oscura con degradado verde para una marca de suplementos por suscripción, con una cápsula de cristal 3D que se abre al pasar el ratón o tocarla, cielo de partículas y wordmark gigante en el footer.

| Campo | Valor |
|---|---|
| Identificador | `supplements-brand` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/supplements-brand (capturado el 2026-11-25) |
| Catálogo de origen | "Supplements Brand", grupo Live, kit `facet` |
| Categoría | salud y bienestar / e-commerce de producto |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | marcas de suplementos y vitaminas, herbolarios, tiendas de nutrición deportiva, marcas de tés e infusiones, cosmética natural, productos por suscripción |
| Estilo | oscuro y natural, degradado de negro a verde musgo con partículas, objetos de cristal brillante, tarjetas de cristal (glass), sans compacta y animaciones de revelado con máscara |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave), Motion (Framer Motion) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Big Shoulders Display, Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 7.3 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Preloader con brillo ascendente y la marca como wordmark (`wordmark`).
- Navegación con marca, enlaces de anclas y menú móvil a pantalla completa con icono de cruz.
- Hero con cápsula de cristal 3D en tiempo real que se parte en dos y muestra un núcleo luminoso al pasar el ratón o tocarla; titular en dos líneas, etiqueta y frase destacada.
- Historia de la marca con texto que se colorea con el scroll, dos ventajas numeradas, foto y botón.
- Gamas de producto en tarjetas de cristal con foto y enlace, y galería de más vendidos en carril horizontal con formato y precio.
- Proceso de suscripción en cuatro pasos sobre una línea de horizonte.
- Testimonios en carrusel con retrato, nombre y producto, con botones anterior/siguiente.
- FAQ en acordeón con cruz y formulario de contacto de cristal con foto; al enviar solo muestra el mensaje de éxito (hay que conectarlo a un servicio).
- Footer con nota, columnas de enlaces y la marca como wordmark luminoso a todo el ancho.

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
| 1 | `FacetGlowBackdrop` | — | — |
| 2 | `LoaderGlowRise` | — | — |
| 3 | `NavbarCrossMark` | — | — |
| 4 | `HeroGlassCube` | `#home` | hero |
| 5 | `AboutGlowStatement` | `#about` | about |
| 6 | `ServicesGlassFacets` | `#services` | features |
| 7 | `GalleryGlassRail` | `#shop` | gallery |
| 8 | `ProcessHorizonSteps` | `#process` | process |
| 9 | `TestimonialGlassQuotes` | `#testimonial` | testimonial |
| 10 | `FaqCrossAccordion` | `#faq` | faq |
| 11 | `ContactGlassForm` | `#contact` | contact |
| 12 | `FooterGlowWordmark` | — | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-CElv2S3R.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#010503` |
| `--foreground` | `#f6f4ec` |
| `--card` | `#02110b` |
| `--card-foreground` | `var(--foreground)` |
| `--popover` | `var(--card)` |
| `--popover-foreground` | `var(--foreground)` |
| `--primary` | `#f6f4ec` |
| `--primary-foreground` | `#010503` |
| `--secondary` | `#010c08` |
| `--secondary-foreground` | `var(--foreground)` |
| `--muted` | `var(--card)` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-display` | `var(--font-wordmark)` |
| `--font-heading` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×900 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/set-01/model-01.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/image-07-1600.webp` | 1600×1280 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×640 (recorte con transparencia) |
| `assets/media/image-08.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1428×2000 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×1121 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1600×2199 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×1100 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1600×1143 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×572 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-16-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-16-800.webp` | 800×534 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
