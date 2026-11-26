import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./LaunchfolioLoader-B9BBXy0v.js";
import r from "./NavbarPillCollapse-e8kWkHTH.js";
import i from "./AboutPortraitHistory-fsbrtUOB.js";
import a from "./FaqStickyBooking-K-yIwoI7.js";
import o from "./FeaturesToolStackList-D2NPhQch.js";
import s from "./FooterCycleWordmark-cIldbQcb.js";
import c from "./GalleryCardHandGrid-BGSqzSuN.js";
import l from "./HeroCardHand-DUjfJbFa.js";
import u from "./SocialProofAvatarTicker--cF0R4ej.js";
import d from "./TestimonialQuoteGrid-2R2A6K1X.js";
/* empty css              */ var f = e(),
  p = `assets/media/image-17-1600.webp`,
  m = 1,
  h = `#`,
  g = `#`,
  _ = [
    { imageSrc: `assets/media/image-05-1600.webp`, imageAlt: `Client portrait` },
    {
      imageSrc: `assets/media/image-09-1600.webp`,
      imageAlt: `Client portrait`,
    },
    { imageSrc: `assets/media/image-04-1600.webp`, imageAlt: `Client portrait` },
    { imageSrc: `assets/media/image-06-1600.webp`, imageAlt: `Client portrait` },
    { imageSrc: `assets/media/image-07-1600.webp`, imageAlt: `Client portrait` },
  ],
  v = [
    {
      title: `Project Name One`,
      category: `Project type / Field`,
      imageSrc: `assets/media/image-08-1600.webp`,
      imageAlt: `Project image: a still from this project`,
      href: `#`,
    },
    {
      title: `Project Name Two`,
      category: `Project type / Field`,
      imageSrc: `assets/media/image-19-1600.webp`,
      imageAlt: `Project image: a still from this project`,
      href: `#`,
    },
    {
      title: `Project Name Three`,
      category: `Project type / Field`,
      imageSrc: `assets/media/image-18-1600.webp`,
      imageAlt: `Project image: a still from this project`,
      href: `#`,
    },
    {
      title: `Project Name Four`,
      category: `Project type / Field`,
      imageSrc: `assets/media/image-10-1600.webp`,
      imageAlt: `Project image: a still from this project`,
      href: `#`,
    },
    {
      title: `Project Name Five`,
      category: `Project type / Field`,
      imageSrc: `assets/media/image-02-1600.webp`,
      imageAlt: `Project image: a still from this project`,
      href: `#`,
    },
    {
      title: `Project Name Six`,
      category: `Project type / Field`,
      imageSrc: `assets/media/image-01-1600.webp`,
      imageAlt: `Project image: a still from this project`,
      href: `#`,
    },
  ],
  y = [
    { name: `Work`, href: `#work` },
    { name: `Services`, href: `#services` },
    { name: `About`, href: `#about` },
  ];
function b() {
  return (0, f.jsxs)(`main`, {
    "data-button": `pill`,
    "data-card": `soft`,
    "data-pattern": `rails`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, f.jsx)(t, {}),
      (0, f.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, f.jsx)(n, { name: `Full Name`, role: `Your role` }),
      (0, f.jsx)(r, {
        brand: `Full Name`,
        avatarSrc: p,
        navItems: y,
        cta: { text: `Contact`, href: `#contact` },
      }),
      (0, f.jsx)(`div`, {
        id: `home`,
        "data-section": `hero`,
        "data-scene": !0,
        children: (0, f.jsx)(l, {
          introDelay: m,
          availability: `Taking new projects`,
          titleQuiet: `Headline with`,
          title: `your main promise.`,
          descriptionLead: `Your role and specialty.`,
          description: `Short description of what you make, the kind of projects you take on and who you work for.`,
          primaryButton: { text: `Start a project`, href: `#contact`, avatarSrc: p },
          images: v.slice(0, 4).map((e) => ({ src: e.imageSrc, alt: e.imageAlt })),
        }),
      }),
      (0, f.jsx)(`div`, {
        "data-section": `social-proof`,
        children: (0, f.jsx)(u, {
          label: `Trusted by startups`,
          avatars: _,
          logos: [{ name: `Company Name` }, { name: `Company Name` }, { name: `Company Name` }],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `work`,
        "data-section": `work`,
        "data-scene": !0,
        "data-gallery": !0,
        children: (0, f.jsx)(c, {
          titleQuiet: `Selected`,
          title: `recent work.`,
          items: v,
          viewAll: { text: `See all projects`, href: `#work` },
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        children: (0, f.jsx)(o, {
          titleQuiet: `Services that`,
          title: `state your main benefit.`,
          toolsLabel: `My tool stack`,
          tools: [
            { name: `Animation`, icon: `layers` },
            { name: `3D`, icon: `box` },
            { name: `Editing`, icon: `film` },
            { name: `Sound`, icon: `headphones` },
            { name: `Colour`, icon: `palette` },
            { name: `Camera`, icon: `camera` },
          ],
          items: [
            {
              title: `Service one`,
              description: `Short description of this service and the kind of project it fits.`,
              icon: `play`,
            },
            {
              title: `Service two`,
              description: `Short description of this service and the result clients get.`,
              icon: `box`,
            },
            {
              title: `Service three`,
              description: `Short description of what this service includes.`,
              icon: `rocket`,
            },
            {
              title: `Service four`,
              description: `Short description of this service and where it is used.`,
              icon: `smartphone`,
            },
            {
              title: `Service five`,
              description: `Short description of the problem this service solves.`,
              icon: `mouse-pointer`,
            },
            {
              title: `Service six`,
              description: `Short description of this finishing service.`,
              icon: `headphones`,
            },
            {
              title: `Service seven`,
              description: `Short description of the steps this service covers.`,
              icon: `video`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, f.jsx)(i, {
          titleQuiet: `Meet the person`,
          title: `behind the frames.`,
          imageSrc: p,
          imageAlt: `Portrait of the designer`,
          name: `Full Name`,
          role: `Your role, your specialty`,
          socials: [
            { text: `Instagram`, href: h },
            { text: `LinkedIn`, href: g },
          ],
          paragraphs: [
            {
              lead: `One line about what you do.`,
              text: `Short paragraph on where you are based, what you make and the kind of clients you work with around the world.`,
            },
            {
              lead: `One line about your main tools.`,
              text: `Short paragraph on how you work and how you finish every piece before you deliver it.`,
            },
            {
              lead: `Right now,`,
              text: `Short paragraph on what you are working on now and how many new projects you take on.`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        "data-section": `testimonials`,
        children: (0, f.jsx)(d, {
          titleQuiet: `What clients`,
          title: `say about my work.`,
          proofLabel: `Trusted by startups`,
          items: [
            {
              quote: `A client quote about how you understood their idea quickly and beat every expectation we had.`,
              highlight: `beat every expectation we had.`,
              name: `Full Name`,
              role: `Founder, Company Name`,
              imageSrc: `assets/media/image-14-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `A client quote about the result your work got for them. It kept people watching to the end.`,
              highlight: `kept people watching to the end.`,
              name: `Full Name`,
              role: `Client role`,
              imageSrc: `assets/media/image-03-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `A client quote about the quality and range of your work, all from one person.`,
              name: `Full Name`,
              role: `Job Title, Company Name`,
              imageSrc: `assets/media/image-13-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `A client quote about how fast you delivered and how you handled feedback.`,
              name: `Full Name`,
              role: `Co-founder, Company Name`,
              imageSrc: `assets/media/image-16-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `A client quote saying their product now looks as good on screen as it feels to use.`,
              highlight: `as good on screen as it feels to use.`,
              name: `Full Name`,
              role: `Job Title, Company Name`,
              imageSrc: `assets/media/image-15-1600.webp`,
              imageAlt: `Client portrait`,
            },
            {
              quote: `A short client quote about working with you.`,
              name: `Full Name`,
              role: `Job Title`,
              imageSrc: `assets/media/image-11-1600.webp`,
              imageAlt: `Client portrait`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `contact`,
        "data-section": `faq`,
        children: (0, f.jsx)(a, {
          titleQuiet: `Your questions`,
          title: `answered.`,
          items: [
            {
              title: `What kind of work do you do?`,
              description: `Answer listing the types of projects you take on and the formats you deliver.`,
            },
            {
              title: `How long does a project take?`,
              description: `Answer with the usual time for a small project and for a larger one.`,
            },
            {
              title: `What do I receive at the end?`,
              description: `Answer describing the finished files or deliverables the client gets.`,
            },
            {
              title: `Do you offer extra services?`,
              description: `Answer describing any extra services you offer and how they fit with the main work.`,
            },
            {
              title: `Do you work with clients abroad?`,
              description: `Answer saying where you are based and whether you work with clients in other countries.`,
            },
          ],
          booking: {
            titleQuiet: `Book a free`,
            title: `intro call.`,
            description: `Short line on how long the call lasts and what you will talk about.`,
            imageSrc: p,
            imageAlt: `Portrait of the designer`,
            cta: { text: `Book an intro call`, href: `#contact` },
          },
        }),
      }),
      (0, f.jsx)(`div`, {
        "data-section": `footer`,
        children: (0, f.jsx)(s, {
          brand: `Name`,
          titleLead: `Let's`,
          cycleWords: [`animate`, `launch`, `film`],
          titleQuiet: `your next idea together.`,
          contacts: [{ label: `Instagram`, text: `@yourhandle`, href: h }],
          socials: [
            { text: `Instagram`, href: h },
            { text: `LinkedIn`, href: g },
          ],
          links: [
            { text: `Work`, href: `#work` },
            { text: `Services`, href: `#services` },
            { text: `About`, href: `#about` },
          ],
          copyright: `© 20XX Full Name`,
        }),
      }),
    ],
  });
}
export { b as default };
