import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import t from "./CarDuoStage-B9PZJ4sH.js";
import { t as n } from "./SmoothScroll-ChrUt1wD.js";
import r from "./LoaderStudioWarmup-Bj6QoBsT.js";
import i from "./NavbarStudioWordmark-Db2Ap0m4.js";
import a from "./AboutTwinCarIntro-Cf0xnUcd.js";
import o from "./FeaturesCarAnatomy-DywO5xs5.js";
import s from "./FeaturesTwinCompare-DGWI22T7.js";
import c from "./ProcessAeroPressure-d_DX3vM9.js";
import l from "./HeroTwinCarStage-CeZD802B.js";
import u from "./MetricsTwinCarFigures-uNyjdzdT.js";
import d from "./ProductPaintTurntable-BRZu6_Wl.js";
import f from "./CtaTwinCarSwap-Bgla_zAP.js";
/* empty css              */ var p = e(),
  m = `assets/media`;
function h() {
  return (0, p.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `glass`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip text-foreground`,
    children: [
      (0, p.jsx)(n, {}),
      (0, p.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, p.jsx)(t, {
        label: `Choose a car`,
        switchAfterIntro: !0,
        cars: [
          {
            name: `Model One`,
            code: `M1`,
            src: `${m}/911.glb`,
            length: 4.535,
            paintMaterial: `body_main`,
            wheels: `wheel_rim|tire_main|discs_Discs`,
            tail: `^red_light_main$`,
            paint: { color: `rgb(166, 171, 175)`, metalness: 0.8, roughness: 0.28 },
            topSpeed: 300,
            downforce: 150,
            engine: [-1.7, 0.8, 0],
            cockpit: [0.1, 1, 0.2],
          },
          {
            name: `Model Two`,
            code: `M2`,
            src: `${m}/918.glb`,
            length: 4.643,
            turn: Math.PI / 2,
            paintMaterial: `Body_Paint_-_GT_Silver_Metalic`,
            wheels: `DEF-?Wheel(?!Brake)`,
            paint: { color: `rgb(179, 184, 188)`, metalness: 0.9, roughness: 0.22 },
            accent: `rgb(147, 192, 31)`,
            topSpeed: 320,
            downforce: 250,
            engine: [-0.7, 0.9, 0],
            cockpit: [0.3, 0.95, 0.2],
          },
        ],
      }),
      (0, p.jsx)(r, { label: `Warming up`, errorLabel: `Could not load the cars` }),
      (0, p.jsx)(i, { brand: `YOUR`, brandMark: `/`, brandEnd: `BRAND`, href: `#hero` }),
      (0, p.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        "data-scene": !0,
        className: `relative z-[1]`,
        children: (0, p.jsx)(l, {
          cars: [
            {
              title: `Born at`,
              titleMuted: `300 km/h`,
              description: `Model One. A short line on what makes this car special, who it is for and how it feels to drive.`,
            },
            {
              title: `Born at`,
              titleMuted: `320 km/h`,
              description: `Model Two. A short line on its engine, its performance and why it stands apart from the rest.`,
            },
          ],
          primaryButton: { text: `Compare both`, href: `#features` },
          scrollLabel: `Scroll`,
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        className: `relative z-[1]`,
        children: (0, p.jsx)(a, {
          label: `The idea`,
          cars: [
            {
              title: `The story`,
              titleEnd: `behind it`,
              description: `Two or three sentences on the idea behind this model: where it comes from, the decision that defines it and how it has evolved over the years into the car it is today.`,
            },
            {
              title: `The record`,
              titleEnd: `it set`,
              description: `Two or three sentences on a milestone of this model: a record, a first or a result that shows what it can do and why people remember it.`,
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `metrics`,
        "data-section": `metrics`,
        "data-scene": !0,
        className: `relative z-[1]`,
        children: (0, p.jsx)(u, {
          label: `By the numbers`,
          items: [
            { label: `Power`, suffix: `PS`, values: [600, 800] },
            { label: `Torque`, suffix: `Nm`, values: [700, 1000] },
            { label: `0–100 km/h`, suffix: `s`, values: [3.0, 2.5], decimals: 1 },
            { label: `Top speed`, suffix: `km/h`, values: [300, 320] },
            { label: `Weight`, suffix: `kg`, values: [1600, 1500] },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `process`,
        "data-section": `process`,
        "data-scene": !0,
        className: `relative z-[1]`,
        children: (0, p.jsx)(c, {
          label: `Aerodynamics`,
          title: `Where the`,
          titleEnd: `air`,
          titleMuted: `hits`,
          cars: [
            {
              items: [
                {
                  title: `Stagnation`,
                  description: `At the nose the air stops dead. Highest pressure on the whole car.`,
                },
                {
                  title: `Over the roof`,
                  description: `The flow speeds up over the glass and roof, and the pressure drops. That suction is lift.`,
                },
                {
                  title: `The tail`,
                  description: `Short description of the rear aerodynamics of this model: the wing, the spoiler and how they keep the car on the road.`,
                },
              ],
            },
            {
              items: [
                {
                  title: `Stagnation`,
                  description: `At the nose the air stops dead. Highest pressure on the whole car.`,
                },
                {
                  title: `Over the roof`,
                  description: `The flow speeds up over the glass and roof, and the pressure drops. That suction is lift.`,
                },
                {
                  title: `The tail`,
                  description: `Short description of the rear aerodynamics of this model: what changes at speed and how it adds grip where it is needed.`,
                },
              ],
            },
          ],
          legendLabel: `Surface pressure`,
          lowLabel: `Suction`,
          highLabel: `Pressure`,
          speedLabel: `km/h air`,
          forceLabel: `kg downforce (est.)`,
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        "data-scene": !0,
        className: `relative z-[1]`,
        children: (0, p.jsx)(o, {
          cars: [
            {
              items: [
                {
                  title: `Brakes`,
                  titleEnd: `that hold on`,
                  label: `Front brake`,
                  description: `Short description of the brakes and wheels of this model: materials, size and what they mean for the driver lap after lap.`,
                },
                {
                  title: `The engine,`,
                  titleEnd: `in brief`,
                  label: `Engine`,
                  description: `Short description of the engine: layout, size and power. Where it sits in the car and why it matters.`,
                },
                {
                  title: `A cabin`,
                  titleEnd: `for every day`,
                  label: `Cockpit`,
                  description: `Short description of the cabin: seats, space and comfort. What makes this model easy to live with every day.`,
                },
              ],
            },
            {
              items: [
                {
                  title: `Wheels`,
                  titleEnd: `with character`,
                  label: `Front brake`,
                  description: `Short description of the wheels and brakes of this model: materials, finish and the details that set it apart.`,
                },
                {
                  title: `Engine plus`,
                  titleEnd: `electric motors`,
                  label: `Engine`,
                  description: `Short description of the powertrain: engine, electric motors and the combined power and torque they deliver.`,
                },
                {
                  title: `Design`,
                  titleEnd: `details`,
                  label: `Cockpit`,
                  description: `Short description of a signature design detail of this model and the engineering reason behind it.`,
                },
              ],
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `product`,
        "data-section": `product`,
        "data-scene": !0,
        className: `relative z-[1]`,
        children: (0, p.jsx)(d, {
          label: `Colour`,
          title: `Pick its`,
          titleMuted: `skin`,
          cars: [
            {
              items: [
                { name: `Silver`, color: `rgb(166, 171, 175)`, metalness: 0.8, roughness: 0.28 },
                { name: `Red`, color: `rgb(192, 18, 28)`, metalness: 0.35, roughness: 0.3 },
                { name: `Navy`, color: `rgb(29, 53, 102)`, metalness: 0.55, roughness: 0.3 },
                { name: `Chalk`, color: `rgb(208, 204, 195)`, metalness: 0.15, roughness: 0.36 },
                { name: `Black`, color: `rgb(12, 13, 15)`, metalness: 0.6, roughness: 0.26 },
                { name: `Carbon`, color: `rgb(20, 21, 23)`, metalness: 0.3, roughness: 0.3, carbon: !0 },
              ],
            },
            {
              items: [
                { name: `Bright Silver`, color: `rgb(179, 184, 188)`, metalness: 0.9, roughness: 0.22 },
                { name: `Lime`, color: `rgb(169, 214, 31)`, metalness: 0.3, roughness: 0.3 },
                { name: `Red`, color: `rgb(192, 18, 28)`, metalness: 0.35, roughness: 0.3 },
                { name: `Blue`, color: `rgb(42, 99, 201)`, metalness: 0.5, roughness: 0.3 },
                { name: `Black`, color: `rgb(12, 13, 15)`, metalness: 0.6, roughness: 0.26 },
                { name: `Carbon`, color: `rgb(20, 21, 23)`, metalness: 0.3, roughness: 0.3, carbon: !0 },
              ],
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `features`,
        "data-section": `features`,
        className: `relative z-[1]`,
        children: (0, p.jsx)(s, {
          label: `Versus`,
          title: `Two ways`,
          titleEnd: `to`,
          titleMuted: `drive`,
          description: `One line on the first model and one on the second: what each one is for and who should pick it. Switch between them; the whole page follows.`,
          columns: [`Model One`, `Model Two`],
          rows: [
            { label: `Engine`, values: [`Engine type`, `Engine + e-motors`] },
            { label: `Power`, values: [`600 PS`, `800 PS`] },
            { label: `Torque`, values: [`700 Nm`, `1,000 Nm`] },
            { label: `0–100 km/h`, values: [`3.0 s`, `2.5 s`] },
            { label: `Top speed`, values: [`300 km/h`, `320 km/h`] },
            { label: `Layout`, values: [`Rear engine, AWD`, `Mid engine, AWD`] },
            { label: `Built`, values: [`In series`, `100 units`] },
          ],
          buttonText: `Switch car`,
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `cta`,
        "data-section": `cta`,
        "data-scene": !0,
        className: `relative z-[1]`,
        children: (0, p.jsx)(f, {
          hold: !1,
          cars: [
            {
              label: `The everyday car`,
              title: `Drive it`,
              titleMuted: `daily`,
              buttonText: `Drive Model Two`,
            },
            { label: `The limited edition`, title: `Only`, titleMuted: `100`, buttonText: `Drive Model One` },
          ],
        }),
      }),
    ],
  });
}
export { h as default };
