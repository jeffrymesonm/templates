/**
 * menu.js — Fullscreen menu: open/close, keyboard and focus handling, anchor scrolling.
 *
 * - The toggle opens a dark overlay that wipes down from the top (CSS clip-path); links slide up.
 * - While open: page scroll is locked (html.menu-open), the rest of the page is inert,
 *   Escape closes it and focus returns to the toggle.
 * - Any in-page link inside the header closes the menu first, then scrolls to its section.
 * Requires i18n.js (window.SiteI18n) for the toggle's label; falls back to Spanish without it.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var header = document.querySelector('[data-menu-root]');
  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-menu]');
  if (!header || !toggle || !menu) return;

  var inertTargets = Array.prototype.slice.call(document.querySelectorAll('[data-menu-inert], .skip-link'));
  var links = Array.prototype.slice.call(menu.querySelectorAll('.menu__link'));
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var isOpen = false;

  menu.style.setProperty('--count', String(links.length));

  /**
   * Translates a runtime label, with a Spanish fallback if i18n.js is missing.
   * @param {string} key - Translation key.
   * @param {string} fallback - Spanish text.
   * @returns {string} Label in the current language.
   */
  function label(key, fallback) {
    return window.SiteI18n ? window.SiteI18n.t(key) : fallback;
  }

  /**
   * Updates the toggle's accessible name for the current state and language.
   * @returns {void}
   */
  function updateToggleLabel() {
    toggle.setAttribute('aria-label', isOpen ? label('nav.closeMenu', 'Cerrar menú') : label('nav.openMenu', 'Abrir menú'));
  }

  /**
   * Opens or closes the menu.
   * @param {boolean} open - Desired state.
   * @param {{restoreFocus?: boolean}} [options] - restoreFocus: move focus back to the toggle.
   * @returns {void}
   */
  function setOpen(open, options) {
    if (open === isOpen) return;
    isOpen = open;

    menu.classList.toggle('is-open', open);
    menu.inert = !open;
    root.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    inertTargets.forEach(function (element) { element.inert = open; });
    updateToggleLabel();

    if (open) {
      // Wait for the overlay to become visible before moving focus into it.
      window.setTimeout(function () { if (isOpen && links[0]) links[0].focus({ preventScroll: true }); }, 60);
    } else if (options && options.restoreFocus) {
      toggle.focus({ preventScroll: true });
    }
  }

  /**
   * Scrolls to the section an in-page link points at.
   * @param {string} hash - Link hash such as "#contact".
   * @returns {void}
   */
  function scrollToHash(hash) {
    var target = hash.length > 1 ? document.getElementById(hash.slice(1)) : null;
    if (!target) return;
    target.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
    if (window.history && window.history.replaceState) window.history.replaceState(null, '', hash);
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen, { restoreFocus: false });
  });

  // In-page links in the bar or the menu: close first (unlocks scrolling), then scroll.
  header.addEventListener('click', function (event) {
    var link = event.target.closest('a[href^="#"]');
    if (!link || !isOpen) return;
    event.preventDefault();
    setOpen(false);
    scrollToHash(link.getAttribute('href'));
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen) setOpen(false, { restoreFocus: true });
  });

  window.addEventListener('i18n:change', updateToggleLabel);
  updateToggleLabel();
})();
