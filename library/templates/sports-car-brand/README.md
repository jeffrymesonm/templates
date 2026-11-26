# Marca de deportivos con dos modelos en 3D (`sports-car-brand`)

> Landing de una marca de coches deportivos que presenta dos modelos en una escena 3D fija: al cambiar de coche, toda la página (cifras, colores, textos) cambia con él.

| Campo | Valor |
|---|---|
| Identificador | `sports-car-brand` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/sports-car-brand (capturado el 2026-11-25) |
| Catálogo de origen | "Sports Car Brand", grupo Live, kit `two300` |
| Categoría | Automoción / producto de lujo |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | Marcas y concesionarios de coches deportivos, fabricantes de vehículos (también eléctricos o motos), preparadores, lanzamientos de un modelo o de dos versiones de un mismo producto |
| Estilo | Minimalista de estudio: fondo gris claro, tipografía ancha (Saira expandida), mucho aire y el coche 3D como protagonista |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Three.js, Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display, Saira |
| Idiomas | en |
| Tamaño | 6.6 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Escena 3D (Three.js) fija detrás de toda la página: el coche gira, se acerca y cambia de encuadre según la sección.
- Selector de dos modelos: al cambiar, se intercambian los textos, las cifras, la tabla y los colores de cada sección.
- Pantalla de carga con barra de progreso mientras se cargan los modelos 3D.
- Cifras animadas (potencia, par, 0-100, velocidad punta, peso) que cuentan hasta el valor del coche elegido.
- Sección de aerodinámica con mapa de presión sobre la carrocería y leyenda de succión/presión.
- Anatomía del coche: frenos, motor y cabina señalados sobre el modelo, con contador "01 / 03".
- Configurador de color en vivo: cada muestra repinta el coche 3D (incluye acabado carbono).
- Tabla comparativa de los dos modelos y llamada a la acción final para cambiar de coche.
- Navegación mínima con logotipo en texto (`YOUR/BRAND`) y scroll suave (Lenis).

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.
- Neutralización: solo se cambió `assets/page.js` (textos, modelos `Model One` / `Model Two` con códigos `M1` / `M2`,
  cifras de ejemplo, nombres de color y la marca `YOUR/BRAND`).
- **Chunks compilados parcheados** (solo literales de los valores por defecto de sus props, que `page.js` ya sustituye
  pero que reaparecerían si reutilizas el componente sin todas sus props):
  - `CarDuoStage-B9PZJ4sH.js`: nombres y códigos de los dos coches → `Model One`/`M1`, `Model Two`/`M2` (el `src` de los `.glb` y el nombre de material que busca el código no se tocan).
  - `NavbarStudioWordmark-Db2Ap0m4.js`: marca por defecto → `YOUR` / `BRAND`.
  - `HeroTwinCarStage-CeZD802B.js`, `AboutTwinCarIntro-Cf0xnUcd.js`, `FeaturesCarAnatomy-DywO5xs5.js`, `FeaturesTwinCompare-DGWI22T7.js`, `CtaTwinCarSwap-Bgla_zAP.js`: nombres de modelo, marca, circuito, años y cifras reales → textos y números de ejemplo.
  - `ProductPaintTurntable-BRZu6_Wl.js`: nombres comerciales de pintura → nombres de color genéricos.
- La ruta de los modelos 3D en `page.js` (variable `m`) apunta a `assets/media` (antes apuntaba a una subcarpeta
  inexistente y daba 404). Los archivos se llaman `911.glb` / `918.glb` solo por compatibilidad: son bloques neutros;
  si los renombras, cambia también su `src` en `page.js`.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `CarDuoStage` | — | — |
| 2 | `LoaderStudioWarmup` | — | — |
| 3 | `NavbarStudioWordmark` | — | — |
| 4 | `HeroTwinCarStage` | `#hero` | hero |
| 5 | `AboutTwinCarIntro` | `#about` | about |
| 6 | `MetricsTwinCarFigures` | `#metrics` | metrics |
| 7 | `ProcessAeroPressure` | `#process` | process |
| 8 | `FeaturesCarAnatomy` | `#services` | services |
| 9 | `ProductPaintTurntable` | `#product` | product |
| 10 | `FeaturesTwinCompare` | `#features` | features |
| 11 | `CtaTwinCarSwap` | `#cta` | cta |

Para quitar una sección, borra su llamada en `assets/page.js`. Para moverla, mueve la llamada completa. Para
reutilizarla en otra página, impórtala igual que el resto y pásale las mismas props.

## Instalar y ejecutar

No hay dependencias que instalar ni build. Necesita un servidor HTTP, porque los módulos ES no cargan desde `file://`:

```bash
npx serve .          # o: python -m http.server 8000
```

## Personalización

| Qué | Dónde |
|---|---|
| Marca, textos, enlaces, contacto | `assets/page.js` (busca `Your Brand`, `hello@example.com`, `+00 000 000 0000`) |
| Título de la pestaña | `<title>` en `index.html` |
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-CRTQg3xC.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#e8e8e7` |
| `--foreground` | `#0c0c0c` |
| `--card` | `#f0f0ef` |
| `--card-foreground` | `#0c0c0c` |
| `--popover` | `#e8e8e7` |
| `--popover-foreground` | `#0c0c0c` |
| `--primary` | `#0c0c0c` |
| `--primary-foreground` | `#f4f4f3` |
| `--secondary` | `#e4e4e3` |
| `--secondary-foreground` | `#0c0c0c` |
| `--muted` | `#e4e4e3` |
| `--muted-foreground` | `var(--foreground)` |

Tipografías:

| Variable | Valor |
|---|---|
| `--font-heading` | `"Saira", "Helvetica Neue", Helvetica, Arial, sans-serif` |
| `--font-body` | `"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif` |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/model-01.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/model-02.glb` | modelo 3D de ejemplo (bloque neutro) |
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
