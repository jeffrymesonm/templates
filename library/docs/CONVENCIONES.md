# Convenciones de la biblioteca

Reglas para que todos los templates se adapten igual. Si un template necesita algo distinto, su README lo explica.

## Dos tipos de template

| Tipo | Origen | Cómo se edita |
|---|---|---|
| **HTML estático** | `github-templates` (8) | HTML, CSS y JS escritos a mano: se edita todo |
| **Build compilado de React** | `webild` | Contenido y orden de las secciones en `assets/page.js`; el interior de cada sección está compilado |

Cada carpeta funciona sola: no se mezclan templates ni se comparten archivos entre ellos.

## Estructura: HTML estático

```
templates/<id>/
├── index.html          # página completa; cada sección empieza con un comentario <!-- ===== ... ===== -->
├── README.md           # ficha del template (ver docs/PLANTILLA-README.md)
└── assets/
    ├── css/styles.css  # colores, tipografías y medidas en variables de :root (primer bloque)
    ├── js/*.js         # un archivo por comportamiento; cada uno documenta qué hace
    ├── img/*.svg       # placeholders con las medidas exactas de la imagen original
    └── video/*.mp4     # (si aplica) placeholders animados con la resolución y duración originales
```

- Tecnología: HTML + CSS + JavaScript sin framework ni build. Se abre con cualquier servidor estático.

## Estructura: build compilado de React (Webild)

```
templates/<id>/
├── index.html                 # carcasa original (fuentes + CSS + entrada)
├── README.md                  # ficha generada por tools/webild_readme.py y completada a mano
└── assets/
    ├── page.js                # TODO el contenido: textos, enlaces, imágenes y orden de las secciones (legible)
    ├── theme-*.css            # bloque :root{--background:…} con la paleta y las tipografías del template
    ├── <Seccion>-<hash>.js    # secciones compiladas (no editables por dentro)
    ├── index-*.js             # entrada parcheada: monta solo esta página
    ├── preload-helper-*.js    # parcheado: carga relativa a su carpeta (funciona en subcarpetas)
    ├── libraryData-*.js       # módulo vacío (sustituye al catálogo interno de Webild)
    └── media/                 # placeholders con el mismo nombre, formato y medidas que los originales
```

- Necesita servidor HTTP (módulos ES); no funciona con doble clic (`file://`).
- Se genera con `bash tools/webild-build.sh <slug-webild> <id>`: captura la página en vivo
  (`webild-extract.cjs`), crea los placeholders (`webild_media.py`), vacía el catálogo y formatea `page.js`.
- Textos en inglés, como el original. Marca: `Your Brand`.
- Los recortes con transparencia conservan su silueta. Los modelos 3D de marca (por ejemplo, coches reales) pasan
  a ser un bloque neutro, y los genéricos se conservan.

## Valores de ejemplo (buscar y reemplazar)

Todo dato del negocio es un valor de ejemplo fácil de encontrar. Al adaptar un template, busca estos textos en
`index.html` y en `assets/js/` (sobre todo `translations.js` y `contact-form.js`):

| Dato | Español | Inglés |
|---|---|---|
| Nombre de la marca | `Tu Marca` | `Your Brand` |
| Teléfono (texto) | `+00 000 000 0000` | igual |
| Teléfono (enlace) | `tel:+000000000000` | igual |
| WhatsApp | `https://wa.me/000000000000` | igual |
| Email | `hola@example.com` | `hello@example.com` |
| Dirección | `Calle Ejemplo 123, Ciudad` | `123 Example Street, City` |
| Redes sociales | `href="#"` | igual |
| Personas | `Nombre Apellido` | `Full Name` |
| Año de fundación | `20XX` | igual |
| Precios | `$00` | igual |
| Cifras animadas (contadores) | números redondos de ejemplo (`100`, `25`) | igual |

`example.com` es un dominio reservado (RFC 2606): no puede pertenecer a nadie.

## Textos

- Neutros y representativos: cada texto dice qué va en ese lugar ("Titular principal: la promesa de tu negocio").
- Misma longitud aproximada que el original, para que la composición no cambie.
- Mismo idioma que el original. Si el template tiene `translations.js`, los dos idiomas se neutralizan.
- Sin nombres de productos, lugares, años, personas, premios ni cifras que parezcan reales.

## Imágenes y vídeos

- Cada placeholder SVG conserva el nombre base, las medidas y el color medio de la foto original, y muestra
  sus medidas en el centro (`hero · 2400×1350`). Sustitúyelo por una imagen propia con la misma proporción
  (formato recomendado: WebP) y actualiza la extensión en `index.html`.
- Los vídeos de ejemplo son degradados en movimiento con la misma resolución, fps y duración. Los heroes
  que avanzan el vídeo con el scroll necesitan un vídeo con keyframes frecuentes:
  `ffmpeg -i entrada.mp4 -c:v libx264 -g 5 -crf 23 -an -movflags +faststart hero.mp4`.
- Generados con `tools/make_placeholders.py`.

## Personalización visual

- Colores, tipografías, radios y espacios: variables CSS en el primer bloque `:root` de `assets/css/styles.css`.
- Tipografías: enlace de Google Fonts en el `<head>` de `index.html` + variables `--font-*`.
- Se conserva la identidad visual original (paleta, tipografías, animaciones) como punto de partida.

## Verificación

`tools/verify.cjs` abre cada template en Chromium (375, 768 y 1440 px) y falla si hay errores de consola,
recursos 404 o scroll horizontal; `tools/interactions.cjs` prueba idioma, filtros, sliders y formularios;
`tools/check-brands.sh` busca nombres de marca originales.
