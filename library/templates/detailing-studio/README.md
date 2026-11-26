# Estudio de detallado premium (`detailing-studio`)

> Landing premium para un estudio de detallado: vídeo a pantalla completa que avanza con el scroll, servicios marcados con puntos sobre un vídeo y comparativas antes/después.

| Campo | Valor |
|---|---|
| Identificador | `detailing-studio` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/detailing-studio (capturado el 2026-11-25) |
| Catálogo de origen | "Detailing Studio", grupo Live |
| Categoría | servicios / automoción |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | estudios de detallado de autos de alta gama, corrección de pintura, recubrimientos cerámicos y film de protección (PPF), wrapping, restauración de clásicos |
| Estilo | cinematográfico y sobrio, vídeo a pantalla completa, blanco sobre oscuro, tipografía sans grande, botones en píldora |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.8 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Hero con vídeo a pantalla completa que avanza al ritmo del scroll, avatares de clientes con frase de confianza, titular y dos botones.
- Frase de declaración que se revela con paneles de imágenes, superpuesta al final del hero.
- Servicios como puntos interactivos ("hotspots") sobre un vídeo: cada punto abre título, lema y descripción.
- Resultados en tarjetas antes/después con nombre del servicio y detalle del trabajo, en carrusel continuo.
- Preguntas frecuentes en acordeón.
- Contacto con campo de correo sobre imagen y enlace directo a correo.
- Pie con la marca que se revela en grande y tres columnas de enlaces (secciones y redes).
- Navegación con enlaces fijos; en móvil, menú desplegable con botón "+".

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
| 1 | `NavbarLinksStatic` | — | — |
| 2 | `HeroVideoScrollBillboard` | `#hero` | hero |
| 3 | `StatementPanelReveal` | `#about` | about |
| 4 | `FeaturesVideoHotspots` | `#services` | services |
| 5 | `FeaturesResultsComparison` | `#results` | results |
| 6 | `FaqSimpleSecondary` | `#faq` | faq |
| 7 | `ContactOverlayEmail` | `#contact` | contact |
| 8 | `FooterBrandRevealSquare` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-uTdl6bWp.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#010101` |
| `--foreground` | `#fff` |
| `--card` | `#1a1a1a` |
| `--card-foreground` | `#fff` |
| `--popover` | `#1a1a1a` |
| `--popover-foreground` | `#fff` |
| `--primary` | `#fff` |
| `--primary-foreground` | `#010101` |
| `--secondary` | `#161616` |
| `--secondary-foreground` | `#fff` |
| `--muted` | `#151515` |
| `--muted-foreground` | `#a6a6a6` |
| `--accent` | `#aaa3ff` |
| `--accent-foreground` | `#fff` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#1f1f1f` |
| `--input` | `#1f1f1f` |
| `--ring` | `#fff` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/video-01.mp4` | vídeo 1920x1080, 7.6 s |
| `assets/media/image-01-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1600×687 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×344 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1199×799 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/video-02.mp4` | vídeo 1920x1080, 4.2 s |
| `assets/media/image-11.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 128×128 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 128×128 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 128×128 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 128×128 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 128×128 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 128×128 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
