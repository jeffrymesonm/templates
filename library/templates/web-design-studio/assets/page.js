import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./ContactSpotlightRoom-CQGfnQkK.js";
import r from "./ServicesParticleBento-DdDFxBpX.js";
import i from "./ProjectsCurvedReel-CwZhDccz.js";
import a from "./HeroScreenWell-CcJ3cV7s.js";
import o from "./TestimonialDragCarousel-DYH-ETof.js";
/* empty css              */ var s = e(),
  c = `assets/media`;
function l() {
  return (0, s.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `filled`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip bg-black text-foreground`,
    children: [
      (0, s.jsx)(t, {}),
      (0, s.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        "data-scene": !0,
        className: `contents`,
        children: (0, s.jsx)(a, {
          brand: `Your Brand`,
          screens: [
            `${c}/wall/watch-maison.mp4`,
            `${c}/wall/car-showroom.mp4`,
            `${c}/wall/racing-driver.mp4`,
            `${c}/wall/prebiotic-soda.mp4`,
            `${c}/wall/craft-soda.mp4`,
            `${c}/wall/saas-product.mp4`,
            `${c}/wall/burger-restaurant.mp4`,
            `${c}/wall/seaside-hotel.mp4`,
            `${c}/wall/joes-coffee.mp4`,
            `${c}/wall/le-cercle.mp4`,
            `${c}/wall/essentia-safari.mp4`,
            `${c}/wall/bakery.mp4`,
            `${c}/wall/rev-productions.mp4`,
            `${c}/wall/kinimatic.mp4`,
            `${c}/wall/ecommerce-dark.mp4`,
          ],
          intro: {
            title: `Your Brand`,
            description: `Short line about your studio and what you build for clients.`,
          },
          chapters: [
            {
              index: `01`,
              title: `Every screen is a site we shipped.`,
              description: `Short note on the kinds of projects you have delivered.`,
              from: 0.14,
              to: 0.32,
              align: `left`,
            },
            {
              index: `02`,
              title: `Scroll faster. The walls keep up.`,
              description: `Dive and the screens spin with you. Climb back up and they turn the other way.`,
              from: 0.36,
              to: 0.54,
              align: `right`,
            },
            {
              index: `03`,
              title: `At the bottom, there's room for one more.`,
              description: `Yours.`,
              from: 0.58,
              to: 0.72,
              align: `left`,
            },
          ],
          length: 7,
          scrollHint: `Scroll to dive`,
          interactionHint: `Hover to scatter · Drag to spin`,
        }),
      }),
      (0, s.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        "data-scene": !0,
        children: (0, s.jsx)(r, {
          label: `Services`,
          title: `What we build`,
          description: `One studio for everything your site needs, from the first sketch to the thousandth visitor.`,
          items: [
            {
              title: `Web design`,
              description: `Sites that look like nobody else's. Art direction, layouts and motion, designed screen by screen.`,
              tags: [`Art direction`, `UI design`, `Motion`],
              icon: `browser`,
            },
            {
              title: `Development`,
              description: `Fast, accessible builds on modern stacks. Animations that hold sixty frames.`,
              tags: [`Frontend`, `3D`, `CMS`],
              icon: `code`,
            },
            {
              title: `Brand identity`,
              description: `Names, logos, type and colour that carry from the homepage to the business card.`,
              tags: [`Logo`, `Visual system`, `Guidelines`],
              icon: `nib`,
            },
            {
              title: `E-commerce`,
              description: `Stores built to sell. Product pages and checkouts that turn browsers into buyers.`,
              tags: [`Storefront`, `Checkout`, `Conversion`],
              icon: `bag`,
            },
            {
              title: `SEO & growth`,
              description: `Search, analytics and steady experiments so the site keeps earning after launch.`,
              tags: [`SEO`, `Analytics`, `A/B testing`],
              icon: `growth`,
            },
          ],
        }),
      }),
      (0, s.jsx)(`div`, {
        id: `work`,
        "data-section": `gallery`,
        "data-scene": !0,
        children: (0, s.jsx)(i, {
          label: `Selected work`,
          linkText: `View project`,
          items: [
            {
              name: `Project One`,
              category: `Category`,
              year: `20XX`,
              imageSrc: `${c}/poster/watch-maison.jpg`,
              videoSrc: `${c}/reel/watch-maison.mp4`,
              href: `#`,
            },
            {
              name: `Project Two`,
              category: `Category`,
              year: `20XX`,
              imageSrc: `${c}/poster/car-showroom.jpg`,
              videoSrc: `${c}/reel/car-showroom.mp4`,
              href: `#`,
            },
            {
              name: `Project Three`,
              category: `Category`,
              year: `20XX`,
              imageSrc: `${c}/poster/prebiotic-soda.jpg`,
              videoSrc: `${c}/reel/prebiotic-soda.mp4`,
              href: `#`,
            },
            {
              name: `Project Four`,
              category: `Category`,
              year: `20XX`,
              imageSrc: `${c}/poster/craft-soda.jpg`,
              videoSrc: `${c}/reel/craft-soda.mp4`,
              href: `#`,
            },
            {
              name: `Project Five`,
              category: `Category`,
              year: `20XX`,
              imageSrc: `${c}/poster/seaside-hotel.jpg`,
              videoSrc: `${c}/reel/seaside-hotel.mp4`,
              href: `#`,
            },
            {
              name: `Project Six`,
              category: `Category`,
              year: `20XX`,
              imageSrc: `${c}/poster/saas-product.jpg`,
              videoSrc: `${c}/reel/saas-product.mp4`,
              href: `#`,
            },
            {
              name: `Project Seven`,
              category: `Category`,
              year: `20XX`,
              imageSrc: `${c}/poster/burger-restaurant.jpg`,
              videoSrc: `${c}/reel/burger-restaurant.mp4`,
              href: `#`,
            },
          ],
        }),
      }),
      (0, s.jsx)(`div`, {
        id: `testimonials`,
        "data-section": `testimonial`,
        children: (0, s.jsx)(o, {
          label: `Kind words`,
          title: `Clients, in their words`,
          description: `Founders and teams on what changed once their new site went live.`,
          items: [
            {
              quote: `Client quote about what the project changed for their business. Mention a concrete result, like more enquiries or sales.`,
              name: `Full Name`,
              role: `Founder & CEO, Company Name`,
              imageSrc: `assets/media/set-04/image-03-1600.webp`,
              link: { text: `Read the case study`, href: `#work` },
            },
            {
              quote: `Client quote about how the new site reflects their brand and the result it brought, in one or two sentences.`,
              name: `Full Name`,
              role: `Owner, Company Name`,
              imageSrc: `assets/media/set-04/image-04-1600.webp`,
              link: { text: `Read the case study`, href: `#work` },
            },
            {
              quote: `Client quote about delivery, quality of the work and a measurable outcome. Signups rose 25% in the first month.`,
              name: `Full Name`,
              role: `Chief Operating Officer, Company Name`,
              imageSrc: `assets/media/set-04/image-01-1600.webp`,
              link: { text: `Read the case study`, href: `#work` },
            },
            {
              quote: `Client quote describing the problem they had before, how the new site solved it, and the result. Visits are up 50% since launch, as an example.`,
              name: `Full Name`,
              role: `Managing Director, Company Name`,
              imageSrc: `assets/media/set-04/image-05-1600.webp`,
              link: { text: `Read the case study`, href: `#work` },
            },
            {
              quote: `Client quote about getting more than they expected from the project. Orders doubled in a few weeks, and customers now recognise the new brand.`,
              name: `Full Name`,
              role: `Co-founder, Company Name`,
              imageSrc: `assets/media/set-04/image-02-1600.webp`,
              link: { text: `Read the case study`, href: `#work` },
            },
          ],
          cta: {
            title: `Be our next story.`,
            text: `Tell us what you are building.`,
            button: `Start a project`,
            href: `#contact`,
          },
          dragText: `Drag`,
        }),
      }),
      (0, s.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        "data-scene": !0,
        children: (0, s.jsx)(n, {
          label: `Contact`,
          title: `Contact us`,
          description: `Tell us about the site you want people to fall into. We reply within one working day.`,
          email: `hello@example.com`,
          cta: { text: `Start a project`, href: `mailto:hello@example.com` },
          roomSrc: `${c}/contact/studio.webp`,
          roomAlt: `Contact image: your studio or workspace, with a desk and screen in the centre`,
        }),
      }),
    ],
  });
}
export { l as default };
