/**
 * preloader.js — Short "stacking burger" intro shown while fonts and photos load.
 * Adds .is-loaded to <html> after at least MIN_MS (so the animation is seen) and at most MAX_MS
 * (so a slow network never blocks the page); CSS then slides the preloader up and starts the
 * hero reveals. Skipped entirely for reduced motion. The <head> script forces .is-loaded at 4 s
 * as a last-resort fallback.
 */
(function () {
  'use strict';

  var MIN_MS = 1400;
  var MAX_MS = 3200;
  var root = document.documentElement;
  var preloader = document.querySelector('[data-preloader]');
  var startedAt = window.performance ? window.performance.now() : Date.now();
  var finished = false;

  /**
   * Removes the preloader element once it has slid away.
   * @returns {void}
   */
  function removePreloader() {
    if (preloader && preloader.parentNode) preloader.parentNode.removeChild(preloader);
  }

  /**
   * Marks the page as loaded, respecting the minimum display time.
   * @returns {void}
   */
  function finish() {
    if (finished) return;
    finished = true;
    var now = window.performance ? window.performance.now() : Date.now();
    var wait = Math.max(0, MIN_MS - (now - startedAt));
    window.setTimeout(function () {
      root.classList.add('is-loaded');
      window.setTimeout(removePreloader, 1100);
    }, wait);
  }

  if (!preloader || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.add('is-loaded');
    removePreloader();
    return;
  }

  var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  var pageLoaded = new Promise(function (resolve) {
    if (document.readyState === 'complete') resolve();
    else window.addEventListener('load', resolve, { once: true });
  });

  // Either everything is ready, or the maximum wait is reached — whichever comes first.
  Promise.all([fontsReady, pageLoaded]).then(finish, finish);
  window.setTimeout(finish, MAX_MS);
})();
