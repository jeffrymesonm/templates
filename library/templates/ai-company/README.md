# Empresa de inteligencia artificial (`ai-company`)

> Landing oscura y tecnológica para un producto de IA (agentes de atención al cliente), con un campo de miles de partículas en tiempo real que forma figuras, reacciona al ratón y cambia de forma con el scroll.

| Campo | Valor |
|---|---|
| Identificador | `ai-company` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/ai-company (capturado el 2026-11-25) |
| Catálogo de origen | "AI Company", grupo Live, kit `drift` |
| Categoría | tecnología / SaaS e inteligencia artificial |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | startups de IA, productos SaaS B2B, herramientas de atención al cliente, empresas de automatización, consultoras tecnológicas, agencias de desarrollo |
| Estilo | oscuro y técnico, negro con brillos verde azulado y violeta, partículas luminosas, etiquetas en monoespaciada mayúscula, numeración entre corchetes y botones rectos blancos |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Geist Mono, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.9 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Preloader con contador de partículas y la marca con su icono de puntos.
- Navegación compacta flotante con marca, botón de demo y menú desplegable.
- Fondo fijo de partículas (`ParticleDriftStage`) que forma una nube en el hero, reacciona al puntero y cambia de figura al hacer scroll.
- Hero con titular grande que aparece palabra a palabra, descripción en mayúsculas y etiquetas de confianza.
- Funcionalidades en tres tarjetas con foto e inclinación 3D al pasar el ratón, y proceso en cuatro pasos que se rellenan con el scroll.
- Sección interactiva "mueve el ratón por encima" donde las partículas forman una figura, con nota y botón.
- Métricas con contadores animados y testimonios en carrusel con retrato, cargo y empresa.
- Precios en tres planes de cristal, FAQ en acordeón y contacto en línea (nombre y correo) con validación de correo y mensaje de éxito (no envía datos: hay que conectarlo a un servicio).
- Footer con nota, columnas de enlaces y redes.

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
| 1 | `ParticleDriftStage` | — | — |
| 2 | `LoaderParticleCount` | — | — |
| 3 | `NavbarDrift` | — | — |
| 4 | `HeroDrift` | `#home` | hero |
| 5 | `ServicesTiltCards` | `#product` | features |
| 6 | `ProcessFillSteps` | `#process` | process |
| 7 | `AboutParticleShape` | `#model` | about |
| 8 | `MetricsRuledCounters` | `#results` | metrics |
| 9 | `TestimonialPaperCarousel` | `#testimonial` | testimonial |
| 10 | `PricingGlassTiers` | `#pricing` | pricing |
| 11 | `FaqPaperAccordion` | `#faq` | faq |
| 12 | `ContactInlineField` | `#contact` | contact |
| 13 | `FooterDrift` | — | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-DL3Ec16m.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#020405` |
| `--foreground` | `#eef6f5` |
| `--card` | `#fbfbfa` |
| `--card-foreground` | `#111414` |
| `--popover` | `#fbfbfa` |
| `--popover-foreground` | `#111414` |
| `--primary` | `#eef6f5` |
| `--primary-foreground` | `#020405` |
| `--secondary` | `#0a1214` |
| `--secondary-foreground` | `#eef6f5` |
| `--muted` | `#0d1517` |
| `--muted-foreground` | `#9aa3a2` |
| `--accent` | `#2fd6b8` |
| `--accent-foreground` | `#020405` |
| `--deep` | `#010203` |
| `--deep-foreground` | `#eef6f5` |
| `--destructive` | `#ff6b6b` |
| `--destructive-foreground` | `#020405` |
| `--border` | `#252b2c` |
| `--input` | `#252b2c` |
| `--ring` | `#eef6f5` |
| `--particle-a` | `#2fdbb8` |
| `--particle-b` | `#7a52ff` |
| `--particle-c` | `#db80ff` |
| `--particle-d` | `#4073ff` |
| `--aurora-1` | `#0f5c63` |
| `--aurora-2` | `#2d7f9a` |
| `--aurora-3` | `#2a2470` |
| `--heading-weight` | `300` |
| `--heading-tracking` | `-.035em` |
| `--heading-leading` | `.98` |
| `--text-display` | `clamp(2.875rem, 1.6rem + 4.2vw, 5.5rem)` |
| `--text-h1` | `clamp(2.5rem, 1.5rem + 3.4vw, 4.625rem)` |
| `--text-h2` | `clamp(2.125rem, 1.5rem + 2vw, 3.375rem)` |
| `--text-h3` | `clamp(1.625rem, 1.3rem + .9vw, 2.25rem)` |
| `--text-body-lg` | `clamp(1rem, .95rem + .2vw, 1.125rem)` |
| `--text-body` | `.9375rem` |
| `--text-small` | `.875rem` |
| `--text-label` | `.8125rem` |
| `--label-tracking` | `.02em` |
| `--label-case` | `uppercase` |
| `--gutter` | `clamp(1.125rem, .4rem + 2.2vw, 2.125rem)` |
| `--max-w` | `1280px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(5rem, 3.6rem + 4.4vw, 9rem)` |
| `--gap` | `clamp(1.25rem, .9rem + 1.2vw, 2.5rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.22, 1, .36, 1)` |
| `--ease-in-out` | `cubic-bezier(.65, 0, .35, 1)` |
| `--dur-fast` | `.3s` |
| `--dur-base` | `.6s` |
| `--dur-slow` | `1s` |
| `--reveal-distance` | `1.375rem` |

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
| `assets/media/image-02-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-04.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×534 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
