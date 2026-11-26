# Marca de cosmética natural (`natural-skincare`)

> Landing cálida y minimalista para una marca de cosmética natural: nombre de la marca a todo el ancho en el hero, productos en tarjetas con precio y ventajas en un bento con pequeñas animaciones.

| Campo | Valor |
|---|---|
| Identificador | `natural-skincare` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/natural-skincare (capturado el 2026-11-25) |
| Catálogo de origen | "Natural Skincare", grupo Paused |
| Categoría | belleza / tienda |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | marcas de cosmética y cuidado de la piel, cosmética natural u orgánica, perfumería, productos de bienestar, marcas de autor con pocos productos, tiendas online de belleza |
| Estilo | claro, minimalista, crema + marrón café + beige, tipografía sans grande y ajustada, tarjetas suaves con bordes redondeados |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 5.7 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Fondo fijo con aurora suave y barra de navegación flotante en cápsula con botón "+" que despliega el menú.
- Hero con el nombre de la marca ajustado a todo el ancho, descripción, botones de llamada y correo (`tel:` / `mailto:`) y foto grande.
- Bloque "sobre nosotros" a dos columnas: titular y dos párrafos con botón.
- Productos en tarjetas con foto, nombre y precio.
- Ventajas en bento con animaciones: tarjetas de datos en movimiento, gráfico de barras animado e iconos en órbita.
- Testimonio destacado con estrellas, cita grande y avatares.
- Preguntas frecuentes en acordeón junto a una foto y suscripción al boletín con campo de correo.
- Pie en tarjeta con cuatro columnas de enlaces (producto, empresa, soporte y redes).

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
| 1 | `AuroraBackground` | — | — |
| 2 | `NavbarFloating` | — | — |
| 3 | `HeroBillboardBrand` | `#hero` | hero |
| 4 | `AboutTextSplit` | `#about` | about |
| 5 | `ProductMediaCards` | `#products` | products |
| 6 | `FeaturesBento` | `#benefits` | benefits |
| 7 | `TestimonialTrustCard` | `#reviews` | reviews |
| 8 | `FaqSplitMedia` | `#faq` | faq |
| 9 | `ContactCenter` | `#contact` | contact |
| 10 | `FooterSimpleCard` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-ClYXlOXh.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#fcf6ec` |
| `--foreground` | `#2e2521` |
| `--card` | `#f3ede2` |
| `--card-foreground` | `#2e2521` |
| `--popover` | `#f3ede2` |
| `--popover-foreground` | `#2e2521` |
| `--primary` | `#2e2521` |
| `--primary-foreground` | `#fcf6ec` |
| `--secondary` | `#fff` |
| `--secondary-foreground` | `#2e2521` |
| `--muted` | `#ece5dc` |
| `--muted-foreground` | `#766e68` |
| `--accent` | `#b2a28b` |
| `--accent-foreground` | `#2e2521` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#e3ddd4` |
| `--input` | `#e3ddd4` |
| `--ring` | `#2e2521` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-01/image-01.webp` | 1500×857 (recorte con transparencia) |
| `assets/media/set-01/image-02.webp` | 1000×524 (recorte con transparencia) |
| `assets/media/set-01/image-03.webp` | 1000×1000 (recorte con transparencia) |
| `assets/media/set-01/image-04.webp` | 1000×571 (recorte con transparencia) |
| `assets/media/set-01/image-05.webp` | 1000×1000 (recorte con transparencia) |
| `assets/media/set-01/image-06.avif` | .avif |
| `assets/media/set-01/image-07.avif` | .avif |
| `assets/media/set-01/image-08.avif` | .avif |
| `assets/media/set-01/image-09.avif` | .avif |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
