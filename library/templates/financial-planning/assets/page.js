import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./LoaderFrameDraw-CU-IUmSp.js";
import r from "./NavbarSplitLinks-Dp7D0sU_.js";
import i from "./AboutParticleRow-DYfxFSg3.js";
import a from "./ContactSplitCell-DdZZim7L.js";
import o from "./FaqCellRows-DUhZDAS9.js";
import s from "./ServicesDotCells-BlXxUyHv.js";
import c from "./FooterDashedColumns-CsEETE82.js";
import l from "./GalleryHalftoneRail-DOh05WsN.js";
import u from "./HeroDotField-D8NDrYfZ.js";
import d from "./PricingTiltColumns-D0LZkHoH.js";
/* empty css              */ var f = e(),
  p = 1;
function m() {
  return (0, f.jsxs)(`main`, {
    "data-particles": `finance`,
    "data-button": `default`,
    "data-card": `filled`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, f.jsx)(t, {}),
      (0, f.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, f.jsx)(n, { introDelay: p }),
      (0, f.jsx)(r, {
        brand: `Your Brand`,
        navItems: [
          { name: `Services`, href: `#services` },
          { name: `About`, href: `#about` },
          { name: `Fees`, href: `#pricing` },
          { name: `FAQ`, href: `#faq` },
        ],
        secondaryButton: { text: `Contact`, href: `#contact` },
        primaryButton: { text: `Book a call`, href: `#contact` },
      }),
      (0, f.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        "data-scene": !0,
        children: (0, f.jsx)(u, {
          tag: { text: `Short tag for your offer`, href: `#services` },
          title: `Your main promise here.`,
          description: `Short description of what you do, who it is for and why they should choose you.`,
          primaryButton: { text: `Book a call`, href: `#contact` },
          secondaryButton: { text: `See our fees`, href: `#pricing` },
          introDelay: p,
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        children: (0, f.jsx)(s, {
          title: `Headline that sums up the services you offer.`,
          items: [
            {
              title: `Financial planning`,
              description: `Short description of this service and the result it gives.`,
              button: { text: `Start a plan`, href: `#contact` },
            },
            {
              title: `Retirement income`,
              description: `Short description of this service and who it is for.`,
              button: { text: `Plan retirement`, href: `#contact` },
            },
            {
              title: `Investment management`,
              description: `Short description of this service and how it works.`,
              button: { text: `See our fees`, href: `#pricing` },
            },
            {
              title: `Tax and estate`,
              description: `Short description of this service and what is included.`,
              button: { text: `Ask us`, href: `#contact` },
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, f.jsx)(i, {
          label: `About us`,
          title: `Headline about who you are.`,
          description: `Two short sentences about your business, your approach and what makes you different from others.`,
          points: [
            `Key fact about your experience`,
            `Key point about your approach`,
            `Key point about your service`,
            `Key point about trust or safety`,
          ],
          items: [
            { title: `Fee only`, description: `Short benefit in one line.`, icon: `lock` },
            {
              title: `Clear reports`,
              description: `Short benefit in one line.`,
              icon: `gauge`,
            },
            { title: `Real people`, description: `Short benefit in one line.`, icon: `bell` },
            { title: `Regulated`, description: `Short benefit in one line.`, icon: `check` },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `gallery`,
        "data-section": `gallery`,
        "data-scene": !0,
        children: (0, f.jsx)(l, {
          label: `Planning sessions`,
          title: `Recent work for clients.`,
          description: `Short description of the clients and projects shown here.`,
          items: [
            {
              title: `Project name, City`,
              imageSrc: `assets/media/image-06-1600.webp`,
              imageAlt: `Gallery image: a client meeting`,
            },
            {
              title: `Project name, City`,
              imageSrc: `assets/media/image-05-1600.webp`,
              imageAlt: `Gallery image: a client meeting`,
            },
            {
              title: `Project name, City`,
              imageSrc: `assets/media/image-08-1600.webp`,
              imageAlt: `Gallery image: a client meeting`,
            },
            {
              title: `Project name, City`,
              imageSrc: `assets/media/image-02-1600.webp`,
              imageAlt: `Gallery image: a client meeting`,
            },
            {
              title: `Project name, City`,
              imageSrc: `assets/media/image-04-1600.webp`,
              imageAlt: `Gallery image: a client meeting`,
            },
            {
              title: `Project name, City`,
              imageSrc: `assets/media/image-01-1600.webp`,
              imageAlt: `Gallery image: a client meeting`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, f.jsx)(d, {
          label: `Fees`,
          title: `Simple, clear pricing.`,
          description: `Short sentence that explains how your pricing works.`,
          items: [
            {
              title: `Plan`,
              description: `Short description of this plan.`,
              price: `$00`,
              period: `/plan`,
              features: [`Feature included`, `Feature included`, `Feature included`],
              button: { text: `Start a plan`, href: `#contact` },
            },
            {
              title: `Ongoing advice`,
              description: `Short description of this plan.`,
              price: `$00`,
              period: `/month`,
              features: [
                `Feature included`,
                `Feature included`,
                `Feature included`,
                `Feature included`,
              ],
              button: { text: `Book a call`, href: `#contact` },
            },
            {
              title: `First call`,
              description: `Short description of this option.`,
              freeLabel: `Free call`,
              features: [`Feature included`, `Feature included`, `Feature included`],
              button: { text: `Book a call`, href: `#contact` },
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, f.jsx)(o, {
          title: `Frequently asked questions.`,
          items: [
            {
              title: `Question your clients often ask?`,
              description: `A clear, short answer to the question. Two sentences are usually enough to remove the doubt.`,
            },
            {
              title: `Question about who your service is for?`,
              description: `A clear, short answer that explains who you work with and any minimum or requirement.`,
            },
            {
              title: `Question about safety?`,
              description: `A clear, short answer that explains how you keep clients safe and what they can expect.`,
            },
            {
              title: `Question about the process?`,
              description: `A clear, short answer that explains how often you meet and how the process works.`,
            },
            {
              title: `Question about working together?`,
              description: `A clear, short answer that explains how you work with other people involved.`,
            },
            {
              title: `Where are you based?`,
              description: `Our office is at 123 Example Street, City. We meet clients in person and anywhere by video.`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, f.jsx)(a, {
          title: `Book a free first call.`,
          submitText: `Send request`,
          successText: `Thanks. We will get back to you within one working day.`,
          imageSrc: `assets/media/image-07-1600.webp`,
          imageAlt: `Contact image: your office or meeting room`,
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        children: (0, f.jsx)(c, {
          brand: `Your Brand`,
          columns: [
            {
              title: `Services`,
              links: [
                { text: `Financial planning`, href: `#services` },
                { text: `Retirement income`, href: `#services` },
                { text: `Investments`, href: `#services` },
              ],
            },
            {
              title: `Firm`,
              links: [
                { text: `About us`, href: `#about` },
                { text: `Fees`, href: `#pricing` },
                { text: `Contact`, href: `#contact` },
              ],
            },
            {
              title: `Help`,
              links: [
                { text: `FAQ`, href: `#faq` },
                { text: `Disclosures`, href: `#` },
                { text: `Privacy`, href: `#` },
              ],
            },
          ],
          copyright: `Copyright © 20XX Your Brand, City.`,
          rights: `All rights reserved.`,
          socials: [
            { icon: `linkedin`, href: `#`, label: `LinkedIn` },
            { icon: `instagram`, href: `#`, label: `Instagram` },
            { icon: `youtube`, href: `#`, label: `YouTube` },
          ],
        }),
      }),
    ],
  });
}
export { m as default };
