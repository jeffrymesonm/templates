/**
 * translations.js — Copy dictionary for the bilingual template.
 *
 * How it works:
 * - Spanish is the base language: static Spanish copy lives in index.html and is read from there.
 * - `en` holds the English version of every key used in index.html (data-i18n, data-i18n-*).
 * - `es` only holds strings that JavaScript writes at runtime (menu button label, filter status),
 *   because those do not exist in the markup.
 * To edit copy: Spanish → index.html, English → `en` below. Keep the keys identical.
 * "{count}" in a runtime string is replaced by a number.
 */
window.SITE_TRANSLATIONS = {
  es: {
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',
    'menu.status': 'Mostrando {count} opciones del menú.'
  },

  en: {
    // Meta, navigation and shared
    'meta.title': 'Casa Canela — Specialty coffee and home-style cooking',
    'meta.description': 'Specialty coffee, all-day breakfast and home-made lunches. Book a table, browse the menu or host your event with us.',
    'nav.skip': 'Skip to content',
    'nav.home': 'Casa Canela, back to top',
    'nav.language': 'Language',
    'nav.cta': 'Book',
    'nav.main': 'Main menu',
    'nav.menu': 'Menu',
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    'nav.footer': 'Footer',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',

    // Hero
    'hero.float1': 'Iced latte',
    'hero.float2': 'Pancakes',
    'hero.text': 'Specialty coffee, breakfast served all day and lunches made the way they are at home. A warm table to start your morning or linger after the meal.',
    'hero.book': 'Book a table',
    'hero.menu': 'See the menu',

    // Mood (photo trail)
    'mood.tagPointer': 'Move your cursor!',
    'mood.tagTouch': 'Tap the screen!',
    'mood.title': 'What are you craving today?',
    'mood.menu': 'See the menu',
    'mood.find': 'Find us',

    // Menu
    'menu.tag': 'What we serve',
    'menu.title': 'Explore our menu',
    'menu.text': 'From the first espresso of the morning to the afternoon dessert, everything is made to order with fresh ingredients.',
    'menu.filterLabel': 'Filter the menu',
    'menu.filter.all': 'All',
    'menu.filter.coffee': 'Coffee',
    'menu.filter.breakfast': 'Breakfast',
    'menu.filter.lunch': 'Lunch',
    'menu.filter.pastries': 'Pastries',
    'menu.item.espresso': 'Espresso',
    'menu.item.cappuccino': 'Cappuccino',
    'menu.item.icedLatte': 'Iced latte',
    'menu.item.avocadoToast': 'Avocado toast',
    'menu.item.pancakes': 'Pancakes',
    'menu.item.eggsBenedict': 'Eggs Benedict',
    'menu.item.pasta': 'Fresh pasta',
    'menu.item.caesarSalad': 'Caesar salad',
    'menu.item.clubSandwich': 'Club sandwich',
    'menu.item.croissant': 'Croissant',
    'menu.item.cheesecake': 'Cheesecake',
    'menu.item.brownie': 'Brownie',
    'menu.status': 'Showing {count} menu items.',

    // Events
    'events.tag': 'Beyond the table',
    'events.title': 'Celebrate with us',
    'events.text': 'From intimate gatherings to full catering, we bring the taste of home wherever you need it.',
    'events.private.title': 'Private events',
    'events.private.text': 'Book our room for birthdays, work meetings or any excuse to get together. Good food and a good vibe included.',
    'events.private.alt': 'Friends celebrating a birthday with a candle-lit cake at a café table',
    'events.catering.title': 'Catering',
    'events.catering.text': 'We take care of the coffee, bites and desserts for your event. We set up, serve and make sure nobody leaves hungry.',
    'events.catering.alt': 'Trays of sandwiches, pastries and grapes set out for an event',
    'events.menus.title': 'Custom menus',
    'events.menus.text': 'Plan a menu for your occasion with our team, from a coffee bar to a full brunch for your guests.',
    'events.menus.alt': 'A place setting with a printed menu card and eucalyptus leaves',
    'events.cta': 'Get in touch',

    // Contact
    'contact.tag': 'Visit us',
    'contact.title': 'Talk to our team',
    'contact.hours': 'Open every day, 7:00 a.m. to 10:00 p.m.',
    'contact.address': '24 Las Flores Street, Downtown',
    'contact.email': 'Email',
    'contact.call': 'Call',

    // Footer
    'footer.menu': 'Menu',
    'footer.coffee': 'Coffee',
    'footer.pastries': 'Pastries',
    'footer.find': 'Find us',
    'footer.hours': 'Opening hours',
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.events': 'Events',
    'footer.catering': 'Catering'
  }
};
