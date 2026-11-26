# Portafolio de diseñador (`designer-portfolio`)

> Portafolio personal claro y minimalista para un diseñador o creativo independiente, con proyectos en tarjetas abanicadas como una mano de cartas, navegación en píldora que se compacta y un nombre gigante difuminado en el pie.

| Campo | Valor |
|---|---|
| Identificador | `designer-portfolio` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/designer-portfolio (capturado el 2026-11-25) |
| Catálogo de origen | "Designer Portfolio", grupo Live, kit `launchfolio` |
| Categoría | portafolio / creativos |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | diseñadores de motion y 3D, diseñadores gráficos y de producto, editores de vídeo, ilustradores, directores creativos, freelancers creativos |
| Estilo | minimalista y claro, fondo casi blanco con raíles verticales finos, titulares en dos tonos (gris + negro), tarjetas redondeadas con sombra suave, pie negro de alto contraste |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.5 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Preloader con el rol y el nombre que aparecen con desenfoque antes de mostrar la página.
- Navegación en píldora centrada con avatar y nombre; al hacer scroll se compacta y los enlaces pasan a un menú de tres puntos.
- Hero con titular en dos tonos, indicador de disponibilidad ("Taking new projects") y las cuatro primeras imágenes de proyectos abanicadas como una mano de cartas.
- Franja de prueba social con avatares de clientes, estrellas y logos en texto que se desplazan en bucle.
- Galería de proyectos en tarjetas con título, categoría y etiqueta "View project".
- Servicios en lista con iconos y una fila de herramientas ("tool stack") con iconos.
- Sección "Sobre mí" con retrato, nombre, rol, enlaces sociales y tres párrafos con frase inicial destacada.
- Testimonios en rejilla con frase resaltada dentro de la cita, y FAQ en acordeón junto a una tarjeta fija para reservar una llamada.
- Pie negro con titular cuya palabra cambia en ciclo (`cycleWords`), contactos, redes y el nombre de marca gigante y difuminado.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- Algunos nombres de archivo de `assets/media/` conservan nombres del original (`romet-kriks-portrait`, `webild-showcase`, `lorenzo-noya-reel`, `brodyautomated-promo`) y los placeholders muestran ese nombre como etiqueta: al sustituir las imágenes, renómbralas y cambia la ruta en `assets/page.js`.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `LaunchfolioLoader` | — | — |
| 2 | `NavbarPillCollapse` | — | — |
| 3 | `HeroCardHand` | `#home` | hero |
| 4 | `SocialProofAvatarTicker` | — | social-proof |
| 5 | `GalleryCardHandGrid` | `#work` | work |
| 6 | `FeaturesToolStackList` | `#services` | services |
| 7 | `AboutPortraitHistory` | `#about` | about |
| 8 | `TestimonialQuoteGrid` | — | testimonials |
| 9 | `FaqStickyBooking` | `#contact` | faq |
| 10 | `FooterCycleWordmark` | — | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-DtnUsBZs.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#fafafa` |
| `--foreground` | `#000` |
| `--card` | `#fff` |
| `--card-foreground` | `#000` |
| `--popover` | `#fff` |
| `--popover-foreground` | `#000` |
| `--primary` | `#000` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#f0f0f0` |
| `--secondary-foreground` | `#000` |
| `--muted` | `#f0f0f0` |
| `--muted-foreground` | `#545454` |
| `--accent` | `#21b30b` |
| `--accent-foreground` | `#000` |
| `--deep` | `#000` |
| `--deep-foreground` | `#fff` |
| `--destructive` | `#d92d20` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#dedede` |
| `--input` | `#dedede` |
| `--ring` | `#000` |
| `--heading-quiet` | `var(--foreground)` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Geist", "Helvetica Neue", Arial, sans-serif` |
| `--font-body` | `"Geist", "Helvetica Neue", Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1000×562 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×450 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1000×1787 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1430 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×2339 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×1170 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1600×2405 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×1203 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1000×599 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×480 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1000×599 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×480 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-12.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-13-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-13-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1600×2400 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-16-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-16-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-17-1600.webp` | 1000×558 (recorte con transparencia) |
| `assets/media/image-17-800.webp` | 800×447 (recorte con transparencia) |
| `assets/media/image-18-1600.webp` | 1000×771 (recorte con transparencia) |
| `assets/media/image-18-800.webp` | 800×617 (recorte con transparencia) |
| `assets/media/image-19-1600.webp` | 1000×559 (recorte con transparencia) |
| `assets/media/image-19-800.webp` | 800×448 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
