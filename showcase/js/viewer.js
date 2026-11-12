/*
 * viewer.js — Live viewer (viewer.html): loads one template from window.SHOWCASE_TEMPLATES in an iframe,
 * switches device width (desktop / tablet / mobile), steps to the previous / next template, and keeps
 * the choice in the URL (?t=<id>&d=<device>) without adding history entries, so Back returns to the gallery.
 */
(function () {
  'use strict';

  var DEVICES = ['desktop', 'tablet', 'mobile'];
  var SITE_TITLE = 'Portafolio de templates';

  var templates = window.SHOWCASE_TEMPLATES;
  var stage = document.querySelector('[data-stage]');
  var nameNode = document.querySelector('[data-name]');
  var industryNode = document.querySelector('[data-industry]');
  var countNode = document.querySelector('[data-count]');
  var openLink = document.querySelector('[data-open]');
  var backLink = document.querySelector('[data-back]');
  var deviceButtons = Array.prototype.slice.call(document.querySelectorAll('[data-devices] [data-device]'));
  var stepButtons = Array.prototype.slice.call(document.querySelectorAll('[data-step]'));

  if (!stage || !nameNode) return;

  if (!Array.isArray(templates) || templates.length === 0) {
    nameNode.textContent = 'Sin templates';
    stage.insertAdjacentHTML('beforeend', '<p class="stage-message">No hay templates en la lista. Agrégalos en showcase/js/templates-data.js.</p>');
    return;
  }

  var params = new URLSearchParams(location.search);
  var state = {
    index: findIndex(params.get('t')),
    device: DEVICES.indexOf(params.get('d')) >= 0 ? params.get('d') : 'desktop'
  };

  /**
   * Finds a template by id.
   * @param {string|null} id - Template id from the URL.
   * @returns {number} Its index, or 0 (the first template) when the id is missing or unknown.
   */
  function findIndex(id) {
    for (var i = 0; i < templates.length; i += 1) {
      if (templates[i].id === id) return i;
    }
    return 0;
  }

  /**
   * Returns the URL of a template's page, relative to viewer.html.
   * index.html is explicit so it also works when the files are opened from disk.
   * @param {Object} template - Entry from SHOWCASE_TEMPLATES.
   * @returns {string} Relative URL.
   */
  function templateUrl(template) {
    return template.folder + '/index.html';
  }

  /**
   * Replaces the iframe with a fresh one for the current template.
   * A new element (instead of changing src) stops the old template at once (WebGL, video)
   * and adds no entry to the browser history. It is also rebuilt on device change so the
   * template runs its own phone / tablet / desktop setup from the start.
   */
  function mountFrame() {
    var template = templates[state.index];
    var old = stage.querySelector('.stage-frame');
    if (old) old.remove();

    var frame = document.createElement('iframe');
    frame.className = 'stage-frame';
    frame.title = 'Vista en vivo de ' + template.name;
    frame.src = templateUrl(template);
    frame.setAttribute('allow', 'fullscreen');
    if (state.device !== 'desktop') frame.addEventListener('load', hideScrollbar);
    stage.appendChild(frame);
  }

  /**
   * Hides the desktop scrollbar inside a tablet / phone preview, as on a real device; otherwise
   * a classic Windows scrollbar would shrink a 390 px phone screen to about 375 px.
   * Only touches the running page, never the template files.
   * @param {Event} event - The iframe load event.
   */
  function hideScrollbar(event) {
    try {
      var doc = event.target.contentDocument;
      var style = doc.createElement('style');
      style.textContent = 'html{scrollbar-width:none}html::-webkit-scrollbar{display:none}';
      doc.head.appendChild(style);
    } catch (error) {
      // Opened from disk (file://) the iframe counts as another origin; the scrollbar just stays visible.
    }
  }

  /**
   * Updates the toolbar, stage colour, page title and URL for the current state.
   */
  function render() {
    var template = templates[state.index];
    var total = templates.length;
    var prev = templates[(state.index - 1 + total) % total];
    var next = templates[(state.index + 1) % total];

    nameNode.textContent = template.name;
    industryNode.textContent = template.industry;
    countNode.textContent = (state.index + 1) + ' / ' + total;
    document.title = template.name + ' | ' + SITE_TITLE;
    stage.style.setProperty('--stage', template.stage);
    stage.setAttribute('data-device', state.device);

    openLink.href = templateUrl(template);
    openLink.setAttribute('aria-label', 'Abrir ' + template.name + ' en una pestaña nueva');
    backLink.href = 'index.html#' + encodeURIComponent(template.id);

    stepButtons.forEach(function (button) {
      var target = button.getAttribute('data-step') === '-1' ? prev : next;
      var label = (button.getAttribute('data-step') === '-1' ? 'Template anterior: ' : 'Template siguiente: ') + target.name;
      button.setAttribute('aria-label', label);
      button.title = label;
    });

    deviceButtons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-device') === state.device));
    });

    var query = '?t=' + encodeURIComponent(template.id) + (state.device === 'desktop' ? '' : '&d=' + state.device);
    if (location.search !== query) history.replaceState(null, '', query);
  }

  /**
   * Switches the preview width. Does nothing when the device is already active.
   * @param {string} device - One of DEVICES.
   */
  function setDevice(device) {
    if (DEVICES.indexOf(device) < 0 || device === state.device) return;
    state.device = device;
    render();
    mountFrame();
  }

  /**
   * Moves to another template, wrapping around at both ends.
   * @param {number} offset - -1 for previous, 1 for next.
   */
  function step(offset) {
    var total = templates.length;
    state.index = (state.index + offset + total) % total;
    render();
    mountFrame();
  }

  deviceButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      setDevice(button.getAttribute('data-device'));
    });
  });

  stepButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      step(Number(button.getAttribute('data-step')));
    });
  });

  render();
  mountFrame();
})();
