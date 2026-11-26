# Landing SaaS oscura con aurora (`saas-platform`)

> Landing de una página para un producto de software: fondo oscuro con aurora y rayos de luz, titular que aparece palabra a palabra, cinta de logos de clientes y tarjetas bento animadas.

| Campo | Valor |
|---|---|
| Identificador | `saas-platform` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/saas-platform (capturado el 2026-11-25) |
| Catálogo de origen | "SaaS Platform", grupo Paused |
| Categoría | tecnología / SaaS |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | startups y productos SaaS, herramientas para desarrolladores, apps web y móviles, plataformas B2B, APIs, productos con prueba gratuita y planes de suscripción |
| Estilo | tecnológico y oscuro, violeta casi negro + lila, aurora y rayos de luz de fondo, tarjetas con borde fino, tipografía sans-serif limpia, botones con brillo |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave), Motion (Framer Motion) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 5.7 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Fondo de aurora fijo y haz de rayos de luz detrás del hero, con rejilla tenue.
- Navegación en cápsula flotante con enlaces a las secciones y botón de llamada a la acción.
- Hero centrado: grupo de avatares con texto de confianza, titular y descripción que aparecen palabra a palabra, dos botones y cinta infinita de nombres de clientes.
- Características en tarjetas bento animadas: gráfica de barras, carrusel de métricas (latencia, regiones, disponibilidad) e iconos en órbita alrededor de un icono central.
- Ventajas en cuatro tarjetas con icono sobre un fondo de caracteres aleatorios animados.
- Testimonio destacado con estrellas, cita y grupo de avatares.
- Tres planes de precios en tarjetas superpuestas con lista de características y botón por plan.
- Bloque final de llamada a la acción y pie que se revela al hacer scroll con cuatro columnas de enlaces.

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
| 3 | `LightRaysCenterBackground` | `#hero` | hero |
| 4 | `HeroCenteredLogos` | `#hero` | hero |
| 5 | `FeaturesBento` | `#features` | features |
| 6 | `FeaturesIconCards` | — | features-icon |
| 7 | `TestimonialTrustCard` | `#testimonials` | testimonials |
| 8 | `PricingLayeredCards` | `#pricing` | pricing |
| 9 | `ContactCta` | `#contact` | contact |
| 10 | `FooterSimpleReveal` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-DZllflIm.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#050012` |
| `--foreground` | `#f0e6ff` |
| `--card` | `#040121` |
| `--card-foreground` | `#f0e6ff` |
| `--popover` | `#040121` |
| `--popover-foreground` | `#f0e6ff` |
| `--primary` | `#c89bff` |
| `--primary-foreground` | `#050012` |
| `--secondary` | `#1d123b` |
| `--secondary-foreground` | `#f0e6ff` |
| `--muted` | `#181225` |
| `--muted-foreground` | `#9e96ac` |
| `--accent` | `#684f7b` |
| `--accent-foreground` | `#f0e6ff` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#211c2e` |
| `--input` | `#211c2e` |
| `--ring` | `#c89bff` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-01/image-01.webp` | 1200×1800 (recorte con transparencia) |
| `assets/media/set-02/image-01.avif` | .avif |
| `assets/media/set-02/image-02.avif` | .avif |
| `assets/media/set-02/image-03.avif` | .avif |
| `assets/media/set-02/image-04.avif` | .avif |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
