/**
 * reveal.js — Fades [data-reveal] blocks in the first time they scroll into view.
 * Without IntersectionObserver, or with reduced motion, everything is shown immediately.
 * Optional stagger: style="--delay: 120ms" on the element. data-reveal="fade" skips the lift.
 */
(function () {
  'use strict';

  var items = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (!items.length) return;

  /**
   * Marks an element as revealed.
   * @param {Element} element - Element with data-reveal.
   * @returns {void}
   */
  function show(element) {
    element.classList.add('is-visible');
  }

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || !('IntersectionObserver' in window)) {
    items.forEach(show);
    return;
  }

  // Reveal each block the first time it enters the viewport, then stop watching it.
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      show(entry.target);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  items.forEach(function (item) {
    observer.observe(item);
  });
})();
