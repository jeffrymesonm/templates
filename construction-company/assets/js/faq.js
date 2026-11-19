/**
 * faq.js — Accordion for the FAQ: one answer open at a time across both columns.
 * Each question is a <button> with aria-expanded; its answer panel is hidden from assistive
 * technology while closed. The height animation is pure CSS (grid rows 0fr → 1fr).
 */
(function () {
  'use strict';

  var items = Array.prototype.slice.call(document.querySelectorAll('[data-faq-item]'));
  if (!items.length) return;

  /**
   * Opens or closes one item.
   * @param {Element} item - A [data-faq-item] element.
   * @param {boolean} open - True to open it.
   * @returns {void}
   */
  function setOpen(item, open) {
    var trigger = item.querySelector('[data-faq-trigger]');
    var panel = item.querySelector('[data-faq-panel]');
    item.classList.toggle('is-open', open);
    if (trigger) trigger.setAttribute('aria-expanded', String(open));
    if (panel) panel.setAttribute('aria-hidden', String(!open));
  }

  items.forEach(function (item) {
    var trigger = item.querySelector('[data-faq-trigger]');
    if (!trigger) return;
    // Toggle this answer and close every other one.
    trigger.addEventListener('click', function () {
      var willOpen = !item.classList.contains('is-open');
      items.forEach(function (other) {
        if (other !== item) setOpen(other, false);
      });
      setOpen(item, willOpen);
    });
  });
})();
