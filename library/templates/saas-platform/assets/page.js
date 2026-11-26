import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import { t as n } from "./clock-BGj0tszi.js";
import { t as r } from "./globe-BR2dmluH.js";
import { t as i } from "./layers-DQNd7Ofr.js";
import { t as a } from "./rocket-BxxcUhiH.js";
import { t as o } from "./shield-B50tiJY9.js";
import { t as s } from "./target-DnHyP510.js";
import { t as c } from "./users-Cm_Gc_sF.js";
import { t as l } from "./zap-4z9_vjlO.js";
import u from "./AuroraBackground-DQe2AolR.js";
import d from "./LightRaysCenterBackground-CMpbg0Iv.js";
import f from "./NavbarInline-Q2q_TLRg.js";
import p from "./ContactCta-Ce3I-orZ.js";
import m from "./FeaturesBento-B_swLnNH.js";
import h from "./FeaturesIconCards-d52V8szG.js";
import g from "./FooterSimpleReveal-CzkLuAoZ.js";
import _ from "./HeroCenteredLogos-CXiymmVY.js";
import v from "./PricingLayeredCards-32MIlM-9.js";
import y from "./TestimonialTrustCard-CCpGnaE1.js";
/* empty css               */ var b = e();
function x() {
  return (0, b.jsxs)(t, {
    root: !0,
    children: [
      (0, b.jsx)(u, { className: `fixed` }),
      (0, b.jsx)(f, {
        logo: `Your Brand`,
        navItems: [
          { name: `Features`, href: `#features` },
          { name: `Pricing`, href: `#pricing` },
          { name: `Testimonials`, href: `#testimonials` },
          { name: `Contact`, href: `#contact` },
        ],
        ctaButton: { text: `Get Started`, href: `#pricing` },
      }),
      (0, b.jsxs)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        className: `relative isolate`,
        children: [
          (0, b.jsx)(d, { className: `absolute` }),
          (0, b.jsx)(_, {
            textAnimation: `slide-up`,
            avatarsSrc: [
              `assets/media/set-01/image-01.webp`,
              `assets/media/set-02/image-01.avif`,
              `assets/media/set-02/image-03.avif`,
              `assets/media/set-02/image-04.avif`,
            ],
            avatarText: `Trusted by 100+ customers`,
            title: `Headline that states your main product promise`,
            description: `Short description of your product, who it is for and the main result it delivers for them.`,
            primaryButton: { text: `Start Free Trial`, href: `#pricing` },
            secondaryButton: { text: `Watch Demo`, href: `#features` },
            names: [`Company Name`, `Company Name`, `Company Name`, `Company Name`, `Company Name`, `Company Name`],
            imageSrc: ``,
            hideMedia: !0,
          }),
        ],
      }),
      (0, b.jsx)(`div`, {
        id: `features`,
        "data-section": `features`,
        children: (0, b.jsx)(m, {
          textAnimation: `slide-up`,
          tag: `Platform`,
          title: `Section title about your platform`,
          description: `Short description of what your platform offers and how it helps your customers do their work.`,
          features: [
            {
              title: `Main Feature Name`,
              description: `One sentence explaining what this feature does and the benefit it brings.`,
              bentoComponent: `animated-bar-chart`,
            },
            {
              title: `Second Feature Name`,
              description: `One sentence explaining this feature, backed by the key figures below.`,
              bentoComponent: `info-card-marquee`,
              infoCards: [
                { icon: l, label: `Latency`, value: `<10ms` },
                { icon: r, label: `Regions`, value: `10+` },
                { icon: n, label: `Uptime`, value: `99%` },
              ],
            },
            {
              title: `Third Feature Name`,
              description: `One sentence explaining this feature and why your customers can rely on it.`,
              bentoComponent: `orbiting-icons`,
              centerIcon: o,
              orbitIcons: [i, c, s],
            },
          ],
        }),
      }),
      (0, b.jsx)(`div`, {
        "data-section": `features-icon`,
        children: (0, b.jsx)(h, {
          textAnimation: `slide-up`,
          tag: `Why Choose Us`,
          title: `Short title about what sets you apart`,
          description: `One or two sentences explaining why customers choose your product over the alternatives.`,
          features: [
            {
              icon: i,
              title: `Benefit Name`,
              description: `Short description of this benefit and who it helps.`,
            },
            {
              icon: a,
              title: `Benefit Name`,
              description: `Short description of this benefit and what it makes easier.`,
            },
            {
              icon: o,
              title: `Benefit Name`,
              description: `Short description of this benefit and why it matters.`,
            },
            {
              icon: l,
              title: `Benefit Name`,
              description: `Short description of this benefit and the result it gives.`,
            },
          ],
        }),
      }),
      (0, b.jsx)(`div`, {
        id: `testimonials`,
        "data-section": `testimonials`,
        children: (0, b.jsx)(y, {
          textAnimation: `slide-up`,
          quote: `A customer quote about your product: what changed for their team after they started using it and why they would recommend it to others.`,
          rating: 5,
          author: `Full Name, Role at Company Name`,
          avatars: [
            { name: `Full Name`, imageSrc: `assets/media/set-02/image-01.avif` },
            { name: `Full Name`, imageSrc: `assets/media/set-02/image-02.avif` },
            { name: `Full Name`, imageSrc: `assets/media/set-02/image-03.avif` },
            { name: `Full Name`, imageSrc: `assets/media/set-02/image-04.avif` },
          ],
        }),
      }),
      (0, b.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, b.jsx)(v, {
          textAnimation: `slide-up`,
          tag: `Pricing`,
          title: `Short title for your pricing`,
          description: `One sentence explaining your plans and any free trial or guarantee you offer.`,
          plans: [
            {
              tag: `Starter`,
              price: `$00/mo`,
              description: `Who this plan is for, in one short line`,
              primaryButton: { text: `Start Free Trial`, href: `#` },
              features: [
                `First feature of this plan`,
                `Second feature of this plan`,
                `Third feature of this plan`,
                `Fourth feature`,
                `Fifth feature`,
              ],
            },
            {
              tag: `Pro`,
              price: `$00/mo`,
              description: `Who this plan is for, in one short line`,
              primaryButton: { text: `Start Free Trial`, href: `#` },
              features: [
                `Everything in the first plan`,
                `Second feature of this plan`,
                `Third feature of this plan`,
                `Fourth feature`,
                `Fifth feature of this plan`,
                `Sixth feature`,
              ],
            },
            {
              tag: `Enterprise`,
              price: `Custom`,
              description: `Who this plan is for, in one short line`,
              primaryButton: { text: `Contact Sales`, href: `#contact` },
              features: [
                `Everything in the second plan`,
                `Second feature of this plan`,
                `Third feature`,
                `Fourth feature`,
                `Fifth feature`,
                `Sixth feature`,
              ],
            },
          ],
        }),
      }),
      (0, b.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, b.jsx)(p, {
          textAnimation: `slide-up`,
          tag: `Get Started`,
          text: `Closing line that invites visitors to start using your product today.`,
          primaryButton: { text: `Start Free Trial`, href: `#pricing` },
          secondaryButton: { text: `Talk to Sales`, href: `#` },
        }),
      }),
      (0, b.jsx)(g, {
        brand: `Your Brand`,
        columns: [
          {
            title: `Product`,
            items: [
              { label: `Features`, href: `#features` },
              { label: `Pricing`, href: `#pricing` },
              { label: `Changelog`, href: `#` },
              { label: `Roadmap`, href: `#` },
            ],
          },
          {
            title: `Company`,
            items: [
              { label: `About`, href: `#` },
              { label: `Blog`, href: `#` },
              { label: `Careers`, href: `#` },
              { label: `Press`, href: `#` },
            ],
          },
          {
            title: `Resources`,
            items: [
              { label: `Documentation`, href: `#` },
              { label: `API Reference`, href: `#` },
              { label: `Guides`, href: `#` },
              { label: `Support`, href: `#` },
            ],
          },
          {
            title: `Legal`,
            items: [
              { label: `Privacy`, href: `#` },
              { label: `Terms`, href: `#` },
              { label: `Security`, href: `#` },
            ],
          },
        ],
        copyright: `© 20XX Your Brand. All rights reserved.`,
        links: [{ label: `Privacy Policy` }, { label: `Terms of Service` }],
      }),
    ],
  });
}
export { x as default };
