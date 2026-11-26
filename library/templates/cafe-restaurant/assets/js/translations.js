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
    'meta.title': 'Your Brand — Café and restaurant: your pitch',
    'meta.description': 'Describe your café in one or two sentences: what you serve, your hours and what guests can do (book, see the menu or plan an event).',
    'nav.skip': 'Skip to content',
    'nav.home': 'Your Brand, back to top',
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
    'hero.float1': 'Dish 1',
    'hero.float2': 'Dish 2',
    'hero.text': 'Introduce your business in two sentences: what you serve, at what time of day and why people come back. This text appears word by word under the brand.',
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
    'menu.text': 'Describe your menu in one sentence: what kind of dishes and drinks you offer and what makes them special for your guests.',
    'menu.filterLabel': 'Filter the menu',
    'menu.filter.all': 'All',
    'menu.filter.coffee': 'Coffee',
    'menu.filter.breakfast': 'Breakfast',
    'menu.filter.lunch': 'Lunch',
    'menu.filter.pastries': 'Pastries',
    'menu.item.espresso': 'Drink 1',
    'menu.item.cappuccino': 'Drink 2',
    'menu.item.icedLatte': 'Drink 3',
    'menu.item.avocadoToast': 'Breakfast 1',
    'menu.item.pancakes': 'Breakfast 2',
    'menu.item.eggsBenedict': 'Breakfast 3',
    'menu.item.pasta': 'Lunch 1',
    'menu.item.caesarSalad': 'Lunch 2',
    'menu.item.clubSandwich': 'Lunch 3',
    'menu.item.croissant': 'Pastry 1',
    'menu.item.cheesecake': 'Pastry 2',
    'menu.item.brownie': 'Pastry 3',
    'menu.status': 'Showing {count} menu items.',

    // Events
    'events.tag': 'Beyond the table',
    'events.title': 'Celebrate with us',
    'events.text': 'Sum up in one sentence the event services you offer and the kind of celebrations they are for.',
    'events.private.title': 'Private events',
    'events.private.text': 'Describe your private events service: the space you offer, for how many people and what kind of gatherings you host.',
    'events.private.alt': 'Photo of a private event or celebration at your place',
    'events.catering.title': 'Catering',
    'events.catering.text': 'Describe your catering service: what it includes, whether you set up and serve on site and how far ahead it must be booked.',
    'events.catering.alt': 'Photo of food trays prepared for an event',
    'events.menus.title': 'Custom menus',
    'events.menus.text': 'Explain how a custom menu is planned with you: the options, how to book and what you need to know from the client.',
    'events.menus.alt': 'Photo of a table set with the event menu',
    'events.cta': 'Get in touch',

    // Contact
    'contact.tag': 'Visit us',
    'contact.title': 'Talk to our team',
    'contact.hours': 'Opening days, 00:00 to 00:00',
    'contact.address': '123 Example Street, City',
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
