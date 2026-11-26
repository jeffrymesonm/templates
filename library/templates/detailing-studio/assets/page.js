import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import n from "./NavbarLinksStatic-C4yNCJ9R.js";
import r from "./ContactOverlayEmail-Bwy1WoEp.js";
import i from "./FaqSimpleSecondary-CnL18asy.js";
import a from "./FeaturesResultsComparison-BZzW-U2w.js";
import o from "./FeaturesVideoHotspots-C8OYxAJH.js";
import s from "./FooterBrandRevealSquare-DFxZinwR.js";
import c from "./HeroVideoScrollBillboard-KTHmv-lX.js";
import l from "./StatementPanelReveal-BdlUQXaX.js";
/* empty css               */ var u = e();
function d() {
  return (0, u.jsxs)(t, {
    root: !0,
    children: [
      (0, u.jsx)(n, {
        logo: `Your Brand`,
        navItems: [
          { name: `About`, href: `#about` },
          { name: `Services`, href: `#services` },
          { name: `Results`, href: `#results` },
          { name: `FAQ`, href: `#faq` },
          { name: `Contact`, href: `#contact` },
        ],
      }),
      (0, u.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        children: (0, u.jsx)(c, {
          textAnimation: `fade`,
          logo: `Your Brand`,
          videoSrc: `assets/media/video-02.mp4`,
          tag: `Trusted by 100+ happy clients`,
          avatarsSrc: [
            `assets/media/image-12-1600.webp`,
            `assets/media/image-13-1600.webp`,
            `assets/media/image-14-1600.webp`,
          ],
          title: `Headline That States Your Promise`,
          primaryButton: { text: `Book a Detail`, href: `#contact` },
          secondaryButton: { text: `Our Services`, href: `#services` },
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        className: `relative z-10 -mt-[calc(100svh+5rem)]`,
        children: (0, u.jsx)(l, {
          statement: `A short statement about why you exist.`,
          items: [
            { imageSrc: `assets/media/image-01-1600.webp` },
            { imageSrc: `assets/media/image-03-1600.webp` },
            { imageSrc: `assets/media/image-02-1600.webp` },
            { imageSrc: `assets/media/image-04-1600.webp` },
          ],
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        children: (0, u.jsx)(o, {
          videoSrc: `assets/media/video-01.mp4`,
          items: [
            {
              title: `Service One`,
              tagline: `Short tagline for this service.`,
              description: `Short description of this service: what it includes, how it is done and the result the client gets at the end.`,
              position: { x: 50, y: 30 },
            },
            {
              title: `Service Two`,
              tagline: `Short tagline for this one.`,
              description: `Short description of this service: the problem it solves, what makes your approach different and how long the results last.`,
              position: { x: 74, y: 50 },
            },
            {
              title: `Service Three`,
              tagline: `One-line benefit.`,
              description: `Short description of this service: where it is applied, which options the client can choose and the protection or benefit it brings over time.`,
              position: { x: 27, y: 62 },
            },
          ],
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `results`,
        "data-section": `results`,
        children: (0, u.jsx)(a, {
          textAnimation: `fade`,
          tag: `Results`,
          title: `Before and After Results`,
          description: `Short line introducing real results from your recent work.`,
          items: [
            {
              treatment: `Service Two`,
              detail: `Project detail — what was done, short note`,
              beforeSrc: `assets/media/image-05-1600.webp`,
              afterSrc: `assets/media/image-01-1600.webp`,
            },
            {
              treatment: `Service One`,
              detail: `Project detail — what was done, short note`,
              beforeSrc: `assets/media/image-08-1600.webp`,
              afterSrc: `assets/media/image-04-1600.webp`,
            },
            {
              treatment: `Service Three`,
              detail: `Project detail — what was done, short note`,
              beforeSrc: `assets/media/image-06-1600.webp`,
              afterSrc: `assets/media/image-02-1600.webp`,
            },
            {
              treatment: `Service Package`,
              detail: `Project detail — what was done and the result`,
              beforeSrc: `assets/media/image-07-1600.webp`,
              afterSrc: `assets/media/image-03-1600.webp`,
            },
          ],
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, u.jsx)(i, {
          textAnimation: `fade`,
          tag: `FAQ`,
          title: `Questions, Answered`,
          description: `Answers to the questions clients ask most before booking.`,
          items: [
            {
              question: `How long does a service take?`,
              answer: `Answer explaining how long a typical job takes and what can change that time. Mention which services or packages need more days so clients can plan.`,
            },
            {
              question: `What is included and is it worth it?`,
              answer: `Answer describing what your main service includes and how it works in plain words. Explain the benefits it brings and why clients consider it a good investment over the years.`,
            },
            {
              question: `Do you offer an extra protection service?`,
              answer: `Answer describing the extra service, where it is applied and which options are available. Say what problem it prevents for the client.`,
            },
            {
              question: `How often should I book a service?`,
              answer: `Answer with the frequency you recommend for regular maintenance and for a full service. Add any case where clients can wait longer between visits.`,
            },
            {
              question: `What kind of clients do you serve?`,
              answer: `Answer describing your specialty and the type of clients or projects you usually take on. Explain that every job gets a tailored process and clear documentation.`,
            },
          ],
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, u.jsx)(r, {
          textAnimation: `fade`,
          tag: `Get In Touch`,
          title: `Ready to Book Your Next Service?`,
          description: `Leave your email and we'll get back to you within 24 hours with availability and a tailored quote.`,
          inputPlaceholder: `Your email`,
          buttonText: `Book a Detail`,
          imageSrc: `assets/media/image-09-1600.webp`,
          footerLink: {
            text: `Or get in touch directly`,
            href: `mailto:hello@example.com`,
            imageSrc: `assets/media/image-10-1600.webp`,
          },
        }),
      }),
      (0, u.jsx)(s, {
        brand: `Your Brand`,
        columns: [
          {
            items: [
              { label: `About`, href: `#about` },
              { label: `Services`, href: `#services` },
              { label: `Results`, href: `#results` },
            ],
          },
          {
            items: [
              { label: `FAQ`, href: `#faq` },
              { label: `Contact`, href: `#contact` },
              { label: `Book a Detail`, href: `#contact` },
            ],
          },
          {
            items: [
              { label: `Instagram`, href: `#` },
              { label: `TikTok`, href: `#` },
              { label: `YouTube`, href: `#` },
            ],
          },
        ],
      }),
    ],
  });
}
export { d as default };
