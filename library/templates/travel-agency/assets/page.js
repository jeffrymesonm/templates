import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import { t as n } from "./facebook-DOJt2bUV.js";
import { t as r } from "./instagram-U5NLZEJ5.js";
import { t as i } from "./linkedin-Cd0OznQd.js";
import a from "./CornerGlowBackground-BksAScU7.js";
import o from "./NavbarInline-Q2q_TLRg.js";
import s from "./AboutText-CJe9-NUl.js";
import c from "./ContactSplitForm-oVn5m90m.js";
import l from "./FeaturesDetailedSteps-D4eaiasa.js";
import u from "./FeaturesMediaCards-8wEtqjDI.js";
import d from "./FeaturesTaggedCards--VkwBLMp.js";
import f from "./FooterMinimal-BjIWiQAz.js";
import p from "./HeroBrandCarousel-YkzSqb3d.js";
import m from "./TestimonialSplitCards-BnN_vdI8.js";
/* empty css              */ var h = e();
function g() {
  return (0, h.jsxs)(t, {
    root: !0,
    children: [
      (0, h.jsx)(o, {
        logo: `Your Brand`,
        navItems: [
          { name: `About`, href: `#about` },
          { name: `Services`, href: `#services` },
          { name: `Destinations`, href: `#destinations` },
          { name: `Reviews`, href: `#reviews` },
          { name: `Contact`, href: `#contact` },
        ],
        ctaButton: { text: `Plan Your Trip`, href: `#contact` },
      }),
      (0, h.jsxs)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        className: `relative isolate`,
        children: [
          (0, h.jsx)(a, { className: `absolute` }),
          (0, h.jsx)(p, {
            textAnimation: `fade`,
            brand: `Your Brand`,
            description: `Short description of your travel agency: the kind of trips you plan, who they are for and what makes them special.`,
            primaryButton: { text: `Plan Trip`, href: `#contact` },
            secondaryButton: { text: `Explore`, href: `#destinations` },
            items: [
              { imageSrc: `assets/media/set-03/image-01.webp` },
              { imageSrc: `assets/media/set-03/image-02.webp` },
              { imageSrc: `assets/media/set-03/image-03.jpg` },
              { imageSrc: `assets/media/set-03/image-04.jpg` },
            ],
          }),
        ],
      }),
      (0, h.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, h.jsx)(s, {
          textAnimation: `fade`,
          title: `Statement about your agency in one or two lines: what you do for travelers and the care you put into every trip.`,
          primaryButton: { text: `Our Story`, href: `#` },
          secondaryButton: { text: `View Destinations`, href: `#destinations` },
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        children: (0, h.jsx)(u, {
          textAnimation: `fade`,
          tag: `Services`,
          title: `Services Section Title`,
          description: `One sentence summarizing the services you offer and how you help travelers.`,
          items: [
            {
              title: `First Service`,
              description: `Short description of this service and what it includes for the traveler.`,
              imageSrc: `assets/media/set-05/image-04.webp`,
            },
            {
              title: `Second Service`,
              description: `Short description of this service and the options you offer.`,
              imageSrc: `assets/media/set-05/image-01.webp`,
            },
            {
              title: `Third Service`,
              description: `Short description of this service and who it is designed for.`,
              imageSrc: `assets/media/set-05/image-03.webp`,
            },
            {
              title: `Fourth Service`,
              description: `Short description of this service and what makes it worth booking.`,
              imageSrc: `assets/media/set-05/image-02.webp`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `how-it-works`,
        "data-section": `how-it-works`,
        children: (0, h.jsx)(l, {
          textAnimation: `fade`,
          tag: `How It Works`,
          title: `Your Process in Three Steps`,
          description: `One sentence explaining how you work with travelers from first call to return.`,
          steps: [
            {
              tag: `Step 01`,
              title: `Share`,
              subtitle: `What the traveler does in this step`,
              description: `Two sentences describing the first step: what information the traveler shares with you and how your team listens to understand what they want.`,
              imageSrc: `assets/media/set-04/image-03.webp`,
            },
            {
              tag: `Step 02`,
              title: `Plan`,
              subtitle: `What the traveler receives in this step`,
              description: `Two sentences describing the second step: how your team prepares the itinerary and what it includes, from stays to activities and transport.`,
              imageSrc: `assets/media/set-04/image-02.webp`,
            },
            {
              tag: `Step 03`,
              title: `Travel`,
              subtitle: `What the traveler enjoys in this step`,
              description: `Two sentences describing the third step: how you support travelers during the trip and keep everything running smoothly.`,
              imageSrc: `assets/media/set-04/image-01.webp`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `destinations`,
        "data-section": `destinations`,
        children: (0, h.jsx)(d, {
          textAnimation: `fade`,
          tag: `Destinations`,
          title: `Featured Destinations`,
          description: `One sentence introducing the destinations you specialize in.`,
          items: [
            {
              tag: `Region`,
              title: `Destination 1`,
              description: `Short description of this destination and the kind of stay you offer there.`,
              primaryButton: { text: `Explore`, href: `#` },
              imageSrc: `assets/media/set-02/image-06.webp`,
            },
            {
              tag: `Region`,
              title: `Destination 2`,
              description: `Short description of this destination and what travelers can do there.`,
              primaryButton: { text: `Explore`, href: `#` },
              imageSrc: `assets/media/set-02/image-05.webp`,
            },
            {
              tag: `Region`,
              title: `Destination 3`,
              description: `Short description of this destination and its main attraction.`,
              primaryButton: { text: `Explore`, href: `#` },
              imageSrc: `assets/media/set-02/image-01.webp`,
            },
            {
              tag: `Region`,
              title: `Destination 4`,
              description: `Short description of this destination and the kind of stay you offer.`,
              primaryButton: { text: `Explore`, href: `#` },
              imageSrc: `assets/media/set-02/image-04.webp`,
            },
            {
              tag: `Region`,
              title: `Destination 5`,
              description: `Short description of this destination and what makes it unique.`,
              primaryButton: { text: `Explore`, href: `#` },
              imageSrc: `assets/media/set-02/image-03.webp`,
            },
            {
              tag: `Region`,
              title: `Destination 6`,
              description: `Short description of this destination and the experience it offers to travelers.`,
              primaryButton: { text: `Explore`, href: `#` },
              imageSrc: `assets/media/set-02/image-02.webp`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `reviews`,
        "data-section": `reviews`,
        children: (0, h.jsx)(m, {
          textAnimation: `fade`,
          tag: `Reviews`,
          title: `What Our Travelers Say`,
          description: `One sentence introducing what your travelers say about you.`,
          testimonials: [
            {
              tag: `Destination 1`,
              title: `Short review title that sums up the trip`,
              quote: `A traveler quote about the trip you planned for them: what the occasion was, which details they remember most and how the whole experience felt from start to end.`,
              name: `Full Name`,
              date: `Month 20XX`,
              avatarImageSrc: `assets/media/set-06/image-01.webp`,
              imageSrc: `assets/media/set-06/image-01.webp`,
            },
            {
              tag: `Destination 2`,
              title: `Short review title`,
              quote: `A traveler quote about their trip: what kind of journey it was, what they enjoyed most about the places you chose and the care your team put into every detail.`,
              name: `Full Name & Partner`,
              date: `Month 20XX`,
              avatarImageSrc: `assets/media/set-06/image-02.webp`,
              imageSrc: `assets/media/set-06/image-02.webp`,
            },
            {
              tag: `Destination 3`,
              title: `Short review title here`,
              quote: `A traveler quote about the experiences you arranged for them, how the trip exceeded what they expected and why they would plan their next journey with your agency again.`,
              name: `Full Name, City`,
              date: `Month 20XX`,
              avatarImageSrc: `assets/media/set-06/image-03.webp`,
              imageSrc: `assets/media/set-06/image-03.webp`,
            },
          ],
        }),
      }),
      (0, h.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, h.jsx)(c, {
          textAnimation: `fade`,
          tag: `Contact`,
          title: `Plan Your Journey`,
          description: `One sentence inviting travelers to tell you about their next trip.`,
          inputs: [
            { name: `name`, type: `text`, placeholder: `Full Name`, required: !0 },
            { name: `email`, type: `email`, placeholder: `Email Address`, required: !0 },
            { name: `phone`, type: `tel`, placeholder: `Phone Number` },
            { name: `destination`, type: `text`, placeholder: `Dream Destination` },
          ],
          textarea: {
            name: `message`,
            placeholder: `Tell us about your ideal travel experience...`,
            rows: 4,
          },
          buttonText: `Start Planning`,
          imageSrc: `assets/media/set-01/image-01.webp`,
        }),
      }),
      (0, h.jsx)(f, {
        brand: `Your Brand`,
        copyright: `© 20XX Your Brand | Short tagline for your agency`,
        socialLinks: [
          { icon: r, href: `#` },
          { icon: n, href: `#` },
          { icon: i, href: `#` },
        ],
      }),
    ],
  });
}
export { g as default };
