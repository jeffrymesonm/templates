/**
 * faq.js — Accordion for the FAQ list.
 * Clicking anywhere on an item toggles it; only one answer is open at a time.
 * Heights animate from 0 to the content height and back.
 */
(function () {
  'use strict';

  var OPEN_CLASS = 'is-open';

  /**
   * Expands or collapses one FAQ item.
   * @param {HTMLElement} item - Element marked with [data-faq-item].
   * @param {boolean} shouldOpen - True to expand, false to collapse.
   * @returns {void}
   */
  function setOpen(item, shouldOpen) {
    var button = item.querySelector('.faq-item__question');
    var answer = item.querySelector('.faq-item__answer');
    if (!button || !answer) {
      return;
    }

    if (shouldOpen) {
      answer.style.height = answer.scrollHeight + 'px';
      item.classList.add(OPEN_CLASS);
    } else {
      // Fix the current height first so the collapse can transition from it.
      answer.style.height = answer.scrollHeight + 'px';
      answer.getBoundingClientRect();
      answer.style.height = '0px';
      item.classList.remove(OPEN_CLASS);
    }
    button.setAttribute('aria-expanded', String(shouldOpen));
  }

  /**
   * Wires a FAQ list.
   * @param {HTMLElement} list - Element marked with [data-faq].
   * @returns {void}
   */
  function initFaq(list) {
    var items = Array.prototype.slice.call(list.querySelectorAll('[data-faq-item]'));

    items.forEach(function (item) {
      var answer = item.querySelector('.faq-item__answer');

      item.addEventListener('click', function () {
        var willOpen = !item.classList.contains(OPEN_CLASS);
        items.forEach(function (other) {
          if (other !== item && other.classList.contains(OPEN_CLASS)) {
            setOpen(other, false);
          }
        });
        setOpen(item, willOpen);
      });

      // Once expanded, let the answer size itself so it follows text reflow on resize.
      if (answer) {
        answer.addEventListener('transitionend', function (event) {
          if (event.propertyName === 'height' && item.classList.contains(OPEN_CLASS)) {
            answer.style.height = 'auto';
          }
        });
      }
    });
  }

  document.querySelectorAll('[data-faq]').forEach(initFaq);
})();
