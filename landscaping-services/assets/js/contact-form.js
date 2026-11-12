/**
 * contact-form.js — Validation and sending for the quote request form.
 *
 * - Validates name, email, optional phone and message with bilingual messages (via SiteI18n),
 *   shows them under each field and focuses the first invalid one.
 * - Blocks double submits while a request is in flight.
 * - Sends to data-endpoint (e.g. Formspree) as FormData with a 15 s timeout.
 *   If data-endpoint is empty, opens the visitor's email app addressed to data-mailto instead,
 *   so no request is ever lost silently.
 * - Never logs what the visitor typed.
 */
(function () {
  'use strict';

  var form = document.querySelector('[data-contact-form]');
  if (!form) return;

  var REQUEST_TIMEOUT_MS = 15000;
  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  var submitButton = form.querySelector('[data-submit]');
  var statusElement = form.querySelector('[data-form-status]');
  var isSubmitting = false;
  var hasTriedSubmit = false;

  /** Current error key per field name ('' when valid), used to re-translate on language change. */
  var errors = {};
  /** Key of the status message on screen, or null. */
  var statusKey = null;

  /**
   * Translates a key with SiteI18n, or returns the key when i18n is unavailable.
   * @param {string} key - Translation key.
   * @returns {string} Text in the current language.
   */
  function t(key) {
    return window.SiteI18n ? window.SiteI18n.t(key) : key;
  }

  /**
   * Validation rules: each returns an error key, or '' when the value is valid.
   * Inputs are trimmed before checking.
   */
  var rules = {
    name: function (value) {
      return value.length >= 2 ? '' : 'form.error.name';
    },
    email: function (value) {
      return EMAIL_PATTERN.test(value) ? '' : 'form.error.email';
    },
    phone: function (value) {
      if (!value) return '';
      var digits = value.replace(/\D/g, '');
      var allowedCharacters = /^[0-9+()\-.\s]+$/.test(value);
      return allowedCharacters && digits.length >= 7 && digits.length <= 15 ? '' : 'form.error.phone';
    },
    message: function (value) {
      return value.length >= 10 ? '' : 'form.error.message';
    }
  };

  /**
   * Shows or clears the error for one field.
   * @param {string} name - Field name (matches the input's name attribute).
   * @param {string} errorKey - Translation key of the error, or '' to clear.
   * @returns {void}
   */
  function renderFieldError(name, errorKey) {
    var input = form.elements[name];
    var message = form.querySelector('[data-error-for="' + name + '"]');
    errors[name] = errorKey;
    if (!input || !message) return;

    if (errorKey) {
      input.setAttribute('aria-invalid', 'true');
      message.textContent = t(errorKey);
      message.hidden = false;
    } else {
      input.removeAttribute('aria-invalid');
      message.textContent = '';
      message.hidden = true;
    }
  }

  /**
   * Validates every field and renders the results.
   * @returns {HTMLElement|null} First invalid input, or null when the form is valid.
   */
  function validateAll() {
    var firstInvalid = null;
    Object.keys(rules).forEach(function (name) {
      var input = form.elements[name];
      var errorKey = rules[name](input.value.trim());
      renderFieldError(name, errorKey);
      if (errorKey && !firstInvalid) firstInvalid = input;
    });
    return firstInvalid;
  }

  /**
   * Shows a status line under the button.
   * @param {string|null} key - Translation key, or null to hide.
   * @param {'success'|'error'} [tone] - Visual tone.
   * @returns {void}
   */
  function renderStatus(key, tone) {
    statusKey = key;
    statusElement.classList.remove('form__status--success', 'form__status--error');
    if (!key) {
      statusElement.hidden = true;
      statusElement.textContent = '';
      return;
    }
    statusElement.classList.add('form__status--' + (tone || 'success'));
    statusElement.textContent = t(key);
    statusElement.hidden = false;
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
    submitButton.textContent = sending ? t('form.sending') : t('form.submit');
  }

  /**
   * Opens the visitor's email app with the request already written.
   * @param {string} recipient - Address taken from data-mailto.
   * @returns {void}
   */
  function openMailClient(recipient) {
    var value = function (name) { return form.elements[name].value.trim(); };
    var body = [
      t('form.mail.name') + ': ' + value('name'),
      t('form.mail.email') + ': ' + value('email'),
      t('form.mail.phone') + ': ' + (value('phone') || '-'),
      '',
      t('form.mail.message') + ':',
      value('message')
    ].join('\n');
    window.location.href = 'mailto:' + encodeURIComponent(recipient) +
      '?subject=' + encodeURIComponent(t('form.mail.subject')) +
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
      renderStatus('form.success', 'success');
      return;
    }

    var endpoint = (form.getAttribute('data-endpoint') || '').trim();
    if (!endpoint) {
      openMailClient(form.getAttribute('data-mailto') || '');
      renderStatus('form.mailto', 'success');
      return;
    }

    setSending(true);
    postForm(endpoint).then(function () {
      form.reset();
      hasTriedSubmit = false;
      renderStatus('form.success', 'success');
    }).catch(function (error) {
      // Only the technical reason is logged, never the visitor's data.
      console.error('[contact-form] Sending failed:', error.message);
      renderStatus('form.failure', 'error');
    }).finally(function () {
      setSending(false);
    });
  });

  // After the first attempt, re-check each field as the visitor corrects it.
  form.addEventListener('input', function (event) {
    var name = event.target.name;
    if (!hasTriedSubmit || !rules[name]) return;
    renderFieldError(name, rules[name](event.target.value.trim()));
  });

  // Keep visible messages in the selected language.
  window.addEventListener('i18n:change', function () {
    Object.keys(errors).forEach(function (name) {
      if (errors[name]) renderFieldError(name, errors[name]);
    });
    if (statusKey) statusElement.textContent = t(statusKey);
    if (isSubmitting) submitButton.textContent = t('form.sending');
  });
})();
