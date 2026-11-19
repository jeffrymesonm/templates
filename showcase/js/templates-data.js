/*
 * templates-data.js — Single list of templates shown in the gallery and the viewer.
 *
 * To add a template: add one entry here and put two screenshots in showcase/img/
 * named <id>-desktop.webp (1440x900) and <id>-mobile.webp (390x844 at 2x, resized to 600 px wide).
 *
 * Fields:
 *   id          — short slug used in the viewer URL (viewer.html?t=<id>)
 *   folder      — template folder at the repo root (its index.html is loaded in the viewer)
 *   name        — brand name shown on the card and in the viewer toolbar
 *   industry    — type of business the template is for
 *   description — one sentence on what stands out, written for the client
 *   languages   — languages the template ships with
 *   stage       — background colour behind the screenshots and the live preview (taken from the template)
 */
window.SHOWCASE_TEMPLATES = [
  {
    id: 'vertice',
    folder: 'construction-company',
    name: 'Vértice',
    industry: 'Constructora y remodelaciones',
    description: 'Pantalla de carga con una casa que se abre en la foto principal, cifras flotantes, servicios, proceso en tres pasos y formulario de presupuesto.',
    languages: 'Español',
    stage: '#f4b41a'
  },
  {
    id: 'casa-canela',
    folder: 'cafe-restaurant',
    name: 'Casa Canela',
    industry: 'Cafetería y restaurante',
    description: 'Nombre escrito a mano en grande, video de portada, fotos que siguen al cursor y menú con filtros por categoría.',
    languages: 'Español e inglés',
    stage: '#ede7db'
  },
  {
    id: 'albamar',
    folder: 'luxury-real-estate',
    name: 'Albamar',
    industry: 'Inmobiliaria de lujo',
    description: 'Video de portada que avanza con el scroll, catálogo de propiedades y formulario de contacto sobre foto.',
    languages: 'Español e inglés',
    stage: '#e6dccb'
  },
  {
    id: 'norvia',
    folder: 'vip-transport',
    name: 'Norvia',
    industry: 'Transporte privado y traslados',
    description: 'Un auto hecho de partículas que se transforma al bajar, tarifas, preguntas frecuentes y formulario de reservas.',
    languages: 'Español',
    stage: '#08090a'
  },
  {
    id: 'la-plancha',
    folder: 'burger-restaurant',
    name: 'La Plancha',
    industry: 'Restaurante y comida rápida',
    description: 'Pantalla de carga animada, títulos gigantes y un mapa de locales con ruta y avión en movimiento.',
    languages: 'Español e inglés',
    stage: '#ffd750'
  },
  {
    id: 'villa-marea',
    folder: 'seaside-hotel',
    name: 'Villa Marea',
    industry: 'Hotel boutique y alquiler vacacional',
    description: 'Apertura en forma de arco, escenas que se quedan fijas mientras bajas y carruseles de fotos.',
    languages: 'Inglés',
    stage: '#340c24'
  },
  {
    id: 'laurel',
    folder: 'landscaping-services',
    name: 'Laurel',
    industry: 'Paisajismo y servicios para el hogar',
    description: 'Menú que cae como un telón, tarjetas de servicios apiladas y formulario de cotización.',
    languages: 'Español e inglés',
    stage: '#1e2a22'
  },
  {
    id: 'monoform',
    folder: 'product-showcase',
    name: 'Monoform',
    industry: 'Producto y tienda online',
    description: 'Fotos con efecto de profundidad, catálogo de productos, reseñas y preguntas frecuentes.',
    languages: 'Inglés',
    stage: '#cfd4d6'
  }
];
