/**
 * tab-shapes.js — Gives elements a raised "tab" along their top edge with clip-path: path().
 *
 * [data-tab-shape="media"]  → pricing photos: rounded corners plus a small tab in the middle.
 * [data-tab-shape="footer"] → footer: square sides, a wide raised middle with curved shoulders.
 * Paths are rebuilt whenever the element changes size. Without support (or JS) the photos keep
 * plain rounded corners and the footer a straight top edge.
 */
(function () {
  'use strict';

  var elements = document.querySelectorAll('[data-tab-shape]');
  if (!elements.length || !window.CSS || !CSS.supports('clip-path', 'path("M0 0 L1 0 L1 1 Z")')) return;

  /**
   * Builds the outline: body from y = rise down, plus a tab from `inset` to `width - inset` up to y = 0.
   * @param {number} width - Element width in px.
   * @param {number} height - Element height in px.
   * @param {{rise:number, inset:number, shoulder:number, radius:number}} o - Shape settings.
   * @returns {string} SVG path data.
   */
  function tabPath(width, height, o) {
    var r = o.radius;
    var y = o.rise;
    var half = o.shoulder / 2;
    var a = o.inset;
    var b = o.inset + o.shoulder;
    var c = width - o.inset - o.shoulder;
    var d = width - o.inset;
    return [
      'M0', y + r,
      r ? 'Q0 ' + y + ' ' + r + ' ' + y : '',
      'L' + a, y,
      'C' + (a + half), y, b - half, 0, b, 0,
      'L' + c, 0,
      'C' + (c + half), 0, d - half, y, d, y,
      'L' + (width - r), y,
      r ? 'Q' + width + ' ' + y + ' ' + width + ' ' + (y + r) : '',
      'L' + width, height - r,
      r ? 'Q' + width + ' ' + height + ' ' + (width - r) + ' ' + height : '',
      'L' + r, height,
      r ? 'Q0 ' + height + ' 0 ' + (height - r) : '',
      'Z'
    ].join(' ').replace(/\s+/g, ' ');
  }

  /** Shape settings per variant, given the element width. */
  var VARIANTS = {
    media: function (width) {
      return { rise: 14, inset: width * .22, shoulder: 30, radius: 12 };
    },
    footer: function (width) {
      var large = window.innerWidth >= 1024;
      return { rise: large ? 40 : 20, inset: width * .16, shoulder: large ? 58 : 30, radius: 0 };
    }
  };

  /**
   * Applies the path for the element's current size.
   * @param {HTMLElement} element - Shaped element.
   * @returns {void}
   */
  function apply(element) {
    var variant = VARIANTS[element.getAttribute('data-tab-shape')];
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (!variant || !width || !height) return;
    element.style.clipPath = 'path("' + tabPath(width, height, variant(width)) + '")';
    element.setAttribute('data-shaped', '');
  }

  if ('ResizeObserver' in window) {
    var observer = new ResizeObserver(function (entries) {
      entries.forEach(function (entry) { apply(entry.target); });
    });
    elements.forEach(function (element) { observer.observe(element); });
  } else {
    elements.forEach(apply);
    window.addEventListener('resize', function () { elements.forEach(apply); });
  }
})();
