/**
 * menu.js — Dropdown menu in the header.
 * The toggle ("Menú" ⇄ "Cerrar") opens a red panel and a blurred backdrop, locks page scroll and
 * makes the rest of the page inert so keyboard focus stays in the header. Closes on the toggle,
 * a menu link, the backdrop or Escape; focus returns to the toggle except after following a link.
 */
(function () {
  'use strict';

  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-menu]');
  if (!toggle || !menu) return;

  var root = document.documentElement;
  var backdrop = document.querySelector('[data-menu-backdrop]');
  var label = toggle.querySelector('[data-menu-label]');
  var background = document.querySelectorAll('[data-menu-inert]');
  var isOpen = false;

  /**
   * Returns a translated string, with a fallback if i18n.js did not load.
   * @param {string} key - Translation key.
   * @param {string} fallback - Text used when no translator is available.
   * @returns {string} Text in the current language.
   */
  function t(key, fallback) {
    return window.SiteI18n ? window.SiteI18n.t(key) : fallback;
  }

  /**
   * Updates the visible label and the accessible name of the toggle.
   * @returns {void}
   */
  function syncToggle() {
    if (label) label.textContent = isOpen ? t('nav.close', 'Cerrar') : t('nav.menu', 'Menú');
    toggle.setAttribute('aria-label', isOpen ? t('nav.closeMenu', 'Cerrar menú') : t('nav.openMenu', 'Abrir menú'));
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
    if (open) menu.removeAttribute('inert');
    else menu.setAttribute('inert', '');
    background.forEach(function (element) {
      element.inert = open;
    });
    syncToggle();

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

  // Following a link closes the menu; the browser then scrolls to the anchor.
  menu.addEventListener('click', function (event) {
    if (event.target.closest('[data-menu-link]')) setOpen(false, false);
  });

  if (backdrop) {
    backdrop.addEventListener('click', function () {
      setOpen(false, true);
    });
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen) setOpen(false, true);
  });

  window.addEventListener('i18n:change', syncToggle);
  syncToggle();
})();
