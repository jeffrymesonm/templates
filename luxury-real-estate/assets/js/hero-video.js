/**
 * hero-video.js — Loads the hero video so it can be scrubbed by scroll on any host.
 *
 * Scrubbing sets video.currentTime constantly. That only works when the browser can seek,
 * which needs HTTP Range support on the server (simple servers such as `python -m http.server`
 * don't have it). So the whole file is downloaded first and played from memory (a blob: URL),
 * which makes every frame seekable instantly. The preloader covers this download.
 *
 * - Picks data-src-small on screens narrower than 768px (smaller file), else data-src.
 * - Falls back to the plain URL when fetch is unavailable or fails, and on file:// pages
 *   (browsers can seek local files directly).
 * - Reduced motion: the video is never loaded; the poster image stays as a still hero.
 */
(function () {
  'use strict';

  var video = document.querySelector('[data-hero-video]');
  if (!video) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var isSmallScreen = window.matchMedia('(max-width: 767px)').matches;
  var url = (isSmallScreen && video.getAttribute('data-src-small')) || video.getAttribute('data-src');
  if (!url) return;

  /**
   * Points the video at a source and starts loading it.
   * @param {string} source - Video URL or blob: URL.
   * @returns {void}
   */
  function useSource(source) {
    video.src = source;
    video.load();
  }

  if (!window.fetch || !window.URL || !URL.createObjectURL || window.location.protocol === 'file:') {
    useSource(url);
    return;
  }

  fetch(url)
    .then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.blob();
    })
    .then(function (blob) {
      useSource(URL.createObjectURL(blob));
    })
    .catch(function () {
      // Network or CORS problem: let the browser stream it normally (scrubbing may be coarser).
      useSource(url);
    });
})();
