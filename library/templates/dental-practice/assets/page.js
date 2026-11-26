import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import n from "./AuroraBackground-DQe2AolR.js";
import r from "./HorizonGlowBackground-C7f_hlxu.js";
import i from "./NavbarInline-Q2q_TLRg.js";
import a from "./AboutText-CJe9-NUl.js";
import o from "./ContactSplitEmail-DSjJjXGb.js";
import s from "./FeaturesMediaCards-8wEtqjDI.js";
import c from "./FooterSimple-aPJ3v-mE.js";
import l from "./HeroSplitKpi-DV62M0Ys.js";
import u from "./ProductRatingCards-Bp0LKjt3.js";
import d from "./TestimonialMarqueeCards-D1UkRVEN.js";
/* empty css              */ var f = e();
function p() {
  return (0, f.jsxs)(t, {
    root: !0,
    children: [
      (0, f.jsx)(n, { className: `fixed` }),
      (0, f.jsx)(i, {
        logo: `Your Brand`,
        navItems: [
          { name: `Services`, href: `#services` },
          { name: `About`, href: `#about` },
          { name: `Features`, href: `#features` },
          { name: `Testimonials`, href: `#testimonials` },
          { name: `Contact`, href: `#contact` },
        ],
        ctaButton: { text: `Schedule`, href: `#contact` },
      }),
      (0, f.jsxs)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        className: `relative isolate`,
        children: [
          (0, f.jsx)(r, { className: `absolute` }),
          (0, f.jsx)(l, {
            textAnimation: `slide-up`,
            tag: `Excellence Since 20XX`,
            title: `Your Main Headline About the Care You Offer`,
            description: `Short description of your practice: the main treatments you offer and what makes your care different.`,
            primaryButton: { text: `View Our Services`, href: `#services` },
            secondaryButton: { text: `Book Your Visit`, href: `#contact` },
            imageSrc: `assets/media/set-03/image-01.avif`,
            kpis: [
              { value: `1000+`, label: `Satisfied Patients` },
              { value: `99%`, label: `Satisfaction Rate` },
              { value: `10+`, label: `Industry Awards` },
            ],
          }),
        ],
      }),
      (0, f.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        children: (0, f.jsx)(u, {
          textAnimation: `slide-up`,
          tag: `Our Services`,
          title: `Headline for Your Services`,
          description: `Short description of your services: the main treatments you offer, who they are for and the results patients can expect from them.`,
          primaryButton: { text: `Schedule Consultation`, href: `#contact` },
          products: [
            {
              brand: `Category`,
              name: `Service Name One`,
              price: `From $00`,
              rating: 5,
              reviewCount: `100`,
              imageSrc: `assets/media/set-04/image-01.avif`,
            },
            {
              brand: `Category`,
              name: `Service Name Two`,
              price: `From $00`,
              rating: 5,
              reviewCount: `100`,
              imageSrc: `assets/media/set-04/image-02.avif`,
            },
            {
              brand: `Category`,
              name: `Service Name Three`,
              price: `From $00`,
              rating: 5,
              reviewCount: `100`,
              imageSrc: `assets/media/set-04/image-03.avif`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, f.jsx)(a, {
          textAnimation: `slide-up`,
          title: `A longer statement about your practice: how long you have cared for patients, what you combine in your work and the results you help them reach, told in one flowing sentence`,
          primaryButton: { text: `Meet Our Team`, href: `#testimonials` },
          secondaryButton: { text: `Learn More`, href: `#contact` },
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `features`,
        "data-section": `features`,
        children: (0, f.jsx)(s, {
          textAnimation: `slide-up`,
          tag: `Why Choose Us`,
          title: `What Makes Your Practice Different`,
          description: `Short description of what sets you apart: your approach, the tools you use and the kind of results patients can expect when they choose you.`,
          items: [
            {
              title: `Key Strength One`,
              description: `Short description of this strength: what it includes and how it improves diagnosis and treatment for patients.`,
              imageSrc: `assets/media/set-01/image-01.avif`,
            },
            {
              title: `Key Strength Two`,
              description: `Short description of this strength: the experience of your team and the care they bring.`,
              imageSrc: `assets/media/set-01/image-02.avif`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `testimonials`,
        "data-section": `testimonials`,
        children: (0, f.jsx)(d, {
          textAnimation: `slide-up`,
          tag: `Patient Reviews`,
          title: `What Our Patients Say`,
          description: `Short line introducing the reviews from the patients you care for and why they trust you.`,
          testimonials: [
            {
              name: `Full Name`,
              role: `Patient`,
              quote: `A short patient quote about the overall experience. Mention how they felt during the visit and the care they received from the team.`,
              imageSrc: `assets/media/set-05/image-01.webp`,
            },
            {
              name: `Full Name`,
              role: `Patient`,
              quote: `A short patient quote about the result and how it changed their confidence. Add why they would recommend you.`,
              imageSrc: `assets/media/set-05/image-02.webp`,
            },
            {
              name: `Full Name`,
              role: `Patient`,
              quote: `A short patient quote about the quality of the work and the expertise of the team.`,
              imageSrc: `assets/media/set-05/image-03.webp`,
            },
            {
              name: `Full Name`,
              role: `Patient`,
              quote: `A short patient quote from a returning patient: how long they have been coming and what keeps them coming back.`,
              imageSrc: `assets/media/set-06/image-01.avif`,
            },
            {
              name: `Full Name`,
              role: `Patient`,
              quote: `A short patient quote about why they chose you and how natural and lasting the result is.`,
              imageSrc: `assets/media/set-06/image-02.avif`,
            },
            {
              name: `Full Name`,
              role: `Patient`,
              quote: `A short patient quote about the precision of the treatment and the way the team explains each step clearly.`,
              imageSrc: `assets/media/set-06/image-03.avif`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, f.jsx)(o, {
          textAnimation: `slide-up`,
          tag: `Get In Touch`,
          title: `Headline Inviting Patients to Book a Visit`,
          description: `Short line inviting patients to get in touch: what they can ask you about and what happens after they send their email.`,
          inputPlaceholder: `Enter your email`,
          buttonText: `Get Started`,
          imageSrc: `assets/media/set-02/image-01.avif`,
        }),
      }),
      (0, f.jsx)(c, {
        brand: `Your Brand`,
        columns: [
          {
            title: `Services`,
            items: [
              { label: `Service One`, href: `#services` },
              { label: `Service Two`, href: `#services` },
              { label: `Service Three`, href: `#services` },
              { label: `Service Four`, href: `#services` },
            ],
          },
          {
            title: `Practice`,
            items: [
              { label: `About Us`, href: `#about` },
              { label: `Our Team`, href: `#testimonials` },
              { label: `Technology`, href: `#features` },
              { label: `Contact Us`, href: `#contact` },
            ],
          },
          {
            title: `Connect`,
            items: [
              { label: `Instagram`, href: `#` },
              { label: `Facebook`, href: `#` },
              { label: `Reviews`, href: `#` },
              { label: `Smile Gallery`, href: `#` },
            ],
          },
        ],
        copyright: `© 20XX Your Brand | Short Tagline Since 20XX`,
        links: [{ label: `Privacy Policy` }, { label: `Terms of Service` }],
      }),
    ],
  });
}
export { p as default };
