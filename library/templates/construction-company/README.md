# Empresa de construcción (`construction-company`)

> Landing oscura para una constructora, con preloader en forma de casa que se abre en la foto del hero, tarjetas de cristal y acento amarillo de obra.

| Campo | Valor |
|---|---|
| Identificador | `construction-company` |
| Fuente | `source/github-templates/construction-company` — https://github.com/jeffrymesonm/templates (commit `a7e51c7`) |
| Diseño de referencia | Webild `/templates/construction-company` (kit `terminal`), reconstruido en HTML estático en el repo original |
| Categoría | servicios / construcción |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | constructoras, contratistas, empresas de remodelación, reformas, ingeniería civil, obra comercial |
| Estilo | oscuro, tarjetas "glass" con radio 24 px, amarillo de obra, tipografía condensada, animaciones de entrada palabra a palabra |
| Framework / lenguaje | HTML + CSS + JavaScript (sin framework, sin build) |
| Dependencias | Google Fonts: Barlow (500, 600), Inter (400, 500). Ninguna librería JS externa. |
| Idiomas | es |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` + `tools/interactions.cjs`): 375/768/1440 px sin scroll horizontal, consola limpia, 0 recursos rotos; probados menú, FAQ y formulario (abre el correo) |

## Características visuales y funcionales

- Preloader amarillo: una ventana con forma de casa pasa varias fotos mientras un contador sube de 00 a 100; después se ensancha, aplana el tejado y aterriza exactamente sobre la foto del hero. Se salta con `prefers-reduced-motion` o al entrar con un enlace a una sección (`#contacto`).
- Títulos que aparecen palabra a palabra (`data-words`) y bloques que suben al entrar en pantalla (`data-reveal`).
- Fotos con zoom suave ligado al scroll (1,11× → 1×, `data-zoom`).
- Hero con tres cifras flotantes que se inclinan hacia el puntero (escritorio) y una sola tarjeta que las rota cada 3 s (móvil).
- Barra de navegación fija que se compacta al hacer scroll; menú en tarjeta flotante por debajo de 1024 px (foco atrapado, cierre con Escape, clic fuera o enlace).
- Servicios con descripción que aparece al pasar el ratón o con foco de teclado.
- FAQ en acordeón (una respuesta abierta a la vez, accesible con `aria-expanded`).
- Formulario de presupuesto con validación, honeypot anti-bots y envío a un endpoint (p. ej. Formspree) o, si no hay endpoint, apertura del correo del visitante con el mensaje listo.
- Año del footer automático.

## Secciones

| Orden | Sección | Selector | JS que usa |
|---|---|---|---|
| 1 | Preloader | `[data-preloader]` | `assets/js/preloader.js` (+ script en `<head>`; usa `scroll-zoom.js` si está) |
| 2 | Navegación | `[data-nav]` | `assets/js/nav.js` |
| 3 | Menú móvil | `#menu` | `assets/js/nav.js` |
| 4 | Hero | `#inicio` | `assets/js/words.js`, `assets/js/hero-badges.js`, `assets/js/scroll-zoom.js`, `assets/js/preloader.js` |
| 5 | Nosotros | `#nosotros` | `assets/js/words.js`, `assets/js/reveal.js`, `assets/js/scroll-zoom.js` |
| 6 | Servicios | `#servicios` | `assets/js/words.js`, `assets/js/reveal.js`, `assets/js/scroll-zoom.js` |
| 7 | Métricas | `#trayectoria` | `assets/js/words.js`, `assets/js/reveal.js`, `assets/js/scroll-zoom.js` |
| 8 | Proceso | `#proceso` | `assets/js/words.js`, `assets/js/reveal.js` |
| 9 | Testimonios | `#testimonios` | `assets/js/words.js`, `assets/js/reveal.js`, `assets/js/scroll-zoom.js` |
| 10 | Preguntas frecuentes | `#preguntas` | `assets/js/words.js`, `assets/js/reveal.js`, `assets/js/faq.js` |
| 11 | Contacto | `#contacto` | `assets/js/words.js`, `assets/js/reveal.js`, `assets/js/scroll-zoom.js`, `assets/js/contact-form.js` |
| 12 | Footer | `.footer` | `assets/js/footer-year.js` |

Para quitar o mover una sección: mueve su bloque en `index.html` (desde su comentario hasta `</section>`);
si quitas la última que usa un JS, puedes quitar también su `<script>`.

## Instalar y ejecutar

No hay dependencias que instalar.

```bash
npx serve .          # o: python -m http.server 8000
```

Abrir `http://localhost:3000` (o `:8000`). Abrir `index.html` con doble clic también funciona, salvo el envío del formulario a un `data-endpoint` (los servicios de formularios suelen rechazar peticiones desde `file://`; el modo sin endpoint, que abre el correo, sí funciona). Las tipografías de Google Fonts necesitan conexión a internet.

## Personalización

| Qué | Dónde |
|---|---|
| Nombre de marca | buscar `Tu Marca` en `index.html` (`<title>`, logo de la nav, footer) |
| Colores | `assets/css/styles.css` → `:root` (`--bg`, `--fg`, `--card`, `--secondary`, `--border`, `--primary` amarillo, `--primary-fg` texto sobre amarillo, `--primary-soft`, `--danger`) |
| Tipografías | `<link>` de Google Fonts en `index.html` + `--font-body` (Inter) y `--font-display` (Barlow) |
| Medidas | `--radius`, `--container`, `--gutter` en `:root` |
| Contacto | footer de `index.html` (`tel:+000000000000`, `hola@example.com`, `Calle Ejemplo 123, Ciudad`); formulario: `data-mailto` y `data-endpoint` en `<form data-contact-form>`; mensajes en `assets/js/contact-form.js` (`MESSAGES`) |
| Cifras | hero (`+100`, insignias `25+`, `24h`, `5.0`, repetidas en la versión móvil) y sección Métricas (`100+`, `25+`, `90%`) |
| Favicon | SVG en línea en el `<link rel="icon">` de `index.html` |
| Textos traducidos | no aplica (solo español) |

## Recursos que deben sustituirse

| Archivo | Medidas | Dónde se usa |
|---|---|---|
| `assets/img/hero.svg` | 2000×1125 | Hero (foto principal) y foto final del preloader |
| `assets/img/about.svg` | 1400×1167 | Nosotros; diapositiva del preloader |
| `assets/img/service-residential.svg` | 900×1050 | Servicios, tarjeta 1; diapositiva del preloader |
| `assets/img/service-remodel.svg` | 900×1050 | Servicios, tarjeta 2; diapositiva del preloader |
| `assets/img/service-commercial.svg` | 900×1050 | Servicios, tarjeta 3; diapositiva del preloader |
| `assets/img/metric-1.svg` | 800×800 | Métricas, junto a la cifra 1 |
| `assets/img/metric-2.svg` | 800×800 | Métricas, junto a la cifra 2 |
| `assets/img/metric-3.svg` | 1200×675 | Métricas, junto a la cifra 3 (ancha) |
| `assets/img/process-visit.svg` | 1000×800 | Proceso, paso 1; diapositiva del preloader |
| `assets/img/process-plan.svg` | 1000×800 | Proceso, paso 2 |
| `assets/img/process-build.svg` | 1000×800 | Proceso, paso 3 |
| `assets/img/testimonial-1.svg` | 900×1200 | Testimonios, retrato 1 |
| `assets/img/testimonial-2.svg` | 900×1200 | Testimonios, retrato 2 |
| `assets/img/testimonial-3.svg` | 900×1200 | Testimonios, retrato 3 |
| `assets/img/avatar-1.svg` … `avatar-4.svg` | 160×160 | Hero, fila de avatares de clientes |
| `assets/img/contact.svg` | 1000×1200 | Contacto, foto junto al formulario |

## Licencia y condiciones de uso

- **Código:** el repositorio fuente (https://github.com/jeffrymesonm/templates) no incluye archivo de licencia (GitHub `licenseInfo: null`). Por defecto, todos los derechos quedan reservados a su autor (jeffrymesonm); usarlo, modificarlo o redistribuirlo requiere su permiso.
- **Diseño:** el layout es una recreación estática de un template de Webild (webild.io), plataforma propietaria; su catálogo lo marca como "Webild original". Usarlo en un proyecto comercial puede requerir permiso de Webild o un rediseño suficiente.
- **Imágenes:** las fotos originales se eliminaron; los archivos de `assets/img/` son placeholders generados con `tools/make_placeholders.py`.
- **Iconos:** dibujados para este template (sprite en `index.html`).
- **Tipografías:** Barlow e Inter, servidas por Google Fonts (licencia SIL Open Font License).
