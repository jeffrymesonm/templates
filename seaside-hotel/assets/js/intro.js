/**
 * intro.js — Opening sequence (about 2.5 s). Runs only when the inline head script set html.has-intro
 * (not with reduced motion and not when the page opens on a #section link).
 *   1. Loader: the letters, the script word and the meter animate in (CSS, triggered by html.intro-play).
 *   2. An arch rises from the bottom edge and widens until it opens to full screen, revealing the hero
 *      photo, which settles from 80% to 100% scale. This part is driven here, frame by frame, because
 *      the arch geometry depends on the screen size.
 *   3. The hero copy comes in (CSS, html.hero-in) and scrolling is unlocked.
 * If the browser restored a scrolled position or the hash changes, it jumps straight to the end.
 */
(function (window, document) {
  'use strict';

  var root = document.documentElement;
  if (!root.classList.contains('has-intro') || root.classList.contains('intro-done')) return;

  var Seaside = window.Seaside;
  var stage = document.querySelector('.hero__stage');
  var ring = document.querySelector('[data-intro-ring]');
  var band = document.querySelector('[data-intro-band]');
  var heroWindow = document.querySelector('[data-intro-window]');
  var media = document.querySelector('[data-intro-media]');
  var heroImage = document.querySelector('[data-hero-img]');

  var LOADER_MS = 800;  // time the loader stays on its own
  var RISE_MS = 700;    // arch climbs to near the top
  var OPEN_MS = 750;    // arch widens past the screen edges
  var finished = false;

  // The head script set fallback timers in case this file never loads; from here on intro.js is in charge.
  (window.SeasideIntroSafety || []).forEach(window.clearTimeout);

  /**
   * Ends the intro: removes the frame-by-frame styles, shows the hero copy and unlocks scrolling.
   * Safe to call more than once.
   * @returns {void}
   */
  function finish() {
    if (finished) return;
    finished = true;
    [ring, band, heroWindow].forEach(function (element) {
      if (element) element.style.removeProperty('clip-path');
    });
    if (media) media.style.removeProperty('transform');
    root.classList.add('intro-play', 'intro-out', 'hero-in', 'intro-done');
    root.classList.remove('is-locked');
  }

  if (!Seaside || !stage || !ring || !band || !heroWindow || !media || window.scrollY > 20) {
    finish();
    return;
  }

  window.addEventListener('hashchange', finish, { once: true });

  /**
   * Resolves after a delay.
   * @param {number} ms - Delay in milliseconds.
   * @returns {Promise<void>}
   */
  function wait(ms) {
    return new Promise(function (resolve) { window.setTimeout(resolve, ms); });
  }

  /**
   * Waits for a promise but never longer than the given time; errors count as "done".
   * @param {Promise<*>} promise - Promise to wait for.
   * @param {number} ms - Maximum wait in milliseconds.
   * @returns {Promise<void>}
   */
  function upTo(promise, ms) {
    return Promise.race([promise.then(null, function () {}), wait(ms)]);
  }

  /**
   * Arch position for a moment of the animation.
   * @param {number} elapsed - Milliseconds since the arch started.
   * @param {number} width - Stage width in px.
   * @param {number} height - Stage height in px.
   * @returns {{top: number, half: number}} Top edge of the arch and half its width, in px.
   */
  function archAt(elapsed, width, height) {
    var startHalf = Seaside.clamp(width * 0.145, 120, 230);
    var midHalf = startHalf * 1.35;
    var midTop = height * 0.16;
    if (elapsed <= RISE_MS) {
      var rise = Seaside.ease.outCubic(elapsed / RISE_MS);
      return {
        top: Seaside.lerp(height + 8, midTop, rise),
        half: Seaside.lerp(startHalf, midHalf, rise)
      };
    }
    var open = Seaside.ease.inOutCubic(Math.min(1, (elapsed - RISE_MS) / OPEN_MS));
    return {
      top: Seaside.lerp(midTop, -height * 0.5, open),
      half: Seaside.lerp(midHalf, width * 0.82, open)
    };
  }

  /**
   * Clips an element to an arch: a rectangle from `top` to the bottom edge, `half * 2` wide, centred,
   * with a fully rounded top.
   * @param {HTMLElement} element - Layer to clip.
   * @param {number} top - Top of the arch in px.
   * @param {number} half - Half the arch width in px.
   * @param {number} width - Stage width in px.
   * @returns {void}
   */
  function clipArch(element, top, half, width) {
    var side = width / 2 - half;
    var radius = Math.max(0, half);
    element.style.clipPath = 'inset(' + top.toFixed(1) + 'px ' + side.toFixed(1) + 'px 0px round ' +
      radius.toFixed(1) + 'px ' + radius.toFixed(1) + 'px 0px 0px)';
  }

  /** Animates the arch, then hands over to finish(). */
  function runArch() {
    if (finished) return;
    var start = window.performance.now();
    var copyShown = false;

    /**
     * Draws one frame of the arch.
     * @param {number} now - Timestamp from requestAnimationFrame.
     * @returns {void}
     */
    function frame(now) {
      if (finished) return;
      var elapsed = now - start;
      var width = stage.clientWidth;
      var height = stage.clientHeight;
      var bandWidth = Seaside.clamp(width * 0.02, 16, 28);
      var arch = archAt(elapsed, width, height);

      // Outline (1px light ring), plum band, then the photo window inside it
      clipArch(ring, arch.top, arch.half, width);
      clipArch(band, arch.top + 1, arch.half - 1, width);
      clipArch(heroWindow, arch.top + bandWidth, arch.half - bandWidth, width);

      if (elapsed > RISE_MS) {
        var settle = Seaside.ease.inOutCubic(Math.min(1, (elapsed - RISE_MS) / OPEN_MS));
        media.style.transform = 'translate3d(0,' + (-20 * (1 - settle)).toFixed(2) + '%,0) scale(' +
          (0.8 + 0.2 * settle).toFixed(4) + ')';
        if (!copyShown) {
          copyShown = true;
          root.classList.add('intro-out', 'hero-in');
        }
      }

      if (elapsed < RISE_MS + OPEN_MS) {
        window.requestAnimationFrame(frame);
      } else {
        finish();
      }
    }

    window.requestAnimationFrame(frame);
  }

  var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  // A failed decode (missing or broken file) must not stop the intro, so it resolves either way
  var imageReady = heroImage && heroImage.decode ? heroImage.decode().catch(function () {}) : Promise.resolve();

  upTo(fontsReady, 900)
    .then(function () {
      root.classList.add('intro-play');
      return Promise.all([wait(LOADER_MS), upTo(imageReady, 1800)]);
    })
    .then(runArch);
})(window, document);
