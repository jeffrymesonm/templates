/**
 * odometer.js — Rolling digits for the stats ([data-odometer] holds the number, e.g. "24").
 *
 * Each digit becomes a vertical reel 0–9 that rolls to its value, left to right, the first time
 * the stat is visible. Screen readers read the plain number (sr-only copy). With reduced motion
 * or without IntersectionObserver the number stays as plain text.
 */
(function () {
  'use strict';

  var numbers = document.querySelectorAll('[data-odometer]');
  if (!numbers.length || !('IntersectionObserver' in window) ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var STAGGER_MS = 90;

  /**
   * Replaces the number with digit reels.
   * @param {HTMLElement} element - Element whose text is the number.
   * @returns {Array<{reel: HTMLElement, digit: number}>} Reels to roll.
   */
  function build(element) {
    var text = element.textContent.trim();
    var reels = [];
    var readable = document.createElement('span');
    readable.className = 'sr-only';
    readable.textContent = text;
    var visual = document.createElement('span');
    visual.className = 'odo';
    visual.setAttribute('aria-hidden', 'true');

    Array.from(text).forEach(function (character, index) {
      if (!/\d/.test(character)) {
        visual.appendChild(document.createTextNode(character));
        return;
      }
      var digit = document.createElement('span');
      digit.className = 'odo__digit';
      var ghost = document.createElement('span');
      ghost.className = 'odo__ghost';
      ghost.textContent = character;
      var reel = document.createElement('span');
      reel.className = 'odo__reel';
      reel.style.setProperty('--delay', index * STAGGER_MS + 'ms');
      for (var n = 0; n <= 9; n++) {
        var cell = document.createElement('span');
        cell.textContent = String(n);
        reel.appendChild(cell);
      }
      digit.appendChild(ghost);
      digit.appendChild(reel);
      visual.appendChild(digit);
      reels.push({ reel: reel, digit: Number(character) });
    });

    element.textContent = '';
    element.appendChild(readable);
    element.appendChild(visual);
    return reels;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      entry.target.odometerReels.forEach(function (item) {
        item.reel.style.transform = 'translateY(' + (-item.digit * 1.1) + 'em)';
      });
    });
  }, { threshold: .4 });

  numbers.forEach(function (element) {
    element.odometerReels = build(element);
    observer.observe(element);
  });
})();
