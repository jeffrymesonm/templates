/**
 * fit-text.js — Keeps big titles inside their box.
 * - [data-fit]: if the widest line is wider than the element, the font size shrinks to fit
 *   (never grows past the size set in CSS). Lines are the .line__inner spans, or the text itself.
 * - [data-fit="fill"]: the text is scaled up or down to span the full width (footer logo).
 * Re-runs on resize, when web fonts finish loading and after a language switch.
 */
(function () {
  'use strict';

  var elements = Array.prototype.slice.call(document.querySelectorAll('[data-fit]'));
  if (!elements.length) return;

  var SAFETY = 0.98; // leaves room for the outline stroke
  var frameRequested = false;

  /**
   * Measures the rendered width of an element's text content.
   * @param {Element} element - Element whose text is measured.
   * @returns {number} Width in CSS pixels.
   */
  function textWidth(element) {
    var range = document.createRange();
    range.selectNodeContents(element);
    return range.getBoundingClientRect().width;
  }

  /**
   * Returns the widest line of a title at its current font size.
   * Transforms (reveal animations) do not change offsetWidth, so lines can be measured mid-animation.
   * @param {HTMLElement} element - Title element.
   * @returns {number} Widest line width in CSS pixels.
   */
  function widestLine(element) {
    var lines = element.querySelectorAll('.line__inner');
    if (!lines.length) return textWidth(element);
    var widest = 0;
    lines.forEach(function (line) {
      widest = Math.max(widest, line.offsetWidth);
    });
    return widest;
  }

  /**
   * Fits one element to its available width.
   * @param {HTMLElement} element - Element marked with data-fit.
   * @returns {void}
   */
  function fit(element) {
    element.style.fontSize = '';
    var available = element.clientWidth;
    if (!available) return;
    var size = parseFloat(window.getComputedStyle(element).fontSize);
    var width = widestLine(element);
    if (!width) return;

    var fill = element.getAttribute('data-fit') === 'fill';
    if (fill || width > available) {
      element.style.fontSize = (size * (available / width) * SAFETY).toFixed(2) + 'px';
    }
  }

  /**
   * Fits every marked element once per animation frame.
   * @returns {void}
   */
  function fitAll() {
    frameRequested = false;
    elements.forEach(fit);
    window.dispatchEvent(new CustomEvent('fit:done'));
  }

  /**
   * Schedules a refit on the next frame (coalesces bursts of resize events).
   * @returns {void}
   */
  function requestFit() {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(fitAll);
  }

  window.addEventListener('resize', requestFit);
  window.addEventListener('i18n:change', requestFit);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(requestFit);
    // The handwritten face can finish after "ready" resolved (it only starts once text needs it).
    if (document.fonts.addEventListener) document.fonts.addEventListener('loadingdone', requestFit);
  }
  fitAll();
})();
