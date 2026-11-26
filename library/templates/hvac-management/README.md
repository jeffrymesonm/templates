# Empresa de climatización (`hvac-management`)

> Landing clara y de confianza para una empresa de climatización: hero sobre foto a pantalla completa con avatares de clientes, servicios en tarjetas con imagen, proceso en línea de tiempo y llamada a la acción con teléfono.

| Campo | Valor |
|---|---|
| Identificador | `hvac-management` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/hvac-management (capturado el 2026-11-25) |
| Catálogo de origen | "HVAC Management", grupo Paused |
| Categoría | servicios / hogar |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | empresas de climatización y aire acondicionado, calefacción, fontanería, electricistas, mantenimiento de edificios, servicios técnicos a domicilio, contratistas locales |
| Estilo | claro, profesional, blanco + azul intenso, tipografía sans moderna, tarjetas blancas redondeadas y hero oscuro con foto |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.2 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Fondo fijo con aurora suave y barra de navegación en cápsula con botón de presupuesto.
- Hero sobre foto a pantalla completa con etiqueta, titular que sube al entrar, dos botones y grupo de avatares con texto de confianza.
- Bloque "sobre nosotros" con foto y tres datos destacados con icono.
- Servicios en tarjetas con imagen, título y descripción, con botón de presupuesto.
- Motivos para elegirte en filas numeradas de imagen y texto alternadas.
- Proceso en tres pasos como línea de tiempo de tarjetas con imagen.
- Reseñas en tarjetas con estrellas, foto, nombre y cita; preguntas frecuentes en acordeón con botón de contacto.
- Llamada a la acción final con botón de presupuesto y botón de llamada (`tel:`); pie con imagen, columnas de enlaces y datos de contacto.

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
| 1 | `AuroraBackground` | — | — |
| 2 | `NavbarInline` | — | — |
| 3 | `HeroOverlay` | `#hero` | hero |
| 4 | `AboutFeaturesSplit` | `#about` | about |
| 5 | `FeaturesMediaCards` | `#services` | services |
| 6 | `FeaturesAlternatingSplit` | `#why-choose` | why-choose |
| 7 | `FeaturesTimelineCards` | `#how-it-works` | how-it-works |
| 8 | `TestimonialRatingCards` | `#testimonials` | testimonials |
| 9 | `FaqSimple` | `#faq` | faq |
| 10 | `ContactCta` | `#contact` | contact |
| 11 | `FooterSimpleMedia` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-1r5_ADh8.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#f8fafc` |
| `--foreground` | `#0f172a` |
| `--card` | `#fff` |
| `--card-foreground` | `#0f172a` |
| `--popover` | `#fff` |
| `--popover-foreground` | `#0f172a` |
| `--primary` | `#1d4ed8` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#e0e7ff` |
| `--secondary-foreground` | `#1e3a5f` |
| `--muted` | `#e5e8eb` |
| `--muted-foreground` | `#616674` |
| `--accent` | `#3b82f6` |
| `--accent-foreground` | `#0f172a` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#dcdfe3` |
| `--input` | `#dcdfe3` |
| `--ring` | `#1d4ed8` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-01/image-01.jpg` | 2000×1121 |
| `assets/media/set-01/image-02.jpg` | 1200×799 |
| `assets/media/set-01/image-03.jpg` | 2000×1333 |
| `assets/media/set-01/image-04.jpg` | 1200×798 |
| `assets/media/set-01/image-05.jpg` | 1200×857 |
| `assets/media/set-01/image-06.jpg` | 1200×801 |
| `assets/media/set-01/image-07.jpg` | 1200×800 |
| `assets/media/set-01/image-08.jpg` | 1200×800 |
| `assets/media/set-01/image-09.jpg` | 1200×800 |
| `assets/media/set-02/image-01.jpg` | 1200×800 |
| `assets/media/set-02/image-02.jpg` | 1200×673 |
| `assets/media/set-02/image-03.jpg` | 1200×1200 |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
