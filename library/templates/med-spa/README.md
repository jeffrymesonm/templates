# Clínica de medicina estética (`med-spa`)

> Landing suave en tonos rosados para una clínica de medicina estética: hero a pantalla completa con cinta de ventajas en movimiento, tratamientos en tarjetas de cristal y galería de antes y después.

| Campo | Valor |
|---|---|
| Identificador | `med-spa` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/med-spa (capturado el 2026-11-25) |
| Catálogo de origen | "Med Spa", grupo Paused |
| Categoría | salud / belleza |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | clínicas de medicina estética, med spas, dermatología, centros de láser, clínicas de belleza, centros de bienestar y tratamientos faciales |
| Estilo | claro, cálido, rosa empolvado + malva, tipografía sans moderna, tarjetas con efecto cristal y bordes muy redondeados |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave) — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.4 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Fondo fijo con aurora suave y navegación centrada con botón de reserva (menú "+" en móvil).
- Hero sobre foto a pantalla completa: titular que aparece con desenfoque, botón de cita, botón de teléfono, avatares con texto de confianza y una cinta continua de ventajas con icono.
- Tratamientos en tarjetas con foto y panel de cristal con nombre y una línea.
- Resultados en carrusel infinito de tarjetas "antes / después" con tratamiento y duración.
- Testimonio destacado con estrellas, cita grande y fila de avatares.
- Equipo en rejilla de tarjetas con foto y nombre y cargo superpuestos.
- Preguntas frecuentes en acordeón y formulario de consulta (nombre, correo, teléfono, mensaje) junto a una foto.
- Pie en tarjeta con columnas de tratamientos, empresa y contacto.

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
| 2 | `NavbarCentered` | — | — |
| 3 | `HeroOverlayMarquee` | `#hero` | hero |
| 4 | `TeamGlassCards` | `#services` | services |
| 5 | `FeaturesResultsComparison` | `#results` | results |
| 6 | `TestimonialTrustCard` | `#testimonials` | testimonials |
| 7 | `TeamOverlayCardsGrid` | `#team` | team |
| 8 | `FaqSimple` | `#faq` | faq |
| 9 | `ContactSplitForm` | `#contact` | contact |
| 10 | `FooterSimpleCard` | — | — |

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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-paRxHHqQ.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#fdf8f8` |
| `--foreground` | `#2d1f2b` |
| `--card` | `#feeaee` |
| `--card-foreground` | `#2d1f2b` |
| `--popover` | `#feeaee` |
| `--popover-foreground` | `#2d1f2b` |
| `--primary` | `#d5799b` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#f5e8ec` |
| `--secondary-foreground` | `#2d1f2b` |
| `--muted` | `#ece7e8` |
| `--muted-foreground` | `#766b73` |
| `--accent` | `#d5799b` |
| `--accent-foreground` | `#2d1f2b` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#e4dedf` |
| `--input` | `#e4dedf` |
| `--ring` | `#d5799b` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/set-01/image-01.webp` | 3500×2333 (recorte con transparencia) |
| `assets/media/image-01.webp` | 512×512 (recorte con transparencia) |
| `assets/media/set-02/image-01.webp` | 800×1071 (recorte con transparencia) |
| `assets/media/set-02/image-02.webp` | 800×1071 (recorte con transparencia) |
| `assets/media/set-02/image-03.webp` | 800×1071 (recorte con transparencia) |
| `assets/media/set-02/image-04.webp` | 800×1071 (recorte con transparencia) |
| `assets/media/set-02/image-05.webp` | 800×1071 (recorte con transparencia) |
| `assets/media/set-02/image-06.webp` | 800×1071 (recorte con transparencia) |
| `assets/media/set-02/image-07.webp` | 800×1071 (recorte con transparencia) |
| `assets/media/set-02/image-08.webp` | 800×1071 (recorte con transparencia) |
| `assets/media/set-02/image-09.webp` | 800×1071 (recorte con transparencia) |
| `assets/media/set-02/image-10.webp` | 800×1071 (recorte con transparencia) |
| `assets/media/set-02/image-11.webp` | 800×1071 (recorte con transparencia) |
| `assets/media/set-02/image-12.webp` | 800×1071 (recorte con transparencia) |
| `assets/media/set-02/image-13.webp` | 800×1071 (recorte con transparencia) |
| `assets/media/set-02/image-14.webp` | 800×1071 (recorte con transparencia) |
| `assets/media/set-03/image-01.webp` | 3500×2333 (recorte con transparencia) |
| `assets/media/set-03/image-02.webp` | 3840×2987 (recorte con transparencia) |
| `assets/media/set-03/image-03.webp` | 3954×3954 (recorte con transparencia) |
| `assets/media/set-03/image-04.webp` | 4447×3558 (recorte con transparencia) |
| `assets/media/set-03/image-05.webp` | 2208×3936 (recorte con transparencia) |
| `assets/media/set-03/image-06.webp` | 4740×3164 (recorte con transparencia) |
| `assets/media/set-04/image-01.webp` | 800×1067 (recorte con transparencia) |
| `assets/media/set-04/image-02.webp` | 800×533 (recorte con transparencia) |
| `assets/media/set-04/image-03.webp` | 800×1000 (recorte con transparencia) |
| `assets/media/set-04/image-04.webp` | 800×533 (recorte con transparencia) |
| `assets/media/set-04/image-05.webp` | 800×1200 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
