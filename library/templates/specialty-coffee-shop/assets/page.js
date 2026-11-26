import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./mail-BIMXjy2H.js";
import { t as n } from "./message-circle-CXa5B9__.js";
import { t as r } from "./phone-bYVfqyhz.js";
import i from "./AuroraBackground-DQe2AolR.js";
import { t as a } from "./SmoothScroll-ChrUt1wD.js";
import o from "./LoaderSwirl-nfsp2T9C.js";
import s from "./NavbarFullscreen-CtxA51JZ.js";
import c from "./ContactBar-DEEZowxF.js";
import l from "./FaqGlassRows-BZTAxupU.js";
import u from "./FeaturesFilterGrid-D3VktJp_.js";
import d from "./FooterBrand-DLRDSF8d.js";
import f from "./GalleryCupTrack-BiyklAK9.js";
import p from "./HeroBillboardBrandFloatingCards-BqbtrADh.js";
import { t as m } from "./HeroImageTunnel-Cud3oC6l.js";
import h from "./PricingBeanClub-BtxNZCQh.js";
/* empty css              */ var g = e(),
  _ = (e, t = 1200) => [`assets/media/set-02/image-04.webp`, `assets/media/set-02/image-01.webp`, `assets/media/set-02/image-06.webp`, `assets/media/set-02/image-07.webp`, `assets/media/set-02/image-02.webp`, `assets/media/set-02/image-05.webp`, `assets/media/set-02/image-03.webp`][e % 7];
function v() {
  return (0, g.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `glass`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, g.jsx)(a, {}),
      (0, g.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, g.jsx)(i, { className: `fixed` }),
      (0, g.jsx)(o, {}),
      (0, g.jsx)(s, {
        logo: `Your Brand`,
        navItems: [
          { name: `Menu`, href: `#menu` },
          { name: `Visit`, href: `#contact` },
        ],
        ctaButton: { text: `Order Ahead`, href: `#menu` },
      }),
      (0, g.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        children: (0, g.jsx)(p, {
          textAnimation: `fade-blur`,
          brand: `Your Brand`,
          description: `Short description of your coffee shop: what you serve, what makes it worth the visit and the neighborhood where people can find you.`,
          primaryButton: { text: `Order Ahead`, href: `#menu` },
          secondaryButton: { text: `See the Menu`, href: `#menu` },
          videoSrc: `assets/media/set-01/video-01.mp4`,
          floatingCards: [
            { imageSrc: `assets/media/set-01/image-01.webp`, name: `Product One` },
            {
              imageSrc: `assets/media/set-02/image-06.webp`,
              name: `Product Two`,
            },
          ],
        }),
      }),
      (0, g.jsx)(`div`, {
        id: `menu`,
        "data-section": `menu`,
        children: (0, g.jsx)(u, {
          textAnimation: `fade-blur`,
          tag: `Our Menu`,
          title: `Menu Section Title`,
          description: `Short description of your menu: the drinks you serve, where your coffee comes from and what you bake.`,
          categories: [`Espresso`, `Iced`, `Bakery`],
          items: [
            {
              name: `Product One`,
              category: `Espresso`,
              imageSrc: `assets/media/set-02/image-04.webp`,
            },
            {
              name: `Product Two`,
              category: `Espresso`,
              imageSrc: `assets/media/set-02/image-06.webp`,
            },
            {
              name: `Product Three`,
              category: `Iced`,
              imageSrc: `assets/media/set-02/image-05.webp`,
            },
            {
              name: `Product Four`,
              category: `Espresso`,
              imageSrc: `assets/media/set-02/image-01.webp`,
            },
            {
              name: `Product Five`,
              category: `Iced`,
              imageSrc: `assets/media/set-01/image-01.webp`,
            },
            {
              name: `Product Six`,
              category: `Espresso`,
              imageSrc: `assets/media/set-02/image-07.webp`,
            },
            {
              name: `Product Seven`,
              category: `Iced`,
              imageSrc: `assets/media/set-02/image-07.webp`,
            },
            {
              name: `Product Eight`,
              category: `Espresso`,
              imageSrc: `assets/media/set-02/image-04.webp`,
            },
            {
              name: `Product Nine`,
              category: `Iced`,
              imageSrc: `assets/media/set-02/image-05.webp`,
            },
            {
              name: `Product Ten`,
              category: `Espresso`,
              imageSrc: `assets/media/set-02/image-02.webp`,
            },
            {
              name: `Product Eleven`,
              category: `Bakery`,
              imageSrc: `assets/media/set-02/image-03.webp`,
            },
            {
              name: `Product Twelve`,
              category: `Bakery`,
              imageSrc: `assets/media/set-02/image-03.webp`,
            },
          ],
        }),
      }),
      (0, g.jsx)(`div`, {
        id: `bean-to-cup`,
        "data-section": `story`,
        children: (0, g.jsx)(m, {
          ariaLabel: `Our story in images`,
          className: `h-svh mb-0 bg-transparent`,
          coverNext: !1,
          fade: !1,
          stageClassName: `bg-transparent`,
          imageClassName: `rounded-[var(--radius)]`,
          title: `Short statement about how you make your coffee.`,
          description: `One or two sentences about where your coffee comes from and how you roast or prepare it before it reaches the cup.`,
          primaryCta: { text: `Our story`, href: `#gallery` },
          items: [
            2711959, 374885, 2299028, 1170659, 2396220, 2638019, 302899, 312418, 3020919, 373639, 3879495,
          ].map((e) => ({ imageSrc: _(e, 500), imageAlt: `Photo: your coffee, from origin to cup` })),
        }),
      }),
      (0, g.jsx)(`div`, {
        id: `gallery`,
        "data-section": `gallery`,
        "data-scene": !0,
        children: (0, g.jsx)(f, {
          tag: `Inside the shop`,
          title: `A look around your coffee shop`,
          items: [
            {
              title: `Photo title`,
              imageSrc: `assets/media/set-02/image-01.webp`,
              imageAlt: `Photo: a cup on a table in your shop`,
            },
            {
              title: `Photo title`,
              imageSrc: `assets/media/set-02/image-06.webp`,
              imageAlt: `Photo: your barista at work`,
            },
            {
              title: `Photo title`,
              imageSrc: `assets/media/set-02/image-02.webp`,
              imageAlt: `Photo: brewing equipment on the counter`,
            },
            {
              title: `Photo title`,
              imageSrc: `assets/media/set-02/image-05.webp`,
              imageAlt: `Photo: a drink and a pastry by the window`,
            },
            { title: `Photo title`, imageSrc: _(3892469, 1e3), imageAlt: `Photo: pastries and coffee on a table` },
            {
              title: `Photo title`,
              imageSrc: `assets/media/set-01/image-01.webp`,
              imageAlt: `Photo: latte art being poured`,
            },
            {
              title: `Photo title`,
              imageSrc: `assets/media/set-02/image-07.webp`,
              imageAlt: `Photo: freshly roasted coffee beans`,
            },
            {
              title: `Photo title`,
              imageSrc: `assets/media/set-02/image-04.webp`,
              imageAlt: `Photo: your team serving a customer`,
            },
          ],
        }),
      }),
      (0, g.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, g.jsx)(h, {
          tag: `Subscription`,
          title: `Subscription section title`,
          description: `One sentence explaining how your coffee subscription works and how flexible it is.`,
          items: [
            {
              title: `Starter`,
              price: `$00`,
              period: `/ month`,
              description: `What this plan includes, in one line.`,
              features: [`First plan feature`, `Second plan feature`, `Third plan feature`],
              imageSrc: `assets/media/set-02/image-03.webp`,
              imageAlt: `Photo: the product included in this plan`,
              button: { text: `Start Starter`, href: `#contact` },
            },
            {
              title: `Daily`,
              price: `$00`,
              period: `/ month`,
              description: `What this plan includes, in one line.`,
              features: [`First plan feature`, `Second plan feature`, `Third plan feature`],
              imageSrc: `assets/media/set-02/image-01.webp`,
              imageAlt: `Photo: the product included in this plan`,
              button: { text: `Start Daily`, href: `#contact` },
            },
            {
              title: `Explorer`,
              price: `$00`,
              period: `/ month`,
              description: `What this plan includes, in one line.`,
              features: [`First plan feature`, `Second plan feature`, `Third plan feature`],
              imageSrc: `assets/media/set-02/image-06.webp`,
              imageAlt: `Photo: the product included in this plan`,
              button: { text: `Start Explorer`, href: `#contact` },
            },
          ],
        }),
      }),
      (0, g.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, g.jsx)(l, {
          tag: `FAQ`,
          title: `Frequently asked questions`,
          description: `Short line inviting visitors to ask anything else.`,
          imageSrc: _(32166435, 800),
          imageAlt: `Photo: your team behind the counter`,
          imageLabel: `On the bar`,
          items: [
            {
              title: `Question about your menu options?`,
              description: `Short answer listing the options you offer.`,
            },
            {
              title: `Question about private events or bookings?`,
              description: `Answer explaining how bookings work, how many guests fit and how to reach you to plan it.`,
            },
            {
              title: `Question about products to take home?`,
              description: `Answer explaining which products customers can buy and how they are prepared.`,
            },
            {
              title: `Question about how the subscription works?`,
              description: `Answer explaining how to choose a plan, when orders ship and how to manage them.`,
            },
            {
              title: `Question about your food or bakery?`,
              description: `Answer explaining where your food comes from and what makes it special for your customers.`,
            },
            {
              title: `Question about working or studying here?`,
              description: `Answer explaining your wifi, seating and any house rules for guests who stay to work.`,
            },
          ],
        }),
      }),
      (0, g.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, g.jsx)(c, {
          textAnimation: `fade-blur`,
          tag: `Say Hello`,
          title: `Short line inviting people to contact you`,
          options: [
            { icon: n, label: `Whatsapp`, href: `https://wa.me/000000000000` },
            { icon: t, label: `Email`, href: `mailto:hello@example.com` },
            { icon: r, label: `Call`, href: `tel:+000000000000` },
          ],
        }),
      }),
      (0, g.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        children: (0, g.jsx)(d, {
          brand: `Your Brand`,
          columns: [
            {
              items: [
                { label: `Menu`, href: `#menu` },
                { label: `Espresso`, href: `#menu` },
                { label: `Bakery`, href: `#menu` },
              ],
            },
            {
              items: [
                { label: `Visit`, href: `#contact` },
                { label: `Subscription`, href: `#pricing` },
                { label: `Our Story`, href: `#bean-to-cup` },
              ],
            },
            {
              items: [
                { label: `Contact`, href: `#contact` },
                { label: `Wholesale`, href: `#contact` },
                { label: `Gift Cards`, href: `#pricing` },
              ],
            },
          ],
        }),
      }),
    ],
  });
}
export { v as default };
