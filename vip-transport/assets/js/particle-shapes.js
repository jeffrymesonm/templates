/**
 * particle-shapes.js — Builds the three point clouds drawn by particles.js.
 *
 * Every shape has exactly the same number of points so point i of the car can travel to
 * point i of the yard and then to point i of the road. The order of each shape is shuffled,
 * so the morph scatters into dust instead of sliding in blocks.
 *
 * Units are metres. Car: length along x (front = +x), ground at y = 0.
 * Yard: parking lot on the y = 0 plane. Road: runs along -z from the camera.
 *
 * Exposes window.ParticleShapes.build(count) → { count, car, yard, road, rand, flags }.
 */
(function () {
  'use strict';

  /**
   * Small seeded random generator (mulberry32) so the shapes look the same on every visit.
   * @param {number} seed - Integer seed.
   * @returns {function(): number} Function returning floats in [0, 1).
   */
  function createRandom(seed) {
    var state = seed >>> 0;
    return function () {
      state = (state + 0x6D2B79F5) >>> 0;
      var t = state;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /**
   * Cubic Hermite curve through [x, y] control points sorted by x.
   * @param {Array<Array<number>>} points - Control points.
   * @returns {function(number): number} y for a given x (clamped at the ends).
   */
  function createCurve(points) {
    var last = points.length - 1;
    var tangents = points.map(function (point, index) {
      var prev = points[Math.max(0, index - 1)];
      var next = points[Math.min(last, index + 1)];
      return (next[1] - prev[1]) / (next[0] - prev[0]);
    });
    return function (x) {
      if (x <= points[0][0]) return points[0][1];
      if (x >= points[last][0]) return points[last][1];
      var k = 0;
      while (x > points[k + 1][0]) k++;
      var h = points[k + 1][0] - points[k][0];
      var t = (x - points[k][0]) / h;
      var t2 = t * t;
      var t3 = t2 * t;
      return (2 * t3 - 3 * t2 + 1) * points[k][1] + (t3 - 2 * t2 + t) * h * tangents[k] +
        (-2 * t3 + 3 * t2) * points[k + 1][1] + (t3 - t2) * h * tangents[k + 1];
    };
  }

  /**
   * Smooth 0 → 1 ramp between two edges.
   * @param {number} edge0 - Start.
   * @param {number} edge1 - End.
   * @param {number} x - Value.
   * @returns {number} Eased value in [0, 1].
   */
  function smoothstep(edge0, edge1, x) {
    var t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  }

  /**
   * Fixed-size point writer shared by the shape builders.
   * @param {number} count - Number of points the shape must contain.
   * @returns {{positions: Float32Array, accent: Float32Array, add: Function, full: Function, size: Function}}
   */
  function createCloud(count) {
    var positions = new Float32Array(count * 3);
    var accent = new Float32Array(count);
    var index = 0;
    return {
      positions: positions,
      accent: accent,
      /** Adds one point (ignored once the cloud is full). */
      add: function (x, y, z, accentValue) {
        if (index >= count) return;
        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;
        accent[index] = accentValue || 0;
        index++;
      },
      /** @returns {boolean} True when every slot is used. */
      full: function () { return index >= count; },
      /** @returns {number} Points written so far. */
      size: function () { return index; }
    };
  }

  /**
   * Adds `amount` points spread along line segments, proportionally to their length.
   * @param {object} cloud - Cloud from createCloud.
   * @param {Array<Array<number>>} segments - [x0, y0, z0, x1, y1, z1] items.
   * @param {number} amount - Points to add.
   * @param {function(): number} random - Random generator.
   * @param {number} jitter - Random offset applied to each axis.
   * @param {number} [accentValue] - Accent flag for these points.
   * @returns {void}
   */
  function sampleSegments(cloud, segments, amount, random, jitter, accentValue) {
    var lengths = [];
    var total = 0;
    segments.forEach(function (s) {
      var length = Math.hypot(s[3] - s[0], s[4] - s[1], s[5] - s[2]);
      lengths.push(length);
      total += length;
    });
    for (var n = 0; n < amount; n++) {
      var pick = random() * total;
      var k = 0;
      while (k < lengths.length - 1 && pick > lengths[k]) { pick -= lengths[k]; k++; }
      var s = segments[k];
      var t = random();
      cloud.add(
        s[0] + (s[3] - s[0]) * t + (random() - .5) * jitter,
        s[1] + (s[4] - s[1]) * t + (random() - .5) * jitter,
        s[2] + (s[5] - s[2]) * t + (random() - .5) * jitter,
        accentValue
      );
    }
  }

  /**
   * The 12 edges of an axis-aligned box as segments.
   * @param {number} x0 @param {number} y0 @param {number} z0 - Min corner.
   * @param {number} x1 @param {number} y1 @param {number} z1 - Max corner.
   * @returns {Array<Array<number>>} Segments.
   */
  function boxEdges(x0, y0, z0, x1, y1, z1) {
    return [
      [x0, y0, z0, x1, y0, z0], [x0, y1, z0, x1, y1, z0], [x0, y0, z1, x1, y0, z1], [x0, y1, z1, x1, y1, z1],
      [x0, y0, z0, x0, y1, z0], [x1, y0, z0, x1, y1, z0], [x0, y0, z1, x0, y1, z1], [x1, y0, z1, x1, y1, z1],
      [x0, y0, z0, x0, y0, z1], [x1, y0, z0, x1, y0, z1], [x0, y1, z0, x0, y1, z1], [x1, y1, z0, x1, y1, z1]
    ];
  }

  /* ---------------------------------------------------------------- Car */

  /** Sports-car side profile: roof line (front = +x). */
  var carTop = createCurve([
    [-2.30, .50], [-2.26, .70], [-2.10, .82], [-1.80, .88], [-1.30, 1.00], [-.70, 1.17],
    [-.15, 1.26], [.35, 1.22], [.80, 1.02], [1.05, .90], [1.50, .83], [1.95, .74], [2.22, .62], [2.32, .46]
  ]);
  /** Lower edge before the wheel arches are cut out. */
  var carBase = createCurve([
    [-2.30, .38], [-2.15, .22], [-1.90, .16], [1.95, .16], [2.20, .24], [2.32, .36]
  ]);
  var WHEEL_X = [-1.45, 1.42];
  var WHEEL_R = .33;
  var WHEEL_TRACK = .80;
  var ARCH_R = .38;
  var SQUIRCLE = 3.2;

  /** @returns {number} Lower body edge at x, with the wheel arches carved out. */
  function carBottom(x) {
    var y = carBase(x);
    WHEEL_X.forEach(function (wx) {
      var dx = x - wx;
      if (Math.abs(dx) < ARCH_R) y = Math.max(y, WHEEL_R + Math.sqrt(ARCH_R * ARCH_R - dx * dx));
    });
    return y;
  }

  /** @returns {number} Half width of the body at (x, y): tapered at both ends and towards the roof. */
  function carHalfWidth(x, y) {
    var ends = Math.pow(Math.max(0, 1 - Math.pow(Math.abs(x) / 2.36, 6)), .3);
    var cabin = 1 - .3 * smoothstep(.9, 1.27, y);
    return .93 * ends * cabin;
  }

  /** @returns {number} Body surface |z| at (x, y), following the rounded cross-section. */
  function carSurfaceZ(x, y) {
    var top = carTop(x);
    var bottom = carBottom(x);
    var half = (top - bottom) / 2;
    if (half <= 0) return 0;
    var s = Math.min(1, Math.abs(y - (top + bottom) / 2) / half);
    var sinValue = Math.pow(s, SQUIRCLE / 2);
    var cosValue = Math.sqrt(Math.max(0, 1 - sinValue * sinValue));
    return carHalfWidth(x, y) * Math.pow(cosValue, 2 / SQUIRCLE);
  }

  /**
   * Builds the car: body shell, window and door lines, four wheels, rear wing, lights and dust.
   * @param {number} count - Points.
   * @param {function(): number} random - Random generator.
   * @returns {object} Cloud.
   */
  function buildCar(count, random) {
    var cloud = createCloud(count);
    var sign = function (v) { return v < 0 ? -1 : 1; };

    // Body shell: rounded cross-sections swept along the profile.
    var bodyTarget = Math.floor(count * .5);
    while (cloud.size() < bodyTarget) {
      var x = -2.3 + random() * 4.62;
      var top = carTop(x);
      var bottom = carBottom(x);
      if (top - bottom < .02) continue;
      var angle = random() * Math.PI * 2;
      var s = Math.sin(angle);
      var c = Math.cos(angle);
      if (s < -.5 && random() < .7) continue; // thin out the underside
      var y = (top + bottom) / 2 + (top - bottom) / 2 * sign(s) * Math.pow(Math.abs(s), 2 / SQUIRCLE);
      var z = carHalfWidth(x, y) * sign(c) * Math.pow(Math.abs(c), 2 / SQUIRCLE);
      if (random() > ((top - bottom) + carHalfWidth(x, y)) / 1.9) continue; // even density
      cloud.add(x, y, z, 0);
    }

    // Character lines on both sides: side window, door cuts and the sill.
    var outline = [[.92, .93], [.34, 1.19], [-.20, 1.22], [-1.0, 1.05], [-1.32, .93], [.92, .93]];
    var lineTarget = cloud.size() + Math.floor(count * .085);
    while (cloud.size() < lineTarget) {
      var side = random() < .5 ? -1 : 1;
      var pick = random();
      var px;
      var py;
      if (pick < .62) {
        var seg = Math.floor(random() * (outline.length - 1));
        var t = random();
        px = outline[seg][0] + (outline[seg + 1][0] - outline[seg][0]) * t;
        py = outline[seg][1] + (outline[seg + 1][1] - outline[seg][1]) * t;
      } else if (pick < .8) {
        px = random() < .5 ? .80 : -.78;
        py = .32 + random() * .58;
      } else {
        px = -1.0 + random() * 1.95;
        py = .27;
      }
      cloud.add(px, py, side * carSurfaceZ(px, py) * 1.01, 0);
    }

    // Wheels: tyre rings, tread, rim, ten spokes and hub.
    var wheelTarget = cloud.size() + Math.floor(count * .25);
    while (cloud.size() < wheelTarget) {
      var wx = WHEEL_X[random() < .5 ? 0 : 1];
      var wSide = random() < .5 ? -1 : 1;
      var face = wSide * (WHEEL_TRACK + .12);
      var a = random() * Math.PI * 2;
      var r;
      var wz = face;
      var part = random();
      if (part < .3) { r = WHEEL_R; }
      else if (part < .42) { r = WHEEL_R * .78; }
      else if (part < .55) { r = WHEEL_R; wz = wSide * (WHEEL_TRACK - .12 + random() * .24); }
      else if (part < .66) { r = WHEEL_R * .72; wz = face - wSide * .03; }
      else if (part < .94) {
        var spoke = Math.floor(random() * 5);
        a = spoke * Math.PI * 2 / 5 + (random() < .5 ? -.11 : .11) + Math.PI / 2;
        r = .05 + random() * (WHEEL_R * .72 - .05);
        wz = face - wSide * .05;
      } else { r = .05; wz = face - wSide * .05; }
      cloud.add(wx + Math.cos(a) * r, WHEEL_R + Math.sin(a) * r, wz + (random() - .5) * .01, 0);
    }

    // Rear wing: plate, end plates and two struts.
    var wingSegments = [
      [-2.32, 1.36, -.9, -2.32, 1.36, .9], [-1.88, 1.31, -.9, -1.88, 1.31, .9],
      [-2.32, 1.36, -.9, -1.88, 1.31, -.9], [-2.32, 1.36, .9, -1.88, 1.31, .9],
      [-2.32, 1.18, -.9, -2.32, 1.38, -.9], [-1.90, 1.20, -.9, -1.90, 1.34, -.9],
      [-2.32, 1.18, .9, -2.32, 1.38, .9], [-1.90, 1.20, .9, -1.90, 1.34, .9],
      [-1.94, .86, -.42, -2.06, 1.33, -.42], [-2.04, .84, -.42, -2.16, 1.34, -.42],
      [-1.94, .86, .42, -2.06, 1.33, .42], [-2.04, .84, .42, -2.16, 1.34, .42]
    ];
    var wingCount = Math.floor(count * .05);
    sampleSegments(cloud, wingSegments, wingCount, random, .015, 0);
    var plateCount = Math.floor(count * .025);
    for (var p = 0; p < plateCount; p++) {
      var u = random();
      cloud.add(-2.32 + u * .44, 1.36 - u * .05, -.9 + random() * 1.8, 0);
    }

    // Lights: full-width tail strip (accent) and two headlight clusters (soft accent).
    var lightCount = Math.floor(count * .025);
    for (var l = 0; l < lightCount; l++) {
      if (random() < .6) {
        var ty = .66 + random() * .06;
        cloud.add(-2.255, ty, (random() * 2 - 1) * carSurfaceZ(-2.255, ty) * .95, 1);
      } else {
        var hs = random() < .5 ? -1 : 1;
        cloud.add(2.12 + random() * .06, .6 + random() * .07, hs * (.42 + random() * .2), .55);
      }
    }

    // Ambient dust around the car fills the remaining slots.
    while (!cloud.full()) {
      cloud.add((random() * 2 - 1) * 3.2, random() * 1.9, (random() * 2 - 1) * 1.6, 0);
    }
    return cloud;
  }

  /* --------------------------------------------------------------- Yard */

  /**
   * Builds the parking yard: lot outline, slot lines, parked cars as wireframes (four in accent) and dust.
   * @param {number} count - Points.
   * @param {function(): number} random - Random generator.
   * @returns {object} Cloud.
   */
  function buildYard(count, random) {
    var cloud = createCloud(count);
    var HALF_X = 22;
    var HALF_Z = 13;
    var SLOT_W = 2.6;
    var SLOTS = 16;
    var ROW_Z = [-6.5, 6.5];
    var DEPTH = 5.2;
    var startX = -SLOTS * SLOT_W / 2;

    sampleSegments(cloud, [
      [-HALF_X, 0, -HALF_Z, HALF_X, 0, -HALF_Z], [-HALF_X, 0, HALF_Z, HALF_X, 0, HALF_Z],
      [-HALF_X, 0, -HALF_Z, -HALF_X, 0, HALF_Z], [HALF_X, 0, -HALF_Z, HALF_X, 0, HALF_Z]
    ], Math.floor(count * .07), random, .05);

    var slotLines = [];
    ROW_Z.forEach(function (rz) {
      slotLines.push([startX, 0, rz, -startX, 0, rz]);
      for (var k = 0; k <= SLOTS; k++) {
        var lx = startX + k * SLOT_W;
        slotLines.push([lx, 0, rz - DEPTH, lx, 0, rz + DEPTH]);
      }
    });
    sampleSegments(cloud, slotLines, Math.floor(count * .15), random, .04);

    // Parked cars: lower body box + smaller cabin box.
    var cars = [];
    ROW_Z.forEach(function (rz) {
      [-1, 1].forEach(function (half) {
        for (var k = 0; k < SLOTS; k++) {
          if (random() < .28) continue;
          cars.push({ x: startX + (k + .5) * SLOT_W, z: rz + half * DEPTH / 2 });
        }
      });
    });
    var ACCENT_CARS = { 3: true, 16: true, 27: true, 40: true }; // indices of the highlighted cars
    var perCar = Math.floor(count * .72 / Math.max(1, cars.length));
    cars.forEach(function (car, index) {
      var accentValue = ACCENT_CARS[index] ? 1 : 0;
      var x0 = car.x - .92;
      var x1 = car.x + .92;
      var z0 = car.z - 2.15;
      var z1 = car.z + 2.15;
      var edges = boxEdges(x0, 0, z0, x1, .72, z1).concat(boxEdges(x0 + .14, .72, z0 + 1.0, x1 - .14, 1.3, z1 - 1.05));
      sampleSegments(cloud, edges, perCar, random, .03, accentValue);
    });

    while (!cloud.full()) {
      cloud.add((random() * 2 - 1) * HALF_X * 1.1, random() * random() * 4, (random() * 2 - 1) * HALF_Z * 1.15, 0);
    }
    return cloud;
  }

  /* --------------------------------------------------------------- Road */

  /**
   * Builds the road scene between z = -70 and z = 4 (it loops along z in the shader):
   * edge lines, lane dashes, kerbs, gantries every 14.8 m, building outlines and dust.
   * @param {number} count - Points.
   * @param {function(): number} random - Random generator.
   * @returns {object} Cloud.
   */
  function buildRoad(count, random) {
    var cloud = createCloud(count);
    var Z_NEAR = 4;
    var Z_FAR = -70;
    var LENGTH = Z_NEAR - Z_FAR;

    sampleSegments(cloud, [
      [-3.2, 0, Z_FAR, -3.2, 0, Z_NEAR], [3.2, 0, Z_FAR, 3.2, 0, Z_NEAR]
    ], Math.floor(count * .12), random, .03);
    sampleSegments(cloud, [
      [-5.4, .15, Z_FAR, -5.4, .15, Z_NEAR], [5.4, .15, Z_FAR, 5.4, .15, Z_NEAR]
    ], Math.floor(count * .04), random, .03);

    var dashes = [];
    for (var d = Z_FAR; d < Z_NEAR; d += 7) dashes.push([0, 0, d, 0, 0, d + 2.6]);
    sampleSegments(cloud, dashes, Math.floor(count * .025), random, .03);

    var gantries = [];
    for (var g = 0; g < 5; g++) {
      var gz = Z_FAR + 6 + g * (LENGTH / 5);
      gantries.push([-4.6, 0, gz, -4.6, 7.6, gz], [4.6, 0, gz, 4.6, 7.6, gz], [-4.6, 7.6, gz, 4.6, 7.6, gz]);
      gantries.push([-4.6, 7.2, gz, 4.6, 7.2, gz]);
    }
    sampleSegments(cloud, gantries, Math.floor(count * .18), random, .03);

    var buildings = [];
    [-1, 1].forEach(function (side) {
      var z = Z_FAR;
      while (z < Z_NEAR) {
        var depth = 5 + random() * 6;
        var height = 5 + random() * 13;
        var near = 7.5 + random() * 3;
        var x0 = side * near;
        var x1 = side * (near + 5 + random() * 4);
        var z0 = z;
        var z1 = Math.min(Z_NEAR, z + depth);
        buildings = buildings.concat(boxEdges(Math.min(x0, x1), 0, z0, Math.max(x0, x1), height, z1));
        for (var floor = 3; floor < height - 1; floor += 3) {
          buildings.push([x0, floor, z0, x0, floor, z1]); // floor lines on the road-facing side
        }
        z += depth + .8 + random() * 2.2;
      }
    });
    sampleSegments(cloud, buildings, Math.floor(count * .45), random, .04);

    while (!cloud.full()) {
      cloud.add((random() * 2 - 1) * 32, random() * 26, Z_FAR + random() * LENGTH, 0);
    }
    return cloud;
  }

  /**
   * Shuffles point order in place (positions and accent together).
   * @param {object} cloud - Cloud to shuffle.
   * @param {function(): number} random - Random generator.
   * @returns {void}
   */
  function shuffle(cloud, random) {
    var pos = cloud.positions;
    var acc = cloud.accent;
    for (var i = acc.length - 1; i > 0; i--) {
      var j = Math.floor(random() * (i + 1));
      for (var axis = 0; axis < 3; axis++) {
        var tmp = pos[i * 3 + axis];
        pos[i * 3 + axis] = pos[j * 3 + axis];
        pos[j * 3 + axis] = tmp;
      }
      var tmpAccent = acc[i];
      acc[i] = acc[j];
      acc[j] = tmpAccent;
    }
  }

  /**
   * Builds all shapes plus per-point random values.
   * @param {number} count - Points per shape.
   * @returns {{count: number, car: Float32Array, yard: Float32Array, road: Float32Array, rand: Float32Array, flags: Float32Array}}
   *   flags holds [carAccent, yardAccent] per point; rand holds 4 values in [0, 1) per point.
   */
  function build(count) {
    var random = createRandom(20261112);
    var car = buildCar(count, random);
    var yard = buildYard(count, random);
    var road = buildRoad(count, random);
    shuffle(car, random);
    shuffle(yard, random);
    shuffle(road, random);

    var rand = new Float32Array(count * 4);
    for (var i = 0; i < rand.length; i++) rand[i] = random();
    var flags = new Float32Array(count * 2);
    for (var k = 0; k < count; k++) {
      flags[k * 2] = car.accent[k];
      flags[k * 2 + 1] = yard.accent[k];
    }
    return { count: count, car: car.positions, yard: yard.positions, road: road.positions, rand: rand, flags: flags };
  }

  window.ParticleShapes = { build: build };
})();
