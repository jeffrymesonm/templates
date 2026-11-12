/**
 * text-wave.js — Colour wave across headings marked [data-wave="light|dark"].
 *
 * Each heading is split into characters (words never break). A band of colour travels from the
 * first to the last character: dim → peach/orange → final colour. The final colour is the dark
 * text colour on light sections and white on dark sections.
 * - Default: the wave is tied to scroll (starts when the heading enters the viewport and ends
 *   when its top reaches about a quarter of the screen).
 * - [data-wave-trigger="intro"]: plays once over time when the page intro starts (`site:intro`),
 *   with characters fading in as the wave reaches them.
 * Screen readers get the original sentence through an sr-only copy. With reduced motion or
 * without JS the heading keeps its plain final colour.
 */
(function () {
  'use strict';

  var elements = Array.prototype.slice.call(document.querySelectorAll('[data-wave]'));
  if (!elements.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var BAND = .45;          // width of the colour band, as a fraction of the heading
  var STEPS = 48;          // colour precision (states are quantised to avoid needless style writes)
  var INTRO_MS = 1700;
  var RAMPS = {
    light: [[0, '#e4e2df'], [.3, '#f3b896'], [.55, '#ff6b1f'], [.8, '#5b2c15'], [1, '#1c1f22']],
    dark: [[0, '#4b4e53'], [.3, '#8f5634'], [.55, '#ff6b1f'], [.8, '#ffcdb0'], [1, '#ffffff']]
  };

  /**
   * Precomputes STEPS + 1 CSS colours along a ramp.
   * @param {Array<Array>} ramp - [position, hex] stops.
   * @returns {Array<string>} rgb() strings.
   */
  function buildPalette(ramp) {
    var stops = ramp.map(function (stop) {
      var hex = stop[1].replace('#', '');
      return [stop[0], parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16)];
    });
    var palette = [];
    for (var i = 0; i <= STEPS; i++) {
      var s = i / STEPS;
      var k = 0;
      while (k < stops.length - 2 && s > stops[k + 1][0]) k++;
      var a = stops[k];
      var b = stops[k + 1];
      var t = Math.min(1, Math.max(0, (s - a[0]) / (b[0] - a[0])));
      palette.push('rgb(' + Math.round(a[1] + (b[1] - a[1]) * t) + ',' + Math.round(a[2] + (b[2] - a[2]) * t) + ',' + Math.round(a[3] + (b[3] - a[3]) * t) + ')');
    }
    return palette;
  }

  var palettes = { light: buildPalette(RAMPS.light), dark: buildPalette(RAMPS.dark) };

  /**
   * Replaces the heading content with an sr-only copy plus per-character spans.
   * @param {HTMLElement} element - Heading.
   * @returns {Array<HTMLElement>} Character spans in reading order.
   */
  function split(element) {
    var text = element.textContent.replace(/\s+/g, ' ').trim();
    var readable = document.createElement('span');
    readable.className = 'sr-only';
    readable.textContent = text;
    var visual = document.createElement('span');
    visual.setAttribute('aria-hidden', 'true');
    var chars = [];
    text.split(' ').forEach(function (word, index) {
      if (index) visual.appendChild(document.createTextNode(' '));
      var wordSpan = document.createElement('span');
      wordSpan.className = 'wave-word';
      Array.from(word).forEach(function (character) {
        var charSpan = document.createElement('span');
        charSpan.className = 'wave-char';
        charSpan.textContent = character;
        wordSpan.appendChild(charSpan);
        chars.push(charSpan);
      });
      visual.appendChild(wordSpan);
    });
    element.textContent = '';
    element.appendChild(readable);
    element.appendChild(visual);
    return chars;
  }

  var items = elements.map(function (element) {
    var chars = split(element);
    return {
      element: element,
      chars: chars,
      states: new Int16Array(chars.length).fill(-1),
      palette: palettes[element.getAttribute('data-wave') === 'light' ? 'light' : 'dark'],
      intro: element.getAttribute('data-wave-trigger') === 'intro'
    };
  });

  /**
   * Paints every character for a wave position.
   * @param {object} item - Split heading.
   * @param {number} progress - 0 (nothing revealed) → 1 (all characters in their final colour).
   * @returns {void}
   */
  function paint(item, progress) {
    var front = progress * (1 + BAND);
    var last = Math.max(1, item.chars.length - 1);
    for (var i = 0; i < item.chars.length; i++) {
      var s = Math.min(1, Math.max(0, (front - i / last) / BAND));
      var state = Math.round(s * STEPS);
      if (state === item.states[i]) continue;
      item.states[i] = state;
      var style = item.chars[i].style;
      style.color = item.palette[state];
      if (item.intro) style.opacity = Math.min(1, s * 4);
    }
  }

  /* Scroll-driven headings */
  var scrollItems = items.filter(function (item) { return !item.intro; });
  var ticking = false;

  /** Recomputes the wave of every scroll-driven heading near the viewport. */
  function updateScroll() {
    ticking = false;
    var vh = window.innerHeight;
    scrollItems.forEach(function (item) {
      var rect = item.element.getBoundingClientRect();
      if (rect.bottom < -vh || rect.top > vh * 2) return;
      paint(item, Math.min(1, Math.max(0, (vh * .9 - rect.top) / (vh * .65))));
    });
  }

  /** Throttles scroll updates to one per frame. */
  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateScroll);
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  updateScroll();

  /* Intro-driven headings */
  var introItems = items.filter(function (item) { return item.intro; });
  var introPlayed = false;
  introItems.forEach(function (item) { paint(item, 0); });

  /** Plays the intro wave once over INTRO_MS. */
  function playIntro() {
    if (introPlayed) return;
    introPlayed = true;
    var start = performance.now();
    (function step(now) {
      var t = Math.min(1, (now - start) / INTRO_MS);
      var eased = 1 - Math.pow(1 - t, 3);
      introItems.forEach(function (item) { paint(item, eased); });
      if (t < 1) window.requestAnimationFrame(step);
    })(start);
  }

  window.addEventListener('site:intro', function () { window.setTimeout(playIntro, 250); });
  if (document.documentElement.classList.contains('intro-done')) playIntro();
  // Safety net: if the intro event never fires, reveal the heading anyway.
  window.setTimeout(playIntro, 4200);
})();
