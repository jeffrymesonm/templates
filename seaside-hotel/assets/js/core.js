/**
 * core.js — Shared helpers for the Seaside template, exposed as window.Seaside.
 *   - Math helpers (clamp, lerp, progress, easing).
 *   - Text splitting for [data-split="chars"] and [data-split="words"] (runs immediately).
 *   - One requestAnimationFrame loop for every scroll-linked effect ("scenes"): each scene can
 *     implement measure(viewport) — called on load/resize, reads layout — and
 *     render(scrollY, viewport) — called once per frame while scrolling, only writes styles.
 * Must be loaded before the other scripts (all scripts use defer, so order is kept).
 */
(function (window, document) {
  'use strict';

  var reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  var scenes = [];
  var viewport = { width: window.innerWidth, height: window.innerHeight };
  var frameRequested = false;
  var measureTimer = null;

  /**
   * Limits a number to a range.
   * @param {number} value - Number to limit.
   * @param {number} min - Lower bound.
   * @param {number} max - Upper bound.
   * @returns {number} The clamped value.
   */
  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  /**
   * Linear interpolation between two numbers.
   * @param {number} from - Value at t = 0.
   * @param {number} to - Value at t = 1.
   * @param {number} t - Position between 0 and 1.
   * @returns {number} The interpolated value.
   */
  function lerp(from, to, t) {
    return from + (to - from) * t;
  }

  /**
   * Converts a value into a 0–1 progress between two bounds.
   * @param {number} value - Current value.
   * @param {number} start - Value that maps to 0.
   * @param {number} end - Value that maps to 1.
   * @returns {number} Progress clamped to 0–1.
   */
  function progress(value, start, end) {
    if (end === start) return value >= end ? 1 : 0;
    return clamp((value - start) / (end - start), 0, 1);
  }

  /** Easing curves; each takes and returns a number between 0 and 1. */
  var ease = {
    outQuad: function (t) { return 1 - (1 - t) * (1 - t); },
    outCubic: function (t) { return 1 - Math.pow(1 - t, 3); },
    inOutCubic: function (t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  };

  /**
   * Distance from the top of the document to an element (ignores the current scroll position).
   * Only call it on elements that are neither sticky nor transformed, or the value will drift.
   * @param {Element} element - Element to measure.
   * @returns {number} Top offset in CSS pixels.
   */
  function pageTop(element) {
    return element.getBoundingClientRect().top + window.scrollY;
  }

  /**
   * Wraps every character of an element in <span class="char">, keeping a running index in --i
   * so consecutive lines of the same heading animate as one sequence.
   * @param {Element} element - Element whose text gets split.
   * @param {number} startIndex - Index of the first character.
   * @returns {number} Index to use for the next element of the same group.
   */
  function splitChars(element, startIndex) {
    var text = element.textContent.trim();
    var index = startIndex;
    element.textContent = '';
    Array.prototype.forEach.call(text, function (character) {
      var span = document.createElement('span');
      span.className = 'char';
      span.textContent = character;
      span.style.setProperty('--i', index);
      element.appendChild(span);
      index += 1;
    });
    return index;
  }

  /**
   * Wraps every word in .word > .word__mask > .word__in (the mask hides the word until it slides up).
   * Spaces stay as text nodes so screen readers and copy/paste read a normal sentence.
   * @param {Element} element - Element whose text gets split.
   * @returns {void}
   */
  function splitWords(element) {
    var words = element.textContent.trim().split(/\s+/);
    element.textContent = '';
    words.forEach(function (word, index) {
      var outer = document.createElement('span');
      var mask = document.createElement('span');
      var inner = document.createElement('span');
      outer.className = 'word';
      mask.className = 'word__mask';
      inner.className = 'word__in';
      inner.textContent = word;
      outer.style.setProperty('--i', index);
      mask.appendChild(inner);
      outer.appendChild(mask);
      element.appendChild(outer);
      if (index < words.length - 1) element.appendChild(document.createTextNode(' '));
    });
  }

  /**
   * Splits every [data-split] element once. Character indexes continue across the lines of the same
   * [data-split-group] (e.g. the two lines of the hero title animate as one sequence).
   * @returns {void}
   */
  function splitAll() {
    var counters = new Map();
    document.querySelectorAll('[data-split]').forEach(function (element) {
      if (element.getAttribute('data-split') === 'chars') {
        var group = element.closest('[data-split-group]') || element;
        counters.set(group, splitChars(element, counters.get(group) || 0));
      } else {
        splitWords(element);
      }
    });
  }

  /** Runs every scene's render() with the current scroll position. */
  function renderScenes() {
    frameRequested = false;
    var scrollY = window.scrollY;
    scenes.forEach(function (scene) {
      scene.render(scrollY, viewport);
    });
  }

  /** Schedules one render on the next animation frame (extra calls in the same frame are ignored). */
  function requestRender() {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(renderScenes);
  }

  /** Re-reads the viewport and every scene's layout, then renders. */
  function measureScenes() {
    viewport.width = window.innerWidth;
    viewport.height = window.innerHeight;
    scenes.forEach(function (scene) {
      if (scene.measure) scene.measure(viewport);
    });
    requestRender();
  }

  /** Debounced version of measureScenes for resize bursts. */
  function scheduleMeasure() {
    window.clearTimeout(measureTimer);
    measureTimer = window.setTimeout(measureScenes, 120);
  }

  /**
   * Registers a scroll-linked scene.
   * @param {{measure?: function(Object): void, render: function(number, Object): void}} scene
   * @returns {void}
   */
  function addScene(scene) {
    scenes.push(scene);
    if (scene.measure) scene.measure(viewport);
    requestRender();
  }

  splitAll();

  window.addEventListener('scroll', requestRender, { passive: true });
  window.addEventListener('resize', scheduleMeasure);
  window.addEventListener('load', measureScenes);
  if ('ResizeObserver' in window) new ResizeObserver(scheduleMeasure).observe(document.body);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measureScenes);

  window.Seaside = {
    clamp: clamp,
    lerp: lerp,
    progress: progress,
    ease: ease,
    pageTop: pageTop,
    addScene: addScene,
    refresh: measureScenes,
    viewport: viewport,
    /** @returns {boolean} Whether the visitor asked the OS to reduce motion. */
    reducedMotion: function () { return reducedQuery.matches; }
  };
})(window, document);
