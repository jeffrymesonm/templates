import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import { t as n } from "./dollar-sign-CwRAczwo.js";
import { t as r } from "./house-CWCIz2_v.js";
import { t as i } from "./trending-up-DFJoWTge.js";
import { t as a } from "./users-Cm_Gc_sF.js";
import o from "./GradientBarsBackground-CkQfyv0U.js";
import s from "./NavbarFloating-CJsiqIZg.js";
import c from "./AboutMediaOverlay-C6M7wu4c.js";
import l from "./ContactCta-Ce3I-orZ.js";
import u from "./FeaturesRevealCards-BI2N5uYM.js";
import d from "./FooterBasic-BD_U6-vB.js";
import f from "./HeroTiltedCards-Bv9MPbaV.js";
import p from "./MetricsIconCards-vFnmBmzk.js";
import m from "./ProductVariantCards-BRdE_8vd.js";
import h from "./TeamOverlayCards-DXW-tnoQ.js";
import g from "./TestimonialSplitCards-BnN_vdI8.js";
/* empty css              */ var _ = e();
function v() {
  return (0, _.jsxs)(t, {
    root: !0,
    children: [
      (0, _.jsx)(s, {
        logo: `Your Brand`,
        navItems: [
          { name: `Properties`, href: `#properties` },
          { name: `About`, href: `#about` },
          { name: `Services`, href: `#services` },
          { name: `Team`, href: `#team` },
          { name: `Testimonials`, href: `#testimonials` },
          { name: `Contact`, href: `#contact` },
        ],
        ctaButton: { text: `Schedule Viewing`, href: `#contact` },
      }),
      (0, _.jsxs)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        className: `relative isolate`,
        children: [
          (0, _.jsx)(o, { className: `absolute` }),
          (0, _.jsx)(f, {
            textAnimation: `slide-up`,
            tag: `Premium Collections`,
            title: `Your Main Promise Goes Here`,
            description: `Short description of your agency: the kind of properties you sell, the buyers you work with and what makes your service different.`,
            primaryButton: { text: `Explore Properties`, href: `#properties` },
            secondaryButton: { text: `Contact Agent`, href: `#contact` },
            items: [
              { imageSrc: `assets/media/set-02/image-01.webp` },
              { imageSrc: `assets/media/set-02/image-02.webp` },
              { imageSrc: `assets/media/set-02/image-03.webp` },
              { imageSrc: `assets/media/set-02/image-04.webp` },
              { imageSrc: `assets/media/set-02/image-05.webp` },
            ],
          }),
        ],
      }),
      (0, _.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, _.jsx)(c, {
          textAnimation: `slide-up`,
          tag: `About Us`,
          title: `Your Trusted Real Estate Partner Here`,
          description: `Short story of your agency: how long you have been working, the market you know best and the clients you serve. Explain what your team does for buyers and sellers, and the areas where you find the best properties for them.`,
          primaryButton: { text: `Learn Our Story`, href: `#services` },
          secondaryButton: { text: `Contact Us`, href: `#contact` },
          imageSrc: `assets/media/set-01/image-01.webp`,
        }),
      }),
      (0, _.jsx)(`div`, {
        id: `properties`,
        "data-section": `properties`,
        children: (0, _.jsx)(m, {
          textAnimation: `slide-up`,
          tag: `Exclusive Listings`,
          title: `Featured Properties`,
          description: `Short introduction to your current listings: the type of properties and the areas where they are located.`,
          primaryButton: { text: `See all properties`, href: `#properties` },
          products: [
            {
              name: `Property Name One`,
              variant: `0 Bed Villa | Key Feature`,
              price: `$00`,
              imageSrc: `assets/media/set-03/image-01.webp`,
            },
            {
              name: `Property Name Two`,
              variant: `0 Bed Penthouse | Key Feature`,
              price: `$00`,
              imageSrc: `assets/media/set-03/image-02.webp`,
            },
            {
              name: `Property Name Three`,
              variant: `0 Bed Townhouse | Key Feature`,
              price: `$00`,
              imageSrc: `assets/media/set-03/image-03.webp`,
            },
          ],
        }),
      }),
      (0, _.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        children: (0, _.jsx)(u, {
          textAnimation: `slide-up`,
          tag: `Professional Services`,
          title: `Our Services & Expertise`,
          description: `Comprehensive real estate solutions tailored to meet your unique needs and aspirations.`,
          items: [
            {
              title: `Property Selection`,
              description: `Short description of this service and how it helps your clients.`,
              imageSrc: `assets/media/set-04/image-01.webp`,
            },
            {
              title: `Investment Advisory`,
              description: `Short description of this service and who it is for, in one line.`,
              imageSrc: `assets/media/set-04/image-02.webp`,
            },
            {
              title: `Negotiation & Closing`,
              description: `Short description of this service and its main benefit.`,
              imageSrc: `assets/media/set-04/image-03.webp`,
            },
            {
              title: `Legal Compliance`,
              description: `Short description of this service and what it covers for the client.`,
              imageSrc: `assets/media/set-04/image-04.webp`,
            },
          ],
        }),
      }),
      (0, _.jsx)(`div`, {
        id: `team`,
        "data-section": `team`,
        children: (0, _.jsx)(h, {
          textAnimation: `slide-up`,
          tag: `Our Leadership`,
          title: `Executive Team`,
          description: `Short introduction to the people who lead your agency and what they bring.`,
          members: [
            {
              name: `Full Name`,
              role: `CEO`,
              imageSrc: `assets/media/set-05/image-01.webp`,
            },
            {
              name: `Full Name`,
              role: `COO`,
              imageSrc: `assets/media/set-05/image-02.webp`,
            },
            {
              name: `Full Name`,
              role: `CIO`,
              imageSrc: `assets/media/set-05/image-03.webp`,
            },
          ],
        }),
      }),
      (0, _.jsx)(`div`, {
        id: `metrics`,
        "data-section": `metrics`,
        children: (0, _.jsx)(p, {
          textAnimation: `slide-up`,
          tag: `Track Record`,
          title: `By The Numbers`,
          description: `Short line introducing the key numbers that show your experience and results in your market.`,
          metrics: [
            { icon: r, title: `Properties Sold`, value: `100+` },
            { icon: a, title: `Satisfied Clients`, value: `100+` },
            { icon: n, title: `Total Value`, value: `$100M` },
            { icon: i, title: `Countries`, value: `25` },
          ],
        }),
      }),
      (0, _.jsx)(`div`, {
        id: `testimonials`,
        "data-section": `testimonials`,
        children: (0, _.jsx)(g, {
          textAnimation: `slide-up`,
          tag: `Client Testimonials`,
          title: `What Our Clients Say`,
          description: `Short line introducing the reviews from buyers, sellers and investors you have worked with.`,
          testimonials: [
            {
              tag: `Premium Portfolio`,
              title: `Exceptional Service & Market Expertise`,
              quote: `Client review: what they were looking for, how your team helped them and the result they got. Mention the part of the service they valued most, in their own words, in two or three sentences.`,
              name: `Full Name`,
              date: `Month 20XX`,
              avatarImageSrc: `assets/media/set-06/image-01.webp`,
              imageSrc: `assets/media/set-06/image-04.webp`,
            },
            {
              tag: `Penthouse Collection`,
              title: `A Smooth & Sophisticated Experience`,
              quote: `Client review: the challenge they faced in their search, how quickly your team found the right options and how they felt about the whole process from start to finish.`,
              name: `Full Name`,
              date: `Month 20XX`,
              avatarImageSrc: `assets/media/set-06/image-02.webp`,
              imageSrc: `assets/media/set-06/image-05.webp`,
            },
            {
              tag: `Investment Advisory`,
              title: `Trusted Partner for International Clients`,
              quote: `Review from an investor: the guidance your team gave them, the problems you solved along the way and why they would work with you again.`,
              name: `Full Name`,
              date: `Month 20XX`,
              avatarImageSrc: `assets/media/set-06/image-03.webp`,
              imageSrc: `assets/media/set-06/image-06.webp`,
            },
          ],
        }),
      }),
      (0, _.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, _.jsx)(l, {
          textAnimation: `slide-up`,
          tag: `Get In Touch`,
          text: `Ready to Find Your Dream Property?`,
          primaryButton: { text: `Schedule Consultation`, href: `#contact` },
          secondaryButton: { text: `Browse Listings`, href: `#properties` },
        }),
      }),
      (0, _.jsx)(d, {
        columns: [
          {
            title: `Company`,
            items: [
              { label: `About Us`, href: `#about` },
              { label: `Our Services`, href: `#services` },
              { label: `Executive Team`, href: `#team` },
              { label: `Properties`, href: `#properties` },
              { label: `Contact`, href: `#contact` },
            ],
          },
          {
            title: `Resources`,
            items: [
              { label: `Investment Guide`, href: `#` },
              { label: `Market Reports`, href: `#` },
              { label: `FAQ`, href: `#` },
              { label: `Blog`, href: `#` },
            ],
          },
          {
            title: `Legal`,
            items: [
              { label: `Privacy Policy`, href: `#` },
              { label: `Terms of Service`, href: `#` },
              { label: `Cookie Policy`, href: `#` },
            ],
          },
        ],
        leftText: `© 20XX Your Brand. All rights reserved.`,
        rightText: `Luxury Real Estate Excellence`,
      }),
    ],
  });
}
export { v as default };
