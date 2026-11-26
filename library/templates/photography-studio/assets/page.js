import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./LoaderArchRise-D7c7xypt.js";
import r from "./NavbarCrossMenu-CKmypR1g.js";
import i from "./AboutBlurStatementVideo-Ki7cN_tu.js";
import a from "./ContactArchWindow-DdQ0MZv4.js";
import o from "./ServicesStackCards-DUWH3QNG.js";
import s from "./FooterNewsletterReveal-BNbsJ0vY.js";
import c from "./GalleryArchTrack-DLrRUs93.js";
import l from "./HeroArchWordmark-DYw6tlHL.js";
import u from "./PricingPastelPlans-DAuVK73E.js";
import d from "./TestimonialStackPortraits-D2MwIFQz.js";
/* empty css              */ var f = e(),
  p = 1.5,
  m = [
    {
      imageSrc: `assets/media/image-17-1600.webp`,
      imageAlt: `Hero image: one of your portraits`,
    },
    {
      imageSrc: `assets/media/image-13-1600.webp`,
      imageAlt: `Hero image: a couple session of yours`,
    },
    {
      imageSrc: `assets/media/image-02-1600.webp`,
      imageAlt: `Hero image: one of your portraits`,
    },
    {
      imageSrc: `assets/media/image-07-1600.webp`,
      imageAlt: `Hero image: a brand session of yours`,
    },
    {
      imageSrc: `assets/media/image-12-1600.webp`,
      imageAlt: `Hero image: one of your portraits`,
    },
    {
      imageSrc: `assets/media/image-04-1600.webp`,
      imageAlt: `Hero image: one of your studio portraits`,
    },
    {
      imageSrc: `assets/media/image-18-1600.webp`,
      imageAlt: `Hero image: one of your studio portraits`,
    },
    {
      imageSrc: `assets/media/image-27-1600.webp`,
      imageAlt: `Hero image: a brand session of yours`,
    },
    {
      imageSrc: `assets/media/image-23-1600.webp`,
      imageAlt: `Hero image: a family session of yours`,
    },
    {
      imageSrc: `assets/media/image-24-1600.webp`,
      imageAlt: `Hero image: a couple session of yours`,
    },
  ];
function h() {
  return (0, f.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `default`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, f.jsx)(t, {}),
      (0, f.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, f.jsx)(n, { label: `Your Brand, City` }),
      (0, f.jsx)(r, {
        brand: `Your Brand`,
        navItems: [
          { name: `Work`, href: `#gallery` },
          { name: `About`, href: `#about` },
          { name: `Sessions`, href: `#services` },
          { name: `Packages`, href: `#pricing` },
          { name: `Book`, href: `#contact` },
        ],
        contactLabel: `hello@example.com`,
        contactHref: `mailto:hello@example.com`,
        socials: [
          { label: `Instagram`, href: `#` },
          { label: `Pinterest`, href: `#` },
          { label: `TikTok`, href: `#` },
        ],
        introDelay: p - 0.3,
      }),
      (0, f.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        "data-scene": !0,
        children: (0, f.jsx)(l, {
          title: `Photos of your family that feel true to you`,
          rotatingWords: [`family`, `wedding`, `team`],
          rotateIn: `middle`,
          primaryButton: { text: `Book a session`, href: `#contact` },
          secondaryButton: { text: `See the work`, href: `#gallery` },
          items: m,
          introDelay: p,
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, f.jsx)(i, {
          title: `Your Brand® is a short statement about your studio, where you work and what you shoot, here since 20XX.`,
          imageSrc: `assets/media/image-08-1600.webp`,
          imageAlt: `About image: you at work in your studio`,
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `gallery`,
        "data-section": `gallery`,
        "data-scene": !0,
        "data-gallery": !0,
        children: (0, f.jsx)(c, {
          title: `Recent sessions.`,
          label: `©20XX`,
          items: [
            {
              title: `Session One`,
              date: `_06.XX`,
              imageSrc: `assets/media/image-11-1600.webp`,
              imageAlt: `Gallery image: a recent session`,
            },
            {
              title: `Session Two`,
              date: `_05.XX`,
              imageSrc: `assets/media/image-09-1600.webp`,
              imageAlt: `Gallery image: a recent session`,
            },
            {
              title: `Session Three`,
              date: `_04.XX`,
              imageSrc: `assets/media/image-10-1600.webp`,
              imageAlt: `Gallery image: a recent session`,
            },
            {
              title: `Session Four`,
              date: `_03.XX`,
              imageSrc: `assets/media/image-22-1600.webp`,
              imageAlt: `Gallery image: a recent session`,
            },
            {
              title: `Session Five`,
              date: `_02.XX`,
              imageSrc: `assets/media/image-01-1600.webp`,
              imageAlt: `Gallery image: a recent session`,
            },
            {
              title: `Session Six`,
              date: `_01.XX`,
              imageSrc: `assets/media/image-20-1600.webp`,
              imageAlt: `Gallery image: a recent session`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        "data-scene": !0,
        children: (0, f.jsx)(o, {
          title: `Sessions.`,
          cta: { text: `Check a date`, href: `#contact` },
          items: [
            {
              title: `Session one`,
              description: `Short description of this session: where it happens, how long it lasts and who it is for.`,
              tags: [`Tag one`, `Tag two`, `Tag three`],
              imageSrc: `assets/media/image-25-1600.webp`,
              imageAlt: `Session one image: an example of this session`,
            },
            {
              title: `Session two`,
              description: `Short description of this session: what the client receives, the uses and the delivery time.`,
              tags: [`Tag one`, `Tag two`, `Tag three`, `Tag four`],
              imageSrc: `assets/media/image-26-1600.webp`,
              imageAlt: `Session two image: an example of this session`,
            },
            {
              title: `Session three`,
              description: `Short description of this session: the area you cover and what the day includes.`,
              tags: [`Tag one`, `Tag two`, `Tag three`],
              imageSrc: `assets/media/image-19-1600.webp`,
              imageAlt: `Session three image: an example of this session`,
            },
            {
              title: `Session four`,
              description: `Short description of this session: the setting, the mood and who usually books it.`,
              tags: [`Tag one`, `Tag two`, `Tag three`],
              imageSrc: `assets/media/image-15-1600.webp`,
              imageAlt: `Session four image: an example of this session`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, f.jsx)(u, {
          title: `Packages.`,
          description: `Short line on what every package includes and how you deliver the photos.`,
          items: [
            {
              title: `Package one`,
              price: `$00`,
              period: `per session`,
              description: `One line on what this package covers.`,
              features: [`Feature included`, `Number of photos`, `How you deliver`, `Usage rights`],
              cta: { text: `Book this package`, href: `#contact` },
            },
            {
              title: `Package two`,
              price: `$00`,
              period: `per half day`,
              description: `One line on what this package covers.`,
              features: [
                `Hours and location included`,
                `Number of photos`,
                `Formats delivered`,
                `Delivery time`,
              ],
              cta: { text: `Plan this package`, href: `#contact` },
              recommended: !0,
              badge: `Most booked`,
            },
            {
              title: `Package three`,
              price: `$00`,
              period: `full day`,
              description: `One line on what this package covers.`,
              features: [
                `Hours of coverage`,
                `Number of photos`,
                `Extra session included`,
                `Album or print option`,
              ],
              cta: { text: `Check your date`, href: `#contact` },
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `testimonial`,
        "data-section": `testimonial`,
        children: (0, f.jsx)(d, {
          label: `Kind words`,
          items: [
            {
              quote: `A client quote about how you made them feel at ease and how the photos captured the day.`,
              name: `Full Name`,
              role: `Session type, City`,
              imageSrc: `assets/media/image-06-1600.webp`,
            },
            {
              quote: `A client quote about the results your photos brought to their business. Be specific.`,
              name: `Full Name`,
              role: `Role, Company Name`,
              imageSrc: `assets/media/image-14-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `A client quote about a relaxed session at home and how natural the photos look.`,
              name: `Full Name`,
              role: `Session type`,
              imageSrc: `assets/media/image-05-1600.webp`,
            },
            {
              quote: `A client quote about the light, the posing and how fast they received the final files.`,
              name: `Full Name`,
              role: `Role, Company Name`,
              imageSrc: `assets/media/image-21-1600.webp`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, f.jsx)(a, {
          title: `Tell us what you want to remember`,
          description: `Short line asking for a date, the kind of session and a few words. Say how fast you reply.`,
          email: `hello@example.com`,
          projectTypes: [`Session one`, `Session two`, `Session three`, `Session four`, `Something else`],
          submitText: `Send enquiry`,
          successTitle: `Thanks, enquiry received`,
          successDescription: `We will write back within two working days with dates and next steps.`,
          imageSrc: `assets/media/image-03-1600.webp`,
          imageAlt: `Contact image: you at work in your studio`,
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        className: `relative z-10 flex min-h-svh flex-col justify-end bg-card pt-[clamp(4rem,9svh,6rem)]`,
        children: (0, f.jsx)(s, {
          brand: `Your Brand`,
          socials: [
            { text: `IG`, href: `#` },
            { text: `PI`, href: `#` },
            { text: `TT`, href: `#` },
          ],
          message: `Have a date in mind,`,
          messageMuted: `or just a feeling you want to keep? Say hello.`,
          email: `hello@example.com`,
          newsletterTitle: `Newsletter title`,
          newsletterDescription: `One line on what subscribers receive and how often.`,
          submitText: `Send`,
          links: [
            { text: `Work`, href: `#gallery` },
            { text: `Sessions`, href: `#services` },
            { text: `Packages`, href: `#pricing` },
            { text: `Book`, href: `#contact` },
          ],
          copyright: `© 20XX Your Brand, City`,
        }),
      }),
    ],
  });
}
export { h as default };
