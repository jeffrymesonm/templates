# Clínica médica familiar (`medical-clinic`)

> Landing de estética científica para una clínica o consulta médica, con una doble hélice de ADN hecha de partículas en el hero, lecturas tipo instrumental (marcos con esquinas, odómetros, coordenadas) y wordmark ajustado al ancho en el footer.

| Campo | Valor |
|---|---|
| Identificador | `medical-clinic` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/medical-clinic (capturado el 2026-11-25) |
| Catálogo de origen | "Medical Clinic", grupo Live, kit `alethia` |
| Categoría | salud / clínica médica |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | clínicas y consultas médicas, médicos de familia, pediatras, centros de análisis y diagnóstico por imagen, fisioterapia, clínicas dentales |
| Estilo | científico y limpio, hero negro con partículas cian y secciones claras gris azulado, sans grotesca, etiquetas en monoespaciada, marcos con esquinas (ticks), botones con flecha en caja |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Geist Mono, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 7.2 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Preloader con punto de señal y lectura numérica antes de mostrar la marca.
- Navegación tipo HUD con marca e icono circular, botón de cita y menú desplegable.
- Hero con doble hélice de ADN de partículas en tiempo real (`data-particles="health"`), un marco de enfoque, valoración media con contador y aviso de scroll.
- Sección de enfoque con lista numerada de compromisos, ficha "sala/chequeo", medidor de temperatura y contador grande de pacientes con odómetro.
- Servicios en tarjetas con foto que se voltean, y equipo en carrusel coverflow con retrato, nombre y cargo.
- Historias de pacientes en un deslizador de casos con foto, etiqueta, cita y botones anterior/siguiente.
- Precios en tres planes con importes en odómetro y lista numerada de características.
- Formulario de cita con marcos de esquina y coordenadas; al enviar solo muestra el mensaje de éxito (hay que conectarlo a un servicio).
- Footer con dirección y horario, columnas de enlaces, foto, botón "volver arriba" y la marca ajustada al ancho.

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
| 1 | `LoaderSignalDot` | — | — |
| 2 | `NavbarHudBar` | — | — |
| 3 | `HeroParticleIsland` | `#hero` | hero |
| 4 | `AboutParticleMast` | `#about` | about |
| 5 | `ServicesFieldCards` | `#services` | services |
| 6 | `TeamTickCoverflow` | `#team` | team |
| 7 | `TestimonialCaseSlider` | `#testimonial` | testimonial |
| 8 | `PricingReadoutPlans` | `#pricing` | pricing |
| 9 | `ContactTickForm` | `#contact` | contact |
| 10 | `FooterFieldWordmark` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-07-jIuuc.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#f2f5f5` |
| `--foreground` | `#0c1c24` |
| `--card` | `#fff` |
| `--card-foreground` | `#0c1c24` |
| `--popover` | `#fff` |
| `--popover-foreground` | `#0c1c24` |
| `--primary` | `#0c1c24` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#e2e8e9` |
| `--secondary-foreground` | `#0c1c24` |
| `--muted` | `#e7eced` |
| `--muted-foreground` | `#47575e` |
| `--accent` | `#9fe3f0` |
| `--accent-foreground` | `#0c1c24` |
| `--deep` | `#081014` |
| `--deep-foreground` | `#fff` |
| `--destructive` | `#e5484d` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#d3dadc` |
| `--input` | `#e7eced` |
| `--ring` | `#0c1c24` |
| `--heading-weight` | `500` |
| `--heading-tracking` | `-.05em` |
| `--heading-leading` | `.95` |
| `--text-display` | `clamp(2.25rem, 1.4143rem + 3.429vw, 4.5rem)` |
| `--text-h1` | `clamp(2.25rem, 1.4143rem + 3.429vw, 4.5rem)` |
| `--text-h2` | `clamp(2.25rem, 1.7857rem + 1.905vw, 3.5rem)` |
| `--text-h3` | `clamp(1.75rem, 1.4714rem + 1.143vw, 2.5rem)` |
| `--text-body-lg` | `clamp(1.5rem, 1.3143rem + .762vw, 2rem)` |
| `--text-body` | `clamp(1rem, .8143rem + .762vw, 1.5rem)` |
| `--text-small` | `.875rem` |
| `--text-label` | `.875rem` |
| `--label-tracking` | `0em` |
| `--label-case` | `uppercase` |
| `--gutter` | `clamp(1rem, .7214rem + 1.143vw, 1.75rem)` |
| `--max-w` | `1280px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(5.8125rem, 5.2786rem + 2.19vw, 7.25rem)` |
| `--gap` | `clamp(1rem, .8839rem + .476vw, 1.3125rem)` |
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
| `--font-heading` | `"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"Geist Mono", ui-monospace, Menlo, monospace` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1125×2000 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1423 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-09.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1125×2000 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×1423 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1564×2000 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×1024 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1125×2000 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×1423 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1125×2000 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×1423 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
