# Cafetería-restaurante (`cafe-restaurant`)

> Landing bilingüe para una cafetería: tonos crema y café, letra manuscrita gigante, vídeo enmarcado, fotos que siguen al cursor y menú filtrable por categorías.

| Campo | Valor |
|---|---|
| Identificador | `cafe-restaurant` |
| Fuente | `source/github-templates/cafe-restaurant` — https://github.com/jeffrymesonm/templates (commit `a7e51c7`) |
| Diseño de referencia | Webild `/templates/coffee-shop` (kit no indicado en la fuente), reconstruido en HTML estático en el repo original |
| Categoría | restaurante |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | cafeterías, brunch, panaderías y pastelerías con mesas, bistrós, salones de té, restaurantes de desayunos con eventos y catering |
| Estilo | cálido, artesanal, crema y marrón café, tipografía manuscrita con rebote, tarjetas tipo papel y cristal esmerilado, sombras suaves |
| Framework / lenguaje | HTML + CSS + JavaScript (sin framework, sin build) |
| Dependencias | Google Fonts: Inter (400, 500, 600), Shantell Sans (variable: peso 400–700 y ejes BNCE, INFM, SPAC). Ninguna librería JS externa. |
| Idiomas | es + en con selector (ES base en `index.html`, EN en `assets/js/translations.js`) |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` + `tools/interactions.cjs`): 375/768/1440 px sin scroll horizontal, consola limpia, 0 recursos rotos; probados menú, cambio ES↔EN y filtro del menú |

## Características visuales y funcionales

- Barra fija con la marca (gana una píldora esmerilada al hacer scroll), selector ES/EN, botón "Reservar" y menú a pantalla completa que se despliega de arriba abajo.
- Hero con la marca en letra manuscrita a todo el ancho (`fit-text.js`), texto que aparece palabra por palabra, vídeo enmarcado que se reproduce solo cuando está en pantalla y dos tarjetas flotantes que suben a distinta velocidad.
- Sección "mood": las fotos siguen al cursor (o aparecen al tocar en móvil).
- Menú con filtros por categoría (Todo, Café, Desayunos, Almuerzos, Repostería) con animación y aviso accesible del número de platos; los enlaces del pie también activan un filtro.
- Eventos con dos tarjetas y una ancha; las fotos hacen zoom suave con el scroll.
- Tarjeta de contacto con enlaces a WhatsApp, correo y teléfono.
- Fondo fijo con formas difuminadas de luz y sombra.
- Idioma elegido por `?lang=`, elección guardada, idioma del navegador o español, sin parpadeo del texto.
- Respeta `prefers-reduced-motion` (sin vídeo, sin desplazamientos; queda el póster).

## Secciones

Todas las secciones usan `assets/js/translations.js` + `assets/js/i18n.js` para el cambio de idioma. El fondo `.backdrop` es solo CSS.

| Orden | Sección | Selector | JS que usa |
|---|---|---|---|
| 1 | Nav bar (fija) + menú a pantalla completa | `.site-nav` (`[data-menu-root]`) / `#site-menu` | `assets/js/menu.js`, `assets/js/scroll-effects.js` (píldora al hacer scroll), `assets/js/i18n.js` (selector de idioma) |
| 2 | Hero | `#inicio` | `assets/js/fit-text.js`, `assets/js/intro.js`, `assets/js/words.js`, `assets/js/hero-video.js`, `assets/js/scroll-effects.js` (tarjetas flotantes y zoom) |
| 3 | Mood: fotos que siguen al cursor | `#nosotros` | `assets/js/trail.js`, `assets/js/words.js`, `assets/js/reveal.js` |
| 4 | Menú: filtros + rejilla de platos | `#menu` | `assets/js/menu-filter.js`, `assets/js/words.js`, `assets/js/reveal.js` |
| 5 | Eventos | `#eventos` | `assets/js/scroll-effects.js` (zoom de fotos), `assets/js/words.js`, `assets/js/reveal.js` |
| 6 | Contacto | `#contacto` | `assets/js/words.js`, `assets/js/reveal.js` |
| 7 | Footer | `.site-footer` | `assets/js/fit-text.js` (marca `data-fit="fill"`), `assets/js/footer-year.js`, `assets/js/menu-filter.js` (enlaces `data-filter-link`), `assets/js/reveal.js` |

Para quitar o mover una sección: mueve su bloque en `index.html` (desde su comentario hasta `</section>`);
si quitas la última que usa un JS, puedes quitar también su `<script>`.

## Instalar y ejecutar

No hay dependencias que instalar.

```bash
npx serve .          # o: python -m http.server 8000
```

Abrir `http://localhost:3000` (o `:8000`). Abrir `index.html` con doble clic también funciona: no hay `fetch` ni módulos ES y el vídeo es un archivo local. Las tipografías de Google Fonts necesitan conexión a internet; sin ella se usan las de respaldo y la marca gigante pierde el estilo manuscrito.

## Personalización

| Qué | Dónde |
|---|---|
| Nombre de marca | buscar `Tu Marca` / `Your Brand` en `index.html` y `assets/js/` (logo de la barra, marca gigante del hero y del pie y el © no tienen traducción: se muestran igual en los dos idiomas). Si el nombre es mucho más largo o corto que 11 caracteres, ajusta el divisor `6.9` de `.wordmark` en `styles.css` (tamaño inicial sin JS) |
| Colores | `assets/css/styles.css` → `:root` (`--color-bg` crema, `--color-fg` marrón oscuro, `--color-card` tarjetas, `--color-accent`, `--color-muted`, `--color-white`); además `<meta name="theme-color">` y los colores del favicon SVG en el `<head>` |
| Tipografías | `<link>` de Google Fonts en `index.html` + `--font-body` (Inter), `--font-display` (Shantell Sans), `--display-axes` y `--wordmark-axes` (ejes de la letra manuscrita) |
| Contacto | `index.html` → `#contacto`: `https://wa.me/000000000000`, `mailto:hola@example.com`, `tel:+000000000000`; horario (`contact.hours`) y dirección (`contact.address`, `Calle Ejemplo 123, Ciudad`) con su versión EN en `translations.js` |
| Platos del menú | `index.html` → `#menu`: cada `<li class="dish" data-category="…">` (categorías `coffee`, `breakfast`, `lunch`, `pastries`); nombres `Bebida 1…`, `Desayuno 1…`, `Almuerzo 1…`, `Postre 1…` |
| Textos traducidos | `assets/js/translations.js` (`en`; `es` solo tiene los textos que escribe el JS) |

## Recursos que deben sustituirse

| Archivo | Medidas | Dónde se usa |
|---|---|---|
| `assets/video/hero.mp4` | 1920×1080, 25 fps, 10,28 s | Hero, vídeo enmarcado (pantallas ≥ 768 px) |
| `assets/video/hero-small.mp4` | 960×540, 25 fps, 10,28 s | Hero, vídeo enmarcado (pantallas ≤ 767 px) |
| `assets/img/hero-poster.svg` | 1920×1080 | Hero, póster del vídeo (también con movimiento reducido) |
| `assets/img/menu-espresso.svg` | 720×960 | Menú, Bebida 1 |
| `assets/img/menu-cappuccino.svg` | 720×960 | Menú, Bebida 2 |
| `assets/img/menu-iced-latte.svg` | 720×960 | Menú, Bebida 3, y tarjeta flotante izquierda del hero (Plato 1) |
| `assets/img/menu-avocado-toast.svg` | 720×960 | Menú, Desayuno 1 |
| `assets/img/menu-pancakes.svg` | 720×960 | Menú, Desayuno 2, y tarjeta flotante derecha del hero (Plato 2) |
| `assets/img/menu-eggs-benedict.svg` | 720×960 | Menú, Desayuno 3 |
| `assets/img/menu-pasta.svg` | 720×960 | Menú, Almuerzo 1 |
| `assets/img/menu-caesar-salad.svg` | 720×960 | Menú, Almuerzo 2 |
| `assets/img/menu-club-sandwich.svg` | 720×960 | Menú, Almuerzo 3 |
| `assets/img/menu-croissant.svg` | 720×960 | Menú, Postre 1 |
| `assets/img/menu-cheesecake.svg` | 720×960 | Menú, Postre 2 |
| `assets/img/menu-brownie.svg` | 720×960 | Menú, Postre 3 |
| `assets/img/trail-1.svg` … `trail-8.svg` | 600×800 (cada una) | Mood, fotos que siguen al cursor |
| `assets/img/event-private.svg` | 1080×1080 | Eventos, tarjeta "Eventos privados" |
| `assets/img/event-catering.svg` | 1080×1080 | Eventos, tarjeta "Catering" |
| `assets/img/event-menus.svg` | 1200×900 | Eventos, tarjeta ancha "Menús a medida" |

Los nombres de archivo `menu-*.svg` y las claves `menu.item.*` conservan los nombres de los platos originales; puedes renombrarlos (actualiza también `index.html` y `translations.js`).

## Licencia y condiciones de uso

- El repositorio de origen (https://github.com/jeffrymesonm/templates) no incluye archivo de licencia (GitHub: `licenseInfo` nulo). Sin licencia, todos los derechos quedan reservados a su autor (jeffrymesonm): usar, modificar o redistribuir este código requiere su permiso.
- El diseño es una reconstrucción estática de una plantilla de Webild (webild.io), catálogo propietario cuyas piezas se marcan como "Webild original". El uso comercial del diseño depende de las condiciones de Webild.
- Las fotos y vídeos originales se han eliminado; los archivos de `assets/img/` y `assets/video/` son placeholders generados con `tools/make_placeholders.py`.
- Los iconos son de Lucide (licencia ISC); su aviso se conserva en `index.html`.
