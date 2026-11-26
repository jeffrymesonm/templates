/**
 * hero-video.js — Plays the muted hero video only while it is on screen.
 *
 * - Paused when scrolled away or when the tab is hidden (saves battery and CPU).
 * - Never plays with "reduce motion": the poster image stays instead.
 * - If the browser refuses to play (data saver, missing file), the poster simply stays.
 */
(function () {
  'use strict';

  var video = document.querySelector('[data-hero-video]');
  if (!video) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var onScreen = true;

  /**
   * Plays or pauses the video for the current visibility and motion preference.
   * @returns {void}
   */
  function update() {
    if (reducedMotion.matches || !onScreen || document.hidden) {
      if (!video.paused) video.pause();
      return;
    }
    if (!video.paused) return;
    var attempt = video.play();
    if (attempt && typeof attempt.catch === 'function') {
      attempt.catch(function () {
        /* Autoplay refused or the file is missing: the poster stays visible, nothing to do. */
      });
    }
  }

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      onScreen = entries[0].isIntersecting;
      update();
    }).observe(video);
  }

  document.addEventListener('visibilitychange', update);
  if (reducedMotion.addEventListener) {
    reducedMotion.addEventListener('change', update);
  } else if (reducedMotion.addListener) {
    reducedMotion.addListener(update);
  }
  update();
})();
