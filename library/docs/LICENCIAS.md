# Licencias y condiciones de uso

Revisado el 2026-11-25. Resumen: **ninguna de las dos fuentes concede una licencia de reutilización.** Los
templates de Webild se incorporaron por decisión expresa del dueño (sección 2). La biblioteca es de uso interno; antes
de publicar o vender un sitio basado en estos templates, conviene tener el permiso por escrito de los autores.

## 1. Repositorio `jeffrymesonm/templates` (8 templates incorporados)

| Punto | Situación |
|---|---|
| Licencia declarada | Ninguna: no hay archivo `LICENSE` y GitHub devuelve `licenseInfo: null` |
| Qué implica | Por defecto, todos los derechos quedan reservados al autor (`jeffrymesonm`). Clonarlo y estudiarlo es posible; redistribuir o publicar obras derivadas requiere su permiso |
| Origen del diseño | Cada template es una reconstrucción en HTML estático de un template de Webild (ver `DUPLICADOS.md`). El código está escrito a mano en el repo; la composición visual es de Webild |
| Fotos y vídeos originales | Eliminados de `templates/`. Sus nombres de archivo (p. ej. `person-holding-delicious-burger…`) apuntan a bancos de imágenes con licencia propia; quedan solo en `source/` |
| Atribuciones de terceros | Iconos Lucide (licencia ISC) en `cafe-restaurant`: el comentario de atribución se conserva |
| Tipografías | Google Fonts, todas con licencia SIL Open Font License: uso libre, también comercial |

**Acción recomendada:** si `jeffrymesonm` es parte del equipo, pedirle que añada una licencia (o una nota de uso
interno) al repo. Si no lo es, pedir autorización antes de usar estos diseños en proyectos de clientes.

## 2. Webild (`webild-mcp-components.vercel.app/templates/`)

| Punto | Situación |
|---|---|
| Licencia declarada | Ninguna en el sitio. El sitio no tiene `robots.txt`, `llms.txt` ni API |
| Metadatos propios | El catálogo de componentes marca cada pieza como `Webild original` (propiedad de Webild) o `partnership` (React Bits, Osmo: piezas de terceros con acuerdo comercial) |
| Código accesible | Solo JavaScript compilado y minificado por Vite. No hay sourcemaps (HTTP 403), y los endpoints MCP (`/mcp`, `/api/mcp`) no existen: devuelven 405 porque el hosting es estático |
| Imágenes | Alojadas en `storage.googleapis.com/webild/…`, sin licencia declarada |
| Personas reales | `drake` (Music Artist), `jettas` (Pro Athlete) y `racing-driver` (Lewis Hamilton) usaban la identidad de personas reales. Se incorporaron como `music-artist`, `pro-athlete` y `racing-driver`, sin nombres, firmas, emblemas ni datos de esas personas |
| Webs reales | 24 rutas no publicadas tienen un slug que coincide con el nombre de webs conocidas (`bendingspoons`, `designjoy`, `graza`, `snellenberg`…). No se ha verificado una a una. Quedan fuera: no están en el catálogo publicado |

### Decisión del dueño (2026-11-25)

El dueño ordenó extraer el código o copiar los diseños de los templates del catálogo publicado, a sabiendas de que no
tienen licencia. Se hizo así:

- **Qué se copió:** el build compilado de cada página (JavaScript y CSS), tal como lo sirve Webild, más un parche de
  pocas líneas para que funcione por separado (ver `CONVENCIONES.md`). No hay código fuente de los componentes.
- **Qué no se copió:** fotos, vídeos, logotipos y modelos 3D de marca (sustituidos por placeholders), ni el
  catálogo interno de 800 componentes de Webild (`libraryData`, sustituido por un módulo vacío).
- **Uso:** interno, como punto de partida. **Publicar un sitio con este código compilado es redistribuir código
  de Webild:** para un cliente real, lo seguro es pedir permiso a Webild o reescribir las secciones que se usen.
- Los 8 templates con equivalente en el repo de GitHub se omitieron por duplicados (ver `DUPLICADOS.md`).
