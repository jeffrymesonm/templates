import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import n from "./NavbarLinksStatic-C4yNCJ9R.js";
import r from "./AboutGridReveal-D_6Ser73.js";
import i from "./ContactCta-Ce3I-orZ.js";
import a from "./FeaturesProjectRows-x6pHWqNi.js";
import o from "./FeaturesStackingCards-F3539Gcd.js";
import s from "./FooterSimple-aPJ3v-mE.js";
import c from "./HeroPhotoRing-BS4dZ3Tb.js";
import l from "./TestimonialSplitCards-BnN_vdI8.js";
/* empty css              */ var u = e(),
  d = `assets/media`;
function f() {
  return (0, u.jsxs)(t, {
    root: !0,
    children: [
      (0, u.jsx)(n, {
        logo: `Your Brand`,
        navItems: [
          { name: `About`, href: `#about` },
          { name: `Our Growers`, href: `#growers` },
          { name: `Shop`, href: `#shop` },
          { name: `Order`, href: `#order` },
        ],
      }),
      (0, u.jsxs)(`div`, {
        className: `relative`,
        children: [
          (0, u.jsx)(`div`, {
            id: `home`,
            "data-section": `hero`,
            className: `sticky top-0`,
            children: (0, u.jsx)(c, {
              title: `Your headline,`,
              titleMuted: `with a soft ending.`,
              description: `Short description of your store: what you sell, where it comes from and how it reaches your customers.`,
              detail: { title: `Next delivery`, description: `Tomorrow, 7–9am` },
              stat: { value: 100, label: `local partners` },
              primaryButton: { text: `Start shopping`, href: `#shop` },
              secondaryButton: { text: `Our growers`, href: `#growers` },
              items: [
                { imageSrc: `${d}/ring-1.webp` },
                { imageSrc: `${d}/ring-2.webp` },
                { imageSrc: `${d}/ring-3.webp` },
                { imageSrc: `${d}/ring-4.webp` },
                { imageSrc: `${d}/ring-5.webp` },
                { imageSrc: `${d}/ring-6.webp` },
                { imageSrc: `${d}/ring-7.webp` },
                { imageSrc: `${d}/ring-8.webp` },
              ],
            }),
          }),
          (0, u.jsxs)(`div`, {
            "data-section": `about`,
            className: `relative z-10 -mt-[100svh] pointer-events-none`,
            children: [
              (0, u.jsx)(`span`, { id: `about`, "aria-hidden": `true`, className: `absolute top-[120svh]` }),
              (0, u.jsx)(r, {
                tag: `About Your Brand`,
                before: `Short statement`,
                after: `that sets you apart`,
                description: `Short description of your story: where your products come from, how you choose them and the people behind them. Keep it simple and honest.`,
                primaryButton: { text: `Our story`, href: `#growers` },
                imageSrc: `${d}/about.webp`,
              }),
            ],
          }),
        ],
      }),
      (0, u.jsx)(`div`, {
        id: `growers`,
        "data-section": `growers`,
        children: (0, u.jsx)(a, {
          tag: `Our Growers`,
          title: `Headline introducing your suppliers`,
          description: `Short line about how you choose your suppliers. Tell visitors they can hover a row to see more.`,
          headers: [`Farm`, `Region`, `Since`, `Grows`],
          items: [
            {
              title: `Supplier One`,
              location: `Region`,
              year: `20XX`,
              services: `Product, product`,
              imageSrc: `${d}/farm-1.webp`,
            },
            {
              title: `Supplier Two`,
              location: `Region`,
              year: `20XX`,
              services: `Product, product`,
              imageSrc: `${d}/farm-2.webp`,
            },
            {
              title: `Supplier Three`,
              location: `Region`,
              year: `20XX`,
              services: `Product, product`,
              imageSrc: `${d}/farm-3.webp`,
            },
            {
              title: `Supplier Four`,
              location: `Region`,
              year: `20XX`,
              services: `Product, product`,
              imageSrc: `${d}/farm-4.webp`,
            },
          ],
          textAnimation: `slide-up`,
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `shop`,
        "data-section": `shop`,
        children: (0, u.jsx)(o, {
          tag: `Shop`,
          title: `Headline that sums up what customers can buy from you`,
          description: `Short line about your range and how often it is restocked.`,
          items: [
            {
              title: `Category One`,
              description: `Short description of this category and what makes it special.`,
              primaryButton: { text: `Shop now`, href: `#order` },
              imageSrc: `${d}/shop-produce.webp`,
            },
            {
              title: `Category Two`,
              description: `Short description of this category and where it comes from.`,
              imageSrc: `${d}/shop-dairy.webp`,
            },
            {
              title: `Category Three`,
              description: `Short description of this category and what it includes.`,
              imageSrc: `${d}/shop-bakery.webp`,
            },
            {
              title: `Category Four`,
              description: `Short description of this offer and the sizes or options available.`,
              primaryButton: { text: `Build my order`, href: `#order` },
              imageSrc: `${d}/shop-box.webp`,
            },
          ],
          textAnimation: `slide-up`,
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `reviews`,
        "data-section": `reviews`,
        children: (0, u.jsx)(l, {
          tag: `Reviews`,
          title: `Headline for your customer reviews`,
          description: `Short line introducing the reviews from your customers.`,
          testimonials: [
            {
              tag: `Category Four`,
              title: `Short title for this review`,
              quote: `A short customer quote about how your store changed their weekly routine and one detail their family loves.`,
              name: `Full Name`,
              date: `Customer since 20XX`,
              avatarImageSrc: `${d}/avatar-1.webp`,
              imageSrc: `${d}/review-box.webp`,
            },
            {
              tag: `Category Two`,
              title: `Short title for this review`,
              quote: `A short customer quote about the quality of the products and why they can tell the difference.`,
              name: `Full Name`,
              date: `Customer since 20XX`,
              avatarImageSrc: `${d}/avatar-2.webp`,
              imageSrc: `${d}/review-breakfast.webp`,
            },
            {
              tag: `Category One`,
              title: `Short title for this review`,
              quote: `A short customer quote about freshness and how it helps them waste less.`,
              name: `Full Name`,
              date: `Customer since 20XX`,
              avatarImageSrc: `${d}/avatar-3.webp`,
              imageSrc: `${d}/review-fruit.webp`,
            },
          ],
          textAnimation: `slide-up`,
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `order`,
        "data-section": `order`,
        children: (0, u.jsx)(i, {
          tag: `First Order`,
          text: `Short closing message with your main offer for new customers and what they get on their first order.`,
          primaryButton: { text: `Start shopping`, href: `#shop` },
          secondaryButton: { text: `How delivery works`, href: `mailto:hello@example.com` },
          textAnimation: `slide-up`,
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `contact`,
        "data-section": `footer`,
        children: (0, u.jsx)(s, {
          brand: `Your Brand`,
          columns: [
            {
              title: `Shop`,
              items: [
                { label: `Category One`, href: `#shop` },
                { label: `Category Four`, href: `#shop` },
                { label: `Order`, href: `#order` },
              ],
            },
            {
              title: `About`,
              items: [
                { label: `Our Story`, href: `#about` },
                { label: `Our Growers`, href: `#growers` },
                { label: `Reviews`, href: `#reviews` },
              ],
            },
            {
              title: `Follow`,
              items: [
                { label: `Instagram`, href: `#` },
                { label: `TikTok`, href: `#` },
                { label: `Newsletter`, href: `#order` },
              ],
            },
          ],
          copyright: `© 20XX Your Brand. Short tagline about your store.`,
          links: [
            { label: `Privacy`, href: `#` },
            { label: `Terms`, href: `#` },
          ],
        }),
      }),
    ],
  });
}
export { f as default };
