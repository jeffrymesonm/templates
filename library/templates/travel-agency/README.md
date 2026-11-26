# Agencia de viajes de lujo (`travel-agency`)

> Landing para una agencia de viajes a medida: hero con carrusel de fotos a pantalla completa y la marca en letras gigantes, servicios con imagen, proceso en tres pasos con móvil y destinos en tarjetas.

| Campo | Valor |
|---|---|
| Identificador | `travel-agency` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/travel-agency (capturado el 2026-11-25) |
| Catálogo de origen | "Travel Agency", grupo Paused |
| Categoría | viajes / turismo |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | agencias de viajes, viajes de lujo a medida, organizadores de lunas de miel, tour operadores, empresas de experiencias y escapadas, conserjería de viajes |
| Estilo | elegante y luminoso, crema + vino oscuro, fotos grandes, marca en letras gigantes, tarjetas redondeadas, botones en píldora |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.2 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Navegación en cápsula flotante con enlaces a las secciones y botón para planificar el viaje.
- Hero con carrusel automático de cuatro fotos a pantalla completa, barras de progreso por foto, descripción, dos botones y la marca en letras gigantes a todo el ancho.
- Bloque "sobre nosotros" con una frase grande y dos botones.
- Servicios en cuatro tarjetas con foto, título y descripción.
- Proceso en tres pasos numerados con subtítulo, texto e imagen inclinada en una tarjeta grande.
- Seis destinos en tarjetas con etiqueta de región, descripción y botón.
- Reseñas en tarjetas divididas (foto + cita) con destino, nombre, fecha y puntos para cambiar de reseña.
- Formulario de contacto (nombre, correo, teléfono, destino y mensaje) junto a una imagen, y pie mínimo con la marca y redes sociales.

## Cómo está hecho (léelo antes de editar)

- **Todo el contenido está en `assets/page.js`**: textos, enlaces, imágenes, listas y el orden de las secciones.
  Es la única parte pensada para editarse. Cada sección es una llamada `(0, x.jsx)(Componente, { ...props })`.
- **El diseño de cada sección está compilado** en `assets/<Componente>-<hash>.js`. Se puede reutilizar y reordenar,
  pero su interior (maquetación, animaciones) no es código fuente editable.
- `assets/index-*.js` es la entrada: está parcheada para montar solo esta página (marcada con `(0,S.jsx)(b.Suspense`).
- `assets/preload-helper-*.js` está parcheado para cargar los archivos relativos a su carpeta, así que funciona en cualquier subcarpeta.
- `assets/libraryData-*.js` es un módulo vacío: sustituye al catálogo interno de Webild, que esta página no usa.

## Secciones

| Orden | Componente | Ancla | `data-section` |
|---|---|---|---|
| 1 | `NavbarInline` | — | — |
| 2 | `CornerGlowBackground` | `#hero` | hero |
| 3 | `HeroBrandCarousel` | `#hero` | hero |
| 4 | `AboutText` | `#about` | about |
| 5 | `FeaturesMediaCards` | `#services` | services |
| 6 | `FeaturesDetailedSteps` | `#how-it-works` | how-it-works |
| 7 | `FeaturesTaggedCards` | `#destinations` | destinations |
| 8 | `TestimonialSplitCards` | `#reviews` | reviews |
| 9 | `ContactSplitForm` | `#contact` | contact |
| 10 | `FooterMinimal` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-BVSJ2num.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#f6f0e9` |
| `--foreground` | `#3d1f2a` |
| `--card` | `#efe7dd` |
| `--card-foreground` | `#3d1f2a` |
| `--popover` | `#efe7dd` |
| `--popover-foreground` | `#3d1f2a` |
| `--primary` | `#3d1f2a` |
| `--primary-foreground` | `#f6f0e9` |
| `--secondary` | `#efe7dd` |
| `--secondary-foreground` | `#3d1f2a` |
| `--muted` | `#e7dfda` |
| `--muted-foreground` | `#7e686d` |
| `--accent` | `#8c4a5c` |
| `--accent-foreground` | `#3d1f2a` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#e0d7d2` |
| `--input` | `#e0d7d2` |
| `--ring` | `#3d1f2a` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-01/image-01.webp` | 1200×600 (recorte con transparencia) |
| `assets/media/set-02/image-01.webp` | 1200×800 (recorte con transparencia) |
| `assets/media/set-02/image-02.webp` | 1200×800 (recorte con transparencia) |
| `assets/media/set-02/image-03.webp` | 1200×800 (recorte con transparencia) |
| `assets/media/set-02/image-04.webp` | 1200×1406 (recorte con transparencia) |
| `assets/media/set-02/image-05.webp` | 1200×1800 (recorte con transparencia) |
| `assets/media/set-02/image-06.webp` | 1200×675 (recorte con transparencia) |
| `assets/media/set-03/image-01.webp` | 1920×1280 (recorte con transparencia) |
| `assets/media/set-03/image-02.webp` | 1920×1281 (recorte con transparencia) |
| `assets/media/set-03/image-03.jpg` | 1920×1280 |
| `assets/media/set-03/image-04.jpg` | 1920×1440 |
| `assets/media/set-04/image-01.webp` | 1200×1800 (recorte con transparencia) |
| `assets/media/set-04/image-02.webp` | 1200×1800 (recorte con transparencia) |
| `assets/media/set-04/image-03.webp` | 1200×1800 (recorte con transparencia) |
| `assets/media/set-05/image-01.webp` | 1200×800 (recorte con transparencia) |
| `assets/media/set-05/image-02.webp` | 1200×1500 (recorte con transparencia) |
| `assets/media/set-05/image-03.webp` | 1200×2133 (recorte con transparencia) |
| `assets/media/set-05/image-04.webp` | 1200×900 (recorte con transparencia) |
| `assets/media/set-06/image-01.webp` | 1200×1800 (recorte con transparencia) |
| `assets/media/set-06/image-02.webp` | 1200×1200 (recorte con transparencia) |
| `assets/media/set-06/image-03.webp` | 1200×800 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
