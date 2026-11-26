# Blog personal de viajes y estilo de vida (`personal-blogger`)

> Web personal desenfadada para un blogger o creador, con una tarjeta-foto que se da la vuelta al hacer clic, pegatinas dispersas alrededor y un cursor que deja una línea suave.

| Campo | Valor |
|---|---|
| Identificador | `personal-blogger` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/personal-blogger (capturado el 2026-11-25) |
| Catálogo de origen | "Personal Blogger", grupo Live |
| Categoría | personal / creadores de contenido |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | bloggers, creadores de contenido, influencers, fotógrafos aficionados, viajeros, portafolios personales y páginas "link in bio" |
| Estilo | claro y lúdico, fondo crema, pegatinas recortadas con sombra, tipografía sans fina, mucho aire y microinteracciones |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.3 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Cursor personalizado que deja una línea suave al mover el ratón.
- Hero con tarjeta-foto central que se voltea al hacer clic ("Click me!") y muestra al dorso un texto con palabras resaltadas y una foto en línea.
- Ocho pegatinas recortadas dispersas alrededor del hero, que se pueden arrastrar, y botones de redes sociales con icono.
- Sección "sobre mí" en bento de cuatro tarjetas con foto y un botón CTA con avatar.
- Carrusel en marquesina de momentos con foto y etiqueta, con dos botones.
- Bloque de parallax con imagen de fondo, dos imágenes laterales y un título grande.
- Footer sencillo con tres columnas de enlaces y textos a izquierda y derecha.

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
| 1 | `SmoothCursorLine` | — | — |
| 2 | `HeroStickerFlip` | `#hero` | hero |
| 3 | `FeaturesBentoGridCta` | `#about` | about |
| 4 | `FeaturesCarouselMarquee` | `#milestones` | milestones |
| 5 | `FeaturesParallaxShowcase` | `#showcase` | showcase |
| 6 | `FooterBasic` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-Cd7ALvOg.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#f5f3f0` |
| `--foreground` | `#1a1a1a` |
| `--card` | `#fff` |
| `--card-foreground` | `#1a1a1a` |
| `--popover` | `#fff` |
| `--popover-foreground` | `#1a1a1a` |
| `--primary` | `#1a1a1a` |
| `--primary-foreground` | `#f5f3f0` |
| `--secondary` | `#f5f3f0` |
| `--secondary-foreground` | `#1a1a1a` |
| `--muted` | `#e3e2df` |
| `--muted-foreground` | `#676665` |
| `--accent` | `#4caf50` |
| `--accent-foreground` | `#1a1a1a` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#dbd9d6` |
| `--input` | `#dbd9d6` |
| `--ring` | `#1a1a1a` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 750×744 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 750×744 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1080×1080 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1254×1254 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 750×744 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 750×744 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1280×1280 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1099×1431 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×1042 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1120×1280 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×915 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1080×1080 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 1080×1080 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 736×736 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 736×736 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 1280×720 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 750×744 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 750×744 (recorte con transparencia) |
| `assets/media/image-14.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 750×744 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 750×744 (recorte con transparencia) |
| `assets/media/image-16-1600.webp` | 1600×901 (recorte con transparencia) |
| `assets/media/image-16-800.webp` | 800×451 (recorte con transparencia) |
| `assets/media/image-17-1600.webp` | 750×744 (recorte con transparencia) |
| `assets/media/image-17-800.webp` | 750×744 (recorte con transparencia) |
| `assets/media/image-18-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-18-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-19-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-19-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/image-20-1600.webp` | 750×744 (recorte con transparencia) |
| `assets/media/image-20-800.webp` | 750×744 (recorte con transparencia) |
| `assets/media/image-21-1600.webp` | 1122×1402 (recorte con transparencia) |
| `assets/media/image-21-800.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/set-01/image-01.svg` | .svg |
| `assets/media/set-01/image-02.svg` | .svg |
| `assets/media/set-01/image-03.svg` | .svg |
| `assets/media/image-22-1600.webp` | 750×744 (recorte con transparencia) |
| `assets/media/image-22-800.webp` | 750×744 (recorte con transparencia) |
| `assets/media/image-23-1600.webp` | 1280×720 (recorte con transparencia) |
| `assets/media/image-23-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/image-24-1600.webp` | 750×744 (recorte con transparencia) |
| `assets/media/image-24-800.webp` | 750×744 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
