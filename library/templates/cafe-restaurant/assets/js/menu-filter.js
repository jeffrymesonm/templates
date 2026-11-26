/**
 * menu-filter.js — Category filter for the menu grid.
 *
 * - Buttons [data-filter="all|<category>"] show the dishes whose data-category matches.
 *   The grid fades out, the matching dishes come back one after another (.is-entering).
 * - Links [data-filter-link="<category>"] (footer) pick a filter before jumping to the menu.
 * - A polite live region ([data-filter-status]) says how many dishes are shown.
 * Rapid clicks are safe: only the last choice is applied (token check). With reduced motion
 * the grid switches at once. Requires i18n.js for the status text; falls back to Spanish.
 */
(function () {
  'use strict';

  var grid = document.querySelector('[data-dish-grid]');
  var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-filter]'));
  if (!grid || !buttons.length) return;

  var items = Array.prototype.slice.call(grid.querySelectorAll('[data-category]'));
  var status = document.querySelector('[data-filter-status]');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var LEAVE_MS = 180;
  var current = 'all';
  var token = 0;

  /**
   * Checks whether a dish belongs to a filter.
   * @param {HTMLElement} item - Dish element with data-category.
   * @param {string} filter - "all" or a category name.
   * @returns {boolean} True when the dish should be shown.
   */
  function matches(item, filter) {
    return filter === 'all' || item.getAttribute('data-category') === filter;
  }

  /**
   * Announces the number of visible dishes to screen readers.
   * @param {number} count - Visible dishes.
   * @returns {void}
   */
  function announce(count) {
    if (!status) return;
    var template = window.SiteI18n ? window.SiteI18n.t('menu.status') : 'Mostrando {count} opciones del menú.';
    status.textContent = template.replace('{count}', String(count));
  }

  /**
   * Shows the dishes of a filter and hides the rest.
   * @param {string} filter - "all" or a category name.
   * @returns {number} How many dishes are visible.
   */
  function apply(filter) {
    var order = 0;
    items.forEach(function (item) {
      var show = matches(item, filter);
      item.hidden = !show;
      item.classList.remove('is-entering');
      if (show) {
        // A dish brought back by the filter counts as revealed (reveal.js would wait for a scroll).
        item.classList.add('is-visible');
        item.style.setProperty('--order', String(order));
        order += 1;
      }
    });

    if (!reducedMotion.matches) {
      void grid.offsetWidth; // restart the CSS animation on dishes that were already entering
      items.forEach(function (item) {
        if (!item.hidden) item.classList.add('is-entering');
      });
    }
    return order;
  }

  /**
   * Switches to a filter, animating the change unless reduced motion is on.
   * @param {string} filter - "all" or a category name.
   * @returns {void}
   */
  function setFilter(filter) {
    var known = buttons.some(function (button) { return button.getAttribute('data-filter') === filter; });
    if (!known || filter === current) return;
    current = filter;

    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-filter') === filter));
    });

    var clickToken = ++token;
    if (reducedMotion.matches) {
      announce(apply(filter));
      return;
    }

    grid.classList.add('is-leaving');
    window.setTimeout(function () {
      if (clickToken !== token) return; // a newer click already took over
      grid.classList.remove('is-leaving');
      announce(apply(filter));
    }, LEAVE_MS);
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      setFilter(button.getAttribute('data-filter'));
    });
  });

  document.querySelectorAll('[data-filter-link]').forEach(function (link) {
    link.addEventListener('click', function () {
      setFilter(link.getAttribute('data-filter-link'));
    });
  });
})();
