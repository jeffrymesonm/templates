# Bufete de abogados (`law-firm`)

> Landing oscura y elegante para un despacho de abogados centrada en su fundador, que mezcla titulares condensados en mayúsculas con palabras en serif cursiva, fondo de curvas de nivel y trazos que se dibujan solos.

| Campo | Valor |
|---|---|
| Identificador | `law-firm` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/law-firm (capturado el 2026-11-25) |
| Catálogo de origen | "Law Firm", grupo Live, kit `jetex` |
| Categoría | servicios profesionales / legal |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | despachos de abogados, abogados independientes, notarías, asesorías legales y fiscales, mediadores, consultores |
| Estilo | oscuro y sobrio, casi negro con botones plateados, contraste entre sans condensada en mayúsculas y serif cursiva ("dos voces"), fondo de curvas de nivel, animaciones lentas |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave), Motion (Framer Motion) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Instrument Serif, Inter, Inter Tight, Mona Sans, Playfair Display |
| Idiomas | en |
| Tamaño | 6.3 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Preloader que dibuja trazo a trazo un monograma (el mismo que aparece como logo en la navegación) y se desvanece a los 2,6 s.
- Navegación mínima: monograma, botón plateado y menú a pantalla completa con enlaces y datos de contacto (correo, teléfono, dirección).
- Hero a pantalla completa con el nombre del fundador que, al hacer scroll, se encoge a una tarjeta con foto; sobre ella se dibuja una firma y pasan dos cintas de texto en sentidos opuestos.
- Frase del fundador revelada palabra a palabra, con dos palabras destacadas en serif cursiva (`serifWords`).
- Áreas de práctica en un bloque fijo: una foto de portada se aparta con el scroll y deja ver cuatro áreas con foto, texto y enlace.
- Proceso en cuatro pasos numerados unidos por una línea ondulada que se dibuja con el scroll.
- Testimonios en abanico de tarjetas (hasta 9) que se pueden arrastrar con el ratón o el dedo.
- FAQ en acordeón y formulario de consulta con retrato y nombre de un socio; al enviar solo muestra el mensaje de éxito (no envía datos: hay que conectarlo a un servicio).
- Footer con lema en dos voces, trazo dibujado, foto central, enlaces de páginas y redes y enlaces legales.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- **Trazos neutralizados en chunks compilados** (los valores por defecto venían de otra demo de Webild y dibujaban iniciales y firmas):
  `LoaderMonogramDraw-*.js` y `NavbarMonogramSilver-*.js` (monograma: ahora tres círculos concéntricos),
  `HeroShrinkSignedCard-*.js` (firma de la tarjeta del hero: ahora una línea ondulada; se conserva el subrayado) y
  `FooterTabPanel-*.js` (firma del footer: ahora una onda). Para poner tu propio monograma o firma, cambia esos
  arrays de `d` de `path` (viewBox 100×100 en el monograma, 400×120 en el hero y 300×100 en el footer).

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `LoaderMonogramDraw` | — | — |
| 2 | `NavbarMonogramSilver` | — | — |
| 3 | `HeroShrinkSignedCard` | `#hero` | hero |
| 4 | `AboutTwoVoiceStatement` | `#about` | about |
| 5 | `ServicesSplitCoverSlide` | `#services` | services |
| 6 | `ProcessTwoVoiceSteps` | `#process` | process |
| 7 | `TestimonialFanStack` | `#testimonial` | testimonial |
| 8 | `FaqTwoVoiceAccordion` | `#faq` | faq |
| 9 | `ContactFormPortrait` | `#contact` | contact |
| 10 | `FooterTabPanel` | `#footer` | footer |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-CN7QsN7C.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#0a0d14` |
| `--foreground` | `#f1f3f7` |
| `--card` | `#171c26` |
| `--card-foreground` | `#f1f3f7` |
| `--popover` | `#171c26` |
| `--popover-foreground` | `#f1f3f7` |
| `--primary` | `#e3e8f0` |
| `--primary-foreground` | `#0a0d14` |
| `--secondary` | `#eceef2` |
| `--secondary-foreground` | `#0a0d14` |
| `--muted` | `#171c26` |
| `--muted-foreground` | `#a3abb8` |
| `--accent` | `#b9cde6` |
| `--accent-foreground` | `#0a0d14` |
| `--deep` | `#04060a` |
| `--deep-foreground` | `#f1f3f7` |
| `--destructive` | `#f26a1b` |
| `--destructive-foreground` | `#0b0b0c` |
| `--border` | `#272d39` |
| `--input` | `#171c26` |
| `--ring` | `#d6dce6` |
| `--heading-weight` | `800` |
| `--heading-tracking` | `-.01em` |
| `--heading-leading` | `.9` |
| `--text-display` | `clamp(3rem, 1.8rem + 5.2vw, 6.625rem)` |
| `--text-h1` | `clamp(2.75rem, 1.6rem + 4.4vw, 5.33rem)` |
| `--text-h2` | `clamp(2rem, 1.5rem + 2.1vw, 3.25rem)` |
| `--text-h3` | `clamp(1.5rem, 1.3rem + .9vw, 2.17rem)` |
| `--text-body-lg` | `clamp(1.0625rem, 1rem + .3vw, 1.25rem)` |
| `--text-body` | `clamp(.9375rem, .92rem + .08vw, 1rem)` |
| `--text-small` | `clamp(.8125rem, .8rem + .06vw, .875rem)` |
| `--text-label` | `.6875rem` |
| `--label-tracking` | `.04em` |
| `--label-case` | `uppercase` |
| `--gutter` | `clamp(1rem, .2rem + 3.3vw, 3.25rem)` |
| `--max-w` | `1280px` |
| `--container` | `min(100% - 2 * var(--gutter), var(--max-w))` |
| `--section-space` | `clamp(5rem, 3.9rem + 4.5vw, 8rem)` |
| `--gap` | `clamp(1rem, .85rem + .6vw, 1.5rem)` |
| `--grid-columns` | `12` |
| `--ease-out` | `cubic-bezier(.19, 1, .22, 1)` |
| `--ease-in-out` | `cubic-bezier(.65, .05, 0, 1)` |
| `--dur-fast` | `.3s` |
| `--dur-base` | `.75s` |
| `--dur-slow` | `1.2s` |
| `--reveal-distance` | `2rem` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-label` | `"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-accent` | `"Instrument Serif", Georgia, "Times New Roman", serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-02-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-04-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-06-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-06-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1437×2000 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×1114 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1335×2000 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×1199 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×1201 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1536×1024 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-12-1600.webp` | 608×760 (recorte con transparencia) |
| `assets/media/image-12-800.webp` | 608×760 (recorte con transparencia) |
| `assets/media/image-13.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-14-1600.webp` | 1600×1068 (recorte con transparencia) |
| `assets/media/image-14-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-15-1600.webp` | 1333×2000 (recorte con transparencia) |
| `assets/media/image-15-800.webp` | 800×1201 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
