# Paisajismo y jardinería (`landscaping-services`)

> Landing bilingüe (ES/EN) para una empresa de paisajismo, en tonos tierra, con hero a pantalla completa que se abre al cargar y servicios en tarjetas apiladas que se superponen con el scroll.

| Campo | Valor |
|---|---|
| Identificador | `landscaping-services` |
| Fuente | `source/github-templates/landscaping-services` — https://github.com/jeffrymesonm/templates (commit `a7e51c7`) |
| Diseño de referencia | Webild `/templates/landscaping-services`, reconstruido en HTML estático en el repo original |
| Categoría | servicios / paisajismo y jardinería |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | paisajismo, jardinería, mantenimiento de jardines, riego, viveros con servicio, limpieza de exteriores |
| Estilo | claro y cálido (crema y verde oscuro), tipografía sans compacta, tarjetas redondeadas, fotos a sangre, menú en cortina |
| Framework / lenguaje | HTML + CSS + JavaScript (sin framework, sin build) |
| Dependencias | Google Fonts: Inter Tight (400, 500, 600). Ninguna librería JS externa. |
| Idiomas | es + en con selector |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` + `tools/interactions.cjs`): 375/768/1440 px sin scroll horizontal, consola limpia, 0 recursos rotos; probados menú, FAQ, cambio ES↔EN y formulario (abre el correo) |

## Características visuales y funcionales

- Hero a pantalla completa: la foto se abre desde una ventana interior hasta ocupar todo el ancho cuando está lista; después entran la nav y los textos.
- Tarjeta de reseña flotante en el hero (pantallas grandes).
- Menú a pantalla completa en forma de cortina, con scroll bloqueado y resto de la página inerte mientras está abierto.
- Selector de idioma ES/EN en la nav y en el menú. El idioma inicial se elige antes del primer pintado (`?lang=` → elección guardada → idioma del navegador → español) y se recuerda en `localStorage`.
- Servicios en tarjetas "sticky" apiladas: la tarjeta cubierta se encoge y se desvanece.
- Tarjetas con foto y banda desenfocada (Por qué elegirnos) y tarjetas de equipo con etiqueta translúcida.
- FAQ en acordeón (una respuesta abierta a la vez).
- Formulario con validación bilingüe, honeypot anti-bots y envío a un endpoint (p. ej. Formspree) o, si no hay endpoint, apertura del correo del visitante con el mensaje listo.
- Bloques que aparecen al entrar en pantalla; año del footer automático.

## Secciones

| Orden | Sección | Selector | JS que usa |
|---|---|---|---|
| 1 | Navegación | `[data-nav]` | `assets/js/menu.js`, `assets/js/i18n.js` (selector de idioma), `assets/js/hero-intro.js` (entrada) |
| 2 | Menú a pantalla completa | `#site-menu` | `assets/js/menu.js`, `assets/js/i18n.js` |
| 3 | Hero | `#top` | `assets/js/hero-intro.js` |
| 4 | Nosotros | `#about` | `assets/js/reveal.js` |
| 5 | Servicios | `#services` | `assets/js/stack-cards.js`, `assets/js/reveal.js` |
| 6 | Por qué elegirnos | `#why` | `assets/js/reveal.js` |
| 7 | Equipo | `#team` | `assets/js/reveal.js` |
| 8 | Confianza (testimonios) | `#testimonials` | `assets/js/reveal.js` |
| 9 | Preguntas frecuentes | `#faq` | `assets/js/faq.js`, `assets/js/reveal.js` |
| 10 | Contacto | `#contact` | `assets/js/contact-form.js`, `assets/js/reveal.js` |
| 11 | Footer | `.footer` | `assets/js/footer-year.js` |

Todas las secciones con textos traducibles usan además `assets/js/translations.js` + `assets/js/i18n.js`
(cargados en ese orden, antes que el resto).

Para quitar o mover una sección: mueve su bloque en `index.html` (desde su comentario hasta `</section>`);
si quitas la última que usa un JS, puedes quitar también su `<script>`.

## Instalar y ejecutar

No hay dependencias que instalar.

```bash
npx serve .          # o: python -m http.server 8000
```

Abrir `http://localhost:3000` (o `:8000`). Abrir `index.html` con doble clic también funciona (incluido el cambio de idioma), salvo el envío del formulario a un `data-endpoint` (los servicios de formularios suelen rechazar peticiones desde `file://`; el modo sin endpoint, que abre el correo, sí funciona). Las tipografías de Google Fonts necesitan conexión a internet.

## Personalización

| Qué | Dónde |
|---|---|
| Nombre de marca | buscar `Tu Marca` en `index.html` y `Your Brand` en `assets/js/translations.js` |
| Colores | `assets/css/styles.css` → `:root` (`--color-bg`, `--color-fg`, `--color-card`, `--color-tag`, `--color-muted-fg`, `--color-placeholder`, `--color-accent`, `--color-on-dark`, `--color-error`) |
| Tipografías | `<link>` de Google Fonts en `index.html` + `--font-sans` (Inter Tight) y `--tracking-tight` |
| Medidas | `--radius`, `--radius-inner`, `--radius-pill`, `--container`, `--gutter`, `--section-space` en `:root` |
| Contacto | `index.html`: botón "Llámanos" de la nav y footer (`tel:+000000000000`, `hola@example.com`, `Calle Ejemplo 123, Ciudad`); formulario: `data-mailto` y `data-endpoint` en `<form data-contact-form>`; teléfono también en `form.failure` (`es` y `en`) de `assets/js/translations.js` |
| Textos traducidos | español en `index.html`; inglés en `assets/js/translations.js` → `en` (mismas claves `data-i18n`). Los mensajes que escribe JS están en `es` y `en` del mismo archivo. El logo, los nombres de personas, el teléfono y la dirección no tienen clave: son iguales en los dos idiomas. |

## Recursos que deben sustituirse

| Archivo | Medidas | Dónde se usa |
|---|---|---|
| `assets/img/hero.svg` | 2400×1350 | Hero (foto a pantalla completa) |
| `assets/img/about.svg` | 1400×934 | Nosotros |
| `assets/img/service-design.svg` | 1400×934 | Servicios, tarjeta 1 |
| `assets/img/service-hardscape.svg` | 1400×934 | Servicios, tarjeta 2 |
| `assets/img/service-care.svg` | 1400×934 | Servicios, tarjeta 3 |
| `assets/img/service-irrigation.svg` | 1400×934 | Servicios, tarjeta 4 |
| `assets/img/why-craft.svg` | 1000×1250 | Por qué elegirnos, tarjeta 1 |
| `assets/img/why-eco.svg` | 1000×1250 | Por qué elegirnos, tarjeta 2 |
| `assets/img/why-care.svg` | 1000×1250 | Por qué elegirnos, tarjeta 3 |
| `assets/img/team-1.svg` … `team-3.svg` | 1000×1250 | Equipo, retratos 1 a 3 |
| `assets/img/avatar-1.svg` | 240×240 | Reseña del hero (mostrado a 44 px) y fila de avatares de Confianza (60 px) |
| `assets/img/avatar-2.svg` … `avatar-4.svg` | 240×240 | Fila de avatares de Confianza (mostrados a 60 px) |
| `assets/img/contact.svg` | 1400×934 | Contacto, foto junto al formulario |

## Licencia y condiciones de uso

- **Código:** el repositorio fuente (https://github.com/jeffrymesonm/templates) no incluye archivo de licencia (GitHub `licenseInfo: null`). Por defecto, todos los derechos quedan reservados a su autor (jeffrymesonm); usarlo, modificarlo o redistribuirlo requiere su permiso.
- **Diseño:** el layout es una recreación estática de un template de Webild (webild.io), plataforma propietaria; su catálogo lo marca como "Webild original". Usarlo en un proyecto comercial puede requerir permiso de Webild o un rediseño suficiente.
- **Imágenes:** las fotos originales se eliminaron; los archivos de `assets/img/` son placeholders generados con `tools/make_placeholders.py`.
- **Iconos:** adaptados de Lucide (licencia ISC); conservar la atribución del sprite en `index.html`.
- **Tipografías:** Inter Tight, servida por Google Fonts (licencia SIL Open Font License).
