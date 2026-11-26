# Neutralizar un template extraído de Webild

Procedimiento para dejar sin marca un template generado con `tools/webild-build.sh`. Los medios ya son
placeholders: aquí se cambian textos, enlaces y datos, y se completa el README.

## Reglas

- **Solo se edita el contenido.** En `assets/page.js` se cambian valores de texto (strings), enlaces externos y
  números de ejemplo. No se cambian nombres de props, componentes, imports, `className`, `data-*`, `id`, rutas de
  `assets/media/...` ni la estructura de las llamadas.
- **Idioma: inglés**, como el original. Marca: `Your Brand`. Contacto: `hello@example.com`, `+00 000 000 0000`
  (enlace `tel:+000000000000`), `123 Example Street, City`. Personas: `Full Name`. Empresas: `Company Name`.
  Lugares: `City`. Años: `20XX`. Precios: `$00` (mantén el símbolo de moneda si el diseño lo usa).
  Redes sociales y enlaces externos: `#`. Correos en `mailto:` → `mailto:hello@example.com`.
- **Textos neutros y representativos, de longitud parecida** al original: el texto dice qué va en ese hueco
  ("Headline that states your main promise", "Short description of the service and who it is for").
  Hay animaciones que parten el texto en palabras o letras, o ajustan un wordmark al ancho: respeta la longitud y el
  número de palabras aproximado. Las palabras de categoría se pueden quedar ("Services", "Pricing", "FAQ").
- **Números que se animan** (contadores, odómetros, gráficas `trend`): números redondos de ejemplo (`100`, `25`, `4.9`).
  Mantén el mismo formato (`47 min` → `30 min`, `4.9/5` se queda o pasa a `5.0/5`).
- **Textos alternativos (`imageAlt`, `alt`, `label` de imágenes):** describe el hueco, no la foto original
  ("Hero image: your team at work").
- **Nada que identifique** al original: marca, nombres de productos y modelos, personas reales o inventadas,
  ciudades y barrios, certificaciones, premios, cifras reales, sellos ("Gas Safe"), marcas de terceros
  (Worcester Bosch, ChatGPT, Nike…), monedas locales en precios (`£79` → `$00`).

## Pasos por template

1. Lee `README.md` y `assets/page.js` completos.
2. Edita `assets/page.js` con las reglas de arriba. Después: `node --check assets/page.js`.
3. Busca textos fijos dentro de las secciones compiladas, que no están en `page.js`:
   `node tools/dom-text.cjs <id> --terms "<marca demo>,<otros nombres originales>" --out <tmp>.json`.
   Lee también el texto completo (`widths["1440"].text` del JSON) por si queda algo específico.
   - Si un texto fijo identificable está en un chunk `assets/<Componente>-*.js`, cambia **solo ese literal** y
     anótalo en el README, en "Cómo está hecho".
   - Si la marca está **dibujada** (logo, emblema o firma en un `path` SVG, o en una textura), sustituye el
     atributo `d` del `path` por una forma neutra (`M0 0h24v24H0z`, o un círculo), o anótalo como pendiente si no
     se puede aislar.
4. Verifica: `node tools/verify.cjs <id> --shots <carpeta temporal>`, que debe dar `"ok":true`. Mira las capturas
   (375 y 1440) buscando logos, emblemas o firmas en el loader, la navegación y el pie.
5. Completa el README: sustituye cada `<!-- COMPLETAR ... -->` (nombre en español, frase, categoría, negocios,
   estilo y 5-9 características visuales y funcionales, en español). Si cambiaste un chunk, dilo.
6. No cambies la fila `Estado`: la verificación final la actualiza.

Ejecuta los comandos desde la raíz de la biblioteca (`C:\Users\yfuf0\Proyectos\Web-Templates`); las herramientas
usan `tools/node_modules`, así que lanza `node tools/...` desde ahí.
