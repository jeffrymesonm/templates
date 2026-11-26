/**
 * intro.js — Starts the hero entrance once the handwritten font is ready.
 *
 * The wordmark is sized by fit-text.js from the real glyph widths, so the hero waits for the
 * display font (at most 1.5 s), lets fit-text.js apply the size, then adds html.hero-in.
 * The CSS does the rest: title fade, word-by-word copy, buttons, video frame, floating cards.
 * The <head> script adds hero-in after 3.5 s if this file never runs.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var MAX_WAIT_MS = 1500;
  var started = false;

  /**
   * Adds html.hero-in after two frames, so the fitted font size is painted first.
   * Safe to call more than once.
   * @returns {void}
   */
  function start() {
    if (started) return;
    started = true;
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        root.classList.add('hero-in');
      });
    });
  }

  var fonts = document.fonts;
  if (!fonts || !fonts.load || !window.Promise) {
    start();
    return;
  }

  // Ask for the display face explicitly: "ready" alone can resolve before it starts loading.
  Promise.all([fonts.load('600 1em "Shantell Sans"'), fonts.ready]).then(start, start);
  window.setTimeout(start, MAX_WAIT_MS);
})();
