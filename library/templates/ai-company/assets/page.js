import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./ParticleDriftStage-DuKVHa42.js";
import r from "./LoaderParticleCount-BRpLjSra.js";
import i from "./NavbarDrift-SdOk9Vxx.js";
import a from "./AboutParticleShape-CBKOW5O7.js";
import o from "./ContactInlineField-CO6p2ACE.js";
import s from "./FaqPaperAccordion-CfanEbn7.js";
import c from "./ProcessFillSteps-B_klCFdq.js";
import l from "./ServicesTiltCards-3rbCEivg.js";
import u from "./FooterDrift-DEIZXXp4.js";
import d from "./HeroDrift-BG7MkAnb.js";
import f from "./MetricsRuledCounters-K0NKJYmY.js";
import p from "./PricingGlassTiers-BI2aSvJS.js";
import m from "./TestimonialPaperCarousel-CosUEw6G.js";
/* empty css               */ var h = e(),
  g = 1.4;
function _() {
  return (0, h.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `filled`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip text-foreground`,
    children: [
      (0, h.jsx)(t, {}),
      (0, h.jsx)(n, { variant: `signal` }),
      (0, h.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, h.jsx)(r, { brand: `Your Brand`, introDelay: g }),
      (0, h.jsx)(i, {
        brand: `Your Brand`,
        navItems: [
          { name: `Product`, href: `#product` },
          { name: `How it works`, href: `#process` },
          { name: `Customers`, href: `#testimonial` },
          { name: `Pricing`, href: `#pricing` },
        ],
        primaryButton: { text: `Book a demo`, href: `#contact` },
      }),
      (0, h.jsx)(`div`, {
        id: `home`,
        "data-section": `hero`,
        children: (0, h.jsx)(d, {
          title: `AI agents for customer support`,
          description: `Short description of your product: what it does for the customer, which tasks it takes over and when it hands work back to people.`,
          tags: [`Live in two weeks`, `Secure by design`, `40+ languages`],
          primaryButton: { text: `Book a demo`, href: `#contact` },
          introDelay: g,
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `product`,
        "data-section": `features`,
        children: (0, h.jsx)(l, {
          tag: `Product`,
          title: `One agent, every channel`,
          items: [
            {
              title: `Answers in seconds`,
              description: `Replies to chat, email and voice from your help centre, policies and past tickets.`,
              imageSrc: `assets/media/image-07-1600.webp`,
              imageAlt: `Feature image: your product in use`,
              href: `#process`,
              linkText: `How it works`,
            },
            {
              title: `Actions, not just replies`,
              description: `Issues refunds, changes orders and updates accounts in the systems you already use.`,
              imageSrc: `assets/media/image-01-1600.webp`,
              imageAlt: `Feature image: your product in use`,
              href: `#process`,
              linkText: `How it works`,
            },
            {
              title: `Clean handoffs`,
              description: `Passes tricky cases to a person with the full history and a suggested reply.`,
              imageSrc: `assets/media/image-08-1600.webp`,
              imageAlt: `Feature image: your product in use`,
              href: `#process`,
              linkText: `How it works`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `process`,
        "data-section": `process`,
        children: (0, h.jsx)(c, {
          tag: `How it works`,
          title: `From help centre to live agent`,
          items: [
            {
              title: `Connect`,
              description: `Link your help desk, help centre and order system. Most teams finish in an afternoon.`,
            },
            {
              title: `Train`,
              description: `The agent learns from your articles, macros and a year of resolved tickets.`,
            },
            {
              title: `Test`,
              description: `Replay thousands of past tickets and review every answer before a customer sees one.`,
            },
            {
              title: `Go live`,
              description: `Start on one channel, watch the results, then switch on the rest when you are ready.`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `model`,
        "data-section": `about`,
        children: (0, h.jsx)(a, {
          title: `Knows your business`,
          description: `Every answer comes from your own content and policies, and links back to the source so your team can check it.`,
          note: `Your data is never used to train shared models.`,
          hint: `Move across it`,
          touchHint: `Drag across it`,
          primaryButton: { text: `Book a demo`, href: `#contact` },
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `results`,
        "data-section": `metrics`,
        children: (0, h.jsx)(f, {
          tag: `Results`,
          title: `What customers see in month one`,
          items: [
            { value: `70%`, label: `Tickets fully resolved` },
            { value: `10s`, label: `Median first reply` },
            { value: `4.9`, label: `Average customer rating` },
            { value: `24/7`, label: `Coverage, every channel` },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `testimonial`,
        "data-section": `testimonial`,
        children: (0, h.jsx)(m, {
          tag: `Customers`,
          title: `Teams that answer faster`,
          items: [
            {
              quote: `Our backlog was gone in the first week. The team now spends its time on the customers who really need a person.`,
              name: `Full Name`,
              role: `Head of Support, Company Name`,
              imageSrc: `assets/media/image-05-1600.webp`,
              imageAlt: `Customer portrait`,
            },
            {
              quote: `It handles refunds and address changes end to end, and every action is logged so finance can check it.`,
              name: `Full Name`,
              role: `COO, Company Name`,
              imageSrc: `assets/media/image-06-1600.webp`,
              imageAlt: `Customer portrait`,
            },
            {
              quote: `We tested it on ten thousand old tickets before launch, so there were no surprises on day one.`,
              name: `Full Name`,
              role: `Support Ops Lead, Company Name`,
              imageSrc: `assets/media/image-02-1600.webp`,
              imageAlt: `Customer portrait`,
            },
            {
              quote: `Customers get an answer at 3am in their own language. Our ratings went up in the first month.`,
              name: `Full Name`,
              role: `VP Customer, Company Name`,
              imageSrc: `assets/media/image-03-1600.webp`,
              imageAlt: `Customer portrait`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, h.jsx)(p, {
          tag: `Pricing`,
          title: `Pay for resolved conversations`,
          items: [
            {
              title: `Starter`,
              price: `$00`,
              period: `per month`,
              description: `For small teams starting with chat and email.`,
              features: [`500 resolutions included`, `Chat and email`, `Help desk integration`],
              button: { text: `Start trial`, href: `#contact` },
            },
            {
              title: `Growth`,
              price: `$00`,
              period: `per month`,
              description: `For growing teams that want actions and every channel.`,
              features: [`2,500 resolutions included`, `Chat, email and voice`, `Refunds and order actions`],
              button: { text: `Start trial`, href: `#contact` },
            },
            {
              title: `Enterprise`,
              price: `Custom`,
              period: `per year`,
              description: `For large teams with custom systems and security needs.`,
              features: [`Volume pricing`, `SSO and audit logs`, `Named support engineer`],
              button: { text: `Talk to sales`, href: `#contact` },
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, h.jsx)(s, {
          title: `Questions teams ask`,
          items: [
            {
              title: `Which help desks does it work with?`,
              description: `The most common help desks and CRMs out of the box, plus any other tool with an API.`,
            },
            {
              title: `What happens when it does not know?`,
              description: `It says so and hands the conversation to your team, with the full history and a suggested reply.`,
            },
            {
              title: `Is our data safe?`,
              description: `Yes. Data is encrypted in transit and at rest, access is logged and audited, and it is never used to train shared models.`,
            },
            {
              title: `How long does setup take?`,
              description: `Most teams connect in an afternoon and go live within two weeks, after testing on their own past tickets.`,
            },
            {
              title: `What counts as a resolution?`,
              description: `A conversation the customer closes without asking for a person. Handoffs are never billed.`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, h.jsx)(o, {
          title: `See it on your tickets.`,
          namePlaceholder: `Name`,
          emailPlaceholder: `Work email`,
          buttonText: `Book a demo`,
          successText: `Thanks, we will send demo times within a day.`,
          errorText: `Add a work email so we can reply.`,
        }),
      }),
      (0, h.jsx)(`div`, {
        "data-section": `footer`,
        children: (0, h.jsx)(u, {
          brand: `Your Brand`,
          note: `AI agents that resolve customer support tickets across chat, email and voice.`,
          columns: [
            {
              title: `Product`,
              links: [
                { text: `Overview`, href: `#product` },
                { text: `How it works`, href: `#process` },
                { text: `Results`, href: `#results` },
                { text: `Pricing`, href: `#pricing` },
              ],
            },
            {
              title: `Company`,
              links: [
                { text: `Customers`, href: `#testimonial` },
                { text: `FAQ`, href: `#faq` },
                { text: `Contact`, href: `#contact` },
              ],
            },
            {
              title: `Follow`,
              links: [
                { text: `LinkedIn`, href: `#` },
                { text: `X`, href: `#` },
                { text: `GitHub`, href: `#` },
              ],
            },
          ],
          copyright: `© 20XX Your Brand`,
        }),
      }),
    ],
  });
}
export { _ as default };
