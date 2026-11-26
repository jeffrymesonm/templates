import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import t from "./GlyphFieldStage-Da7U2iNv.js";
import { t as n } from "./SmoothScroll-ChrUt1wD.js";
import r from "./LoaderGlyphColumns-DOb3jVzt.js";
import i from "./NavbarPixelBar-BRp_8EdM.js";
import a from "./ContactFormPhoto-tsfqBHYY.js";
import o from "./ProcessColumnSteps-cdQXWKon.js";
import s from "./ServicesPixelBoxes-nR6G9Flq.js";
import c from "./FooterIndexColumns-DQ3Tx3hL.js";
import l from "./GalleryGlyphRail-P3Q5QBfU.js";
import u from "./HeroGlyphField-BmsbCLyu.js";
import d from "./PricingPixelPlans-CaHyZc63.js";
import f from "./TestimonialPixelCarousel-vnVBnwp4.js";
/* empty css              */ var p = e(),
  m = 1.4;
function h() {
  return (0, p.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `filled`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, p.jsx)(n, {}),
      (0, p.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, p.jsx)(t, { introDelay: m, variant: `architecture` }),
      (0, p.jsx)(r, { brand: `Your Brand`, introDelay: m }),
      (0, p.jsx)(i, {
        brand: `Your Brand`,
        navItems: [
          { name: `Listings`, href: `#gallery` },
          { name: `Services`, href: `#services` },
          { name: `Fees`, href: `#pricing` },
          { name: `Selling`, href: `#process` },
          { name: `Contact`, href: `#contact` },
        ],
      }),
      (0, p.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        children: (0, p.jsx)(u, {
          title: `Find your next home`,
          description: `Short description of your agency: who you help to buy, sell or rent, the area you cover and why local clients choose your team.`,
          primaryButton: { text: `Book a valuation`, href: `#contact` },
          secondaryButton: { text: `Listings`, href: `#gallery` },
          introDelay: m,
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `gallery`,
        "data-section": `gallery`,
        "data-scene": !0,
        children: (0, p.jsx)(l, {
          number: `01`,
          title: `Listings`,
          code: `SEC-01`,
          items: [
            {
              title: `4 bed family home, City`,
              description: `Open plan kitchen, fenced yard and a two car garage, 2,000 sq ft. $00.`,
              tag: `For sale`,
              imageSrc: `assets/media/image-17-1600.webp`,
              imageAlt: `Listing image: property exterior`,
            },
            {
              title: `3 bed porch house, City`,
              description: `Restored period bungalow with a deep front porch. Sold over asking in nine days.`,
              tag: `Sold`,
              imageSrc: `assets/media/image-03-1600.webp`,
              imageAlt: `Listing image: property exterior`,
            },
            {
              title: `3 bed row house, City`,
              description: `Brick row house on a quiet historic lane, with a brand new roof. $00.`,
              tag: `For sale`,
              imageSrc: `assets/media/image-15-1600.webp`,
              imageAlt: `Listing image: street view`,
            },
            {
              title: `2 bed condo, City`,
              description: `Bright corner unit by the light rail, gym and parking included. $00 a month.`,
              tag: `For rent`,
              imageSrc: `assets/media/image-01-1600.webp`,
              imageAlt: `Listing image: interior`,
            },
            {
              title: `4 bed colonial, City`,
              description: `Quiet cul de sac, top rated schools and a finished bonus room. $00.`,
              tag: `For sale`,
              imageSrc: `assets/media/image-07-1600.webp`,
              imageAlt: `Listing image: property exterior`,
            },
            {
              title: `5 bed new build, City`,
              description: `Built in 20XX with a chef's kitchen and a large open dining room. $00.`,
              tag: `New build`,
              imageSrc: `assets/media/image-08-1600.webp`,
              imageAlt: `Listing image: interior`,
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        "data-scene": !0,
        children: (0, p.jsx)(s, {
          number: `02`,
          label: `SEC-02`,
          title: `Services`,
          imageSrc: `assets/media/image-02-1600.webp`,
          imageAlt: `Services image: a property you sold`,
          items: [
            {
              title: `Sell your home`,
              description: `A clear price plan, pro photos and a listing live on every major site within a week.`,
              tag: `Selling`,
            },
            {
              title: `Buy a home`,
              description: `We find homes before they hit the market and negotiate the price and repairs for you.`,
              tag: `Buying`,
            },
            {
              title: `Free home valuation`,
              description: `A written value for your home from an agent who has sold on your street.`,
              tag: `Selling`,
            },
            {
              title: `Rentals`,
              description: `Apartments and houses for rent across the city, with viewings seven days a week.`,
              tag: `Renting`,
            },
            {
              title: `Property management`,
              description: `Tenants found, rent collected and repairs handled for landlords who want a quiet life.`,
              tag: `Landlords`,
            },
            {
              title: `Relocation`,
              description: `Moving to the city for work? We help you pick the area, the schools and the home.`,
              tag: `Buying`,
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, p.jsx)(d, {
          number: `03`,
          title: `Fees`,
          label: `SEC-03`,
          items: [
            {
              title: `Sell`,
              price: `2.5%`,
              period: `Of sale price`,
              description: `Paid only when your home sells. No upfront costs at all.`,
              features: [
                `Free valuation and staging tips`,
                `Pro photos and video tour`,
                `Open houses every weekend`,
              ],
              button: { text: `Book a valuation`, href: `#contact` },
            },
            {
              title: `Buy`,
              price: `$0`,
              period: `Upfront`,
              description: `Our fee is agreed with you first and usually paid at closing.`,
              features: [
                `Homes before they list`,
                `Offer and repair negotiation`,
                `Lender and inspector list`,
              ],
              button: { text: `Start searching`, href: `#contact` },
            },
            {
              title: `Manage`,
              price: `8%`,
              period: `Of monthly rent`,
              description: `Full management for landlords with one home or twenty.`,
              features: [
                `Tenant screening and leases`,
                `Rent collected and paid out`,
                `Repairs handled around the clock`,
              ],
              button: { text: `Get a quote`, href: `#contact` },
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `process`,
        "data-section": `process`,
        "data-scene": !0,
        children: (0, p.jsx)(o, {
          number: `04`,
          label: `SEC-04`,
          title: `Selling`,
          items: [
            {
              title: `Value it`,
              description: `Your agent visits, walks the home with you and gives you a written price within two days.`,
              imageSrc: `assets/media/image-11-1600.webp`,
              imageAlt: `Process image: valuation visit`,
            },
            {
              title: `Show it`,
              description: `Pro photos, a video tour and open houses, with feedback sent to you after every viewing.`,
              imageSrc: `assets/media/image-16-1600.webp`,
              imageAlt: `Process image: viewing`,
            },
            {
              title: `Agree a price`,
              description: `We compare every offer with you and negotiate the best price and terms.`,
              imageSrc: `assets/media/image-09-1600.webp`,
              imageAlt: `Process image: negotiation`,
            },
            {
              title: `Hand over keys`,
              description: `We manage inspections and paperwork through to closing day and the keys.`,
              imageSrc: `assets/media/image-06-1600.webp`,
              imageAlt: `Process image: key handover`,
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `testimonial`,
        "data-section": `testimonial`,
        children: (0, p.jsx)(f, {
          number: `05`,
          title: `Reviews`,
          label: `SEC-05`,
          items: [
            {
              quote: `Our house sold in nine days, over asking. They told us exactly what to fix and what to leave alone.`,
              name: `Full Name`,
              role: `Sold in City`,
              imageSrc: `assets/media/image-04-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `We moved from another state without seeing the house in person. The video calls made it easy.`,
              name: `Full Name`,
              role: `Bought in City`,
              imageSrc: `assets/media/image-13-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `First home, lots of questions, and our agent answered every one, even on a Sunday night.`,
              name: `Full Name`,
              role: `First time buyer, City`,
              imageSrc: `assets/media/image-10-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `They manage my two rentals. Rent arrives on time and I have not had a late night call since.`,
              name: `Full Name`,
              role: `Landlord since 20XX`,
              imageSrc: `assets/media/image-12-1600.webp`,
              imageAlt: `Client portrait`,
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, p.jsx)(a, {
          index: `06`,
          tag: `SEC-06`,
          title: `Contact`,
          topics: [`Sell`, `Buy`, `Rent`, `Valuation`],
          buttonText: `Send`,
          successText: `Thank you. An agent will call you back within two hours.`,
          imageSrc: `assets/media/image-05-1600.webp`,
          imageAlt: `Contact image: your agent with a client`,
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        children: (0, p.jsx)(c, {
          brand: `Your Brand`,
          columns: [
            {
              title: `Sections`,
              links: [
                { text: `Home`, href: `#hero` },
                { text: `Listings`, href: `#gallery` },
                { text: `Services`, href: `#services` },
                { text: `Fees`, href: `#pricing` },
                { text: `Selling`, href: `#process` },
              ],
            },
            {
              title: `Connect`,
              links: [
                { text: `Contact`, href: `#contact` },
                { text: `Reviews`, href: `#testimonial` },
                { text: `Instagram`, href: `#` },
                { text: `Facebook`, href: `#` },
              ],
            },
            {
              title: `Legal`,
              links: [
                { text: `Terms`, href: `#` },
                { text: `Privacy`, href: `#` },
                { text: `Fair housing`, href: `#` },
              ],
            },
          ],
          infoLabel: `Info`,
          statement: `Your Brand is an independent real estate brokerage at 123 Example Street, City. Office open Monday to Saturday, 9am to 6pm.`,
          copyright: `© Your Brand 20XX`,
        }),
      }),
    ],
  });
}
export { h as default };
