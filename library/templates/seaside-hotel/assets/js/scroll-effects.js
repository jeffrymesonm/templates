/**
 * scroll-effects.js — Small scroll-linked effects, registered as scenes on window.Seaside:
 *   - Nav progress: the vertical line fills and the number counts 00 → 100 with the page.
 *   - Hero parallax: the copy moves up twice as fast as the page, the photo drifts up 8%.
 *   - Guest quotes: each quote goes from 20% to full opacity as it reaches the middle of the screen.
 *   - [data-draw] hairlines draw themselves downwards while they cross the screen.
 *   - Call to action: the pinned photo zooms out from 115% to 100% while the section passes.
 */
(function (window, document) {
  'use strict';

  var Seaside = window.Seaside;
  if (!Seaside) return;
  var reduced = Seaside.reducedMotion();

  /* ---- Nav progress ---- */
  var progressFill = document.querySelector('[data-progress-fill]');
  var progressValue = document.querySelector('[data-progress-value]');
  if (progressFill && progressValue) {
    var maxScroll = 1;
    var lastLabel = '';
    Seaside.addScene({
      measure: function (viewport) {
        maxScroll = Math.max(1, document.documentElement.scrollHeight - viewport.height);
      },
      render: function (scrollY) {
        var amount = Seaside.clamp(scrollY / maxScroll, 0, 1);
        var percent = Math.round(amount * 100);
        var label = percent < 10 ? '0' + percent : String(percent);
        progressFill.style.transform = 'scaleY(' + amount.toFixed(4) + ')';
        if (label !== lastLabel) {
          progressValue.textContent = label;
          lastLabel = label;
        }
      }
    });
  }

  /* ---- Hero parallax ---- */
  var heroImage = document.querySelector('[data-hero-img]');
  var heroContent = document.querySelector('[data-hero-content]');
  if (heroImage && heroContent && !reduced) {
    var lastHeroScroll = -1;
    Seaside.addScene({
      render: function (scrollY, viewport) {
        // Once a screen has passed the hero is fully covered, so the values stop changing
        var distance = Math.min(scrollY, viewport.height);
        if (distance === lastHeroScroll) return;
        lastHeroScroll = distance;
        var imageShift = -8 * Seaside.clamp(distance / (viewport.height * 0.5), 0, 1);
        var copyShift = -Math.min(distance * 2, viewport.height * 0.8);
        heroImage.style.transform = 'translate3d(0,' + imageShift.toFixed(3) + '%,0)';
        heroContent.style.transform = 'translate3d(0,' + copyShift.toFixed(1) + 'px,0)';
      }
    });
  }

  /* ---- Guest quotes fade in ---- */
  var quotes = Array.prototype.slice.call(document.querySelectorAll('.quote')).map(function (figure) {
    return { figure: figure, inner: figure.querySelector('[data-quote]'), top: 0 };
  });
  if (quotes.length) {
    Seaside.addScene({
      measure: function () {
        quotes.forEach(function (quote) { quote.top = Seaside.pageTop(quote.figure); });
      },
      render: function (scrollY, viewport) {
        quotes.forEach(function (quote) {
          // 0 when the quote's screen starts entering at the bottom, 1 when it fills the screen
          var amount = Seaside.progress(scrollY, quote.top - viewport.height, quote.top);
          quote.inner.style.opacity = (0.2 + 0.8 * amount).toFixed(3);
        });
      }
    });
  }

  /* ---- Hairlines ---- */
  var lines = Array.prototype.slice.call(document.querySelectorAll('[data-draw]')).map(function (line) {
    return { line: line, fill: line.querySelector('.draw-line__fill'), top: 0 };
  }).filter(function (item) { return item.fill; });
  if (lines.length) {
    Seaside.addScene({
      measure: function () {
        lines.forEach(function (item) { item.top = Seaside.pageTop(item.line); });
      },
      render: function (scrollY, viewport) {
        lines.forEach(function (item) {
          var screenTop = item.top - scrollY;
          var amount = reduced ? 1 : Seaside.progress(viewport.height * 0.8 - screenTop, 0, viewport.height * 0.55);
          item.fill.style.transform = 'scaleY(' + amount.toFixed(3) + ')';
        });
      }
    });
  }

  /* ---- Call to action zoom ---- */
  var cta = document.querySelector('.cta');
  var ctaImage = document.querySelector('[data-cta-img]');
  if (cta && ctaImage) {
    if (reduced) {
      ctaImage.style.transform = 'none';
    } else {
      var ctaTop = 0;
      var ctaHeight = 1;
      Seaside.addScene({
        measure: function () {
          ctaTop = Seaside.pageTop(cta);
          ctaHeight = Math.max(1, cta.offsetHeight);
        },
        render: function (scrollY, viewport) {
          var amount = Seaside.progress(scrollY, ctaTop - viewport.height, ctaTop + ctaHeight - viewport.height);
          ctaImage.style.transform = 'scale(' + (1.15 - 0.15 * amount).toFixed(4) + ')';
        }
      });
    }
  }
})(window, document);
