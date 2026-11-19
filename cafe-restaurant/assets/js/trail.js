/**
 * trail.js — Photo trail that follows the pointer across the [data-trail] section.
 *
 * Every time the pointer has travelled far enough, the next photo (round-robin over the
 * [data-trail-item] elements) appears where the pointer was, glides to where it is now, then
 * shrinks and fades away. Each new photo is stacked on top of the previous ones.
 * - Mouse and pen: moving inside the section. Touch: tapping (and dragging until the page scrolls).
 * - Reduced motion: photos only fade in and out in place, without gliding or shrinking.
 * Uses the Web Animations API; without it the section simply has no trail.
 */
(function () {
  'use strict';

  var section = document.querySelector('[data-trail]');
  if (!section) return;

  var items = Array.prototype.slice.call(section.querySelectorAll('[data-trail-item]'));
  if (!items.length || typeof items[0].animate !== 'function') return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var LIFETIME_MS = 900;
  var nextIndex = 0;
  var stackLevel = 1;
  var lastPoint = null;

  /**
   * Pointer distance needed before the next photo appears (shorter on small screens).
   * @returns {number} Distance in CSS pixels.
   */
  function spawnDistance() {
    return Math.max(60, Math.min(110, section.clientWidth * 0.07));
  }

  /**
   * Converts a pointer event into coordinates relative to the section's top-left corner.
   * @param {PointerEvent} event - Pointer event.
   * @returns {{x: number, y: number}} Local point.
   */
  function localPoint(event) {
    var rect = section.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  }

  /**
   * Builds a transform that centres a photo on a point.
   * @param {{x: number, y: number}} point - Local point.
   * @param {HTMLElement} item - Photo element.
   * @param {number} scale - Scale factor.
   * @returns {string} CSS transform.
   */
  function centredOn(point, item, scale) {
    var x = point.x - item.offsetWidth / 2;
    var y = point.y - item.offsetHeight / 2;
    return 'translate3d(' + x.toFixed(1) + 'px, ' + y.toFixed(1) + 'px, 0) scale(' + scale + ')';
  }

  /**
   * Shows the next photo, moving from one point to another before it fades out.
   * @param {{x: number, y: number}} from - Where the photo appears.
   * @param {{x: number, y: number}} to - Where it settles.
   * @returns {void}
   */
  function spawn(from, to) {
    var item = items[nextIndex];
    nextIndex = (nextIndex + 1) % items.length;
    stackLevel += 1;

    item.getAnimations().forEach(function (animation) { animation.cancel(); });
    item.style.zIndex = String(stackLevel);
    item.style.visibility = 'visible';

    var keyframes;
    if (reducedMotion.matches) {
      keyframes = [
        { opacity: 0, transform: centredOn(to, item, 1) },
        { opacity: 1, transform: centredOn(to, item, 1), offset: 0.2 },
        { opacity: 1, transform: centredOn(to, item, 1), offset: 0.6 },
        { opacity: 0, transform: centredOn(to, item, 1) }
      ];
    } else {
      keyframes = [
        { opacity: 1, transform: centredOn(from, item, 1), easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
        { opacity: 1, transform: centredOn(to, item, 1), offset: 0.38, easing: 'cubic-bezier(0.55, 0, 1, 0.45)' },
        { opacity: 0, transform: centredOn(to, item, 0.2) }
      ];
    }

    var animation = item.animate(keyframes, { duration: reducedMotion.matches ? 1400 : LIFETIME_MS });
    animation.onfinish = function () {
      item.style.visibility = 'hidden';
    };
  }

  section.addEventListener('pointermove', function (event) {
    // Touch moves only count while the finger is down (before the browser starts scrolling).
    if (event.pointerType === 'touch' && !event.buttons) return;
    var point = localPoint(event);
    if (!lastPoint) {
      lastPoint = point;
      return;
    }
    var distance = Math.sqrt(Math.pow(point.x - lastPoint.x, 2) + Math.pow(point.y - lastPoint.y, 2));
    if (distance < spawnDistance()) return;
    spawn(lastPoint, point);
    lastPoint = point;
  });

  section.addEventListener('pointerdown', function (event) {
    if (event.pointerType === 'mouse') return;
    var point = localPoint(event);
    spawn(point, point);
    lastPoint = point;
  });

  section.addEventListener('pointerleave', function () {
    lastPoint = null;
  });
})();
