/**
 * words.js — Splits [data-words] titles into one <span class="word"> per word so the words can
 * rise and fade in one after another (the timing lives in styles.css, section 15).
 *
 * - Default: the words appear when the element is 20% visible.
 * - data-words-trigger="hero": they wait for the intro instead — the "site:loaded" event, which
 *   every way out of the intro fires (preloader.js or the head script's safety net), or
 *   html.is-loaded if that already happened.
 * - Per element, style="--stagger: 18ms; --words-delay: 200ms" tunes the timing.
 * - Reduced motion or no IntersectionObserver: everything is shown at once.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var targets = Array.prototype.slice.call(document.querySelectorAll('[data-words]'));
  if (!targets.length) return;

  /**
   * Replaces an element's text with one span per word, separated by plain spaces so the
   * sentence still reads normally for screen readers and copy/paste.
   * @param {HTMLElement} element - Element whose content is plain text.
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
   * Starts an element's word animation.
   * @param {Element} element - A split [data-words] element.
   * @returns {void}
   */
  function show(element) {
    element.classList.add('is-in');
  }

  targets.forEach(split);

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach(show);
    return;
  }

  var heroTargets = targets.filter(function (element) {
    return element.getAttribute('data-words-trigger') === 'hero';
  });
  var scrollTargets = targets.filter(function (element) {
    return element.getAttribute('data-words-trigger') !== 'hero';
  });

  /**
   * Shows the hero copy.
   * @returns {void}
   */
  function showHero() {
    heroTargets.forEach(show);
  }

  if (root.classList.contains('is-loaded')) {
    showHero();
  } else {
    window.addEventListener('site:loaded', showHero, { once: true });
  }

  var observer = new IntersectionObserver(function (entries) {
    // Show each title the first time it is 20% visible, then stop watching it.
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
