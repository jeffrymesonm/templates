/**
 * i18n.js — Language switching (Spanish base, English via translations.js).
 *
 * - The <head> script has already chosen the initial language and stored it in <html data-lang>.
 * - Spanish copy is read once from the markup, so switching back restores it exactly.
 * - Elements opt in with data-i18n="key" (text) and data-i18n-<attr>="key" for
 *   placeholder, aria-label, alt, content and title.
 * - Buttons with data-lang-option="es|en" switch language and save the choice.
 * Exposes window.SiteI18n = { t, setLanguage, getLanguage } and fires "i18n:change" on window.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'site-lang';
  var ATTRIBUTES = ['placeholder', 'aria-label', 'alt', 'content', 'title'];
  var root = document.documentElement;
  var baseLanguage = root.getAttribute('lang') || 'es';
  var dictionaries = window.SITE_TRANSLATIONS || {};
  var currentLanguage = baseLanguage;

  /** Original (base language) text and attribute values, keyed by element. */
  var originals = new Map();

  /**
   * Checks whether a language code has a dictionary or is the base language.
   * @param {string|null} lang - Candidate code such as "es" or "en".
   * @returns {boolean} True when the page can be shown in that language.
   */
  function isSupported(lang) {
    return lang === baseLanguage || Object.prototype.hasOwnProperty.call(dictionaries, lang);
  }

  /**
   * Reads a key from one dictionary without falling back.
   * @param {string} lang - Language code.
   * @param {string} key - Translation key.
   * @returns {string|undefined} The string, or undefined when missing.
   */
  function lookup(lang, key) {
    var dictionary = dictionaries[lang];
    return dictionary && Object.prototype.hasOwnProperty.call(dictionary, key) ? dictionary[key] : undefined;
  }

  /**
   * Translates a runtime key into the current language, falling back to the base language.
   * @param {string} key - Translation key.
   * @returns {string} Translated string, or the key itself if no language defines it.
   */
  function t(key) {
    var value = lookup(currentLanguage, key);
    if (value === undefined) value = lookup(baseLanguage, key);
    return value === undefined ? key : value;
  }

  /**
   * Stores the base-language text and attributes of every translatable element.
   * Must run before the first switch away from the base language.
   * @returns {void}
   */
  function captureOriginals() {
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      originals.set(element, { text: element.textContent, attrs: {} });
    });
    ATTRIBUTES.forEach(function (attr) {
      document.querySelectorAll('[data-i18n-' + attr + ']').forEach(function (element) {
        var entry = originals.get(element) || { text: null, attrs: {} };
        entry.attrs[attr] = element.getAttribute(attr);
        originals.set(element, entry);
      });
    });
  }

  /**
   * Resolves the value for one element in a language.
   * @param {string} lang - Target language.
   * @param {string} key - Translation key on the element.
   * @param {string|null} original - Base-language value captured from the markup.
   * @returns {string|null} Value to apply.
   */
  function resolve(lang, key, original) {
    if (lang === baseLanguage) return original;
    var value = lookup(lang, key);
    if (value === undefined) {
      console.warn('[i18n] Missing "' + lang + '" translation for key: ' + key);
      return original;
    }
    return value;
  }

  /**
   * Writes every translatable string and attribute for a language into the DOM.
   * @param {string} lang - Language to render.
   * @returns {void}
   */
  function render(lang) {
    originals.forEach(function (entry, element) {
      var textKey = element.getAttribute('data-i18n');
      if (textKey && entry.text !== null) {
        element.textContent = resolve(lang, textKey, entry.text);
      }
      Object.keys(entry.attrs).forEach(function (attr) {
        var value = resolve(lang, element.getAttribute('data-i18n-' + attr), entry.attrs[attr]);
        if (value !== null) element.setAttribute(attr, value);
      });
    });

    root.setAttribute('lang', lang);
    root.setAttribute('data-lang', lang);
    document.querySelectorAll('[data-lang-option]').forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-lang-option') === lang));
    });
  }

  /**
   * Saves the visitor's explicit language choice. Storage can be unavailable
   * (private mode, blocked cookies); the choice then lasts for this page view only.
   * @param {string} lang - Language code to remember.
   * @returns {void}
   */
  function saveChoice(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* Storage unavailable: nothing else to do, the page already shows the language. */
    }
  }

  /**
   * Switches the page language.
   * @param {string} lang - Target language code.
   * @param {{persist?: boolean}} [options] - persist: save as the visitor's choice.
   * @returns {void}
   */
  function setLanguage(lang, options) {
    if (!isSupported(lang)) return;
    var changed = lang !== currentLanguage;
    currentLanguage = lang;
    render(lang);
    if (options && options.persist) saveChoice(lang);
    if (changed) {
      window.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } }));
    }
  }

  captureOriginals();
  var initial = root.getAttribute('data-lang');
  setLanguage(isSupported(initial) ? initial : baseLanguage);
  root.classList.remove('i18n-pending');

  document.addEventListener('click', function (event) {
    var button = event.target.closest('[data-lang-option]');
    if (!button) return;
    setLanguage(button.getAttribute('data-lang-option'), { persist: true });
  });

  window.SiteI18n = {
    t: t,
    setLanguage: setLanguage,
    getLanguage: function () { return currentLanguage; }
  };
})();
