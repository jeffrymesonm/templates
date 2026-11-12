/**
 * translations.js — Copy dictionary for the bilingual template.
 *
 * How it works:
 * - Spanish is the base language: static Spanish copy lives in index.html and is read from there.
 * - `en` holds the English version of every key used in index.html (data-i18n, data-i18n-*).
 * - `es` only holds strings that JavaScript writes at runtime (menu labels, form messages),
 *   because those do not exist in the markup.
 * To edit copy: Spanish → index.html, English → `en` below. Keep the keys identical.
 */
window.SITE_TRANSLATIONS = {
  es: {
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',
    'form.submit': 'Enviar mensaje',
    'form.sending': 'Enviando…',
    'form.error.name': 'Escribe tu nombre (mínimo 2 letras).',
    'form.error.email': 'Escribe un correo válido, por ejemplo nombre@correo.com.',
    'form.error.phone': 'Escribe un teléfono válido (7 a 15 dígitos) o deja el campo vacío.',
    'form.error.message': 'Cuéntanos un poco más sobre tu proyecto (mínimo 10 caracteres).',
    'form.success': '¡Mensaje enviado! Te responderemos en menos de 24 horas.',
    'form.failure': 'No se pudo enviar el mensaje. Revisa tu conexión e inténtalo de nuevo, o llámanos al (305) 555-0123.',
    'form.mailto': 'Abrimos tu aplicación de correo con el mensaje listo. Solo falta enviarlo.',
    'form.mail.subject': 'Solicitud de cotización',
    'form.mail.name': 'Nombre',
    'form.mail.email': 'Correo',
    'form.mail.phone': 'Teléfono',
    'form.mail.message': 'Proyecto'
  },

  en: {
    // Meta and navigation
    'meta.title': 'Laurel — Landscape design, installation & garden care',
    'meta.description': 'Landscape design, installation and year-round garden care in Miami. Request your free quote.',
    'nav.skip': 'Skip to content',
    'nav.home': 'Laurel, back to top',
    'nav.language': 'Language',
    'nav.call': 'Call now',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.main': 'Main menu',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.team': 'Team',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'cta.quote': 'Get a free quote',

    // Hero
    'hero.badge': 'Now booking spring projects',
    'hero.title': 'Outdoor spaces that invite you to stay.',
    'hero.lead': 'We design, build and care for gardens that look better every season.',
    'hero.secondary': 'Our services',
    'hero.rating': '5 out of 5 stars',
    'hero.review': 'Laurel turned our backyard into everyone’s favorite room. On time, detail-oriented and genuinely talented.',
    'hero.reviewRole': 'Homeowner',

    // About
    'about.tag': 'About Laurel',
    'about.quote': 'For more than 15 years we’ve shaped outdoor spaces families love — designed with care and built to last.',
    'about.role': 'Lead Designer',
    'about.alt': 'String trimmer edging the lawn',

    // Services
    'services.tag': 'Our Services',
    'services.title': 'What We Do',
    'services.lead': 'From the first sketch to ongoing care, we handle every detail of your landscape.',
    'services.1.title': 'Landscape Design',
    'services.1.desc': 'Tailored designs that suit your home’s architecture and the way you live.',
    'services.1.alt': 'Designed backyard with a pool, patio and plantings',
    'services.2.title': 'Hardscape & Softscape',
    'services.2.desc': 'Patios, walkways, walls, plants and trees — we install it all, start to finish.',
    'services.2.alt': 'Curved stone path between clipped shrubs',
    'services.3.title': 'Lawn & Garden Care',
    'services.3.desc': 'Maintenance plans that keep your property looking its best all year.',
    'services.3.alt': 'Gardener trimming a hedge with shears',
    'services.4.title': 'Smart Irrigation',
    'services.4.desc': 'Efficient irrigation that keeps your landscape healthy while saving water.',
    'services.4.alt': 'Sprinklers watering a lawn',

    // Why us
    'why.tag': 'Why Us',
    'why.title': 'Why Choose Laurel',
    'why.lead': 'What makes us different.',
    'why.1.title': 'Expert Craftsmanship',
    'why.1.desc': 'Years of hands-on experience in every detail.',
    'why.2.title': 'Eco-Friendly Approach',
    'why.2.desc': 'Native plants and water-wise design.',
    'why.3.title': 'Full-Service Care',
    'why.3.desc': 'One crew from first sketch to final trim.',

    // Team
    'team.tag': 'Our Team',
    'team.title': 'Meet the Experts',
    'team.lead': 'The people behind every beautiful landscape.',
    'team.1.role': 'Lead Designer',
    'team.1.alt': 'Portrait of Daniel Ortega',
    'team.2.role': 'Horticulturist',
    'team.2.alt': 'Portrait of Lucía Fernández',
    'team.3.role': 'Project Manager',
    'team.3.alt': 'Portrait of Marcos Rivera',

    // Trust
    'trust.tag': 'Trusted by Homeowners',
    'trust.title': 'More than 500 families trust Laurel to transform and care for their outdoor spaces.',
    'trust.avatars': 'Some of our clients',

    // FAQ
    'faq.tag': 'FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.lead': 'Everything you need to know before we start.',
    'faq.1.q': 'How long does a typical project take?',
    'faq.1.a': 'Most residential projects take one to three weeks, depending on scope. You’ll get a detailed timeline during your consultation.',
    'faq.2.q': 'Is the consultation free?',
    'faq.2.a': 'Yes. We visit your property, listen to your ideas and give you a detailed estimate — no obligation.',
    'faq.3.q': 'What areas do you serve?',
    'faq.3.a': 'We serve Miami and nearby communities within a 50-mile radius. Reach out to confirm your area.',
    'faq.4.q': 'Do you offer ongoing maintenance?',
    'faq.4.a': 'Yes — weekly, biweekly and monthly plans covering mowing, pruning, fertilizing and seasonal cleanups.',
    'faq.5.q': 'Are your practices eco-friendly?',
    'faq.5.a': 'Sustainability guides everything we do: native plants, organic fertilizers and smart irrigation.',
    'faq.6.q': 'Do you handle permits and HOA approvals?',
    'faq.6.a': 'Yes. We take care of the required permits and work directly with your HOA so your project gets approved smoothly.',

    // Contact and form
    'contact.tag': 'Contact',
    'contact.title': 'Get Your Free Quote',
    'contact.lead': 'Tell us about your project and we’ll reply within 24 hours.',
    'contact.alt': 'Garden with a lawn, shrubs and a glass conservatory',
    'form.name': 'Full name',
    'form.email': 'Email address',
    'form.phone': 'Phone number (optional)',
    'form.message': 'Tell us about your project',
    'form.messagePlaceholder': 'Tell us about your project…',
    'form.submit': 'Send message',
    'form.sending': 'Sending…',
    'form.error.name': 'Enter your name (at least 2 letters).',
    'form.error.email': 'Enter a valid email, like name@email.com.',
    'form.error.phone': 'Enter a valid phone number (7–15 digits) or leave it blank.',
    'form.error.message': 'Tell us a bit more about your project (at least 10 characters).',
    'form.success': 'Message sent! We’ll reply within 24 hours.',
    'form.failure': 'The message couldn’t be sent. Check your connection and try again, or call us at (305) 555-0123.',
    'form.mailto': 'We opened your email app with the message ready. Just hit send.',
    'form.mail.subject': 'Quote request',
    'form.mail.name': 'Name',
    'form.mail.email': 'Email',
    'form.mail.phone': 'Phone',
    'form.mail.message': 'Project',

    // Footer
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.legal': 'Laurel Landscapes'
  }
};
