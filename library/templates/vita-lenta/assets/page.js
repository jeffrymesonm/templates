import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import { t as n } from "./react-azkLsmaj.js";
import { t as r } from "./car-CvXu1pcd.js";
import { t as i } from "./mail-BIMXjy2H.js";
import { t as a } from "./phone-bYVfqyhz.js";
import o from "./LoaderSpinner-DYn2IAcZ.js";
import s from "./NavbarFullscreen-CtxA51JZ.js";
import c from "./AboutImageReveal-CX7kRYhp.js";
import l from "./AboutMaskReveal-Df9otPlC.js";
import u from "./AboutStatementSplit-DWSK9R8k.js";
import d from "./ContactRotatingImages-DSZ8yDRN.js";
import f from "./FeaturesTimeOfDay-feuDKLLo.js";
import p from "./FooterMinimal-BjIWiQAz.js";
import m from "./HeroBrandReveal-BeaaI7Pd.js";
import h from "./MenuHoverReveal-DX8F_Pku.js";
import g from "./StatementMarquee-BHtIP-ZB.js";
/* empty css              */ var _ = e(),
  v = `assets/media`;
function y() {
  return (0, _.jsxs)(t, {
    root: !0,
    children: [
      (0, _.jsx)(o, { imageSrc: `${v}/star5.svg`, duration: 0.8 }),
      (0, _.jsx)(n.div, {
        initial: { y: -100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.6, delay: 4, ease: [0.22, 1, 0.36, 1] },
        children: (0, _.jsx)(s, {
          logo: `YOUR BRAND`,
          navItems: [
            { name: `Home`, href: `#home` },
            { name: `About`, href: `#about` },
            { name: `Menu`, href: `#menu` },
            { name: `Contact`, href: `#contact` },
          ],
          ctaButton: { text: `Reserve`, href: `#reserve` },
        }),
      }),
      (0, _.jsx)(`div`, {
        id: `home`,
        "data-section": `hero`,
        children: (0, _.jsx)(m, {
          heroAnimationDelay: 1.3,
          brand: `YOUR BRAND`,
          imageSrc: `assets/media/image-14-1600.webp`,
        }),
      }),
      (0, _.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, _.jsx)(u, {
          textAnimation: `fade-blur`,
          title: `ABOUT OUR RESTAURANT`,
          descriptions: [
            `Your Brand opened in 20XX in the heart of City, founded by a chef with a clear idea of what a meal should be. Tell the story here: who started the restaurant, the cooking tradition behind the menu and the experience that shaped it. Describe what guests can expect from the kitchen and the room, and why the place feels different. Keep it to a few sentences that read well in large type and end with the experience you want every guest to have.`,
          ],
        }),
      }),
      (0, _.jsx)(`div`, {
        "data-section": `about-image`,
        children: (0, _.jsx)(c, { items: [{ imageSrc: `assets/media/image-10-1600.webp` }] }),
      }),
      (0, _.jsx)(`div`, {
        "data-section": `values`,
        children: (0, _.jsx)(u, {
          textAnimation: `fade-blur`,
          title: `ABOUT OUR VALUES`,
          descriptions: [
            `We value food for uniting people. By focusing on Italian cuisine traditions with fresh, quality ingredients and sustainable practices. Chefs craft dishes reflecting Italy's culinary legacy.`,
            `Our interactive menu and immersive dining environments engage all senses for a unique and memorable dining experience. Traditional recipes are presented in a modern way to offer exceptional dining.`,
          ],
        }),
      }),
      (0, _.jsx)(`div`, {
        "data-section": `values-images`,
        children: (0, _.jsx)(c, {
          items: [
            { imageSrc: `assets/media/image-17-1600.webp` },
            { imageSrc: `assets/media/image-18-1600.webp` },
          ],
        }),
      }),
      (0, _.jsx)(`div`, {
        id: `menu`,
        "data-section": `time-of-day`,
        children: (0, _.jsx)(f, {
          periods: [
            {
              title: `Breakfast`,
              times: [`8 am`, `11 am`],
              color: `#e9c9b7`,
              items: [
                { title: `House cappuccino`, imageSrc: `assets/media/image-07-1600.webp` },
                { title: `Flaky brioche`, imageSrc: `assets/media/image-03-1600.webp` },
                { title: `Croissant muffin`, imageSrc: `assets/media/image-04-1600.webp` },
                { title: `Salmon toast with eggs`, imageSrc: `assets/media/image-05-1600.webp` },
              ],
            },
            {
              title: `Lunch`,
              times: [`1 pm`, `4 pm`],
              color: `#dce2e9`,
              items: [
                {
                  title: `Green leaf pizza`,
                  imageSrc: `assets/media/image-25-1600.webp`,
                },
                {
                  title: `Seafood tagliatelle`,
                  imageSrc: `assets/media/image-31-1600.webp`,
                },
                { title: `Rustic plate`, imageSrc: `assets/media/image-13-1600.webp` },
                {
                  title: `Mixed chickpea salad`,
                  imageSrc: `assets/media/image-12-1600.webp`,
                },
              ],
            },
            {
              title: `Dinner`,
              times: [`7 pm`, `10 pm`],
              color: `#c3b7bb`,
              items: [
                { title: `House spritz`, imageSrc: `assets/media/image-01-1600.webp` },
                { title: `Cured meat board`, imageSrc: `assets/media/image-32-1600.webp` },
                {
                  title: `Grilled steak`,
                  imageSrc: `assets/media/image-02-1600.webp`,
                },
                { title: `Seared salmon`, imageSrc: `assets/media/image-30-1600.webp` },
              ],
            },
          ],
        }),
      }),
      (0, _.jsx)(`div`, {
        "data-section": `marquee`,
        children: (0, _.jsx)(g, { lines: [`YOUR BRAND`, `YOUR TAGLINE HERE`] }),
      }),
      (0, _.jsx)(`div`, {
        "data-section": `video-reveal`,
        children: (0, _.jsx)(l, { maskSrc: `${v}/star4.svg`, videoSrc: `assets/media/video-01.mp4` }),
      }),
      (0, _.jsx)(`div`, {
        id: `dishes`,
        "data-section": `menu`,
        children: (0, _.jsx)(h, {
          textAnimation: `slide-up`,
          categories: [
            {
              title: `Breakfast`,
              items: [
                { title: `Fresh Fruit`, imageSrc: `assets/media/image-11-1600.webp` },
                { title: `Plain Croissant`, imageSrc: `assets/media/image-08-1600.webp` },
                { title: `Flaky Brioche`, imageSrc: `assets/media/image-03-1600.webp` },
                { title: `Croissant muffin`, imageSrc: `assets/media/image-04-1600.webp` },
                { title: `Cream Cannoli`, imageSrc: `assets/media/image-06-1600.webp` },
              ],
            },
            {
              title: `Appetizers`,
              items: [
                { title: `Salmon Toast with Eggs`, imageSrc: `assets/media/image-05-1600.webp` },
                { title: `Cured Meat Board`, imageSrc: `assets/media/image-32-1600.webp` },
                {
                  title: `Mixed Chickpea Salad`,
                  imageSrc: `assets/media/image-12-1600.webp`,
                },
              ],
            },
            {
              title: `Pizza`,
              items: [
                {
                  title: `Green Leaf Pizza`,
                  imageSrc: `assets/media/image-25-1600.webp`,
                },
                {
                  title: `Spring Tomato Pizza`,
                  imageSrc: `assets/media/image-27-1600.webp`,
                },
                {
                  title: `Wild Mushroom Pizza`,
                  imageSrc: `assets/media/image-26-1600.webp`,
                },
                {
                  title: `Cured Ham Pizza`,
                  imageSrc: `assets/media/image-28-1600.webp`,
                },
              ],
            },
            {
              title: `Mains`,
              items: [
                {
                  title: `Seafood Tagliatelle`,
                  imageSrc: `assets/media/image-31-1600.webp`,
                },
                {
                  title: `Grilled Steak`,
                  imageSrc: `assets/media/image-02-1600.webp`,
                },
                { title: `Seared Salmon`, imageSrc: `assets/media/image-30-1600.webp` },
                { title: `Rustic Plate`, imageSrc: `assets/media/image-13-1600.webp` },
              ],
            },
            {
              title: `Drinks`,
              items: [
                { title: `Espresso`, imageSrc: `assets/media/image-09-1600.webp` },
                { title: `House Red Wine`, imageSrc: `assets/media/image-29-1600.webp` },
                { title: `Blood Orange Juice`, imageSrc: `assets/media/image-16-1600.webp` },
                { title: `House Cappuccino`, imageSrc: `assets/media/image-07-1600.webp` },
                { title: `Sparkling Wine`, imageSrc: `assets/media/image-33-1600.webp` },
              ],
            },
          ],
        }),
      }),
      (0, _.jsx)(`div`, {
        id: `reserve`,
        "data-section": `reserve`,
        children: (0, _.jsx)(d, {
          title: `Reserve`,
          button: { text: `Coming soon`, href: `#` },
          imagesSrc: [
            `assets/media/image-19-1600.webp`,
            `assets/media/image-20-1600.webp`,
            `assets/media/image-21-1600.webp`,
            `assets/media/image-22-1600.webp`,
            `assets/media/image-23-1600.webp`,
            `assets/media/image-24-1600.webp`,
          ],
        }),
      }),
      (0, _.jsx)(`div`, {
        id: `contact`,
        "data-section": `footer`,
        className: `bg-background text-foreground`,
        children: (0, _.jsx)(p, {
          brand: `YOUR BRAND`,
          copyright: `20XX © Your Brand`,
          socialLinks: [
            { icon: a, href: `#` },
            { icon: r, href: `#` },
            { icon: i, href: `#` },
          ],
        }),
      }),
    ],
  });
}
export { y as default };
