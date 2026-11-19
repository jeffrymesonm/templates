/**
 * nav.js — Fixed navigation bar and the menu card for phones and tablets.
 *
 * - After 50 px of scroll the bar shrinks (80 → 60 px) and gets a blurred dark background.
 * - Below 1024 px the "+" button opens a floating menu card. It closes with its own button,
 *   a link, Escape, a click outside it, or when the window grows past 1024 px.
 *   Focus moves into the menu when it opens, Tab cycles inside it while it is open (the card
 *   covers the top of the page), and focus returns to the "+" button when it is dismissed.
 */
(function () {
  'use strict';

  var nav = document.querySelector('[data-nav]');
  var menu = document.querySelector('[data-menu]');
  var openButton = document.querySelector('[data-menu-open]');
  var closeButton = menu ? menu.querySelector('[data-menu-close]') : null;

  var SCROLL_THRESHOLD = 50;
  var LABEL_OPEN = 'Abrir menú';
  var LABEL_CLOSE = 'Cerrar menú';

  /* ---------- Scrolled state ---------- */
  if (nav) {
    var scrollFrameRequested = false;

    /**
     * Toggles the compact bar depending on the scroll position.
     * @returns {void}
     */
    var syncScrolled = function () {
      scrollFrameRequested = false;
      nav.classList.toggle('is-scrolled', window.scrollY > SCROLL_THRESHOLD);
    };

    syncScrolled();
    // At most one update per frame while scrolling.
    window.addEventListener('scroll', function () {
      if (scrollFrameRequested) return;
      scrollFrameRequested = true;
      window.requestAnimationFrame(syncScrolled);
    }, { passive: true });
  }

  /* ---------- Menu card ---------- */
  if (!menu || !openButton) return;

  /**
   * Whether the menu is currently open.
   * @returns {boolean} True when open.
   */
  function isOpen() {
    return menu.classList.contains('is-open');
  }

  /**
   * Opens or closes the menu and keeps ARIA state and focus in sync.
   * @param {boolean} open - True to open, false to close.
   * @param {boolean} [restoreFocus] - When closing, return focus to the "+" button.
   * @returns {void}
   */
  function setOpen(open, restoreFocus) {
    if (open === isOpen()) return;
    menu.classList.toggle('is-open', open);
    if (open) {
      menu.removeAttribute('inert');
    } else {
      menu.setAttribute('inert', '');
    }
    openButton.setAttribute('aria-expanded', String(open));
    openButton.setAttribute('aria-label', open ? LABEL_CLOSE : LABEL_OPEN);

    if (open) {
      var firstLink = menu.querySelector('a');
      if (firstLink) firstLink.focus({ preventScroll: true });
    } else if (restoreFocus) {
      openButton.focus({ preventScroll: true });
    }
  }

  /**
   * Keeps Tab / Shift+Tab inside the open menu, wrapping from the last control to the first.
   * @param {KeyboardEvent} event - keydown event from inside the menu.
   * @returns {void}
   */
  function trapFocus(event) {
    if (event.key !== 'Tab' || !isOpen()) return;
    var focusables = menu.querySelectorAll('a[href], button:not([disabled])');
    if (!focusables.length) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  /**
   * Closes the menu when the page grows past the breakpoint where the menu stops existing.
   * @param {MediaQueryListEvent} event - Change event of the desktop media query.
   * @returns {void}
   */
  function onBreakpointChange(event) {
    if (event.matches) setOpen(false, false);
  }

  // "+" toggles; the card's own button closes.
  openButton.addEventListener('click', function () {
    setOpen(!isOpen(), true);
  });

  if (closeButton) {
    closeButton.addEventListener('click', function () {
      setOpen(false, true);
    });
  }

  // Following a link closes the menu; the browser then scrolls to the section.
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false, false);
  });

  menu.addEventListener('keydown', trapFocus);

  // Escape closes the menu from anywhere.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) setOpen(false, true);
  });

  // A click anywhere outside the card (and outside "+") closes it.
  document.addEventListener('click', function (event) {
    if (!isOpen()) return;
    if (menu.contains(event.target) || openButton.contains(event.target)) return;
    setOpen(false, false);
  });

  var desktopQuery = window.matchMedia('(min-width: 1024px)');
  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener('change', onBreakpointChange);
  } else if (desktopQuery.addListener) {
    desktopQuery.addListener(onBreakpointChange);
  }
})();
