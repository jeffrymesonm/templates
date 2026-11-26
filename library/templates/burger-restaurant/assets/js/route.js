/**
 * route.js — Dashed route through the location cards, with a paper plane that flies along it
 * as the visitor scrolls.
 * The path is built from the real card positions (top centre → each card → bottom left), so it
 * follows the desktop layout and the alternating mobile list alike, and survives copy changes.
 * Rebuilt on resize, after fonts load, after a language switch and after titles are refitted.
 * The plane is hidden for reduced motion (the route line stays).
 */
(function () {
  'use strict';

  var route = document.querySelector('[data-route]');
  if (!route) return;

  var svg = route.querySelector('.route__path');
  var path = route.querySelector('[data-route-path]');
  var plane = route.querySelector('[data-route-plane]');
  var cards = Array.prototype.slice.call(route.querySelectorAll('.spot__card'));
  if (!svg || !path || !cards.length) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var TENSION = 1.35;    // > 1 makes wider, swoopier curves between stops
  var ICON_ANGLE = -45;  // the send icon points up-right; this aligns it with the path direction
  var length = 0;
  var width = 0;
  var height = 0;
  var frameRequested = false;

  /**
   * Builds a smooth cubic path through the points (Catmull-Rom converted to Bézier segments).
   * @param {Array<Array<number>>} points - [x, y] pairs in route coordinates.
   * @returns {string} SVG path data.
   */
  function smoothPath(points) {
    var d = 'M' + points[0][0].toFixed(1) + ',' + points[0][1].toFixed(1);
    for (var i = 0; i < points.length - 1; i += 1) {
      var p0 = points[i - 1] || points[i];
      var p1 = points[i];
      var p2 = points[i + 1];
      var p3 = points[i + 2] || p2;
      var c1x = p1[0] + ((p2[0] - p0[0]) / 6) * TENSION;
      var c1y = p1[1] + ((p2[1] - p0[1]) / 6) * TENSION;
      var c2x = p2[0] - ((p3[0] - p1[0]) / 6) * TENSION;
      var c2y = p2[1] - ((p3[1] - p1[1]) / 6) * TENSION;
      d += ' C' + c1x.toFixed(1) + ',' + c1y.toFixed(1) + ' ' + c2x.toFixed(1) + ',' + c2y.toFixed(1) + ' ' + p2[0].toFixed(1) + ',' + p2[1].toFixed(1);
    }
    return d;
  }

  /**
   * Measures the cards and redraws the route in pixel coordinates of the route box.
   * Uses offset geometry (not getBoundingClientRect) so reveal and rotation transforms are ignored.
   * @returns {void}
   */
  function build() {
    width = route.clientWidth;
    height = route.clientHeight;
    if (!width || !height) return;

    var points = [[width * 0.5, 0]];
    cards.forEach(function (card) {
      var item = card.parentElement; // the .spot <li>, positioned inside the list
      var x = item.offsetLeft + card.offsetLeft + card.offsetWidth / 2;
      var y = item.offsetTop + card.offsetTop + card.offsetHeight / 2;
      // On desktop each <li> is shifted with `translate`; include it so the line hits the card.
      var style = window.getComputedStyle(item);
      var shift = (style.translate || '').split(' ');
      if (shift.length === 2 && shift[0] !== 'none') {
        x += (parseFloat(shift[0]) / 100) * (shift[0].indexOf('%') > -1 ? item.offsetWidth : 100);
        y += (parseFloat(shift[1]) / 100) * (shift[1].indexOf('%') > -1 ? item.offsetHeight : 100);
      }
      points.push([x, y]);
    });
    points.push([width * 0.2, height]);

    svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height);
    path.setAttribute('d', smoothPath(points));
    length = path.getTotalLength();
    requestUpdate();
  }

  /**
   * Places the plane on the route according to scroll progress through the route box.
   * @returns {void}
   */
  function update() {
    frameRequested = false;
    if (!plane || !length) return;
    if (reducedMotion.matches) {
      plane.style.opacity = '0';
      return;
    }

    var rect = route.getBoundingClientRect();
    var progress = (window.innerHeight * 0.55 - rect.top) / rect.height;
    progress = Math.min(1, Math.max(0, progress));

    var at = progress * length;
    var point = path.getPointAtLength(at);
    var ahead = path.getPointAtLength(Math.min(length, at + 2));
    var behind = path.getPointAtLength(Math.max(0, at - 2));
    var angle = Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180 / Math.PI;

    plane.style.transform = 'translate(' + point.x.toFixed(1) + 'px,' + point.y.toFixed(1) + 'px) translate(-50%,-50%) rotate(' + (angle - ICON_ANGLE).toFixed(1) + 'deg)';
    plane.style.opacity = progress > 0.01 && progress < 0.99 ? '1' : '0';
  }

  /**
   * Schedules one plane update per animation frame.
   * @returns {void}
   */
  function requestUpdate() {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(update);
  }

  var rebuildTimer = null;
  /**
   * Debounced rebuild for layout-changing events.
   * @returns {void}
   */
  function scheduleBuild() {
    window.clearTimeout(rebuildTimer);
    rebuildTimer = window.setTimeout(build, 120);
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', scheduleBuild);
  window.addEventListener('i18n:change', scheduleBuild);
  window.addEventListener('fit:done', scheduleBuild);
  window.addEventListener('load', scheduleBuild);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(scheduleBuild);
  build();
})();
