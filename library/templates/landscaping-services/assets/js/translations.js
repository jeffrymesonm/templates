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
    'form.error.email': 'Escribe un correo válido, por ejemplo nombre@example.com.',
    'form.error.phone': 'Escribe un teléfono válido (7 a 15 dígitos) o deja el campo vacío.',
    'form.error.message': 'Cuéntanos un poco más sobre tu proyecto (mínimo 10 caracteres).',
    'form.success': '¡Mensaje enviado! Te responderemos lo antes posible.',
    'form.failure': 'No se pudo enviar el mensaje. Revisa tu conexión e inténtalo de nuevo, o llámanos al +00 000 000 0000.',
    'form.mailto': 'Abrimos tu aplicación de correo con el mensaje listo. Solo falta enviarlo.',
    'form.mail.subject': 'Solicitud de cotización',
    'form.mail.name': 'Nombre',
    'form.mail.email': 'Correo',
    'form.mail.phone': 'Teléfono',
    'form.mail.message': 'Proyecto'
  },

  en: {
    // Meta and navigation
    'meta.title': 'Your Brand — Landscaping: service 1, service 2 and service 3',
    'meta.description': 'Short description for search engines: which landscaping services you offer and where. Invite people to request a quote.',
    'nav.skip': 'Skip to content',
    'nav.home': 'Your Brand, back to top',
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
    'cta.quote': 'Get a quote',

    // Hero
    'hero.badge': 'Short notice: news or current availability',
    'hero.title': 'Your headline: your main promise here.',
    'hero.lead': 'Subheading: one sentence on what you do, who it is for and what they get.',
    'hero.secondary': 'Our services',
    'hero.rating': '5 out of 5 stars',
    'hero.review': 'Featured client review: one or two real sentences about your work, your service and the result.',
    'hero.reviewRole': 'Homeowner',

    // About
    'about.tag': 'About Your Brand',
    'about.quote': 'Introduction quote: who you are, how long you’ve worked and what drives you, in one or two sentences like this.',
    'about.role': 'Lead Designer',
    'about.alt': 'Photo of your team working in a garden',

    // Services
    'services.tag': 'Our Services',
    'services.title': 'What We Do',
    'services.lead': 'From the first sketch to ongoing care, we handle every detail of your landscape.',
    'services.1.title': 'Landscape Design',
    'services.1.desc': 'Describe this service in one sentence: what it includes and who it is for.',
    'services.1.alt': 'Photo of service 1: landscape design',
    'services.2.title': 'Hardscape & Softscape',
    'services.2.desc': 'Describe this service in one sentence: which jobs it covers from start to finish.',
    'services.2.alt': 'Photo of service 2: hardscape and softscape',
    'services.3.title': 'Lawn & Garden Care',
    'services.3.desc': 'Describe this service in one sentence: how often and what it includes.',
    'services.3.alt': 'Photo of service 3: lawn and garden care',
    'services.4.title': 'Smart Irrigation',
    'services.4.desc': 'Describe this service in one sentence: how it works and what it improves.',
    'services.4.alt': 'Photo of service 4: irrigation',

    // Why us
    'why.tag': 'Why Us',
    'why.title': 'Why Choose Your Brand',
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
    'team.1.alt': 'Portrait of Full Name',
    'team.2.role': 'Horticulturist',
    'team.2.alt': 'Portrait of Full Name',
    'team.3.role': 'Project Manager',
    'team.3.alt': 'Portrait of Full Name',

    // Trust
    'trust.tag': 'Trusted by Homeowners',
    'trust.title': 'More than 100 families trust Your Brand to transform and care for their outdoor spaces.',
    'trust.avatars': 'Some of our clients',

    // FAQ
    'faq.tag': 'FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.lead': 'Everything you need to know before we start.',
    'faq.1.q': 'How long does a typical project take?',
    'faq.1.a': 'Answer: give a typical timeframe depending on project size and say when the client gets a detailed schedule.',
    'faq.2.q': 'Is the consultation free?',
    'faq.2.a': 'Answer: explain whether the first visit has a cost, what it includes and what the client gets after.',
    'faq.3.q': 'What areas do you serve?',
    'faq.3.a': 'Answer: name the city or area you cover and how to confirm whether an address is included.',
    'faq.4.q': 'Do you offer ongoing maintenance?',
    'faq.4.a': 'Answer: describe your maintenance plans, how often the service runs and which tasks it includes.',
    'faq.5.q': 'Are your practices eco-friendly?',
    'faq.5.a': 'Answer: share which sustainable practices you use in your projects and why they matter to you.',
    'faq.6.q': 'Do you handle permits and approvals?',
    'faq.6.a': 'Answer: explain whether you handle the required permits and how you work with the building or community board.',

    // Contact and form
    'contact.tag': 'Contact',
    'contact.title': 'Get Your Quote',
    'contact.lead': 'Tell us about your project and we’ll reply as soon as possible.',
    'contact.alt': 'Contact photo: a garden finished by your team',
    'form.name': 'Full name',
    'form.email': 'Email address',
    'form.phone': 'Phone number (optional)',
    'form.message': 'Tell us about your project',
    'form.messagePlaceholder': 'Tell us about your project…',
    'form.submit': 'Send message',
    'form.sending': 'Sending…',
    'form.error.name': 'Enter your name (at least 2 letters).',
    'form.error.email': 'Enter a valid email, like name@example.com.',
    'form.error.phone': 'Enter a valid phone number (7–15 digits) or leave it blank.',
    'form.error.message': 'Tell us a bit more about your project (at least 10 characters).',
    'form.success': 'Message sent! We’ll reply as soon as possible.',
    'form.failure': 'The message couldn’t be sent. Check your connection and try again, or call us at +00 000 000 0000.',
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
    'footer.legal': 'Your Brand'
  }
};
