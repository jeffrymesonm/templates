/**
 * contact-form.js — Validates and sends the contact form.
 *
 * - Checks name, a valid email and a message; invalid fields get aria-invalid and the first one
 *   receives focus. Errors clear as soon as the visitor edits the field.
 * - With data-endpoint="https://…" on the <form>, the data is POSTed there (FormData, expects a 2xx).
 *   Without an endpoint the template runs in demo mode: nothing is sent and the success
 *   message is shown after a short pause. See README → "Formulario".
 * - The status line is re-translated if the language changes while it is visible.
 * Requires i18n.js (window.SiteI18n) for messages; falls back to the keys' Spanish text without it.
 */
(function () {
  'use strict';

  var form = document.querySelector('[data-contact-form]');
  if (!form) return;

  var submit = form.querySelector('button[type="submit"]');
  var status = form.querySelector('[data-form-status]');
  var fields = Array.prototype.slice.call(form.querySelectorAll('input, textarea'));
  var endpoint = (form.getAttribute('data-endpoint') || '').trim();

  var DEMO_DELAY_MS = 900;
  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var FALLBACK = {
    'contact.sending': 'Enviando…',
    'contact.send': 'Enviar mensaje',
    'contact.success': '¡Gracias! Te responderemos en menos de 24 horas.',
    'contact.invalid': 'Revisa los campos marcados: nombre, un correo válido y tu mensaje.',
    'contact.failed': 'No pudimos enviar el mensaje. Inténtalo de nuevo o escríbenos por correo.'
  };

  var sending = false;
  var statusKey = '';

  /**
   * Translates a runtime message.
   * @param {string} key - Translation key.
   * @returns {string} Message in the current language.
   */
  function t(key) {
    return window.SiteI18n ? window.SiteI18n.t(key) : (FALLBACK[key] || key);
  }

  /**
   * Shows (or clears) the status line.
   * @param {string} key - Message key, or '' to clear.
   * @param {boolean} isError - Styles the line as an error.
   * @returns {void}
   */
  function setStatus(key, isError) {
    statusKey = key;
    status.textContent = key ? t(key) : '';
    status.classList.toggle('is-error', Boolean(key) && isError);
  }

  /**
   * Checks one field and flags it when invalid.
   * @param {HTMLInputElement|HTMLTextAreaElement} field - Field to check.
   * @returns {boolean} True when the field is valid.
   */
  function validateField(field) {
    var value = field.value.trim();
    var valid = value.length > 0 && (field.type !== 'email' || EMAIL_PATTERN.test(value));
    if (valid) field.removeAttribute('aria-invalid');
    else field.setAttribute('aria-invalid', 'true');
    return valid;
  }

  /**
   * Toggles the sending state of the button.
   * @param {boolean} isSending - True while the request is in flight.
   * @returns {void}
   */
  function setSending(isSending) {
    sending = isSending;
    submit.disabled = isSending;
    submit.textContent = t(isSending ? 'contact.sending' : 'contact.send');
  }

  /**
   * Sends the form to the configured endpoint, or simulates it in demo mode.
   * @returns {Promise<void>} Resolves on success, rejects on network or HTTP errors.
   */
  function send() {
    if (!endpoint) {
      return new Promise(function (resolve) { window.setTimeout(resolve, DEMO_DELAY_MS); });
    }
    return fetch(endpoint, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    }).then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status);
    });
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (sending) return;

    var invalid = fields.filter(function (field) { return !validateField(field); });
    if (invalid.length) {
      setStatus('contact.invalid', true);
      invalid[0].focus();
      return;
    }

    setStatus('', false);
    setSending(true);
    send().then(function () {
      form.reset();
      setStatus('contact.success', false);
    }).catch(function () {
      setStatus('contact.failed', true);
    }).then(function () {
      setSending(false);
    });
  });

  fields.forEach(function (field) {
    field.addEventListener('input', function () {
      if (field.getAttribute('aria-invalid') === 'true') validateField(field);
      if (statusKey === 'contact.success') setStatus('', false);
    });
  });

  window.addEventListener('i18n:change', function () {
    if (statusKey) status.textContent = t(statusKey);
    if (sending) submit.textContent = t('contact.sending');
  });
})();
