import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import { t as n } from "./search-BGqJJOQP.js";
import { t as r } from "./shield-B50tiJY9.js";
import { t as i } from "./wrench-C_raMYCT.js";
import a from "./NavbarCentered-CZ4Q1bHH.js";
import o from "./AboutFeaturesSplit-8tWsnyV0.js";
import s from "./ContactSplitForm-oVn5m90m.js";
import c from "./FaqTwoColumn-az-uCx0B.js";
import l from "./FeaturesDetailedCards-DmSgmje7.js";
import u from "./FeaturesRevealCards-BI2N5uYM.js";
import d from "./FooterSimple-aPJ3v-mE.js";
import f from "./HeroBillboardGable-CQPp1CWn.js";
import p from "./MetricsMediaCards-BUf_6r5A.js";
import m from "./TestimonialOverlayCards-wh7UpT00.js";
/* empty css              */ var h = e();
function g() {
  return (0, h.jsxs)(t, {
    root: !0,
    children: [
      (0, h.jsx)(a, {
        logo: `Your Brand`,
        navItems: [
          { name: `About`, href: `#about` },
          { name: `Services`, href: `#services` },
          { name: `Testimonials`, href: `#testimonials` },
          { name: `FAQ`, href: `#faq` },
          { name: `Contact`, href: `#contact` },
        ],
        ctaButton: { text: `Free Estimate`, href: `#contact` },
      }),
      (0, h.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        children: (0, h.jsx)(f, {
          textAnimation: `slide-up`,
          avatarsSrc: [
            `assets/media/set-01/image-11.webp`,
            `assets/media/set-01/image-09.webp`,
            `assets/media/set-01/image-16.webp`,
            `assets/media/set-01/image-10.webp`,
          ],
          avatarsLabel: `100+ Happy Customers`,
          title: `Your Promise. In Two Lines.`,
          description: `Short description of your company: how long you have worked, the jobs you take on and the area you cover. Say why customers can count on you.`,
          primaryButton: { text: `Get Free Estimate`, href: `#contact` },
          secondaryButton: { text: `Our Services`, href: `#services` },
          kpis: [
            { value: `10+`, label: `Years in business` },
            { value: `24h`, label: `Storm response` },
            { value: `4.9`, label: `Average rating` },
          ],
          introImagesSrc: [
            `assets/media/set-01/image-13.webp`,
            `assets/media/set-01/image-14.webp`,
            `assets/media/set-01/image-12.webp`,
            `assets/media/set-01/image-06.webp`,
            `assets/media/set-01/image-08.webp`,
          ],
          imageSrc: `assets/media/set-01/image-07.webp`,
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, h.jsx)(o, {
          textAnimation: `slide-up`,
          tag: `About Us`,
          title: `Your First Value. Your Second.`,
          items: [
            {
              icon: r,
              title: `Licensed & Insured`,
              description: `Short description of your licences and insurance and why they matter.`,
            },
            {
              icon: i,
              title: `Lifetime Warranty`,
              description: `Short description of the warranty on your work and what it covers for customers.`,
            },
            {
              icon: n,
              title: `Free Inspections`,
              description: `Short description of your inspection or estimate offer and what the customer gets from it.`,
            },
          ],
          imageSrc: `assets/media/set-01/image-08.webp`,
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        children: (0, h.jsx)(u, {
          textAnimation: `slide-up`,
          tag: `Our Services`,
          title: `Our Roofing Services`,
          items: [
            {
              title: `Roof Installation`,
              description: `Short description of this service: what the job includes and the materials you work with.`,
              imageSrc: `assets/media/set-01/image-13.webp`,
            },
            {
              title: `Roof Repair`,
              description: `Short description of this service: the problems you fix and how quickly you respond.`,
              imageSrc: `assets/media/set-01/image-14.webp`,
            },
            {
              title: `Emergency Services`,
              description: `Short description of your emergency service: the hours you cover and your response time.`,
              imageSrc: `assets/media/set-01/image-05.webp`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `metrics`,
        "data-section": `metrics`,
        children: (0, h.jsx)(p, {
          textAnimation: `slide-up`,
          tag: `Our Track Record`,
          title: `The Numbers Speak for Themselves`,
          metrics: [
            {
              value: `100+`,
              title: `Roofs Completed`,
              description: `Short description of the projects your team has completed and how you deliver them.`,
              imageSrc: `assets/media/set-01/image-15.webp`,
            },
            {
              value: `10+`,
              title: `Years Experience`,
              description: `Short description of your experience and what it means for the quality of your work.`,
              imageSrc: `assets/media/set-01/image-17.webp`,
            },
            {
              value: `100%`,
              title: `Customer Satisfaction`,
              description: `Short description of how satisfied your customers are and how often they recommend you.`,
              imageSrc: `assets/media/set-01/image-04.webp`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `process`,
        "data-section": `process`,
        children: (0, h.jsx)(l, {
          textAnimation: `slide-up`,
          tag: `How We Work`,
          title: `Our Process`,
          items: [
            {
              title: `Free Inspection`,
              description: `Describe the first step: how you assess the job, what the customer receives and whether it has any cost for them.`,
              tags: [`Schedule Online`, `Photo Report`, `Honest Recommendation`],
              imageSrc: `assets/media/set-01/image-06.webp`,
            },
            {
              title: `Custom Proposal`,
              description: `Describe the second step: what your proposal includes, such as options, timeline and price, so the customer can decide.`,
              tags: [`Transparent Pricing`, `Insurance Assistance`, `Material Selection`],
              imageSrc: `assets/media/set-01/image-03.webp`,
            },
            {
              title: `Expert Installation`,
              description: `Describe the third step: how your team carries out the job, from start to cleanup, and how long it usually takes.`,
              tags: [`Certified Crew`, `Premium Materials`, `Full Cleanup`],
              imageSrc: `assets/media/set-01/image-01.webp`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `testimonials`,
        "data-section": `testimonials`,
        children: (0, h.jsx)(m, {
          textAnimation: `slide-up`,
          tag: `Testimonials`,
          title: `What Our Customers Say`,
          testimonials: [
            {
              name: `Full Name`,
              role: `Homeowner`,
              company: `City`,
              rating: 5,
              imageSrc: `assets/media/set-01/image-11.webp`,
            },
            {
              name: `Full Name`,
              role: `Homeowner`,
              company: `City`,
              rating: 5,
              imageSrc: `assets/media/set-01/image-09.webp`,
            },
            {
              name: `Full Name`,
              role: `Homeowners`,
              company: `City`,
              rating: 5,
              imageSrc: `assets/media/set-01/image-16.webp`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, h.jsx)(c, {
          textAnimation: `slide-up`,
          tag: `FAQ`,
          title: `Frequently Asked Questions`,
          items: [
            {
              question: `How long does a typical roof replacement take?`,
              answer: `Answer with the usual duration of this kind of job and what it depends on. Say when the customer will receive an estimated timeline for their own project.`,
            },
            {
              question: `Do you help with insurance claims?`,
              answer: `Answer explaining how you help customers with insurance claims: which steps you handle for them, from the first inspection to the final paperwork, and what they need to provide.`,
            },
            {
              question: `What roofing materials do you use?`,
              answer: `Answer listing the types of materials you work with and how you help the customer choose the right option for their home and budget. Keep it short and practical.`,
            },
            {
              question: `What does your warranty cover?`,
              answer: `Answer describing the warranty on your work: what it covers, how long it lasts and any extra cover from the manufacturers of the materials you install.`,
            },
            {
              question: `How do I know if my roof needs replacing?`,
              answer: `Answer listing the common warning signs customers can check for themselves, and explain how they can book an inspection to confirm the condition of their roof.`,
            },
            {
              question: `Do you offer financing options?`,
              answer: `Answer describing the payment or financing options you offer and how customers can ask about them when they request an estimate from your team.`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, h.jsx)(s, {
          textAnimation: `slide-up`,
          tag: `Contact Us`,
          title: `Get Your Free Estimate`,
          inputs: [
            { name: `name`, type: `text`, placeholder: `Your Name`, required: !0 },
            { name: `email`, type: `email`, placeholder: `Your Email`, required: !0 },
            { name: `phone`, type: `tel`, placeholder: `Your Phone Number` },
          ],
          textarea: {
            name: `message`,
            placeholder: `Tell us about your roofing needs...`,
            rows: 5,
            required: !0,
          },
          buttonText: `Request Free Estimate`,
          imageSrc: `assets/media/set-01/image-02.webp`,
        }),
      }),
      (0, h.jsx)(d, {
        brand: `Your Brand`,
        columns: [
          {
            title: `Services`,
            items: [
              { label: `Roof Installation`, href: `#services` },
              { label: `Roof Repair`, href: `#services` },
              { label: `Roof Inspection`, href: `#services` },
              { label: `Emergency Services`, href: `#services` },
            ],
          },
          {
            title: `Company`,
            items: [
              { label: `About Us`, href: `#about` },
              { label: `Testimonials`, href: `#testimonials` },
              { label: `FAQ`, href: `#faq` },
              { label: `Free Estimate`, href: `#contact` },
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
        copyright: `© 20XX | Your Brand`,
        links: [{ label: `Privacy Policy` }, { label: `Terms of Service` }],
      }),
    ],
  });
}
export { g as default };
