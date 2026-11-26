/**
 * mobile-menu.js — Opens and closes the floating menu panel on small screens.
 * Closes on link click, close button, Escape key, or when resizing to desktop width.
 */
(function () {
  'use strict';

  var menu = document.querySelector('[data-menu]');
  var toggle = document.querySelector('[data-menu-toggle]');
  var closeButton = document.querySelector('[data-menu-close]');
  var ANIMATION_MS = 300;
  var hideTimer = null;
  // Single source of truth, so rapid clicks can never leave the panel half-open.
  var isOpen = false;

  if (!menu || !toggle) {
    return;
  }

  /**
   * Opens the menu panel and moves focus inside it.
   * @returns {void}
   */
  function openMenu() {
    if (isOpen) {
      return;
    }
    isOpen = true;
    window.clearTimeout(hideTimer);
    menu.hidden = false;
    // Next frame so the panel animates from its hidden state (skipped if closed meanwhile).
    requestAnimationFrame(function () {
      if (isOpen) {
        menu.classList.add('is-open');
      }
    });
    toggle.setAttribute('aria-expanded', 'true');
    if (closeButton) {
      closeButton.focus();
    }
  }

  /**
   * Closes the menu panel after its exit transition.
   * @param {boolean} restoreFocus - Whether focus should return to the toggle button.
   * @returns {void}
   */
  function closeMenu(restoreFocus) {
    if (!isOpen) {
      return;
    }
    isOpen = false;
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    window.clearTimeout(hideTimer);
    hideTimer = window.setTimeout(function () {
      if (!isOpen) {
        menu.hidden = true;
      }
    }, ANIMATION_MS);
    if (restoreFocus) {
      toggle.focus();
    }
  }

  toggle.addEventListener('click', function () {
    if (isOpen) {
      closeMenu(false);
    } else {
      openMenu();
    }
  });

  if (closeButton) {
    closeButton.addEventListener('click', function () {
      closeMenu(true);
    });
  }

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      closeMenu(false);
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeMenu(true);
    }
  });

  window.matchMedia('(min-width: 768px)').addEventListener('change', function (query) {
    if (query.matches) {
      closeMenu(false);
    }
  });
})();
