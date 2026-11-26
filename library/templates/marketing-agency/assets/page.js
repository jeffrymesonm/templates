import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import { t as n } from "./SlideOverSections-CLQS3qwM.js";
import r from "./NavbarFullscreen-CtxA51JZ.js";
import i from "./AboutPanelGallery-BmU7Bp8U.js";
import a from "./AboutStudioSplit-ByvvS3iR.js";
import o from "./FeaturesProjectGrid-DY-3_s-_.js";
import s from "./FooterBrandIndex-CB25WhqK.js";
import c from "./HeroBrandMarquee-moRZx-gc.js";
import l from "./TestimonialImagePair-DbEZZyCo.js";
/* empty css               */ var u = e();
function d() {
  return (0, u.jsxs)(t, {
    root: !0,
    children: [
      (0, u.jsx)(`div`, {
        "data-section": `navbar-wrap`,
        children: (0, u.jsx)(r, {
          logo: `Your Brand`,
          navItems: [
            { name: `Studio`, href: `#studio` },
            { name: `Work`, href: `#work` },
            { name: `Contact`, href: `#contact` },
          ],
          ctaButton: { text: `Get in touch`, href: `#contact` },
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `home`,
        "data-section": `hero`,
        children: (0, u.jsx)(c, {
          textAnimation: `fade`,
          brand: `Your Brand`,
          description: `Short description of what your agency does, who it works with and the results it delivers for clients.`,
          primaryButton: { text: `View our work`, href: `#work` },
          secondaryButton: { text: `Our studio`, href: `#studio` },
          imageSrc: `assets/media/image-10-1600.webp`,
          introImagesSrc: [
            `assets/media/image-15-1600.webp`,
            `assets/media/image-06-1600.webp`,
            `assets/media/image-09-1600.webp`,
            `assets/media/image-02-1600.webp`,
            `assets/media/image-04-1600.webp`,
            `assets/media/image-10-1600.webp`,
          ],
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        className: `relative z-10 -mt-[100svh]`,
        children: (0, u.jsx)(i, {
          textAnimation: `slide-up`,
          title: `Your Approach in One\xA0Clear Line`,
          description: `Short paragraph explaining how you work: where every project starts, what you focus on and why it matters to clients. Keep it to two or three sentences that describe your method clearly.`,
          items: [
            { imageSrc: `assets/media/image-15-1600.webp` },
            { imageSrc: `assets/media/image-06-1600.webp` },
            { imageSrc: `assets/media/image-09-1600.webp` },
            { imageSrc: `assets/media/image-10-1600.webp` },
            { imageSrc: `assets/media/image-11-1600.webp` },
            { imageSrc: `assets/media/image-04-1600.webp` },
          ],
        }),
      }),
      (0, u.jsx)(n, {
        under: (0, u.jsx)(`div`, {
          id: `studio`,
          "data-section": `studio`,
          children: (0, u.jsx)(a, {
            textAnimation: `slide-up`,
            title: `About Our\xA0Studio`,
            tag: `Our Studio`,
            imageSrc: `assets/media/image-13-1600.webp`,
            descriptions: [
              `Paragraph describing how you work with clients from the first meeting to delivery, and how you keep them informed at every step. Mention the skills your team brings together so every project goes beyond what was asked.`,
              `Second paragraph about your style and values: what stays the same in your work and how each project adapts to the client, its market and its audience.`,
            ],
            primaryButton: { text: `See our work`, href: `#work` },
          }),
        }),
        over: (0, u.jsx)(`div`, {
          id: `work`,
          "data-section": `work`,
          children: (0, u.jsx)(o, {
            textAnimation: `slide-up`,
            title: `Featured Work`,
            items: [
              { title: `Project Name`, year: `20XX`, imageSrc: `assets/media/image-03-1600.webp` },
              { title: `Project Name`, year: `20XX`, imageSrc: `assets/media/image-05-1600.webp` },
              { title: `Project Name`, year: `20XX`, imageSrc: `assets/media/image-02-1600.webp` },
              {
                title: `Project Name`,
                year: `20XX`,
                imageSrc: `assets/media/image-06-1600.webp`,
              },
              { title: `Project Name`, year: `20XX`, imageSrc: `assets/media/image-08-1600.webp` },
              { title: `Project Name`, year: `20XX`, imageSrc: `assets/media/image-01-1600.webp` },
            ],
            primaryButton: { text: `View all work`, href: `#work` },
          }),
        }),
      }),
      (0, u.jsx)(`div`, {
        "data-section": `testimonial`,
        children: (0, u.jsx)(l, {
          textAnimation: `slide-up`,
          tag: `Hear From Our Clients`,
          quote: `“A client quote about working with you: what the experience was like, what changed for their business and why they would recommend you. Keep it honest and specific, two or three sentences long.”`,
          author: `Full Name`,
          role: `Founder, Company Name`,
          items: [
            { imageSrc: `assets/media/image-12-1600.webp` },
            { imageSrc: `assets/media/image-16-1600.webp` },
          ],
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `contact`,
        "data-section": `footer`,
        children: (0, u.jsx)(s, {
          brand: `Your Brand`,
          title: `Closing Line That Invites Contact`,
          primaryButton: { text: `Tell us about your brand`, href: `mailto:hello@example.com` },
          imageSrc: `assets/media/image-14-1600.webp`,
          navItems: [
            { name: `Home`, href: `#home` },
            { name: `Studio`, href: `#studio` },
            { name: `Work`, href: `#work` },
            { name: `Contact`, href: `#contact` },
          ],
          columns: [
            { title: `Info`, items: [`123 Example Street, City`, `hello@example.com`, `+00 000 000 0000`] },
            { title: `Hours`, items: [`Monday to Friday`, `9:00 – 18:00`] },
          ],
          copyright: `© 20XX Your Brand`,
          legalLinks: [
            { name: `Privacy`, href: `#` },
            { name: `Terms`, href: `#` },
            { name: `Instagram`, href: `#` },
          ],
        }),
      }),
    ],
  });
}
export { d as default };
