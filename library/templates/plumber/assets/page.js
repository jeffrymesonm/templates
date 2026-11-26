import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./ScrollToneBackdrop-Dv-1Id31.js";
import r from "./LoaderChipFill-lcTEMy34.js";
import i from "./NavbarFloatingPill-CBLPs1cI.js";
import a from "./ContactDarkFormCard-BiTw4SnD.js";
import o from "./FaqTrayAccordion-rdxkkPz8.js";
import s from "./FeaturesStackingTilesMakro-y2AfCBw4.js";
import c from "./FeaturesStepWashCards-DFnCh31B.js";
import l from "./FooterTrayWordmark-Coy_zWtD.js";
import u from "./HeroBoardFrame-yjaWP-J6.js";
import d from "./PricingTrayPlans-DyKd0AK1.js";
import f from "./TestimonialSpotlightCarousel-C80Ugauf.js";
/* empty css              */ var p = e();
function m() {
  return (0, p.jsxs)(`main`, {
    "data-button": `chip`,
    "data-card": `tray`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, p.jsx)(t, {}),
      (0, p.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, p.jsx)(n, {}),
      (0, p.jsx)(r, { label: `Your Brand` }),
      (0, p.jsx)(i, {
        brand: `Your Brand`,
        navItems: [
          { name: `Services`, href: `#services` },
          { name: `How it works`, href: `#process` },
          { name: `Prices`, href: `#pricing` },
          { name: `Reviews`, href: `#reviews` },
        ],
        cta: { text: `Book a plumber`, href: `#contact` },
        introDelay: 1.2,
      }),
      (0, p.jsx)(`div`, {
        id: `home`,
        "data-section": `hero`,
        children: (0, p.jsx)(u, {
          className: `bg-transparent`,
          tag: `Licensed plumbers in your city`,
          title: `Your promise. In two lines.`,
          description: `Short description of your services and the area you cover. Say how fast you arrive and when you are available.`,
          primaryButton: { text: `Book a plumber`, href: `#contact` },
          secondaryButton: { text: `See our prices`, href: `#pricing` },
          imageSrc: `assets/media/image-04-1600.webp`,
          imageAlt: `Hero image: your team at work`,
          introDelay: 1.2,
          kpis: [
            {
              label: `Average arrival`,
              value: `30 min`,
              delta: `-5 min`,
              trend: [60, 55, 50, 45, 40, 35, 30],
            },
            { label: `Average rating`, value: `4.9/5` },
            { label: `Jobs this month`, value: `100`, trend: [50, 60, 70, 80, 90, 100] },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `services`,
        "data-section": `features`,
        "data-tone": `card`,
        children: (0, p.jsx)(s, {
          items: [
            {
              tag: `Emergency`,
              icon: `siren`,
              title: `Headline for your first service here`,
              description: `Short description of this service: the problems it solves and how quickly you can help, day or night.`,
              note: `24 hours a day, every day`,
              imageSrc: `assets/media/image-08-1600.webp`,
              imageAlt: `Photo: your team on an urgent job`,
            },
            {
              tag: `Boilers`,
              icon: `flame`,
              title: `Headline for service two`,
              description: `Short description of this service: what you supply and install, who does the work and what is included.`,
              note: `Short note about the warranty`,
              imageSrc: `assets/media/image-03-1600.webp`,
              imageAlt: `Photo: your team servicing equipment`,
            },
            {
              tag: `Bathrooms`,
              icon: `bath`,
              title: `Headline for service three`,
              description: `Short description of this service: everything one team handles, with one contact and one price from start to end.`,
              note: `One short line about this service`,
              imageSrc: `assets/media/image-12-1600.webp`,
              imageAlt: `Photo: your team on an installation`,
            },
            {
              tag: `Leaks and drains`,
              icon: `droplets`,
              title: `Headline for your fourth service`,
              description: `Short description of this service: the tools and methods you use to find the problem before any work begins.`,
              note: `Short extra you include`,
              imageSrc: `assets/media/image-11-1600.webp`,
              imageAlt: `Photo: your team doing a repair`,
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `process`,
        "data-section": `process`,
        "data-tone": `deep`,
        children: (0, p.jsx)(c, {
          className: `bg-transparent`,
          tag: `How it works`,
          title: `From first call to job done`,
          description: `No waiting in for a vague slot and no surprise bill at the end.`,
          items: [
            {
              title: `Book online or call`,
              description: `Tell us what is wrong and get an arrival time in minutes.`,
              imageSrc: `assets/media/image-10-1600.webp`,
              imageAlt: `Photo: step one, talking with the client`,
            },
            {
              title: `Fixed price on arrival`,
              description: `Your engineer checks the job and agrees the price before starting.`,
              imageSrc: `assets/media/image-05-1600.webp`,
              imageAlt: `Photo: step two, agreeing the price on site`,
            },
            {
              title: `Fixed and tidied`,
              description: `We clean up, test everything and guarantee the work for a year.`,
              imageSrc: `assets/media/image-09-1600.webp`,
              imageAlt: `Photo: step three, the finished job`,
            },
          ],
          cta: { text: `Book a plumber`, href: `#contact` },
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, p.jsx)(d, {
          tag: `Prices`,
          title: `Fair prices,`,
          highlight: `agreed upfront`,
          description: `No call-out fee. You always know the price before we pick up a tool.`,
          items: [
            {
              name: `Repairs`,
              description: `Leaks, taps, toilets and radiators.`,
              price: `$00`,
              period: `first hour, then $00 per half hour`,
              features: [
                `No call-out fee`,
                `Price agreed before work`,
                `Common parts on the van`,
                `12 month guarantee`,
              ],
              cta: { text: `Book a repair`, href: `#contact` },
            },
            {
              name: `Boiler service`,
              description: `A yearly check to keep it safe and in warranty.`,
              price: `$00`,
              period: `per visit`,
              features: [
                `Full safety check`,
                `Flue and pressure test`,
                `Service record for your warranty`,
                `Same week appointments`,
              ],
              cta: { text: `Book a service`, href: `#contact` },
            },
            {
              name: `Boiler cover`,
              description: `Service and repairs for one monthly price.`,
              price: `$00`,
              period: `per month`,
              features: [
                `Annual boiler service`,
                `Unlimited repair call-outs`,
                `Parts and labour included`,
                `Priority booking`,
              ],
              cta: { text: `Get covered`, href: `#contact` },
            },
          ],
          enterprise: {
            label: `Landlords`,
            title: `Looking after rental homes?`,
            description: `Safety checks, repairs and one monthly invoice for every property you manage.`,
            cta: { text: `Get landlord rates`, href: `#contact` },
          },
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `reviews`,
        "data-section": `testimonial`,
        children: (0, p.jsx)(f, {
          tag: `Reviews`,
          title: `What our customers say`,
          items: [
            {
              company: `City`,
              quote: `A short client review about an urgent problem, how fast your team arrived and how quickly it was solved.`,
              name: `Full Name`,
              role: `Homeowner`,
              imageSrc: `assets/media/image-14-1600.webp`,
              stats: [
                { label: `Arrived in`, value: `30 minutes` },
                { label: `Ceiling saved`, value: `Yes` },
              ],
            },
            {
              company: `City`,
              quote: `A short client review about why they chose you over other quotes and how clean and quick the work was.`,
              name: `Full Name`,
              role: `Homeowner`,
              imageSrc: `assets/media/image-01-1600.webp`,
              stats: [
                { label: `Boiler fitted`, value: `In one day` },
                { label: `Energy bill`, value: `Down 20%` },
              ],
            },
            {
              company: `Company Name`,
              quote: `A short review from a business client about trusting you with many properties and how well you report on every job.`,
              name: `Full Name`,
              role: `Lettings director`,
              imageSrc: `assets/media/image-06-1600.webp`,
              stats: [
                { label: `Properties`, value: `10 units` },
                { label: `Missed certificates`, value: `None` },
              ],
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        "data-section": `faq`,
        children: (0, p.jsx)(o, {
          tag: `FAQ`,
          title: `We have`,
          highlight: `the answers`,
          items: [
            {
              title: `Do you charge a call-out fee?`,
              description: `Answer explaining how you charge: what the client pays for, the starting price and when the price is agreed.`,
            },
            {
              title: `Are your engineers licensed?`,
              description: `Answer describing the licences or registrations your team holds and how clients can check them before the visit.`,
            },
            {
              title: `How fast can you get to me?`,
              description: `Answer with your response time for emergencies and the area you cover, day or night. Add how soon other jobs are usually booked.`,
            },
            {
              title: `Do you guarantee your work?`,
              description: `Answer describing the guarantee on your work, what it covers and how long it lasts. Mention any extra warranty on new installs.`,
            },
            {
              title: `Can you deal with my insurer?`,
              description: `Yes. We write up leak and damage reports with photos that insurers accept, and can bill them directly for approved claims.`,
            },
          ],
          help: {
            label: `Emergency`,
            title: `Water where it should not be?`,
            description: `Turn off the stopcock and call us. An engineer is on the road day and night.`,
            cta: { text: `Call +00 000 000 0000`, href: `tel:+000000000000` },
            imageSrc: `assets/media/image-13-1600.webp`,
            imageAlt: `Photo: your engineer on an emergency call`,
          },
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, p.jsx)(a, {
          title: `Book a plumber today`,
          formTitle: `Tell us what needs fixing`,
          fields: { company: `Postal code`, message: `What is the problem?` },
          placeholders: {
            name: `Your name`,
            email: `you@email.com`,
            company: `00000`,
            message: `A leak under the kitchen sink, dripping since this morning.`,
          },
          submitText: `Request a visit`,
          successText: `Thanks. We will call you within 15 minutes.`,
          imageSrc: `assets/media/image-02-1600.webp`,
          imageAlt: `Photo: your team ready to help`,
        }),
      }),
      (0, p.jsx)(`div`, {
        "data-section": `footer`,
        children: (0, p.jsx)(l, {
          brand: `Your Brand`,
          wordmark: `Your Brand.`,
          columns: [
            {
              title: `Services`,
              links: [
                { text: `Emergency repairs`, href: `#services` },
                { text: `Boilers`, href: `#services` },
                { text: `Bathrooms`, href: `#services` },
                { text: `Prices`, href: `#pricing` },
              ],
            },
            {
              title: `Company`,
              links: [
                { text: `How it works`, href: `#process` },
                { text: `Reviews`, href: `#reviews` },
                { text: `Landlords`, href: `#pricing` },
              ],
            },
            {
              title: `Contact`,
              links: [
                { text: `+00 000 000 0000`, href: `tel:+000000000000` },
                { text: `Email us`, href: `mailto:hello@example.com` },
                { text: `Privacy`, href: `#` },
              ],
            },
          ],
          copyright: `© 20XX Your Brand.`,
        }),
      }),
    ],
  });
}
export { m as default };
