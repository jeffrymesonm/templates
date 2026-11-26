/**
 * particles.js — Fixed WebGL particle scene behind the dark sections.
 *
 * One canvas draws one set of points that morphs while scrolling:
 *   hero → a sports car · coverage → a parking yard · testimonial → a road with gantries.
 * Each shape has its own camera and is framed inside an "anchor" element
 * ([data-scene-anchor="car|yard|road"]). The vertex shader projects every point with the three
 * cameras and blends the screen positions, scattering the points into dust mid-way.
 *
 * Extras: assemble-from-dust intro (starts on the `site:intro` event), an orange light sweep along
 * the car, slow idle sway, mouse parallax, forward motion on the road.
 * Saves work: renders only while a dark section is on screen and the tab is visible; with
 * prefers-reduced-motion it renders still frames on scroll only. Without WebGL the page keeps
 * its dark gradient background and adds `no-webgl` to <html>.
 * Depends on window.ParticleShapes (particle-shapes.js).
 */
(function () {
  'use strict';

  var canvas = document.querySelector('[data-particles]');
  var root = document.documentElement;
  if (!canvas || !window.ParticleShapes) return;

  var anchors = {
    car: document.querySelector('[data-scene-anchor="car"]'),
    yard: document.querySelector('[data-scene-anchor="yard"]'),
    road: document.querySelector('[data-scene-anchor="road"]')
  };
  if (!anchors.car || !anchors.yard || !anchors.road) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var DEG = Math.PI / 180;
  var INTRO_MS = 2600;
  var FLOATS_PER_POINT = 15; // car xyz, yard xyz, road xyz, rand xyzw, flags xy

  /**
   * Camera settings per scene (angles in degrees). Car and yard use a fitted distance so the whole
   * bounding box fits inside its anchor (`fill` < 1 zooms in a little more); the road uses a fixed
   * eye that fills its anchor. pointSize is the base point diameter in CSS px.
   */
  var SCENES = {
    car: { fov: 24, target: [0, .68, 0], yaw: 8, pitch: 5, box: [[-2.36, 0, -.95], [2.36, 1.4, .95]], pointSize: 1.6, fill: .9 },
    yard: { fov: 30, target: [0, 0, .5], yaw: -4, pitch: 50, box: [[-22, 0, -13], [22, 1.4, 13]], pointSize: 2, fill: 1, portraitZoom: .62 },
    road: { fov: 46, eye: [0, 4.2, 8], target: [0, 12, -40], pointSize: 2.1, refDepth: 14 }
  };

  var VERTEX_SHADER = [
    'precision highp float;',
    'attribute vec3 aCar;',
    'attribute vec3 aYard;',
    'attribute vec3 aRoad;',
    'attribute vec4 aRand;',
    'attribute vec2 aFlag;',
    'uniform mat4 uCar;',
    'uniform mat4 uYard;',
    'uniform mat4 uRoad;',
    'uniform float uMorphA;',   // car → yard
    'uniform float uMorphB;',   // yard → road
    'uniform float uIntro;',    // dust → car on load
    'uniform float uTime;',
    'uniform float uSweep;',    // x of the light sweep along the car
    'uniform float uRoadShift;',
    'uniform vec3 uRefDepth;',  // base point size × depth, per scene
    'uniform float uPixelRatio;',
    'uniform float uMaxSize;',
    'varying vec3 vColor;',
    'varying float vAlpha;',
    'float stagger(float t, float r) { return clamp((t - r * 0.4) / 0.6, 0.0, 1.0); }',
    'float easeInOut(float t) { return t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) * 0.5; }',
    'void main() {',
    '  vec4 car = uCar * vec4(aCar, 1.0);',
    '  vec4 yard = uYard * vec4(aYard, 1.0);',
    '  vec3 roadPos = aRoad;',
    '  roadPos.z = mod(roadPos.z + 70.0 + uRoadShift, 74.0) - 70.0;',
    '  vec4 road = uRoad * vec4(roadPos, 1.0);',
    '  float wCar = max(car.w, 0.001);',
    '  float wYard = max(yard.w, 0.001);',
    '  float wRoad = max(road.w, 0.001);',
    '  float a = easeInOut(stagger(uMorphA, aRand.x));',
    '  float b = easeInOut(stagger(uMorphB, aRand.x));',
    '  vec2 pos = mix(mix(car.xy / wCar, yard.xy / wYard, a), road.xy / wRoad, b);',
    '  float size = mix(mix(uRefDepth.x / wCar, uRefDepth.y / wYard, a), uRefDepth.z / wRoad, b);',
    // scatter into dust while travelling between two shapes
    '  float travel = sin(3.14159 * a) + sin(3.14159 * b);',
    '  vec2 drift = vec2(sin(uTime * 0.3 + aRand.w * 6.28), cos(uTime * 0.25 + aRand.y * 6.28)) * 0.05;',
    '  pos += ((aRand.yz * 2.0 - 1.0) * vec2(0.95, 0.8) + drift) * travel * 0.75;',
    // intro: from dust spread over the screen to the car
    '  float intro = easeInOut(stagger(uIntro, aRand.y));',
    '  vec2 dust = (aRand.zw * 2.0 - 1.0) * vec2(1.15, 1.1);',
    '  pos = mix(dust, pos, intro);',
    // colour: warm white, orange for the sweep and the accent points of each scene
    '  float carWeight = 1.0 - a;',
    '  float sweep = exp(-pow(aCar.x - uSweep, 2.0) / 0.05) * carWeight * intro;',
    '  float accent = clamp(sweep * 0.95 + aFlag.x * carWeight + aFlag.y * a * (1.0 - b), 0.0, 1.0);',
    '  vColor = mix(vec3(1.0, 0.93, 0.86), vec3(1.0, 0.46, 0.16), accent);',
    '  float alpha = (0.22 + 0.55 * aRand.w) * (1.0 + sweep * 1.2);',
    '  alpha *= mix(mix(1.0, 1.15, a), 1.3, b);',
    '  float roadFade = smoothstep(-66.0, -38.0, roadPos.z) * smoothstep(0.4, 2.0, road.w);',
    '  alpha *= mix(1.0, roadFade, b);',
    '  alpha *= mix(0.55, 1.0, intro);',
    '  vAlpha = alpha;',
    '  gl_PointSize = clamp(uPixelRatio * size * (0.65 + 0.7 * aRand.z) * (1.0 + sweep * 0.6), 1.0, uMaxSize);',
    '  gl_Position = vec4(pos, 0.0, 1.0);',
    '}'
  ].join('\n');

  var FRAGMENT_SHADER = [
    'precision mediump float;',
    'varying vec3 vColor;',
    'varying float vAlpha;',
    'void main() {',
    '  float d = length(gl_PointCoord - 0.5);',
    '  float a = smoothstep(0.5, 0.05, d) * vAlpha;',
    '  gl_FragColor = vec4(vColor * a, a);',
    '}'
  ].join('\n');

  /* ------------------------------------------------------------ Matrix helpers (column-major) */

  /** @returns {Float32Array} Perspective projection. */
  function perspective(fovY, aspect, near, far) {
    var f = 1 / Math.tan(fovY / 2);
    var nf = 1 / (near - far);
    return new Float32Array([f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) * nf, -1, 0, 0, 2 * far * near * nf, 0]);
  }

  /** @returns {Float32Array} View matrix looking from eye to target (up = +y). */
  function lookAt(eye, target) {
    var zx = eye[0] - target[0];
    var zy = eye[1] - target[1];
    var zz = eye[2] - target[2];
    var zl = Math.hypot(zx, zy, zz) || 1;
    zx /= zl; zy /= zl; zz /= zl;
    var xx = zz;          // up × z with up = (0, 1, 0)
    var xy = 0;
    var xz = -zx;
    var xl = Math.hypot(xx, xy, xz) || 1;
    xx /= xl; xz /= xl;
    var yx = zy * xz - zz * xy;
    var yy = zz * xx - zx * xz;
    var yz = zx * xy - zy * xx;
    return new Float32Array([
      xx, yx, zx, 0,
      xy, yy, zy, 0,
      xz, yz, zz, 0,
      -(xx * eye[0] + xy * eye[1] + xz * eye[2]),
      -(yx * eye[0] + yy * eye[1] + yz * eye[2]),
      -(zx * eye[0] + zy * eye[1] + zz * eye[2]), 1
    ]);
  }

  /** @returns {Float32Array} a × b. */
  function multiply(a, b) {
    var out = new Float32Array(16);
    for (var col = 0; col < 4; col++) {
      for (var row = 0; row < 4; row++) {
        var sum = 0;
        for (var k = 0; k < 4; k++) sum += a[k * 4 + row] * b[col * 4 + k];
        out[col * 4 + row] = sum;
      }
    }
    return out;
  }

  /**
   * Maps the scene's full clip space onto the anchor rectangle of the viewport.
   * @param {{left:number, top:number, width:number, height:number}} rect - Anchor in CSS px.
   * @returns {Float32Array} Matrix applied after the projection.
   */
  function anchorMatrix(rect) {
    var sx = rect.width / viewport.width;
    var sy = rect.height / viewport.height;
    var tx = (rect.left + rect.width / 2) / viewport.width * 2 - 1;
    var ty = 1 - (rect.top + rect.height / 2) / viewport.height * 2;
    return new Float32Array([sx, 0, 0, 0, 0, sy, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1]);
  }

  /** @returns {Array<number>} Camera position orbiting the target at the given yaw/pitch/distance. */
  function orbit(target, yaw, pitch, distance) {
    return [
      target[0] + distance * Math.sin(yaw) * Math.cos(pitch),
      target[1] + distance * Math.sin(pitch),
      target[2] + distance * Math.cos(yaw) * Math.cos(pitch)
    ];
  }

  /**
   * Smallest camera distance at which the scene's bounding box fits the frustum (binary search).
   * @param {object} scene - Entry of SCENES with box, target, yaw, pitch and fov.
   * @param {number} aspect - Anchor width / height.
   * @returns {number} Distance in scene units.
   */
  function fitDistance(scene, aspect) {
    var tanY = Math.tan(scene.fov * DEG / 2);
    var tanX = tanY * aspect;
    var b = scene.box;
    var corners = [];
    for (var i = 0; i < 8; i++) corners.push([b[i & 1][0], b[(i >> 1) & 1][1], b[(i >> 2) & 1][2]]);
    var low = .5;
    var high = 4000;
    for (var step = 0; step < 40; step++) {
      var mid = (low + high) / 2;
      var view = lookAt(orbit(scene.target, scene.yaw * DEG, scene.pitch * DEG, mid), scene.target);
      var fits = corners.every(function (c) {
        var vx = view[0] * c[0] + view[4] * c[1] + view[8] * c[2] + view[12];
        var vy = view[1] * c[0] + view[5] * c[1] + view[9] * c[2] + view[13];
        var depth = -(view[2] * c[0] + view[6] * c[1] + view[10] * c[2] + view[14]);
        return depth > 0 && Math.abs(vx) / depth <= tanX && Math.abs(vy) / depth <= tanY;
      });
      if (fits) high = mid; else low = mid;
    }
    return high;
  }

  /* ------------------------------------------------------------ WebGL setup */

  var gl = null;
  var program = null;
  var uniforms = {};
  var pointCount = 0;
  var shapes = null;

  /**
   * Compiles one shader.
   * @returns {WebGLShader|null} Shader, or null on failure.
   */
  function compile(type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Particle shader failed to compile:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  /**
   * Creates the program, uploads the interleaved point buffer and binds the attributes.
   * @returns {boolean} True when the scene is ready to draw.
   */
  function setupGl() {
    var vertex = compile(gl.VERTEX_SHADER, VERTEX_SHADER);
    var fragment = compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertex || !fragment) return false;
    program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Particle program failed to link:', gl.getProgramInfoLog(program));
      return false;
    }
    gl.useProgram(program);

    var data = new Float32Array(pointCount * FLOATS_PER_POINT);
    for (var i = 0; i < pointCount; i++) {
      var o = i * FLOATS_PER_POINT;
      data[o] = shapes.car[i * 3]; data[o + 1] = shapes.car[i * 3 + 1]; data[o + 2] = shapes.car[i * 3 + 2];
      data[o + 3] = shapes.yard[i * 3]; data[o + 4] = shapes.yard[i * 3 + 1]; data[o + 5] = shapes.yard[i * 3 + 2];
      data[o + 6] = shapes.road[i * 3]; data[o + 7] = shapes.road[i * 3 + 1]; data[o + 8] = shapes.road[i * 3 + 2];
      data[o + 9] = shapes.rand[i * 4]; data[o + 10] = shapes.rand[i * 4 + 1];
      data[o + 11] = shapes.rand[i * 4 + 2]; data[o + 12] = shapes.rand[i * 4 + 3];
      data[o + 13] = shapes.flags[i * 2]; data[o + 14] = shapes.flags[i * 2 + 1];
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

    var stride = FLOATS_PER_POINT * 4;
    [['aCar', 3, 0], ['aYard', 3, 3], ['aRoad', 3, 6], ['aRand', 4, 9], ['aFlag', 2, 13]].forEach(function (attr) {
      var location = gl.getAttribLocation(program, attr[0]);
      if (location < 0) return;
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, attr[1], gl.FLOAT, false, stride, attr[2] * 4);
    });

    ['uCar', 'uYard', 'uRoad', 'uMorphA', 'uMorphB', 'uIntro', 'uTime', 'uSweep', 'uRoadShift', 'uRefDepth', 'uPixelRatio', 'uMaxSize']
      .forEach(function (name) { uniforms[name] = gl.getUniformLocation(program, name); });

    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE); // additive glow
    gl.clearColor(0, 0, 0, 0);
    return true;
  }

  /* ------------------------------------------------------------ Layout and state */

  var viewport = { width: 1, height: 1, ratio: 1 };
  var layout = { carDocTop: 0, carLeft: 0, carWidth: 1, carHeight: 1, yardDocTop: 0, roadDocTop: 0 };
  var fitted = { car: 10, yard: 60 };
  var pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
  var introStart = null;
  var visibleSections = new Set();
  var frameRequested = false;
  var startTime = performance.now();

  /** @returns {number} Value clamped to [0, 1]. */
  function clamp01(value) { return Math.min(1, Math.max(0, value)); }

  /** Reads anchor positions, resizes the canvas and refits the cameras. */
  function measure() {
    var scrollY = window.scrollY;
    viewport.width = Math.max(1, root.clientWidth);
    viewport.height = Math.max(1, window.innerHeight);
    viewport.ratio = Math.min(window.devicePixelRatio || 1, 1.75);
    var width = Math.round(viewport.width * viewport.ratio);
    var height = Math.round(viewport.height * viewport.ratio);
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    var car = anchors.car.getBoundingClientRect();
    layout.carDocTop = car.top + scrollY;
    layout.carLeft = car.left;
    layout.carWidth = Math.max(1, car.width);
    layout.carHeight = Math.max(1, car.height);
    layout.yardDocTop = anchors.yard.getBoundingClientRect().top + scrollY;
    layout.roadDocTop = anchors.road.getBoundingClientRect().top + scrollY;

    var carAspect = layout.carWidth / layout.carHeight;
    // Extra zoom only when the anchor is very wide (height-limited); narrow anchors keep the exact fit.
    fitted.car = fitDistance(SCENES.car, carAspect) * (carAspect > 3 ? SCENES.car.fill : 1);
    var yardRect = anchors.yard.getBoundingClientRect();
    var yardAspect = Math.max(1, yardRect.width) / Math.max(1, yardRect.height);
    fitted.yard = fitDistance(SCENES.yard, yardAspect) * SCENES.yard.fill * (yardAspect < 1 ? SCENES.yard.portraitZoom : 1);
  }

  /**
   * Builds the projection × view × anchor matrix of a scene.
   * @returns {Float32Array} Matrix for the shader.
   */
  function sceneMatrix(rect, fov, eye, target) {
    var projection = perspective(fov * DEG, Math.max(.01, rect.width / rect.height), .1, 400);
    return multiply(anchorMatrix(rect), multiply(projection, lookAt(eye, target)));
  }

  /**
   * Draws one frame.
   * @param {number} now - Timestamp from requestAnimationFrame.
   * @returns {void}
   */
  function render(now) {
    var still = reduceMotion.matches;
    var time = still ? 0 : (now - startTime) / 1000;
    var scrollY = window.scrollY;
    var vh = viewport.height;

    if (introStart === null && root.classList.contains('intro-done')) introStart = now;
    var intro = still ? 1 : (introStart === null ? 0 : clamp01((now - introStart) / INTRO_MS));

    // Scroll schedule: car → yard while leaving the hero, yard → road as the testimonial arrives.
    var morphA = clamp01((scrollY - .08 * vh) / Math.max(1, layout.yardDocTop - .33 * vh));
    var morphB = clamp01((scrollY - (layout.roadDocTop - vh)) / Math.max(1, .85 * vh));
    var heroProgress = clamp01(scrollY / vh);

    pointer.x += (pointer.targetX - pointer.x) * .05;
    pointer.y += (pointer.targetY - pointer.y) * .05;

    // Car: stays near its anchor, drifts down a little and the camera moves closer on scroll.
    var carRect = {
      left: layout.carLeft,
      top: layout.carDocTop - scrollY * .85,
      width: layout.carWidth,
      height: layout.carHeight
    };
    var carScene = SCENES.car;
    var carYaw = (carScene.yaw + Math.sin(time * .35) * 3 + pointer.x * 6) * DEG;
    var carPitch = (carScene.pitch + pointer.y * 3) * DEG;
    var carEye = orbit(carScene.target, carYaw, carPitch, fitted.car * (1 - .3 * heroProgress));
    var carMatrix = sceneMatrix(carRect, carScene.fov, carEye, carScene.target);

    var yardScene = SCENES.yard;
    var yardRect = anchors.yard.getBoundingClientRect();
    var yardYaw = (yardScene.yaw + Math.sin(time * .2) * 2 + pointer.x * 3) * DEG;
    var yardPitch = (yardScene.pitch + pointer.y * 2) * DEG;
    var yardMatrix = sceneMatrix(yardRect, yardScene.fov, orbit(yardScene.target, yardYaw, yardPitch, fitted.yard), yardScene.target);

    var roadScene = SCENES.road;
    var roadRect = anchors.road.getBoundingClientRect();
    var roadTarget = [roadScene.target[0] + pointer.x * 3, roadScene.target[1] - pointer.y * 1.5, roadScene.target[2]];
    var roadMatrix = sceneMatrix(roadRect, roadScene.fov, roadScene.eye, roadTarget);

    var sizeScale = Math.min(1.25, Math.max(.75, layout.carWidth / 1000));

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniformMatrix4fv(uniforms.uCar, false, carMatrix);
    gl.uniformMatrix4fv(uniforms.uYard, false, yardMatrix);
    gl.uniformMatrix4fv(uniforms.uRoad, false, roadMatrix);
    gl.uniform1f(uniforms.uMorphA, morphA);
    gl.uniform1f(uniforms.uMorphB, morphB);
    gl.uniform1f(uniforms.uIntro, intro);
    gl.uniform1f(uniforms.uTime, time);
    gl.uniform1f(uniforms.uSweep, still ? 99 : (time / 7 % 1) * 7.4 - 3.7);
    gl.uniform1f(uniforms.uRoadShift, (time * 3.2) % 74);
    gl.uniform3f(uniforms.uRefDepth,
      carScene.pointSize * sizeScale * fitted.car,
      yardScene.pointSize * fitted.yard,
      roadScene.pointSize * roadScene.refDepth);
    gl.uniform1f(uniforms.uPixelRatio, viewport.ratio);
    gl.uniform1f(uniforms.uMaxSize, 6 * viewport.ratio);
    gl.drawArrays(gl.POINTS, 0, pointCount);
  }

  /* ------------------------------------------------------------ Loop control */

  /** @returns {boolean} True when a dark section is on screen and the tab is visible. */
  function shouldDraw() {
    return visibleSections.size > 0 && !document.hidden && gl && !gl.isContextLost();
  }

  /** One animation frame; keeps looping unless motion is reduced (then it draws once). */
  function frame(now) {
    frameRequested = false;
    if (!shouldDraw()) return;
    render(now);
    var introRunning = introStart !== null && now - introStart < INTRO_MS;
    if (reduceMotion.matches && !introRunning) return;
    frameRequested = true;
    window.requestAnimationFrame(frame);
  }

  /** Starts the loop (or schedules a single still frame) when drawing is useful. */
  function wake() {
    if (frameRequested || !shouldDraw()) return;
    frameRequested = true;
    window.requestAnimationFrame(frame);
  }

  /** Initialises WebGL; returns false when it is unavailable. */
  function init() {
    gl = canvas.getContext('webgl', { alpha: true, antialias: false, premultipliedAlpha: true, powerPreference: 'high-performance' }) ||
      canvas.getContext('experimental-webgl');
    if (!gl) return false;
    var small = window.innerWidth < 768 || (navigator.hardwareConcurrency || 8) <= 4;
    pointCount = small ? 18000 : 40000;
    shapes = shapes && shapes.count === pointCount ? shapes : window.ParticleShapes.build(pointCount);
    return setupGl();
  }

  if (!init()) {
    root.classList.add('no-webgl');
    return;
  }
  measure();

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) visibleSections.add(entry.target);
      else visibleSections.delete(entry.target);
    });
    wake();
  });
  document.querySelectorAll('[data-dark]').forEach(function (section) { observer.observe(section); });

  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () { measure(); wake(); }, 120);
  });
  window.addEventListener('load', function () { measure(); wake(); });
  window.addEventListener('scroll', wake, { passive: true });
  window.addEventListener('site:intro', function () {
    if (introStart === null) introStart = performance.now();
    wake();
  });
  document.addEventListener('visibilitychange', wake);
  if (typeof reduceMotion.addEventListener === 'function') reduceMotion.addEventListener('change', wake);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measure(); wake(); });

  window.addEventListener('pointermove', function (event) {
    if (event.pointerType !== 'mouse') return;
    pointer.targetX = event.clientX / viewport.width * 2 - 1;
    pointer.targetY = event.clientY / viewport.height * 2 - 1;
  }, { passive: true });

  canvas.addEventListener('webglcontextlost', function (event) {
    event.preventDefault();
  });
  canvas.addEventListener('webglcontextrestored', function () {
    if (init()) { measure(); wake(); }
  });

  wake();
})();
