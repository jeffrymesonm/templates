import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./LoaderTypingBubble-DDuiqgpL.js";
import r from "./NavbarTabStrip-D-Xd-Sso.js";
import i from "./ContactFramedWindow-DlIc8trE.js";
import a from "./FaqCommentThreads-BEhj1P2b.js";
import o from "./FooterRulerIndex-lETUx5Kg.js";
import s from "./GalleryFolderStack-B8psspr4.js";
import c from "./HeroCanvasName-BQPpUK8-.js";
import l from "./PricingFolderTabs-CXdEruqR.js";
import u from "./TeamPolaroidWall-_C73HHPp.js";
import d from "./TestimonialCommentCards-Bqss5rmn.js";
/* empty css              */ var f = e(),
  p = 1.6;
function m() {
  return (0, f.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `default`,
    "data-pattern": `grid`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, f.jsx)(t, {}),
      (0, f.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, f.jsx)(n, { word: `Hello there!` }),
      (0, f.jsx)(r, {
        brand: `Your Brand`,
        navItems: [
          { name: `Home`, href: `#hero` },
          { name: `Services`, href: `#services` },
          { name: `Pricing`, href: `#pricing` },
          { name: `FAQ`, href: `#faq` },
        ],
        primaryButton: { text: `Get a quote`, href: `#contact` },
        introDelay: p,
      }),
      (0, f.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        "data-scene": !0,
        children: (0, f.jsx)(c, {
          note: `say hi to`,
          title: `Your Brand`,
          notes: [`Short note about a current offer`, `Short note about availability`],
          status: `Booking jobs across City`,
          description: `Short description of your service, the area you cover and why clients trust you.`,
          primaryButton: { text: `Get a quote`, href: `#contact` },
          tags: [`Key trust point`, `City`],
          avatars: [
            {
              imageSrc: `assets/media/image-15-1600.webp`,
              imageAlt: `Hero image: a member of your team at work`,
            },
          ],
          timeZone: `UTC`,
          introDelay: p,
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `services`,
        "data-section": `gallery`,
        "data-scene": !0,
        children: (0, f.jsx)(s, {
          note: `fresh from the job`,
          title: `Recent jobs`,
          description: `Short line introducing a few recent jobs your team finished.`,
          tabLabel: `Job`,
          linkText: `See the service`,
          fileLabel: `After.jpg`,
          items: [
            {
              title: `Job Name One`,
              date: `Month 20XX`,
              description: `Short description of this job: what the client needed and the result you delivered.`,
              tags: [`Service type`, `Area`],
              imageSrc: `assets/media/image-13-1600.webp`,
              imageAlt: `Job image: the result of this job`,
              href: `#services`,
            },
            {
              title: `Job Name Two`,
              date: `Month 20XX`,
              description: `Short description of this job: what the client needed and the result you delivered.`,
              tags: [`Service type`, `Area`],
              imageSrc: `assets/media/image-18-1600.webp`,
              imageAlt: `Job image: your team doing this work`,
              href: `#services`,
            },
            {
              title: `Job Name Three`,
              date: `Month 20XX`,
              description: `Short description of this job: what the client needed and the result you delivered.`,
              tags: [`Service type`, `Area`],
              imageSrc: `assets/media/image-07-1600.webp`,
              imageAlt: `Job image: your team doing this work`,
              href: `#services`,
            },
            {
              title: `Job Name Four`,
              date: `Month 20XX`,
              description: `Short description of this job: what the client needed and the result you delivered.`,
              tags: [`Service type`, `Area`],
              imageSrc: `assets/media/image-02-1600.webp`,
              imageAlt: `Job image: your team doing this work`,
              href: `#services`,
            },
            {
              title: `Job Name Five`,
              date: `Month 20XX`,
              description: `Short description of this job: what the client needed and the result you delivered.`,
              tags: [`Service type`, `Area`],
              imageSrc: `assets/media/image-10-1600.webp`,
              imageAlt: `Job image: your team doing this work`,
              href: `#services`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `team`,
        "data-section": `team`,
        children: (0, f.jsx)(u, {
          note: `the crew!`,
          title: `Meet the team`,
          items: [
            {
              title: `Full Name`,
              description: `Job title, specialty`,
              imageSrc: `assets/media/image-16-1600.webp`,
              imageAlt: `Team member portrait`,
            },
            {
              title: `Full Name`,
              description: `Job title, specialty`,
              imageSrc: `assets/media/image-12-1600.webp`,
              imageAlt: `Team member portrait`,
            },
            {
              title: `Full Name`,
              description: `Job title, specialty`,
              imageSrc: `assets/media/image-17-1600.webp`,
              imageAlt: `Team member portrait`,
            },
            {
              title: `Full Name`,
              description: `Job title, specialty`,
              imageSrc: `assets/media/image-19-1600.webp`,
              imageAlt: `Team member portrait`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `reviews`,
        "data-section": `testimonial`,
        children: (0, f.jsx)(d, {
          note: `from clients`,
          title: `Client reviews`,
          cardLabel: `Review`,
          items: [
            {
              quote: `A client quote about the regular service you provide and how reliable and consistent your team is.`,
              name: `Full Name`,
              company: `Service, City`,
              imageSrc: `assets/media/image-11-1600.webp`,
              count: 4,
            },
            {
              quote: `A client quote about a one-off job you did and the result they got that they did not expect.`,
              name: `Full Name`,
              company: `Service, City`,
              imageSrc: `assets/media/image-03-1600.webp`,
              count: 3,
            },
            {
              quote: `A client quote about a business you work for and why they never have to think about it.`,
              name: `Full Name`,
              company: `Service, City`,
              imageSrc: `assets/media/image-05-1600.webp`,
              count: 5,
            },
            {
              quote: `A client quote about the value of your work, the details you cover and the supplies you bring along.`,
              name: `Full Name`,
              company: `Service, City`,
              imageSrc: `assets/media/image-01-1600.webp`,
              count: 2,
            },
            {
              quote: `A client quote about how fast they got booked, the friendly team and the fair price.`,
              name: `Full Name`,
              company: `Service, City`,
              imageSrc: `assets/media/image-06-1600.webp`,
              count: 1,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, f.jsx)(l, {
          note: `simple prices`,
          title: `Pricing`,
          items: [
            {
              label: `Recurring`,
              title: `Plan one`,
              price: `$00`,
              period: `/visit`,
              description: `Short description of who this plan is for and how often it runs.`,
              features: [`Feature included in this plan`, `Another feature included`, `A flexible option`],
              button: { text: `Choose plan one`, href: `#contact` },
            },
            {
              label: `One-off`,
              title: `Plan two`,
              price: `$00`,
              period: `/job`,
              description: `Short description of who this plan is for and what it covers.`,
              features: [
                `Feature included in this plan`,
                `Another feature included`,
                `Team size and typical duration`,
              ],
              button: { text: `Choose plan two`, href: `#contact` },
            },
            {
              label: `Special`,
              title: `Plan three`,
              price: `$00`,
              period: `/job`,
              description: `Short description of who this plan is for and the result it delivers.`,
              features: [`Feature included in this plan`, `Another feature included`, `Guarantee you offer`],
              button: { text: `Choose plan three`, href: `#contact` },
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, f.jsx)(a, {
          note: `ask us anything`,
          title: `Common questions`,
          headerLabel: `Question`,
          askerLabel: `Client`,
          avatarSrc: `assets/media/image-12-1600.webp`,
          avatarAlt: `Portrait of the team member who answers`,
          items: [
            {
              title: `Do I need to be there during the job?`,
              description: `Answer explaining whether the client needs to be present and how you handle keys or access safely.`,
              reactions: 4,
            },
            {
              title: `Do you bring your own supplies?`,
              description: `Answer listing the equipment and products your team brings, and what happens if the client prefers their own.`,
              reactions: 3,
            },
            {
              title: `Is your team vetted and insured?`,
              description: `Answer describing how you hire and train your team and the insurance that covers every job.`,
              reactions: 5,
            },
            {
              title: `What if I am not happy with the result?`,
              description: `Answer with your guarantee: how long the client has to tell you and what you do to fix it.`,
              reactions: 2,
            },
            {
              title: `Do you work in homes with pets?`,
              description: `Answer explaining how you handle pets and what the client should tell you when they book.`,
              reactions: 3,
            },
            {
              title: `How do I pay?`,
              description: `Answer with when and how you charge, whether there are contracts and how to pause or cancel.`,
              reactions: 1,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, f.jsx)(i, {
          title: `Get a free quote`,
          nameLabel: `Name`,
          emailLabel: `Email`,
          extraLabel: `Phone`,
          messageLabel: `Your project`,
          submitText: `Send request`,
          successText: `Thanks, we will call you back within one day`,
          caption: `our crew, on the job!`,
          chip: `CREW.JPG`,
          images: [
            {
              imageSrc: `assets/media/image-08-1600.webp`,
              imageAlt: `Contact image: your team at work`,
            },
            {
              imageSrc: `assets/media/image-14-1600.webp`,
              imageAlt: `Contact image: a detail of your work`,
            },
            {
              imageSrc: `assets/media/image-04-1600.webp`,
              imageAlt: `Contact image: your team on a job`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        children: (0, f.jsx)(o, {
          wordmark: `Your Brand`,
          columns: [
            {
              title: `Pages`,
              links: [
                { text: `Home`, href: `#hero` },
                { text: `Services`, href: `#services` },
                { text: `Team`, href: `#team` },
                { text: `Pricing`, href: `#pricing` },
                { text: `FAQ`, href: `#faq` },
                { text: `Get a quote`, href: `#contact` },
              ],
            },
            {
              title: `Social`,
              links: [
                { text: `Instagram`, href: `#` },
                { text: `Facebook`, href: `#` },
                { text: `Reviews`, href: `#` },
              ],
            },
          ],
          city: `City`,
          timeZone: `UTC`,
          copyright: `©20XX Your Brand`,
          backToTop: `Back to top`,
        }),
      }),
    ],
  });
}
export { m as default };
