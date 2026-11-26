import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import { t as n } from "./react-azkLsmaj.js";
import { n as r, t as i } from "./bed-CPeaL-4I.js";
import { t as a } from "./maximize-2-lIm0gYI8.js";
import o from "./NavbarFullscreen-CtxA51JZ.js";
import s from "./AboutParallax-DQO911Ll.js";
import c from "./ContactSplitForm-oVn5m90m.js";
import l from "./FeaturesAttributeCards-BEX-s9Gk.js";
import u from "./FeaturesMediaGrid-CEJyqb_z.js";
import d from "./FeaturesRevealCardsBento-CibIppkf.js";
import f from "./FooterBrand-DLRDSF8d.js";
import p from "./HeroExpand-EjcYqrOI.js";
/* empty css               */ var m = e();
function h() {
  return (0, m.jsxs)(t, {
    root: !0,
    children: [
      (0, m.jsx)(n.div, {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, delay: 1.8, ease: [0.22, 1, 0.36, 1] },
        className: `relative z-110`,
        children: (0, m.jsx)(o, {
          logo: `Your Brand`,
          navItems: [
            { name: `Rooms`, href: `#rooms` },
            { name: `Experience`, href: `#experience` },
            { name: `Dining`, href: `#dining` },
            { name: `Contact`, href: `#contact` },
          ],
          ctaButton: { text: `Book Now`, href: `#contact` },
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        children: (0, m.jsx)(p, {
          title: `Your Brand`,
          videoSrc: `assets/media/set-01/video-01.mp4`,
          primaryButton: { text: `Browse rooms`, href: `#rooms` },
          secondaryButton: { text: `Watch tour`, href: `#tour` },
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, m.jsx)(s, {
          textAnimation: `slide-up`,
          tag: `About`,
          title: `Headline About Your Place & Its Spirit`,
          description: `Short description of your place: what makes the stay special, the atmosphere guests can expect and what you offer them.`,
          frontImageSrc: `assets/media/set-02/image-01.webp`,
          backImageSrc: `assets/media/set-03/image-04.jpg`,
          badge: `Est. 20XX`,
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `rooms`,
        "data-section": `rooms`,
        children: (0, m.jsx)(l, {
          textAnimation: `slide-up`,
          tag: `Rooms & Suites`,
          title: `Featured Rooms`,
          description: `Short line that introduces your rooms and what they have in common.`,
          items: [
            {
              title: `Room Type One`,
              tags: `Feature, Feature, Style`,
              badge: `Guest Favourite`,
              details: [
                { icon: i, label: `Beds`, value: 2 },
                { icon: r, label: `Baths`, value: 2 },
                { icon: a, label: `Sqft`, value: 1000 },
              ],
              imageSrc: `assets/media/set-06/image-02.webp`,
            },
            {
              title: `Room Type Two`,
              tags: `View, Mood, Feature`,
              badge: null,
              details: [
                { icon: i, label: `Beds`, value: 1 },
                { icon: r, label: `Baths`, value: 1 },
                { icon: a, label: `Sqft`, value: 800 },
              ],
              imageSrc: `assets/media/set-06/image-04.webp`,
            },
            {
              title: `Room Type Three`,
              tags: `Feature, Feature, Extra`,
              badge: `Most Popular`,
              details: [
                { icon: i, label: `Beds`, value: 3 },
                { icon: r, label: `Baths`, value: 2 },
                { icon: a, label: `Sqft`, value: 2000 },
              ],
              imageSrc: `assets/media/set-06/image-01.webp`,
            },
            {
              title: `Room Type Four`,
              tags: `Size, Feature, Service`,
              badge: `Guest Favourite`,
              details: [
                { icon: i, label: `Beds`, value: 3 },
                { icon: r, label: `Baths`, value: 3 },
                { icon: a, label: `Sqft`, value: 3000 },
              ],
              imageSrc: `assets/media/set-06/image-05.webp`,
            },
            {
              title: `Room Type Five`,
              tags: `Style, Feature, Mood`,
              badge: null,
              details: [
                { icon: i, label: `Beds`, value: 1 },
                { icon: r, label: `Baths`, value: 1 },
                { icon: a, label: `Sqft`, value: 800 },
              ],
              imageSrc: `assets/media/set-06/image-03.webp`,
            },
            {
              title: `Room Type Six`,
              tags: `Feature, Feature, Theme`,
              badge: null,
              details: [
                { icon: i, label: `Beds`, value: 2 },
                { icon: r, label: `Baths`, value: 2 },
                { icon: a, label: `Sqft`, value: 1500 },
              ],
              imageSrc: `assets/media/set-06/image-06.jpg`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `experience`,
        "data-section": `amenities`,
        children: (0, m.jsx)(u, {
          textAnimation: `slide-up`,
          tag: `Amenities`,
          title: `Your Amenities`,
          description: `Short line that introduces the amenities and services guests can enjoy.`,
          items: [
            {
              title: `Amenity One`,
              description: `One short line describing this amenity`,
              imageSrc: `assets/media/set-03/image-04.jpg`,
            },
            {
              title: `Amenity Two`,
              description: `One short line about what is included here`,
              imageSrc: `assets/media/set-03/image-05.webp`,
            },
            {
              title: `Amenity Three`,
              description: `One short line about this service and its quality`,
              imageSrc: `assets/media/set-03/image-02.jpg`,
            },
            {
              title: `Amenity Four`,
              description: `One short line describing the space and options`,
              imageSrc: `assets/media/set-03/image-03.webp`,
            },
            {
              title: `Amenity Five`,
              description: `One short line about when and how it is available`,
              imageSrc: `assets/media/set-03/image-01.jpg`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `journeys`,
        "data-section": `journeys`,
        children: (0, m.jsx)(d, {
          textAnimation: `slide-up`,
          tag: `Journeys`,
          title: `The Journeys`,
          description: `Short description of the experiences you offer your guests — what they include, where they take place and why they are worth booking.`,
          items: [
            {
              title: `Experience One`,
              description: `Short description of this experience: what guests do, how long it lasts, what is included and the moment they will remember most.`,
              href: `#`,
              imageSrc: `assets/media/set-05/image-01.jpg`,
            },
            {
              title: `Experience Two`,
              description: `Short description of this experience: where it takes place, what it includes and why it is a perfect fit for a relaxing day.`,
              href: `#`,
              imageSrc: `assets/media/set-05/image-07.webp`,
            },
            {
              title: `Experience Three`,
              description: `Short description of this experience: the plan for the day, the main activities and how it ends.`,
              href: `#`,
              imageSrc: `assets/media/set-05/image-06.webp`,
            },
            {
              title: `Experience Four`,
              description: `Short description of this experience: where it takes place, how many days it lasts, who guides it and where guests stay.`,
              href: `#`,
              imageSrc: `assets/media/set-05/image-04.webp`,
            },
            {
              title: `Experience Five`,
              description: `Short description of this experience: the place guests visit, what they learn and how it ends.`,
              href: `#`,
              imageSrc: `assets/media/set-05/image-02.webp`,
            },
            {
              title: `Experience Six`,
              description: `Short description of this experience: when it happens, what guests see and how the evening ends.`,
              href: `#`,
              imageSrc: `assets/media/set-05/image-05.webp`,
            },
            {
              title: `Experience Seven`,
              description: `Short description of this experience: the activity, the setting and what makes it special.`,
              href: `#`,
              imageSrc: `assets/media/set-05/image-03.webp`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, m.jsx)(c, {
          textAnimation: `slide-up`,
          tag: `Contact`,
          title: `Book Your Stay`,
          description: `Short line inviting guests to get in touch, with what your team can help them with and how fast you answer.`,
          inputs: [
            { name: `name`, type: `text`, placeholder: `Full Name`, required: !0 },
            { name: `email`, type: `email`, placeholder: `Email Address`, required: !0 },
            { name: `phone`, type: `tel`, placeholder: `Phone Number` },
            { name: `dates`, type: `text`, placeholder: `Preferred Dates` },
          ],
          textarea: { name: `message`, placeholder: `Special Requests or Questions`, rows: 4 },
          buttonText: `Send Inquiry`,
          imageSrc: `assets/media/set-04/image-01.webp`,
        }),
      }),
      (0, m.jsx)(f, {
        brand: `Your Brand`,
        columns: [
          {
            items: [
              { label: `Rooms & Suites`, href: `#rooms` },
              { label: `Dining`, href: `#dining` },
              { label: `Amenities`, href: `#experience` },
            ],
          },
          {
            items: [
              { label: `Journeys`, href: `#journeys` },
              { label: `Spa & Wellness`, href: `#spa` },
              { label: `Events`, href: `#events` },
            ],
          },
          {
            items: [
              { label: `Book Now`, href: `#contact` },
              { label: `Location`, href: `#location` },
              { label: `Contact Us`, href: `#contact` },
            ],
          },
        ],
      }),
    ],
  });
}
export { h as default };
