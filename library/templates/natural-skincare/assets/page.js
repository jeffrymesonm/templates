import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import { t as n } from "./createLucideIcon-0q7jiDOo.js";
import { t as r } from "./droplets-CLin2vfo.js";
import { t as i } from "./globe-BR2dmluH.js";
import { t as a } from "./leaf-oNj-sieQ.js";
import { n as o, t as s } from "./wind-1cJoJIhv.js";
import { t as c } from "./truck-BMHZUGq9.js";
import l from "./AuroraBackground-DQe2AolR.js";
import u from "./NavbarFloating-CJsiqIZg.js";
import d from "./AboutTextSplit-CMR_ZLgk.js";
import f from "./ContactCenter-BgVbvgjd.js";
import p from "./FaqSplitMedia-LskckYRr.js";
import m from "./FeaturesBento-B_swLnNH.js";
import h from "./FooterSimpleCard-n3LPviEV.js";
import g from "./HeroBillboardBrand-z9rRZjh_.js";
import _ from "./ProductMediaCards-qzfOLnTF.js";
import v from "./TestimonialTrustCard-CCpGnaE1.js";
/* empty css              */ var y = n(`sprout`, [
    [
      `path`,
      {
        d: `M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3`,
        key: `139s4v`,
      },
    ],
    [`path`, { d: `M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4`, key: `1dlkgp` }],
    [`path`, { d: `M5 21h14`, key: `11awu3` }],
  ]),
  b = e();
function x() {
  return (0, b.jsxs)(t, {
    root: !0,
    children: [
      (0, b.jsx)(l, { className: `fixed` }),
      (0, b.jsx)(u, {
        logo: `Your Brand`,
        navItems: [
          { name: `Products`, href: `#products` },
          { name: `About`, href: `#about` },
          { name: `Benefits`, href: `#benefits` },
          { name: `Reviews`, href: `#reviews` },
          { name: `Contact`, href: `#contact` },
        ],
        ctaButton: { text: `Shop Now`, href: `#products` },
      }),
      (0, b.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        children: (0, b.jsx)(g, {
          textAnimation: `fade`,
          brand: `Your Brand`,
          description: `Short description of your brand: what your products are, who they are for and what makes them different.`,
          primaryButton: { text: `Call Us`, href: `tel:+000000000000` },
          secondaryButton: { text: `Email Us`, href: `mailto:hello@example.com` },
          imageSrc: `assets/media/set-01/image-01.webp`,
        }),
      }),
      (0, b.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, b.jsx)(d, {
          textAnimation: `fade`,
          title: `Headline about your brand and its values`,
          descriptions: [
            `First paragraph about your brand: what your products combine, where your ingredients come from and the results they deliver.`,
            `Second paragraph about your products: how they are made, what they do for the customer and the feeling you want them to have.`,
          ],
          primaryButton: { text: `Learn More`, href: `#benefits` },
        }),
      }),
      (0, b.jsx)(`div`, {
        id: `products`,
        "data-section": `products`,
        children: (0, b.jsx)(_, {
          textAnimation: `fade`,
          tag: `Our Collection`,
          title: `Headline for Your Products`,
          description: `Short description of your product range: what it includes, who it is for and how customers can get it.`,
          products: [
            {
              name: `Product Name One`,
              price: `$00`,
              imageSrc: `assets/media/set-01/image-03.webp`,
            },
            { name: `Product Name Two`, price: `$00`, imageSrc: `assets/media/set-01/image-04.webp` },
            {
              name: `Product Name Three`,
              price: `$00`,
              imageSrc: `assets/media/set-01/image-02.webp`,
            },
          ],
        }),
      }),
      (0, b.jsx)(`div`, {
        id: `benefits`,
        "data-section": `benefits`,
        children: (0, b.jsx)(m, {
          textAnimation: `fade`,
          tag: `Why Choose Us`,
          title: `Why Choose Your Brand`,
          description: `Short description of what sets your products apart: how they are made, the results they deliver and how customers receive them.`,
          features: [
            {
              title: `Benefit One`,
              description: `One short line that explains this benefit`,
              bentoComponent: `info-card-marquee`,
              infoCards: [
                { icon: i, label: `Countries`, value: `100+` },
                { icon: c, label: `Delivery`, value: `Fast` },
                { icon: o, label: `Tracking`, value: `Live` },
              ],
            },
            {
              title: `Benefit Two`,
              description: `One short line that explains this benefit`,
              bentoComponent: `animated-bar-chart`,
            },
            {
              title: `Benefit Three`,
              description: `One short line that explains this benefit`,
              bentoComponent: `orbiting-icons`,
              centerIcon: a,
              orbitIcons: [r, y, s],
            },
          ],
        }),
      }),
      (0, b.jsx)(`div`, {
        id: `reviews`,
        "data-section": `reviews`,
        children: (0, b.jsx)(v, {
          textAnimation: `fade`,
          quote: `A short customer quote about how your products changed their routine: what they noticed, why they trust what is inside and how easy it was to order and receive them. Keep it warm and specific so it feels real.`,
          rating: 5,
          author: `Full Name, Customer`,
          avatars: [
            { name: `Full Name`, imageSrc: `assets/media/set-01/image-06.avif` },
            { name: `Full Name`, imageSrc: `assets/media/set-01/image-07.avif` },
            { name: `Full Name`, imageSrc: `assets/media/set-01/image-08.avif` },
            { name: `Full Name`, imageSrc: `assets/media/set-01/image-09.avif` },
          ],
        }),
      }),
      (0, b.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, b.jsx)(p, {
          textAnimation: `fade`,
          tag: `FAQ`,
          title: `Frequently Asked Questions`,
          description: `Everything customers usually ask about your products, shipping and returns.`,
          items: [
            {
              question: `How long does it take to see results?`,
              answer: `Answer with a typical time frame for first results, what customers will notice first and when to expect bigger changes.`,
            },
            {
              question: `Are your products right for me?`,
              answer: `Answer explaining who your products are made for, what you avoid in your formulas and any advice before first use.`,
            },
            {
              question: `Where do you ship?`,
              answer: `Answer about shipping: where you ship, how long standard delivery usually takes and what faster options are available.`,
            },
            {
              question: `What is your return policy?`,
              answer: `Answer about returns: how many days customers have, what they can do if they are not happy and how the return is handled.`,
            },
          ],
          imageSrc: `assets/media/set-01/image-05.webp`,
        }),
      }),
      (0, b.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, b.jsx)(f, {
          textAnimation: `fade`,
          tag: `Newsletter`,
          title: `Headline for Your Newsletter`,
          description: `Short line about what subscribers receive in their inbox and how often.`,
          inputPlaceholder: `Enter your email`,
          buttonText: `Subscribe`,
        }),
      }),
      (0, b.jsx)(h, {
        brand: `Your Brand`,
        columns: [
          {
            title: `Product`,
            items: [
              { label: `Category One`, href: `#products` },
              { label: `Category Two`, href: `#products` },
              { label: `Category Three`, href: `#products` },
              { label: `Bundles`, href: `#products` },
            ],
          },
          {
            title: `Company`,
            items: [
              { label: `About Us`, href: `#about` },
              { label: `Sustainability`, href: `#about` },
              { label: `Blog`, href: `#` },
              { label: `Careers`, href: `#` },
            ],
          },
          {
            title: `Support`,
            items: [
              { label: `Contact Us`, href: `#contact` },
              { label: `FAQ`, href: `#faq` },
              { label: `Shipping`, href: `#` },
              { label: `Returns`, href: `#` },
            ],
          },
          {
            title: `Connect`,
            items: [
              { label: `Instagram`, href: `#` },
              { label: `Facebook`, href: `#` },
              { label: `Pinterest`, href: `#` },
              { label: `TikTok`, href: `#` },
            ],
          },
        ],
        copyright: `© 20XX Your Brand. All rights reserved.`,
        links: [{ label: `Privacy Policy` }, { label: `Terms of Service` }],
      }),
    ],
  });
}
export { x as default };
