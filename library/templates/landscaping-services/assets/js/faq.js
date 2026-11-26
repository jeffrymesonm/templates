/**
 * faq.js — Accordion for the FAQ.
 * Each question is a button with aria-expanded/aria-controls; opening one closes the others.
 * The height animation and hiding of closed answers are handled in CSS (.is-open).
 */
(function () {
  'use strict';

  var triggers = Array.prototype.slice.call(document.querySelectorAll('[data-faq-trigger]'));
  if (!triggers.length) return;

  /**
   * Sets one item open or closed.
   * @param {HTMLElement} trigger - The question button.
   * @param {boolean} open - Desired state.
   * @returns {void}
   */
  function setItem(trigger, open) {
    var item = trigger.closest('[data-faq-item]');
    trigger.setAttribute('aria-expanded', String(open));
    if (item) item.classList.toggle('is-open', open);
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var willOpen = trigger.getAttribute('aria-expanded') !== 'true';
      triggers.forEach(function (other) {
        if (other !== trigger) setItem(other, false);
      });
      setItem(trigger, willOpen);
    });
  });
})();
