/**
 * reveal.js — Entrance animations.
 *
 * - [data-split]  : text is split into word spans that rise in one after another.
 *                   Inline elements such as <em> are kept, so accent words stay serif italic.
 * - [data-reveal] : the whole block fades in (variants: default fade-up, "fade", "blur").
 * - [data-intro]  : elements animated on page load instead of on scroll (hero).
 *
 * Optional per-element delay: style="--delay: 200ms".
 * Hidden states only apply when <html> has the `js` class, so content is visible without JS.
 */
(function () {
  'use strict';

  var VISIBLE_CLASS = 'is-visible';

  /**
   * Appends one span per word of `text` to `target`, preserving single spaces between words.
   * @param {string} text - Text content to split.
   * @param {Node} target - Node that receives the generated word spans and spaces.
   * @param {{ index: number }} counter - Shared running word index used for stagger delays.
   * @returns {void}
   */
  function appendWords(text, target, counter) {
    text.split(/(\s+)/).forEach(function (part) {
      if (!part) {
        return;
      }
      if (/^\s+$/.test(part)) {
        target.appendChild(document.createTextNode(' '));
        return;
      }
      var word = document.createElement('span');
      word.className = 'word';
      word.style.setProperty('--i', String(counter.index));
      word.textContent = part;
      target.appendChild(word);
      counter.index += 1;
    });
  }

  /**
   * Recursively rebuilds `source` children inside `target`, splitting text nodes into words
   * and shallow-cloning element nodes (e.g. <em>) so their styling is preserved.
   * @param {Node} source - Original node whose children are processed.
   * @param {Node} target - Node that receives the rebuilt children.
   * @param {{ index: number }} counter - Shared running word index.
   * @returns {void}
   */
  function splitChildren(source, target, counter) {
    Array.prototype.forEach.call(source.childNodes, function (child) {
      if (child.nodeType === Node.TEXT_NODE) {
        appendWords(child.textContent, target, counter);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        var clone = child.cloneNode(false);
        splitChildren(child, clone, counter);
        target.appendChild(clone);
      }
    });
  }

  /**
   * Replaces the content of an element with word spans. Real spaces are kept between
   * the spans, so screen readers still read the text naturally.
   * @param {HTMLElement} element - Element marked with [data-split].
   * @returns {void}
   */
  function splitIntoWords(element) {
    var fragment = document.createDocumentFragment();
    splitChildren(element, fragment, { index: 0 });
    element.textContent = '';
    element.appendChild(fragment);
  }

  /**
   * Marks an element as visible, which triggers its CSS transition.
   * @param {Element} element - Element to reveal.
   * @returns {void}
   */
  function show(element) {
    element.classList.add(VISIBLE_CLASS);
  }

  /**
   * Splits text, then reveals intro elements on load and the rest when they scroll into view.
   * @returns {void}
   */
  function init() {
    try {
      document.querySelectorAll('[data-split]').forEach(splitIntoWords);
    } catch (error) {
      // If splitting fails, fall back to showing the original text without animation.
      console.error('reveal.js: text split failed', error);
      document.documentElement.classList.remove('js');
      return;
    }

    var introItems = document.querySelectorAll('[data-intro]');
    var scrollItems = document.querySelectorAll('[data-split]:not([data-intro]), [data-reveal]:not([data-intro])');

    // Two frames so the hidden state is painted before the intro transition starts.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        introItems.forEach(show);
      });
    });

    if (!('IntersectionObserver' in window)) {
      scrollItems.forEach(show);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          show(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });

    scrollItems.forEach(function (item) {
      observer.observe(item);
    });
  }

  init();
})();
