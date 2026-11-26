import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./LoaderRingCounter-Cd3Gf8yt.js";
import r from "./NavbarClearLinks-C572Nuf4.js";
import i from "./AboutStackedPanels-CPtXMsv4.js";
import a from "./ContactPhotoForm-BSOrwrwJ.js";
import o from "./FaqPairedCards-D_5JFAKP.js";
import s from "./ServicesImageTrio-6tK2ydkC.js";
import c from "./FooterBrand-DLRDSF8d.js";
import l from "./GalleryOffsetParallax-Dc7e3e6S.js";
import u from "./HeroSkylineStage-5yuHoe9U.js";
import d from "./PricingResidenceCards-CGlIBo1r.js";
/* empty css              */ var f = e(),
  p = (e, t = 1200) => `https://images.pexels.com/photos/${e}/pexels-photo-${e}.jpeg?auto=compress&w=${t}`,
  m = 2.1;
function h() {
  return (0, f.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `filled`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, f.jsx)(t, {}),
      (0, f.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, f.jsx)(n, { brand: ``, maxWait: 1900, exit: `fade` }),
      (0, f.jsx)(r, {
        steady: !0,
        brand: `Your Brand`,
        navItems: [
          { name: `Homes`, href: `#services` },
          { name: `The tower`, href: `#about` },
          { name: `Interiors`, href: `#gallery` },
          { name: `Prices`, href: `#pricing` },
        ],
        primaryButton: { text: `Register`, href: `#contact` },
        introDelay: m,
      }),
      (0, f.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        "data-scene": !0,
        children: (0, f.jsx)(u, {
          tag: `Neighbourhood, City`,
          title: `Headline that states the promise of your project`,
          description: `Short description of the development: who builds it, what makes the location special and when it will be ready.`,
          primaryButton: { text: `Register your interest`, href: `#contact` },
          secondaryButton: { text: `Explore the homes`, href: `#services` },
          feature: {
            tag: `Release or status`,
            title: `Featured home name`,
            description: `From $00 · 0 bed · Key feature`,
            imageSrc: `assets/media/set-02/image-02.webp`,
            imageAlt: `Featured home image: main living space`,
            href: `#pricing`,
          },
          introDelay: m,
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        children: (0, f.jsx)(s, {
          label: `The homes`,
          title: `Three types of home, one location.`,
          muted: `one location.`,
          items: [
            {
              title: `Home type one`,
              description: `Short description of this home type: size, layout, floors and the feature buyers like most.`,
              imageSrc: `assets/media/set-02/image-01.webp`,
              imageAlt: `Image of home type one: living room`,
            },
            {
              title: `Home type two`,
              description: `Short description of this home type: what sets it apart and the views it offers.`,
              imageSrc: `assets/media/set-02/image-03.webp`,
              imageAlt: `Image of home type two: dining room`,
            },
            {
              title: `Shared amenities`,
              description: `Short description of the shared amenities: what residents get and where it is in the building.`,
              imageSrc: `assets/media/set-04/image-01.webp`,
              imageAlt: `Image of the shared amenities`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        "data-scene": !0,
        children: (0, f.jsx)(i, {
          label: `Why choose us`,
          title: `Your first value. Your second.`,
          muted: `Your second.`,
          items: [
            {
              title: `First reason to choose the project`,
              description: `Explain the design choice that makes this project special and what it means for the people who will live there.`,
              imageSrc: `assets/media/set-04/image-02.webp`,
              imageAlt: `Image: the building exterior`,
              button: { text: `See the homes`, href: `#gallery` },
            },
            {
              title: `Second reason, about comfort`,
              description: `Describe the materials and systems that make the homes comfortable and efficient all year round.`,
              imageSrc: `assets/media/set-04/image-03.webp`,
              imageAlt: `Image: a comfortable living space`,
              button: { text: `View floor plans`, href: `#pricing` },
            },
            {
              title: `Third reason, about your track record`,
              description: `Describe your experience as a developer and the projects you have already delivered.`,
              imageSrc: `assets/media/set-04/image-04.webp`,
              imageAlt: `Image: one of your completed projects`,
              button: { text: `Talk to us`, href: `#contact` },
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `gallery`,
        "data-section": `gallery`,
        children: (0, f.jsx)(l, {
          label: `Inside the homes`,
          title: `Rooms that show the project.`,
          muted: `show the project.`,
          items: [
            {
              title: `Exterior at dusk`,
              description: `Short image caption`,
              imageSrc: `assets/media/set-04/image-05.webp`,
            },
            { title: `Open kitchen`, description: `Short image caption`, imageSrc: `assets/media/set-05/image-01.webp` },
            {
              title: `Oak joinery`,
              description: `Short image caption`,
              imageSrc: `assets/media/set-05/image-02.webp`,
            },
            { title: `Stair hall`, description: `Short image caption`, imageSrc: `assets/media/set-02/image-02.webp` },
            {
              title: `Living room`,
              description: `Short image caption`,
              imageSrc: `assets/media/set-02/image-01.webp`,
            },
            {
              title: `Great room`,
              description: `Short image caption`,
              imageSrc: `assets/media/set-02/image-03.webp`,
            },
            {
              title: `Garden level`,
              description: `Short image caption`,
              imageSrc: `assets/media/set-04/image-01.webp`,
            },
            {
              title: `Primary bedroom`,
              description: `Short image caption`,
              imageSrc: `assets/media/set-02/image-04.webp`,
            },
            {
              title: `Dining room`,
              description: `Short image caption`,
              imageSrc: `assets/media/set-04/image-02.webp`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, f.jsx)(d, {
          label: `Prices`,
          title: `Three types. One project.`,
          mutedTitle: `One project.`,
          items: [
            {
              title: `Home type one`,
              prefix: `from`,
              price: `$00`,
              description: `Short description of this home type and who it suits best.`,
              features: [`000 to 000 sq ft`, `Glass balcony`, `One parking stall`, `Resident club access`],
              button: { text: `Get floor plans`, href: `#contact` },
            },
            {
              title: `Home type two`,
              prefix: `from`,
              price: `$00`,
              description: `Short description of this home type and what makes it different.`,
              features: [
                `000 to 000 sq ft`,
                `Wraparound balcony`,
                `Two parking stalls`,
                `Private storage room`,
              ],
              button: { text: `Get floor plans`, href: `#contact` },
            },
            {
              title: `Penthouses`,
              price: `On request`,
              description: `Short description of the top home type and how it can be customised.`,
              features: [
                `Up to 000 sq ft`,
                `Private roof terrace`,
                `Direct elevator entry`,
                `Custom interior design`,
              ],
              button: { text: `Book a viewing`, href: `#contact` },
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, f.jsx)(o, {
          label: `FAQ`,
          title: `Questions buyers ask most.`,
          mutedTitle: `ask most.`,
          items: [
            {
              title: `When is completion?`,
              description: `Answer with the construction timeline: when work started, when the project is due to be finished and how handovers will work.`,
            },
            {
              title: `What deposit is required?`,
              description: `Answer with your deposit structure: the total amount, when each payment is due and what is paid at completion. Keep it short and clear.`,
            },
            {
              title: `Can I choose the finishes?`,
              description: `Answer describing the finish options buyers can choose from, and which home types can be customised further.`,
            },
            {
              title: `Is parking included?`,
              description: `Answer describing the parking included with each home type and any extras such as car chargers.`,
            },
            {
              title: `Can I assign my contract?`,
              description: `Answer explaining whether buyers can transfer their contract, under which conditions and who helps them do it.`,
            },
            {
              title: `Where is the sales centre?`,
              description: `At 123 Example Street, City, open daily. Explain the opening hours and what visitors can see when they book a visit.`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, f.jsx)(a, {
          title: `Register your interest at Your Brand.`,
          mutedTitle: `at Your Brand.`,
          nameLabel: `Full name`,
          namePlaceholder: `Your name`,
          emailLabel: `Email`,
          emailPlaceholder: `you@example.com`,
          phoneLabel: `Phone`,
          phonePlaceholder: `Optional`,
          interestLabel: `Home of interest`,
          options: [`Home type one`, `Home type two`, `Penthouses`, `Not sure yet`],
          messageLabel: `Message`,
          messagePlaceholder: `Tell us what you are looking for`,
          buttonText: `Register now`,
          footerText: `Prefer to visit? Our sales centre is open daily at 123 Example Street, City.`,
          linkText: `Email sales`,
          linkHref: `mailto:hello@example.com`,
          avatarSrc: `assets/media/set-03/image-01.webp`,
          imageSrc: `assets/media/set-03/image-02.webp`,
          imageAlt: `Contact image: the project or your sales centre`,
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        children: (0, f.jsx)(c, {
          brand: `Your Brand`,
          columns: [
            {
              items: [
                { label: `Home type one`, href: `#services` },
                { label: `Home type two`, href: `#services` },
                { label: `Penthouses`, href: `#pricing` },
                { label: `Floor plans`, href: `#pricing` },
              ],
            },
            {
              items: [
                { label: `The tower`, href: `#about` },
                { label: `Shared amenities`, href: `#services` },
                { label: `Interiors`, href: `#gallery` },
                { label: `Company Name`, href: `#about` },
              ],
            },
            {
              items: [
                { label: `Sales centre`, href: `#faq` },
                { label: `Register`, href: `#contact` },
                { label: `Brochure`, href: `#` },
                { label: `+00 000 000 0000`, href: `tel:+000000000000` },
              ],
            },
            {
              items: [
                { label: `Privacy policy`, href: `#` },
                { label: `Terms of use`, href: `#` },
                { label: `Disclosure statement`, href: `#` },
              ],
            },
          ],
        }),
      }),
    ],
  });
}
export { h as default };
