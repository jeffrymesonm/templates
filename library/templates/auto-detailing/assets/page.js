import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import { t as n } from "./award-Cuaj6Ck5.js";
import { t as r } from "./shield-B50tiJY9.js";
import { t as i } from "./star-D72dpFbi.js";
import a from "./LightRaysCenterBackground-CMpbg0Iv.js";
import o from "./NavbarCentered-CZ4Q1bHH.js";
import s from "./ContactSplitForm-oVn5m90m.js";
import c from "./FaqSimple-CaEB436g.js";
import l from "./FeaturesComparison-CiEWk5_0.js";
import u from "./FeaturesStickyCards-DJYhQgnF.js";
import d from "./FooterSimpleCard-n3LPviEV.js";
import f from "./HeroBillboardFeatures-Cwm1K2Jh.js";
import p from "./TeamOverlayCards-DXW-tnoQ.js";
import m from "./TestimonialMarqueeOverlayCards-BTESHwrz.js";
/* empty css               */ var h = e();
function g() {
  return (0, h.jsxs)(t, {
    root: !0,
    children: [
      (0, h.jsx)(o, {
        logo: `Your Brand`,
        navItems: [
          { name: `Services`, href: `#services` },
          { name: `Testimonials`, href: `#testimonials` },
          { name: `Why Us`, href: `#why-us` },
          { name: `Team`, href: `#team` },
          { name: `FAQ`, href: `#faq` },
          { name: `Contact`, href: `#contact` },
        ],
        ctaButton: { text: `Book Now`, href: `#contact` },
      }),
      (0, h.jsxs)(`div`, {
        "data-section": `hero`,
        className: `relative isolate`,
        children: [
          (0, h.jsx)(a, { className: `absolute` }),
          (0, h.jsx)(f, {
            textAnimation: `slide-up`,
            badge: `Now Booking`,
            title: `Headline With Your Promise`,
            description: `Short description of your main service and who it is for. Explain the result clients get and why they should trust you with it.`,
            primaryButton: { text: `Book Now`, href: `#contact` },
            secondaryButton: { text: `Our Services`, href: `#services` },
            videoSrc: `assets/media/video-02.mp4`,
            features: [
              {
                icon: r,
                title: `Key Benefit One`,
                description: `One short line that explains this benefit`,
              },
              { icon: i, title: `Key Benefit Two`, description: `One short line about client trust` },
              {
                icon: n,
                title: `Key Benefit Three`,
                description: `One short line about your team or quality`,
              },
            ],
          }),
        ],
      }),
      (0, h.jsx)(`div`, {
        id: `services`,
        children: (0, h.jsx)(u, {
          items: [
            {
              title: `Service One`,
              description: `Short description of this service: what is included, how it works and the result the client can expect.`,
              primaryButton: { text: `Book Service`, href: `#contact` },
              leftImageSrc: `assets/media/image-04-1600.webp`,
              rightImageSrc: `assets/media/image-05-1600.webp`,
            },
            {
              title: `Service Two`,
              description: `Short description of this service: the main steps, what makes it different and how long it lasts.`,
              primaryButton: { text: `Book Service`, href: `#contact` },
              leftImageSrc: `assets/media/image-02-1600.webp`,
              rightImageSrc: `assets/media/image-03-1600.webp`,
            },
            {
              title: `Service Three`,
              description: `Short description of this service: the problem it solves for the client and the benefit it brings over time.`,
              primaryButton: { text: `Book Service`, href: `#contact` },
              leftImageSrc: `assets/media/image-03-1600.webp`,
              rightImageSrc: `assets/media/image-01-1600.webp`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `testimonials`,
        children: (0, h.jsx)(m, {
          textAnimation: `slide-up`,
          tag: `Testimonials`,
          title: `What Our Clients Say`,
          description: `Short line introducing the reviews from the people you work with`,
          primaryButton: { text: `Book Now`, href: `#contact` },
          secondaryButton: { text: `View Gallery`, href: `#services` },
          testimonials: [
            {
              name: `Full Name`,
              role: `Client Role`,
              company: `City`,
              rating: 5,
              imageSrc: `assets/media/image-07-1600.webp`,
            },
            {
              name: `Full Name`,
              role: `Client Role`,
              company: `City`,
              rating: 5,
              imageSrc: `assets/media/image-08-1600.webp`,
            },
            {
              name: `Full Name`,
              role: `Client Role`,
              company: `City`,
              rating: 5,
              imageSrc: `assets/media/image-09-1600.webp`,
            },
            {
              name: `Full Name`,
              role: `Client Role`,
              company: `City`,
              rating: 4,
              imageSrc: `assets/media/image-10-1600.webp`,
            },
            {
              name: `Full Name`,
              role: `Client Role`,
              company: `City`,
              rating: 5,
              imageSrc: `assets/media/image-11-1600.webp`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `why-us`,
        children: (0, h.jsx)(l, {
          textAnimation: `slide-up`,
          tag: `Why Us`,
          title: `Why Choose Us Instead`,
          description: `Short line comparing your service with the alternatives`,
          primaryButton: { text: `Get Started`, href: `#contact` },
          negativeItems: [
            `A common problem with alternatives`,
            `Another downside clients face`,
            `A risk of doing it the old way`,
            `A frustration clients mention`,
            `A long-term cost of waiting`,
          ],
          positiveItems: [
            `A clear advantage of your work`,
            `A visible result you deliver`,
            `A protection or guarantee`,
            `An extra detail you include`,
            `A long-term benefit for the client`,
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `team`,
        children: (0, h.jsx)(p, {
          textAnimation: `slide-up`,
          tag: `Our Experts`,
          title: `Meet the Team`,
          description: `Short line introducing the people behind the work`,
          members: [
            { name: `Full Name`, role: `Job Title`, imageSrc: `assets/media/image-09-1600.webp` },
            {
              name: `Full Name`,
              role: `Job Title`,
              imageSrc: `assets/media/image-10-1600.webp`,
            },
            { name: `Full Name`, role: `Job Title`, imageSrc: `assets/media/image-07-1600.webp` },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `faq`,
        children: (0, h.jsx)(c, {
          textAnimation: `slide-up`,
          tag: `FAQ`,
          title: `Frequently Asked Questions`,
          description: `Answers to the questions clients ask most before booking`,
          items: [
            {
              question: `How long does a service take?`,
              answer: `Answer explaining how long a typical job takes and what can change that time. Mention any extra time some services need so clients can plan ahead.`,
            },
            {
              question: `How often should I book a service?`,
              answer: `Answer with the frequency you recommend and why it keeps results at their best. Add any case where clients can wait longer between visits.`,
            },
            {
              question: `What is included and how long does it last?`,
              answer: `Answer describing what your main service includes and how it works in plain words. Explain the benefits it brings and how long the results usually last depending on the package chosen.`,
            },
            {
              question: `Do you come to my location?`,
              answer: `Answer explaining whether you offer on-site service and where. Say what the client needs to prepare and which areas or packages are available.`,
            },
            {
              question: `What materials do you use?`,
              answer: `Answer describing the quality of the materials and tools you work with. Explain why they are safe and how they help the results last longer for every client.`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `contact`,
        children: (0, h.jsx)(s, {
          textAnimation: `slide-up`,
          tag: `Contact`,
          title: `Get Your Free Estimate`,
          description: `Tell us about your project and we'll get back to you within 24 hours.`,
          inputs: [
            { name: `name`, type: `text`, placeholder: `Full Name`, required: !0 },
            { name: `email`, type: `email`, placeholder: `Email Address`, required: !0 },
            { name: `phone`, type: `tel`, placeholder: `Phone Number` },
          ],
          textarea: { name: `message`, placeholder: `Tell us what you need...`, rows: 4, required: !0 },
          buttonText: `Send Message`,
          videoSrc: `assets/media/video-01.mp4`,
        }),
      }),
      (0, h.jsx)(d, {
        brand: `Your Brand`,
        columns: [
          {
            title: `Services`,
            items: [
              { label: `Service One`, href: `#services` },
              { label: `Service Two`, href: `#services` },
              { label: `Service Three`, href: `#services` },
              { label: `Service Package`, href: `#services` },
            ],
          },
          {
            title: `Company`,
            items: [
              { label: `About Us`, href: `#` },
              { label: `Our Team`, href: `#team` },
              { label: `FAQ`, href: `#faq` },
              { label: `Testimonials`, href: `#testimonials` },
            ],
          },
          {
            title: `Contact`,
            items: [
              { label: `+00 000 000 0000`, href: `tel:+000000000000` },
              { label: `hello@example.com`, href: `mailto:hello@example.com` },
              { label: `123 Example Street, City` },
            ],
          },
        ],
        copyright: `© 20XX Your Brand. All rights reserved.`,
        links: [
          { label: `Privacy Policy`, href: `#` },
          { label: `Terms of Service`, href: `#` },
        ],
      }),
    ],
  });
}
export { g as default };
