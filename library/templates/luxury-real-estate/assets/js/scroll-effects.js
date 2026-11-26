/**
 * scroll-effects.js — Every scroll-linked effect, driven by one requestAnimationFrame loop.
 *
 * 1. Hero video scrub: while the 300vh hero scrolls past its pinned stage, the video's
 *    currentTime follows the scroll (0 → duration), eased so it trails the scroll a little.
 * 2. Statement text fill: each word of [data-text-fill] goes from 15% to 100% opacity, in order,
 *    while the title travels from 80% to 20% of the viewport height.
 * 3. Photo zoom: [data-zoom] images scale from 1.11 to 1 while they cross the viewport.
 * 4. Contact parallax: [data-parallax] moves from -10% to +10% of its height across the viewport.
 *
 * All layout reads happen before any style writes in each frame. Nothing runs with
 * prefers-reduced-motion: CSS then shows the poster frame and the final states.
 */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reducedMotion.matches) return;

  var hero = document.querySelector('[data-hero]');
  var video = document.querySelector('[data-hero-video]');
  var fillTitles = Array.prototype.slice.call(document.querySelectorAll('[data-text-fill]'));
  var zoomImages = Array.prototype.slice.call(document.querySelectorAll('[data-zoom]'));
  var parallaxLayers = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));

  var ZOOM_FROM = 1.11;
  var PARALLAX_RANGE = 10;     // percent up and down
  var SCRUB_LAG = 0.12;        // seconds; time constant of the video easing (≈0.5 s to settle)
  var SEEK_EPSILON = 1 / 60;   // ignore differences smaller than one frame at 60 fps

  var fillWords = [];          // [{ element, words: HTMLElement[] }]
  var videoTime = 0;           // eased playback position, in seconds
  var lastFrame = 0;
  var frameRequested = false;

  /**
   * Limits a number to the 0–1 range.
   * @param {number} value - Any number.
   * @returns {number} Value clamped to [0, 1].
   */
  function clamp01(value) {
    return value < 0 ? 0 : value > 1 ? 1 : value;
  }

  /**
   * Re-reads the word spans of every text-fill title (they change when the language changes).
   * @returns {void}
   */
  function collectWords() {
    fillWords = fillTitles.map(function (element) {
      return { element: element, words: window.SiteWords ? window.SiteWords.getWords(element) : [] };
    });
  }

  /**
   * Prepares the video for scrubbing. Some mobile browsers only paint seeked frames after
   * the video has played once, so it is played and paused straight away (it is muted).
   * @returns {void}
   */
  function primeVideo() {
    if (!video) return;
    video.pause();
    var attempt = video.play();
    if (attempt && typeof attempt.then === 'function') {
      attempt.then(function () { video.pause(); requestTick(); }).catch(function () { /* autoplay blocked: seeking still works on desktop */ });
    }
  }

  /**
   * Hero progress: 0 when the hero top meets the viewport top, 1 when its bottom meets the viewport bottom.
   * @param {DOMRect} rect - Hero wrapper box.
   * @param {number} viewport - Viewport height.
   * @returns {number} Progress in [0, 1].
   */
  function heroProgress(rect, viewport) {
    var distance = rect.height - viewport;
    return distance > 0 ? clamp01(-rect.top / distance) : 0;
  }

  /**
   * Progress of an element crossing the viewport: 0 when its top enters at the bottom,
   * 1 when its bottom leaves at the top.
   * @param {DOMRect} rect - Element box.
   * @param {number} viewport - Viewport height.
   * @returns {number} Progress in [0, 1].
   */
  function crossProgress(rect, viewport) {
    return clamp01((viewport - rect.top) / (viewport + rect.height));
  }

  /**
   * One animation frame: reads every box, then writes every style.
   * Keeps requesting frames only while the eased video position is still catching up.
   * @param {number} now - High-resolution timestamp from requestAnimationFrame.
   * @returns {void}
   */
  function tick(now) {
    frameRequested = false;
    var dt = lastFrame ? Math.min(0.1, (now - lastFrame) / 1000) : 1 / 60;
    lastFrame = now;
    var viewport = window.innerHeight;
    var keepGoing = false;

    // ---- Reads ----
    var heroRect = hero ? hero.getBoundingClientRect() : null;
    var fillTops = fillWords.map(function (entry) { return entry.element.getBoundingClientRect().top; });
    var zoomRects = zoomImages.map(function (image) { return image.getBoundingClientRect(); });
    var parallaxRects = parallaxLayers.map(function (layer) { return layer.parentElement.getBoundingClientRect(); });

    // ---- 1. Hero video ----
    if (video && heroRect && heroRect.bottom > 0 && video.duration > 0 && video.readyState >= 1) {
      var target = heroProgress(heroRect, viewport) * (video.duration - 0.001);
      videoTime += (target - videoTime) * (1 - Math.exp(-dt / SCRUB_LAG));
      if (Math.abs(target - videoTime) < 0.002) videoTime = target;
      else keepGoing = true;

      if (Math.abs(video.currentTime - videoTime) > SEEK_EPSILON) {
        // While the decoder is busy, wait for the next frame instead of queueing seeks.
        if (!video.seeking) video.currentTime = videoTime;
        keepGoing = true;
      }
    }

    // ---- 2. Text fill ----
    fillWords.forEach(function (entry, index) {
      var progress = clamp01((viewport * 0.8 - fillTops[index]) / (viewport * 0.6));
      var count = entry.words.length;
      entry.words.forEach(function (word, wordIndex) {
        var amount = clamp01(progress * count - wordIndex);
        var opacity = (0.15 + 0.85 * amount).toFixed(3);
        if (word.style.opacity !== opacity) word.style.opacity = opacity;
      });
    });

    // ---- 3. Photo zoom ----
    zoomImages.forEach(function (image, index) {
      var rect = zoomRects[index];
      if (rect.bottom < -50 || rect.top > viewport + 50) return;
      var scale = ZOOM_FROM - (ZOOM_FROM - 1) * crossProgress(rect, viewport);
      image.style.transform = 'scale(' + scale.toFixed(4) + ')';
    });

    // ---- 4. Contact parallax ----
    parallaxLayers.forEach(function (layer, index) {
      var rect = parallaxRects[index];
      if (rect.bottom < -50 || rect.top > viewport + 50) return;
      var offset = -PARALLAX_RANGE + 2 * PARALLAX_RANGE * crossProgress(rect, viewport);
      layer.style.transform = 'translate3d(0, ' + offset.toFixed(3) + '%, 0)';
    });

    if (keepGoing) requestTick();
    else lastFrame = 0;
  }

  /**
   * Schedules one frame (several scroll events in a frame collapse into one update).
   * @returns {void}
   */
  function requestTick() {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(tick);
  }

  // Images start zoomed in, before the first frame, so nothing jumps.
  zoomImages.forEach(function (image) {
    image.style.transform = 'scale(' + ZOOM_FROM + ')';
    image.style.willChange = 'transform';
  });

  collectWords();
  window.addEventListener('words:split', function () { collectWords(); requestTick(); });
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);
  window.addEventListener('load', requestTick);

  if (video) {
    if (video.readyState >= 1) primeVideo();
    else video.addEventListener('loadedmetadata', primeVideo, { once: true });
    video.addEventListener('seeked', requestTick);
  }

  requestTick();
})();
