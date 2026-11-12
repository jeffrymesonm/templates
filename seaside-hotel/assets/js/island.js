/**
 * island.js — Scroll scenes of "The island" section.
 *   1. Window merge ([data-merge], 1024px and up): one photo seen through two offset windows. While
 *      the stage is pinned the windows line up side by side (55%), open to full screen (80%), the
 *      title rises and the architect's quote fades in and out again. Below 1024px, or with reduced
 *      motion, the CSS shows the plain photo and this scene clears its inline styles.
 *   2. Framed slider ([data-gallery]): every photo opens from an arch while the slider enters the
 *      screen and keeps zooming out gently until it leaves. Values go to CSS variables on the slider.
 */
(function (window, document) {
  'use strict';

  var Seaside = window.Seaside;
  if (!Seaside) return;
  var reduced = Seaside.reducedMotion();
  var desktopQuery = window.matchMedia('(min-width: 1024px)');

  /* ---- 1. Window merge ---- */
  var merge = document.querySelector('[data-merge]');
  if (merge) {
    var stage = merge.querySelector('.merge__stage');
    var windowA = merge.querySelector('[data-merge-a]');
    var windowB = merge.querySelector('[data-merge-b]');
    var images = Array.prototype.slice.call(merge.querySelectorAll('[data-merge-img]'));
    var seam = merge.querySelector('[data-merge-seam]');
    var shade = merge.querySelector('[data-merge-shade]');
    var title = merge.querySelector('[data-merge-title]');
    var quote = merge.querySelector('[data-merge-quote]');
    var animated = [windowA, windowB, seam, shade, title, quote].concat(images);
    var mergeTop = 0;
    var mergeRange = 1;
    var active = false;

    /**
     * Removes every inline style so the CSS default for the current breakpoint applies.
     * @returns {void}
     */
    var clearMerge = function () {
      animated.forEach(function (element) {
        if (element) element.removeAttribute('style');
      });
    };

    /**
     * Shows the finished state (used with reduced motion on desktop).
     * @returns {void}
     */
    var showMerged = function () {
      windowA.style.clipPath = 'none';
      windowB.style.clipPath = 'none';
      images.forEach(function (image) { image.style.transform = 'none'; });
      shade.style.opacity = '1';
      title.style.transform = 'none';
      quote.style.opacity = '1';
      quote.style.transform = 'none';
    };

    Seaside.addScene({
      measure: function () {
        var wasActive = active;
        active = desktopQuery.matches;
        if (!active) {
          if (wasActive) clearMerge();
          return;
        }
        if (reduced) {
          showMerged();
          active = false;
          return;
        }
        mergeTop = Seaside.pageTop(merge);
        mergeRange = Math.max(1, merge.offsetHeight - stage.offsetHeight);
      },
      render: function (scrollY, viewport) {
        if (!active) return;
        if (scrollY < mergeTop - viewport.height * 1.5 || scrollY > mergeTop + mergeRange + viewport.height) return;

        var amount = Seaside.progress(scrollY, mergeTop, mergeTop + mergeRange);
        var align = Seaside.progress(amount, 0, 0.55);   // windows line up side by side
        var open = Seaside.progress(amount, 0.55, 0.8);  // windows grow to full screen
        var keep = 1 - open;
        var top = Seaside.lerp(10, 18.5, align) * keep;
        var right = Seaside.lerp(56, 50, align) * keep;
        var bottom = Seaside.lerp(45, 18.5, align) * keep;
        var left = keep;

        windowA.style.clipPath = 'inset(' + top.toFixed(2) + '% ' + right.toFixed(2) + '% ' + bottom.toFixed(2) + '% ' + left.toFixed(2) + '%)';
        windowB.style.clipPath = 'inset(' + bottom.toFixed(2) + '% ' + left.toFixed(2) + '% ' + top.toFixed(2) + '% ' + right.toFixed(2) + '%)';

        var scale = (1.12 - 0.12 * Seaside.progress(amount, 0, 0.8)).toFixed(4);
        images.forEach(function (image) { image.style.transform = 'scale(' + scale + ')'; });

        // Thin seam where the two windows meet, visible only around the moment they touch
        var seamOpacity = amount < 0.55 ? Seaside.progress(amount, 0.45, 0.55) : 1 - Seaside.progress(amount, 0.55, 0.62);
        seam.style.opacity = seamOpacity.toFixed(3);

        shade.style.opacity = (Seaside.progress(amount, 0.55, 0.8) * (1 - Seaside.progress(amount, 0.8, 1))).toFixed(3);

        var rise = Seaside.ease.outCubic(Seaside.progress(amount, 0.58, 0.76));
        title.style.transform = 'translate3d(0,' + (105 * (1 - rise)).toFixed(2) + '%,0)';

        var quoteIn = Seaside.progress(amount, 0.72, 0.85);
        var quoteOut = Seaside.progress(amount, 0.86, 1);
        quote.style.opacity = (quoteIn * (1 - quoteOut)).toFixed(3);
        quote.style.transform = 'translate3d(0,' + (24 * (1 - quoteIn)).toFixed(2) + 'px,0)';
      }
    });

    desktopQuery.addEventListener('change', Seaside.refresh);
  }

  /* ---- 2. Framed slider: arch opening + zoom ---- */
  var gallery = document.querySelector('[data-gallery]');
  var galleryViewport = gallery && gallery.querySelector('.slider__viewport');
  var galleryPhoto = gallery && gallery.querySelector('.gallery__photo');
  if (gallery && galleryViewport && galleryPhoto) {
    if (reduced) {
      gallery.style.setProperty('--arch-top', '-45%');
      gallery.style.setProperty('--arch-side', '-45%');
      gallery.style.setProperty('--zoom', '1');
      gallery.style.setProperty('--shift', '0%');
      return;
    }

    var galleryTop = 0;
    var photoHeight = 1;
    Seaside.addScene({
      measure: function () {
        galleryTop = Seaside.pageTop(galleryViewport);
        photoHeight = galleryPhoto.offsetHeight;
      },
      render: function (scrollY, viewport) {
        var entered = viewport.height - (galleryTop - scrollY); // px of the slider above the bottom edge
        if (entered < -viewport.height || entered > viewport.height + photoHeight * 2) return;
        var opening = Seaside.progress(entered, 0, viewport.height * 0.8);
        var passing = Seaside.progress(entered, 0, viewport.height + photoHeight);
        gallery.style.setProperty('--arch-top', Seaside.lerp(38, -45, opening).toFixed(2) + '%');
        gallery.style.setProperty('--arch-side', Seaside.lerp(24, -45, opening).toFixed(2) + '%');
        gallery.style.setProperty('--zoom', (1.2 - 0.2 * Seaside.ease.outQuad(passing)).toFixed(4));
        gallery.style.setProperty('--shift', Seaside.lerp(-4, 4, passing).toFixed(3) + '%');
      }
    });
  }
})(window, document);
