# Agencia inmobiliaria con tarjetas inclinadas (`real-estate-agency`)

> Landing clara para una agencia inmobiliaria: hero con cinco tarjetas de fotos inclinadas, propiedades destacadas con precio, equipo directivo, cifras con iconos y reseñas con foto.

| Campo | Valor |
|---|---|
| Identificador | `real-estate-agency` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/real-estate-agency (capturado el 2026-11-25) |
| Catálogo de origen | "Real Estate Agency", grupo Paused |
| Categoría | inmobiliaria / agencia |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | agencias inmobiliarias, agentes independientes, venta de propiedades de lujo, asesores de inversión inmobiliaria, gestión de alquileres |
| Estilo | limpio y neutro, gris claro + negro con acento dorado, tipografía sans, tarjetas redondeadas y fondo de barras con degradado |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.2 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Navegación flotante en píldora con menú desplegable.
- Hero con fondo de barras en degradado, titular animado, dos botones y cinco tarjetas de fotos inclinadas.
- Sección "sobre nosotros" con texto superpuesto a una imagen grande y dos botones.
- Tres propiedades destacadas con nombre, características y precio.
- Cuatro servicios en tarjetas numeradas que revelan su imagen.
- Equipo directivo en tarjetas con foto, nombre y cargo superpuestos.
- Cuatro cifras clave con icono (vendidas, clientes, valor total, países).
- Reseñas en carrusel con imagen, etiqueta, título, cita, autor y fecha; llamada final a la acción y pie con tres columnas de enlaces.

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
| 1 | `NavbarFloating` | — | — |
| 2 | `GradientBarsBackground` | `#hero` | hero |
| 3 | `HeroTiltedCards` | `#hero` | hero |
| 4 | `AboutMediaOverlay` | `#about` | about |
| 5 | `ProductVariantCards` | `#properties` | properties |
| 6 | `FeaturesRevealCards` | `#services` | services |
| 7 | `TeamOverlayCards` | `#team` | team |
| 8 | `MetricsIconCards` | `#metrics` | metrics |
| 9 | `TestimonialSplitCards` | `#testimonials` | testimonials |
| 10 | `ContactCta` | `#contact` | contact |
| 11 | `FooterBasic` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-D-Z4YDmn.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#f0f0f0` |
| `--foreground` | `#1a1a1a` |
| `--card` | `#fafafa` |
| `--card-foreground` | `#1a1a1a` |
| `--popover` | `#fafafa` |
| `--popover-foreground` | `#1a1a1a` |
| `--primary` | `#1a1a1a` |
| `--primary-foreground` | `#f0f0f0` |
| `--secondary` | `#e8e8e8` |
| `--secondary-foreground` | `#1a1a1a` |
| `--muted` | `#dfdfdf` |
| `--muted-foreground` | `#656565` |
| `--accent` | `#c89b3c` |
| `--accent-foreground` | `#1a1a1a` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#d6d6d6` |
| `--input` | `#d6d6d6` |
| `--ring` | `#1a1a1a` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-01/image-01.webp` | 1368×2000 (recorte con transparencia) |
| `assets/media/set-02/image-01.webp` | 1800×1201 (recorte con transparencia) |
| `assets/media/set-02/image-02.webp` | 1800×1200 (recorte con transparencia) |
| `assets/media/set-02/image-03.webp` | 1368×2000 (recorte con transparencia) |
| `assets/media/set-02/image-04.webp` | 1368×2000 (recorte con transparencia) |
| `assets/media/set-02/image-05.webp` | 1800×1201 (recorte con transparencia) |
| `assets/media/set-03/image-01.webp` | 1800×1200 (recorte con transparencia) |
| `assets/media/set-03/image-02.webp` | 1368×2000 (recorte con transparencia) |
| `assets/media/set-03/image-03.webp` | 1368×2000 (recorte con transparencia) |
| `assets/media/set-04/image-01.webp` | 1800×1201 (recorte con transparencia) |
| `assets/media/set-04/image-02.webp` | 1800×1200 (recorte con transparencia) |
| `assets/media/set-04/image-03.webp` | 1368×2000 (recorte con transparencia) |
| `assets/media/set-04/image-04.webp` | 1368×2000 (recorte con transparencia) |
| `assets/media/set-05/image-01.webp` | 1800×1200 (recorte con transparencia) |
| `assets/media/set-05/image-02.webp` | 1800×1200 (recorte con transparencia) |
| `assets/media/set-05/image-03.webp` | 1800×1200 (recorte con transparencia) |
| `assets/media/set-06/image-01.webp` | 800×533 (recorte con transparencia) |
| `assets/media/set-06/image-02.webp` | 800×533 (recorte con transparencia) |
| `assets/media/set-06/image-03.webp` | 800×533 (recorte con transparencia) |
| `assets/media/set-06/image-04.webp` | 1800×1200 (recorte con transparencia) |
| `assets/media/set-06/image-05.webp` | 1368×2000 (recorte con transparencia) |
| `assets/media/set-06/image-06.webp` | 1368×2000 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
