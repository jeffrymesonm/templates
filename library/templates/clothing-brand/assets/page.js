import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import { t as n } from "./SlideOverSections-CLQS3qwM.js";
import r from "./NavbarStore-Co96H1BG.js";
import i from "./AboutFullVideo-BFo2nywd.js";
import a from "./ContactNewsletterBanner-D7-iTTNl.js";
import o from "./FooterStoreBrand-BdEMteMK.js";
import s from "./HeroHangingCards-Df_J0DE5.js";
import c from "./ProductCatalogCards-Cv4tXVft.js";
import l from "./ProductCollectionGrid-BtiasoC0.js";
/* empty css              */ var u = e(),
  d = [
    { name: `Brown`, color: `#6e5045`, imageSrc: `assets/media/image-09-1600.webp` },
    { name: `Ash`, color: `#6d6967`, imageSrc: `assets/media/image-06-1600.webp` },
    { name: `Olive`, color: `#696754`, imageSrc: `assets/media/image-11-1600.webp` },
    { name: `Bone`, color: `#d1c5b3`, imageSrc: `assets/media/image-08-1600.webp` },
    { name: `Washed Black`, color: `#42413f`, imageSrc: `assets/media/image-07-1600.webp` },
    { name: `Faded Navy`, color: `#3f4a5e`, imageSrc: `assets/media/image-10-1600.webp` },
    { name: `Rust`, color: `#884e39`, imageSrc: `assets/media/image-12-1600.webp` },
    { name: `Sand`, color: `#aa8e74`, imageSrc: `assets/media/image-13-1600.webp` },
  ],
  f = (e) => [...d.slice(e), ...d.slice(0, e)];
function p() {
  return (0, u.jsxs)(t, {
    root: !0,
    children: [
      (0, u.jsx)(r, {
        logo: `Your Brand®`,
        navItems: [
          { name: `Shop`, href: `#shop` },
          { name: `New In`, href: `#shop` },
          { name: `Collections`, href: `#collections` },
          { name: `Universe`, href: `#campaign` },
        ],
        ctaButton: { text: `Search`, href: `#shop` },
      }),
      (0, u.jsx)(n, {
        shrink: 0,
        overClassName: `bg-transparent`,
        under: (0, u.jsx)(`div`, {
          id: `hero`,
          "data-section": `hero`,
          children: (0, u.jsx)(s, {
            title: `Headline that states your main promise.`,
            description: `Short description of your products and what makes them different. Mention how they are made and how often new items arrive.`,
            primaryButton: { text: `Shop New In`, href: `#shop` },
            secondaryButton: { text: `Our Universe`, href: `#campaign` },
            items: [
              { name: `Product Name`, price: `$00`, badge: `New In`, imageSrc: d[0].imageSrc },
              { name: `Product Name`, price: `$00`, badge: `New In`, imageSrc: d[2].imageSrc },
              { name: `Product Name`, price: `$00`, imageSrc: d[3].imageSrc },
              { name: `Product Name`, price: `$00`, imageSrc: d[5].imageSrc },
              { name: `Product Name`, price: `$00`, badge: `Bestseller`, imageSrc: d[6].imageSrc },
              { name: `Product Name`, price: `$00`, imageSrc: d[1].imageSrc },
              { name: `Product Name`, price: `$00`, imageSrc: d[7].imageSrc },
              { name: `Product Name`, price: `$00`, imageSrc: d[4].imageSrc },
            ],
          }),
        }),
        over: (0, u.jsx)(`div`, {
          id: `campaign`,
          "data-section": `campaign`,
          children: (0, u.jsx)(i, { imageSrc: `assets/media/image-01-1600.webp` }),
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `shop`,
        "data-section": `shop`,
        children: (0, u.jsx)(c, {
          products: [
            { name: `Product Name`, price: `$00`, badge: `New In`, variants: f(0) },
            { name: `Product Name`, price: `$00`, badge: `New In`, variants: f(1) },
            { name: `Product Name`, price: `$00`, badge: `New In`, variants: f(2) },
            { name: `Product Name`, price: `$00`, variants: f(3) },
            { name: `Product Name`, price: `$00`, variants: f(4) },
            { name: `Product Name`, price: `$00`, badge: `Bestseller`, variants: f(5) },
            { name: `Product Name`, price: `$00`, variants: f(6) },
            { name: `Product Name`, price: `$00`, badge: `Last units`, variants: f(7) },
          ],
          textAnimation: `slide-up`,
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `collections`,
        "data-section": `collections`,
        children: (0, u.jsx)(l, {
          collections: [
            { name: `Collection One`, href: `#shop`, imageSrc: `assets/media/image-03-1600.webp` },
            { name: `Collection Two`, href: `#shop`, imageSrc: `assets/media/image-04-1600.webp` },
            { name: `Collection Three`, href: `#shop`, imageSrc: `assets/media/image-05-1600.webp` },
            { name: `Collection Four`, href: `#shop`, imageSrc: `assets/media/image-02-1600.webp` },
          ],
          textAnimation: `slide-up`,
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `newsletter`,
        "data-section": `newsletter`,
        children: (0, u.jsx)(a, {
          tag: `Newsletter`,
          title: `Stay in the loop`,
          description: `Short line with the benefits of subscribing: early access, news and offers.`,
          inputPlaceholder: `you@email.com`,
          buttonText: `Subscribe`,
          textAnimation: `slide-up`,
          imageSrc: `assets/media/image-15-1600.webp`,
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `contact`,
        "data-section": `footer`,
        children: (0, u.jsx)(o, {
          brand: `Your Brand®`,
          title: `Your Brand® Studio`,
          description: `Short description of your brand and products. Say where people can buy them and how often new items arrive.`,
          columns: [
            {
              title: `Brand`,
              items: [
                { label: `About Us`, href: `#campaign` },
                { label: `Collections`, href: `#collections` },
                { label: `Stores`, href: `#newsletter` },
                { label: `Careers`, href: `#` },
              ],
            },
            {
              title: `Support`,
              items: [
                { label: `Returns`, href: `#` },
                { label: `Order Tracking`, href: `#` },
                { label: `FAQ`, href: `#` },
                { label: `Contact`, href: `#newsletter` },
              ],
            },
            {
              title: `Legal`,
              items: [
                { label: `Legal Notice`, href: `#` },
                { label: `Privacy Policy`, href: `#` },
                { label: `Terms and Conditions`, href: `#` },
              ],
            },
          ],
          copyright: `© 20XX Your Brand®. All rights reserved.`,
        }),
      }),
    ],
  });
}
export { p as default };
