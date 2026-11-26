/**
 * faq.js — FAQ accordion ([data-accordion]): one answer open at a time.
 *
 * Each trigger button toggles the panel named in its aria-controls; aria-expanded stays in sync.
 * The open/close animation is pure CSS (grid rows 0fr ↔ 1fr), so rapid clicks cannot desync it.
 */
(function () {
  'use strict';

  var accordion = document.querySelector('[data-accordion]');
  if (!accordion) return;

  var triggers = Array.prototype.slice.call(accordion.querySelectorAll('.accordion__trigger'));

  /**
   * Sets one item open or closed.
   * @param {HTMLElement} trigger - Question button.
   * @param {boolean} open - Target state.
   * @returns {void}
   */
  function setItem(trigger, open) {
    var panel = document.getElementById(trigger.getAttribute('aria-controls'));
    trigger.setAttribute('aria-expanded', String(open));
    if (panel) panel.classList.toggle('is-open', open);
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var willOpen = trigger.getAttribute('aria-expanded') !== 'true';
      triggers.forEach(function (other) { setItem(other, false); });
      if (willOpen) setItem(trigger, true);
    });
  });
})();
