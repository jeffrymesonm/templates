# Fontanería oscura con insignias de confianza (`plumbing-services`)

> Landing oscura para una empresa de fontanería o servicios del hogar: hero con foto a pantalla completa, avatares de clientes, botón de llamada y una cinta de insignias de confianza en movimiento.

| Campo | Valor |
|---|---|
| Identificador | `plumbing-services` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/plumbing-services (capturado el 2026-11-25) |
| Catálogo de origen | "Plumbing Services", grupo Paused |
| Categoría | servicios / fontanería y hogar |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | fontaneros, urgencias del hogar, calentadores y calderas, desatascos, reformas de baño y cocina, pequeñas empresas de mantenimiento |
| Estilo | oscuro azul marino + azul cielo, tipografía sans fuerte, tarjetas con brillo en el borde y fondo con degradados flotantes |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 5.9 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Fondo oscuro con degradados que flotan suavemente.
- Navegación en línea con enlaces centrados y botón de presupuesto.
- Hero centrado sobre imagen a pantalla completa, con avatares de clientes, titular animado, botón de reserva y botón de llamada.
- Cinta horizontal en movimiento con seis insignias de confianza (licencias, urgencias 24/7, garantía...).
- Seis servicios en tarjetas con imagen, título y descripción.
- Reseñas en tarjetas con estrellas, cita, nombre, tipo de cliente y foto.
- "Por qué elegirnos" con tres tarjetas con icono y brillo en el borde.
- Preguntas frecuentes en acordeón y formulario de contacto con imagen lateral.
- Pie en tarjeta con columnas de servicios, empresa y contacto, copyright y enlaces legales.

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
| 1 | `FloatingGradientBackground` | — | — |
| 2 | `NavbarInline` | — | — |
| 3 | `HeroCenteredLogos` | `#hero` | hero |
| 4 | `FeaturesMediaCards` | `#services` | services |
| 5 | `TestimonialRatingCards` | `#reviews` | reviews |
| 6 | `FeaturesBorderGlow` | `#why-us` | why-us |
| 7 | `FaqSimple` | `#faq` | faq |
| 8 | `ContactSplitForm` | `#contact` | contact |
| 9 | `FooterSimpleCard` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-CQkO6X-3.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#020617` |
| `--foreground` | `#f1f5f9` |
| `--card` | `#0f172a` |
| `--card-foreground` | `#f1f5f9` |
| `--popover` | `#0f172a` |
| `--popover-foreground` | `#f1f5f9` |
| `--primary` | `#0ea5e9` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#334155` |
| `--secondary-foreground` | `#f1f5f9` |
| `--muted` | `#151929` |
| `--muted-foreground` | `#9da1aa` |
| `--accent` | `#38bdf8` |
| `--accent-foreground` | `#f1f5f9` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#1f2332` |
| `--input` | `#1f2332` |
| `--ring` | `#0ea5e9` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-01/image-01.webp` | 1920×1281 (recorte con transparencia) |
| `assets/media/set-01/image-02.webp` | 1920×1280 (recorte con transparencia) |
| `assets/media/set-01/image-03.webp` | 1920×1281 (recorte con transparencia) |
| `assets/media/set-01/image-04.webp` | 1920×1280 (recorte con transparencia) |
| `assets/media/set-01/image-05.webp` | 1920×1368 (recorte con transparencia) |
| `assets/media/set-01/image-06.webp` | 1920×1281 (recorte con transparencia) |
| `assets/media/set-01/image-07.webp` | 1920×1280 (recorte con transparencia) |
| `assets/media/set-01/image-08.webp` | 1920×1280 (recorte con transparencia) |
| `assets/media/set-02/image-01.webp` | 400×267 (recorte con transparencia) |
| `assets/media/set-02/image-02.webp` | 400×224 (recorte con transparencia) |
| `assets/media/set-02/image-03.webp` | 400×400 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
