import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./ScrollToneBackdrop-Dv-1Id31.js";
import r from "./LoaderGridWordmark-DiEnQQd7.js";
import i from "./NavbarFloatingBar-Z-qGSCnz.js";
import a from "./AboutInkStatement-Cud-GP2z.js";
import o from "./ContactOutlineForm-CoOyjBo5.js";
import s from "./ServicesTiltBento-B0gFB09g.js";
import c from "./FooterGiantWordmark-uV5VwNlh.js";
import l from "./HeroFloatingModel-DRD1Y38Z.js";
import u from "./PricingOutlineTiers-CMpYY3vX.js";
import d from "./CtaScrubStatement-DGgXWfrN.js";
import f from "./TestimonialDragCards-Bk4DH3fa.js";
/* empty css              */ var p = e(),
  m = 1;
function h() {
  return (0, p.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `glass`,
    "data-pattern": `columns`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, p.jsx)(t, {}),
      (0, p.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, p.jsx)(n, {}),
      (0, p.jsx)(r, { brand: `Your Brand`, status: `Shaking up the fizz` }),
      (0, p.jsx)(i, {
        brand: `Your Brand`,
        navItems: [
          { name: `Flavours`, href: `#hero` },
          { name: `Stockists`, href: `#services` },
          { name: `Reviews`, href: `#testimonial` },
          { name: `Crates`, href: `#pricing` },
          { name: `Contact`, href: `#contact` },
        ],
        button: { text: `Order a crate`, href: `#pricing` },
      }),
      (0, p.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        "data-scene": !0,
        children: (0, p.jsx)(l, {
          modelSrc: `assets/media/set-02/model-01.glb`,
          title: [`Seriously`, `Fizzy`],
          subtitle: `Short line about your drink, how it is made and where.`,
          tags: [
            { label: `Small batch`, caption: `Brewed in City` },
            { label: `Real ginger`, caption: `Pressed every week` },
          ],
          marker: `00.00 N / 00.00 E`,
          strip: [
            { value: `330 ml`, caption: `Per can` },
            { value: `4.8 g`, caption: `Sugar per 100 ml` },
            { value: `5`, caption: `Ingredients` },
            { value: `XX`, caption: `Made in City` },
            { value: `100%`, caption: `Recyclable can` },
          ],
          productLabel: `Craft soda`,
          productName: `Product Name`,
          productSpec: `330 ml, lightly sweetened with cane sugar`,
          stats: [
            { value: `330 ml`, caption: `Per can` },
            { value: `16 g`, caption: `Cane sugar` },
            { value: `5`, caption: `Ingredients` },
            { value: `68 kcal`, caption: `Energy` },
          ],
          detailsLabel: `Ingredients`,
          details: `Carbonated water, blood orange juice, cane sugar, fresh ginger, lemon juice`,
          descriptionLabel: `About the can`,
          description: `Short description of this flavour: the main ingredients, how it is brewed and what it tastes like. Add one line on what makes it different from a regular soda.`,
          button: { text: `Spin the can` },
          introDelay: m,
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, p.jsx)(a, {
          label: `About Your Brand`,
          title: `Soda the way it used to taste, before syrup took over`,
          description: `Short story of your brand: where it started, who started it and what they wanted to make. Explain how every batch is made today, what goes into it and what never does. Close with one line about the taste and the promise behind every can, so a new customer knows what to expect from the first sip.`,
          stats: [
            { value: `20XX`, label: `Founded` },
            { value: `6`, label: `Flavours` },
            { value: `5`, label: `Ingredients max` },
            { value: `0`, label: `Concentrates` },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        children: (0, p.jsx)(s, {
          label: `Where to find us`,
          sublabel: `Cans, plus swing-top bottles for bars`,
          title: `Your Brand for every fridge`,
          counterLabel: `All services`,
          imageSrc: `assets/media/image-01-1600.webp`,
          imageAlt: `Services image: your drink served cold`,
          items: [
            {
              title: `Shops and delis`,
              description: `Weekly drops of cans and trays to shops, delis and grocers.`,
              imageSrc: `assets/media/image-02-1600.webp`,
              imageAlt: `Channel one image: your product in a shop`,
              href: `#contact`,
            },
            {
              title: `Bars and clubs`,
              description: `Swing-top bottles, mixer cans and branded fridges for late service.`,
              imageSrc: `assets/media/image-06-1600.webp`,
              imageAlt: `Channel two image: your product at a bar`,
              href: `#contact`,
            },
            {
              title: `Office fridges`,
              description: `A mixed crate on a schedule that suits your team.`,
              imageSrc: `assets/media/image-08-1600.webp`,
              imageAlt: `Channel three image: your product at an office`,
              href: `#contact`,
            },
            {
              title: `Festivals`,
              description: `Ice-cold cans and a pop-up bar for launches and open airs.`,
              imageSrc: `assets/media/image-15-1600.webp`,
              imageAlt: `Channel four image: your product at an event`,
              href: `#contact`,
            },
            {
              title: `Restaurants`,
              description: `Our sodas on the menu, paired with your kitchen.`,
              imageSrc: `assets/media/image-05-1600.webp`,
              imageAlt: `Channel five image: your product at a restaurant`,
              href: `#contact`,
            },
            {
              title: `Collabs`,
              description: `Limited flavours brewed with chefs, bars and artists.`,
              imageSrc: `assets/media/image-17-1600.webp`,
              imageAlt: `Channel six image: a special edition drink`,
              href: `#contact`,
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `cta`,
        "data-section": `cta`,
        "data-scene": !0,
        children: (0, p.jsx)(d, {
          title: `Pop it, feel it`,
          accentWord: `feel`,
          tag: `Order now`,
          subline: `Ships across the country in 48 hours`,
          primaryButton: { text: `Order a crate`, href: `#pricing` },
          items: [
            {
              imageSrc: `assets/media/image-03-1600.webp`,
              imageAlt: `Call to action image: your drink in a glass`,
            },
          ],
          cardImageSrc: `assets/media/image-16-1600.webp`,
          cardImageAlt: `Card image: a customer enjoying your drink`,
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `testimonial`,
        "data-section": `testimonial`,
        children: (0, p.jsx)(f, {
          title: `Loved from corner shop to cocktail bar`,
          tag: `Heard at the counter`,
          subline: `From shops, bars and kitchens`,
          asideImageSrc: `assets/media/image-10-1600.webp`,
          asideImageAlt: `Side image: your drink being served`,
          items: [
            {
              quote: `Our best seller outsells every cola in our fridge. People buy one, then come back for a four pack.`,
              name: `Full Name`,
              role: `Owner, Company Name`,
              imageSrc: `assets/media/image-14-1600.webp`,
              imageAlt: `Customer portrait`,
            },
            {
              quote: `It is the only craft soda that holds its fizz in a highball. Our ginger mule is built on it now.`,
              name: `Full Name`,
              role: `Head bartender, Company Name`,
              imageSrc: `assets/media/image-04-1600.webp`,
              imageAlt: `Customer portrait`,
            },
            {
              quote: `Short ingredient list, bold flavour and a can that jumps off the shelf. Easy to stock, easy to sell.`,
              name: `Full Name`,
              role: `Bakery stall, Company Name`,
              imageSrc: `assets/media/image-07-1600.webp`,
              imageAlt: `Customer portrait`,
            },
            {
              quote: `We replaced every soft drink in the office with a mixed crate. The rhubarb goes first every week.`,
              name: `Full Name`,
              role: `Office manager, Company Name`,
              imageSrc: `assets/media/image-18-1600.webp`,
              imageAlt: `Customer portrait`,
            },
            {
              quote: `Real ginger heat, not too sweet. It is what I reach for after a long shift instead of a beer.`,
              name: `Full Name`,
              role: `Chef, Company Name`,
              imageSrc: `assets/media/image-11-1600.webp`,
              imageAlt: `Customer portrait`,
            },
            {
              quote: `Deliveries are always on time and the crates stack neatly behind the bar. Small things that add up.`,
              name: `Full Name`,
              role: `Café owner, Company Name`,
              imageSrc: `assets/media/image-13-1600.webp`,
              imageAlt: `Customer portrait`,
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, p.jsx)(u, {
          label: `Crates delivered to your door`,
          sublabel: `Pause or stop any time`,
          title: `Pick your crate`,
          items: [
            {
              tag: `Monthly crate`,
              name: `Taster`,
              price: `$00`,
              unit: `/ month`,
              stats: [
                { value: `12`, label: `Cans` },
                { value: `$0.00`, label: `Delivery` },
                { value: `3`, label: `Flavours` },
                { value: `Any time`, label: `Pause` },
              ],
              features: [`Mix your flavours`, `Skip any month`, `Recyclable crate`],
              button: { text: `Start a crate`, href: `#pricing` },
            },
            {
              tag: `Monthly crate`,
              name: `Party`,
              price: `$00`,
              unit: `/ month`,
              stats: [
                { value: `24`, label: `Cans` },
                { value: `Free`, label: `Delivery` },
                { value: `6`, label: `Flavours` },
                { value: `Any time`, label: `Pause` },
              ],
              features: [`Mix your flavours`, `Skip any month`, `Limited drops first`],
              button: { text: `Start a crate`, href: `#pricing` },
            },
            {
              tag: `Every two weeks`,
              name: `Office`,
              price: `$00`,
              unit: `/ month`,
              stats: [
                { value: `72`, label: `Cans` },
                { value: `Free`, label: `Delivery` },
                { value: `6`, label: `Flavours` },
                { value: `On loan`, label: `Fridge` },
              ],
              features: [`One monthly invoice`, `Restocked by us`, `Limited drops first`],
              button: { text: `Talk to us`, href: `#contact` },
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, p.jsx)(o, {
          title: `Stock Your Brand in your fridge`,
          fields: { name: `Name`, email: `Email`, message: `Message` },
          button: { text: `Send message` },
          note: `*We reply within two working days`,
          imageSrc: `assets/media/image-09-1600.webp`,
          imageAlt: `Contact image: your product chilling`,
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        children: (0, p.jsx)(c, {
          brand: `Your Brand`,
          description: `Short line about your brand: what you make, how and where it is made.`,
          subscribe: {
            title: `Get new flavours first*`,
            placeholder: `Your e-mail`,
            note: `*Only new drops, no spam`,
            button: `Subscribe`,
          },
          columns: [
            {
              title: `Shop`,
              links: [
                { label: `All flavours`, href: `#` },
                { label: `Mixed crates`, href: `#pricing` },
                { label: `Limited drops`, href: `#` },
                { label: `Gift boxes`, href: `#` },
              ],
            },
            {
              title: `Company`,
              links: [
                { label: `About`, href: `#about` },
                { label: `Stockists`, href: `#services` },
                { label: `Careers`, href: `#` },
              ],
            },
            {
              title: `Help`,
              links: [
                { label: `Contact`, href: `#contact` },
                { label: `Shipping`, href: `#` },
                { label: `Returns`, href: `#` },
              ],
            },
          ],
          socials: [
            { label: `Instagram`, href: `#` },
            { label: `TikTok`, href: `#` },
            { label: `LinkedIn`, href: `#` },
          ],
          legal: {
            text: `© 20XX Company Name. All rights reserved.`,
            links: [
              { label: `Privacy`, href: `#` },
              { label: `Terms`, href: `#` },
              { label: `Imprint`, href: `#` },
            ],
          },
        }),
      }),
    ],
  });
}
export { h as default };
