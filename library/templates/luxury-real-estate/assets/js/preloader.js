/**
 * preloader.js — Dark intro screen shown while the hero video loads.
 *
 * Timeline: the brand line fills from left to right and the bar grows to 90% (CSS).
 * When the video can show its first frame (or after 8 s, or on a load error) the bar
 * completes (0.3 s), the content lifts away (0.5 s) and the screen fades out (0.8 s).
 * Then <html> gets .is-loaded and "site:loaded" fires, which brings in the hero copy.
 * Reduced motion: no preloader at all (CSS hides it); the page is marked loaded at once.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var preloader = document.querySelector('[data-preloader]');
  var video = document.querySelector('[data-hero-video]');

  var MIN_VISIBLE_MS = 1000;   // avoids a one-frame flash when the video is cached
  var MAX_WAIT_MS = 8000;      // never block the page longer than this
  var BAR_FINISH_MS = 300;
  var CONTENT_EXIT_MS = 500;
  var SCREEN_FADE_MS = 800;

  var startedAt = Date.now();
  var finished = false;

  /**
   * Marks the page as loaded and announces it to other scripts.
   * @returns {void}
   */
  function markLoaded() {
    root.classList.add('is-loaded');
    window.dispatchEvent(new CustomEvent('site:loaded'));
  }

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!preloader || reducedMotion) {
    if (preloader) preloader.hidden = true;
    markLoaded();
    return;
  }

  /**
   * Runs the exit sequence once (bar completes → content lifts → screen fades).
   * @returns {void}
   */
  function finish() {
    if (finished) return;
    finished = true;
    var wait = Math.max(0, MIN_VISIBLE_MS - (Date.now() - startedAt));

    window.setTimeout(function () {
      preloader.classList.add('is-ready');
      window.setTimeout(function () {
        preloader.classList.add('is-leaving');
        window.setTimeout(function () {
          preloader.classList.add('is-done');
          markLoaded();
          window.setTimeout(function () { preloader.hidden = true; }, SCREEN_FADE_MS);
        }, CONTENT_EXIT_MS);
      }, BAR_FINISH_MS);
    }, wait);
  }

  if (!video || video.readyState >= 2) {
    finish();
  } else {
    video.addEventListener('loadeddata', finish, { once: true });
    video.addEventListener('error', finish, { once: true });
    window.setTimeout(finish, MAX_WAIT_MS);
  }
})();
