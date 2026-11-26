import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./LoaderRingCounter-Cd3Gf8yt.js";
import r from "./NavbarGlidePill-BMDK-Rha.js";
import i from "./AboutRingStatement-DtQ8Ad3Z.js";
import a from "./ContactRingForm-D66xMqZd.js";
import o from "./FaqRippleAccordion-Zx5diW6L.js";
import s from "./FooterRingHorizon-DyuOGp85.js";
import c from "./HeroFloatingCard-B9sX-gwI.js";
import l from "./PricingRingPlans-Db9D4nO4.js";
import u from "./ProductCardTiers-CQj29-LX.js";
import d from "./TestimonialRingQuotes-Wx8xbJxF.js";
/* empty css              */ var f = e();
function p() {
  return (0, f.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `glass`,
    "data-pattern": `sky`,
    className: `relative isolate min-h-svh overflow-x-clip bg-background text-foreground`,
    children: [
      (0, f.jsx)(t, {}),
      (0, f.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, f.jsx)(n, { brand: `Your Brand` }),
      (0, f.jsx)(r, {
        brand: `Your Brand`,
        navItems: [
          { name: `The space`, href: `#about` },
          { name: `Treatments`, href: `#treatments` },
          { name: `Membership`, href: `#pricing` },
          { name: `Visit`, href: `#faq` },
        ],
        primaryButton: { text: `Book a visit`, href: `#contact` },
        secondaryButton: { text: `Gift cards`, href: `#contact` },
      }),
      (0, f.jsx)(`div`, {
        id: `home`,
        "data-section": `hero`,
        children: (0, f.jsx)(c, {
          shape: `split`,
          title: `Warm water, slow hours`,
          description: `Short description of your spa and the neighbourhood where it is located.`,
          primaryButton: { text: `Book a visit`, href: `#contact` },
          secondaryButton: { text: `See treatments`, href: `#treatments` },
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, f.jsx)(i, {
          tag: `The space`,
          title: `Describe your space in two lines: the building, the main facilities, the number of treatment rooms and the feeling guests take home with them.`,
          items: [
            {
              title: `Thermal pool`,
              description: `Eighteen metres of warm salt water at 34 degrees, lit low after dark.`,
              imageSrc: `assets/media/image-01-1600.webp`,
              imageAlt: `Facility image: your pool or main space`,
            },
            {
              title: `Cedar sauna`,
              description: `A 90 degree sauna with timed aufguss rituals every hour on the half.`,
              imageSrc: `assets/media/image-03-1600.webp`,
              imageAlt: `Facility image: your sauna or relaxation room`,
            },
            {
              title: `Made by hand`,
              description: `Our own scrubs, oils and salts, blended each week in the back room.`,
              imageSrc: `assets/media/image-09-1600.webp`,
              imageAlt: `Facility image: your own products`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `treatments`,
        "data-section": `product`,
        children: (0, f.jsx)(u, {
          tag: `Treatments`,
          title: `Hands that know`,
          titleDim: `where you hold it`,
          description: `Every treatment includes three hours in the thermal rooms.`,
          items: [
            {
              label: `60 min, $00`,
              title: `Deep tissue massage`,
              description: `Slow, firm work on the back, neck and shoulders.`,
              imageSrc: `assets/media/image-13-1600.webp`,
              imageAlt: `Treatment image: massage`,
            },
            {
              label: `75 min, $00`,
              title: `Hot stone ritual`,
              description: `Warm basalt and oil to loosen the whole body.`,
              imageSrc: `assets/media/image-11-1600.webp`,
              imageAlt: `Treatment image: body ritual`,
            },
            {
              label: `60 min, $00`,
              title: `Signature facial`,
              description: `Cleanse, massage and mask, matched to your skin.`,
              imageSrc: `assets/media/image-15-1600.webp`,
              imageAlt: `Treatment image: facial`,
            },
            {
              label: `45 min, $00`,
              title: `Clay mask and scalp`,
              description: `Mineral clay for the face while we work the scalp.`,
              imageSrc: `assets/media/image-12-1600.webp`,
              imageAlt: `Treatment image: mask`,
            },
            {
              label: `3 hours, $00`,
              title: `Thermal circuit`,
              description: `Pool, sauna, steam and cold plunge at your own pace.`,
              imageSrc: `assets/media/image-10-1600.webp`,
              imageAlt: `Treatment image: thermal circuit`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, f.jsx)(l, {
          tag: `Membership`,
          title: `Make it weekly`,
          titleDim: `not once a year`,
          description: `Twelve month memberships, paid monthly. Pause for up to two months a year.`,
          items: [
            {
              title: `Thermal`,
              price: `$00`,
              period: `per month`,
              description: `The water and heat, whenever you need it.`,
              features: [`Unlimited thermal circuit`, `Two guest passes a year`, `10% off treatments`],
              button: { text: `Join Thermal`, href: `#contact` },
            },
            {
              title: `Ritual`,
              price: `$00`,
              period: `per month`,
              description: `The circuit plus one treatment every month.`,
              features: [`Everything in Thermal`, `One 60 min treatment a month`, `Priority booking`],
              button: { text: `Join Ritual`, href: `#contact` },
            },
            {
              title: `Club`,
              price: `$00`,
              period: `per month`,
              description: `For the people who come twice a week.`,
              features: [`Everything in Ritual`, `Two treatments a month`, `Members' lounge and late swims`],
              button: { text: `Join Club`, href: `#contact` },
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `testimonial`,
        "data-section": `testimonial`,
        children: (0, f.jsx)(d, {
          tag: `Members`,
          title: `What people say`,
          titleDim: `on the way out`,
          items: [
            {
              quote: `I come straight from work on Thursdays. Forty minutes in the pool and the week is gone.`,
              name: `Full Name`,
              role: `Ritual member`,
              imageSrc: `assets/media/image-08-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `Short quote from a client about a specific treatment and the person who did it.`,
              name: `Full Name`,
              role: `Club member`,
              imageSrc: `assets/media/image-02-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `Quiet, dark and warm. My sister gave me a day here and I joined the same week.`,
              name: `Full Name`,
              role: `Thermal member`,
              imageSrc: `assets/media/image-07-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `The best facial I have had in the city, and no one tried to sell me a cream after.`,
              name: `Full Name`,
              role: `Guest`,
              imageSrc: `assets/media/image-05-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `The cold plunge at nine at night, then the sauna. I sleep better than I have in years.`,
              name: `Full Name`,
              role: `Club member`,
              imageSrc: `assets/media/image-06-1600.webp`,
              imageAlt: `Client portrait`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, f.jsx)(o, {
          tag: `Visit`,
          title: `Before you come`,
          titleDim: `the short answers`,
          description: `Anything else? Message us and the front desk replies within the day.`,
          primaryButton: { text: `Message us`, href: `#contact` },
          items: [
            {
              title: `When are you open?`,
              description: `Every day from 7 am to 10 pm. Members can swim until 11 pm on Fridays.`,
            },
            {
              title: `What should I bring?`,
              description: `Just a swimsuit. Robes, towels, slippers and lockers are all included.`,
            },
            {
              title: `Can I come without a treatment?`,
              description: `Yes. The thermal circuit is $00 for three hours and can be booked on its own.`,
            },
            {
              title: `Is it suitable in pregnancy?`,
              description: `We offer a pregnancy massage from week fourteen. Please skip the sauna and cold plunge.`,
            },
            {
              title: `Do you sell gift cards?`,
              description: `Yes, for any amount or treatment. They are valid for two years and sent the same day.`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, f.jsx)(a, {
          title: `Book a visit`,
          titleDim: `or ask about membership`,
          fields: [
            { name: `name`, label: `Name`, placeholder: `Your name` },
            { name: `email`, label: `Email`, type: `email`, placeholder: `you@email.com` },
            {
              name: `message`,
              label: `Message`,
              type: `textarea`,
              placeholder: `Treatment, date and time you prefer`,
            },
          ],
          buttonText: `Send request`,
          imageSrc: `assets/media/image-14-1600.webp`,
          imageAlt: `Contact image: a guest relaxing in your space`,
        }),
      }),
      (0, f.jsx)(`div`, {
        "data-section": `footer`,
        children: (0, f.jsx)(s, {
          brand: `Your Brand`,
          titleMuted: `123 Example Street`,
          title: `City, from seven`,
          note: `Short line about your business. Open every day, hello@example.com, +00 000 000 0000.`,
          primaryButton: { text: `Book a visit`, href: `#contact` },
          columns: [
            {
              title: `Spa`,
              links: [
                { text: `The space`, href: `#about` },
                { text: `Treatments`, href: `#treatments` },
              ],
            },
            {
              title: `Club`,
              links: [
                { text: `Membership`, href: `#pricing` },
                { text: `Reviews`, href: `#testimonial` },
              ],
            },
            {
              title: `Visit`,
              links: [
                { text: `Opening hours`, href: `#faq` },
                { text: `Gift cards`, href: `#contact` },
                { text: `Contact`, href: `#contact` },
              ],
            },
          ],
          copyright: `© 20XX Your Brand`,
          legal: [
            { text: `Privacy`, href: `#` },
            { text: `Terms`, href: `#` },
          ],
        }),
      }),
    ],
  });
}
export { p as default };
