/**
 * reveal.js — Entrance animations that play the first time an element scrolls into view
 * (html.js scopes the hidden states in styles.css; this file only adds .is-in):
 *   [data-reveal]          fades and rises; [data-reveal="mask"] slides its child up out of a mask
 *   [data-split="words"]   words slide up one after another (split by core.js)
 *   [data-wipe]            handwritten words are wiped in from left to right
 * It also adds the small "+" marks after the last word of each line of [data-plus] headings,
 * recalculated when the width changes because line breaks move.
 * Hero and "From the house" titles are animated by intro.js and destinations.js instead.
 */
(function (window, document) {
  'use strict';

  var Seaside = window.Seaside;
  var targets = Array.prototype.slice.call(
    document.querySelectorAll('[data-reveal], [data-split="words"]:not(.dest__name), [data-wipe]')
  );
  var plusHeadings = Array.prototype.slice.call(document.querySelectorAll('[data-plus]'));
  var lastWidth = window.innerWidth;
  var resizeTimer = null;

  /**
   * Appends a "+" mark to the last word of every rendered line of a split heading.
   * @param {Element} heading - Heading already split into .word elements.
   * @returns {void}
   */
  function addPlusMarks(heading) {
    heading.querySelectorAll('.word__plus').forEach(function (mark) { mark.remove(); });
    var words = heading.querySelectorAll('.word');
    for (var i = 0; i < words.length; i += 1) {
      var isLineEnd = i === words.length - 1 || words[i + 1].offsetTop > words[i].offsetTop + 2;
      if (!isLineEnd) continue;
      var mark = document.createElement('span');
      var inner = document.createElement('span');
      var sup = document.createElement('sup');
      mark.className = 'word__plus';
      mark.setAttribute('aria-hidden', 'true');
      inner.className = 'word__plus-in';
      sup.textContent = '+';
      inner.appendChild(sup);
      mark.appendChild(inner);
      words[i].appendChild(mark);
    }
  }

  /**
   * Marks an element as revealed.
   * @param {Element} element - Element to reveal.
   * @returns {void}
   */
  function show(element) {
    element.classList.add('is-in');
  }

  plusHeadings.forEach(addPlusMarks);
  if (document.fonts && document.fonts.ready) {
    // Line breaks change once the web fonts arrive
    document.fonts.ready.then(function () { plusHeadings.forEach(addPlusMarks); });
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth === lastWidth) return; // mobile bars hiding only change the height
    lastWidth = window.innerWidth;
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(function () { plusHeadings.forEach(addPlusMarks); }, 150);
  });

  var reduced = Seaside ? Seaside.reducedMotion() : false;
  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(show);
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      show(entry.target);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });

  targets.forEach(function (target) {
    observer.observe(target);
  });
})(window, document);
