/**
 * scroll-zoom.js — Photos marked [data-zoom] start slightly enlarged (1.11×) and settle to 1×
 * while their frame crosses the screen: from the moment its top enters at the bottom of the
 * viewport until its bottom leaves at the top. The value is written to the --zoom custom
 * property of the <img>; styles.css turns it into transform: scale(var(--zoom)).
 *
 * Only frames near the viewport are updated (IntersectionObserver), at most once per frame.
 * Reduced motion: every photo stays at 1×.
 * Exposes window.SiteZoom = { scaleFor(frame) } so preloader.js can match the hero photo.
 */
(function () {
  'use strict';

  var MAX_SCALE = 1.11;

  /**
   * Scale a photo should have for the current scroll position.
   * @param {Element} frame - The element that crops the photo (the <img>'s parent).
   * @returns {number} A value between 1 and MAX_SCALE.
   */
  function scaleFor(frame) {
    var rect = frame.getBoundingClientRect();
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
    progress = Math.min(1, Math.max(0, progress));
    return MAX_SCALE - (MAX_SCALE - 1) * progress;
  }

  window.SiteZoom = { scaleFor: scaleFor };

  var images = Array.prototype.slice.call(document.querySelectorAll('[data-zoom]'));
  if (!images.length) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    images.forEach(function (image) { image.style.setProperty('--zoom', '1'); });
    return;
  }

  var items = images.map(function (image) {
    return { image: image, frame: image.parentElement, active: true };
  });
  var frameRequested = false;

  /**
   * Writes the current scale of one photo.
   * @param {{image: HTMLElement, frame: Element}} item - Photo and its frame.
   * @returns {void}
   */
  function apply(item) {
    item.image.style.setProperty('--zoom', scaleFor(item.frame).toFixed(4));
  }

  /**
   * Updates every photo that is on (or near) the screen.
   * @returns {void}
   */
  function update() {
    frameRequested = false;
    items.forEach(function (item) {
      if (item.active) apply(item);
    });
  }

  /**
   * Schedules one update for the next animation frame (extra calls in the same frame are ignored).
   * @returns {void}
   */
  function requestUpdate() {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(update);
  }

  // First pass for all photos, so off-screen ones already have their starting scale.
  items.forEach(apply);

  if ('IntersectionObserver' in window) {
    // Track which frames are near the viewport; only those are updated while scrolling.
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        items.forEach(function (item) {
          if (item.frame !== entry.target) return;
          item.active = entry.isIntersecting;
          // Settle the final value when a photo leaves, so it never freezes mid-way.
          apply(item);
        });
      });
    }, { rootMargin: '15% 0px 15% 0px' });
    items.forEach(function (item) {
      item.active = false;
      observer.observe(item.frame);
    });
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
})();
