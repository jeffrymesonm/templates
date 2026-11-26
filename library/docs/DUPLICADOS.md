# Duplicados y equivalencias

Comparación hecha el 2026-11-25 por **estructura de secciones**, no por nombre. De cada página de Webild se
extrajo la lista de componentes de sección que compone (p. ej. `HeroPopTrio`, `FeaturesMascotClaims`,
`StatementWavePhoto`) y se comparó con las secciones, los textos y los scripts de cada template del repo.

## 1. Los 8 templates del repo son reconstrucciones de Webild

| Template local | Webild equivalente (marca demo) | Evidencia |
|---|---|---|
| `burger-restaurant` | `burger-restaurant`, kit `crav` (Stack Shack) | Mismo orden: loader de capas, hero con tres fotos "pop", sección roja "make a mess" con datos a los lados, locales unidos por una ruta y pie con wordmark |
| `cafe-restaurant` | `coffee-shop` y kit `joes` (Joe's Coffee) | Fondo aurora, menú a pantalla completa, rastro de fotos al mover el cursor, menú con filtros y wordmark gigante |
| `construction-company` | `construction-company`, kit `terminal` (Kestrel) | Loader partido, nav de cristal, pasos fijos al hacer scroll, contadores tipo odómetro, formulario oscuro |
| `landscaping-services` | `landscaping-services` (Oakmere) | Hero con titular sobre la foto, tarjetas apiladas al scroll, equipo, testimonios, FAQ a dos columnas y formulario partido |
| `luxury-real-estate` | `luxury-real-estate` | Vídeo del hero que avanza con el scroll, texto que se rellena, columnas de propiedades, tarjeta de contacto con parallax |
| `product-showcase` | `product-showcase` (Monoblock) | Hero con parallax, About con dos fotos, tarjetas de variantes, testimonios, FAQ y pie que se revela |
| `seaside-hotel` | `seaside-hotel`, kit `era` (Villa Solenne) | Póster con arco, curva de About, ruta de destinos, slider de villas enmarcado y CTA con póster |
| `vip-transport` | `logistics-company`, kit `dockline` (Ridgeway/Yardline) | Partículas que forman coche → aparcamiento → carretera, odómetro y nav de cristal. Es el mismo diseño adaptado a otro sector |

**Decisión:** se conservan los 8 del repo y se omiten sus 13 equivalentes de Webild (8 templates del catálogo y
5 páginas de kit: `crav`, `joes`, `terminal`, `era`, `dockline`). Motivo: los del repo ya son HTML editable y
documentado; los de Webild solo existen como JavaScript compilado.

## 2. Duplicados dentro de la biblioteca

| Pareja | Decisión |
|---|---|
| `burger-restaurant` / `cafe-restaurant` (dos restaurantes) | **Se conservan ambos.** El diseño, la paleta, las animaciones y las secciones son distintos: comida rápida divertida frente a cafetería cálida con menú filtrable |
| `construction-company` / `vip-transport` (comparten el loader partido y la nav de cristal de la misma familia de Webild) | **Se conservan ambos.** Solo comparten esos detalles; el hero, las secciones y el sistema de partículas WebGL de `vip-transport` son distintos |

## 3. Tras incorporar los 55 de Webild (2026-11-25)

- Los 8 equivalentes de la sección 1 siguen omitidos: el diseño ya está en la versión HTML editable.
- Las variantes de la tabla siguiente **sí se incorporaron**, porque son entradas propias del catálogo y el dueño
  pidió todas. Aportan sobre todo contenido de otro sector.
- Entre los 55, el único par muy parecido es `music-artist` / `pro-athlete` (78 % de secciones en común: mismo kit).
  Se conservan los dos porque el hero y los bloques de contenido difieren (artista frente a deportista).

## 4. Variantes de Webild que se parecen a lo que ya tenemos

Estas variantes tienen más del 75 % de las
secciones en común con un diseño de la biblioteca estática (se incorporaron igualmente, ver sección 3).

| Ruta Webild | Muy parecida a | Secciones en común |
|---|---|---|
| `specialty-coffee-shop` | `cafe-restaurant` (coffee-shop) | 78 % |
| `beach-resort` | `seaside-hotel` | 89 % |
| `wedding-venue` | `seaside-hotel` | 80 % |
| `port-logistics` | `vip-transport` (logistics-company) | 91 % |
| `electrician` | `vip-transport` (logistics-company) | 91 % |

Además, en Webild varias páginas comparten kit entre sí. Por ejemplo, `medical-clinic`, `dental-clinic` y
`regenerative-farm` usan el mismo kit. El catálogo (`catalog/webild-inventory.json`, campo `sectionComponents`)
permite agruparlas antes de elegir.
