/**
 * footer-reveal.js — "Curtain" footer.
 *
 * The footer is pinned to the bottom of the viewport inside a clipped wrapper that has
 * the same height as the footer, so the page appears to slide up and uncover it.
 * Without JS the footer simply renders in normal flow.
 */
(function () {
  'use strict';

  var wrapper = document.querySelector('[data-footer-reveal]');
  var footer = wrapper && wrapper.querySelector('.footer');

  if (!wrapper || !footer) {
    return;
  }

  /**
   * Copies the footer's rendered height onto the wrapper so it reserves the right space.
   * @returns {void}
   */
  function syncHeight() {
    wrapper.style.height = footer.offsetHeight + 'px';
  }

  wrapper.classList.add('is-active');
  syncHeight();

  if ('ResizeObserver' in window) {
    new ResizeObserver(syncHeight).observe(footer);
  } else {
    window.addEventListener('resize', syncHeight);
  }
})();
