# Transporte privado VIP (`vip-transport`)

> Landing de una página para una empresa de chofer privado o traslados, con un fondo de partículas WebGL que se transforma de coche a aparcamiento y a carretera al hacer scroll.

| Campo | Valor |
|---|---|
| Identificador | `vip-transport` |
| Fuente | `source/github-templates/vip-transport` — https://github.com/jeffrymesonm/templates (commit `a7e51c7`) |
| Diseño de referencia | Webild `/templates/logistics-company` (kit `dockline`: coche, patio y carretera de partículas), reconstruido en HTML estático en el repo original |
| Categoría | transporte |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | chofer privado, traslados al aeropuerto, transporte ejecutivo, limusinas, excursiones privadas, alquiler de vehículos con conductor |
| Estilo | oscuro y tecnológico, acento naranja, tarjetas con pestaña, tipografía Syne + mono |
| Framework / lenguaje | HTML + CSS + JavaScript (sin framework, sin build) |
| Dependencias | Google Fonts: Syne, Plus Jakarta Sans, Geist Mono. Ninguna librería JS externa (WebGL nativo). |
| Idiomas | es |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` + `tools/interactions.cjs`): 375/768/1440 px sin scroll horizontal, consola limpia, 0 recursos rotos; probados menú y formulario (abre el correo) |

## Características visuales y funcionales

- Preloader que escribe la marca letra a letra (cada letra aparece primero como bloque naranja).
- Un único `<canvas>` WebGL fijo: nube de puntos que forma un coche (hero), un aparcamiento (cobertura) y una carretera con pórticos (testimonio), con transición en polvo, barrido de luz y parallax con el ratón. Sin WebGL queda el degradado oscuro.
- Titulares con onda de color que recorre las letras al hacer scroll (`data-wave`).
- Cifras con odómetro (rodillos de dígitos) en la sección de cobertura.
- Tarjetas de tarifas y pie con una "pestaña" superior recortada con `clip-path: path()`.
- Menú lateral (por debajo de 1512 px) con foco atrapado, cierre con Escape, clic fuera o enlace.
- FAQ en acordeón (una respuesta abierta a la vez).
- Formulario de reserva con validación, antispam (honeypot), envío a un endpoint (p. ej. Formspree) con timeout de 15 s o, si no hay endpoint, abre el correo del visitante con la solicitud redactada.
- Respeta `prefers-reduced-motion`.

## Secciones

| Orden | Sección | Selector | JS que usa |
|---|---|---|---|
| 1 | Preloader | `[data-preloader]` | `assets/js/intro.js` |
| 2 | Fondo de partículas | `.backdrop` | `assets/js/particle-shapes.js`, `assets/js/particles.js` |
| 3 | Navegación + menú lateral | `.nav`, `#menu` | `assets/js/menu.js` |
| 4 | Hero | `#inicio` | `assets/js/particles.js` (coche), `assets/js/text-wave.js`, `assets/js/intro.js` |
| 5 | Cobertura + cifras | `#cobertura` | `assets/js/particles.js` (aparcamiento), `assets/js/text-wave.js`, `assets/js/odometer.js`, `assets/js/reveal.js` |
| 6 | Tarifas | `#tarifas` | `assets/js/text-wave.js`, `assets/js/reveal.js`, `assets/js/tab-shapes.js` |
| 7 | Testimonio | `#opiniones` | `assets/js/particles.js` (carretera), `assets/js/text-wave.js`, `assets/js/reveal.js` |
| 8 | Preguntas frecuentes | `#preguntas` | `assets/js/faq.js`, `assets/js/text-wave.js`, `assets/js/reveal.js` |
| 9 | Reservas (formulario) | `#reservas` | `assets/js/contact-form.js`, `assets/js/text-wave.js` |
| 10 | Pie | `.footer` | `assets/js/tab-shapes.js`, `assets/js/footer.js` |

`particles.js` necesita las tres anclas (`data-scene-anchor="car|yard|road"` en hero, cobertura y testimonio): si quitas una de esas secciones, el fondo de partículas no se dibuja.

Para quitar o mover una sección: mueve su bloque en `index.html` (desde su comentario hasta `</section>`);
si quitas la última que usa un JS, puedes quitar también su `<script>`.

## Instalar y ejecutar

No hay dependencias que instalar.

```bash
npx serve .          # o: python -m http.server 8000
```

Abrir `http://localhost:3000` (o `:8000`). Abrir `index.html` con doble clic también funciona (WebGL incluido), salvo el envío del formulario a `data-endpoint`, que desde `file://` (origen `null`) puede ser rechazado por el servicio; el modo `mailto` funciona igual.

## Personalización

| Qué | Dónde |
|---|---|
| Nombre de marca | buscar `Tu Marca` en `index.html` (título, preloader, logo, pie, copyright) |
| Colores | `assets/css/styles.css` → `:root` (`--accent`, `--bg`, `--fg`, `--card`, `--deep`, `--night`…); la onda de color de los titulares en `RAMPS` de `assets/js/text-wave.js`; el color de las partículas en `vColor` (shader) de `assets/js/particles.js` |
| Tipografías | `<link>` de Google Fonts en `index.html` + `--font-heading`, `--font-body`, `--font-label` |
| Contacto | formulario: `data-mailto="hola@example.com"` y `data-endpoint=""` en `<form data-contact-form>`; WhatsApp del pie: `https://wa.me/000000000000`; redes con `href="#"` |
| Precios y servicios | sección `#tarifas`: `Nombre del servicio 1-3`, `$00`, `Característica incluida 1-3` |
| Cifras | `<span data-odometer>` en `#cobertura` (solo dígitos dentro del span) |
| Mensajes del formulario | objeto `MESSAGES` en `assets/js/contact-form.js` |
| Textos traducidos | no aplica (solo español) |

## Recursos que deben sustituirse

| Archivo | Medidas | Dónde se usa |
|---|---|---|
| `assets/img/interior.svg` | 1200×825 | Tarifas, tarjeta 1 |
| `assets/img/coast.svg` | 1200×825 | Tarifas, tarjeta 2 |
| `assets/img/detail.svg` | 1200×825 | Tarifas, tarjeta 3 |
| `assets/img/avatar.svg` | 240×240 | Testimonio, foto del cliente |

El favicon es un SVG en línea en el `<head>` (cuadrado oscuro con detalle naranja). El coche, el aparcamiento y la carretera no son imágenes: se generan en `assets/js/particle-shapes.js`.

## Licencia y condiciones de uso

- El repositorio de origen (https://github.com/jeffrymesonm/templates) no incluye archivo de licencia (GitHub: `licenseInfo` nulo). Sin licencia, todos los derechos quedan reservados a su autor (jeffrymesonm): usar, modificar o publicar este código requiere su permiso.
- El diseño es una recreación estática de una plantilla de Webild (webild.io), un catálogo propietario cuyas piezas se marcan como "Webild original". El uso comercial del diseño puede requerir autorización de Webild.
- Las fotos originales se eliminaron; los placeholders SVG son propios de esta biblioteca. Los textos son de ejemplo y no contienen datos de ningún negocio real.
