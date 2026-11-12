/**
 * translations.js — Copy dictionary for the bilingual template.
 *
 * How it works:
 * - Spanish is the base language: static Spanish copy lives in index.html and is read from there.
 * - `en` holds the English version of every key used in index.html (data-i18n, data-i18n-*).
 * - `es` only holds strings that JavaScript writes at runtime (menu button label, form messages),
 *   because those do not exist in the markup.
 * To edit copy: Spanish → index.html, English → `en` below. Keep the keys identical.
 */
window.SITE_TRANSLATIONS = {
  es: {
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',
    'contact.send': 'Enviar mensaje',
    'contact.sending': 'Enviando…',
    'contact.success': '¡Gracias! Te responderemos en menos de 24 horas.',
    'contact.invalid': 'Revisa los campos marcados: nombre, un correo válido y tu mensaje.',
    'contact.failed': 'No pudimos enviar el mensaje. Inténtalo de nuevo o escríbenos por correo.'
  },

  en: {
    // Meta, navigation and shared
    'meta.title': 'Albamar — Luxury seafront villas in Mallorca',
    'meta.description': 'Seafront villas and exclusive penthouses in Mallorca. We search, negotiate and hand you a home that is ready to live in.',
    'nav.skip': 'Skip to content',
    'nav.home': 'Albamar, back to top',
    'nav.language': 'Language',
    'nav.main': 'Main menu',
    'nav.footer': 'Footer',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.properties': 'Properties',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'cta.tour': 'Book a viewing',
    'cta.properties': 'View properties',

    // Hero
    'hero.tag': 'Albamar · Luxury real estate',
    'hero.title': 'Wake up every morning by the sea',
    'hero.lead': 'Seafront villas and exclusive penthouses in Mallorca. Your Mediterranean home, delivered ready to live in.',

    // Statement
    'about.title': 'Some places are not visited. They are lived in.',
    'about.alt': 'Contemporary single-storey villa with a wooden porch, garden and pool at sunset',

    // Properties
    'properties.tag': 'Properties',
    'properties.title': 'Our villas',
    'properties.lead': 'A curated selection of homes in the most sought-after corners of the island, made for slow living by the sea.',
    'villa.1.name': 'Villa Caliza',
    'villa.1.text': 'Five bedrooms, an infinity pool and landscaped terraces with open views across the bay.',
    'villa.1.alt': 'Two-storey modern villa with an infinity pool and a lit terrace',
    'villa.2.name': 'Casa Mirador',
    'villa.2.text': 'Floor-to-ceiling windows, a rooftop sun deck and a private path down to the cove.',
    'villa.2.alt': 'Contemporary house with large windows and a garden facing the sea',
    'villa.3.name': 'Villa Olivo',
    'villa.3.text': 'Inner courtyard, centuries-old olive trees and a heated pool: tradition and modern design in balance.',
    'villa.3.alt': 'Stone and timber villa with a pool and terrace at sunset',
    'villa.4.name': 'Residencia Arena',
    'villa.4.text': 'Four bedrooms, full home automation and an outdoor lounge facing the sunset.',
    'villa.4.alt': 'Designer residence with a living room that opens onto the pool',
    'villa.5.name': 'Villa Brisa',
    'villa.5.text': 'White volumes, a private cinema, a spa suite and a low-water Mediterranean garden.',
    'villa.5.alt': 'Minimalist white villa with a Mediterranean garden and pool',
    'villa.6.name': 'Casa Ámbar',
    'villa.6.text': 'West-facing: terraces made for golden hour, a private wine cellar and an open chef’s kitchen.',
    'villa.6.alt': 'House with warm terraces, palm trees and a pool at golden hour',

    // Contact
    'contact.title': 'Let’s talk',
    'contact.name': 'Your name',
    'contact.email': 'Your email',
    'contact.message': 'Tell us about the home you are looking for…',
    'contact.send': 'Send message',
    'contact.sending': 'Sending…',
    'contact.success': 'Thank you! We will reply within 24 hours.',
    'contact.invalid': 'Please check the highlighted fields: name, a valid email and your message.',
    'contact.failed': 'We could not send your message. Please try again or email us.',
    'contact.note': 'Prefer to talk? Book a private viewing.',
    'contact.emailUs': 'Email us',

    // Footer
    'footer.properties': 'Properties',
    'footer.villas': 'Villas',
    'footer.apartments': 'Apartments',
    'footer.penthouses': 'Penthouses',
    'footer.newBuild': 'New developments',
    'footer.services': 'Services',
    'footer.search': 'Property search',
    'footer.legal': 'Legal advice',
    'footer.interior': 'Interior design',
    'footer.management': 'Property management',
    'footer.areas': 'Areas',
    'footer.company': 'Company',
    'footer.aboutUs': 'About us',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms of service',
    'footer.rights': 'All rights reserved.'
  }
};
