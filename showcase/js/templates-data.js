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
  },
  // ---- Biblioteca sin marca (library/templates): 63 templates listos para adaptar a cualquier negocio ----
  {
    id: 'marketing-agency',
    folder: 'library/templates/marketing-agency',
    name: 'Agencia de marketing editorial',
    industry: 'Agencias y estudios · creativos / agencia de marketing',
    description: 'Landing clara y editorial para una agencia creativa: la marca en letras gigantes desfila en el hero con fotos que se intercalan, y las secciones se deslizan unas sobre otras al hacer scroll.',
    languages: 'Inglés',
    stage: '#fcfcfc'
  },
  {
    id: 'photography-studio',
    folder: 'library/templates/photography-studio',
    name: 'Estudio de fotografía',
    industry: 'Agencias y estudios · creativos / fotografía',
    description: 'Landing clara y luminosa para un estudio de fotografía, con fotos en forma de arco, una palabra del titular que rota resaltada en pastel y un gran wordmark que se revela en el pie.',
    languages: 'Inglés',
    stage: '#fff'
  },
  {
    id: 'web-agency',
    folder: 'library/templates/web-agency',
    name: 'Agencia web oscura con marquesina vertical',
    industry: 'Agencias y estudios · Agencia / servicios creativos',
    description: 'Landing oscura para una agencia de diseño y desarrollo web, con hero de dos columnas de capturas que se desplazan en vertical y tarjetas de servicios animadas (bento).',
    languages: 'Inglés',
    stage: '#0a0a0a'
  },
  {
    id: 'web-design-agency',
    folder: 'library/templates/web-design-agency',
    name: 'Agencia de diseño web',
    industry: 'Agencias y estudios · agencia / servicios digitales',
    description: 'Landing oscura y tecnológica para un estudio de diseño web, con objeto 3D animado en el hero, galería de proyectos en cúpula 3D y tarjetas de cristal sobre un fondo aurora.',
    languages: 'Inglés',
    stage: '#010101'
  },
  {
    id: 'web-design-studio',
    folder: 'library/templates/web-design-studio',
    name: 'Estudio de diseño web',
    industry: 'Agencias y estudios · agencias y estudios creativos / diseño web',
    description: 'Landing oscura para un estudio de diseño web cuyo hero es un túnel 3D de pantallas con vídeos de proyectos por el que se "cae" al hacer scroll, seguida de un bento de servicios con partículas y un carrusel curvo de trabajos.',
    languages: 'Inglés',
    stage: '#020206'
  },
  {
    id: 'auto-detailing',
    folder: 'library/templates/auto-detailing',
    name: 'Detallado de autos oscuro',
    industry: 'Automoción · servicios / automoción',
    description: 'Landing oscura para un taller de detallado de autos: hero con rayos de luz naranja y vídeo, tarjetas de servicios que se apilan al hacer scroll y reseñas en carrusel continuo.',
    languages: 'Inglés',
    stage: '#0a0a0a'
  },
  {
    id: 'detailing-studio',
    folder: 'library/templates/detailing-studio',
    name: 'Estudio de detallado premium',
    industry: 'Automoción · servicios / automoción',
    description: 'Landing premium para un estudio de detallado: vídeo a pantalla completa que avanza con el scroll, servicios marcados con puntos sobre un vídeo y comparativas antes/después.',
    languages: 'Inglés',
    stage: '#010101'
  },
  {
    id: 'sports-car-brand',
    folder: 'library/templates/sports-car-brand',
    name: 'Marca de deportivos con dos modelos en 3D',
    industry: 'Automoción · Automoción / producto de lujo',
    description: 'Landing de una marca de coches deportivos que presenta dos modelos en una escena 3D fija: al cambiar de coche, toda la página (cifras, colores, textos) cambia con él.',
    languages: 'Inglés',
    stage: '#e8e8e7'
  },
  {
    id: 'cleaning-company',
    folder: 'library/templates/cleaning-company',
    name: 'Empresa de limpieza estilo lienzo de diseño',
    industry: 'Hogar, construcción y oficios · servicios / limpieza',
    description: 'Landing clara y juguetona para una empresa de limpieza, con estética de herramienta de diseño: reglas en píxeles, marcos de selección, notas adhesivas, letra pixelada y comentarios manuscritos.',
    languages: 'Inglés',
    stage: '#f6fbf8'
  },
  {
    id: 'construction-company',
    folder: 'library/templates/construction-company',
    name: 'Empresa de construcción',
    industry: 'Hogar, construcción y oficios · servicios / construcción',
    description: 'Landing oscura para una constructora, con preloader en forma de casa que se abre en la foto del hero, tarjetas de cristal y acento amarillo de obra.',
    languages: 'Español',
    stage: '#f4b41a'
  },
  {
    id: 'hvac-management',
    folder: 'library/templates/hvac-management',
    name: 'Empresa de climatización',
    industry: 'Hogar, construcción y oficios · servicios / hogar',
    description: 'Landing clara y de confianza para una empresa de climatización: hero sobre foto a pantalla completa con avatares de clientes, servicios en tarjetas con imagen, proceso en línea de tiempo y llamada a la acción con teléfono.',
    languages: 'Inglés',
    stage: '#f8fafc'
  },
  {
    id: 'landscaping-services',
    folder: 'library/templates/landscaping-services',
    name: 'Paisajismo y jardinería',
    industry: 'Hogar, construcción y oficios · servicios / paisajismo y jardinería',
    description: 'Landing bilingüe (ES/EN) para una empresa de paisajismo, en tonos tierra, con hero a pantalla completa que se abre al cargar y servicios en tarjetas apiladas que se superponen con el scroll.',
    languages: 'Español e inglés',
    stage: '#1e2a22'
  },
  {
    id: 'plumber',
    folder: 'library/templates/plumber',
    name: 'Fontanería con panel de datos',
    industry: 'Hogar, construcción y oficios · servicios / fontanería y hogar',
    description: 'Landing clara para una empresa de fontanería o servicios del hogar: hero con tarjetas de métricas animadas tipo panel, servicios que se apilan al hacer scroll y precios cerrados por plan.',
    languages: 'Inglés',
    stage: '#ebeff5'
  },
  {
    id: 'plumbing-services',
    folder: 'library/templates/plumbing-services',
    name: 'Fontanería oscura con insignias de confianza',
    industry: 'Hogar, construcción y oficios · servicios / fontanería y hogar',
    description: 'Landing oscura para una empresa de fontanería o servicios del hogar: hero con foto a pantalla completa, avatares de clientes, botón de llamada y una cinta de insignias de confianza en movimiento.',
    languages: 'Inglés',
    stage: '#020617'
  },
  {
    id: 'roofing-company',
    folder: 'library/templates/roofing-company',
    name: 'Empresa de tejados oscura con métricas',
    industry: 'Hogar, construcción y oficios · servicios / tejados y construcción',
    description: 'Landing oscura para una empresa de tejados o reformas exteriores: hero con imagen grande y tarjetas de datos flotantes, cifras con foto, proceso en tres pasos y formulario de presupuesto.',
    languages: 'Inglés',
    stage: '#100f0e'
  },
  {
    id: 'roofing-contractor',
    folder: 'library/templates/roofing-contractor',
    name: 'Empresa de techos y cubiertas',
    industry: 'Hogar, construcción y oficios · servicios / construcción y hogar',
    description: 'Landing clara y sobria para un contratista de techos, con rejilla de líneas finas sobre toda la página, galería de proyectos que se desplaza en horizontal con el scroll y un wordmark gigante en verde lima en el pie.',
    languages: 'Inglés',
    stage: '#f5f5f5'
  },
  {
    id: 'solar-installer',
    folder: 'library/templates/solar-installer',
    name: 'Instalador de placas solares',
    industry: 'Hogar, construcción y oficios · servicios para el hogar / energía',
    description: 'Landing oscura con estética de levantamiento topográfico para un instalador de energía solar: terreno de puntos 3D que cambia con cada sección, coordenadas, retículas y etiquetas tipo HUD.',
    languages: 'Inglés',
    stage: '#08090d'
  },
  {
    id: 'boutique-hotel',
    folder: 'library/templates/boutique-hotel',
    name: 'Hotel boutique oscuro',
    industry: 'Hoteles y viajes · hostelería / turismo',
    description: 'Landing oscura y elegante para un hotel boutique: hero con vídeo que se expande y el nombre en serif gigante, habitaciones con ficha de camas, baños y superficie, y experiencias en tarjetas bento que se revelan al hacer scroll.',
    languages: 'Inglés',
    stage: '#0f1010'
  },
  {
    id: 'seaside-hotel',
    folder: 'library/templates/seaside-hotel',
    name: 'Hotel boutique junto al mar',
    industry: 'Hoteles y viajes · hotel',
    description: 'Landing de una página para un hotel pequeño o alquiler de villas, con intro animada en arco, escenas fijadas al scroll y sliders en bucle.',
    languages: 'Inglés',
    stage: '#340c24'
  },
  {
    id: 'travel-agency',
    folder: 'library/templates/travel-agency',
    name: 'Agencia de viajes de lujo',
    industry: 'Hoteles y viajes · viajes / turismo',
    description: 'Landing para una agencia de viajes a medida: hero con carrusel de fotos a pantalla completa y la marca en letras gigantes, servicios con imagen, proceso en tres pasos con móvil y destinos en tarjetas.',
    languages: 'Inglés',
    stage: '#f6f0e9'
  },
  {
    id: 'luxury-real-estate',
    folder: 'library/templates/luxury-real-estate',
    name: 'Inmobiliaria de lujo',
    industry: 'Inmobiliaria · inmobiliaria',
    description: 'Landing bilingüe (español / inglés) para una inmobiliaria de alto nivel, con un hero de vídeo que avanza al hacer scroll y títulos que se rellenan palabra a palabra.',
    languages: 'Español e inglés',
    stage: '#e6dccb'
  },
  {
    id: 'property-developer',
    folder: 'library/templates/property-developer',
    name: 'Promotora inmobiliaria con skyline 3D',
    industry: 'Inmobiliaria · inmobiliaria / promoción de obra nueva',
    description: 'Landing premium para lanzar una promoción de viviendas: hero con un skyline 3D entre nubes, tarjeta de vivienda destacada, galería con parallax y precios por tipo de vivienda.',
    languages: 'Inglés',
    stage: '#faf8f5'
  },
  {
    id: 'real-estate-agency',
    folder: 'library/templates/real-estate-agency',
    name: 'Agencia inmobiliaria con tarjetas inclinadas',
    industry: 'Inmobiliaria · inmobiliaria / agencia',
    description: 'Landing clara para una agencia inmobiliaria: hero con cinco tarjetas de fotos inclinadas, propiedades destacadas con precio, equipo directivo, cifras con iconos y reseñas con foto.',
    languages: 'Inglés',
    stage: '#f0f0f0'
  },
  {
    id: 'real-estate-broker',
    folder: 'library/templates/real-estate-broker',
    name: 'Agencia inmobiliaria local',
    industry: 'Inmobiliaria · inmobiliaria',
    description: 'Landing negra y amarilla para una inmobiliaria, con un edificio dibujado con miles de caracteres (arte ASCII animado) que se deshace y recompone con el scroll, secciones numeradas tipo índice y wordmark ajustado al ancho en el footer.',
    languages: 'Inglés',
    stage: '#000'
  },
  {
    id: 'creative-portfolio',
    folder: 'library/templates/creative-portfolio',
    name: 'Portafolio de creativo independiente',
    industry: 'Marca personal · portafolio / creativos independientes',
    description: 'Landing clara y minimalista para un diseñador o fotógrafo independiente, con pantalla de carga con su foto, proyectos apilados en tarjetas que se barajan al hacer scroll y un FAQ por pestañas.',
    languages: 'Inglés',
    stage: '#fff'
  },
  {
    id: 'designer-portfolio',
    folder: 'library/templates/designer-portfolio',
    name: 'Portafolio de diseñador',
    industry: 'Marca personal · portafolio / creativos',
    description: 'Portafolio personal claro y minimalista para un diseñador o creativo independiente, con proyectos en tarjetas abanicadas como una mano de cartas, navegación en píldora que se compacta y un nombre gigante difuminado en el pie.',
    languages: 'Inglés',
    stage: '#fafafa'
  },
  {
    id: 'music-artist',
    folder: 'library/templates/music-artist',
    name: 'Artista musical: retrato con lentes, eras y polaroids',
    industry: 'Marca personal · Música y entretenimiento — artista / marca personal',
    description: 'Landing oscura y editorial para un artista musical: retrato en el hero con reflejo en las gafas, discografía como cartas doradas sobre un campo y muro de polaroids.',
    languages: 'Inglés',
    stage: '#0f0d0a'
  },
  {
    id: 'personal-blogger',
    folder: 'library/templates/personal-blogger',
    name: 'Blog personal de viajes y estilo de vida',
    industry: 'Marca personal · personal / creadores de contenido',
    description: 'Web personal desenfadada para un blogger o creador, con una tarjeta-foto que se da la vuelta al hacer clic, pegatinas dispersas alrededor y un cursor que deja una línea suave.',
    languages: 'Inglés',
    stage: '#f5f3f0'
  },
  {
    id: 'pro-athlete',
    folder: 'library/templates/pro-athlete',
    name: 'Deportista profesional: cartas doradas, patrocinios y fundación',
    industry: 'Marca personal · Deporte — atleta / marca personal',
    description: 'Landing editorial para un deportista profesional: retrato en el hero con firma dibujada, momentos de su carrera como cartas coleccionables sobre un campo y escenario de patrocinadores.',
    languages: 'Inglés',
    stage: '#171220'
  },
  {
    id: 'racing-driver',
    folder: 'library/templates/racing-driver',
    name: 'Piloto de carreras',
    industry: 'Marca personal · Deporte / marca personal',
    description: 'Landing oscura para un piloto de automovilismo, con retrato 3D que reacciona al cursor, trazado de circuito que se dibuja con el scroll y un coche en 3D con recorrido aerodinámico.',
    languages: 'Inglés',
    stage: '#050505'
  },
  {
    id: 'clothing-brand',
    folder: 'library/templates/clothing-brand',
    name: 'Marca de ropa con tendedero',
    industry: 'Marcas y tiendas · tienda / moda',
    description: 'Tienda-landing para una marca de ropa: las prendas cuelgan con pinzas de una cuerda en el hero, y el catálogo permite cambiar el color de cada producto.',
    languages: 'Inglés',
    stage: '#fff'
  },
  {
    id: 'fine-jewellery',
    folder: 'library/templates/fine-jewellery',
    name: 'Joyería artesanal de anillos',
    industry: 'Marcas y tiendas · comercio / joyería y lujo',
    description: 'Landing cálida en tonos rosados para un taller de joyería, con un anillo en 3D que acompaña el scroll, serif clásica combinada con letra manuscrita y palabras "fantasma" en cursiva detrás de los titulares.',
    languages: 'Inglés',
    stage: '#f3d2cf'
  },
  {
    id: 'organic-store',
    folder: 'library/templates/organic-store',
    name: 'Tienda de productos orgánicos',
    industry: 'Marcas y tiendas · alimentación / tienda',
    description: 'Landing editorial en tonos tierra para una tienda de alimentos orgánicos con reparto: hero con un anillo de fotos que gira alrededor de una cifra, tabla de proveedores con vista previa al pasar el ratón y categorías en tarjetas que se apilan.',
    languages: 'Inglés',
    stage: '#f1ece5'
  },
  {
    id: 'perfume-brand',
    folder: 'library/templates/perfume-brand',
    name: 'Marca de perfumes con carrusel inclinado',
    industry: 'Marcas y tiendas · tienda / perfumería y cosmética',
    description: 'Landing clara y elegante para una marca de perfumes o cosmética: hero con carrusel de imágenes inclinadas, catálogo de productos con precio, vídeos verticales de la comunidad y un diario de artículos.',
    languages: 'Inglés',
    stage: '#f5f5f5'
  },
  {
    id: 'product-showcase',
    folder: 'library/templates/product-showcase',
    name: 'Escaparate de producto',
    industry: 'Marcas y tiendas · producto',
    description: 'Landing en inglés para presentar una línea de producto físico, con hero a pantalla completa, colección en tarjetas, carrusel de reseñas y un pie que se descubre bajo la página.',
    languages: 'Inglés',
    stage: '#cfd4d6'
  },
  {
    id: 'watch-maison',
    folder: 'library/templates/watch-maison',
    name: 'Relojería de lujo',
    industry: 'Marcas y tiendas · comercio / producto de lujo',
    description: 'Landing monocroma para un producto de lujo único (un reloj) con un modelo 3D que acompaña todo el scroll, tipografía gigante y un fondo que cambia de tono entre secciones claras y oscuras.',
    languages: 'Inglés',
    stage: '#ebebeb'
  },
  {
    id: 'brunch-cafe',
    folder: 'library/templates/brunch-cafe',
    name: 'Cafetería de brunch',
    industry: 'Restauración y bebidas · restauración / cafetería',
    description: 'Landing cálida y divertida para una cafetería de brunch, con el nombre en serif gigante sobre una ventana de foto, polaroids dispersas, pegatinas giratorias y reseñas en carrusel de vídeo.',
    languages: 'Inglés',
    stage: '#f8f5e9'
  },
  {
    id: 'burger-restaurant',
    folder: 'library/templates/burger-restaurant',
    name: 'Hamburguesería',
    industry: 'Restauración y bebidas · restaurante',
    description: 'Landing bilingüe para una hamburguesería: colores intensos, títulos gigantes con contorno, olas entre secciones y un avión de papel que recorre los locales al hacer scroll.',
    languages: 'Español e inglés',
    stage: '#ffd750'
  },
  {
    id: 'cafe-restaurant',
    folder: 'library/templates/cafe-restaurant',
    name: 'Cafetería-restaurante',
    industry: 'Restauración y bebidas · restaurante',
    description: 'Landing bilingüe para una cafetería: tonos crema y café, letra manuscrita gigante, vídeo enmarcado, fotos que siguen al cursor y menú filtrable por categorías.',
    languages: 'Español e inglés',
    stage: '#ede7db'
  },
  {
    id: 'craft-soda-brand',
    folder: 'library/templates/craft-soda-brand',
    name: 'Marca de refrescos artesanales',
    industry: 'Restauración y bebidas · producto / alimentación y bebidas',
    description: 'Landing de producto para una marca de bebidas con una lata 3D flotante que se puede girar, rejilla técnica de fondo, tipografía pixelada y tarjetas que se inclinan o se arrastran.',
    languages: 'Inglés',
    stage: '#e4e4e4'
  },
  {
    id: 'matcha-cafe',
    folder: 'library/templates/matcha-cafe',
    name: 'Cafetería con vaso 3D',
    industry: 'Restauración y bebidas · restaurante / cafetería',
    description: 'Landing para una cafetería o bar de bebidas: un vaso en 3D gira y acompaña al visitante por todas las secciones mientras hace scroll, sobre un fondo que cambia de tono.',
    languages: 'Inglés',
    stage: '#e8efe4'
  },
  {
    id: 'soda-brand',
    folder: 'library/templates/soda-brand',
    name: 'Marca de refrescos con lata 3D',
    industry: 'Restauración y bebidas · alimentación y bebidas / e-commerce de producto',
    description: 'Tienda de una página para una marca de bebidas en lata, con una lata 3D en tiempo real que acompaña el scroll, titulares serif gigantes que se destapan letra a letra y un selector de sabores que cambia el color de toda la sección.',
    languages: 'Inglés',
    stage: '#fcfcfc'
  },
  {
    id: 'specialty-coffee-shop',
    folder: 'library/templates/specialty-coffee-shop',
    name: 'Cafetería de especialidad cálida',
    industry: 'Restauración y bebidas · restaurante / cafetería',
    description: 'Landing para una cafetería o tostador: la marca en letra manuscrita gigante, vídeo con tarjetas flotantes, menú con filtros, un túnel de fotos al hacer scroll y club de suscripción de café.',
    languages: 'Inglés',
    stage: '#f5f0e8'
  },
  {
    id: 'vita-lenta',
    folder: 'library/templates/vita-lenta',
    name: 'Restaurante italiano editorial',
    industry: 'Restauración y bebidas · restauración / restaurante',
    description: 'Web elegante para un restaurante, con el nombre gigante en tipografía decorativa, menú organizado por momento del día y vídeo revelado a través de una máscara SVG.',
    languages: 'Inglés',
    stage: '#ece5d5'
  },
  {
    id: 'day-spa',
    folder: 'library/templates/day-spa',
    name: 'Spa y centro de bienestar',
    industry: 'Salud, belleza y bienestar · salud y bienestar / spa',
    description: 'Landing nocturna en violetas para un spa de día, con una escena 3D de esferas de cristal flotando sobre agua con ondas, tarjetas de cristal y anillos como motivo gráfico.',
    languages: 'Inglés',
    stage: '#040015'
  },
  {
    id: 'dental-practice',
    folder: 'library/templates/dental-practice',
    name: 'Clínica dental clara',
    industry: 'Salud, belleza y bienestar · salud / clínica',
    description: 'Landing luminosa para una clínica dental: fondo con aurora azul y resplandor en el horizonte, hero partido con cifras flotando sobre la foto y servicios en tarjetas con valoración y precio.',
    languages: 'Inglés',
    stage: '#f7f6f7'
  },
  {
    id: 'gym',
    folder: 'library/templates/gym',
    name: 'Gimnasio de fuerza',
    industry: 'Salud, belleza y bienestar · salud y deporte / gimnasio',
    description: 'Landing enérgica para un gimnasio o box de entrenamiento, con contador de entrada, cifras que giran como un odómetro en el hero y botones amarillos con la etiqueta que rueda al pasar el ratón.',
    languages: 'Inglés',
    stage: '#fff'
  },
  {
    id: 'med-spa',
    folder: 'library/templates/med-spa',
    name: 'Clínica de medicina estética',
    industry: 'Salud, belleza y bienestar · salud / belleza',
    description: 'Landing suave en tonos rosados para una clínica de medicina estética: hero a pantalla completa con cinta de ventajas en movimiento, tratamientos en tarjetas de cristal y galería de antes y después.',
    languages: 'Inglés',
    stage: '#fdf8f8'
  },
  {
    id: 'medical-clinic',
    folder: 'library/templates/medical-clinic',
    name: 'Clínica médica familiar',
    industry: 'Salud, belleza y bienestar · salud / clínica médica',
    description: 'Landing de estética científica para una clínica o consulta médica, con una doble hélice de ADN hecha de partículas en el hero, lecturas tipo instrumental (marcos con esquinas, odómetros, coordenadas) y wordmark ajustado al ancho en el footer.',
    languages: 'Inglés',
    stage: '#f2f5f5'
  },
  {
    id: 'natural-skincare',
    folder: 'library/templates/natural-skincare',
    name: 'Marca de cosmética natural',
    industry: 'Salud, belleza y bienestar · belleza / tienda',
    description: 'Landing cálida y minimalista para una marca de cosmética natural: nombre de la marca a todo el ancho en el hero, productos en tarjetas con precio y ventajas en un bento con pequeñas animaciones.',
    languages: 'Inglés',
    stage: '#fcf6ec'
  },
  {
    id: 'supplements-brand',
    folder: 'library/templates/supplements-brand',
    name: 'Marca de suplementos naturales',
    industry: 'Salud, belleza y bienestar · salud y bienestar / e-commerce de producto',
    description: 'Landing oscura con degradado verde para una marca de suplementos por suscripción, con una cápsula de cristal 3D que se abre al pasar el ratón o tocarla, cielo de partículas y wordmark gigante en el footer.',
    languages: 'Inglés',
    stage: '#010503'
  },
  {
    id: 'wellness-center',
    folder: 'library/templates/wellness-center',
    name: 'Centro de salud y bienestar',
    industry: 'Salud, belleza y bienestar · salud / bienestar',
    description: 'Landing para un centro de salud preventiva o bienestar: hero a pantalla completa con estadísticas en panel de vidrio, proceso en tres pasos fijados al hacer scroll, planes con uno destacado y blog.',
    languages: 'Inglés',
    stage: '#fafaf9'
  },
  {
    id: 'financial-planning',
    folder: 'library/templates/financial-planning',
    name: 'Asesoría financiera y patrimonial',
    industry: 'Servicios profesionales · servicios profesionales / finanzas',
    description: 'Landing oscura y técnica para un asesor financiero, con un campo de partículas animado en 3D en el hero, rejilla de líneas discontinuas y detalles en amarillo con etiquetas monoespaciadas.',
    languages: 'Inglés',
    stage: '#111214'
  },
  {
    id: 'law-firm',
    folder: 'library/templates/law-firm',
    name: 'Bufete de abogados',
    industry: 'Servicios profesionales · servicios profesionales / legal',
    description: 'Landing oscura y elegante para un despacho de abogados centrada en su fundador, que mezcla titulares condensados en mayúsculas con palabras en serif cursiva, fondo de curvas de nivel y trazos que se dibujan solos.',
    languages: 'Inglés',
    stage: '#0a0d14'
  },
  {
    id: 'management-consulting',
    folder: 'library/templates/management-consulting',
    name: 'Consultora de gestión',
    industry: 'Servicios profesionales · servicios profesionales / consultoría',
    description: 'Landing oscura y tecnológica para una consultora o firma de servicios B2B, con un campo de hilos de luz animado en 3D detrás del contenido, tarjetas de cristal esmerilado y un hero con un abanico de fotos en curva.',
    languages: 'Inglés',
    stage: '#090a0e'
  },
  {
    id: 'accounting-software',
    folder: 'library/templates/accounting-software',
    name: 'Software de contabilidad SaaS',
    industry: 'Tecnología y SaaS · software / SaaS (finanzas y contabilidad)',
    description: 'Landing oscura para un software de contabilidad o facturación, con un panel de control de la app recreado en código sobre un degradado fluido azul y maquetas de interfaz animadas en cada paso, caso de uso y bloque de soporte.',
    languages: 'Inglés',
    stage: '#0c0c0e'
  },
  {
    id: 'ai-company',
    folder: 'library/templates/ai-company',
    name: 'Empresa de inteligencia artificial',
    industry: 'Tecnología y SaaS · tecnología / SaaS e inteligencia artificial',
    description: 'Landing oscura y tecnológica para un producto de IA (agentes de atención al cliente), con un campo de miles de partículas en tiempo real que forma figuras, reacciona al ratón y cambia de forma con el scroll.',
    languages: 'Inglés',
    stage: '#020405'
  },
  {
    id: 'ai-consulting',
    folder: 'library/templates/ai-consulting',
    name: 'Consultora de automatización con IA',
    industry: 'Tecnología y SaaS · servicios profesionales / tecnología e IA',
    description: 'Landing oscura para una consultora que crea agentes y automatizaciones de IA, con un anillo de iconos de herramientas girando alrededor de una cifra y tarjetas bento animadas que simulan flujos y conversaciones con un agente.',
    languages: 'Inglés',
    stage: '#0a0a0a'
  },
  {
    id: 'ai-email-platform',
    folder: 'library/templates/ai-email-platform',
    name: 'Plataforma SaaS de email marketing con IA',
    industry: 'Tecnología y SaaS · software / SaaS',
    description: 'Landing clara y luminosa para un producto SaaS, con rayos de luz de fondo, tarjetas flotantes alrededor del titular y una captura grande del panel que se endereza en 3D al hacer scroll.',
    languages: 'Inglés',
    stage: '#f8fafc'
  },
  {
    id: 'ai-ugc-creator',
    folder: 'library/templates/ai-ugc-creator',
    name: 'Plataforma de anuncios UGC con IA',
    industry: 'Tecnología y SaaS · tecnología / SaaS',
    description: 'Landing clara para un producto SaaS de creación de vídeos: fondo con degradado y ruido, carrusel de vídeos verticales tipo creador en el hero y reseñas en columnas que se desplazan sin fin.',
    languages: 'Inglés',
    stage: 'snow'
  },
  {
    id: 'saas-platform',
    folder: 'library/templates/saas-platform',
    name: 'Landing SaaS oscura con aurora',
    industry: 'Tecnología y SaaS · tecnología / SaaS',
    description: 'Landing de una página para un producto de software: fondo oscuro con aurora y rayos de luz, titular que aparece palabra a palabra, cinta de logos de clientes y tarjetas bento animadas.',
    languages: 'Inglés',
    stage: '#050012'
  },
  {
    id: 'saas-product',
    folder: 'library/templates/saas-product',
    name: 'Producto SaaS con forma 3D',
    industry: 'Tecnología y SaaS · tecnología / SaaS',
    description: 'Landing oscura para un producto de software con una forma 3D brillante que gira y se encoge con el scroll, títulos que entran palabra a palabra y secciones numeradas al estilo índice.',
    languages: 'Inglés',
    stage: '#000'
  },
  {
    id: 'vip-transport',
    folder: 'library/templates/vip-transport',
    name: 'Transporte privado VIP',
    industry: 'Transporte · transporte',
    description: 'Landing de una página para una empresa de chofer privado o traslados, con un fondo de partículas WebGL que se transforma de coche a aparcamiento y a carretera al hacer scroll.',
    languages: 'Español',
    stage: '#08090a'
  }
];
