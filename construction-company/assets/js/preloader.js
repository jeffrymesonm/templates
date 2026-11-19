/**
 * preloader.js — Yellow intro screen. A house-shaped window cycles through project photos
 * while a rolling counter goes from 00 to 100; then the window opens into the hero photo and
 * lands exactly on top of it.
 *
 * Timeline (approximate):
 *   0 ms      the window copies the hero photo's box, shrunk into a house in the middle of the
 *             screen; window, bar and counter fade in; the photos change every 450 ms
 *   400 ms    the counter starts (≈1.9 s, eased). It holds at 90 until the hero photo loads,
 *             or until 6.5 s after the page started loading
 *   at 100    +250 ms  the house widens and shows the hero photo        (.is-expanding)
 *             +550 ms  the roof flattens into a rectangle                (.is-flattening)
 *             +450 ms  the window grows into place, the yellow fades,   (.is-placing)
 *                      <html> gets .is-loaded and "site:loaded" fires → the hero copy appears
 *             +900 ms  the real hero photo takes over: window.siteReleasePage() (head script)
 *
 * While the intro runs, the page under it is inert (no Tab stops behind the yellow screen).
 * The head script skips the intro for reduced motion and for links to a section (#…); then this
 * file only makes sure the page is marked as loaded.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var preloader = document.querySelector('[data-preloader]');
  var windowEl = preloader ? preloader.querySelector('[data-preloader-window]') : null;
  var heroCopy = preloader ? preloader.querySelector('[data-preloader-hero]') : null;
  var slides = preloader ? Array.prototype.slice.call(preloader.querySelectorAll('[data-preloader-slides] img')) : [];
  var bar = preloader ? preloader.querySelector('[data-preloader-bar]') : null;
  var counter = preloader ? preloader.querySelector('[data-preloader-count]') : null;
  var heroMedia = document.querySelector('[data-hero-media]');
  var heroImage = heroMedia ? heroMedia.querySelector('img') : null;

  var TIMING = {
    firstSlideWait: 600,   // fade in even if the first photo is still loading
    countStart: 400,
    countDuration: 1900,
    countTick: 140,
    slideEvery: 450,
    beforeExpand: 250,
    expand: 550,
    flatten: 450,
    place: 900,
    maxImageWait: 6500,    // counted from the start of the page load, not from this script
    deadlineMargin: 5000   // extra time before this file's own safety net releases the page
  };
  var HOLD_VALUE = 90;                                   // counter waits here for the hero photo
  var HOUSE_RATIO = 0.87;                                // house width ÷ window height
  var HOUSE_WIDTH = { min: 200, share: 0.21, max: 320 }; // on-screen house width (px / share of the screen)
  var INERT_TARGETS = '.skip-link, .nav, main, .footer'; // page parts hidden behind the intro

  /**
   * Marks the page as loaded (hero copy and nav may enter) and announces it once.
   * The intro overlay stays until markDone().
   * @returns {void}
   */
  function markLoaded() {
    if (root.classList.contains('is-loaded')) return;
    root.classList.add('is-loaded');
    window.dispatchEvent(new CustomEvent('site:loaded'));
  }

  /**
   * Removes the intro for good: scroll, focus and the real hero photo come back.
   * Uses the head script's release (which also restores scroll memory); falls back to the
   * bare classes if that script is missing.
   * @returns {void}
   */
  function markDone() {
    if (typeof window.siteReleasePage === 'function') {
      window.siteReleasePage();
      return;
    }
    root.classList.add('preloader-done');
    root.classList.remove('is-preloading');
  }

  /**
   * Ends everything at once (used when the intro cannot or should not play).
   * @returns {void}
   */
  function releaseNow() {
    markLoaded();
    markDone();
  }

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!preloader || !windowEl || !heroMedia || !counter || reducedMotion || root.classList.contains('preloader-done')) {
    releaseNow();
    return;
  }

  // From here on this file owns the deadline: replace the head script's fixed 9 s safety net
  // with one sized for this intro (set the new one first, so there is never a gap).
  var imageWaitLeft = Math.max(0, TIMING.maxImageWait - window.performance.now());
  var ownDeadline = window.setTimeout(releaseNow, Math.max(TIMING.countDuration, imageWaitLeft) + TIMING.deadlineMargin);
  window.clearTimeout(window.siteReleaseTimer);
  window.siteReleaseTimer = ownDeadline;

  // Nothing behind the yellow screen can take focus while it is up.
  Array.prototype.forEach.call(document.querySelectorAll(INERT_TARGETS), function (element) {
    if (element.hasAttribute('inert')) return;
    element.setAttribute('inert', '');
    element.setAttribute('data-intro-inert', '');
  });

  // Start at the top, without the smooth scrolling set in CSS.
  try {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  } catch (error) {
    window.scrollTo(0, 0);
  }

  var isPlacing = false;
  var imageReady = false;
  var digitStrips = [];
  var slideTimer = null;

  /**
   * Copies the hero photo's box onto the window and shrinks it into a centred house.
   * Safe to call again (fonts, resize): the house stays centred, so nothing visibly jumps.
   * @returns {boolean} False when the hero photo has no size (nothing to animate).
   */
  function layout() {
    var rect = heroMedia.getBoundingClientRect();
    // The overlay's own size: on Windows it excludes the reserved scrollbar gutter.
    var viewWidth = preloader.clientWidth;
    var viewHeight = preloader.clientHeight;
    if (!rect.width || !rect.height) return false;

    // How far each side is cut in so the visible part has the proportions of a house.
    var insetShare = Math.max(0, (1 - (HOUSE_RATIO * rect.height) / rect.width) / 2);
    var houseWidth = rect.width * (1 - 2 * insetShare);
    var targetWidth = Math.min(HOUSE_WIDTH.max, Math.max(HOUSE_WIDTH.min, viewWidth * HOUSE_WIDTH.share));
    var scale = Math.min(1, targetWidth / houseWidth);

    windowEl.style.left = rect.left + 'px';
    windowEl.style.top = rect.top + 'px';
    windowEl.style.width = rect.width + 'px';
    windowEl.style.height = rect.height + 'px';
    windowEl.style.setProperty('--house-inset', (insetShare * 100).toFixed(3) + '%');
    windowEl.style.setProperty('--dx', (viewWidth / 2 - (rect.left + rect.width / 2)).toFixed(2) + 'px');
    windowEl.style.setProperty('--dy', (viewHeight / 2 - (rect.top + rect.height / 2)).toFixed(2) + 'px');
    windowEl.style.setProperty('--s', scale.toFixed(4));

    // Same scroll zoom on the copy and on the real photo, so the hand-over is seamless even if
    // the layout moved (fonts) without a scroll event to refresh the real one.
    if (window.SiteZoom) {
      var zoom = window.SiteZoom.scaleFor(heroMedia).toFixed(4);
      if (heroCopy) heroCopy.style.setProperty('--zoom', zoom);
      if (heroImage) heroImage.style.setProperty('--zoom', zoom);
    }
    return true;
  }

  /**
   * Builds the rolling counter: three slots (hundreds, tens, ones), each a strip of 0–9.
   * @returns {void}
   */
  function buildCounter() {
    counter.textContent = '';
    ['hundreds', 'tens', 'ones'].forEach(function (place) {
      var slot = document.createElement('span');
      slot.className = 'count__slot' + (place === 'hundreds' ? ' count__slot--hundreds' : '');
      var strip = document.createElement('span');
      strip.className = 'count__strip';
      for (var digit = 0; digit <= 9; digit += 1) {
        var cell = document.createElement('span');
        cell.textContent = String(digit);
        strip.appendChild(cell);
      }
      slot.appendChild(strip);
      counter.appendChild(slot);
      digitStrips.push(strip);
    });
  }

  /**
   * Shows a value on the counter and the progress bar.
   * @param {number} value - Integer from 0 to 100.
   * @returns {void}
   */
  function renderCount(value) {
    var parts = [Math.floor(value / 100), Math.floor(value / 10) % 10, value % 10];
    parts.forEach(function (digit, index) {
      digitStrips[index].style.transform = 'translateY(' + (-digit) + 'em)';
    });
    counter.classList.toggle('is-full', value >= 100);
    if (bar) bar.style.setProperty('--progress', String(value / 100));
  }

  /**
   * Ease-in-out cubic: slow start, quick middle, soft landing.
   * @param {number} t - Progress from 0 to 1.
   * @returns {number} Eased progress from 0 to 1.
   */
  function easeInOut(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  /**
   * Calls back once an image has loaded (or failed), or after a timeout — whichever is first.
   * @param {HTMLImageElement|null} image - Image to wait for.
   * @param {number} timeout - Maximum wait in ms.
   * @param {Function} callback - Called exactly once.
   * @returns {void}
   */
  function whenLoaded(image, timeout, callback) {
    var called = false;

    /**
     * Runs the callback the first time any of the triggers fires.
     * @returns {void}
     */
    var done = function () {
      if (called) return;
      called = true;
      callback();
    };

    // complete is also true for an image that already failed: no point waiting for it.
    if (!image || image.complete) {
      done();
      return;
    }
    image.addEventListener('load', done, { once: true });
    image.addEventListener('error', done, { once: true });
    window.setTimeout(done, timeout);
  }

  /**
   * Cycles the photos inside the house until the exit starts.
   * @returns {void}
   */
  function startSlides() {
    if (slides.length < 2) return;
    var index = 0;
    slideTimer = window.setInterval(function () {
      slides[index].classList.remove('is-active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('is-active');
    }, TIMING.slideEvery);
  }

  /**
   * Runs the counter; when it reaches 100 the exit sequence starts.
   * @returns {void}
   */
  function startCounting() {
    var startedAt = window.performance.now();
    var shown = 0;
    var timer = window.setInterval(function () {
      var progress = Math.min(1, (window.performance.now() - startedAt) / TIMING.countDuration);
      var value = Math.round(100 * easeInOut(progress));
      if (!imageReady) value = Math.min(value, HOLD_VALUE);
      if (value !== shown) {
        shown = value;
        renderCount(value);
      }
      if (value >= 100) {
        window.clearInterval(timer);
        window.setTimeout(exit, TIMING.beforeExpand);
      }
    }, TIMING.countTick);
  }

  /**
   * House → wide house → rectangle → lands on the hero photo.
   * @returns {void}
   */
  function exit() {
    window.clearInterval(slideTimer);
    layout();
    preloader.classList.add('is-expanding');
    window.setTimeout(function () {
      preloader.classList.add('is-flattening');
      window.setTimeout(function () {
        isPlacing = true;
        preloader.classList.add('is-placing');
        markLoaded();
        window.setTimeout(finish, TIMING.place);
      }, TIMING.flatten);
    }, TIMING.expand);
  }

  /**
   * Hands over to the real page once the window has landed.
   * @returns {void}
   */
  function finish() {
    window.removeEventListener('resize', onResize);
    markDone();
  }

  /**
   * Keeps the window glued to the hero photo while the intro is still counting.
   * @returns {void}
   */
  function onResize() {
    if (!isPlacing) layout();
  }

  // First placement without transitions, or the house would visibly reshape as it fades in.
  windowEl.style.transition = 'none';
  var hasBox = layout();
  void windowEl.offsetWidth; // flush the start state before transitions come back
  windowEl.style.transition = '';
  if (!hasBox) {
    releaseNow();
    return;
  }

  buildCounter();
  renderCount(0);
  window.addEventListener('resize', onResize);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(onResize);
  }

  // Fade in once the first photo can be shown (two frames later, so the start state is painted).
  whenLoaded(slides[0] || null, TIMING.firstSlideWait, function () {
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        preloader.classList.add('is-ready');
        startSlides();
        window.setTimeout(startCounting, TIMING.countStart);
      });
    });
  });

  whenLoaded(heroImage, imageWaitLeft, function () {
    imageReady = true;
  });
})();
