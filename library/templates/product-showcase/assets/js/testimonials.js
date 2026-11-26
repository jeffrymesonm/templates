/**
 * testimonials.js — Review carousel.
 *
 * Each review is an <article data-slide data-image="..." data-alt="..."> inside [data-carousel].
 * Prev/next buttons cross-fade the text and swap the photo in [data-carousel-media].
 * Loops in both directions.
 */
(function () {
  'use strict';

  var ACTIVE_CLASS = 'is-active';

  /**
   * Wires one carousel instance.
   * @param {HTMLElement} root - Element marked with [data-carousel].
   * @returns {void}
   */
  function initCarousel(root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('[data-slide]'));
    var media = root.querySelector('[data-carousel-media]');
    var prevButton = root.querySelector('[data-carousel-prev]');
    var nextButton = root.querySelector('[data-carousel-next]');

    if (slides.length < 2 || !media) {
      return;
    }

    var images = buildImages(slides, media);
    var current = Math.max(0, slides.findIndex(function (slide) {
      return slide.classList.contains(ACTIVE_CLASS);
    }));

    /**
     * Shows the slide at `index` (wrapping around the ends).
     * @param {number} index - Target slide index, may be out of range.
     * @returns {void}
     */
    function goTo(index) {
      var next = (index + slides.length) % slides.length;
      if (next === current) {
        return;
      }
      slides[current].classList.remove(ACTIVE_CLASS);
      images[current].classList.remove(ACTIVE_CLASS);
      slides[next].classList.add(ACTIVE_CLASS);
      images[next].classList.add(ACTIVE_CLASS);
      current = next;
    }

    if (prevButton) {
      prevButton.addEventListener('click', function () {
        goTo(current - 1);
      });
    }
    if (nextButton) {
      nextButton.addEventListener('click', function () {
        goTo(current + 1);
      });
    }
  }

  /**
   * Ensures there is one <img> per slide inside the media container, in slide order.
   * The first image already exists in the HTML; the rest are created from data attributes.
   * @param {HTMLElement[]} slides - Slide elements carrying data-image / data-alt.
   * @param {HTMLElement} media - Container that holds the stacked images.
   * @returns {HTMLImageElement[]} Images aligned with `slides` by index.
   */
  function buildImages(slides, media) {
    var existing = media.querySelector('img');
    return slides.map(function (slide, index) {
      if (index === 0 && existing) {
        return existing;
      }
      var image = document.createElement('img');
      image.src = slide.getAttribute('data-image') || '';
      image.alt = slide.getAttribute('data-alt') || '';
      image.loading = 'lazy';
      image.decoding = 'async';
      media.appendChild(image);
      return image;
    });
  }

  document.querySelectorAll('[data-carousel]').forEach(initCarousel);
})();
