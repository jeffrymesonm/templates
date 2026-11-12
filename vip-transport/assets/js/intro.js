/**
 * intro.js — Preloader and page intro.
 *
 * The brand word is typed letter by letter, each letter first shown as an orange block. Then the
 * preloader fades out, <html> gets `intro-done` (CSS fades in the hero content) and the
 * `site:intro` event tells particles.js and text-wave.js to start their entrance.
 * With reduced motion the preloader is skipped. The inline script in <head> also adds
 * `intro-done` after 4 s in case this file never runs.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var preloader = document.querySelector('[data-preloader]');
  var word = document.querySelector('[data-preloader-word]');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var STEP_MS = 90;        // delay between letters
  var BLOCK_MS = 110;      // how long each letter stays as an orange block
  var HOLD_MS = 280;       // pause once the word is complete
  var FADE_MS = 500;       // must match the preloader transition in styles.css
  var started = false;

  /** Marks the intro as started and notifies the other modules (runs once). */
  function startIntro() {
    if (started) return;
    started = true;
    root.classList.add('intro-done');
    window.dispatchEvent(new CustomEvent('site:intro'));
  }

  /** Fades the preloader out and starts the intro. */
  function finish() {
    if (preloader) {
      preloader.classList.add('is-leaving');
      window.setTimeout(function () { preloader.classList.add('is-gone'); }, FADE_MS + 50);
    }
    startIntro();
  }

  if (!preloader || !word || reduceMotion) {
    if (preloader) preloader.classList.add('is-gone');
    startIntro();
    return;
  }

  var letters = Array.from(word.textContent.trim());
  word.textContent = '';
  var spans = letters.map(function (letter) {
    var span = document.createElement('span');
    span.className = 'preloader__char';
    span.textContent = letter;
    word.appendChild(span);
    return span;
  });

  spans.forEach(function (span, index) {
    window.setTimeout(function () { span.classList.add('is-block'); }, index * STEP_MS);
    window.setTimeout(function () {
      span.classList.remove('is-block');
      span.classList.add('is-shown');
    }, index * STEP_MS + BLOCK_MS);
  });

  window.setTimeout(finish, (spans.length - 1) * STEP_MS + BLOCK_MS + HOLD_MS);
})();
