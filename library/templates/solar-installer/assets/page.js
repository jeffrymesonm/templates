import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./TerrainDotStage-BJNo0Ocl.js";
import r from "./LoaderCrosshairLock-DHwbDJJA.js";
import i from "./NavbarHudCorners-fAGuZpRL.js";
import a from "./AboutSurveyNote-CtU2_w08.js";
import o from "./ContactBeaconForm-CBjGt8bY.js";
import s from "./ProcessTransectRail-DBDaaPbP.js";
import c from "./ServicesStackedChannels-CcM-NMEv.js";
import l from "./FooterHorizonMark-BDw5t-qK.js";
import u from "./GallerySurveyStack-xvanlhsX.js";
import d from "./HeroSplitHorizon-B2uGBEZu.js";
import f from "./PricingSpecSheet-5myL3sqX.js";
import p from "./TestimonialClientIndex-WFsgx9ad.js";
/* empty css              */ var m = e(),
  h = 1.6;
function g() {
  return (0, m.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `filled`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, m.jsx)(t, {}),
      (0, m.jsx)(n, {}),
      (0, m.jsx)(`div`, { className: `kit-ground`, "aria-hidden": `true` }),
      (0, m.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, m.jsx)(r, { brand: `Your Brand`, coordinates: `N 00.00 / W 000.00` }),
      (0, m.jsx)(i, {
        brand: `Your Brand`,
        navItems: [
          { name: `About`, href: `#about` },
          { name: `Services`, href: `#services` },
          { name: `Installs`, href: `#gallery` },
          { name: `Pricing`, href: `#pricing` },
          { name: `Contact`, href: `#contact` },
        ],
        primaryButton: { text: `Get a free quote`, href: `#contact` },
        contactLink: { text: `hello@example.com`, href: `mailto:hello@example.com` },
        introDelay: h,
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-10`,
        id: `hero`,
        "data-section": `hero`,
        "data-terrain": `rise`,
        "data-scene": !0,
        children: (0, m.jsx)(d, {
          titleTop: `Solar power`,
          titleBottom: `for every roof`,
          description: `Short description of what you install and the area you cover, from first survey to switch on.`,
          readout: { value: `Est. 20XX`, label: `1,000 homes powered in your region` },
          beacon: { label: `Install 0000`, coordinates: `N 00.00 / W 000.00`, elevation: 9.6 },
          primaryButton: { text: `Get a free quote`, href: `#contact` },
          secondaryButton: { text: `See our installs`, href: `#gallery` },
          scrollLabel: `Scroll to explore`,
          introDelay: h,
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-10`,
        id: `about`,
        "data-section": `about`,
        "data-terrain": `valley`,
        children: (0, m.jsx)(a, {
          label: `About`,
          title: `Local installers who measure twice and wire once`,
          description: `Short description of your company: who you are, where you work and how your crews survey, design and fit every system. Add what happens after the install and how long you stay on call for customers.`,
          imageSrc: `assets/media/image-13-1600.webp`,
          imageAlt: `About image: your crew beside a finished install`,
          meta: `N 00.00 / W 000.00 / Crew 04`,
          items: [
            { value: `20XX`, label: `Founded` },
            { value: `1,000`, label: `Homes installed` },
            { value: `10MW`, label: `Capacity fitted` },
            { value: `25yr`, label: `Panel warranty` },
            { value: `4.9`, label: `Average rating` },
          ],
          primaryButton: { text: `How we work`, href: `#process` },
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-10`,
        id: `services`,
        "data-section": `services`,
        "data-terrain": `valley`,
        children: (0, m.jsx)(c, {
          label: `Services`,
          title: `Everything your home needs to run on sun`,
          items: [
            { title: `Roof solar`, description: `Panels sized to your roof, your bills and your shade.` },
            {
              title: `Home batteries`,
              description: `Store daytime power and keep the lights on in outages.`,
            },
            { title: `EV chargers`, description: `Level 2 chargers that fill your car from the sun.` },
            { title: `Panel upgrades`, description: `Electrical panel upgrades done to code in one day.` },
            { title: `Repairs`, description: `Fixes and health checks for systems from any installer.` },
          ],
          note: `Every system is fitted by our own crews.`,
          linkButton: { text: `Book a roof check`, href: `#contact` },
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-10`,
        id: `process`,
        "data-section": `process`,
        "data-terrain": `valley`,
        "data-scene": !0,
        children: (0, m.jsx)(s, {
          label: `Process`,
          title: `From first call to first kilowatt`,
          items: [
            {
              title: `Survey the roof`,
              description: `We measure your roof, check the shade and read a year of power bills.`,
              imageSrc: `assets/media/image-01-1600.webp`,
              imageAlt: `Step one image: the survey`,
            },
            {
              title: `Design the system`,
              description: `You get a fixed price, a panel layout and your expected savings in writing.`,
              imageSrc: `assets/media/image-17-1600.webp`,
              imageAlt: `Step two image: the system design`,
            },
            {
              title: `Install in two days`,
              description: `Our crew fits the racking, panels and inverter with no mess left behind.`,
              imageSrc: `assets/media/image-05-1600.webp`,
              imageAlt: `Step three image: the install`,
            },
            {
              title: `Inspect and connect`,
              description: `We handle the city permit, the inspection and the utility hook up.`,
              imageSrc: `assets/media/image-06-1600.webp`,
              imageAlt: `Step four image: the inspection`,
            },
            {
              title: `Watch it produce`,
              description: `Track every kilowatt in our app, with yearly checks for the life of the system.`,
              imageSrc: `assets/media/image-07-1600.webp`,
              imageAlt: `Step five image: monitoring the system`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-10`,
        id: `gallery`,
        "data-section": `gallery`,
        "data-terrain": `valley`,
        "data-scene": !0,
        children: (0, m.jsx)(u, {
          label: `Installs`,
          title: `Recent solar installs`,
          linkButton: { text: `Plan your install`, href: `#contact` },
          items: [
            {
              title: `8.4 kW on a single storey ranch home`,
              category: `Roof solar`,
              meta: `N 00.00 / W 000.00`,
              imageSrc: `assets/media/image-18-1600.webp`,
              imageAlt: `Project one image: a finished install`,
            },
            {
              title: `Twelve new homes on one street in City`,
              category: `New build`,
              meta: `N 00.00 / W 000.00`,
              imageSrc: `assets/media/image-04-1600.webp`,
              imageAlt: `Project two image: a finished install`,
            },
            {
              title: `Panels and battery by the lake`,
              category: `Solar and battery`,
              meta: `N 00.00 / W 000.00`,
              imageSrc: `assets/media/image-02-1600.webp`,
              imageAlt: `Project three image: a finished install`,
            },
            {
              title: `Roof array and EV charger in City`,
              category: `Solar and EV`,
              meta: `N 00.00 / W 000.00`,
              imageSrc: `assets/media/image-14-1600.webp`,
              imageAlt: `Project four image: a finished install`,
            },
            {
              title: `Family home upgrade in City`,
              category: `Roof solar`,
              meta: `N 00.00 / W 000.00`,
              imageSrc: `assets/media/image-03-1600.webp`,
              imageAlt: `Project five image: a finished install`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-10`,
        id: `pricing`,
        "data-section": `pricing`,
        "data-terrain": `valley`,
        children: (0, m.jsx)(f, {
          label: `Pricing`,
          title: `Two systems that fit most homes`,
          items: [
            {
              title: `Starter`,
              price: `$00,000`,
              period: `before rebates`,
              description: `A right sized roof system for smaller homes and lower bills.`,
              features: [
                { label: `System size`, value: `6 kW` },
                { label: `Panels`, value: `15` },
                { label: `Battery`, value: `Optional` },
                { label: `Warranty`, value: `25 years` },
              ],
              button: { text: `Get a quote`, href: `#contact` },
            },
            {
              title: `Whole home`,
              price: `$00,000`,
              period: `before rebates`,
              description: `Panels and a battery that cover a family home through outages.`,
              features: [
                { label: `System size`, value: `9 kW` },
                { label: `Panels`, value: `22` },
                { label: `Battery`, value: `13.5 kWh` },
                { label: `Warranty`, value: `25 years` },
              ],
              button: { text: `Get a quote`, href: `#contact` },
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-10`,
        id: `testimonial`,
        "data-section": `testimonial`,
        "data-terrain": `valley`,
        children: (0, m.jsx)(p, {
          label: `Reviews`,
          title: `What our neighbours say`,
          button: { text: `Get your quote`, href: `#contact` },
          items: [
            {
              client: `Project one`,
              quote: `Our power bill went from $000 a month to $00. The crew was done in two days and left the yard cleaner than they found it.`,
              name: `Full Name`,
              role: `Homeowner`,
              imageSrc: `assets/media/image-08-1600.webp`,
              imageAlt: `Customer portrait`,
            },
            {
              client: `Project two`,
              quote: `They showed us the shade on our roof hour by hour before we signed. The savings came in exactly as promised.`,
              name: `Full Name`,
              role: `Homeowner`,
              imageSrc: `assets/media/image-10-1600.webp`,
              imageAlt: `Customer portrait`,
            },
            {
              client: `Project three`,
              quote: `During the last outage ours was the only house on the street with lights on. The battery paid for itself in peace of mind.`,
              name: `Full Name`,
              role: `Homeowner`,
              imageSrc: `assets/media/image-11-1600.webp`,
              imageAlt: `Customer portrait`,
            },
            {
              client: `Project four`,
              quote: `Permits, inspection and the utility paperwork were all handled for us. We just watched the app light up.`,
              name: `Full Name`,
              role: `Homeowner`,
              imageSrc: `assets/media/image-15-1600.webp`,
              imageAlt: `Customer portrait`,
            },
            {
              client: `Project five`,
              quote: `Honest quote, no pressure and a crew that answered every question. We now charge both cars from the roof.`,
              name: `Full Name`,
              role: `Homeowner`,
              imageSrc: `assets/media/image-09-1600.webp`,
              imageAlt: `Customer portrait`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-10`,
        id: `contact`,
        "data-section": `contact`,
        "data-terrain": `calm`,
        children: (0, m.jsx)(o, {
          title: `Get a free solar quote`,
          fields: [
            { name: `name`, label: `Name`, placeholder: `Your full name`, required: !0 },
            { name: `email`, label: `Email`, type: `email`, placeholder: `you@example.com`, required: !0 },
            { name: `phone`, label: `Phone`, type: `tel`, placeholder: `Best number to reach you` },
            {
              name: `message`,
              label: `Your home`,
              type: `textarea`,
              placeholder: `Your address, roof type and average monthly power bill`,
              required: !0,
            },
          ],
          submitText: `Request my quote`,
          successText: `Thanks, we will call you within one day`,
          imageSrc: `assets/media/image-16-1600.webp`,
          imageAlt: `Contact image: solar panels`,
          meta: `Quote 07 / N 00.00 / W 000.00`,
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-10`,
        id: `footer`,
        "data-section": `footer`,
        "data-terrain": `calm`,
        children: (0, m.jsx)(l, {
          brand: `Your Brand`,
          coordinates: `N 00.00 / W 000.00`,
          location: `City, Region`,
          copyright: `© 20XX Your Brand`,
          backToTop: { text: `Back to top`, href: `#hero` },
          legal: [
            { text: `Privacy`, href: `#` },
            { text: `Terms`, href: `#` },
          ],
          columns: [
            {
              title: `Company`,
              items: [
                { text: `About`, href: `#about` },
                { text: `Process`, href: `#process` },
                { text: `Reviews`, href: `#testimonial` },
              ],
            },
            {
              title: `Solar`,
              items: [
                { text: `Services`, href: `#services` },
                { text: `Installs`, href: `#gallery` },
                { text: `Pricing`, href: `#pricing` },
              ],
            },
            {
              title: `Follow`,
              items: [
                { text: `Instagram`, href: `#` },
                { text: `Facebook`, href: `#` },
                { text: `Reviews`, href: `#` },
              ],
            },
          ],
        }),
      }),
    ],
  });
}
export { g as default };
