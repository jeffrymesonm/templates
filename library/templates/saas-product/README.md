# Producto SaaS con forma 3D (`saas-product`)

> Landing oscura para un producto de software con una forma 3D brillante que gira y se encoge con el scroll, títulos que entran palabra a palabra y secciones numeradas al estilo índice.

| Campo | Valor |
|---|---|
| Identificador | `saas-product` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/saas-product (capturado el 2026-11-25) |
| Catálogo de origen | "SaaS Product", grupo Live, kit `velorn` |
| Categoría | tecnología / SaaS |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | productos SaaS, herramientas de soporte y help desk, apps B2B, startups de software, plataformas web |
| Estilo | oscuro con azul eléctrico, forma 3D lacada, etiquetas numeradas en monoespaciada ("01 / Features"), tipografía sans grande y fotos en tonos oscuros |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, React Three Fiber, Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, IBM Plex Mono, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 7.5 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Forma 3D (marco) que acompaña el scroll: gira, se inclina y se reduce mientras avanza la página.
- Loader con el nombre de la marca que se traslada a la navegación al terminar.
- Navegación en píldora con menú desplegable y botón de contacto.
- Hero dividido con etiqueta, título que entra palabra a palabra, descripción y dos botones subrayados.
- Funcionalidades en paneles con palabra grande y foto, numerados 01/05.
- Proceso en bento de cuatro pasos y métricas con contadores animados y foto que crece.
- Precios en tres columnas con ficha de especificaciones por plan.
- Testimonios con retrato y cita en carrusel, y FAQ en acordeón con índice numerado.
- CTA con pantallas flotantes y palabra en marquesina, y footer con marca, eslogan y enlaces.

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
| 1 | `ModelStage` | — | — |
| 2 | `LoaderWordmarkHandoff` | — | — |
| 3 | `NavbarMenuPill` | — | — |
| 4 | `HeroShapeSplit` | `#hero` | hero |
| 5 | `GalleryWordPanels` | `#features` | features |
| 6 | `ProcessBentoPanels` | `#process` | process |
| 7 | `MetricsPhotoGrow` | `#metrics` | metrics |
| 8 | `PricingScopeColumns` | `#pricing` | pricing |
| 9 | `TestimonialPortraitQuote` | `#testimonial` | testimonial |
| 10 | `FaqHairlineIndex` | `#faq` | faq |
| 11 | `CtaFloatingScreens` | `#cta` | cta |
| 12 | `FooterWordmarkLanding` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-_0arDqw7.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#000` |
| `--foreground` | `#fefefe` |
| `--card` | `#141414` |
| `--card-foreground` | `#fefefe` |
| `--popover` | `#000` |
| `--popover-foreground` | `#fefefe` |
| `--primary` | `#fefefe` |
| `--primary-foreground` | `#000` |
| `--secondary` | `#141414` |
| `--secondary-foreground` | `#fefefe` |
| `--muted` | `#141414` |
| `--muted-foreground` | `#9a9a9a` |
| `--accent` | `#3d6bff` |
| `--accent-foreground` | `#000` |
| `--deep` | `#000` |
| `--deep-foreground` | `#fefefe` |
| `--destructive` | `#e5484d` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#1e1e1e` |
| `--input` | `#333` |
| `--ring` | `#fefefe` |
| `--tint-1` | `#1f3680` |
| `--tint-2` | `#152559` |
| `--tint-3` | `#0c1533` |
| `--glow` | `var(--accent)` |
| `--glass` | `var(--background)` |
| `--accent-glass` | `var(--accent)` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×900 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/set-01/model-01.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/image-10-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-11.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-16-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-16-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-17-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-17-800.webp` | 800×534 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
