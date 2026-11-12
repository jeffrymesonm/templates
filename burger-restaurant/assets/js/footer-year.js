/**
 * footer-year.js — Writes the current year (UTC) into every [data-year] element,
 * so the footer copyright never goes stale.
 */
(function () {
  'use strict';

  var year = String(new Date().getUTCFullYear());
  document.querySelectorAll('[data-year]').forEach(function (element) {
    element.textContent = year;
  });
})();
