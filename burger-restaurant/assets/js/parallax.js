/**
 * parallax.js — Scroll-linked drift for [data-parallax] elements.
 * data-parallax="speed": vertical offset = (element centre − viewport centre) × −speed.
 * data-parallax-scale="1.08": optional constant scale (gives the grill photo room to move).
 * data-parallax-from="768": optional minimum viewport width; below it the element stays put.
 * Elements taller than their parent (photos that overfill a section) never move further than the
 * spare height, so no gap can open at the edges.
 * Put it on a wrapper that has no other transform (rotations live on the inner element).
 * Disabled for reduced motion.
 */
(function () {
  'use strict';

  var items = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  if (!items.length) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var frameRequested = false;
  /** Offset currently applied to each element, so measurements can remove it (no feedback jitter). */
  var applied = new WeakMap();

  /**
   * Applies the offset for every element near the viewport.
   * @returns {void}
   */
  function update() {
    frameRequested = false;
    var viewportCentre = window.innerHeight / 2;

    items.forEach(function (item) {
      var minWidth = parseFloat(item.getAttribute('data-parallax-from')) || 0;
      if (reducedMotion.matches || window.innerWidth < minWidth) {
        item.style.transform = '';
        applied.set(item, 0);
        return;
      }
      var rect = item.getBoundingClientRect();
      // Skip elements far outside the viewport; their last position stays until they come back.
      if (rect.bottom < -window.innerHeight || rect.top > window.innerHeight * 2) return;
      var speed = parseFloat(item.getAttribute('data-parallax')) || 0;
      var scale = parseFloat(item.getAttribute('data-parallax-scale')) || 1;
      // Scale is centred, so only the previous translation has to be removed from the measurement.
      var centre = rect.top + rect.height / 2 - (applied.get(item) || 0);
      var offset = (centre - viewportCentre) * -speed;

      // Overfilling photos: limit the travel to the spare height around the parent box.
      var parentHeight = item.parentElement ? item.parentElement.clientHeight : 0;
      var spare = (item.offsetHeight * scale - parentHeight) / 2;
      if (parentHeight && spare > 0) offset = Math.max(-spare, Math.min(spare, offset));

      applied.set(item, offset);
      item.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)' + (scale !== 1 ? ' scale(' + scale + ')' : '');
    });
  }

  /**
   * Schedules one update per animation frame.
   * @returns {void}
   */
  function requestUpdate() {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(update);
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  update();
})();
