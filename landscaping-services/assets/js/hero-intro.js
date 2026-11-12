/**
 * hero-intro.js — Starts the hero entrance once the photo is ready.
 * Adds .hero-ready to <html>; styles.css then opens the photo from an inset window to full
 * bleed and brings in the nav and copy. Skips straight to the end state for reduced motion.
 * A timer guarantees the content never stays hidden if the photo is slow or fails.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var hero = document.querySelector('[data-hero]');
  var MAX_WAIT_MS = 1200;
  var started = false;

  /**
   * Triggers the intro exactly once, on the next frame so the start state is painted first.
   * @returns {void}
   */
  function start() {
    if (started) return;
    started = true;
    window.requestAnimationFrame(function () {
      root.classList.add('hero-ready');
    });
  }

  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.add('hero-ready');
    return;
  }

  var image = hero.querySelector('img');
  if (image && typeof image.decode === 'function') {
    // decode() rejects for broken images; either way the intro must run.
    image.decode().then(start, start);
  } else {
    start();
  }
  window.setTimeout(start, MAX_WAIT_MS);
})();
