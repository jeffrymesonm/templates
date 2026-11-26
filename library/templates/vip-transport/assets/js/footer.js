/**
 * footer.js — Footer details: current year and a soft parallax as the footer scrolls into view
 * (the content starts slightly higher and settles into place). No parallax with reduced motion.
 */
(function () {
  'use strict';

  var year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getUTCFullYear());

  var footer = document.querySelector('.footer');
  var inner = document.querySelector('[data-footer-parallax]');
  if (!footer || !inner || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var MAX_OFFSET = 120; // px the content is lifted when the footer starts to appear
  var ticking = false;

  /** Moves the footer content according to how much of the footer is visible. */
  function update() {
    ticking = false;
    var rect = footer.getBoundingClientRect();
    var vh = window.innerHeight;
    if (rect.top > vh || rect.bottom < 0) return;
    var progress = Math.min(1, Math.max(0, (vh - rect.top) / Math.max(1, Math.min(rect.height, vh))));
    inner.style.transform = 'translate3d(0,' + ((1 - progress) * -MAX_OFFSET).toFixed(1) + 'px,0)';
  }

  /** Throttles updates to one per frame. */
  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  update();
})();
