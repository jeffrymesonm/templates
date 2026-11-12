/**
 * menu.js — Full-screen navigation menu.
 * The toggle opens a curtain overlay (animated in CSS), locks page scroll, makes the rest of
 * the page inert so keyboard focus stays in the nav and menu, and moves focus to the first
 * link. Closes on the toggle, a menu link, or Escape, and returns focus to the toggle.
 */
(function () {
  'use strict';

  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-menu]');
  if (!toggle || !menu) return;

  var root = document.documentElement;
  var background = document.querySelectorAll('[data-menu-inert]');
  var isOpen = false;

  /**
   * Returns a translated label, with a fallback if i18n.js did not load.
   * @param {string} key - Translation key.
   * @param {string} fallback - Text used when no translator is available.
   * @returns {string} Label text.
   */
  function label(key, fallback) {
    return window.SiteI18n ? window.SiteI18n.t(key) : fallback;
  }

  /**
   * Updates the toggle's accessible name for the current state.
   * @returns {void}
   */
  function syncToggleLabel() {
    toggle.setAttribute('aria-label', isOpen ? label('nav.closeMenu', 'Cerrar menú') : label('nav.openMenu', 'Abrir menú'));
  }

  /**
   * Opens or closes the menu.
   * @param {boolean} open - Desired state.
   * @param {boolean} restoreFocus - When closing, move focus back to the toggle.
   * @returns {void}
   */
  function setOpen(open, restoreFocus) {
    if (open === isOpen) return;
    isOpen = open;

    menu.classList.toggle('is-open', open);
    root.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    syncToggleLabel();

    if (open) {
      menu.removeAttribute('inert');
    } else {
      menu.setAttribute('inert', '');
    }
    background.forEach(function (element) {
      element.inert = open;
    });

    if (open) {
      var firstLink = menu.querySelector('a, button');
      if (firstLink) firstLink.focus({ preventScroll: true });
    } else if (restoreFocus) {
      toggle.focus({ preventScroll: true });
    }
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen, true);
  });

  // A link closes the menu; the browser then follows the anchor (smooth scroll in CSS).
  menu.addEventListener('click', function (event) {
    if (event.target.closest('[data-menu-link]')) setOpen(false, false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen) setOpen(false, true);
  });

  window.addEventListener('i18n:change', syncToggleLabel);
  syncToggleLabel();
})();
