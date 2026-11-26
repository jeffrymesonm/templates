# Consultora de automatización con IA (`ai-consulting`)

> Landing oscura para una consultora que crea agentes y automatizaciones de IA, con un anillo de iconos de herramientas girando alrededor de una cifra y tarjetas bento animadas que simulan flujos y conversaciones con un agente.

| Campo | Valor |
|---|---|
| Identificador | `ai-consulting` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/ai-consulting (capturado el 2026-11-25) |
| Catálogo de origen | "AI Consulting", grupo Live |
| Categoría | servicios profesionales / tecnología e IA |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | consultoras de IA y automatización, agencias no-code, integradores de software, desarrolladores freelance, consultoras de operaciones y productividad |
| Estilo | oscuro casi negro con acento verde neón, rayos de luz en la esquina, tipografía sans limpia, tarjetas con brillo en el borde y animaciones suaves al hacer scroll |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 5.9 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Navegación centrada con logo de texto, enlaces y botón de llamada a la acción.
- Hero con rayos de luz de fondo y un anillo de nueve iconos de herramientas que gira alrededor de un contador ("tools connected"); el anillo usa los SVG de `assets/media/`.
- Bloque "about" con una frase larga que se colorea letra a letra en ola al hacer scroll.
- Servicios en bento de tres tarjetas animadas: iconos orbitando, pila de tarjetas inclinadas y un chat en bucle entre usuario y agente.
- Resultados en tres tarjetas con contadores animados e iconos.
- Precios en tres planes más una franja "Enterprise" superpuesta con precio a medida.
- Equipo en tarjetas de retrato recortado con nombre y cargo superpuestos.
- Contacto centrado con campo de correo y botón; al enviar solo muestra el estado (no envía datos: hay que conectarlo a un servicio).
- Footer con columnas de enlaces y marca que se revela al llegar al final.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- **Ruta de medios corregida en `assets/page.js`:** la constante con la carpeta de medios apuntaba a `assets/media/templates/<id>` (carpeta que no existe en este template) y se cambió a `assets/media`. No se tocó ningún chunk compilado.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `NavbarCentered` | — | — |
| 2 | `LightRaysCornerBackground` | `#hero` | hero |
| 3 | `HeroToolRing` | `#hero` | hero |
| 4 | `AboutTextWave` | `#about` | about |
| 5 | `FeaturesBento` | `#services` | services |
| 6 | `FeaturesStatCards` | `#results` | results |
| 7 | `PricingLayeredEnterprise` | `#pricing` | pricing |
| 8 | `TeamOverlayCards` | `#team` | team |
| 9 | `ContactCenter` | `#contact` | contact |
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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-ZC9TyPeh.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#0a0a0a` |
| `--foreground` | `#eeeded` |
| `--card` | `#1a1a1a` |
| `--card-foreground` | `#eeeded` |
| `--popover` | `#1a1a1a` |
| `--popover-foreground` | `#eeeded` |
| `--primary` | `#00ffab` |
| `--primary-foreground` | `#000` |
| `--secondary` | `#1a1a1a` |
| `--secondary-foreground` | `#ffffffe6` |
| `--muted` | `#1c1c1c` |
| `--muted-foreground` | `#9e9e9e` |
| `--accent` | `#737373` |
| `--accent-foreground` | `#eeeded` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#252525` |
| `--input` | `#252525` |
| `--ring` | `#00ffab` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1080×1457 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×1080 (recorte con transparencia) |
| `assets/media/chatgpt.svg` | .svg |
| `assets/media/claude.svg` | .svg |
| `assets/media/image-02-1600.webp` | 1102×1427 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1036 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1098×1433 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×1045 (recorte con transparencia) |
| `assets/media/gmail.svg` | .svg |
| `assets/media/hubspot.svg` | .svg |
| `assets/media/make.svg` | .svg |
| `assets/media/image-04.webp` | 512×512 (recorte con transparencia) |
| `assets/media/notion.svg` | .svg |
| `assets/media/shopify.svg` | .svg |
| `assets/media/slack.svg` | .svg |
| `assets/media/zapier.svg` | .svg |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
