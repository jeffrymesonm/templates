import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./ContourLinesBackground-BOew0Gfu.js";
import { t as n } from "./SmoothScroll-ChrUt1wD.js";
import r from "./LoaderMonogramDraw-BnVU9I9-.js";
import i from "./NavbarMonogramSilver-kT9Pciqs.js";
import a from "./AboutTwoVoiceStatement-CNb24HxB.js";
import o from "./ContactFormPortrait-CfMkRKM4.js";
import s from "./FaqTwoVoiceAccordion-CJ2PD_wh.js";
import c from "./ProcessTwoVoiceSteps-Dn0GyCfX.js";
import l from "./ServicesSplitCoverSlide-FTi_1gT6.js";
import u from "./FooterTabPanel-Bxn-jnai.js";
import d from "./HeroShrinkSignedCard-DX6NWnVR.js";
import f from "./TestimonialFanStack-DwmhSDtl.js";
/* empty css              */ var p = e(),
  m = 2.6;
function h() {
  return (0, p.jsxs)(`main`, {
    "data-button": `silver`,
    "data-card": `filled`,
    "data-pattern": `contour`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, p.jsx)(n, {}),
      (0, p.jsx)(`div`, {
        className: `kit-pattern`,
        "aria-hidden": `true`,
        children: (0, p.jsx)(t, { className: `text-foreground/8` }),
      }),
      (0, p.jsx)(r, { label: `Your Brand`, onComplete: () => {} }),
      (0, p.jsx)(i, {
        brand: `Your Brand`,
        navItems: [
          { name: `Practice areas`, href: `#services` },
          { name: `How we work`, href: `#process` },
          { name: `Clients`, href: `#testimonial` },
          { name: `Contact`, href: `#contact` },
        ],
        primaryButton: { text: `Book a consultation`, href: `#contact` },
        contact: [
          { label: `hello@example.com`, href: `mailto:hello@example.com` },
          { label: `+00 000 000 0000`, href: `tel:+000000000000` },
          { label: `123 Example Street, City`, href: `#contact` },
        ],
      }),
      (0, p.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        "data-scene": !0,
        children: (0, p.jsx)(d, {
          introDelay: m,
          eyebrow: `Your practice areas, City`,
          title: `Full Name`,
          serifTitle: `Founding attorney`,
          primaryButton: { text: `Book a consultation`, href: `#contact` },
          secondaryButton: { text: `Practice areas`, href: `#services` },
          imageSrc: `assets/media/image-11-1600.webp`,
          imageAlt: `Hero image: portrait of the founding attorney`,
          marquee: [`Short line about your experience`, `Short line about your personal care`],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, p.jsx)(a, {
          monogram: `YB`,
          label: `A note from the founder`,
          text: `Write one short promise to your clients, in your own words, and keep it.`,
          serifWords: [`promise`, `words`],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        "data-scene": !0,
        children: (0, p.jsx)(l, {
          items: [
            {
              serif: `For`,
              title: `Families`,
              description: `Short description of this practice area and the cases you take on.`,
              imageSrc: `assets/media/image-10-1600.webp`,
              imageAlt: `Practice area image: the attorney for this area`,
              href: `#contact`,
              linkText: `Book a call`,
            },
            {
              serif: `Your`,
              title: `Estate`,
              description: `Short description of this practice area, in plain words, and what the client gets.`,
              imageSrc: `assets/media/image-09-1600.webp`,
              imageAlt: `Practice area image: the attorney for this area`,
              href: `#contact`,
              linkText: `Book a call`,
            },
            {
              serif: `Your`,
              title: `Business`,
              description: `Short description of this practice area and the kind of clients it is for.`,
              imageSrc: `assets/media/image-01-1600.webp`,
              imageAlt: `Practice area image: the attorney for this area`,
              href: `#contact`,
              linkText: `Book a call`,
            },
            {
              serif: `Your`,
              title: `Property`,
              description: `Short description of this practice area, from the first step to the last.`,
              imageSrc: `assets/media/image-12-1600.webp`,
              imageAlt: `Practice area image: the attorney for this area`,
              href: `#contact`,
              linkText: `Book a call`,
            },
          ],
          coverImageSrc: `assets/media/image-14-1600.webp`,
          coverImageAlt: `Cover image: your team in the office`,
          caption: `City office, 20XX`,
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `process`,
        "data-section": `process`,
        children: (0, p.jsx)(c, {
          title: `How we`,
          serifTitle: `Take a case`,
          description: `Short line on how you guide clients from the first call to the end, and how they always know what comes next.`,
          items: [
            {
              title: `Listen`,
              description: `Step one: the first call, how long it lasts and what you ask.`,
            },
            {
              title: `Advise`,
              description: `Step two: the written plan, the options and the agreed fee.`,
            },
            {
              title: `Act`,
              description: `Step three: the work you do on the case and how often you report back.`,
            },
            {
              title: `Resolve`,
              description: `Step four: how the case closes and what the client receives at the end.`,
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `testimonial`,
        "data-section": `testimonial`,
        children: (0, p.jsx)(f, {
          monogram: `Your Brand`,
          heavyTitle: `Clients`,
          serifTitle: `In their words`,
          items: [
            {
              quote: `A client quote about how you handled a difficult personal case with care and kept it simple.`,
              name: `Full Name`,
              role: `Client type`,
              imageSrc: `assets/media/image-05-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `A client quote about a business problem you solved quickly and well.`,
              name: `Full Name`,
              role: `Owner, Company Name`,
              imageSrc: `assets/media/image-06-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `A client quote about a complicated matter you sorted out without stress or conflict.`,
              name: `Full Name`,
              role: `Client type`,
              imageSrc: `assets/media/image-04-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `A client quote about clear fees, regular updates and advice they finally understood.`,
              name: `Full Name`,
              role: `Owner, Company Name`,
              imageSrc: `assets/media/image-08-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `A client quote about the moment they knew they had chosen the right lawyer.`,
              name: `Full Name`,
              role: `Client type`,
              imageSrc: `assets/media/image-03-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `A client quote about a simple, quick process explained in words they understood.`,
              name: `Full Name`,
              role: `Client type`,
              imageSrc: `assets/media/image-02-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `A client quote about the ongoing value of your advice for their business.`,
              name: `Full Name`,
              role: `Director, Company Name`,
              imageSrc: `assets/media/image-07-1600.webp`,
              imageAlt: `Client portrait`,
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, p.jsx)(s, {
          titleHeavy: `Questions`,
          titleSerif: `Answered`,
          description: `What clients usually ask before their first meeting with Your Brand.`,
          linkText: `Ask us directly`,
          linkHref: `#contact`,
          items: [
            {
              title: `Is the first consultation free?`,
              description: `Answer saying whether the first call is free, how long it lasts and what the client can expect from it.`,
            },
            {
              title: `How do your fees work?`,
              description: `Answer explaining fixed fees and hourly rates, with example prices such as $00 for a common service and $00 per hour, and any monthly cap.`,
            },
            {
              title: `Will my case go to court?`,
              description: `Answer explaining how often cases settle through negotiation or mediation, and who represents the client if court is needed.`,
            },
            {
              title: `Who will handle my case?`,
              description: `Answer naming the role of the person who handles each case from start to finish and how clients can reach them.`,
            },
            {
              title: `How quickly can you start?`,
              description: `Answer with your usual start time and how you handle urgent deadlines.`,
            },
            {
              title: `Do you offer payment plans?`,
              description: `Answer describing your payment plans and the payment methods you accept.`,
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, p.jsx)(o, {
          heavyTitle: `Free`,
          serifTitle: `Consultation`,
          description: `Short line inviting visitors to describe their case. Say how fast you call back and that it stays confidential.`,
          fields: [
            { name: `name`, label: `Name`, required: !0 },
            { name: `email`, label: `Email`, type: `email`, required: !0 },
            { name: `phone`, label: `Phone`, type: `tel` },
            { name: `message`, label: `What do you need help with?`, type: `textarea`, required: !0 },
          ],
          submitText: `Request a call`,
          successText: `Thank you. An attorney will call you within one working day.`,
          imageSrc: `assets/media/image-15-1600.webp`,
          imageAlt: `Contact image: portrait of a partner`,
          name: `Full Name`,
          role: `Partner, practice area`,
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        children: (0, p.jsx)(u, {
          titleHeavy: `Plain advice,`,
          titleSerif: `fair fees.`,
          imageSrc: `assets/media/image-12-1600.webp`,
          imageAlt: `Footer image: portrait of the founder`,
          pagesTitle: `Pages`,
          pages: [
            { label: `Home`, href: `#` },
            { label: `Practice areas`, href: `#services` },
            { label: `How we work`, href: `#process` },
            { label: `Contact`, href: `#contact` },
          ],
          socialsTitle: `Follow us`,
          socials: [
            { label: `LinkedIn`, href: `#` },
            { label: `Facebook`, href: `#` },
            { label: `Reviews`, href: `#` },
          ],
          buttonText: `Book a consultation`,
          buttonHref: `#contact`,
          legal: [
            { label: `Privacy policy`, href: `#` },
            { label: `Attorney disclaimer`, href: `#` },
          ],
        }),
      }),
    ],
  });
}
export { h as default };
