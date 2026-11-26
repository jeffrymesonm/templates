# Restaurante italiano editorial (`vita-lenta`)

> Web elegante para un restaurante, con el nombre gigante en tipografía decorativa, menú organizado por momento del día y vídeo revelado a través de una máscara SVG.

| Campo | Valor |
|---|---|
| Identificador | `vita-lenta` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/vita-lenta (capturado el 2026-11-25) |
| Catálogo de origen | "Vita Lenta", grupo Live |
| Categoría | restauración / restaurante |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | restaurantes italianos, trattorias, pizzerías, bistrós, restaurantes de autor, cafeterías con cocina |
| Estilo | editorial y cálido, fondo crema, tipografía display decorativa (Tan Pearl) en mayúsculas, bloques de color suaves por franja horaria, animaciones de desenfoque y revelado |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave), Motion (Framer Motion) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 7.3 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Loader con una imagen SVG que gira antes de mostrar la página (`assets/media/star5.svg`, en el original una estrella; ahora es un placeholder rectangular).
- Navegación con menú a pantalla completa y botón de reservar; entra desde arriba tras el loader.
- Hero con el nombre de la marca a todo el ancho en tipografía decorativa y una foto grande debajo.
- Dos bloques de texto ("sobre el restaurante" y "valores") que aparecen con desenfoque, cada uno seguido de fotos que se revelan.
- Menú por momento del día (desayuno, comida, cena) con horario, color de fondo propio e imágenes de los platos.
- Marquesina con dos líneas de texto grande en movimiento.
- Vídeo revelado a través de una máscara SVG al hacer scroll (`assets/media/star4.svg`, en el original una estrella; ahora es un placeholder rectangular).
- Carta por categorías con lista de platos que muestra la foto al pasar el ratón.
- Bloque de reservas con imágenes que rotan y footer mínimo con marca, copyright e iconos de contacto.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- **Ruta de medios corregida en `assets/page.js`:** la constante con la carpeta de medios apuntaba a `assets/media/templates/<id>` (carpeta que no existe en este template) y se cambió a `assets/media`. No se tocó ningún chunk compilado.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `LoaderSpinner` | — | — |
| 2 | `NavbarFullscreen` | — | — |
| 3 | `HeroBrandReveal` | `#home` | hero |
| 4 | `AboutStatementSplit` | `#about` | about |
| 5 | `AboutImageReveal` | — | about-image |
| 6 | `AboutStatementSplit` | — | values |
| 7 | `AboutImageReveal` | — | values-images |
| 8 | `FeaturesTimeOfDay` | `#menu` | time-of-day |
| 9 | `StatementMarquee` | — | marquee |
| 10 | `AboutMaskReveal` | — | video-reveal |
| 11 | `MenuHoverReveal` | `#dishes` | menu |
| 12 | `ContactRotatingImages` | `#reserve` | reserve |
| 13 | `FooterMinimal` | `#contact` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-4u_BCjia.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#ece5d5` |
| `--foreground` | `#222` |
| `--card` | `#e3dac6` |
| `--card-foreground` | `#222` |
| `--popover` | `#ece5d5` |
| `--popover-foreground` | `#222` |
| `--primary` | `#222` |
| `--primary-foreground` | `#ece5d5` |
| `--secondary` | `#e3dac6` |
| `--secondary-foreground` | `#222` |
| `--muted` | `#dcd5c7` |
| `--muted-foreground` | `#55534f` |
| `--accent` | `#b28571` |
| `--accent-foreground` | `#ece5d5` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#c4beb1` |
| `--input` | `#c4beb1` |
| `--ring` | `#222` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×2416 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×1208 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1025×1536 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×1199 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1280×1792 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×1120 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1600×2000 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1600×1200 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×600 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1280×1920 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1280×1920 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-15.webp` | 100×100 (recorte con transparencia) |
| `assets/media/image-16-1600.webp` | 1280×1919 (recorte con transparencia) |
| `assets/media/image-16-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-17-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-17-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-18-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-18-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/video-01.mp4` | vídeo 1920x1080, 5.6 s |
| `assets/media/image-19-1600.webp` | 1080×1080 (recorte con transparencia) |
| `assets/media/image-19-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-20-1600.webp` | 1080×1080 (recorte con transparencia) |
| `assets/media/image-20-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-21-1600.webp` | 1080×1080 (recorte con transparencia) |
| `assets/media/image-21-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-22-1600.webp` | 1080×1080 (recorte con transparencia) |
| `assets/media/image-22-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-23-1600.webp` | 1080×1080 (recorte con transparencia) |
| `assets/media/image-23-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-24-1600.webp` | 1080×1080 (recorte con transparencia) |
| `assets/media/image-24-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-25-1600.webp` | 1600×1242 (recorte con transparencia) |
| `assets/media/image-25-800.webp` | 800×621 (recorte con transparencia) |
| `assets/media/image-26-1600.webp` | 1600×2134 (recorte con transparencia) |
| `assets/media/image-26-800.webp` | 800×1067 (recorte con transparencia) |
| `assets/media/image-27-1600.webp` | 1600×2134 (recorte con transparencia) |
| `assets/media/image-27-800.webp` | 800×1067 (recorte con transparencia) |
| `assets/media/image-28-1600.webp` | 1600×2134 (recorte con transparencia) |
| `assets/media/image-28-800.webp` | 800×1067 (recorte con transparencia) |
| `assets/media/image-29-1600.webp` | 1600×2399 (recorte con transparencia) |
| `assets/media/image-29-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-30-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-30-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/star4.svg` | .svg |
| `assets/media/star5.svg` | .svg |
| `assets/media/image-31-1600.webp` | 1600×1200 (recorte con transparencia) |
| `assets/media/image-31-800.webp` | 800×600 (recorte con transparencia) |
| `assets/media/image-32-1600.webp` | 1280×1920 (recorte con transparencia) |
| `assets/media/image-32-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/tan-pearl.otf` | tipografía propia del diseño: **licencia por verificar antes de publicar** |
| `assets/media/image-33-1600.webp` | 1280×1707 (recorte con transparencia) |
| `assets/media/image-33-800.webp` | 800×1067 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
