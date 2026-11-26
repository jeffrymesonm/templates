/**
 * destinations.js — "From the house" pinned scene ([data-dest]).
 *   - As the section scrolls in, the first photo opens from an arch to full screen.
 *   - While the stage is pinned, every following photo wipes up over the previous one: its layer slides
 *     up while the inner wrapper slides down by the same amount, so the photo itself stays still.
 *   - Each photo zooms out slowly while it is on screen.
 *   - The title swaps to the place whose photo covers more than half of the screen
 *     (.is-current; earlier places get .is-above so their words leave upwards).
 * Scroll distance per place comes from the CSS (--count on the track, 65% of a screen each).
 */
(function (window, document) {
  'use strict';

  var Seaside = window.Seaside;
  var track = document.querySelector('[data-dest]');
  if (!Seaside || !track) return;

  var stage = track.querySelector('.dest__stage');
  var layers = Array.prototype.slice.call(track.querySelectorAll('[data-dest-layer]')).map(function (layer) {
    return {
      layer: layer,
      shift: layer.querySelector('[data-dest-shift]'),
      zoom: layer.querySelector('[data-dest-zoom]')
    };
  });
  var items = Array.prototype.slice.call(track.querySelectorAll('[data-dest-item]'));
  var count = layers.length;
  var reduced = Seaside.reducedMotion();
  var trackTop = 0;
  var trackHeight = 1;
  var pinnedDistance = 1;
  var currentIndex = -1;

  if (!stage || !count) return;

  /**
   * Shows the title of one place and moves the others out of view.
   * @param {number} index - Index of the place to show.
   * @returns {void}
   */
  function setCurrent(index) {
    if (index === currentIndex) return;
    currentIndex = index;
    items.forEach(function (item, i) {
      item.classList.toggle('is-current', i === index);
      item.classList.toggle('is-above', i < index);
    });
  }

  /**
   * Applies the slow zoom-out of one photo.
   * @param {HTMLElement} zoom - The [data-dest-zoom] wrapper.
   * @param {number} scale - Scale factor.
   * @param {number} shift - Vertical offset in percent.
   * @returns {void}
   */
  function setZoom(zoom, scale, shift) {
    if (reduced) {
      zoom.style.transform = 'none';
      return;
    }
    zoom.style.transform = 'translate3d(0,' + shift.toFixed(3) + '%,0) scale(' + scale.toFixed(4) + ')';
  }

  setCurrent(0);

  Seaside.addScene({
    measure: function () {
      trackTop = Seaside.pageTop(track);
      trackHeight = track.offsetHeight;
      pinnedDistance = Math.max(1, trackHeight - stage.offsetHeight);
    },
    render: function (scrollY, viewport) {
      // Nothing to update while the section is far away
      if (scrollY < trackTop - viewport.height * 1.5 || scrollY > trackTop + trackHeight + viewport.height) return;

      var segment = pinnedDistance / count;
      var position = (scrollY - trackTop) / segment; // places scrolled while pinned (negative before)
      var opening = Seaside.progress(scrollY, trackTop - viewport.height, trackTop);
      var shown = 0;

      // First photo: arch opening before the pin, then a slow zoom-out
      var first = layers[0];
      if (opening < 1) {
        first.layer.style.clipPath = 'inset(' + Seaside.lerp(38, -45, opening).toFixed(2) + '% ' +
          Seaside.lerp(24, -45, opening).toFixed(2) + '% 0% round 9999px 9999px 0px 0px)';
      } else {
        first.layer.style.clipPath = 'none';
      }
      if (position <= 0) {
        setZoom(first.zoom, Seaside.lerp(1.32, 1.18, opening), 3);
      } else {
        var firstZoom = Seaside.clamp(position / 0.9, 0, 1);
        setZoom(first.zoom, Seaside.lerp(1.18, 1.08, firstZoom), Seaside.lerp(3, -3, firstZoom));
      }

      // Following photos: wipe in during 80% of their segment, zoom out until the next one has covered them
      for (var k = 1; k < count; k += 1) {
        var start = k - 1 + 0.1;
        var wipe = Seaside.clamp((position - start) / 0.8, 0, 1);
        var zoomLength = k === count - 1 ? count - start : 1.8;
        var zoomAmount = Seaside.clamp((position - start) / zoomLength, 0, 1);
        var offset = ((1 - wipe) * 100).toFixed(3);
        layers[k].layer.style.transform = 'translate3d(0,' + offset + '%,0)';
        layers[k].shift.style.transform = 'translate3d(0,-' + offset + '%,0)';
        setZoom(layers[k].zoom, Seaside.lerp(1.18, 1.08, zoomAmount), Seaside.lerp(3, -3, zoomAmount));
        if (wipe >= 0.5) shown = k;
      }

      setCurrent(shown);
    }
  });
})(window, document);
