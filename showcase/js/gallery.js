/*
 * gallery.js — Builds the gallery cards on index.html from window.SHOWCASE_TEMPLATES
 * (templates-data.js). Each card links to viewer.html?t=<id>.
 */
(function () {
  'use strict';

  var templates = window.SHOWCASE_TEMPLATES;
  var list = document.querySelector('[data-gallery]');

  if (!list) return;

  if (!Array.isArray(templates) || templates.length === 0) {
    list.insertAdjacentHTML('afterend', '<p class="gallery-empty">No hay templates en la lista. Agrégalos en showcase/js/templates-data.js.</p>');
    return;
  }

  /**
   * Creates an element with a class and optional text.
   * @param {string} tag - Tag name.
   * @param {string} className - Class to set.
   * @param {string} [text] - Text content (set with textContent, never as HTML).
   * @returns {HTMLElement} The new element.
   */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  /**
   * Creates a lazily loaded screenshot image.
   * @param {string} className - Class for positioning on the stage.
   * @param {string} src - Image URL.
   * @param {number} width - Intrinsic width (reserves layout space).
   * @param {number} height - Intrinsic height.
   * @param {boolean} eager - Load immediately (first cards, above the fold).
   * @returns {HTMLImageElement} The image (decorative: the card text names the template).
   */
  function screenshot(className, src, width, height, eager) {
    var img = el('img', className);
    img.src = src;
    img.alt = '';
    img.width = width;
    img.height = height;
    img.loading = eager ? 'eager' : 'lazy';
    img.decoding = 'async';
    return img;
  }

  /**
   * Builds one gallery card for a template.
   * @param {Object} template - Entry from SHOWCASE_TEMPLATES.
   * @param {number} index - Position in the list (the first two load eagerly).
   * @returns {HTMLLIElement} The list item holding the card link.
   */
  function buildCard(template, index) {
    var eager = index < 2;
    var item = el('li', 'card');
    item.id = template.id;

    var link = el('a', 'card-link');
    link.href = 'viewer.html?t=' + encodeURIComponent(template.id);
    link.setAttribute('aria-label', 'Ver ' + template.name + ' en vivo, ' + template.industry);

    var stage = el('div', 'card-stage');
    stage.style.setProperty('--stage', template.stage);
    stage.appendChild(screenshot('card-desktop', 'showcase/img/' + template.id + '-desktop.webp', 1440, 900, eager));
    stage.appendChild(screenshot('card-phone', 'showcase/img/' + template.id + '-mobile.webp', 600, 1298, eager));

    var body = el('div', 'card-body');
    body.appendChild(el('h2', 'card-name', template.name));
    body.appendChild(el('p', 'card-languages', template.languages));
    body.appendChild(el('p', 'card-industry', template.industry));
    body.appendChild(el('p', 'card-description', template.description));
    body.appendChild(el('span', 'card-cta', 'Ver en vivo'));

    link.appendChild(stage);
    link.appendChild(body);
    item.appendChild(link);
    return item;
  }

  var fragment = document.createDocumentFragment();
  templates.forEach(function (template, index) {
    fragment.appendChild(buildCard(template, index));
  });
  list.appendChild(fragment);

  // Returning from the viewer uses index.html#<id>: the cards did not exist when the browser
  // tried to scroll to the hash, so scroll to that card now.
  if (location.hash.length > 1) {
    var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView({ block: 'start' });
  }
})();
