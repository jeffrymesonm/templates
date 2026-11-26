# Portafolio de creativo independiente (`creative-portfolio`)

> Landing clara y minimalista para un diseñador o fotógrafo independiente, con pantalla de carga con su foto, proyectos apilados en tarjetas que se barajan al hacer scroll y un FAQ por pestañas.

| Campo | Valor |
|---|---|
| Identificador | `creative-portfolio` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/creative-portfolio (capturado el 2026-11-25) |
| Catálogo de origen | "Creative Portfolio", grupo Paused |
| Categoría | portafolio / creativos independientes |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | diseñadores freelance, fotógrafos, videógrafos, directores de arte, diseñadores de producto y web, pequeños estudios unipersonales |
| Estilo | claro y minimalista, blanco con grises y negro, tipografía sans grande con segunda línea en gris, brillos difusos en las esquinas, tarjetas redondeadas |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.1 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Pantalla de carga con barra de progreso, la foto del profesional y su nombre; la navegación entra después.
- Navegación flotante en forma de cápsula con avatar y nombre, y un botón "+" que despliega los enlaces.
- Hero con titular en dos tonos y una pila de tarjetas de proyectos que rotan y se reordenan al hacer scroll.
- Testimonio destacado con valoración de 5 estrellas y avatar del cliente.
- Sección "Sobre mí" con cita grande, foto con efecto parallax y enlaces a redes sociales.
- Servicios en cuadrícula bento con imagen por servicio y botón de llamada a la acción.
- FAQ con pestañas por categoría (General, Precios, Proceso, Resultados) y acordeón, más una tarjeta de contacto con correo.
- Formulario de contacto (nombre, correo, mensaje) junto a una imagen con parallax y un enlace para reservar llamada.
- Fondo con brillos grises fijos en las esquinas y footer mínimo con marca, copyright y redes.

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
| 1 | `LoaderProgress` | — | — |
| 2 | `CornerGlowBackground` | — | — |
| 3 | `NavbarFloatingLogo` | — | — |
| 4 | `HeroWorkScrollStack` | — | — |
| 5 | `TestimonialTrustCard` | — | — |
| 6 | `AboutTestimonialParallax` | `#about` | about |
| 7 | `FeaturesBentoGridCta` | `#services` | services |
| 8 | `FaqTabbedAccordion` | — | — |
| 9 | `ContactSplitFormParallax` | `#contact` | contact |
| 10 | `FooterMinimal` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-cA8XwDCv.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#fff` |
| `--foreground` | `#171717` |
| `--card` | `#f5f5f5` |
| `--card-foreground` | `#171717` |
| `--popover` | `#f5f5f5` |
| `--popover-foreground` | `#171717` |
| `--primary` | `#171717` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#f5f5f5` |
| `--secondary-foreground` | `#171717` |
| `--muted` | `#ececec` |
| `--muted-foreground` | `#686868` |
| `--accent` | `#171717` |
| `--accent-foreground` | `#171717` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#e3e3e3` |
| `--input` | `#e3e3e3` |
| `--ring` | `#171717` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1254×1254 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×1200 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×600 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×1200 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×600 (recorte con transparencia) |
| `assets/media/image-05.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1086×1448 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×1067 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 128×128 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 128×128 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1086×1448 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×1067 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1600×1200 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×600 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1448×1086 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×600 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
