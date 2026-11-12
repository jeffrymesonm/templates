/**
 * footer-year.js — Writes the current year (UTC) into every [data-year] element,
 * so the copyright line never goes stale.
 */
(function (document) {
  'use strict';

  var year = String(new Date().getUTCFullYear());
  document.querySelectorAll('[data-year]').forEach(function (element) {
    element.textContent = year;
  });
})(document);
