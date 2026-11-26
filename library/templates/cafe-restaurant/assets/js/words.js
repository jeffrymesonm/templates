/**
 * words.js — Splits [data-words] text into one <span class="word"> per word so the CSS can
 * blur each word in, 40 ms after the previous one.
 *
 * - Titles get .is-in the first time they are 20% visible.
 * - [data-words-trigger="hero"] is only split here: the CSS shows it once html.hero-in is set
 *   (intro.js), so the hero copy plays as part of the opening sequence.
 * i18n.js replaces the text when the language changes, so every element is split again on
 * "i18n:change" (elements already shown keep .is-in and appear at once).
 */
(function () {
  'use strict';

  var targets = Array.prototype.slice.call(document.querySelectorAll('[data-words]'));
  if (!targets.length) return;

  /**
   * Replaces an element's text with one span per word, separated by plain spaces
   * (so the sentence reads normally for screen readers and copy/paste).
   * @param {HTMLElement} element - Element whose textContent is a single sentence.
   * @returns {void}
   */
  function split(element) {
    var words = element.textContent.trim().split(/\s+/).filter(Boolean);
    var fragment = document.createDocumentFragment();
    words.forEach(function (word, index) {
      if (index > 0) fragment.appendChild(document.createTextNode(' '));
      var span = document.createElement('span');
      span.className = 'word';
      span.style.setProperty('--w', String(index));
      span.textContent = word;
      fragment.appendChild(span);
    });
    element.textContent = '';
    element.appendChild(fragment);
  }

  /**
   * Splits every target element.
   * @returns {void}
   */
  function splitAll() {
    targets.forEach(split);
  }

  /**
   * Marks a title as visible, which starts its CSS blur-in.
   * @param {Element} element - Element to show.
   * @returns {void}
   */
  function show(element) {
    element.classList.add('is-in');
  }

  splitAll();
  window.addEventListener('i18n:change', splitAll);

  var scrollTargets = targets.filter(function (element) {
    return element.getAttribute('data-words-trigger') !== 'hero';
  });

  if (!('IntersectionObserver' in window)) {
    scrollTargets.forEach(show);
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      show(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  scrollTargets.forEach(function (element) {
    observer.observe(element);
  });
})();
