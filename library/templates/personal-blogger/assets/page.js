import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import n from "./SmoothCursorLine-Q6hDxVHF.js";
import r from "./FeaturesBentoGridCta-DKZfhn85.js";
import i from "./FeaturesCarouselMarquee-DmVd8SS2.js";
import a from "./FeaturesParallaxShowcase-DVfUbOKa.js";
import o from "./FooterBasic-BD_U6-vB.js";
import s from "./HeroStickerFlip-vjTaT3xW.js";
/* empty css              */ var c = e();
function l() {
  return (0, c.jsxs)(t, {
    root: !0,
    children: [
      (0, c.jsx)(n, {}),
      (0, c.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        children: (0, c.jsx)(s, {
          title: `Hey, I'm Full Name`,
          description: `Your Role & Niche`,
          imageSrc: `assets/media/image-08-1600.webp`,
          backTextSegments: [
            { type: `text`, content: `I'm currently ` },
            { type: `photo`, src: `assets/media/image-10-1600.webp` },
            { type: `highlight`, content: ` traveling all over the world ` },
            { type: `text`, content: `capturing moments, ` },
            { type: `highlight`, content: `writing stories ` },
            { type: `text`, content: `and sharing the ` },
            { type: `highlight`, content: `places I love` },
          ],
          clickBadgeText: `Click me!`,
          stickerImageSrcs: [
            `assets/media/image-13-1600.webp`,
            `assets/media/image-04-1600.webp`,
            `assets/media/image-22-1600.webp`,
            `assets/media/image-17-1600.webp`,
            `assets/media/image-01-1600.webp`,
            `assets/media/image-20-1600.webp`,
            `assets/media/image-24-1600.webp`,
            `assets/media/image-15-1600.webp`,
          ],
          socialLinks: [
            { iconSrc: `assets/media/set-01/image-01.svg`, href: `#`, label: `Instagram` },
            { iconSrc: `assets/media/set-01/image-02.svg`, href: `#`, label: `TikTok` },
            { iconSrc: `assets/media/set-01/image-03.svg`, href: `#`, label: `Twitter` },
          ],
        }),
      }),
      (0, c.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, c.jsx)(r, {
          textAnimation: `fade`,
          tag: `A Little About Me`,
          title: `The Things That Make Me, Me`,
          description: `Family, adventures, and a camera that goes everywhere I do.`,
          features: [
            {
              title: `Family First`,
              description: `The people who shaped who I am and who I carry with me everywhere.`,
              imageSrc: `assets/media/image-03-1600.webp`,
            },
            {
              title: `Wanderlust`,
              description: `New cities, unfamiliar streets, and the feeling of being wonderfully lost.`,
              imageSrc: `assets/media/image-23-1600.webp`,
            },
            {
              title: `Through My Lens`,
              description: `Photography isn't just a hobby — it's how I remember everything.`,
              imageSrc: `assets/media/image-12-1600.webp`,
            },
            {
              title: `Good Food, Good Mood`,
              description: `Every place has a dish that tells you more than any guidebook could.`,
              imageSrc: `assets/media/image-05-1600.webp`,
            },
          ],
          ctaButton: {
            text: `Let's connect!`,
            href: `#contact`,
            avatarSrc: `assets/media/image-08-1600.webp`,
            avatarLabel: `You`,
          },
        }),
      }),
      (0, c.jsx)(`div`, {
        id: `milestones`,
        "data-section": `milestones`,
        children: (0, c.jsx)(i, {
          textAnimation: `fade`,
          tag: `Life in Frames`,
          title: `Moments I'll Never Forget`,
          description: `Big milestones, quiet sunsets, and everything worth remembering in between.`,
          primaryButton: { text: `See the full gallery`, href: `#gallery` },
          secondaryButton: { text: `Follow my journey`, href: `#follow` },
          items: [
            { imageSrc: `assets/media/image-07-1600.webp`, label: `Graduation Day` },
            {
              imageSrc: `assets/media/image-18-1600.webp`,
              label: `Favorite Trip`,
            },
            { imageSrc: `assets/media/image-21-1600.webp`, label: `First Solo Trip` },
            { imageSrc: `assets/media/image-06-1600.webp`, label: `Golden Hour` },
            { imageSrc: `assets/media/image-19-1600.webp`, label: `Big Birthday` },
            { imageSrc: `assets/media/image-11-1600.webp`, label: `Island Life` },
          ],
        }),
      }),
      (0, c.jsx)(`div`, {
        id: `showcase`,
        "data-section": `showcase`,
        children: (0, c.jsx)(a, {
          title: `Say Cheeeese! 📸`,
          backgroundSrc: `assets/media/image-16-1600.webp`,
          leftImageSrc: `assets/media/image-09-1600.webp`,
          rightImageSrc: `assets/media/image-02-1600.webp`,
        }),
      }),
      (0, c.jsx)(o, {
        columns: [
          {
            title: `Follow`,
            items: [
              { label: `Instagram`, href: `#` },
              { label: `TikTok`, href: `#` },
              { label: `Twitter`, href: `#` },
            ],
          },
          {
            title: `Explore`,
            items: [
              { label: `Blog`, href: `#` },
              { label: `Gallery`, href: `#gallery` },
              { label: `About`, href: `#about` },
            ],
          },
          {
            title: `Connect`,
            items: [
              { label: `Contact`, href: `#contact` },
              { label: `Collaborate`, href: `#` },
            ],
          },
        ],
        leftText: `© 20XX Your Brand. All rights reserved.`,
        rightText: `Made with love`,
      }),
    ],
  });
}
export { l as default };
