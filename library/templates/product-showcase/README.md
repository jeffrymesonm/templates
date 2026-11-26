# Escaparate de producto (`product-showcase`)

> Landing en inglés para presentar una línea de producto físico, con hero a pantalla completa, colección en tarjetas, carrusel de reseñas y un pie que se descubre bajo la página.

| Campo | Valor |
|---|---|
| Identificador | `product-showcase` |
| Fuente | `source/github-templates/product-showcase` — https://github.com/jeffrymesonm/templates (commit `a7e51c7`) |
| Diseño de referencia | Webild `/templates/product-showcase` (kit no documentado en el repo original), reconstruido en HTML estático en el repo original |
| Categoría | producto |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | marcas de mobiliario, decoración, objetos de diseño, accesorios, cualquier producto físico con varias variantes |
| Estilo | minimalista, gris claro + negro, tarjetas redondeadas, títulos sans con palabra final en serif cursiva, fotografía grande |
| Framework / lenguaje | HTML + CSS + JavaScript (sin framework, sin build) |
| Dependencias | Google Fonts: Inter (400–600), Playfair Display (cursiva 400). Ninguna librería JS externa. |
| Idiomas | en |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` + `tools/interactions.cjs`): 375/768/1440 px sin scroll horizontal, consola limpia, 0 recursos rotos; probados menú móvil, FAQ y carrusel de testimonios |

## Características visuales y funcionales

- Navegación flotante sobre el hero; en móvil (< 768 px) un panel de menú animado que se cierra con enlace, botón, `Escape` o al pasar a escritorio.
- Hero a pantalla completa con insignia de prueba social (3 avatares), título que entra palabra a palabra y botones.
- Títulos divididos en palabras que suben al entrar en pantalla, conservando la palabra en `<em>` (serif cursiva).
- Sección "About" con dos fotos superpuestas que se mueven en parallax a distinta velocidad.
- Colección de 4 variantes en tarjetas con nombre, características y precio.
- Carrusel de reseñas (anterior/siguiente, en bucle) que cambia el texto y la foto a la vez; la foto hace un ligero zoom con el scroll.
- FAQ en acordeón (una respuesta abierta a la vez, altura animada).
- Pie "cortina": queda fijo debajo y la página se desliza para descubrirlo.
- Sin JS todo el contenido es visible (las animaciones solo se activan con la clase `js`); `prefers-reduced-motion` desactiva el parallax.

## Secciones

| Orden | Sección | Selector | JS que usa |
|---|---|---|---|
| 1 | Navigation | `.nav` | `assets/js/mobile-menu.js` (botón del menú móvil) |
| 2 | Mobile menu | `#mobile-menu` | `assets/js/mobile-menu.js` |
| 3 | Hero | `.hero` | `assets/js/reveal.js` |
| 4 | About | `#about` | `assets/js/reveal.js`, `assets/js/parallax.js` |
| 5 | Collection | `#collection` | `assets/js/reveal.js` |
| 6 | Reviews | `#testimonials` | `assets/js/reveal.js`, `assets/js/testimonials.js`, `assets/js/parallax.js` |
| 7 | FAQ | `#faq` | `assets/js/reveal.js`, `assets/js/faq.js` |
| 8 | Footer | `[data-footer-reveal]` | `assets/js/footer-reveal.js` |

Para quitar o mover una sección: mueve su bloque en `index.html` (desde su comentario hasta `</section>`);
si quitas la última que usa un JS, puedes quitar también su `<script>`.

## Instalar y ejecutar

No hay dependencias que instalar.

```bash
npx serve .          # o: python -m http.server 8000
```

Abrir `http://localhost:3000` (o `:8000`). Abrir `index.html` con doble clic también funciona: no hay nada que dependa
de un servidor (las fuentes de Google necesitan conexión en ambos casos).

## Personalización

| Qué | Dónde |
|---|---|
| Nombre de marca | buscar `Your Brand` en `index.html` (logo de la barra, logo del pie, copyright y `<title>`) |
| Colores | `assets/css/styles.css` → `:root` (`--background` #f1f1f1, `--foreground` #1a1a1a, `--card` #f9f9f9, `--primary` #1a1a1a, `--primary-foreground`, `--border` #d7d7d7, `--gradient-primary`, `--gradient-secondary`) |
| Tipografías | `<link>` de Google Fonts en `index.html` + `--font-sans` (Inter) y `--font-serif` (Playfair Display, para las palabras en `<em>`) |
| Medidas | `:root` → `--radius`, `--radius-panel`, `--container`, `--gutter`, `--section-space` |
| Productos | tarjetas `.product-card` en `#collection`: nombre (`Variant 1`…), características (`Feature • Finish`), precio (`$00`) y su `aria-label` |
| Reseñas | cada `<article data-slide>` en `#testimonials`: `data-image` / `data-alt` = foto de la derecha; `Full Name` y `Customer role, City` |
| Contacto | no hay formulario, teléfono ni email; los enlaces del pie apuntan a anclas internas (`#top`, `#faq`…) |
| Año del pie | `20XX` fijo en `index.html` (no hay script que lo actualice) |

## Recursos que deben sustituirse

| Archivo | Medidas | Dónde se usa |
|---|---|---|
| `assets/img/hero.svg` | 2400×1500 | Fondo del hero (también precargado en el `<head>`) |
| `assets/img/avatar-1.svg` … `avatar-3.svg` | 96×96 | Avatares de la insignia del hero |
| `assets/img/about-back.svg` | 1000×1400 | Foto trasera (grande) de "About", con parallax |
| `assets/img/about-front.svg` | 900×1000 | Foto delantera (pequeña) de "About", con parallax |
| `assets/img/product-white.svg` | 800×800 | Tarjeta "Variant 1" |
| `assets/img/product-pink.svg` | 800×800 | Tarjeta "Variant 2" |
| `assets/img/product-blue.svg` | 800×800 | Tarjeta "Variant 3" |
| `assets/img/product-orange.svg` | 800×800 | Tarjeta "Variant 4" |
| `assets/img/testimonial-1.svg` | 1200×1200 | Foto de la reseña 1 (`<img>` en el HTML y `data-image` del primer slide) |
| `assets/img/testimonial-2.svg` | 1200×1200 | Foto de la reseña 2 (`data-image`, la crea `testimonials.js`) |
| `assets/img/testimonial-3.svg` | 1200×1200 | Foto de la reseña 3 (`data-image`, la crea `testimonials.js`) |

Este template no usa vídeo.

## Licencia y condiciones de uso

- El repositorio de origen (https://github.com/jeffrymesonm/templates) no incluye archivo de licencia (GitHub
  `licenseInfo`: null): todos los derechos quedan reservados por su autor (jeffrymesonm) salvo que conceda permiso.
- La maquetación es una recreación estática de una plantilla de Webild (webild.io), un catálogo propietario cuyos
  elementos se marcan como «Webild original».
- Las fotos originales se han eliminado y sustituido por placeholders; los textos y datos de la marca original se han
  neutralizado.
- Antes de usarla en un proyecto publicado, consigue permiso del autor del repositorio y revisa las condiciones de Webild.
