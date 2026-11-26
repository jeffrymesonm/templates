# <Nombre descriptivo> (`<id>`)

> Una frase: qué tipo de web es y qué la hace especial.

| Campo | Valor |
|---|---|
| Identificador | `<id>` |
| Fuente | `source/github-templates/<carpeta>` — https://github.com/jeffrymesonm/templates (commit `<hash>`) |
| Diseño de referencia | Webild `/templates/<slug>` (kit `<kit>`), reconstruido en HTML estático en el repo original |
| Categoría | <restaurante / servicios / inmobiliaria / producto / hotel / transporte…> |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | <lista> |
| Estilo | <palabras clave visuales> |
| Framework / lenguaje | HTML + CSS + JavaScript (sin framework, sin build) |
| Dependencias | Google Fonts: <familias>. Ninguna librería JS externa. |
| Idiomas | <es / es + en con selector> |
| Estado | Verificado: <fecha>, 375/768/1440 px, consola limpia, 0 recursos rotos |

## Características visuales y funcionales

- …

## Secciones

| Orden | Sección | Selector | JS que usa |
|---|---|---|---|
| 1 | … | `#id` | `assets/js/….js` |

Para quitar o mover una sección: mueve su bloque en `index.html` (desde su comentario hasta `</section>`);
si quitas la última que usa un JS, puedes quitar también su `<script>`.

## Instalar y ejecutar

No hay dependencias que instalar.

```bash
npx serve .          # o: python -m http.server 8000
```

Abrir `http://localhost:3000` (o `:8000`). Abrir `index.html` con doble clic también funciona, salvo <lo que no funcione en file://, si aplica>.

## Personalización

| Qué | Dónde |
|---|---|
| Nombre de marca | buscar `Tu Marca` / `Your Brand` en `index.html` y `assets/js/` |
| Colores | `assets/css/styles.css` → `:root` (`--…`) |
| Tipografías | `<link>` de Google Fonts en `index.html` + `--font-…` |
| Contacto | … |
| Textos traducidos | `assets/js/translations.js` (si aplica) |

## Recursos que deben sustituirse

| Archivo | Medidas | Dónde se usa |
|---|---|---|

## Licencia y condiciones de uso

…
