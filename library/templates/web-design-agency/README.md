# Agencia de diseño web (`web-design-agency`)

> Landing oscura y tecnológica para un estudio de diseño web, con objeto 3D animado en el hero, galería de proyectos en cúpula 3D y tarjetas de cristal sobre un fondo aurora.

| Campo | Valor |
|---|---|
| Identificador | `web-design-agency` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/web-design-agency (capturado el 2026-11-25) |
| Catálogo de origen | "Web Design Agency", grupo Live, kit `resend` |
| Categoría | agencia / servicios digitales |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | estudios de diseño web, agencias digitales, desarrolladores freelance, agencias de branding, consultoras de SEO, estudios de producto digital |
| Estilo | oscuro casi negro, tarjetas "glass" con bordes suaves, fondo aurora con haces de luz, tipografía sans gruesa con titulares en degradado, objetos 3D y cuadrícula de fondo |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, React Three Fiber, Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 8.0 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Preloader con un contador que sube dentro de un círculo que se va trazando (`LoaderGlassAperture`); la nav entra con un retardo de 1,6 s (`introDelay`).
- Barra de navegación en píldora de cristal con logo, botón de proyecto y menú desplegable.
- Hero con titular que aparece palabra a palabra y un objeto 3D animado con Three.js (prop `object`, aquí `coins`), sobre un fondo aurora fijo.
- Servicios en tarjetas apiladas con inclinación, cada una con foto, botón y dos cifras clave.
- Galería de proyectos sobre una cúpula 3D de tarjetas que gira, con nombre y etiqueta por proyecto.
- Proceso en tarjetas escalonadas numeradas ("Step 01 / 04").
- Testimonios en un carril de cristal con botones anterior/siguiente e indicadores.
- Precios en tres planes de cristal con icono, lista de características y botón propio.
- FAQ en acordeón a dos columnas con tarjeta de contacto, bloque de contacto con avatares y cúpula de imágenes, y footer con datos de contacto, columnas de enlaces e iconos sociales.

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
| 2 | `LoaderGlassAperture` | — | — |
| 3 | `NavbarSplitPill` | — | — |
| 4 | `HeroObjectSerif` | `#hero` | hero |
| 5 | `FeaturesTiltStack` | `#services` | services |
| 6 | `GalleryDomeCases` | `#work` | work |
| 7 | `ProcessStaggerCards` | `#process` | process |
| 8 | `TestimonialGlassRail` | `#testimonial` | testimonial |
| 9 | `PricingGlassPlans` | `#pricing` | pricing |
| 10 | `FaqSplitAccordion` | `#faq` | faq |
| 11 | `ContactFieldForm` | `#contact` | contact |
| 12 | `FooterTaglineColumns` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-fayIyQaN.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#010101` |
| `--foreground` | `#fff` |
| `--card` | `#121212` |
| `--card-foreground` | `#fff` |
| `--popover` | `#121212` |
| `--popover-foreground` | `#fff` |
| `--primary` | `#fff` |
| `--primary-foreground` | `#0a0a0a` |
| `--secondary` | `#1a1a1a` |
| `--secondary-foreground` | `#fff` |
| `--muted` | `#1a1a1a` |
| `--muted-foreground` | `#8a8a8a` |
| `--accent` | `#fff` |
| `--accent-foreground` | `#0a0a0a` |
| `--deep` | `#0e0e0e` |
| `--deep-foreground` | `#fff` |
| `--destructive` | `#e5484d` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#242424` |
| `--input` | `#2a2a2a` |
| `--ring` | `#fff` |
| `--tint-1` | `#3a3a3a` |
| `--tint-2` | `#262626` |
| `--tint-3` | `#171717` |
| `--glass` | `var(--foreground)` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Inter", "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Inter", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1080×1350 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1080×1350 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1080×1350 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1080×1350 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1080×1350 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-13.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1080×1350 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1200×1200 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-16-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-16-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-17-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-17-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-18-1600.webp` | 1536×1024 (recorte con transparencia) |
| `assets/media/image-18-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-19-1600.webp` | 1536×1024 (recorte con transparencia) |
| `assets/media/image-19-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-20-1600.webp` | 1536×1024 (recorte con transparencia) |
| `assets/media/image-20-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-21-1600.webp` | 1080×1350 (recorte con transparencia) |
| `assets/media/image-21-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-22-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-22-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-23-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-23-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-24-1600.webp` | 1080×1350 (recorte con transparencia) |
| `assets/media/image-24-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-25-1600.webp` | 1200×673 (recorte con transparencia) |
| `assets/media/image-25-800.webp` | 800×449 (recorte con transparencia) |
| `assets/media/set-01/image-01.jpeg` | 1024×1024 |
| `assets/media/image-26-1600.webp` | 1600×1061 (recorte con transparencia) |
| `assets/media/image-26-800.webp` | 800×531 (recorte con transparencia) |
| `assets/media/image-27-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-27-800.webp` | 800×1200 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
