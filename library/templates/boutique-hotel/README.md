# Hotel boutique oscuro (`boutique-hotel`)

> Landing oscura y elegante para un hotel boutique: hero con vídeo que se expande y el nombre en serif gigante, habitaciones con ficha de camas, baños y superficie, y experiencias en tarjetas bento que se revelan al hacer scroll.

| Campo | Valor |
|---|---|
| Identificador | `boutique-hotel` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/boutique-hotel (capturado el 2026-11-25) |
| Catálogo de origen | "Boutique Hotel", grupo Paused |
| Categoría | hostelería / turismo |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | hoteles boutique, resorts, villas y casas rurales de lujo, lodges, hoteles spa, alojamientos de experiencias y escapadas |
| Estilo | oscuro, lujoso, negro + crema + dorado suave, titulares serif grandes, fotos a sangre con botones blancos redondeados |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.5 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Entrada animada: la barra de navegación baja desde arriba tras la intro del hero.
- Menú a pantalla completa que se abre con un botón de dos líneas, junto al botón de reserva.
- Hero con vídeo que se expande y nombre de la marca en serif gigante con dos botones.
- Sección "sobre nosotros" con dos fotos superpuestas en parallax y sello "Est. 20XX".
- Habitaciones en tarjetas con foto, insignia opcional ("Most Popular", "Guest Favourite"), etiquetas y ficha de camas, baños y superficie.
- Servicios en rejilla de fotos con título y una línea; experiencias en tarjetas bento con enlace que se revelan al hacer scroll.
- Formulario de reserva (nombre, correo, teléfono, fechas y mensaje) junto a una foto.
- Pie con el nombre de la marca a todo el ancho y tres columnas de enlaces.

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
| 1 | `NavbarFullscreen` | — | — |
| 2 | `HeroExpand` | `#hero` | hero |
| 3 | `AboutParallax` | `#about` | about |
| 4 | `FeaturesAttributeCards` | `#rooms` | rooms |
| 5 | `FeaturesMediaGrid` | `#experience` | amenities |
| 6 | `FeaturesRevealCardsBento` | `#journeys` | journeys |
| 7 | `ContactSplitForm` | `#contact` | contact |
| 8 | `FooterBrand` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-B6bML5yj.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#0f1010` |
| `--foreground` | `#f5f0eb` |
| `--card` | `#3d3d3d` |
| `--card-foreground` | `#f5f0eb` |
| `--popover` | `#3d3d3d` |
| `--popover-foreground` | `#f5f0eb` |
| `--primary` | `#fff` |
| `--primary-foreground` | `#0a0a0a` |
| `--secondary` | `#1a1a1a` |
| `--secondary-foreground` | `#f5f0eb` |
| `--muted` | `#212222` |
| `--muted-foreground` | `#a5a29e` |
| `--accent` | `#d4b896` |
| `--accent-foreground` | `#f5f0eb` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#2b2b2a` |
| `--input` | `#2b2b2a` |
| `--ring` | `#fff` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-02/image-01.webp` | 1664×2432 (recorte con transparencia) |
| `assets/media/set-03/image-01.jpg` | 676×503 |
| `assets/media/set-03/image-02.jpg` | 736×920 |
| `assets/media/set-03/image-03.webp` | 2048×2048 (recorte con transparencia) |
| `assets/media/set-03/image-04.jpg` | 1199×685 |
| `assets/media/set-03/image-05.webp` | 1536×2688 (recorte con transparencia) |
| `assets/media/set-04/image-01.webp` | 2304×1728 (recorte con transparencia) |
| `assets/media/set-01/video-01.mp4` | vídeo 1920x1102, 10.0 s |
| `assets/media/set-05/image-01.jpg` | 736×1327 |
| `assets/media/set-05/image-02.webp` | 1024×1024 (recorte con transparencia) |
| `assets/media/set-05/image-03.webp` | 1024×1024 (recorte con transparencia) |
| `assets/media/set-05/image-04.webp` | 2048×1536 (recorte con transparencia) |
| `assets/media/set-05/image-05.webp` | 1920×1920 (recorte con transparencia) |
| `assets/media/set-05/image-06.webp` | 2304×1728 (recorte con transparencia) |
| `assets/media/set-05/image-07.webp` | 2048×1168 (recorte con transparencia) |
| `assets/media/set-06/image-01.webp` | 2304×1728 (recorte con transparencia) |
| `assets/media/set-06/image-02.webp` | 2304×1728 (recorte con transparencia) |
| `assets/media/set-06/image-03.webp` | 2048×1536 (recorte con transparencia) |
| `assets/media/set-06/image-04.webp` | 2048×1536 (recorte con transparencia) |
| `assets/media/set-06/image-05.webp` | 2048×1536 (recorte con transparencia) |
| `assets/media/set-06/image-06.jpg` | 736×736 |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
