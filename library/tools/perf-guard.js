/**
 * perf-guard.js — Keeps heavy templates usable on modest devices. Loaded as a classic script in <head>,
 * before the page's modules, so every component sees these settings from the start. Same file in every
 * Webild template (copied by tools/webild_perf_guard.py; edit it here, then re-run that tool).
 *
 * 1. Modest device (≤4 CPU cores, ≤4 GB memory, data saver on, or the visitor already asked for reduced
 *    motion): `prefers-reduced-motion` reports "reduce" to scripts, so components switch to the light
 *    version they already ship (measured: 77–99 % idle CPU → 8–18 % on a phone profile).
 * 2. Touch devices: animation loops run at ~30 fps (every second requestAnimationFrame), halving the work of
 *    continuous effects; scrolling stays native.
 * 3. Touch devices: canvases see devicePixelRatio capped at 2 (1.5 on modest devices), so WebGL and particle
 *    canvases draw fewer pixels on 3× screens. Images and CSS are not affected.
 *
 * Opt-out for testing: add ?perf=full to the URL.
 * Decided by the owner on 2026-11-26 (option B: full design on capable devices, light mode on modest ones).
 */
(function () {
  'use strict';
  if (/[?&]perf=full\b/.test(location.search)) return;

  var cores = navigator.hardwareConcurrency || 8;
  var memory = navigator.deviceMemory || 8;
  var connection = navigator.connection || {};
  var touch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  var userAskedReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var modest = cores <= 4 || memory <= 4 || connection.saveData === true || userAskedReduced;

  document.documentElement.setAttribute('data-perf', modest ? 'light' : 'full');

  if (modest) {
    var nativeMatchMedia = window.matchMedia.bind(window);
    window.matchMedia = function (query) {
      if (!/prefers-reduced-motion/.test(query)) return nativeMatchMedia(query);
      // "(prefers-reduced-motion)" and "(… : reduce)" must match; "(… : no-preference)" must not.
      return nativeMatchMedia(/no-preference/.test(query) ? 'not all' : 'all');
    };
  }

  if (touch) {
    // One decision per frame, shared by every loop: run only when a new ~33 ms slot has started.
    var nativeFrame = window.requestAnimationFrame.bind(window);
    var nativeCancel = window.cancelAnimationFrame.bind(window);
    var decidedFor = -1, runThisFrame = true, lastSlot = -1, nextId = 1, pending = {};
    var shouldRun = function (time) {
      if (time !== decidedFor) {
        decidedFor = time;
        var slot = Math.floor(time / 33.3);
        runThisFrame = slot !== lastSlot;
        if (runThisFrame) lastSlot = slot;
      }
      return runThisFrame;
    };
    window.requestAnimationFrame = function (callback) {
      var id = nextId++;
      var wait = function (time) {
        if (!shouldRun(time)) { pending[id] = nativeFrame(wait); return; }
        delete pending[id];
        callback(time);
      };
      pending[id] = nativeFrame(wait);
      return id;
    };
    window.cancelAnimationFrame = function (id) {
      if (pending[id] !== undefined) { nativeCancel(pending[id]); delete pending[id]; }
    };

    var cap = modest ? 1.5 : 2;
    var realRatio = window.devicePixelRatio || 1;
    if (realRatio > cap) {
      Object.defineProperty(window, 'devicePixelRatio', { configurable: true, get: function () { return cap; } });
    }
  }
})();
