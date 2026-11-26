# Detallado de autos oscuro (`auto-detailing`)

> Landing oscura para un taller de detallado de autos: hero con rayos de luz naranja y vídeo, tarjetas de servicios que se apilan al hacer scroll y reseñas en carrusel continuo.

| Campo | Valor |
|---|---|
| Identificador | `auto-detailing` |
| Fuente | Webild — https://webild-mcp-components.vercel.app/templates/auto-detailing (capturado el 2026-11-25) |
| Catálogo de origen | "Auto Detailing", grupo Live |
| Categoría | servicios / automoción |
| Tipo de web | Landing de una página |
| Negocios a los que sirve | detallado y estética de autos, lavaderos premium, recubrimientos cerámicos, polarizado, talleres de carrocería y pintura, servicios móviles a domicilio |
| Estilo | oscuro, premium, negro + naranja, tipografía sans moderna, tarjetas redondeadas con vidrio esmerilado |
| Framework / lenguaje | Build de producción de React (Vite) ya compilado: JavaScript en módulos ES + CSS (Tailwind compilado). No hay código fuente de los componentes |
| Librerías incluidas | React 19 (compilado), Lenis (scroll suave), GSAP — todas dentro de `assets/`, sin CDN |
| Dependencias externas | Google Fonts: Geist, Inter, Inter Tight, Playfair Display |
| Idiomas | en |
| Tamaño | 6.9 MB |
| Estado | Verificado 2026-11-25 en Chrome 158 (`tools/verify.cjs` con `STRICT_EXTERNAL=1` + `tools/check-webild-brands.cjs`): 375/768/1440 px sin errores de consola ni recursos rotos, sin cargas externas salvo Google Fonts, menús y acordeones probados, sin marca original en el texto renderizado |

## Características visuales y funcionales

- Fondo del hero con rayos de luz y rejilla sutil; titular que entra palabra a palabra desde abajo.
- Vídeo grande bajo el hero con tarjetas de ventajas (icono + título + línea) que van rotando sobre él.
- Servicios en tarjetas fijas ("sticky") numeradas que se apilan al hacer scroll, cada una con dos imágenes y botón de reserva.
- Reseñas en carrusel horizontal infinito de tarjetas con foto, nombre, rol, ciudad y estrellas.
- Comparativa a dos columnas "sin nosotros / con nosotros" con cruces y checks.
- Equipo en tarjetas con foto y nombre superpuesto; preguntas frecuentes en acordeón.
- Contacto con formulario (nombre, correo, teléfono, mensaje) junto a un vídeo; pie en tarjeta con columnas de enlaces.
- Navegación centrada con botón de reserva; en móvil, menú desplegable con botón "+".

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
| 1 | `NavbarCentered` | — | — |
| 2 | `LightRaysCenterBackground` | — | hero |
| 3 | `HeroBillboardFeatures` | — | hero |
| 4 | `FeaturesStickyCards` | `#services` | — |
| 5 | `TestimonialMarqueeOverlayCards` | `#testimonials` | — |
| 6 | `FeaturesComparison` | `#why-us` | — |
| 7 | `TeamOverlayCards` | `#team` | — |
| 8 | `FaqSimple` | `#faq` | — |
| 9 | `ContactSplitForm` | `#contact` | — |
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
| Colores y tipografías | bloque `:root{--background:…}` en `assets/theme-DzfT0to9.css` |
| Imágenes y vídeos | sustituye los archivos de `assets/media/` por otros con el mismo nombre y proporción, o cambia la ruta en `assets/page.js` |

Colores del bloque `:root`:

| Variable | Valor |
|---|---|
| `--background` | `#0a0a0a` |
| `--foreground` | `#f5f5f5` |
| `--card` | `#1a1a1a` |
| `--card-foreground` | `#f5f5f5` |
| `--popover` | `#1a1a1a` |
| `--popover-foreground` | `#f5f5f5` |
| `--primary` | `#ff7a1a` |
| `--primary-foreground` | `#fff` |
| `--secondary` | `#1a1a1a` |
| `--secondary-foreground` | `#f5f5f5` |
| `--muted` | `#1d1d1d` |
| `--muted-foreground` | `#a3a3a3` |
| `--accent` | `#ff7a1a` |
| `--accent-foreground` | `#f5f5f5` |
| `--destructive` | `#ef4444` |
| `--destructive-foreground` | `#fff` |
| `--border` | `#262626` |
| `--input` | `#262626` |
| `--ring` | `#ff7a1a` |

Tipografías:

| Variable | Valor |
|---|---|
| — | (tipografía por defecto del tema) |

## Recursos que deben sustituirse

Todos son placeholders con el mismo nombre, formato y medidas que el original: color medio, aspas y etiqueta.

| Archivo | Medidas / tipo |
|---|---|
| `assets/media/image-01-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-01-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/video-01.mp4` | vídeo 1920x1080, 6.1 s |
| `assets/media/image-02-1600.webp` | 1600×2399 (recorte con transparencia) |
| `assets/media/image-03-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-03-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-02-800.webp` | 800×1200 (recorte con transparencia) |
| `assets/media/video-02.mp4` | vídeo 1920x1080, 14.8 s |
| `assets/media/image-04-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-05-1600.webp` | 1600×897 (recorte con transparencia) |
| `assets/media/image-05-800.webp` | 800×449 (recorte con transparencia) |
| `assets/media/image-04-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-06.webp` | 512×512 (recorte con transparencia) |
| `assets/media/image-07-1600.webp` | 1600×998 (recorte con transparencia) |
| `assets/media/image-07-800.webp` | 800×499 (recorte con transparencia) |
| `assets/media/image-08-1600.webp` | 1600×1600 (recorte con transparencia) |
| `assets/media/image-08-800.webp` | 800×800 (recorte con transparencia) |
| `assets/media/image-09-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-09-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-10-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-10-800.webp` | 800×534 (recorte con transparencia) |
| `assets/media/image-11-1600.webp` | 1600×1067 (recorte con transparencia) |
| `assets/media/image-11-800.webp` | 800×534 (recorte con transparencia) |

## Licencia y condiciones de uso

- El código de los componentes, la maquetación y las animaciones son de **Webild** (webild.io), que los publica
  sin licencia de reutilización (en sus metadatos, "Webild original"). El dueño autorizó copiarlos el 2026-11-25
  para uso interno. **No redistribuir ni publicar este código como propio** sin el permiso de Webild.
- Las fotos, los vídeos y los modelos 3D de marca originales se eliminaron. Solo se conserva algún modelo 3D genérico, indicado en la tabla.
- Google Fonts: licencia SIL Open Font License.
