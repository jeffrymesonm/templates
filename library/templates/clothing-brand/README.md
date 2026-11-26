# Marca de ropa con tendedero (`clothing-brand`)

> Tienda-landing para una marca de ropa: las prendas cuelgan con pinzas de una cuerda en el hero, y el catálogo permite cambiar el color de cada producto.

| Campo | Valor |
|---|---|
| Identificador | `clothing-brand` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/clothing-brand (capturado el 2026-11-25) |
| Catálogo de origen | "Clothing Brand", grupo Live |
| Categoría | tienda / moda |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | marcas de ropa y streetwear, tiendas de moda, merchandising, básicos y sudaderas, boutiques con colecciones por temporada |
| Estilo | limpio y cálido, fondo blanco + marrón chocolate, tipografía sans compacta y grande, tarjetas tipo foto Polaroid |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.2 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Cabecera de tienda con enlaces, búsqueda e iconos de cuenta, favoritos y cesta; en móvil, cesta y botón "+" para el menú.
- Hero con tarjetas de producto (foto, nombre, precio, etiqueta) colgadas con pinzas de una cuerda, en fila horizontal.
- Vídeo o imagen de campaña a todo el ancho que se desliza sobre el hero al hacer scroll (`SlideOverSections`).
- Catálogo de productos con selector de colores (muestras redondas) que cambia la foto, botón de guardar en favoritos y etiquetas ("New In", "Bestseller", "Last units").
- Rejilla de colecciones con imagen y enlace.
- Banner de newsletter con campo de correo y botón, sobre una imagen de la tienda.
- Pie con título, descripción, tres columnas de enlaces y la marca en letras gigantes al final.

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
| 1 | `NavbarStore` | — | — |
| 2 | `SlideOverSections` | — | — |
| 3 | `HeroHangingCards` | `#hero` | hero |
| 4 | `AboutFullVideo` | `#campaign` | campaign |
| 5 | `ProductCatalogCards` | `#shop` | shop |
| 6 | `ProductCollectionGrid` | `#collections` | collections |
| 7 | `ContactNewsletterBanner` | `#newsletter` | newsletter |
| 8 | `FooterStoreBrand` | `#contact` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-CqDI1cDe.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#fff` |
| `--foreground` | `#482a22` |
| `--card` | `#f7f7f7` |
| `--card-foreground` | `#482a22` |
| `--popover` | `#fff` |
| `--popover-foreground` | `#482a22` |
| `--primary` | `#482a22` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#f8efe8` |
| `--secondary-foreground` | `#482a22` |
| `--muted` | `#f4f2f2` |
| `--muted-foreground` | `#482a22` |
| `--accent` | `#8a5a44` |
| `--accent-foreground` | `#fff` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#e5e1e0` |
| `--input` | `#e5e1e0` |
| `--ring` | `#482a22` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1536×1024 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1024×1536 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1024×1536 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1024×1536 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1024×1536 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 990×1485 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 990×1485 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 990×1485 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 990×1485 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 990×1485 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 990×1485 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 990×1485 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 990×1485 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-14.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1536×1024 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×534 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
