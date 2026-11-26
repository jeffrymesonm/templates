# Hotel boutique junto al mar (`seaside-hotel`)

> Landing de una página para un hotel pequeño o alquiler de villas, con intro animada en arco, escenas fijadas al scroll y sliders en bucle.

| Campo | Valor |
|---|---|
| Identificador | `seaside-hotel` |
| Fuente | `source/github-templates/seaside-hotel` — https://github.com/jeffrymesonm/templates (commit `a7e51c7`) |
| Diseño de referencia | Webild `/templates/seaside-hotel` (kit `era`), reconstruido en HTML estático en el repo original |
| Categoría | hotel |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | hotel boutique, casas o villas vacacionales, casa rural, agroturismo, alojamiento de playa o montaña |
| Estilo | editorial, elegante, serif + caligrafía, paleta crema / azul noche / ciruela, arcos y escenas al scroll |
| Framework / lenguaje | HTML + CSS + JavaScript (sin framework, sin build) |
| Dependencias | Google Fonts: Archivo, Instrument Serif, Pinyon Script. Ninguna librería JS externa. |
| Idiomas | en |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` + `tools/interactions.cjs`): 375/768/1440 px sin scroll horizontal, consola limpia, 0 recursos rotos; probados los 3 sliders (no tiene menús ni formularios) |

## Características visuales y funcionales

- Intro de unos 2,5 s: nombre letra a letra, un arco sube desde abajo y se abre a pantalla completa mostrando la foto principal (se omite con movimiento reducido o al entrar con un `#enlace`).
- Navegación fija con insignia circular (nombre de marca en un texto curvo) y contador de progreso de lectura 00 → 100.
- Parallax en el hero, cita de clientes que se ilumina al pasar, líneas finas que se dibujan con el scroll.
- "Nearby places": pila de fotos fijada; cada foto barre a la anterior y el título cambia al lugar actual.
- Slider de casas con precio, datos (huéspedes, tamaño, piscina) y autoplay con barra de cuenta atrás; slider de fotos en fundido; galería con apertura en arco.
- Escena "The area" (≥ 1024 px): dos ventanas sobre la misma foto se unen y se abren a pantalla completa con título y cita.
- Llamada a la acción fijada; el pie se desliza por encima. Año del copyright automático.
- Accesible: enlace "Skip to content", sliders con `aria-roledescription`, diapositivas ocultas con `inert`, respeta `prefers-reduced-motion`; sin JS todo el contenido se lee.

## Secciones

`assets/js/core.js` lo necesitan todas (helpers `window.Seaside`, división de texto y bucle de scroll): debe cargarse primero.

| Orden | Sección | Selector | JS que usa |
|---|---|---|---|
| 1 | Nav | `.nav` | `assets/js/scroll-effects.js` (progreso) |
| 2 | Hero + intro | `.hero` | `assets/js/intro.js`, `assets/js/scroll-effects.js` (parallax) |
| 3 | About | `#about` | `assets/js/sliders.js` (fundido), `assets/js/reveal.js`, `assets/js/scroll-effects.js` (línea) |
| 4 | Guest quotes | `#guests` | `assets/js/scroll-effects.js` |
| 5 | Statement | `#houses` | `assets/js/reveal.js` (marcas "+"), `assets/js/scroll-effects.js` (línea) |
| 6 | Nearby places | `#nearby` | `assets/js/destinations.js` |
| 7 | Houses (slider) | `#villas` | `assets/js/sliders.js`, `assets/js/reveal.js`, `assets/js/scroll-effects.js` (línea) |
| 8 | The area | `#island` | `assets/js/island.js`, `assets/js/sliders.js` |
| 9 | Call to action | `#book` | `assets/js/reveal.js`, `assets/js/scroll-effects.js` (zoom) |
| 10 | Footer | `#contact` | `assets/js/reveal.js` (máscara del teléfono), `assets/js/footer-year.js` |

Para quitar o mover una sección: mueve su bloque en `index.html` (desde su comentario hasta `</section>`);
si quitas la última que usa un JS, puedes quitar también su `<script>`.

## Instalar y ejecutar

No hay dependencias que instalar.

```bash
npx serve .          # o: python -m http.server 8000
```

Abrir `http://localhost:3000` (o `:8000`). Abrir `index.html` con doble clic también funciona: no hay peticiones `fetch` ni módulos; solo las fuentes de Google necesitan conexión.

## Personalización

| Qué | Dónde |
|---|---|
| Nombre de marca | buscar `Your Brand` en `index.html`; el título del hero y de la intro está partido en dos líneas (`Your` / `Brand`, clases `hero__line` y `loader__line`) |
| Palabra de ubicación | buscar `Location` (fondo de la intro, caligrafía del hero y de la CTA, título de About y de The area) |
| Colores | `assets/css/styles.css` → `:root` (`--bg`, `--fg`, `--muted`, `--sky`, `--plum`, `--cream`) y `<meta name="theme-color">` |
| Tipografías | `<link>` de Google Fonts en `index.html` + `--font-serif`, `--font-sans`, `--font-script` |
| Contacto | pie (`#contact`) y CTA: `tel:+000000000000` / `+00 000 000 0000`, `hello@example.com`, `123 Example Street` / `City` |
| Casas y precios | sección `#villas`: `House 1-3`, `$00`, datos en `<dl class="villa__facts">` |
| Lugares cercanos | sección `#nearby`: `Place 1-4` y tiempos; el número de lugares va en `style="--count: 4"` |
| Textos traducidos | no aplica (solo inglés) |

## Recursos que deben sustituirse

| Archivo | Medidas | Dónde se usa |
|---|---|---|
| `assets/img/hero.svg` | 2400×1602 | Hero (foto principal, también precargada en `<head>`) |
| `assets/img/about-coast.svg` | 1600×898 | About, slider en fundido (1/2) |
| `assets/img/about-olives.svg` | 1600×1066 | About, slider en fundido (2/2) |
| `assets/img/guests.svg` | 2400×1716 | Guest quotes, fondo fijado |
| `assets/img/dest-beach.svg` | 2400×1350 | Nearby places, lugar 1 |
| `assets/img/dest-port.svg` | 2400×1256 | Nearby places, lugar 2 |
| `assets/img/dest-lighthouse.svg` | 2400×1598 | Nearby places, lugar 3 |
| `assets/img/dest-trail.svg` | 2400×1800 | Nearby places, lugar 4 |
| `assets/img/villa-fig.svg` | 1200×1500 | Houses, casa 1 |
| `assets/img/villa-salt.svg` | 1200×1500 | Houses, casa 2 |
| `assets/img/villa-stone.svg` | 1200×1500 | Houses, casa 3 |
| `assets/img/terrace.svg` | 2400×1350 | The area, escena de ventanas (se usa dos veces) |
| `assets/img/detail-screens.svg` | 1600×900 | The area, galería 1 |
| `assets/img/detail-table.svg` | 1600×900 | The area, galería 2 |
| `assets/img/detail-light.svg` | 1600×900 | The area, galería 3 |
| `assets/img/detail-garden.svg` | 1600×900 | The area, galería 4 |
| `assets/img/cta.svg` | 2400×1758 | Call to action, fondo fijado |

El favicon es un SVG en línea (estrella sobre círculo) en el `<head>`.

## Licencia y condiciones de uso

- El repositorio de origen (https://github.com/jeffrymesonm/templates) no incluye archivo de licencia (GitHub: `licenseInfo` nulo). Sin licencia, todos los derechos quedan reservados a su autor (jeffrymesonm): usar, modificar o publicar este código requiere su permiso.
- El diseño es una recreación estática de una plantilla de Webild (webild.io), un catálogo propietario cuyas piezas se marcan como "Webild original". El uso comercial del diseño puede requerir autorización de Webild.
- Las fotos originales se eliminaron; los placeholders SVG son propios de esta biblioteca. Los textos son de ejemplo y no contienen datos de ningún negocio real.
