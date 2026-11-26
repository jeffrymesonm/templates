/**
 * menu.js — Side drawer menu (used below 1512 px; wider screens show the links in the bar).
 *
 * Opens from the burger; closes with the × button, a click outside, Escape or a link.
 * While open, the rest of the page is inert so keyboard focus stays inside the drawer, and focus
 * returns to the burger when closed with × or Escape.
 */
(function () {
  'use strict';

  var drawer = document.querySelector('[data-menu]');
  var openButton = document.querySelector('[data-menu-open]');
  var closeButton = document.querySelector('[data-menu-close]');
  var scrim = document.querySelector('[data-menu-scrim]');
  if (!drawer || !openButton || !closeButton || !scrim) return;

  var background = [document.querySelector('.nav'), document.querySelector('main'), document.querySelector('footer')]
    .filter(Boolean);
  var wideScreen = window.matchMedia('(min-width: 1512px)');
  var isOpen = false;

  /**
   * Opens or closes the drawer.
   * @param {boolean} open - Target state.
   * @param {boolean} [restoreFocus] - Move focus back to the burger after closing.
   * @returns {void}
   */
  function setOpen(open, restoreFocus) {
    if (open === isOpen) return;
    isOpen = open;
    drawer.classList.toggle('is-open', open);
    scrim.classList.toggle('is-open', open);
    openButton.setAttribute('aria-expanded', String(open));
    if (open) drawer.removeAttribute('inert');
    else drawer.setAttribute('inert', '');
    background.forEach(function (element) {
      if (open) element.setAttribute('inert', '');
      else element.removeAttribute('inert');
    });
    if (open) closeButton.focus({ preventScroll: true });
    else if (restoreFocus) openButton.focus({ preventScroll: true });
  }

  openButton.addEventListener('click', function () { setOpen(true); });
  closeButton.addEventListener('click', function () { setOpen(false, true); });
  scrim.addEventListener('click', function () { setOpen(false, true); });

  drawer.querySelectorAll('[data-menu-link]').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen) setOpen(false, true);
  });

  /** Closes the drawer if the window grows past the breakpoint where it is hidden. */
  function onBreakpoint() {
    if (wideScreen.matches) setOpen(false);
  }
  if (typeof wideScreen.addEventListener === 'function') wideScreen.addEventListener('change', onBreakpoint);
})();
