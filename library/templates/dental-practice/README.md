# Clínica dental clara (`dental-practice`)

> Landing luminosa para una clínica dental: fondo con aurora azul y resplandor en el horizonte, hero partido con cifras flotando sobre la foto y servicios en tarjetas con valoración y precio.

| Campo | Valor |
|---|---|
| Identificador | `dental-practice` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/dental-practice (capturado el 2026-11-25) |
| Catálogo de origen | "Dental Practice", grupo Paused |
| Categoría | salud / clínica |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | clínicas dentales, ortodoncia, estética dental, implantología, clínicas médicas privadas, fisioterapia, clínicas de estética |
| Estilo | claro, limpio, blanco + azul intenso, tipografía sans moderna, tarjetas blancas redondeadas y fondos con brillo suave |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 5.7 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Fondo fijo con aurora azul suave y un resplandor curvo tipo horizonte detrás del hero.
- Barra de navegación en cápsula con enlaces en línea y botón de cita.
- Hero a dos columnas: titular que sube al entrar, dos botones y foto con tres tarjetas de cifras flotando alrededor.
- Servicios en tarjetas de producto con categoría, estrellas, número de reseñas y precio "From $00".
- Bloque "sobre nosotros" con una frase grande que aparece palabra a palabra y dos botones.
- Ventajas en dos tarjetas con imagen, título y descripción.
- Reseñas en carrusel horizontal infinito con foto, nombre y cita.
- Contacto con campo de correo y botón junto a una foto; pie con tres columnas de enlaces y aviso legal.

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
| 2 | `NavbarInline` | — | — |
| 3 | `HorizonGlowBackground` | `#hero` | hero |
| 4 | `HeroSplitKpi` | `#hero` | hero |
| 5 | `ProductRatingCards` | `#services` | services |
| 6 | `AboutText` | `#about` | about |
| 7 | `FeaturesMediaCards` | `#features` | features |
| 8 | `TestimonialMarqueeCards` | `#testimonials` | testimonials |
| 9 | `ContactSplitEmail` | `#contact` | contact |
| 10 | `FooterSimple` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-BF2Id80t.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#f7f6f7` |
| `--foreground` | `#0c1325` |
| `--card` | `#fff` |
| `--card-foreground` | `#0c1325` |
| `--popover` | `#fff` |
| `--popover-foreground` | `#0c1325` |
| `--primary` | `#0798ff` |
| `--primary-foreground` | `#f7f6f7` |
| `--secondary` | `#fff` |
| `--secondary-foreground` | `#0c1325` |
| `--muted` | `#e4e4e6` |
| `--muted-foreground` | `#5e626f` |
| `--accent` | `#93c7ff` |
| `--accent-foreground` | `#0c1325` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#dbdbde` |
| `--input` | `#dbdbde` |
| `--ring` | `#0798ff` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-01/image-01.avif` | .avif |
| `assets/media/set-01/image-02.avif` | .avif |
| `assets/media/set-02/image-01.avif` | .avif |
| `assets/media/set-03/image-01.avif` | .avif |
| `assets/media/set-04/image-01.avif` | .avif |
| `assets/media/set-04/image-02.avif` | .avif |
| `assets/media/set-04/image-03.avif` | .avif |
| `assets/media/set-05/image-01.webp` | 1200×1800 (recorte con transparencia) |
| `assets/media/set-05/image-02.webp` | 1200×1200 (recorte con transparencia) |
| `assets/media/set-05/image-03.webp` | 1200×800 (recorte con transparencia) |
| `assets/media/set-06/image-01.avif` | .avif |
| `assets/media/set-06/image-02.avif` | .avif |
| `assets/media/set-06/image-03.avif` | .avif |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
