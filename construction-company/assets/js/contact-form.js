/**
 * contact-form.js — Validation and sending for the quote form ([data-contact-form]).
 *
 * - Required: name, email and a short description of the project. Phone is optional but,
 *   if written, must look like a phone number. Errors appear under each field and focus
 *   moves to the first invalid one; after the first attempt fields are re-checked as you type.
 * - Blocks double submits while a request is in flight. The button is marked aria-disabled
 *   (not disabled) so keyboard focus stays on it.
 * - Sends to data-endpoint (e.g. Formspree) as FormData with a 15 s timeout. If data-endpoint is
 *   empty, opens the visitor's email app addressed to data-mailto and also shows that address,
 *   in case no email app is set up.
 * - A filled honeypot (_gotcha) is treated as a bot: nothing is sent.
 * - The status line is an always-present live region, so screen readers announce each message.
 * - Never logs what the visitor typed.
 */
(function () {
  'use strict';

  var form = document.querySelector('[data-contact-form]');
  if (!form) return;

  var REQUEST_TIMEOUT_MS = 15000;
  var MIN_MESSAGE_LENGTH = 10;
  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var MESSAGES = {
    name: 'Escribe tu nombre (mínimo 2 letras).',
    email: 'Escribe un correo válido, por ejemplo nombre@correo.com.',
    phone: 'Revisa el teléfono: usa solo números, espacios, +, ( ) o guiones.',
    message: 'Cuéntanos un poco sobre tu proyecto (mínimo 10 caracteres).',
    sending: 'Enviando…',
    submit: 'Solicitar presupuesto',
    success: '¡Gracias! Recibimos tu solicitud y te contactaremos en menos de 24 horas.',
    mailto: 'Abrimos tu app de correo con la solicitud lista. Si no se abrió, escríbenos a ',
    failure: 'No pudimos enviar tu solicitud. Inténtalo de nuevo o llámanos.',
    subject: 'Solicitud de presupuesto'
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
    message: function (value) { return value.length >= MIN_MESSAGE_LENGTH ? '' : MESSAGES.message; }
  };

  /**
   * Trimmed value of a form field.
   * @param {string} name - Field name.
   * @returns {string} The value without surrounding spaces ('' if the field does not exist).
   */
  function fieldValue(name) {
    var field = form.elements[name];
    return field ? field.value.trim() : '';
  }

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
      if (!output.id) output.id = 'error-' + name;
      field.setAttribute('aria-invalid', 'true');
      field.setAttribute('aria-describedby', output.id);
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
   * @returns {HTMLElement|null} First invalid field, or null when everything is valid.
   */
  function validateAll() {
    var firstInvalid = null;
    Object.keys(rules).forEach(function (name) {
      var field = form.elements[name];
      if (!field) return;
      var message = rules[name](field.value.trim());
      renderFieldError(name, message);
      if (message && !firstInvalid) firstInvalid = field;
    });
    return firstInvalid;
  }

  /**
   * Writes the status line under the button (empty means no message).
   * @param {string|null} message - Text, or null to clear the line.
   * @param {'success'|'error'} [tone] - Visual tone.
   * @param {string} [email] - Address appended as a mailto link after the text.
   * @returns {void}
   */
  function renderStatus(message, tone, email) {
    if (!statusElement) return;
    statusElement.classList.remove('form__status--success', 'form__status--error');
    statusElement.textContent = message || '';
    if (!message) return;
    statusElement.classList.add('form__status--' + (tone || 'success'));
    if (email) {
      var link = document.createElement('a');
      link.href = 'mailto:' + email;
      link.textContent = email;
      statusElement.appendChild(link);
      statusElement.appendChild(document.createTextNode('.'));
    }
  }

  /**
   * Toggles the sending state of the submit button.
   * @param {boolean} sending - True while a request is in flight.
   * @returns {void}
   */
  function setSending(sending) {
    isSubmitting = sending;
    if (submitButton) {
      if (sending) {
        submitButton.setAttribute('aria-disabled', 'true');
      } else {
        submitButton.removeAttribute('aria-disabled');
      }
    }
    form.setAttribute('aria-busy', String(sending));
    if (submitLabel) submitLabel.textContent = sending ? MESSAGES.sending : MESSAGES.submit;
  }

  /**
   * Opens the visitor's email app with the request already written.
   * @param {string} recipient - Address from data-mailto.
   * @returns {void}
   */
  function openMailClient(recipient) {
    var body = [
      'Nombre: ' + (fieldValue('name') || '-'),
      'Correo: ' + (fieldValue('email') || '-'),
      'Teléfono: ' + (fieldValue('phone') || '-'),
      '',
      'Proyecto:',
      fieldValue('message') || '-'
    ].join('\n');
    window.location.href = 'mailto:' + encodeURIComponent(recipient) +
      '?subject=' + encodeURIComponent(MESSAGES.subject) +
      '&body=' + encodeURIComponent(body);
  }

  /**
   * Posts the form to the configured endpoint.
   * @param {string} endpoint - URL from data-endpoint.
   * @returns {Promise<void>} Resolves on a 2xx response; rejects otherwise (or on timeout).
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

  /**
   * Handles a submit: validates, filters bots, then sends (endpoint) or opens the email app.
   * @param {SubmitEvent} event - The form's submit event.
   * @returns {void}
   */
  function onSubmit(event) {
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
      var recipient = (form.getAttribute('data-mailto') || '').trim();
      openMailClient(recipient);
      renderStatus(MESSAGES.mailto, 'success', recipient);
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
  }

  /**
   * Re-checks a field after the first submit attempt.
   * @param {Event} event - input/change event from a form field.
   * @returns {void}
   */
  function recheck(event) {
    var name = event.target.name;
    if (!hasTriedSubmit || !rules[name]) return;
    renderFieldError(name, rules[name](event.target.value.trim()));
  }

  form.addEventListener('submit', onSubmit);
  form.addEventListener('input', recheck);
  form.addEventListener('change', recheck);
})();
