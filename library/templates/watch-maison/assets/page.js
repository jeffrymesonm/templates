import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./ModelStage-DrSyAwDN.js";
import r from "./ScrollToneBackdrop-Dv-1Id31.js";
import i from "./LoaderRingProgress-CdEaxYfo.js";
import a from "./NavbarHairlineRing-CHtu4O5p.js";
import o from "./AboutBigTypeStack-xmzj8hbi.js";
import s from "./ContactAnchorDetails-BsObGBSv.js";
import c from "./ProcessExplodedParts-CwxClbPq.js";
import l from "./FooterWordmark-BtqBDVua.js";
import u from "./HeroWordmarkDial-qAA1CFkD.js";
import d from "./MetricsMechanicalHeart-BXK0uXAC.js";
import f from "./PricingAxisColumns-DNF1dE7w.js";
import p from "./CtaSplitAnchor-DSId9LZQ.js";
/* empty css              */ var m = e(),
  h = 2.6,
  g = { ry: 279, radius: 6, explode: 1, sm: { radius: 10, spread: 0.6 } },
  _ = { ry: 342, rx: -36, radius: 6, scale: 0.65, explode: 0, sm: { y: -0.4 } };
function v() {
  return (0, m.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `filled`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip text-foreground`,
    children: [
      (0, m.jsx)(t, {}),
      (0, m.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, m.jsx)(r, {}),
      (0, m.jsx)(n, {
        src: `assets/media/set-02/model-01.glb`,
        node: `theWatch`,
        hide: [`glowdial`],
      }),
      (0, m.jsx)(i, {}),
      (0, m.jsx)(a, { brand: `Your Brand`, button: { text: `Book a fitting`, href: `#contact` } }),
      (0, m.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        children: (0, m.jsx)(u, {
          title: `M 01`,
          modelPose: {},
          colorLabel: `Finish`,
          items: [
            { name: `Brushed Steel` },
            { name: `Graphite` },
            { name: `Yellow Gold` },
            { name: `Rose Gold` },
          ],
          modelLabel: `Calibre`,
          model: `M-01`,
          introDelay: h,
          media: `model`,
          productImageSrc: `assets/media/image-01-1600.webp`,
          productImageAlt: `Hero image: close-up of your product`,
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, m.jsx)(o, {
          title: `Your Brand`,
          lines: [`made`, `with care`, `in our`, `own`, `studio`],
          items: [
            {
              title: `Since 20XX`,
              description: `Short story of your brand: who makes the product, where and how it is made. Every piece is still assembled, checked and finished by one person.`,
            },
            {
              title: `Signature Model`,
              description: `Key technical detail of your flagship product and what makes it different from the rest, written in one or two short sentences for the reader.`,
            },
          ],
          model: { rx: -27, ry: 36 },
          media: `model`,
          productImageSrc: `assets/media/image-04-1600.webp`,
          productImageAlt: `About image: your maker at work`,
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `process`,
        "data-section": `process`,
        "data-scene": !0,
        children: (0, m.jsx)(c, {
          items: [
            { name: `Dial`, part: `dial` },
            { name: `Tourbillon`, part: `tourbillon` },
            { name: `Mainplate`, part: `mainplate` },
            { name: `Barrel`, part: `barrel` },
            { name: `Backplate`, part: `backplate` },
            { name: `Rotor`, part: `weight` },
          ],
          model: [
            { at: 0.1, ry: 279, radius: 9 },
            { ...g, at: 0.45 },
            { ...g, at: 0.6, ry: 285 },
          ],
          media: `model`,
          productImageSrc: `assets/media/image-02-1600.webp`,
          productImageAlt: `Process image: close-up of product parts`,
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `metrics`,
        "data-section": `metrics`,
        "data-scene": !0,
        children: (0, m.jsx)(d, {
          titleMuted: `Power`,
          title: `Reserve`,
          items: [
            {
              label: `Signature Model`,
              value: `One line that explains the key figure shown by the counter next to it`,
            },
            { label: `Reserve`, value: `60 hours` },
          ],
          counterFrom: 0,
          counterTo: 60,
          counterSuffix: `h`,
          tone: `dark`,
          model: [_, { ..._, ry: 360, rx: -54 }],
          media: `model`,
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, m.jsx)(f, {
          counter: `04 editions`,
          title: `Collection`,
          description: `Every model ships with insured delivery, a long warranty and a free first service.`,
          items: [
            {
              name: `Steel`,
              price: `$00`,
              features: [`Brushed steel case`, `Calf leather strap`, `Ten year warranty`],
              button: { text: `Reserve Steel`, href: `#contact` },
            },
            {
              name: `Titanium`,
              price: `$00`,
              features: [`Grade 5 titanium case`, `Rubber and leather straps`, `Ten year warranty`],
              button: { text: `Reserve Titanium`, href: `#contact` },
            },
            {
              name: `Gold`,
              price: `$00`,
              features: [`18 carat gold case`, `Numbered caseback`, `Alligator strap`, `Private fitting`],
              button: { text: `Reserve Gold`, href: `#contact` },
            },
            {
              name: `Atelier`,
              price: `From $00`,
              features: [`Your dial and engraving`, `Visit to the atelier`, `Lifetime service`],
              button: { text: `Book a visit`, href: `#contact` },
            },
          ],
          model: { rx: -27, ry: 360, radius: 7, scale: 0.85, sm: { radius: 9 } },
          media: `model`,
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `cta`,
        "data-section": `cta`,
        children: (0, m.jsx)(p, {
          title: `Try It On`,
          description: `Book a private fitting in City, or have the product sent to you on approval.`,
          primaryButton: { text: `Book a fitting`, href: `#contact` },
          secondaryButton: { text: `See editions`, href: `#pricing` },
          model: { rx: -10, ry: 360, radius: 6.5, sm: { radius: 8 } },
          media: `model`,
          centre: !0,
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, m.jsx)(s, {
          title: `Visit Us`,
          details: [
            { label: `Atelier`, value: `123 Example Street, City` },
            { label: `Email`, value: `hello@example.com`, href: `mailto:hello@example.com` },
            { label: `Phone`, value: `+00 000 000 0000`, href: `tel:+000000000000` },
            { label: `Hours`, value: `Mon to Fri, 9:00 to 18:00` },
          ],
          submitText: `Send request`,
          successText: `Thank you. Our atelier will reply within one working day.`,
          model: { ry: 380, rx: -15, radius: 6, scale: 0.77 },
          media: `model`,
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        children: (0, m.jsx)(l, {
          title: `Your Brand`,
          media: `image`,
          fit: !0,
          columns: [
            {
              title: `Watch`,
              links: [
                { text: `Maison`, href: `#about` },
                { text: `Movement`, href: `#process` },
              ],
            },
            { title: `Maison`, links: [{ text: `Collection`, href: `#pricing` }] },
            {
              title: `Contact`,
              links: [
                { text: `hello@example.com`, href: `mailto:hello@example.com` },
                { text: `Instagram`, href: `#` },
                { text: `LinkedIn`, href: `#` },
              ],
            },
          ],
          bottomLinks: [
            { text: `© 20XX Your Brand`, href: `#hero` },
            { text: `Privacy`, href: `#` },
            { text: `Terms`, href: `#` },
          ],
        }),
      }),
    ],
  });
}
export { v as default };
