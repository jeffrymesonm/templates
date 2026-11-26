import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./ModelStage-DrSyAwDN.js";
import r from "./LoaderWordmarkHandoff-CqsTH53i.js";
import i from "./NavbarMenuPill-62h0Xl06.js";
import a from "./FaqHairlineIndex-D9sBn8rA.js";
import o from "./ProcessBentoPanels-BdqfODec.js";
import s from "./FooterWordmarkLanding-C_S49iis.js";
import c from "./GalleryWordPanels-BIz9mvgd.js";
import l from "./HeroShapeSplit-CeRhxUkI.js";
import u from "./MetricsPhotoGrow-Bf15V1Yc.js";
import d from "./PricingScopeColumns-DTKblyoI.js";
import f from "./CtaFloatingScreens-BoT2F2i_.js";
import p from "./TestimonialPortraitQuote-DpX5kBKv.js";
/* empty css               */ var m = e();
function h() {
  return (0, m.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `filled`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, m.jsx)(t, {}),
      (0, m.jsx)(`div`, { className: `kit-ground`, "aria-hidden": `true` }),
      (0, m.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, m.jsx)(n, {
        shape: `frame`,
        fixed: { sm: { y: 0.8, scale: 0.7 }, scroll: { rotate: 540, tilt: 14, scale: 0.08, x: 0.05 } },
        dpr: { lg: 1.5, sm: 1.25 },
      }),
      (0, m.jsx)(r, { brand: `Your Brand` }),
      (0, m.jsx)(i, {
        brand: `Your Brand`,
        navItems: [
          { name: `Features`, href: `#features` },
          { name: `How it works`, href: `#process` },
          { name: `Pricing`, href: `#pricing` },
          { name: `FAQ`, href: `#faq` },
        ],
        contact: { text: `Start free trial`, href: `#pricing` },
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-[45]`,
        id: `hero`,
        "data-section": `hero`,
        children: (0, m.jsx)(l, {
          tag: `00 / Your Brand`,
          title: `Headline that states your main promise`,
          description: `Short description of your product, who it is for and the main result it gives them.`,
          primaryButton: { text: `Start free trial`, href: `#pricing` },
          secondaryButton: { text: `How it works`, href: `#process` },
          scrollLabel: `Scroll to explore`,
          introDelay: 1.7,
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-[45]`,
        id: `features`,
        "data-section": `features`,
        "data-scene": !0,
        children: (0, m.jsx)(c, {
          label: `01 / Features`,
          title: `Everything your team needs.`,
          items: [
            {
              title: `Inbox`,
              category: `Shared inbox`,
              description: `Email, chat and calls land in one queue, each ticket assigned to the right person.`,
              imageSrc: `assets/media/image-07-1600.webp`,
              imageAlt: `Feature one image: your product in use`,
            },
            {
              title: `Routing`,
              category: `Smart routing`,
              description: `Tickets go to the right team by topic, language or customer plan, with no manual sorting.`,
              imageSrc: `assets/media/image-16-1600.webp`,
              imageAlt: `Feature two image: your product in use`,
            },
            {
              title: `Replies`,
              category: `Saved replies`,
              description: `Answer common questions in one click, then edit before you send.`,
              imageSrc: `assets/media/image-08-1600.webp`,
              imageAlt: `Feature three image: your product in use`,
            },
            {
              title: `Articles`,
              category: `Help center`,
              description: `Publish answers customers can find on their own, day or night.`,
              imageSrc: `assets/media/image-01-1600.webp`,
              imageAlt: `Feature four image: your product in use`,
            },
            {
              title: `Reports`,
              category: `Team reports`,
              description: `See response times, volume and satisfaction by team, week by week.`,
              imageSrc: `assets/media/image-14-1600.webp`,
              imageAlt: `Feature five image: your product in use`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-[45]`,
        id: `process`,
        "data-section": `process`,
        children: (0, m.jsx)(o, {
          tag: `02 / How it works`,
          title: `Live in one afternoon.`,
          description: `Four steps from signup to your first answered ticket.`,
          items: [
            {
              title: `Connect channels`,
              description: `Link your support email, website chat and phone line in a few clicks.`,
            },
            {
              title: `Invite your team`,
              description: `Add agents, set up teams and choose who handles what.`,
            },
            {
              title: `Set your rules`,
              description: `Route tickets by topic and set reply targets for each plan.`,
            },
            {
              title: `Start answering`,
              description: `Reply from one inbox and watch response times drop from day one.`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-[45]`,
        id: `metrics`,
        "data-section": `metrics`,
        children: (0, m.jsx)(u, {
          tag: `03 / Results`,
          title: `Faster answers, happier customers.`,
          imageSrc: `assets/media/image-04-1600.webp`,
          imageAlt: `Results image: a team using your product`,
          items: [
            { value: 1000, suffix: `+`, label: `Support teams` },
            { value: 40, suffix: `%`, label: `Faster first reply` },
            { value: 95, suffix: `%`, label: `Customer satisfaction` },
            { value: 10, suffix: `M`, label: `Tickets each month` },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-[45]`,
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, m.jsx)(d, {
          tag: `04 / Pricing`,
          title: `Simple plans. Monthly billing.`,
          description: `Every plan includes a 14 day free trial. Change or cancel any time.`,
          items: [
            {
              title: `Starter`,
              description: `For small teams answering their first tickets.`,
              price: `$00`,
              period: `Per agent / month`,
              specs: [
                { label: `Channels`, value: `Email and chat` },
                { label: `Team`, value: `Up to 5 agents` },
                { label: `Reports`, value: `Core reports` },
                { label: `Support`, value: `Email support` },
              ],
              button: { text: `Start free trial`, href: `#cta` },
            },
            {
              title: `Growth`,
              description: `For growing teams with more channels and rules.`,
              price: `$00`,
              period: `Per agent / month`,
              specs: [
                { label: `Channels`, value: `Email, chat and phone` },
                { label: `Team`, value: `Up to 50 agents` },
                { label: `Reports`, value: `Custom dashboards` },
                { label: `Support`, value: `Live chat support` },
              ],
              button: { text: `Start free trial`, href: `#cta` },
            },
            {
              title: `Scale`,
              description: `For larger teams that need control and security.`,
              price: `$00`,
              period: `Per agent / month`,
              specs: [
                { label: `Channels`, value: `Every channel` },
                { label: `Team`, value: `Unlimited agents` },
                { label: `Reports`, value: `Custom reports and API` },
                { label: `Support`, value: `Named success manager` },
              ],
              button: { text: `Talk to sales`, href: `mailto:hello@example.com` },
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-[45]`,
        id: `testimonial`,
        "data-section": `testimonial`,
        children: (0, m.jsx)(p, {
          label: `05 / Customers`,
          title: `Teams that switched.`,
          items: [
            {
              quote: `A short quote from a happy customer about the problem they had, how your product solved it and the result they saw after switching.`,
              name: `Full Name`,
              role: `Role, Company Name`,
              imageSrc: `assets/media/image-13-1600.webp`,
              imageAlt: `Customer portrait`,
            },
            {
              quote: `A second customer quote that highlights one feature they rely on every day and the time or money it saves their team each week.`,
              name: `Full Name`,
              role: `Role, Company Name`,
              imageSrc: `assets/media/image-15-1600.webp`,
              imageAlt: `Customer portrait`,
            },
            {
              quote: `A third customer quote with a concrete, measurable outcome, such as faster replies, fewer errors or a higher score after the first month.`,
              name: `Full Name`,
              role: `Role, Company Name`,
              imageSrc: `assets/media/image-05-1600.webp`,
              imageAlt: `Customer portrait`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-[45]`,
        id: `faq`,
        "data-section": `faq`,
        children: (0, m.jsx)(a, {
          tag: `06 / Questions`,
          title: `Good to know.`,
          items: [
            {
              title: `Is there a free trial?`,
              description: `Yes. Every plan starts with 14 days free and no card needed. Your tickets and settings stay when you upgrade.`,
            },
            {
              title: `Can we import our old tickets?`,
              description: `Yes. Bring tickets, contacts and saved replies from most help desks in a few minutes, or let our team move them for you.`,
            },
            {
              title: `Which channels do you support?`,
              description: `Email and website chat on every plan, plus phone and social messages on Growth and Scale. Anything else connects through our open API.`,
            },
            {
              title: `Is our data secure?`,
              description: `Data is encrypted in transit and at rest, stored in the EU or US, and access is logged for every agent.`,
            },
            {
              title: `Can we change plans later?`,
              description: `Yes. Move up or down any time, and billing adjusts on your next monthly invoice.`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-[45]`,
        id: `cta`,
        "data-section": `cta`,
        children: (0, m.jsx)(f, {
          tag: `07 / Get started`,
          title: `Give your team a calmer inbox.`,
          word: `Calm`,
          primaryButton: { text: `Start free trial`, href: `#pricing` },
          secondaryButton: { text: `Book a demo`, href: `mailto:hello@example.com` },
          items: [
            {
              imageSrc: `assets/media/image-10-1600.webp`,
              imageAlt: `Screen image one: your product interface`,
            },
            {
              imageSrc: `assets/media/image-17-1600.webp`,
              imageAlt: `Screen image two: your team at work`,
            },
            {
              imageSrc: `assets/media/image-02-1600.webp`,
              imageAlt: `Screen image three: your team at work`,
            },
            {
              imageSrc: `assets/media/image-09-1600.webp`,
              imageAlt: `Screen image four: your team at work`,
            },
            {
              imageSrc: `assets/media/image-12-1600.webp`,
              imageAlt: `Screen image five: your office`,
            },
            {
              imageSrc: `assets/media/image-06-1600.webp`,
              imageAlt: `Screen image six: your team at work`,
            },
            {
              imageSrc: `assets/media/image-03-1600.webp`,
              imageAlt: `Screen image seven: your team at work`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        className: `relative z-[45]`,
        id: `footer`,
        "data-section": `footer`,
        children: (0, m.jsx)(s, {
          brand: `Your Brand`,
          links: [
            { text: `Status`, href: `#` },
            { text: `Privacy`, href: `#` },
            { text: `Terms`, href: `#` },
          ],
          tagline: `Your short tagline goes here.`,
          copyright: `© Your Brand 20XX`,
        }),
      }),
    ],
  });
}
export { h as default };
