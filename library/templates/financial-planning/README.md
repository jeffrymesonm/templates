# Asesoría financiera y patrimonial (`financial-planning`)

> Landing oscura y técnica para un asesor financiero, con un campo de partículas animado en 3D en el hero, rejilla de líneas discontinuas y detalles en amarillo con etiquetas monoespaciadas.

| Campo | Valor |
|---|---|
| Identificador | `financial-planning` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/financial-planning (capturado el 2026-11-25) |
| Catálogo de origen | "Financial Planning", grupo Live, kit `glide` |
| Categoría | servicios profesionales / finanzas |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | asesores y planificadores financieros, gestores de patrimonio, asesorías fiscales, consultores de jubilación, despachos contables, corredurías de seguros |
| Estilo | oscuro y minimalista, casi negro con acento amarillo, sans condensada (Inter Tight) con etiquetas en monoespaciada, marcos de línea discontinua, partículas y semitonos |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Geist Mono, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 7.0 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Pantalla de carga que dibuja un marco con una flecha antes de mostrar la página.
- Hero con campo de partículas en 3D (Three.js) que se mueve como un paisaje de puntos, etiqueta y dos botones.
- Navegación con marca a la izquierda y menú desplegable; en móvil, menú de pantalla completa.
- Servicios en celdas con fondo de puntos y un botón por servicio.
- Sección "sobre nosotros" con lista de puntos clave y cuatro ventajas con icono, sobre una fila de partículas.
- Galería en carril horizontal con efecto de semitono sobre las fotos.
- Tres tarifas numeradas en columnas que se inclinan al pasar el ratón, incluida una opción gratuita.
- Preguntas frecuentes en acordeón y formulario de contacto (nombre, correo, empresa, mensaje) junto a una imagen.
- Pie con columnas de enlaces, redes sociales y bordes discontinuos; scroll suave con Lenis.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- No se ha parcheado ningún chunk compilado: todo el texto visible sale de `assets/page.js`. Algunos chunks conservan textos
  por defecto de otras demos de Webild (p. ej. `NavbarSplitLinks-*.js`), que no se muestran porque `page.js` los sustituye.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `LoaderFrameDraw` | — | — |
| 2 | `NavbarSplitLinks` | — | — |
| 3 | `HeroDotField` | `#hero` | hero |
| 4 | `ServicesDotCells` | `#services` | services |
| 5 | `AboutParticleRow` | `#about` | about |
| 6 | `GalleryHalftoneRail` | `#gallery` | gallery |
| 7 | `PricingTiltColumns` | `#pricing` | pricing |
| 8 | `FaqCellRows` | `#faq` | faq |
| 9 | `ContactSplitCell` | `#contact` | contact |
| 10 | `FooterDashedColumns` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-C25yStBj.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#111214` |
| `--foreground` | `#f2f3f5` |
| `--card` | `#191a1d` |
| `--card-foreground` | `#f2f3f5` |
| `--popover` | `#191a1d` |
| `--popover-foreground` | `#f2f3f5` |
| `--primary` | `#f2f3f5` |
| `--primary-foreground` | `#111214` |
| `--secondary` | `#24262a` |
| `--secondary-foreground` | `#f2f3f5` |
| `--muted` | `#24262a` |
| `--muted-foreground` | `#a8abb2` |
| `--accent` | `#ffd23f` |
| `--accent-foreground` | `#111214` |
| `--deep` | `#0a0b0c` |
| `--deep-foreground` | `#f2f3f5` |
| `--destructive` | `#e5484d` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#34363c` |
| `--input` | `#24262a` |
| `--ring` | `#f2f3f5` |
| `--heading-weight` | `500` |
| `--heading-tracking` | `-.03em` |
| `--heading-leading` | `1.2` |
| `--text-display` | `clamp(3rem, 1.9rem + 4.6vw, 6rem)` |
| `--text-h1` | `clamp(1.4rem, 1.1771rem + .914vw, 2rem)` |
| `--text-h2` | `clamp(1.4rem, 1.1771rem + .914vw, 2rem)` |
| `--text-h3` | `clamp(1.05rem, .8829rem + .686vw, 1.5rem)` |
| `--text-body-lg` | `clamp(1.0125rem, .9707rem + .171vw, 1.125rem)` |
| `--text-body` | `1rem` |
| `--text-small` | `.875rem` |
| `--text-label` | `.75rem` |
| `--label-tracking` | `.02em` |
| `--label-case` | `uppercase` |
| `--gutter` | `clamp(1rem, -1.4143rem + 9.905vw, 7.5rem)` |
| `--max-w` | `1200px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(3.5rem, 2.5rem + 4vw, 6.25rem)` |
| `--gap` | `clamp(1rem, -.7179rem + 7.048vw, 5.625rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.19, 1, .22, 1)` |
| `--ease-in-out` | `cubic-bezier(.52, 0, 0, 1)` |
| `--dur-fast` | `.3s` |
| `--dur-base` | `.7s` |
| `--dur-slow` | `1.2s` |
| `--reveal-distance` | `2rem` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Inter Tight", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"Geist Mono", ui-monospace, Menlo, monospace` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-03.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1335×2000 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×1199 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1400×2000 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×1143 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
