# Software de contabilidad SaaS (`accounting-software`)

> Landing oscura para un software de contabilidad o facturación, con un panel de control de la app recreado en código sobre un degradado fluido azul y maquetas de interfaz animadas en cada paso, caso de uso y bloque de soporte.

| Campo | Valor |
|---|---|
| Identificador | `accounting-software` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/accounting-software-app (capturado el 2026-11-25) |
| Catálogo de origen | "Accounting Software", grupo Live, kit `cobalt` |
| Categoría | software / SaaS (finanzas y contabilidad) |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | software de contabilidad, facturación o nóminas, fintech, apps de gestión para pymes y autónomos, herramientas B2B con panel de control |
| Estilo | oscuro y limpio tipo producto SaaS, casi negro con acento azul, sans Inter con la segunda mitad de los titulares en gris, tarjetas de interfaz sobre degradado fluido, animaciones suaves |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.8 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Navegación con logo y botones "Log in" y prueba gratis; en móvil, menú desplegable.
- Hero con titular en dos tonos y un panel de control completo de la app (menú lateral, saludo, métricas con minigráficas, gráfico de barras, tabla de facturas y tarjeta de progreso) sobre un degradado fluido azul animado.
- Fila de prueba social con nombres de clientes en texto (no imágenes) que se van alternando.
- Proceso en seis pasos, cada uno con una minimaqueta de interfaz (conexión de cuentas, lista priorizada, checklist de aprobación).
- Casos de uso en acordeón con cuatro perfiles: siempre hay uno abierto, rota solo cada pocos segundos y muestra a la derecha un panel distinto (estado de facturas, métricas con gráfica, línea de tiempo).
- Testimonios en carrusel de tarjetas de cristal con foto, cita, cargo y una métrica destacada, con flechas anterior/siguiente.
- Precios en tres planes, FAQ en acordeón con tarjeta fija de contacto y formulario de soporte con panel de estado (equipo en línea, tiempo medio de respuesta, cola de consultas). El formulario y la suscripción del footer solo evitan el envío: hay que conectarlos a un servicio.
- Footer con suscripción por correo, cuatro columnas de enlaces, redes y el nombre de la marca como wordmark grande.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- Ningún chunk compilado contenía la marca de la demo: la neutralización solo tocó `assets/page.js`.
- El acordeón de casos de uso (`FeaturesFluidUseCases`) mantiene siempre un elemento abierto: pulsar el que ya está
  abierto no lo cierra. Es el diseño original, no un fallo, aunque `tools/verify.cjs` lo marque como "toggles not responding".

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `NavbarLoginTab` | — | — |
| 2 | `HeroFluidDashboard` | `#hero` | hero |
| 3 | `SocialProofLogoRow` | `#logos` | logos |
| 4 | `ProcessFluidSteps` | `#process` | process |
| 5 | `FeaturesFluidUseCases` | `#services` | services |
| 6 | `TestimonialGlassSlider` | `#testimonial` | testimonial |
| 7 | `PricingFluidPlans` | `#pricing` | pricing |
| 8 | `FaqStickyAccordion` | `#faq` | faq |
| 9 | `ContactFluidForm` | `#contact` | contact |
| 10 | `FooterSubscribeWordmark` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-2LXEpNwa.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#0c0c0e` |
| `--foreground` | `#f4f4f5` |
| `--card` | `#121214` |
| `--card-foreground` | `#f4f4f5` |
| `--popover` | `#121214` |
| `--popover-foreground` | `#f4f4f5` |
| `--primary` | `#f4f4f5` |
| `--primary-foreground` | `#0c0c0e` |
| `--secondary` | `#16161a` |
| `--secondary-foreground` | `#f4f4f5` |
| `--muted` | `#16161a` |
| `--muted-foreground` | `#8e8e95` |
| `--accent` | `#2563eb` |
| `--accent-foreground` | `#fff` |
| `--deep` | `#030409` |
| `--deep-foreground` | `#f4f4f5` |
| `--destructive` | `#f87171` |
| `--destructive-foreground` | `#0c0c0e` |
| `--border` | `#202024` |
| `--input` | `#202024` |
| `--ring` | `#f4f4f5` |
| `--heading-weight` | `500` |
| `--heading-tracking` | `-.04em` |
| `--heading-leading` | `1.06` |
| `--text-display` | `clamp(2.75rem, 1.9rem + 3.6vw, 5rem)` |
| `--text-h1` | `clamp(2.125rem, 1.6rem + 2.2vw, 3.75rem)` |
| `--text-h2` | `clamp(1.5rem, 1.3rem + .9vw, 2.125rem)` |
| `--text-h3` | `clamp(1.125rem, 1.06rem + .3vw, 1.375rem)` |
| `--text-body-lg` | `clamp(1rem, .96rem + .2vw, 1.125rem)` |
| `--text-body` | `.9375rem` |
| `--text-small` | `.875rem` |
| `--text-label` | `.8125rem` |
| `--label-tracking` | `0em` |
| `--label-case` | `none` |
| `--gutter` | `clamp(1rem, .4rem + 2.2vw, 2.5rem)` |
| `--max-w` | `1280px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(4.5rem, 3.4rem + 4vw, 8rem)` |
| `--gap` | `clamp(.75rem, .6rem + .5vw, 1.125rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.22, 1, .36, 1)` |
| `--ease-in-out` | `cubic-bezier(.65, 0, .35, 1)` |
| `--dur-fast` | `.3s` |
| `--dur-base` | `.65s` |
| `--dur-slow` | `1.05s` |
| `--reveal-distance` | `1.5rem` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-accent` | `"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-02.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×800 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
