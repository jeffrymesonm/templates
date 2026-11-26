/**
 * parallax.js — Scroll-linked motion.
 *
 * Elements with [data-parallax] are animated between two values while their parent
 * <section> travels through the viewport (0 = section top enters at the bottom,
 * 1 = section bottom leaves at the top).
 *
 *   data-parallax-type : "y" (default, translateY in px) or "scale"
 *   data-parallax-from : value at progress 0
 *   data-parallax-to   : value at progress 1
 *
 * Disabled when the user prefers reduced motion.
 */
(function () {
  'use strict';

  var items = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!items.length || reduceMotion.matches) {
    return;
  }

  var isTicking = false;

  /**
   * Clamps a number between a minimum and a maximum.
   * @param {number} value - Number to clamp.
   * @param {number} min - Lower bound.
   * @param {number} max - Upper bound.
   * @returns {number} The clamped value.
   */
  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  /**
   * Computes how far a reference element has travelled through the viewport.
   * @param {Element} reference - Element whose position drives the effect.
   * @returns {number} Progress between 0 and 1.
   */
  function getProgress(reference) {
    var rect = reference.getBoundingClientRect();
    var viewportHeight = window.innerHeight;
    return clamp((viewportHeight - rect.top) / (viewportHeight + rect.height), 0, 1);
  }

  /**
   * Applies the interpolated transform to every parallax element.
   * @returns {void}
   */
  function update() {
    items.forEach(function (element) {
      var reference = element.closest('section') || element.parentElement;
      var from = parseFloat(element.getAttribute('data-parallax-from')) || 0;
      var to = parseFloat(element.getAttribute('data-parallax-to')) || 0;
      var value = from + (to - from) * getProgress(reference);

      element.style.transform = element.getAttribute('data-parallax-type') === 'scale'
        ? 'scale(' + value.toFixed(4) + ')'
        : 'translate3d(0, ' + value.toFixed(2) + 'px, 0)';
    });
    isTicking = false;
  }

  /**
   * Schedules a single update per animation frame.
   * @returns {void}
   */
  function requestUpdate() {
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  update();
})();
