/**
 * scroll-effects.js — Every scroll-linked effect in one requestAnimationFrame pass.
 *
 * - [data-float="rate"]: hero cards drift up by rate × 100% of their own height while the
 *   hero scrolls out (rate 1 for the left card, 0.75 for the right one).
 * - [data-zoom]: the photo or video inside zooms out from 1.11 to 1 while its box crosses the
 *   viewport (box top at the bottom edge → box bottom at the top edge).
 * - html.is-scrolled once the page has moved, so the nav brand gets its frosted pill.
 * Layout is read only in measure() (load, resize, fonts, language, page height changes);
 * render() only writes styles. Reduced motion keeps the brand pill but drops the motion.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var hero = document.querySelector('[data-hero]');
  var ZOOM_FROM = 1.11;
  var SCROLLED_AT = 24;

  var floats = Array.prototype.slice.call(document.querySelectorAll('[data-float]')).map(function (element) {
    return { element: element, rate: parseFloat(element.getAttribute('data-float')) || 1 };
  });

  var zooms = Array.prototype.slice.call(document.querySelectorAll('[data-zoom]')).map(function (box) {
    return { box: box, media: box.querySelector('img, video'), top: 0, height: 0 };
  }).filter(function (zoom) { return zoom.media; });

  var heroTop = 0;
  var heroHeight = 1;
  var viewportHeight = window.innerHeight;
  var frame = 0;
  var scrolledState = null;

  /**
   * Clamps a number between two bounds.
   * @param {number} value - Number to clamp.
   * @param {number} min - Lower bound.
   * @param {number} max - Upper bound.
   * @returns {number} The clamped value.
   */
  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  /**
   * Distance from the top of the document to an element, ignoring CSS transforms
   * (reveal and parallax transforms would otherwise skew the measurement).
   * @param {HTMLElement} element - Element to measure.
   * @returns {number} Offset in CSS pixels.
   */
  function pageTop(element) {
    var top = 0;
    while (element) {
      top += element.offsetTop;
      element = element.offsetParent;
    }
    return top;
  }

  /**
   * Reads every position the effects need. Runs only when layout may have changed.
   * @returns {void}
   */
  function measure() {
    viewportHeight = window.innerHeight;
    if (hero) {
      heroTop = pageTop(hero);
      heroHeight = hero.offsetHeight || 1;
    }
    zooms.forEach(function (zoom) {
      zoom.top = pageTop(zoom.box);
      zoom.height = zoom.box.offsetHeight;
    });
  }

  /**
   * Writes the styles for the current scroll position (no layout reads).
   * @returns {void}
   */
  function render() {
    frame = 0;
    var scrollY = window.scrollY || window.pageYOffset;
    var still = reducedMotion.matches;

    var isScrolled = scrollY > SCROLLED_AT;
    if (isScrolled !== scrolledState) {
      scrolledState = isScrolled;
      root.classList.toggle('is-scrolled', isScrolled);
    }

    var heroProgress = still ? 0 : clamp((scrollY - heroTop) / heroHeight, 0, 1);
    floats.forEach(function (item) {
      item.element.style.transform = heroProgress
        ? 'translate3d(0, ' + (-item.rate * heroProgress * 100).toFixed(3) + '%, 0)'
        : '';
    });

    zooms.forEach(function (zoom) {
      var progress = clamp((scrollY + viewportHeight - zoom.top) / (viewportHeight + zoom.height), 0, 1);
      var scale = still ? 1 : 1 + (ZOOM_FROM - 1) * (1 - progress);
      zoom.media.style.transform = scale > 1 ? 'scale(' + scale.toFixed(4) + ')' : '';
    });
  }

  /**
   * Schedules one render on the next frame (coalesces bursts of scroll events).
   * @returns {void}
   */
  function requestRender() {
    if (!frame) frame = window.requestAnimationFrame(render);
  }

  /**
   * Re-reads the layout, then renders.
   * @returns {void}
   */
  function refresh() {
    measure();
    requestRender();
  }

  window.addEventListener('scroll', requestRender, { passive: true });
  window.addEventListener('resize', refresh);
  window.addEventListener('load', refresh);
  window.addEventListener('fit:done', refresh);
  window.addEventListener('i18n:change', refresh);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
  // Images loading, the menu filter or the language can change the page height.
  if ('ResizeObserver' in window) new ResizeObserver(refresh).observe(document.body);
  if (reducedMotion.addEventListener) {
    reducedMotion.addEventListener('change', requestRender);
  } else if (reducedMotion.addListener) {
    reducedMotion.addListener(requestRender);
  }

  measure();
  render();
})();
