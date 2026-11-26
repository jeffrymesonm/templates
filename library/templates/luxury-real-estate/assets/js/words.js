/**
 * words.js — Splits titles into one <span class="word"> per word, for two effects:
 *
 * - [data-words]: the words fade in one after another (CSS, 40 ms apart) when the element
 *   scrolls into view. With data-words-trigger="hero" they wait for the preloader instead
 *   (the "site:loaded" event, or html.is-loaded if it already happened).
 * - [data-text-fill]: only split here; scroll-effects.js raises each word's opacity with scroll.
 *
 * i18n.js replaces the text when the language changes, so every element is split again on
 * "i18n:change" and "words:split" is fired for scroll-effects.js to pick up the new spans.
 * Exposes window.SiteWords = { getWords(element) }.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var targets = Array.prototype.slice.call(document.querySelectorAll('[data-words], [data-text-fill]'));
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
   * Splits every target and tells listeners the word spans changed.
   * @returns {void}
   */
  function splitAll() {
    targets.forEach(split);
    window.dispatchEvent(new CustomEvent('words:split'));
  }

  /**
   * Marks a [data-words] element as visible, which starts its CSS fade.
   * @param {Element} element - Element to show.
   * @returns {void}
   */
  function show(element) {
    element.classList.add('is-in');
  }

  splitAll();
  window.addEventListener('i18n:change', splitAll);

  var faders = targets.filter(function (element) { return element.hasAttribute('data-words'); });
  var heroFaders = faders.filter(function (element) { return element.getAttribute('data-words-trigger') === 'hero'; });
  var scrollFaders = faders.filter(function (element) { return element.getAttribute('data-words-trigger') !== 'hero'; });

  // Hero copy: wait for the preloader to finish (or show at once if it already has).
  if (root.classList.contains('is-loaded')) {
    heroFaders.forEach(show);
  } else {
    window.addEventListener('site:loaded', function () { heroFaders.forEach(show); }, { once: true });
    // Safety net: the head script adds .is-loaded after a timeout even if preloader.js fails.
    window.setTimeout(function () { heroFaders.forEach(show); }, 10500);
  }

  // Other titles: fade in when 20% visible.
  if (!('IntersectionObserver' in window)) {
    scrollFaders.forEach(show);
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        show(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.2 });
    scrollFaders.forEach(function (element) { observer.observe(element); });
  }

  window.SiteWords = {
    /**
     * Returns the current word spans of a split element.
     * @param {Element} element - A [data-words] or [data-text-fill] element.
     * @returns {HTMLElement[]} Word spans in reading order.
     */
    getWords: function (element) {
      return Array.prototype.slice.call(element.querySelectorAll('.word'));
    }
  };
})();
