# Hamburguesería (`burger-restaurant`)

> Landing bilingüe para una hamburguesería: colores intensos, títulos gigantes con contorno, olas entre secciones y un avión de papel que recorre los locales al hacer scroll.

| Campo | Valor |
|---|---|
| Identificador | `burger-restaurant` |
| Fuente | `source/github-templates/burger-restaurant` — https://github.com/jeffrymesonm/templates (commit `a7e51c7`) |
| Diseño de referencia | Webild `/templates/burger-restaurant` (kit `crav`), reconstruido en HTML estático en el repo original |
| Categoría | restaurante |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | hamburgueserías, comida rápida, food trucks, sandwicherías, bares de comida informal, cadenas con varios locales |
| Estilo | divertido, cartoon, rojo + amarillo + crema, tipografía condensada gigante con contorno blanco, fotos con marco blanco inclinadas, bordes ondulados |
| Framework / lenguaje | HTML + CSS + JavaScript (sin framework, sin build) |
| Dependencias | Google Fonts: Modak, Mouse Memoirs. Ninguna librería JS externa. |
| Idiomas | es + en con selector (ES base en `index.html`, EN en `assets/js/translations.js`) |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` + `tools/interactions.cjs`): 375/768/1440 px sin scroll horizontal, consola limpia, 0 recursos rotos; probados menú desplegable y cambio ES↔EN |

## Características visuales y funcionales

- Preloader con una hamburguesa que se apila capa a capa (se omite con movimiento reducido).
- Cabecera fija con botón de pedido, selector ES/EN y menú desplegable (bloquea el scroll, se cierra con Escape, clic fuera o al elegir un enlace).
- Títulos gigantes divididos en líneas que suben al entrar en pantalla; `fit-text.js` reduce el tamaño si una línea no cabe.
- Fotos con marco blanco que aparecen con efecto "pop" y flotan con parallax en escritorio.
- Sección de locales con una ruta discontinua que une las tarjetas y un avión de papel que la recorre con el scroll.
- Pie con enlaces de texto que "ruedan" al pasar el ratón, logotipo que ocupa todo el ancho y comida que cae al entrar en pantalla.
- Idioma elegido por `?lang=`, elección guardada, idioma del navegador o español, sin parpadeo del texto.
- Respeta `prefers-reduced-motion`.

## Secciones

Todas las secciones usan `assets/js/translations.js` + `assets/js/i18n.js` para el cambio de idioma. Las animaciones de entrada (`data-reveal`) esperan a que `assets/js/preloader.js` marque la página como cargada: si quitas el preloader, conserva su `<script>` (o las animaciones esperarán 4 s al temporizador de seguridad del `<head>`).

| Orden | Sección | Selector | JS que usa |
|---|---|---|---|
| 1 | Preloader | `.preloader` (`[data-preloader]`) | `assets/js/preloader.js` |
| 2 | Header + dropdown menu | `.header` / `#site-menu` | `assets/js/menu.js`, `assets/js/i18n.js` (selector de idioma) |
| 3 | Hero | `#top` | `assets/js/reveal.js`, `assets/js/fit-text.js` |
| 4 | Mess (rojo): titular, puntos fuertes y foto principal | `#burgers` | `assets/js/reveal.js`, `assets/js/fit-text.js`, `assets/js/parallax.js` |
| 5 | Grill: foto a todo el ancho | `.grill` | `assets/js/parallax.js`, `assets/js/reveal.js` |
| 6 | Loaded (crema): frase grande con burbujas de fotos | `.loaded` | `assets/js/reveal.js`, `assets/js/fit-text.js`, `assets/js/parallax.js` |
| 7 | Spots (amarillo): locales en ruta | `#locations` | `assets/js/route.js`, `assets/js/reveal.js`, `assets/js/fit-text.js` |
| 8 | Order: llamada a la acción | `#order` | `assets/js/reveal.js`, `assets/js/fit-text.js` |
| 9 | Footer | `#contact` | `assets/js/footer-year.js`, `assets/js/fit-text.js` (logo `data-fit="fill"`), `assets/js/reveal.js` (línea y comida que cae) |

Para quitar o mover una sección: mueve su bloque en `index.html` (desde su comentario hasta `</section>`);
si quitas la última que usa un JS, puedes quitar también su `<script>`.

## Instalar y ejecutar

No hay dependencias que instalar.

```bash
npx serve .          # o: python -m http.server 8000
```

Abrir `http://localhost:3000` (o `:8000`). Abrir `index.html` con doble clic también funciona: no hay `fetch` ni módulos ES. Las tipografías de Google Fonts necesitan conexión a internet; sin ella se usan las de respaldo.

## Personalización

| Qué | Dónde |
|---|---|
| Nombre de marca | buscar `Tu Marca` / `Your Brand` en `index.html` y `assets/js/` (logo de la cabecera y logo gigante del pie no tienen traducción: se muestran igual en los dos idiomas) |
| Colores | `assets/css/styles.css` → `:root` (`--color-bg` crema, `--color-fg` texto, `--color-red` rojo de marca, `--color-yellow` sección de locales, `--color-orange` sellos y ruta, `--color-muted`, `--color-yellow-edge`); además `<meta name="theme-color">` y los colores del favicon SVG en el `<head>` |
| Tipografías | `<link>` de Google Fonts en `index.html` + `--font-heading` (Mouse Memoirs) y `--font-display` (Modak) |
| Contacto | `index.html`: botón de la sección Order (`tel:+000000000000`) y pie (`+00 000 000 0000`, `hola@example.com`) |
| Locales | `index.html` → `#locations`: nombres `Local 1…5` (sin traducción) y `spots.N.info` (`Calle Ejemplo 123 · …`); EN en `translations.js` |
| Año de fundación | `20XX` en `menu.tagline` y `footer.tagline` |
| Textos traducidos | `assets/js/translations.js` (`en`); cada título grande tiene una clave por línea (`…title.1`, `…title.2`) |

## Recursos que deben sustituirse

| Archivo | Medidas | Dónde se usa |
|---|---|---|
| `assets/img/hero-hand.svg` | 900×1125 | Hero, galería de fotos |
| `assets/img/hero-fries.svg` | 900×1125 | Hero, galería de fotos |
| `assets/img/hero-shake.svg` | 900×1125 | Hero, galería de fotos |
| `assets/img/hero-sliders.svg` | 700×700 | Hero (foto redonda) y comida que cae en el footer |
| `assets/img/mess-shake.svg` | 700×700 | Mess, foto redonda flotante y comida que cae en el footer |
| `assets/img/mess-fries.svg` | 700×700 | Mess, foto redonda flotante y comida que cae en el footer |
| `assets/img/mess-burger.svg` | 1400×1400 | Mess, foto central del producto (con sello encima) |
| `assets/img/grill.svg` | 2400×1350 | Grill, foto a todo el ancho con parallax |
| `assets/img/stack-chef.svg` | 900×900 | Loaded, burbuja 1 |
| `assets/img/stack-cheese.svg` | 900×900 | Loaded, burbuja 2 |
| `assets/img/stack-front.svg` | 900×900 | Loaded, burbuja 3 |
| `assets/img/stack-beer.svg` | 900×900 | Loaded, burbuja 4 |
| `assets/img/spot-night.svg` | 800×1000 | Spots, tarjeta del local 1 |
| `assets/img/spot-table.svg` | 800×1000 | Spots, tarjeta del local 2 |
| `assets/img/spot-patio.svg` | 800×1000 | Spots, tarjeta del local 3 |
| `assets/img/spot-takeout.svg` | 800×1000 | Spots, tarjeta del local 4 |
| `assets/img/spot-picnic.svg` | 800×1000 | Spots, tarjeta del local 5 |
| `assets/img/order-main.svg` | 1050×1400 | Order, foto vertical principal |
| `assets/img/order-double.svg` | 700×700 | Order, foto redonda y comida que cae en el footer |

## Licencia y condiciones de uso

- El repositorio de origen (https://github.com/jeffrymesonm/templates) no incluye archivo de licencia (GitHub: `licenseInfo` nulo). Sin licencia, todos los derechos quedan reservados a su autor (jeffrymesonm): usar, modificar o redistribuir este código requiere su permiso.
- El diseño es una reconstrucción estática de una plantilla de Webild (webild.io), catálogo propietario cuyas piezas se marcan como "Webild original". El uso comercial del diseño depende de las condiciones de Webild.
- Las fotos y vídeos originales se han eliminado; los archivos de `assets/img/` son placeholders generados con `tools/make_placeholders.py`.
- Los iconos son de Lucide (licencia ISC); su aviso se conserva en `index.html`.
