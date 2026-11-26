# Marca de perfumes con carrusel inclinado (`perfume-brand`)

> Landing clara y elegante para una marca de perfumes o cosmética: hero con carrusel de imágenes inclinadas, catálogo de productos con precio, vídeos verticales de la comunidad y un diario de artículos.

| Campo | Valor |
|---|---|
| Identificador | `perfume-brand` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/perfume-brand (capturado el 2026-11-25) |
| Catálogo de origen | "Perfume Brand", grupo Paused |
| Categoría | tienda / perfumería y cosmética |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | marcas de perfume y fragancias, cosmética y cuidado de la piel, velas y aromas para el hogar, joyería o accesorios de lujo, marcas pequeñas de producto premium |
| Estilo | lujo minimalista, gris muy claro + burdeos oscuro, tipografía sans grande, tarjetas blancas redondeadas y fondo con brillo suave en las esquinas |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.7 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Fondo con brillo suave en las esquinas y rayos de luz detrás del hero.
- Navegación en píldora con botón de compra y menú desplegable.
- Hero centrado con etiqueta, titular grande, dos botones y un carrusel de seis imágenes inclinadas que se desliza.
- Productos destacados en cuatro tarjetas con nombre, formato/variante y precio.
- Tres puntos fuertes en bloques alternos imagen-texto, numerados.
- Sección de comunidad con seis vídeos verticales en tarjetas con nombre.
- Diario (blog) con tres artículos: categoría, título, resumen, autor con foto y fecha.
- Preguntas frecuentes en acordeón junto a una imagen y formulario de contacto con imagen lateral.
- Pie con la marca en grande y cuatro columnas de enlaces.

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
| 1 | `CornerGlowBackground` | — | — |
| 2 | `NavbarDropdown` | — | — |
| 3 | `LightRaysCornerBackground` | `#hero` | hero |
| 4 | `HeroBillboardTiltedCarousel` | `#hero` | hero |
| 5 | `ProductVariantCards` | `#products` | products |
| 6 | `FeaturesAlternatingSplit` | `#features` | features |
| 7 | `FeaturesMediaCards` | `#influencers` | influencers |
| 8 | `BlogSimpleCards` | `#blog` | blog |
| 9 | `FaqSplitMedia` | `#faq` | faq |
| 10 | `ContactSplitForm` | `#contact` | contact |
| 11 | `FooterBrand` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-DwvuJVcR.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#f5f5f5` |
| `--foreground` | `#1c1c1c` |
| `--card` | `#fff` |
| `--card-foreground` | `#1c1c1c` |
| `--popover` | `#fff` |
| `--popover-foreground` | `#1c1c1c` |
| `--primary` | `#511f1f` |
| `--primary-foreground` | `#f5f5f5` |
| `--secondary` | `#fff` |
| `--secondary-foreground` | `#1c1c1c` |
| `--muted` | `#e4e4e4` |
| `--muted-foreground` | `#686868` |
| `--accent` | `#8f3838` |
| `--accent-foreground` | `#1c1c1c` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#dbdbdb` |
| `--input` | `#dbdbdb` |
| `--ring` | `#511f1f` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-03/image-01.webp` | 800×533 (recorte con transparencia) |
| `assets/media/set-03/image-02.webp` | 800×1199 (recorte con transparencia) |
| `assets/media/set-03/image-03.webp` | 800×533 (recorte con transparencia) |
| `assets/media/set-02/image-01.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/set-02/image-02.webp` | 1600×2000 (recorte con transparencia) |
| `assets/media/set-02/image-03.webp` | 1429×2000 (recorte con transparencia) |
| `assets/media/set-01/image-01.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/set-01/image-02.webp` | 1376×768 (recorte con transparencia) |
| `assets/media/set-04/image-01.webp` | 1600×2000 (recorte con transparencia) |
| `assets/media/set-04/image-02.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/set-04/image-03.webp` | 1331×2000 (recorte con transparencia) |
| `assets/media/set-01/image-03.webp` | 1376×768 (recorte con transparencia) |
| `assets/media/set-01/image-04.webp` | 1376×768 (recorte con transparencia) |
| `assets/media/set-01/image-05.webp` | 1376×768 (recorte con transparencia) |
| `assets/media/set-01/image-06.webp` | 1376×768 (recorte con transparencia) |
| `assets/media/set-01/image-07.webp` | 1376×768 (recorte con transparencia) |
| `assets/media/set-01/image-08.webp` | 1376×768 (recorte con transparencia) |
| `assets/media/set-01/video-01.mp4` | vídeo 720x1280, 2.5 s |
| `assets/media/set-01/video-02.mp4` | vídeo 720x1280, 4.0 s |
| `assets/media/set-01/video-03.mp4` | vídeo 720x1280, 2.4 s |
| `assets/media/set-01/video-04.mp4` | vídeo 720x1280, 4.0 s |
| `assets/media/set-01/video-05.mp4` | vídeo 720x1280, 4.0 s |
| `assets/media/set-01/video-06.mp4` | vídeo 720x1280, 4.0 s |
| `assets/media/set-01/image-09.webp` | 896×1200 (recorte con transparencia) |
| `assets/media/set-01/image-10.webp` | 896×1200 (recorte con transparencia) |
| `assets/media/set-01/image-11.webp` | 896×1200 (recorte con transparencia) |
| `assets/media/set-01/image-12.webp` | 896×1200 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
