import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./LoaderHairlineColumns-BFD_x2da.js";
import r from "./NavbarBoxLinks-CbmjSj7B.js";
import i from "./AboutIntroStatement-fNjH88xs.js";
import a from "./ContactColumnWindow-BMRtRaf6.js";
import o from "./FaqGlyphRows-_7Xmbl_A.js";
import s from "./ServicesIndustryTiles-Ctg_JB7i.js";
import c from "./FooterLimeWordmark-BbGccVKg.js";
import l from "./GalleryProjectTrack-gvk36ugD.js";
import u from "./HeroColumnGrid-DzyW3Lev.js";
import d from "./TestimonialDeepCoverflow-DhklGefR.js";
/* empty css              */ var f = e(),
  p = 1.7;
function m() {
  return (0, f.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `default`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, f.jsx)(t, {}),
      (0, f.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, f.jsx)(n, { brand: `©Your Brand` }),
      (0, f.jsx)(r, {
        brand: `©Your Brand`,
        navItems: [
          { name: `Projects`, href: `#gallery` },
          { name: `Services`, href: `#services` },
          { name: `About`, href: `#about` },
          { name: `FAQ`, href: `#faq` },
        ],
        primaryButton: { text: `Free estimate`, href: `#contact` },
        introDelay: p,
      }),
      (0, f.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        "data-scene": !0,
        children: (0, f.jsx)(u, {
          title: `Headline that states your main promise to clients`,
          description: `Short description of your main services, the area you cover and the reason clients choose you over the rest.`,
          primaryButton: { text: `Book a free estimate`, href: `#contact` },
          imageSrc: `assets/media/image-01-1600.webp`,
          imageAlt: `Hero image: an aerial view of the homes you work on`,
          introDelay: p,
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, f.jsx)(i, {
          label: `About us`,
          title: `Your Brand is a short statement about who you are and where you work. Since 20XX our own crews have finished more than 100 projects, each one left clean the same day.`,
          button: { text: `Our story`, href: `#about` },
          imageSrc: `assets/media/image-03-1600.webp`,
          imageAlt: `About image: a finished project of yours`,
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        children: (0, f.jsx)(s, {
          title: `What we do for your home`,
          linkText: `Get a quote`,
          items: [
            {
              title: `Service one`,
              description: `One line on what this service solves for the client.`,
              facts: [
                `Key detail of this service`,
                `What is included in the price`,
                `Guarantee or warranty offered`,
              ],
              imageSrc: `assets/media/image-05-1600.webp`,
              imageAlt: `Service one image: the result of this service`,
              href: `#contact`,
            },
            {
              title: `Service two`,
              description: `One line on what this service solves for the client.`,
              facts: [`Key detail of this service`, `What the client receives`, `Extra help you include`],
              imageSrc: `assets/media/image-15-1600.webp`,
              imageAlt: `Service two image: your team doing this work`,
              href: `#contact`,
            },
            {
              title: `Service three`,
              description: `One line on what this service solves for the client.`,
              facts: [`Key detail of this service`, `A benefit clients notice`, `Options you offer in stock`],
              imageSrc: `assets/media/image-08-1600.webp`,
              imageAlt: `Service three image: your team doing this work`,
              href: `#contact`,
            },
            {
              title: `Service four`,
              description: `One line on what this service solves for the client.`,
              facts: [`Key detail of this service`, `Add-ons on request`, `How you check the result`],
              imageSrc: `assets/media/image-14-1600.webp`,
              imageAlt: `Service four image: your team doing this work`,
              href: `#contact`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `gallery`,
        "data-section": `gallery`,
        "data-scene": !0,
        children: (0, f.jsx)(l, {
          title: `Recent projects`,
          hoverLabel: `View project`,
          button: { text: `See all`, href: `#gallery` },
          items: [
            {
              title: `Project Name One`,
              imageSrc: `assets/media/image-19-1600.webp`,
              imageAlt: `Project image: a finished job`,
            },
            {
              title: `Project Name Two`,
              imageSrc: `assets/media/image-06-1600.webp`,
              imageAlt: `Project image: a finished job`,
            },
            {
              title: `Project Name Three`,
              imageSrc: `assets/media/image-04-1600.webp`,
              imageAlt: `Project image: a finished job`,
            },
            {
              title: `Project Name Four`,
              imageSrc: `assets/media/image-07-1600.webp`,
              imageAlt: `Project image: your crew at work`,
            },
            {
              title: `Project Name Five`,
              imageSrc: `assets/media/image-02-1600.webp`,
              imageAlt: `Project image: a close-up detail of a job`,
            },
            {
              title: `Project Name Six`,
              imageSrc: `assets/media/image-18-1600.webp`,
              imageAlt: `Project image: a finished job`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `testimonial`,
        "data-section": `testimonial`,
        children: (0, f.jsx)(d, {
          title: `What clients say`,
          description: `Short line introducing your client reviews.`,
          items: [
            {
              name: `Full Name`,
              role: `Client, City`,
              quote: `A client quote about the problem you solved, the price you kept and how you kept them informed.`,
              imageSrc: `assets/media/image-13-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              name: `Full Name`,
              role: `Client, City`,
              quote: `A client quote about how fast the job was done and how clean it was left.`,
              imageSrc: `assets/media/image-16-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              name: `Full Name`,
              role: `Client, City`,
              quote: `A client quote about a hard situation you handled for them from start to finish.`,
              imageSrc: `assets/media/image-11-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              name: `Full Name`,
              role: `Client, City`,
              quote: `A client quote about the quality of the result and why it was worth the money.`,
              imageSrc: `assets/media/image-21-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              name: `Full Name`,
              role: `Client, City`,
              quote: `A client quote about a fair price, a clear contract and a friendly, respectful team.`,
              imageSrc: `assets/media/image-09-1600.webp`,
              imageAlt: `Client portrait`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, f.jsx)(o, {
          label: `FAQ`,
          title: `Questions we hear most`,
          description: `Straight answers on costs, timing and guarantees.`,
          button: { text: `Ask us`, href: `#contact` },
          items: [
            {
              title: `How do I know if I need your service?`,
              description: `Answer listing the usual signs that a client needs your service. Mention what your free estimate checks and when a smaller fix is enough.`,
            },
            {
              title: `How much does it cost?`,
              description: `Answer with a typical price range, for example $00 to $00, and what changes it. Explain that clients get a fixed written price before you start.`,
            },
            {
              title: `How long does a typical job take?`,
              description: `Answer with the usual time for a job and the steps you follow on site, from preparing the area to cleaning up before you leave.`,
            },
            {
              title: `Will insurance cover the work?`,
              description: `Answer explaining when insurance usually pays and how you help with the claim, so the client knows what they will pay.`,
            },
            {
              title: `Do you offer financing?`,
              description: `Answer describing your payment plans, their length and any interest-free option, and how long it takes to apply.`,
            },
            {
              title: `What warranty do I get?`,
              description: `Answer with the warranty on your work and on the materials, how long each lasts and whether it stays with the property.`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, f.jsx)(a, {
          title: `Book your free estimate`,
          submitText: `Request estimate`,
          successText: `Thanks, we will call you within one working day`,
          images: [
            {
              imageSrc: `assets/media/image-10-1600.webp`,
              imageAlt: `Contact image: your team at work`,
            },
            {
              imageSrc: `assets/media/image-20-1600.webp`,
              imageAlt: `Contact image: a detail of your work`,
            },
            {
              imageSrc: `assets/media/image-17-1600.webp`,
              imageAlt: `Contact image: a finished project`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        children: (0, f.jsx)(c, {
          description: `Short closing line inviting visitors to tell you about their project. Say how fast you reply.`,
          primaryButton: { text: `Get a quote`, href: `#contact` },
          columns: [
            {
              title: `Pages`,
              links: [
                { text: `Home`, href: `#` },
                { text: `Projects`, href: `#gallery` },
                { text: `About us`, href: `#about` },
                { text: `Services`, href: `#services` },
                { text: `Careers`, href: `#` },
                { text: `Contact`, href: `#contact` },
              ],
            },
            {
              title: `Social`,
              links: [
                { text: `Instagram`, href: `#` },
                { text: `Facebook`, href: `#` },
                { text: `Reviews`, href: `#` },
              ],
            },
          ],
          wordmark: `©Your Brand`,
          city: `City`,
          timeZone: `UTC`,
          copyright: `©20XX Your Brand, all rights reserved`,
        }),
      }),
    ],
  });
}
export { m as default };
