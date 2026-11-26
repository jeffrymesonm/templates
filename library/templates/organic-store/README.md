# Tienda de productos orgánicos (`organic-store`)

> Landing editorial en tonos tierra para una tienda de alimentos orgánicos con reparto: hero con un anillo de fotos que gira alrededor de una cifra, tabla de proveedores con vista previa al pasar el ratón y categorías en tarjetas que se apilan.

| Campo | Valor |
|---|---|
| Identificador | `organic-store` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/organic-store (capturado el 2026-11-25) |
| Catálogo de origen | "Organic Store", grupo Paused |
| Categoría | alimentación / tienda |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | tiendas de productos orgánicos, mercados y cajas de productores locales, fruterías y verdulerías con reparto, panaderías y despensas, cooperativas agrícolas, suscripciones de comida |
| Estilo | claro, natural, crema + verde oliva + marrón tierra, tipografía sans grande con la segunda línea del titular en tono apagado, mucho espacio en blanco |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.2 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Navegación mínima con enlaces de texto (menú "+" en móvil).
- Hero fijo con un anillo de ocho fotos que gira alrededor de una cifra, dato de próxima entrega y titular a dos tonos con dos botones.
- Bloque "sobre nosotros" que sube por encima del hero al hacer scroll y revela una frase en dos partes con imagen.
- Proveedores en tabla de filas (nombre, región, año, productos) con imagen que aparece al pasar el ratón.
- Categorías de la tienda en tarjetas numeradas que se apilan al hacer scroll, con botón opcional.
- Reseñas en carrusel de tarjetas partidas: foto, etiqueta, título, cita, avatar, nombre y antigüedad como cliente.
- Llamada a la acción final con texto grande y dos botones; pie con tres columnas de enlaces.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- La constante `d` al inicio de `assets/page.js` es la carpeta de las imágenes (`assets/media`); la ruta original apuntaba a una subcarpeta que no existe y se corrigió.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `NavbarLinksStatic` | — | — |
| 2 | `HeroPhotoRing` | `#home` | hero |
| 3 | `AboutGridReveal` | `#about` | about |
| 4 | `FeaturesProjectRows` | `#growers` | growers |
| 5 | `FeaturesStackingCards` | `#shop` | shop |
| 6 | `TestimonialSplitCards` | `#reviews` | reviews |
| 7 | `ContactCta` | `#order` | order |
| 8 | `FooterSimple` | `#contact` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-DgZDgFOH.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#f1ece5` |
| `--foreground` | `#5e6b3a` |
| `--card` | `#e8e2d6` |
| `--card-foreground` | `#4a5530` |
| `--popover` | `#f1ece5` |
| `--popover-foreground` | `#4a5530` |
| `--primary` | `#4b5a2b` |
| `--primary-foreground` | `#f1ece5` |
| `--secondary` | `#fff` |
| `--secondary-foreground` | `#4a5530` |
| `--muted` | `#e5e2d7` |
| `--muted-foreground` | `#636c4b` |
| `--accent` | `#a3ad73` |
| `--accent-foreground` | `#4a5530` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#d7d5c6` |
| `--input` | `#d7d5c6` |
| `--ring` | `#4b5a2b` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/about.webp` | 1536×1024 (recorte con transparencia) |
| `assets/media/avatar-1.webp` | 320×320 (recorte con transparencia) |
| `assets/media/avatar-2.webp` | 320×320 (recorte con transparencia) |
| `assets/media/avatar-3.webp` | 320×320 (recorte con transparencia) |
| `assets/media/farm-1.webp` | 1448×1086 (recorte con transparencia) |
| `assets/media/farm-4.webp` | 1448×1086 (recorte con transparencia) |
| `assets/media/farm-2.webp` | 1448×1086 (recorte con transparencia) |
| `assets/media/farm-3.webp` | 1448×1086 (recorte con transparencia) |
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/review-box.webp` | 1254×1254 (recorte con transparencia) |
| `assets/media/review-breakfast.webp` | 1254×1254 (recorte con transparencia) |
| `assets/media/review-fruit.webp` | 1254×1254 (recorte con transparencia) |
| `assets/media/ring-1.webp` | 900×900 (recorte con transparencia) |
| `assets/media/ring-2.webp` | 900×900 (recorte con transparencia) |
| `assets/media/ring-3.webp` | 900×900 (recorte con transparencia) |
| `assets/media/ring-4.webp` | 900×900 (recorte con transparencia) |
| `assets/media/ring-5.webp` | 900×900 (recorte con transparencia) |
| `assets/media/ring-6.webp` | 900×900 (recorte con transparencia) |
| `assets/media/ring-7.webp` | 900×900 (recorte con transparencia) |
| `assets/media/ring-8.webp` | 900×900 (recorte con transparencia) |
| `assets/media/shop-bakery.webp` | 1448×1086 (recorte con transparencia) |
| `assets/media/shop-box.webp` | 1448×1086 (recorte con transparencia) |
| `assets/media/shop-dairy.webp` | 1448×1086 (recorte con transparencia) |
| `assets/media/shop-produce.webp` | 1448×1086 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
