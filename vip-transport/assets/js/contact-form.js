/**
 * contact-form.js — Validation and sending for the booking form ([data-contact-form]).
 *
 * - Required: name, email and service. Phone is optional but must look like a phone number.
 *   Errors appear under each field and focus moves to the first invalid one.
 * - After the first attempt, fields are re-checked as the visitor types.
 * - Blocks double submits while a request is in flight.
 * - Sends to data-endpoint (e.g. Formspree) as FormData with a 15 s timeout. If data-endpoint is
 *   empty, opens the visitor's email app addressed to data-mailto, so no request is lost silently.
 * - Never logs what the visitor typed.
 */
(function () {
  'use strict';

  var form = document.querySelector('[data-contact-form]');
  if (!form) return;

  var REQUEST_TIMEOUT_MS = 15000;
  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var MESSAGES = {
    name: 'Escribe tu nombre (mínimo 2 letras).',
    email: 'Escribe un correo válido, por ejemplo nombre@correo.com.',
    phone: 'Revisa el teléfono: usa solo números, espacios, +, ( ) o guiones.',
    service: 'Elige el tipo de servicio.',
    sending: 'Enviando…',
    submit: 'Enviar solicitud',
    success: '¡Gracias! Recibimos tu solicitud y te escribiremos en unos minutos.',
    mailto: 'Abrimos tu app de correo con la solicitud lista para enviar.',
    failure: 'No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos por WhatsApp.',
    subject: 'Solicitud de reserva'
  };

  var submitButton = form.querySelector('[data-submit]');
  var submitLabel = form.querySelector('[data-submit-label]');
  var statusElement = form.querySelector('[data-form-status]');
  var isSubmitting = false;
  var hasTriedSubmit = false;

  /** Validation rules: each returns an error message, or '' when the trimmed value is valid. */
  var rules = {
    name: function (value) { return value.length >= 2 ? '' : MESSAGES.name; },
    email: function (value) { return EMAIL_PATTERN.test(value) ? '' : MESSAGES.email; },
    phone: function (value) {
      if (!value) return '';
      var digits = value.replace(/\D/g, '');
      return /^[0-9+()\-.\s]+$/.test(value) && digits.length >= 7 && digits.length <= 15 ? '' : MESSAGES.phone;
    },
    service: function (value) { return value ? '' : MESSAGES.service; }
  };

  /**
   * Shows or clears the error under one field.
   * @param {string} name - Field name.
   * @param {string} message - Error text, or '' to clear.
   * @returns {void}
   */
  function renderFieldError(name, message) {
    var field = form.elements[name];
    var output = form.querySelector('[data-error-for="' + name + '"]');
    if (!field || !output) return;
    if (message) {
      field.setAttribute('aria-invalid', 'true');
      field.setAttribute('aria-describedby', output.id || (output.id = 'error-' + name));
      output.textContent = message;
      output.hidden = false;
    } else {
      field.removeAttribute('aria-invalid');
      field.removeAttribute('aria-describedby');
      output.textContent = '';
      output.hidden = true;
    }
  }

  /**
   * Validates every rule and renders the results.
   * @returns {HTMLElement|null} First invalid field, or null when valid.
   */
  function validateAll() {
    var firstInvalid = null;
    Object.keys(rules).forEach(function (name) {
      var field = form.elements[name];
      var message = rules[name](field.value.trim());
      renderFieldError(name, message);
      if (message && !firstInvalid) firstInvalid = field;
    });
    return firstInvalid;
  }

  /**
   * Shows a status line under the button.
   * @param {string|null} message - Text, or null to hide.
   * @param {'success'|'error'} [tone] - Visual tone.
   * @returns {void}
   */
  function renderStatus(message, tone) {
    statusElement.classList.remove('form__status--success', 'form__status--error');
    statusElement.textContent = message || '';
    statusElement.hidden = !message;
    if (message) statusElement.classList.add('form__status--' + (tone || 'success'));
  }

  /**
   * Toggles the sending state of the submit button.
   * @param {boolean} sending - True while a request is in flight.
   * @returns {void}
   */
  function setSending(sending) {
    isSubmitting = sending;
    submitButton.disabled = sending;
    form.setAttribute('aria-busy', String(sending));
    submitLabel.textContent = sending ? MESSAGES.sending : MESSAGES.submit;
  }

  /**
   * Opens the visitor's email app with the request already written.
   * @param {string} recipient - Address from data-mailto.
   * @returns {void}
   */
  function openMailClient(recipient) {
    var value = function (name) { return form.elements[name].value.trim() || '-'; };
    var body = [
      'Nombre: ' + value('name'),
      'Correo: ' + value('email'),
      'Teléfono / WhatsApp: ' + value('phone'),
      'Recogida: ' + value('pickup'),
      'Vuelo: ' + value('flight'),
      'Servicio: ' + value('service')
    ].join('\n');
    window.location.href = 'mailto:' + encodeURIComponent(recipient) +
      '?subject=' + encodeURIComponent(MESSAGES.subject) +
      '&body=' + encodeURIComponent(body);
  }

  /**
   * Posts the form to the configured endpoint.
   * @param {string} endpoint - URL from data-endpoint.
   * @returns {Promise<void>} Resolves on a 2xx response; rejects otherwise.
   */
  function postForm(endpoint) {
    var controller = typeof AbortController === 'function' ? new AbortController() : null;
    var timer = controller ? window.setTimeout(function () { controller.abort(); }, REQUEST_TIMEOUT_MS) : null;
    return fetch(endpoint, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
      signal: controller ? controller.signal : undefined
    }).then(function (response) {
      if (!response.ok) throw new Error('Form endpoint answered HTTP ' + response.status);
    }).finally(function () {
      if (timer) window.clearTimeout(timer);
    });
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (isSubmitting) return;

    hasTriedSubmit = true;
    renderStatus(null);
    var firstInvalid = validateAll();
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    // Honeypot filled → a bot. Pretend success and send nothing.
    if (form.elements._gotcha && form.elements._gotcha.value) {
      form.reset();
      renderStatus(MESSAGES.success, 'success');
      return;
    }

    var endpoint = (form.getAttribute('data-endpoint') || '').trim();
    if (!endpoint) {
      openMailClient(form.getAttribute('data-mailto') || '');
      renderStatus(MESSAGES.mailto, 'success');
      return;
    }

    setSending(true);
    postForm(endpoint).then(function () {
      form.reset();
      hasTriedSubmit = false;
      renderStatus(MESSAGES.success, 'success');
    }).catch(function (error) {
      // Only the technical reason is logged, never the visitor's data.
      console.error('[contact-form] Sending failed:', error.message);
      renderStatus(MESSAGES.failure, 'error');
    }).finally(function () {
      setSending(false);
    });
  });

  /** Re-checks a field after the first submit attempt. */
  function recheck(event) {
    var name = event.target.name;
    if (!hasTriedSubmit || !rules[name]) return;
    renderFieldError(name, rules[name](event.target.value.trim()));
  }
  form.addEventListener('input', recheck);
  form.addEventListener('change', recheck);
})();
