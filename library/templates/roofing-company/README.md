# Empresa de tejados oscura con métricas (`roofing-company`)

> Landing oscura para una empresa de tejados o reformas exteriores: hero con imagen grande y tarjetas de datos flotantes, cifras con foto, proceso en tres pasos y formulario de presupuesto.

| Campo | Valor |
|---|---|
| Identificador | `roofing-company` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/roofing-company (capturado el 2026-11-25) |
| Catálogo de origen | "Roofing Company", grupo Paused |
| Categoría | servicios / tejados y construcción |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | empresas de tejados y cubiertas, reparación tras tormentas, impermeabilización, canalones, fachadas y reformas exteriores, contratistas del hogar |
| Estilo | oscuro casi negro + naranja intenso, tipografía sans fuerte, tarjetas oscuras redondeadas y datos flotantes sobre la imagen |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.8 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Navegación centrada con botón de presupuesto y menú desplegable en móvil.
- Hero con avatares de clientes, titular, dos botones e imagen grande con tarjetas de datos flotantes (años, respuesta, valoración) e imágenes de entrada.
- "Sobre nosotros" con tres ventajas con icono junto a una imagen.
- Tres servicios en tarjetas numeradas que revelan su imagen.
- Tres cifras clave en tarjetas con número grande, descripción e imagen.
- Proceso de trabajo en tres pasos detallados con etiquetas e imagen.
- Reseñas en tarjetas con foto a toda altura, estrellas, nombre y ciudad superpuestos.
- Preguntas frecuentes en dos columnas y formulario de presupuesto con imagen lateral.
- Pie con columnas de servicios, empresa y contacto, copyright y enlaces legales.

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
| 1 | `NavbarCentered` | — | — |
| 2 | `HeroBillboardGable` | `#hero` | hero |
| 3 | `AboutFeaturesSplit` | `#about` | about |
| 4 | `FeaturesRevealCards` | `#services` | services |
| 5 | `MetricsMediaCards` | `#metrics` | metrics |
| 6 | `FeaturesDetailedCards` | `#process` | process |
| 7 | `TestimonialOverlayCards` | `#testimonials` | testimonials |
| 8 | `FaqTwoColumn` | `#faq` | faq |
| 9 | `ContactSplitForm` | `#contact` | contact |
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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-BGHpRk2u.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#100f0e` |
| `--foreground` | `#f5f3f0` |
| `--card` | `#1a1918` |
| `--card-foreground` | `#f5f3f0` |
| `--popover` | `#1a1918` |
| `--popover-foreground` | `#f5f3f0` |
| `--primary` | `#f5692b` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#282624` |
| `--secondary-foreground` | `#f5f3f0` |
| `--muted` | `#1e1d1c` |
| `--muted-foreground` | `#9e9c9a` |
| `--accent` | `#f5692b` |
| `--accent-foreground` | `#fff` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#252422` |
| `--input` | `#252422` |
| `--ring` | `#f5692b` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-01/image-01.webp` | 1376×768 (recorte con transparencia) |
| `assets/media/set-01/image-02.webp` | 5824×3264 (recorte con transparencia) |
| `assets/media/set-01/image-03.webp` | 1600×1045 (recorte con transparencia) |
| `assets/media/set-01/image-04.webp` | 7360×4912 (recorte con transparencia) |
| `assets/media/set-01/image-05.webp` | 1024×1024 (recorte con transparencia) |
| `assets/media/set-01/image-06.webp` | 4183×2862 (recorte con transparencia) |
| `assets/media/set-01/image-07.webp` | 5824×3264 (recorte con transparencia) |
| `assets/media/set-01/image-08.webp` | 1376×768 (recorte con transparencia) |
| `assets/media/set-01/image-09.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/set-01/image-10.webp` | 6000×4000 (recorte con transparencia) |
| `assets/media/set-01/image-11.webp` | 6720×4480 (recorte con transparencia) |
| `assets/media/set-01/image-12.webp` | 1024×1024 (recorte con transparencia) |
| `assets/media/set-01/image-13.webp` | 1024×1024 (recorte con transparencia) |
| `assets/media/set-01/image-14.webp` | 1024×1024 (recorte con transparencia) |
| `assets/media/set-01/image-15.webp` | 4769×3169 (recorte con transparencia) |
| `assets/media/set-01/image-16.webp` | 5760×3840 (recorte con transparencia) |
| `assets/media/set-01/image-17.webp` | 1600×1067 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
