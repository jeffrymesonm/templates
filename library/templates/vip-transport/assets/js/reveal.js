/**
 * reveal.js — Fade-up on scroll for elements marked [data-reveal].
 *
 * Adds `is-visible` the first time an element enters the viewport (delay via --delay in CSS).
 * Without IntersectionObserver everything is shown immediately.
 */
(function () {
  'use strict';

  var elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(function (element) { element.classList.add('is-visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });

  elements.forEach(function (element) { observer.observe(element); });
})();
