/**
 * hero-badges.js — Motion for the stats over the hero photo.
 *
 * - From 768 px, with a mouse: the three floating badges lean toward the pointer in 3D
 *   (each one a bit more than the previous, set with data-depth). Their idle floating is CSS.
 * - Below 768 px: a single badge cycles through the same stats every 3 s.
 * - Reduced motion: no tilt and no cycling (the first stat stays).
 */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  /* ---------- Phones: cycling badge ---------- */
  var cycle = document.querySelector('[data-badge-cycle]');
  var CYCLE_MS = 3000;

  if (cycle) {
    var cycleItems = Array.prototype.slice.call(cycle.querySelectorAll('[data-badge-item]'));
    var activeIndex = 0;
    if (cycleItems.length > 1) {
      // Every 3 s: hide the current stat and show the next one.
      window.setInterval(function () {
        // Skip while hidden: no point animating a tab nobody is looking at.
        if (document.hidden || cycle.offsetParent === null) return;
        cycleItems[activeIndex].classList.remove('is-active');
        activeIndex = (activeIndex + 1) % cycleItems.length;
        cycleItems[activeIndex].classList.add('is-active');
      }, CYCLE_MS);
    }
  }

  /* ---------- Desktop: pointer tilt ---------- */
  var badges = Array.prototype.slice.call(document.querySelectorAll('[data-badge]'));
  var hero = document.querySelector('.hero');
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!badges.length || !hero || !finePointer) return;

  var MAX_TILT_DEG = 10;
  var MAX_LIFT_PX = 18;
  var EASING = 0.08;          // share of the remaining distance covered each frame
  var REST_EPSILON = 0.001;

  var layers = badges.map(function (badge) {
    return {
      tilt: badge.querySelector('.badge__tilt'),
      depth: parseFloat(badge.getAttribute('data-depth')) || 1
    };
  });
  var target = { x: 0, y: 0 };
  var current = { x: 0, y: 0 };
  var frameId = null;
  var heroVisible = true;

  /**
   * Writes the current tilt on every badge (deeper badges lean and lift more).
   * @returns {void}
   */
  function render() {
    var lift = (Math.abs(current.x) + Math.abs(current.y)) / 2;
    layers.forEach(function (layer) {
      if (!layer.tilt) return;
      layer.tilt.style.transform =
        'rotateX(' + (-current.y * MAX_TILT_DEG * layer.depth).toFixed(3) + 'deg) ' +
        'rotateY(' + (current.x * MAX_TILT_DEG * layer.depth).toFixed(3) + 'deg) ' +
        'translateZ(' + (lift * MAX_LIFT_PX * layer.depth).toFixed(2) + 'px)';
    });
  }

  /**
   * Eases the tilt toward the pointer; stops requesting frames once it settles.
   * @returns {void}
   */
  function tick() {
    frameId = null;
    current.x += (target.x - current.x) * EASING;
    current.y += (target.y - current.y) * EASING;
    render();
    if (Math.abs(target.x - current.x) > REST_EPSILON || Math.abs(target.y - current.y) > REST_EPSILON) {
      frameId = window.requestAnimationFrame(tick);
    }
  }

  /**
   * Starts the easing loop if it is not already running.
   * @returns {void}
   */
  function wake() {
    if (frameId === null) frameId = window.requestAnimationFrame(tick);
  }

  // The pointer sets the target tilt (only while the hero is on screen).
  window.addEventListener('mousemove', function (event) {
    if (!heroVisible) return;
    // -1 … 1 from the centre of the window.
    target.x = (event.clientX / window.innerWidth) * 2 - 1;
    target.y = (event.clientY / window.innerHeight) * 2 - 1;
    wake();
  }, { passive: true });

  // Pointer left the window: ease the badges back to rest.
  document.documentElement.addEventListener('mouseleave', function () {
    target.x = 0;
    target.y = 0;
    wake();
  });

  // Hero scrolled away: stop following the pointer and ease back to rest.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      heroVisible = entries[0].isIntersecting;
      if (!heroVisible) {
        target.x = 0;
        target.y = 0;
        wake();
      }
    }).observe(hero);
  }
})();
