/**
 * sliders.js — Carousels marked with [data-slider].
 *   data-slider="fade"    slides stacked on top of each other, cross-fade (about photos)
 *   data-slider="slide"   horizontal track; two clones on each side make it loop endlessly
 *                         (houses, gallery). Slide width comes from the CSS variable --basis
 *                         (percent of the viewport, default 100); narrower slides are centred.
 *   data-autoplay="ms"    optional timer. The [data-slider-bar] fill animates as the countdown and
 *                         pauses while the slider is hovered, focused, off screen or the tab is hidden.
 *                         Disabled with reduced motion.
 * Controls: [data-slider-prev], [data-slider-next], [data-slider-current] and [data-slider-total]
 * (both filled in here), plus swipe on touch screens.
 * Hidden slides get aria-hidden and inert so their links can't be reached with the keyboard.
 */
(function (window, document) {
  'use strict';

  var CLONES_PER_SIDE = 2;
  var SWIPE_MIN_PX = 40;

  /**
   * Copies a slide for the looping edges, without ids or slide semantics.
   * @param {HTMLElement} slide - Original slide.
   * @returns {HTMLElement} The clone.
   */
  function makeClone(slide) {
    var clone = slide.cloneNode(true);
    ['data-slide', 'role', 'aria-roledescription', 'aria-label', 'id'].forEach(function (name) {
      clone.removeAttribute(name);
    });
    clone.querySelectorAll('[id]').forEach(function (element) { element.removeAttribute('id'); });
    clone.setAttribute('aria-hidden', 'true');
    clone.setAttribute('inert', '');
    clone.classList.add('is-clone');
    return clone;
  }

  /**
   * Turns one [data-slider] element into a working carousel.
   * @param {HTMLElement} root - The slider element.
   * @returns {void}
   */
  function createSlider(root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('[data-slide]'));
    var count = slides.length;
    if (count < 2) return;

    var mode = root.getAttribute('data-slider') === 'fade' ? 'fade' : 'slide';
    var track = root.querySelector('.slider__track');
    var swipeArea = root.querySelector('.slider__viewport') || slides[0].parentElement;
    var prevButton = root.querySelector('[data-slider-prev]');
    var nextButton = root.querySelector('[data-slider-next]');
    var currentLabel = root.querySelector('[data-slider-current]');
    var totalLabel = root.querySelector('[data-slider-total]');
    var bar = root.querySelector('[data-slider-bar]');
    var reduced = window.Seaside ? window.Seaside.reducedMotion() : false;
    var autoplay = reduced ? 0 : parseInt(root.getAttribute('data-autoplay'), 10) || 0;
    var current = 0;
    var position = 0;
    var items = slides;
    var clonesPerSide = Math.min(CLONES_PER_SIDE, count);
    var pauseState = { inView: false, hover: false, focus: false };
    var swipeStart = null;

    if (mode === 'slide' && !track) return;

    /**
     * Reads the slide width (percent of the viewport) from the CSS.
     * @returns {number} Width in percent.
     */
    function readBasis() {
      var value = parseFloat(window.getComputedStyle(root).getPropertyValue('--basis'));
      return value > 0 ? value : 100;
    }

    /**
     * Writes the track offset and marks the slide at the current position as active.
     * @param {number} offset - Horizontal offset in percent of the viewport.
     * @param {boolean} animate - false jumps instantly (no transition on the track or inside it).
     * @returns {void}
     */
    function setTrack(offset, animate) {
      if (!animate) track.classList.add('is-snapping');
      track.style.transform = 'translate3d(' + offset.toFixed(4) + '%,0,0)';
      items.forEach(function (item, index) {
        item.classList.toggle('is-active', index === position);
      });
      if (!animate) {
        void track.offsetWidth; // apply the jump before transitions come back
        track.classList.remove('is-snapping');
      }
    }

    /**
     * Moves the track to the current position (narrower slides stay centred).
     * @param {boolean} animate - false jumps instantly.
     * @returns {void}
     */
    function placeTrack(animate) {
      var basis = readBasis();
      setTrack((100 - basis) / 2 - position * basis, animate);
    }

    /** If the track is resting on a clone, jumps to the matching real slide (looks identical). */
    function leaveClone() {
      var realPosition = clonesPerSide + current;
      if (position === realPosition) return;
      position = realPosition;
      placeTrack(false);
    }

    /**
     * Renumbers the track by a whole loop (±count slides) without any visible movement, even in the
     * middle of a transition: the on-screen offset is read and shifted by exactly one loop.
     * Used when fast repeated clicks would otherwise run past the last clone.
     * @param {number} delta - Slides to add to the position (+count or -count).
     * @returns {void}
     */
    function shiftByLoop(delta) {
      var matrix = new DOMMatrixReadOnly(window.getComputedStyle(track).transform);
      var onScreen = track.offsetWidth ? (matrix.m41 / track.offsetWidth) * 100 : 0;
      position += delta;
      setTrack(onScreen - delta * readBasis(), false);
    }

    /**
     * Cross-fades from the current slide to another one.
     * @param {number} next - Index of the slide to show.
     * @returns {void}
     */
    function fadeTo(next) {
      var leaving = slides[current];
      leaving.classList.remove('is-active');
      leaving.classList.add('is-leaving');
      slides[next].classList.remove('is-leaving');
      slides[next].classList.add('is-active');
      window.setTimeout(function () {
        if (!leaving.classList.contains('is-active')) leaving.classList.remove('is-leaving');
      }, 1100);
    }

    /** Updates the counter and hides inactive slides from assistive technology. */
    function updateState() {
      if (currentLabel) currentLabel.textContent = String(current + 1);
      slides.forEach(function (slide, index) {
        var hidden = index !== current;
        slide.setAttribute('aria-hidden', hidden ? 'true' : 'false');
        if (hidden) slide.setAttribute('inert', '');
        else slide.removeAttribute('inert');
      });
    }

    /** Restarts the autoplay countdown (the bar animation drives the timing). */
    function restartTimer() {
      if (!autoplay || !bar) return;
      root.classList.remove('is-playing');
      void bar.offsetWidth; // restart the CSS animation
      root.classList.add('is-playing');
    }

    /** Pauses or resumes the countdown according to visibility, hover and focus. */
    function updatePause() {
      var paused = !pauseState.inView || pauseState.hover || pauseState.focus || document.hidden;
      root.classList.toggle('is-paused', paused);
    }

    /**
     * Moves one or more slides forward or back, looping at the ends.
     * @param {number} step - +1 for next, -1 for previous.
     * @returns {void}
     */
    function go(step) {
      var next = (current + step + count) % count;
      if (mode === 'slide') {
        var target = position + step;
        if (target < 0 || target > items.length - 1) {
          shiftByLoop(target < 0 ? count : -count); // never run out of clones on fast repeated clicks
          target = position + step;
        }
        position = target;
        current = next;
        placeTrack(true);
      } else {
        fadeTo(next);
        current = next;
      }
      updateState();
      restartTimer();
    }

    // Build the looping track
    if (mode === 'slide') {
      var before = slides.slice(count - clonesPerSide).map(makeClone);
      var after = slides.slice(0, clonesPerSide).map(makeClone);
      before.forEach(function (clone) { track.insertBefore(clone, slides[0]); });
      after.forEach(function (clone) { track.appendChild(clone); });
      items = before.concat(slides, after);
      position = clonesPerSide;
      placeTrack(false);
      track.addEventListener('transitionend', function (event) {
        if (event.target === track && event.propertyName === 'transform') leaveClone();
      });
      window.addEventListener('resize', function () { placeTrack(false); });
    }

    if (prevButton) prevButton.addEventListener('click', function () { go(-1); });
    if (nextButton) nextButton.addEventListener('click', function () { go(1); });

    // Swipe (touch and pen only; mouse users have the buttons)
    swipeArea.addEventListener('pointerdown', function (event) {
      if (event.pointerType === 'mouse') return;
      swipeStart = { x: event.clientX, y: event.clientY };
    });
    swipeArea.addEventListener('pointerup', function (event) {
      if (!swipeStart) return;
      var dx = event.clientX - swipeStart.x;
      var dy = event.clientY - swipeStart.y;
      swipeStart = null;
      if (Math.abs(dx) > SWIPE_MIN_PX && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1);
    });
    swipeArea.addEventListener('pointercancel', function () { swipeStart = null; });

    if (totalLabel) totalLabel.textContent = String(count);
    updateState();

    if (autoplay && bar) {
      root.style.setProperty('--autoplay', autoplay + 'ms');
      bar.addEventListener('animationend', function () { go(1); });
      root.addEventListener('mouseenter', function () { pauseState.hover = true; updatePause(); });
      root.addEventListener('mouseleave', function () { pauseState.hover = false; updatePause(); });
      root.addEventListener('focusin', function () { pauseState.focus = true; updatePause(); });
      root.addEventListener('focusout', function (event) {
        pauseState.focus = root.contains(event.relatedTarget);
        updatePause();
      });
      document.addEventListener('visibilitychange', updatePause);
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          pauseState.inView = entries[0].isIntersecting;
          updatePause();
        }, { threshold: 0.3 }).observe(root);
      } else {
        pauseState.inView = true;
      }
      updatePause();
      restartTimer();
    }
  }

  document.querySelectorAll('[data-slider]').forEach(createSlider);
})(window, document);
