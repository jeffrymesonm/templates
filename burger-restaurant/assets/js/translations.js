/**
 * translations.js — Copy dictionary for the bilingual template.
 *
 * How it works:
 * - Spanish is the base language: static Spanish copy lives in index.html and is read from there.
 * - `en` holds the English version of every key used in index.html (data-i18n, data-i18n-*).
 * - `es` only holds strings that JavaScript writes at runtime (the menu button label),
 *   because those do not exist in the markup.
 * To edit copy: Spanish → index.html, English → `en` below. Keep the keys identical.
 * Big titles are split into lines (…title.1, …title.2): each key is one line on screen.
 */
window.SITE_TRANSLATIONS = {
  es: {
    'nav.menu': 'Menú',
    'nav.close': 'Cerrar',
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú'
  },

  en: {
    // Meta, navigation and shared
    'meta.title': 'La Plancha — Smash burgers in Miami',
    'meta.description': 'Smash burgers pressed to order on the flat top, hand-cut fries and shakes. Five locations across Miami.',
    'preloader.text': 'Firing up the flat top',
    'nav.skip': 'Skip to content',
    'nav.home': 'La Plancha, back to top',
    'nav.home.short': 'Home',
    'nav.language': 'Language',
    'nav.main': 'Main menu',
    'nav.footer': 'Footer',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.burgers': 'Burgers',
    'nav.locations': 'Spots',
    'nav.order': 'Order',
    'nav.contact': 'Contact',
    'menu.tagline': 'Smash burgers in Miami since 2019',
    'cta.order': 'Order now',

    // Hero
    'hero.label': 'House favorite',
    'hero.title.1': 'Double patty,',
    'hero.title.2': 'double cheese',
    'hero.lead': 'Two patties pressed paper-thin on a screaming-hot plancha, double American cheese, pickles and our house sauce on a buttered brioche bun.',

    // Messy on purpose
    'mess.label': 'Grab a napkin',
    'mess.title.1': 'Messy on',
    'mess.title.2': 'purpose',
    'mess.fact.1': '100% Angus beef',
    'mess.fact.2': 'Ground every morning',
    'mess.fact.3': 'Brioche buns',
    'mess.fact.4': 'Never frozen',
    'mess.fact.5': 'Hand-cut fries',
    'mess.fact.6': 'Secret house sauce',
    'mess.sticker': 'Flip & smash',
    'mess.alt': 'Cheeseburger with tomato, red onion and lettuce on a black background',

    // Grill
    'grill.label': 'Patties on the flat top',
    'grill.sticker': 'Straight off the plancha',

    // Loaded
    'loaded.label': 'Made to order',
    'loaded.title.1': 'Loaded with',
    'loaded.title.2': 'melted cheese',
    'loaded.title.3': 'and zero',
    'loaded.title.4': 'apologies',

    // Locations
    'spots.label': 'Takeout',
    'spots.title.1': 'Five grills',
    'spots.title.2': 'across Miami',
    'spots.lead': 'Every location cooks to order from noon till late. Order on the app and your bag will be waiting at the counter.',
    'spots.1.info': 'NW 2nd Ave · open till 3am',
    'spots.2.info': 'Brickell Ave · where it all started',
    'spots.3.info': 'Calle Ocho · big patio',
    'spots.4.info': 'Miracle Mile · drive-thru',
    'spots.5.info': 'NW 41st St · by the park',

    // Order
    'order.label': 'Starving?',
    'order.title.1': 'Hot and',
    'order.title.2': 'ready',
    'order.title.3': 'to go',
    'order.lead': 'Order ahead for pickup or delivery, or pull up a stool at the counter and watch the show. First app order? The fries are on us.',
    'order.alt': 'Triple bacon cheeseburger with melted cheese',

    // Footer
    'footer.rights': 'La Plancha. All rights reserved.',
    'footer.tagline': 'Smashed to order in Miami since 2019'
  }
};
