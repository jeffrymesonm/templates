import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import t from "./AuroraBackground-DQe2AolR.js";
import { t as n } from "./SmoothScroll-ChrUt1wD.js";
import r from "./LoaderGlassAperture-L4PACEyH.js";
import i from "./NavbarSplitPill-DO2LrlYe.js";
import a from "./ContactFieldForm-B67m-wt4.js";
import o from "./FaqSplitAccordion-m9b3p4yG.js";
import s from "./FeaturesTiltStack-BaHM8wYv.js";
import c from "./ProcessStaggerCards-BSu8S2N-.js";
import l from "./FooterTaglineColumns-7vHBLlgR.js";
import u from "./GalleryDomeCases-B8zoTamf.js";
import d from "./HeroObjectSerif-DFL-DVKM.js";
import f from "./PricingGlassPlans-DMyDSBNF.js";
import p from "./TestimonialGlassRail-DdOVuH8l.js";
/* empty css              */ var m = e(),
  h = 1.6;
function g() {
  return (0, m.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `default`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, m.jsx)(n, {}),
      (0, m.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, m.jsx)(t, { className: `kit-aurora fixed`, blobClassName: `bg-primary/[0.06]` }),
      (0, m.jsx)(r, {}),
      (0, m.jsx)(i, {
        brand: `Your Brand`,
        navItems: [
          { name: `Services`, href: `#services` },
          { name: `Work`, href: `#work` },
          { name: `Process`, href: `#process` },
          { name: `Pricing`, href: `#pricing` },
        ],
        primaryButton: { text: `Start a project`, href: `#contact` },
      }),
      (0, m.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        children: (0, m.jsx)(d, {
          chip: { text: `Booking projects for 20XX`, href: `#contact` },
          title: `Headline that states your main promise clearly`,
          description: `Short description of your studio, what you design and build, and who it is for. Say why one team from start to finish matters.`,
          primaryButton: { text: `Start a project`, href: `#contact` },
          secondaryButton: { text: `See our work`, href: `#work` },
          object: `coins`,
          introDelay: h,
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        children: (0, m.jsx)(s, {
          tag: `Services`,
          title: `Everything Your Site Needs`,
          description: `Short line summing up your services and why clients get them all from you.`,
          button: { text: `Start a project`, href: `#contact` },
          items: [
            {
              category: `Websites`,
              title: `Websites Built To Convert`,
              description: `Short description of this service: what is included, how it works and the result the client can expect.`,
              imageSrc: `assets/media/image-23-1600.webp`,
              imageAlt: `Service image: your team designing a website`,
              button: { text: `Plan a website`, href: `#contact` },
              stats: [
                { value: `100+`, label: `Sites launched` },
                { value: `1.0s`, label: `Average load time` },
              ],
            },
            {
              category: `E-commerce`,
              title: `Online Shops That Sell`,
              description: `Short description of this service: the platforms you use, what the client gets and the main benefit.`,
              imageSrc: `assets/media/image-06-1600.webp`,
              imageAlt: `Service image: an online store you built`,
              button: { text: `Build my shop`, href: `#contact` },
              stats: [
                { value: `25%`, label: `Average sales lift` },
                { value: `50+`, label: `Stores launched` },
              ],
            },
            {
              category: `Branding`,
              title: `Brands People Remember`,
              description: `Short description of this service: what the deliverables are and how the client's team uses them.`,
              imageSrc: `assets/media/image-27-1600.webp`,
              imageAlt: `Service image: brand design work in progress`,
              button: { text: `Refresh my brand`, href: `#contact` },
              stats: [
                { value: `50+`, label: `Brand identities` },
                { value: `4wk`, label: `Typical brand sprint` },
              ],
            },
            {
              category: `SEO`,
              title: `Found On Page One`,
              description: `Short description of this service: how it brings in the right visitors and how you report results.`,
              imageSrc: `assets/media/image-22-1600.webp`,
              imageAlt: `Service image: a results dashboard`,
              button: { text: `Grow my traffic`, href: `#contact` },
              stats: [
                { value: `2.0x`, label: `Organic traffic growth` },
                { value: `Monthly`, label: `Plain English reports` },
              ],
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `work`,
        "data-section": `work`,
        children: (0, m.jsx)(u, {
          tag: `Our work`,
          title: `Recent Launches`,
          description: `Short line introducing the projects you designed and built and the kind of clients behind them.`,
          items: [
            { name: `Project One`, tag: `App`, imageSrc: `assets/media/image-21-1600.webp` },
            { name: `Project Two`, tag: `SaaS`, imageSrc: `assets/media/image-14-1600.webp` },
            { name: `Project Three`, tag: `E-commerce`, imageSrc: `assets/media/image-11-1600.webp` },
            { name: `Project Four`, tag: `Courses`, imageSrc: `assets/media/image-24-1600.webp` },
            { name: `Project Five`, tag: `Travel`, imageSrc: `assets/media/image-12-1600.webp` },
            { name: `Project Six`, tag: `Clinic`, imageSrc: `assets/media/image-03-1600.webp` },
            { name: `Project Seven`, tag: `Startup`, imageSrc: `assets/media/image-09-1600.webp` },
            { name: `Project Eight`, tag: `SaaS`, imageSrc: `assets/media/image-08-1600.webp` },
          ],
          primaryButton: { text: `Start a project`, href: `#contact` },
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `process`,
        "data-section": `process`,
        children: (0, m.jsx)(c, {
          tag: `Process`,
          title: `From first call to launch in a few weeks`,
          description: `Short line on how you run a project: the plan, the updates and who the client talks to.`,
          items: [
            {
              title: `Discover`,
              description: `Step one: how you learn the client's goals and needs.`,
              imageSrc: `assets/media/image-07-1600.webp`,
            },
            {
              title: `Design`,
              description: `Step two: how you present designs and collect feedback.`,
              imageSrc: `assets/media/image-26-1600.webp`,
            },
            {
              title: `Build`,
              description: `Step three: how you build and test the project.`,
              imageSrc: `assets/media/image-01-1600.webp`,
            },
            {
              title: `Launch`,
              description: `Step four: how you launch and support the client after.`,
              imageSrc: `assets/media/image-04-1600.webp`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `testimonial`,
        "data-section": `testimonial`,
        children: (0, m.jsx)(p, {
          tag: `Clients`,
          title: `What our clients say`,
          description: `Short line introducing the clients who reviewed your work.`,
          items: [
            {
              quote: `A client quote about the results of their new site and what it was like to work with your team.`,
              name: `Full Name`,
              role: `CEO, Company Name`,
              imageSrc: `assets/media/image-02-1600.webp`,
            },
            {
              quote: `A client quote about how fast the project was delivered and the sales it brought.`,
              name: `Full Name`,
              role: `Founder, Company Name`,
              imageSrc: `assets/media/image-16-1600.webp`,
            },
            {
              quote: `A client quote about how new customers now find them and how many bookings they get.`,
              name: `Full Name`,
              role: `Owner, Company Name`,
              imageSrc: `assets/media/image-05-1600.webp`,
            },
            {
              quote: `A client quote about the brand you created for them and the site their team is proud to share.`,
              name: `Full Name`,
              role: `Marketing lead, Company Name`,
              imageSrc: `assets/media/image-17-1600.webp`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, m.jsx)(f, {
          tag: `Pricing`,
          title: `Fixed prices, agreed before we start`,
          description: `Short line explaining how you price projects and which extras are optional.`,
          items: [
            {
              name: `Launch`,
              description: `Who this plan is for in one line`,
              price: `$00`,
              period: `fixed`,
              icon: `square-dashed`,
              features: [`Up to 6 pages`, `Custom design`, `Mobile and SEO ready`, `Live in 3 weeks`],
              button: { text: `Start with Launch`, href: `#contact` },
            },
            {
              name: `Growth`,
              description: `Who this plan is for, in one line`,
              price: `$00`,
              period: `fixed`,
              icon: `layers`,
              features: [`20 pages or a shop`, `Brand refresh`, `CMS and analytics`, `Live in 6 weeks`],
              button: { text: `Start with Growth`, href: `#contact` },
            },
            {
              name: `Care`,
              description: `What this monthly plan covers`,
              price: `$00`,
              period: `/month`,
              icon: `box`,
              features: [
                `Fast secure hosting`,
                `Monthly updates`,
                `SEO report and fixes`,
                `Same day support`,
              ],
              button: { text: `Add Care`, href: `#contact` },
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, m.jsx)(o, {
          tag: `FAQ`,
          title: `Questions Before You Start`,
          description: `What most clients ask us in the first call.`,
          items: [
            {
              title: `How long does a website take?`,
              description: `Answer with the usual time a project takes, when you agree the dates and how often you send updates.`,
            },
            {
              title: `What will my project cost?`,
              description: `Answer with your starting prices, for example $00 for a site and $00 for a shop, and how the client gets a fixed quote.`,
            },
            {
              title: `Can you redesign my current site?`,
              description: `Answer explaining how you handle a redesign and protect the client's content and search rankings.`,
            },
            {
              title: `Will I be able to edit the site myself?`,
              description: `Answer explaining how the client edits their own site and what training you include.`,
            },
            {
              title: `Which platforms do you build on?`,
              description: `Answer listing the platforms you build on and how you choose the right one for each client.`,
            },
            {
              title: `Do you help after launch?`,
              description: `Answer describing your support plan after launch and how clients can book extra work.`,
            },
          ],
          contact: {
            name: `Still have questions?`,
            role: `Talk with our project lead`,
            imageSrc: `assets/media/image-25-1600.webp`,
            button: { text: `Book a call`, href: `#contact` },
          },
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, m.jsx)(a, {
          tag: `Start a project`,
          title: `Let's build your next site`,
          description: `Short line inviting visitors to describe their project. Say how fast you reply and what they get.`,
          button: { text: `Book a free call`, href: `#contact` },
          avatars: [
            { imageSrc: `assets/media/image-25-1600.webp` },
            { imageSrc: `assets/media/image-15-1600.webp` },
            { imageSrc: `assets/media/image-10-1600.webp` },
          ],
          images: [
            { imageSrc: `assets/media/image-21-1600.webp` },
            { imageSrc: `assets/media/image-18-1600.webp` },
            { imageSrc: `assets/media/image-11-1600.webp` },
            { imageSrc: `assets/media/image-12-1600.webp` },
            { imageSrc: `assets/media/image-20-1600.webp` },
            { imageSrc: `assets/media/image-03-1600.webp` },
            { imageSrc: `assets/media/image-24-1600.webp` },
            { imageSrc: `assets/media/image-19-1600.webp` },
            { imageSrc: `assets/media/image-14-1600.webp` },
            { imageSrc: `assets/media/image-08-1600.webp` },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        children: (0, m.jsx)(l, {
          brand: `Your Brand`,
          description: `Short description of your studio and the services you offer, in one or two lines for the footer.`,
          address: `123 Example Street, City`,
          phone: `+00 000 000 0000`,
          email: `hello@example.com`,
          columns: [
            {
              title: `Studio`,
              links: [
                { text: `Home`, href: `#` },
                { text: `Services`, href: `#services` },
                { text: `Work`, href: `#work` },
                { text: `Contact`, href: `#contact` },
              ],
            },
            {
              title: `Legal`,
              links: [
                { text: `Privacy Policy`, href: `#` },
                { text: `Terms of Service`, href: `#` },
              ],
            },
          ],
          socials: [
            { platform: `linkedin`, href: `#` },
            { platform: `instagram`, href: `#` },
            { platform: `dribbble`, href: `#` },
          ],
          copyright: `© 20XX Your Brand. All rights reserved.`,
        }),
      }),
    ],
  });
}
export { g as default };
