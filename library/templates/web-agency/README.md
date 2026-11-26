# Agencia web oscura con marquesina vertical (`web-agency`)

> Landing oscura para una agencia de diseño y desarrollo web, con hero de dos columnas de capturas que se desplazan en vertical y tarjetas de servicios animadas (bento).

| Campo | Valor |
|---|---|
| Identificador | `web-agency` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/web-agency (capturado el 2026-11-25) |
| Catálogo de origen | "Web Agency", grupo Paused |
| Categoría | Agencia / servicios creativos |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | Agencias web, estudios de diseño, desarrolladores freelance, consultoras de marketing digital y SEO |
| Estilo | Oscuro y minimalista, tipografía sans grande, rayos de luz y aurora de fondo, tarjetas con borde luminoso |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 5.8 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Navegación flotante en cápsula con botón de acción y menú desplegable.
- Hero con rayos de luz en la esquina y dos columnas de imágenes en marquesina vertical que se mueven en sentidos opuestos.
- Servicios en formato bento con mini animaciones: cronograma con checklist, gráfico de barras animado e iconos en órbita.
- Carrusel de proyectos con flechas y enlace por tarjeta.
- Tarjetas de "por qué elegirnos" con brillo en el borde que sigue al cursor.
- Testimonio destacado con valoración en estrellas y fila de avatares de clientes.
- Métricas en tarjetas con lista de puntos, equipo en tarjetas apiladas y FAQ en acordeón.
- Contacto centrado con campo de email y pie con columnas de enlaces que se revela al hacer scroll.
- Textos con animación de entrada `fade-blur` en todas las secciones.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- Neutralización: solo se cambió `assets/page.js` (ningún chunk compilado parcheado). Las imágenes remotas del original
  (capturas del hero, fotos del equipo y avatares del testimonio, alojadas en el bucket de Webild y en randomuser.me)
  apuntan ahora a los placeholders locales `projectnew1-3.webp`; cámbialas por imágenes propias en `assets/page.js`.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `AuroraBackground` | — | — |
| 2 | `NavbarDropdown` | — | — |
| 3 | `LightRaysCornerBackground` | `#hero` | hero |
| 4 | `HeroSplitVerticalMarqueeTall` | `#hero` | hero |
| 5 | `FeaturesBento` | `#services` | services |
| 6 | `FeaturesMediaCarousel` | `#work` | work |
| 7 | `FeaturesBorderGlow` | `#promise` | promise |
| 8 | `TestimonialTrustCard` | `#testimonials` | testimonials |
| 9 | `MetricsFeatureCards` | `#metrics` | metrics |
| 10 | `TeamStackedCards` | `#team` | team |
| 11 | `FaqSimple` | `#faq` | faq |
| 12 | `ContactCenter` | `#contact` | contact |
| 13 | `FooterSimpleReveal` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-6YzsZD1r.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#0a0a0a` |
| `--foreground` | `#f0f0f0` |
| `--card` | `#161616` |
| `--card-foreground` | `#f0f0f0` |
| `--popover` | `#161616` |
| `--popover-foreground` | `#f0f0f0` |
| `--primary` | `#fff` |
| `--primary-foreground` | `#0a0a0a` |
| `--secondary` | `#1e1e1e` |
| `--secondary-foreground` | `#e0e0e0` |
| `--muted` | `#1c1c1c` |
| `--muted-foreground` | `#a0a0a0` |
| `--accent` | `#d0d0d0` |
| `--accent-foreground` | `#f0f0f0` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#262626` |
| `--input` | `#262626` |
| `--ring` | `#fff` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-01/image-01.webp` | 1536×1024 (recorte con transparencia) |
| `assets/media/set-01/image-02.webp` | 1536×1024 (recorte con transparencia) |
| `assets/media/set-01/image-03.webp` | 1536×1024 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
