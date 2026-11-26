# Centro de salud y bienestar (`wellness-center`)

> Landing para un centro de salud preventiva o bienestar: hero a pantalla completa con estadísticas en panel de vidrio, proceso en tres pasos fijados al hacer scroll, planes con uno destacado y blog.

| Campo | Valor |
|---|---|
| Identificador | `wellness-center` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/wellness-center (capturado el 2026-11-25) |
| Catálogo de origen | "Wellness Center", grupo Paused |
| Categoría | salud / bienestar |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | centros de bienestar, clínicas de medicina preventiva, nutricionistas, centros de longevidad y chequeos, entrenadores de salud, fisioterapia y recuperación |
| Estilo | moderno y limpio, piedra clara + naranja, foto de fondo a pantalla completa, paneles de vidrio, tarjetas redondeadas, botones en píldora |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.0 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Navegación flotante centrada en cápsula que se despliega con un botón "+".
- Hero con foto a pantalla completa, grupo de avatares con texto de confianza, titular, descripción, dos botones y panel de vidrio con tres estadísticas.
- Servicios en tres tarjetas con imagen, título y descripción.
- Proceso en tres pasos numerados que alternan texto e imagen y se fijan al hacer scroll.
- Tres planes de precios con etiqueta "Most Popular" en el plan central, lista de características y botón.
- Blog en tarjetas con imagen, categoría, extracto, autor con foto y fecha.
- Preguntas frecuentes desplegables.
- Pie con imagen, la marca, tres columnas de enlaces, copyright y enlaces legales.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- Los retratos que el original cargaba de randomuser.me (avatares del hero y autores del blog) apuntan ahora a los placeholders locales `assets/media/set-03/split-1..3.webp`: cámbialos por fotos propias en `page.js`.
- El botón "Apply Now" apunta a `#contact`, pero esta página no tiene sección de contacto (igual que el original): añade una o cambia el enlace.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `NavbarFloating` | — | — |
| 2 | `HeroOverlayStatistics` | `#hero` | hero |
| 3 | `FeaturesMediaSimple` | `#services` | services |
| 4 | `FeaturesAlternatingSplit` | `#how-it-works` | how-it-works |
| 5 | `PricingHighlightedCards` | `#pricing` | pricing |
| 6 | `BlogMediaCards` | `#blog` | blog |
| 7 | `FaqSimple` | `#faq` | faq |
| 8 | `FooterSimpleMedia` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-D_3qCYVw.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#fafaf9` |
| `--foreground` | `#0c0a09` |
| `--card` | `#f5f5f4` |
| `--card-foreground` | `#0c0a09` |
| `--popover` | `#f5f5f4` |
| `--popover-foreground` | `#0c0a09` |
| `--primary` | `#ea6720` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#e7e5e4` |
| `--secondary-foreground` | `#fff` |
| `--muted` | `#e7e7e6` |
| `--muted-foreground` | `#5f5e5d` |
| `--accent` | `#f59e0b` |
| `--accent-foreground` | `#0c0a09` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#dddddc` |
| `--input` | `#dddddc` |
| `--ring` | `#ea6720` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-02/image-01.webp` | 978×978 (recorte con transparencia) |
| `assets/media/set-02/image-02.webp` | 1630×1630 (recorte con transparencia) |
| `assets/media/set-02/image-03.webp` | 1630×1630 (recorte con transparencia) |
| `assets/media/set-01/image-01.webp` | 4257×2436 (recorte con transparencia) |
| `assets/media/set-03/image-01.webp` | 1440×1720 (recorte con transparencia) |
| `assets/media/set-03/image-02.webp` | 1376×768 (recorte con transparencia) |
| `assets/media/set-03/image-03.webp` | 1024×1024 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
