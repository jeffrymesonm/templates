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
    'meta.title': 'Your Brand — Burgers made to order',
    'meta.description': 'Describe your burger place in one sentence: specialty, sides and number of locations. Shown in search results.',
    'preloader.text': 'Short loading message',
    'nav.skip': 'Skip to content',
    'nav.home': 'Your Brand, back to top',
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
    'menu.tagline': 'Short brand tagline since 20XX',
    'cta.order': 'Order now',

    // Hero
    'hero.label': 'Featured',
    'hero.title.1': 'Your star',
    'hero.title.2': 'dish here',
    'hero.lead': 'Describe your signature dish in two or three lines: main ingredients, how it is made and what makes it different. Keep a similar length.',

    // Mess (selling points)
    'mess.label': 'Short tag',
    'mess.title.1': 'Section',
    'mess.title.2': 'title',
    'mess.fact.1': 'Selling point 1',
    'mess.fact.2': 'Selling point 2',
    'mess.fact.3': 'Selling point 3',
    'mess.fact.4': 'Selling point 4',
    'mess.fact.5': 'Selling point 5',
    'mess.fact.6': 'Selling point 6',
    'mess.sticker': 'Short stamp',
    'mess.alt': 'Photo of your main product on a plain background',

    // Grill
    'grill.label': 'Kitchen photo',
    'grill.sticker': 'Short line on the photo',

    // Loaded
    'loaded.label': 'Section tag',
    'loaded.title.1': 'Your key',
    'loaded.title.2': 'message in',
    'loaded.title.3': 'four',
    'loaded.title.4': 'lines',

    // Locations
    'spots.label': 'Locations',
    'spots.title.1': 'Our five',
    'spots.title.2': 'locations',
    'spots.lead': 'Explain in two lines how your locations work: general hours, takeout service and how to order ahead.',
    'spots.1.info': '123 Example Street · closing time',
    'spots.2.info': '123 Example Street · spot detail',
    'spots.3.info': '123 Example Street · patio',
    'spots.4.info': '123 Example Street · extra service',
    'spots.5.info': '123 Example Street · landmark',

    // Order
    'order.label': 'Short question',
    'order.title.1': 'Call to',
    'order.title.2': 'action',
    'order.title.3': 'here',
    'order.lead': 'Explain how to place an order: pickup, delivery or dine-in. Add a promotion or a perk for the first order here.',
    'order.alt': 'Portrait photo of your best-selling product',

    // Footer
    'footer.rights': 'Your Brand. All rights reserved.',
    'footer.tagline': 'Short brand tagline · since 20XX'
  }
};
