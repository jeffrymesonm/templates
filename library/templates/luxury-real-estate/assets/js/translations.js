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
    'contact.success': '¡Gracias! Hemos recibido tu mensaje y te responderemos pronto.',
    'contact.invalid': 'Revisa los campos marcados: nombre, un correo válido y tu mensaje.',
    'contact.failed': 'No pudimos enviar el mensaje. Inténtalo de nuevo o escríbenos por correo.'
  },

  en: {
    // Meta, navigation and shared
    'meta.title': 'Your Brand — Luxury properties in your service area',
    'meta.description': 'Describe in one or two sentences which properties you offer, where you work and how you guide each client.',
    'nav.skip': 'Skip to content',
    'nav.home': 'Your Brand, back to top',
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
    'hero.tag': 'Your Brand · Luxury real estate',
    'hero.title': 'Your most important headline goes here',
    'hero.lead': 'Supporting line: the kind of properties you offer and where. What clients gain by choosing you.',

    // Statement
    'about.title': 'A short sentence that sums up your whole philosophy.',
    'about.alt': 'Representative photo of one of your featured properties',

    // Properties
    'properties.tag': 'Properties',
    'properties.title': 'Our villas',
    'properties.lead': 'A short text introducing your portfolio: the kind of homes you offer and what makes them special to clients.',
    'villa.1.name': 'Property 1',
    'villa.1.text': 'Short description: bedrooms, floor area and the features that make this home stand out.',
    'villa.1.alt': 'Exterior photo of property 1',
    'villa.2.name': 'Property 2',
    'villa.2.text': 'Highlight the outdoor spaces here: terraces, garden, pool or any private access.',
    'villa.2.alt': 'Exterior photo of property 2',
    'villa.3.name': 'Property 3',
    'villa.3.text': 'Describe the style of the property: materials, layout and the balance between classic and modern design.',
    'villa.3.alt': 'Exterior photo of property 3',
    'villa.4.name': 'Property 4',
    'villa.4.text': 'List the key amenities: bedrooms, home automation, living areas and orientation.',
    'villa.4.alt': 'Exterior photo of property 4',
    'villa.5.name': 'Property 5',
    'villa.5.text': 'Mention the extras that set it apart: cinema, spa, gym or a low-maintenance garden.',
    'villa.5.alt': 'Exterior photo of property 5',
    'villa.6.name': 'Property 6',
    'villa.6.text': 'Sum up what living here feels like: light, terraces, wine cellar, kitchen or a unique detail.',
    'villa.6.alt': 'Exterior photo of property 6',

    // Contact
    'contact.title': 'Let’s talk',
    'contact.name': 'Your name',
    'contact.email': 'Your email',
    'contact.message': 'Tell us about the home you are looking for…',
    'contact.send': 'Send message',
    'contact.sending': 'Sending…',
    'contact.success': 'Thank you! We have received your message and will reply soon.',
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
