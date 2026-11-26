import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./LoaderHelmetFill-BERAQ_Wg.js";
import r from "./NavbarStackedWordmark-CgnWcRiP.js";
import i from "./FooterSignaturePanel-BL7Jm88j.js";
import a from "./GalleryScatterRun-B7kbHShC.js";
import o from "./HeroPortraitHelmetZoom-6o9VLpTs.js";
import s from "./MetricsTrackDraw-D2N3uGg6.js";
import c from "./ProductCarAeroScroll-DUNAWzQr.js";
import l from "./SocialFeedFan-BUQT00j2.js";
import u from "./SocialProofBrushMarquee-BlKPHFfe.js";
/* empty css              */ var d = e(),
  f = `assets/media`;
function p() {
  return (0, d.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `glass`,
    "data-pattern": `contour`,
    className: `relative isolate overflow-x-clip bg-background leading-[normal] text-foreground`,
    children: [
      (0, d.jsx)(t, {}),
      (0, d.jsx)(n, { brand: `Your Brand`, maskSrc: `${f}/helmet-mask.png` }),
      (0, d.jsx)(r, {
        brandFirst: `Your`,
        brandLast: `Brand`,
        badge: `00`,
        badgeNote: `Team Name since 20XX`,
        button: { text: `Store`, href: `#footer` },
        links: [
          { text: `Home`, href: `#hero` },
          { text: `On track`, href: `#product` },
          { text: `Off track`, href: `#gallery` },
          { text: `Calendar`, href: `#metrics` },
        ],
        images: [
          { imageSrc: `${f}/race-suit-helmet-cutout-1600.webp`, imageAlt: `Menu image: driver in helmet` },
          { imageSrc: `${f}/leather-coat-editorial-1600.webp`, imageAlt: `Hero image: driver portrait` },
          { imageSrc: `${f}/pit-wall-race-suit-1600.webp`, imageAlt: `Product image: race car from the front` },
          { imageSrc: `${f}/team-garage-1600.webp`, imageAlt: `Menu image: race car from behind` },
        ],
        note: `Business enquiries`,
        socials: [
          { text: `Instagram`, href: `#` },
          { text: `X`, href: `#` },
          { text: `YouTube`, href: `#` },
          { text: `TikTok`, href: `#` },
        ],
      }),
      (0, d.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        children: (0, d.jsx)(o, {
          title: `Your Brand`,
          maps: {
            diffuse: `${f}/person-diffuse.webp`,
            depth: `${f}/person-depth.webp`,
            alpha: `${f}/person-alpha.webp`,
            normal: `${f}/person-normal.webp`,
          },
          helmetSrc: `${f}/helmet.glb`,
          noiseSrc: `${f}/noise.webp`,
          environmentSrc: `${f}/studio-light.hdr`,
          imageSrc: `${f}/leather-coat-editorial-1600.webp`,
          imageAlt: `Hero image: driver portrait`,
          card: {
            label: `Next race`,
            title: `City GP`,
            number: `00`,
            lines: [`Team Name`, `since 20XX`],
            mapSrc: `${f}/circuit-spa.webp`,
            mapAlt: `Layout of the next circuit`,
          },
          rowTop: [`Your motto here`],
          rowBottom: [`Your headline achievement`, `Team Name`],
          caption: `Message from the driver`,
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `metrics`,
        "data-section": `metrics`,
        children: (0, d.jsx)(s, {
          label: `Next race · Round 00`,
          title: `Circuit`,
          titleAccent: `Name`,
          counter: { label: `Distance`, to: 5, decimals: 3, suffix: `km` },
          items: [
            { label: `Turns`, value: `20` },
            { label: `Race laps`, value: `50` },
            { label: `Lap record`, value: `1:30.000` },
          ],
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `product`,
        "data-section": `product`,
        "data-scene": !0,
        children: (0, d.jsx)(c, {
          title: `Car 01`,
          titleAccent: `Double-zero`,
          description: `This season's race car. Short description of the car, the team and the driver in the cockpit.`,
          primaryButton: { text: `Where the air hits`, href: `#aero` },
          backWord: `00`,
          introLabel: `The idea`,
          introTitle: `Built for a new`,
          introTitleAccent: `era`,
          introDescription: `Short paragraph about the season: what changed in the rules, what is new on the car, and what the team is aiming for this year.`,
          statsLabel: `By the numbers`,
          stats: [
            { value: 1e3, suffix: `PS`, label: `Power` },
            { value: 2.5, decimals: 1, suffix: `s`, label: `0–100 km/h` },
            { value: 300, suffix: `km/h`, label: `Top speed` },
            { value: 800, suffix: `kg`, label: `Minimum weight` },
            { value: 50, suffix: `%`, label: `Electric power` },
          ],
          aeroLabel: `Aerodynamics`,
          aeroTitle: `Where the air`,
          aeroTitleAccent: `hits`,
          steps: [
            {
              title: `Stagnation`,
              description: `At the front wing the air stops dead. The highest pressure on the whole car.`,
            },
            {
              title: `Over the halo`,
              description: `The flow speeds up over the cockpit and the airbox, feeding the engine and the rear of the car.`,
            },
            {
              title: `The rear wing`,
              description: `This season the wings move: closed for grip in the corners, open on the straights to shed drag.`,
            },
          ],
          legendLabel: `In the tunnel`,
          credit: `3D model: author name, source and license`,
          media: `model`,
          modelSrc: `${f}/sf26.glb`,
          productImageSrc: `${f}/pit-wall-race-suit-1600.webp`,
          productImageAlt: `Product image: race car from the front`,
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `gallery`,
        "data-section": `gallery`,
        "data-scene": !0,
        "data-gallery": !0,
        children: (0, d.jsx)(a, {
          items: [
            {
              title: `Paddock`,
              imageSrc: `${f}/paddock-walk-1600.webp`,
              imageAlt: `Gallery image: walking through the paddock`,
            },
            {
              title: `Gala night`,
              imageSrc: `${f}/gala-tuxedo-1600.webp`,
              imageAlt: `Gallery image: evening event portrait`,
            },
            {
              title: `Pit wall`,
              imageSrc: `${f}/pit-wall-race-suit-1600.webp`,
              imageAlt: `Gallery image: on the pit wall in race suit`,
            },
            {
              title: `Editorial`,
              imageSrc: `${f}/leather-coat-editorial-1600.webp`,
              imageAlt: `Gallery image: editorial portrait`,
            },
            {
              title: `Garage`,
              imageSrc: `${f}/team-garage-1600.webp`,
              imageAlt: `Gallery image: in the team garage`,
            },
            {
              title: `Training`,
              imageSrc: `${f}/training-session-1600.webp`,
              imageAlt: `Gallery image: training session`,
            },
          ],
          quote: [`Your motto.`, `Every season, every race,`, `a little further.`],
          quoteAccents: [`motto`, `season`, `further`],
          label: `Off track`,
          title: `More from`,
          titleAccent: `the driver`,
          primaryButton: { text: `View off track`, href: `#social` },
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `social-proof`,
        "data-section": `social-proof`,
        children: (0, d.jsx)(u, {
          brush: `Collabs`,
          title: `Partners`,
          titleAccent: `&campaigns`,
          description: `Short description of the partners you work with and the values you share, on the track and far beyond it.`,
          items: [
            { name: `Partner`, note: `One`, style: `spaced` },
            { name: `Company`, style: `serif` },
            { name: `brandname`, style: `soft` },
            { name: `Sponsor`, note: `Name`, style: `condensed` },
            { name: `Logo`, style: `pill` },
            { name: `+00`, style: `wide` },
            { name: `Label`, style: `serif-caps` },
            { name: `Studio`, note: `00`, style: `caps` },
          ],
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `social`,
        "data-section": `social`,
        children: (0, d.jsx)(l, {
          badge: `00`,
          title: `What's up`,
          titleAccent: `on socials`,
          items: [
            {
              imageSrc: `${f}/varsity-jacket-street-1600.webp`,
              imageAlt: `Social post: street style`,
              href: `#`,
            },
            {
              imageSrc: `${f}/neon-night-portrait-1600.webp`,
              imageAlt: `Social post: night portrait`,
              href: `#`,
            },
            {
              imageSrc: `${f}/paddock-smile-1600.webp`,
              imageAlt: `Social post: in the paddock`,
              href: `#`,
            },
            {
              imageSrc: `${f}/cockpit-seat-1600.webp`,
              imageAlt: `Social post: in the cockpit`,
              href: `#`,
            },
            {
              imageSrc: `${f}/bulldog-at-home-1600.webp`,
              imageAlt: `Social post: at home`,
              href: `#`,
            },
            {
              imageSrc: `${f}/podium-celebration-1600.webp`,
              imageAlt: `Social post: on the podium`,
              href: `#`,
            },
            {
              imageSrc: `${f}/grid-walk-1600.webp`,
              imageAlt: `Social post: on the grid`,
              href: `#`,
            },
          ],
          description: `Follow the driver on social media`,
          links: [
            { text: `Instagram`, href: `#` },
            { text: `X`, href: `#` },
            { text: `TikTok`, href: `#` },
            { text: `YouTube`, href: `#` },
          ],
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        children: (0, d.jsx)(i, {
          title: `Your`,
          titleAccent: `motto here.`,
          imageSrc: `${f}/race-suit-helmet-cutout-1600.webp`,
          imageAlt: `Footer image: driver in race suit with helmet`,
          pagesLabel: `Pages`,
          pages: [
            { text: `Home`, href: `#hero` },
            { text: `On track`, href: `#product` },
            { text: `Off track`, href: `#gallery` },
            { text: `Calendar`, href: `#metrics` },
          ],
          highlight: { text: `Store`, href: `#footer` },
          followLabel: `Follow on`,
          socials: [
            { text: `Instagram`, href: `#` },
            { text: `X`, href: `#` },
            { text: `TikTok`, href: `#` },
            { text: `YouTube`, href: `#` },
          ],
          primaryButton: { text: `Business enquiries`, href: `mailto:hello@example.com` },
          legal: `© 20XX Your Brand. All rights reserved`,
          legalLinks: [
            { text: `Privacy policy`, href: `#` },
            { text: `Terms`, href: `#` },
          ],
        }),
      }),
    ],
  });
}
export { p as default };
