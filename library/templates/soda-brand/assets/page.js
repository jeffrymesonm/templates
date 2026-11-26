import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import t from "./CanFlavourStage-CUjLproA.js";
import n from "./FloatingCanPill-C4_KSp7Z.js";
import { t as r } from "./SmoothScroll-ChrUt1wD.js";
import i from "./LoaderScribbleUnwind-87T90_eT.js";
import a from "./NavbarCartWordmark-CDeJyfzT.js";
import o from "./ContactEmailLine-IAZ5SNO9.js";
import s from "./FaqLineAccordion-cEaC3RdE.js";
import c from "./FeaturesPourStage-Bp65w8Sr.js";
import l from "./FooterFizzWordmark-Cbm5RUnI.js";
import u from "./HeroCanStage-g66grY0T.js";
import d from "./ProductCardCarousel-D16bzvue.js";
import f from "./ProductFlavourSlider-DmEbPd_9.js";
import p from "./TestimonialStickyPhotos-Qda7yctV.js";
/* empty css              */ var m = e(),
  h = `assets/media`;
function g() {
  return (0, m.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `filled`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, m.jsx)(r, {}),
      (0, m.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, m.jsx)(t, {
        flavours: [
          {
            name: `Flavour One`,
            labelSrc: `${h}/textures/product-berry.webp`,
            fruitSrcs: [
              `${h}/models/fruit/blueberry.glb`,
              `${h}/models/fruit/raspberry.glb`,
              `${h}/models/fruit/blackberry.glb`,
            ],
          },
          {
            name: `Flavour Two`,
            labelSrc: `${h}/textures/product-guava.webp`,
            fruitSrcs: [
              `${h}/models/fruit/kiwi.glb`,
              `${h}/models/fruit/kiwi-half.glb`,
              `${h}/models/fruit/guava.glb`,
            ],
          },
          {
            name: `Flavour Three`,
            labelSrc: `${h}/textures/product-lemon.webp`,
            fruitSrcs: [
              `${h}/models/fruit/lemon.glb`,
              `${h}/models/fruit/lime.glb`,
              `${h}/models/fruit/lime-half.glb`,
            ],
          },
        ],
        canSrc: `${h}/models/AnimCan.glb`,
        paperSrc: `${h}/models/Paper.glb`,
        envSrc: `${h}/env/hdr.ktx2`,
        pourCanSrc: `${h}/models/CanWater.glb`,
        pourLabelSrc: `${h}/textures/product-lemon.webp`,
        pourVideoSrc: `${h}/video/SodaLoop.webm`,
      }),
      (0, m.jsx)(i, { logoSrc: `${h}/img/product-logo-white.png`, logoAlt: `Your Brand` }),
      (0, m.jsx)(`div`, {
        "data-section": `navbar`,
        className: `contents`,
        children: (0, m.jsx)(a, {
          brand: `Your Brand`,
          logoSrc: `${h}/img/product-logo-white.png`,
          homeHref: `#hero`,
          shopItem: { name: `Shop`, href: `#products` },
          products: [
            {
              name: `Flavour One`,
              description: `Short description of this flavour: what it tastes like, the key ingredients and why people will love it.`,
              price: `$00`,
              imageSrc: `${h}/img/product-berry-card.webp`,
              imageAlt: `Product image: flavour one`,
              href: `#products`,
            },
            {
              name: `Flavour Two`,
              description: `Short description of this flavour: its taste, its mood and the moment it is made for.`,
              price: `$00`,
              imageSrc: `${h}/img/product-guava-card.webp`,
              imageAlt: `Product image: flavour two`,
              href: `#products`,
            },
            {
              name: `Flavour Three`,
              description: `Short description of this flavour: its main notes and what makes it different from the rest.`,
              price: `$00`,
              imageSrc: `${h}/img/product-lemon-card.webp`,
              imageAlt: `Product image: flavour three`,
              href: `#products`,
            },
            {
              name: `Variety Pack`,
              description: `All flavours in one box: say how many units of each it includes and who it is for.`,
              price: `$00`,
              imageSrc: `${h}/img/product-variety-card.webp`,
              imageAlt: `Product image: mixed pack`,
              href: `#products`,
              tag: `Best Seller`,
            },
          ],
          shopButton: { text: `All products`, href: `#products` },
          navItems: [{ name: `For Teams`, href: `#contact` }],
          accountItem: { name: `Account`, href: `#` },
          cartText: `Cart`,
          cartCount: 0,
          cartHref: `#products`,
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        "data-scene": !0,
        className: `contents`,
        children: (0, m.jsx)(u, {
          title: `Main claim.`,
          titleSecond: `Your Brand.`,
          card: {
            name: `Variety Pack`,
            pack: `12 pack`,
            price: `$00`,
            imageSrc: `${h}/img/product-variety-card.webp`,
            imageAlt: `Product image: mixed pack`,
            href: `#products`,
          },
          cardButtonText: `Buy Now`,
          offer: {
            text: `Join Your Brand and get 10% off your first order`,
            closeText: `Close`,
            placeholder: `YOUR EMAIL ADDRESS`,
            buttonText: `Submit`,
          },
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `flavours`,
        "data-section": `product`,
        "data-scene": !0,
        children: (0, m.jsx)(f, {
          items: [
            {
              title: `Flavour One`,
              pack: `12 pack`,
              price: `$00`,
              imageSrc: `${h}/img/product-berry-card.webp`,
              imageAlt: `Product image: flavour one`,
              href: `#products`,
            },
            {
              title: `Flavour Two`,
              pack: `12 pack`,
              price: `$00`,
              imageSrc: `${h}/img/product-guava-card.webp`,
              imageAlt: `Product image: flavour two`,
              href: `#products`,
            },
            {
              title: `Flavour Three`,
              pack: `12 pack`,
              price: `$00`,
              imageSrc: `${h}/img/product-lemon-card.webp`,
              imageAlt: `Product image: flavour three`,
              href: `#products`,
            },
          ],
          label: `Product Category`,
          logoSrc: `${h}/img/product-logo-white.png`,
          logoAlt: `Your Brand`,
          taglineLines: [`Short tagline`, `Second line`],
          details: [
            { title: `Key benefit`, description: `Short supporting detail` },
            { title: `Second benefit`, description: `One more supporting detail` },
          ],
          buttonText: `Buy Now`,
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `products`,
        "data-section": `products`,
        children: (0, m.jsx)(d, {
          label: `3 Products`,
          title: `Headline about your range of products and how people get them`,
          items: [
            {
              title: `Flavour One`,
              size: `300ml`,
              price: `$00`,
              imageSrc: `${h}/img/product-berry-studio.webp`,
              imageAlt: `Product image: flavour one, studio shot`,
              hoverImageSrc: `${h}/img/product-berry-ice.webp`,
              hoverImageAlt: `Product image: flavour one, alternate shot`,
              href: `#products`,
            },
            {
              title: `Flavour Two`,
              size: `300ml`,
              price: `$00`,
              imageSrc: `${h}/img/product-guava-studio.webp`,
              imageAlt: `Product image: flavour two, studio shot`,
              hoverImageSrc: `${h}/img/product-guava-ice.webp`,
              hoverImageAlt: `Product image: flavour two, alternate shot`,
              href: `#products`,
            },
            {
              title: `Flavour Three`,
              size: `300ml`,
              price: `$00`,
              imageSrc: `${h}/img/product-lemon-studio.webp`,
              imageAlt: `Product image: flavour three, studio shot`,
              hoverImageSrc: `${h}/img/product-lemon-ice.webp`,
              hoverImageAlt: `Product image: flavour three, alternate shot`,
              href: `#products`,
            },
            {
              title: `Variety Pack`,
              size: `300ml`,
              price: `$00`,
              imageSrc: `${h}/img/product-variety-studio.webp`,
              imageAlt: `Product image: mixed pack`,
              hoverImageSrc: `${h}/img/product-variety-ice.webp`,
              hoverImageAlt: `Product image: mixed pack, alternate shot`,
              tag: `Best Seller`,
              href: `#products`,
            },
          ],
          previousText: `Prev`,
          nextText: `Next`,
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `features`,
        "data-section": `features`,
        "data-scene": !0,
        children: (0, m.jsx)(c, {
          title: `Your Key Point.`,
          titleSecond: `Said Twice Better.`,
          primaryButton: { text: `Get in touch`, href: `#contact` },
          items: [
            {
              title: `First feature`,
              description: `Short sentence explaining this feature of the product.`,
            },
            {
              title: `Second feature`,
              description: `Short sentence explaining why this feature matters to people.`,
            },
            {
              title: `Third feature`,
              description: `Short sentence about an ingredient, material or detail that sets you apart.`,
            },
            {
              title: `Fourth feature`,
              description: `Short sentence with one more reason to choose you. Keep it simple.`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `testimonial`,
        "data-section": `testimonial`,
        children: (0, m.jsx)(p, {
          stickyTitle: `Short Brand Line`,
          title: `What people say.`,
          items: [
            {
              name: `Full Name`,
              quote: `Short customer quote about what they love most and how it makes them feel.`,
              role: `Role, City`,
              imageSrc: `${h}/img/product-testimonial-h1.webp`,
              imageAlt: `Customer photo: person holding the product`,
              backgroundSrc: `${h}/img/product-testimonial-bg3.webp`,
            },
            {
              name: `Full Name`,
              quote: `Short customer quote about when and why they choose this product.`,
              role: `Role, City`,
              imageSrc: `${h}/img/product-testimonial-h2.webp`,
              imageAlt: `Customer photo: person holding the product`,
              backgroundSrc: `${h}/img/product-testimonial-bg2.webp`,
            },
            {
              name: `Full Name`,
              quote: `Short customer quote about sharing the product with others. It never lasts for long.`,
              role: `Role, City`,
              imageSrc: `${h}/img/product-testimonial-h3.webp`,
              imageAlt: `Customer photo: person holding the product`,
              backgroundSrc: `${h}/img/product-testimonial-bg1.webp`,
            },
          ],
          products: [
            {
              name: `Flavour One`,
              pack: `6 pack`,
              price: `$00`,
              imageSrc: `${h}/img/product-berry-card.webp`,
              imageAlt: `Product image: flavour one`,
              href: `#products`,
            },
            {
              name: `Flavour Two`,
              pack: `6 pack`,
              price: `$00`,
              imageSrc: `${h}/img/product-guava-card.webp`,
              imageAlt: `Product image: flavour two`,
              href: `#products`,
            },
            {
              name: `Flavour Three`,
              pack: `6 pack`,
              price: `$00`,
              imageSrc: `${h}/img/product-lemon-card.webp`,
              imageAlt: `Product image: flavour three`,
              href: `#products`,
            },
          ],
          productButtonText: `Buy Now`,
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, m.jsx)(s, {
          title: `Some answers`,
          primaryButton: { text: `Get in touch`, href: `#contact` },
          items: [
            {
              title: `How do I contact customer service?`,
              description: `Answer explaining how to reach your team: the contact form on your website or an email to hello@example.com. Add how customers can manage their orders or subscriptions on their own from their account.`,
            },
            {
              title: `Can I purchase a large quantity for a conference or other event?`,
              description: `Yes. Fill out the contact form on our website or email hello@example.com to connect with our team.`,
            },
            {
              title: `How does the subscription work?`,
              description: `Answer explaining how the subscription works: the discount it gives, the delivery options, and how to swap products, skip a delivery or cancel at any time. Say where customers manage it from their account, and why it is the easiest way to always have the product at home.`,
            },
            {
              title: `Why do you use this ingredient?`,
              description: `Answer explaining what this ingredient adds to the product and why you chose it. Keep the tone friendly and short, in two or three sentences.`,
            },
            {
              title: `What makes this product different?`,
              description: `Answer with the one detail that sets your product apart, in a single clear sentence.`,
            },
            {
              title: `What is in each unit?`,
              description: `Answer with the key nutrition or composition facts and what the product does not contain. Keep it short and honest.`,
            },
            {
              title: `Is it suitable for everyone?`,
              description: `Answer about who the product is for and when it can be enjoyed, at any time of the day.`,
            },
            {
              title: `What is Your Brand?`,
              description: `Short answer describing what your brand makes, its main ingredients and the promise it makes to customers.`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, m.jsx)(o, {
          title: `Subscribe and save`,
          description: `New flavors, limited releases and restocks`,
          placeholder: `YOUR EMAIL ADDRESS`,
          buttonText: `Submit`,
          successText: `You're on the list. Thank you!`,
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        children: (0, m.jsx)(l, {
          columns: [
            {
              title: `Shop`,
              items: [
                { text: `All products`, href: `#products` },
                { text: `Bundles`, href: `#products` },
              ],
            },
            {
              title: `Company`,
              items: [
                { text: `Delivery & Returns`, href: `#faq` },
                { text: `FAQ`, href: `#faq` },
                { text: `Support`, href: `#contact` },
              ],
            },
            {
              title: `Stay in touch`,
              items: [
                { text: `Instagram`, href: `#`, arrow: !0 },
                { text: `TikTok`, href: `#`, arrow: !0 },
                { text: `Facebook`, href: `#`, arrow: !0 },
                { text: `Linkedin`, href: `#`, arrow: !0 },
              ],
            },
          ],
          logoSrc: `${h}/img/product-logo-cream.png`,
          logoAlt: `Your Brand`,
          copyright: `© 20XX Your Brand. All rights reserved.`,
          creditsLink: { text: `3D credits`, href: `#` },
        }),
      }),
      (0, m.jsx)(n, {
        text: `psst… 5% off`,
        href: `#contact`,
        imageSrc: `${h}/img/product-gold-can.webp`,
        imageAlt: `Product image: featured item`,
        closeLabel: `Hide`,
      }),
    ],
  });
}
export { g as default };
