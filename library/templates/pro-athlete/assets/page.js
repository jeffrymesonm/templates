import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./LoaderEmblemFill-BQFSg_mJ.js";
import r from "./NavbarSlantMenu-zs2hzytB.js";
import i from "./AboutQuotePolaroids-B1SPr-_v.js";
import a from "./FeaturesPartnerStage-BhKTYT_o.js";
import o from "./FooterRecordPanel-DiDYDjUW.js";
import s from "./GalleryCardField-IWU2aIM_.js";
import c from "./HeroPortraitSignature-v1gHndD8.js";
import l from "./CtaStripAccordion-DlvBUUjW.js";
import u from "./TestimonialPolaroidMarquee-DJbGo-0c.js";
/* empty css              */ var d = e(),
  f = 4.4;
function p() {
  return (0, d.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `filled`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, d.jsx)(t, {}),
      (0, d.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, d.jsx)(n, {
        videoSrc: `assets/media/video-01-1600.mp4`,
        imageAlt: `Intro video: the athlete walking out under stadium lights`,
        introDelay: 4.4,
      }),
      (0, d.jsx)(r, {
        navItems: [
          { name: `Home`, href: `#hero` },
          { name: `On-Field`, href: `#gallery` },
          { name: `Off-Field`, href: `#about` },
          { name: `Foundation`, href: `#cta` },
          { name: `Partnerships`, href: `#services` },
          { name: `Journal`, href: `#testimonial` },
          { name: `Inquiries`, href: `#footer` },
        ],
        socials: [
          { label: `Instagram`, href: `#`, icon: `instagram` },
          { label: `TikTok`, href: `#`, icon: `tiktok` },
          { label: `X`, href: `#`, icon: `x` },
          { label: `Twitch`, href: `#`, icon: `twitch` },
        ],
        copyright: `© Your Brand`,
        note: `Your tagline here`,
        legalLinks: [
          { text: `Privacy`, href: `#` },
          { text: `Terms`, href: `#` },
        ],
        credit: `Site by Studio Name`,
        soundSrc: {
          hover: `assets/media/sfx-hover-800.m4a`,
          click: `assets/media/sfx-click-800.m4a`,
          toggleOn: `assets/media/sfx-toggle-on-800.m4a`,
          toggleOff: `assets/media/sfx-toggle-off-800.m4a`,
        },
      }),
      (0, d.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        className: `contents`,
        children: (0, d.jsx)(c, {
          introDelay: f,
          title: `Your Brand`,
          description: `A short story about where the athlete comes from and what drives them. Every move carries intention, style and a story beyond the field.`,
          cardText: `The draft pick out of college who rewrote the record books, the rookie card that marked the start of a long professional career.`,
          imageSrc: `assets/media/image-29-1600.webp`,
          imageAlt: `Hero image: portrait of the athlete`,
          diffuseSrc: `assets/media/image-28-1600.webp`,
          depthSrc: `assets/media/image-27-1600.webp`,
          alphaSrc: `assets/media/image-26-1600.webp`,
          lensMaskSrc: `assets/media/image-30-1600.webp`,
          lensTintSrc: `assets/media/image-31-1600.webp`,
          lensLogoSrc: ``,
          reflectionSrc: `assets/media/image-20-1600.webp`,
          reflectionVideoSrc: `assets/media/video-01-1600.mp4`,
          wordmarkSrcs: [`assets/media/image-47-800.svg`, `assets/media/image-46-800.svg`],
          cardImageSrc: `assets/media/image-33-1600.webp`,
          cardImageAlt: `Card image: rookie card`,
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `gallery`,
        "data-section": `gallery`,
        "data-scene": !0,
        className: `contents`,
        children: (0, d.jsx)(s, {
          title: `Signature Moments`,
          items: [
            {
              title: `Moment One`,
              stat: `10 REC · 200 YDS · 2 TD`,
              imageSrc: `assets/media/image-33-800.webp`,
              imageAlt: `Moment One trading card`,
              videoSrc: `assets/media/video-03-800.mp4`,
            },
            {
              title: `Season Record`,
              stat: `100 REC · 1,000 YDS · 10 TD`,
              imageSrc: `assets/media/image-35-800.webp`,
              imageAlt: `Season Record trading card`,
              videoSrc: `assets/media/video-05-800.mp4`,
            },
            {
              title: `Moment Three`,
              stat: `4TH & 10 · 30-YARD ONE-HANDED CATCH`,
              imageSrc: `assets/media/image-36-800.webp`,
              imageAlt: `Moment Three trading card`,
              videoSrc: `assets/media/video-06-800.mp4`,
            },
            {
              title: `Player of the Year Award`,
              stat: `120 REC · 1,500 YDS · 10 TD`,
              imageSrc: `assets/media/image-32-800.webp`,
              imageAlt: `Player of the Year Award trading card`,
              videoSrc: `assets/media/video-02-800.mp4`,
            },
            {
              title: `All-Star Selection`,
              stat: `4× Selection · 20XX–20XX`,
              imageSrc: `assets/media/image-34-800.webp`,
              imageAlt: `All-Star Selection trading card`,
              videoSrc: `assets/media/video-04-800.mp4`,
            },
          ],
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        "data-scene": !0,
        children: (0, d.jsx)(i, {
          overlap: 221,
          title: `I want people to remember me for more than the game`,
          description: `More than routes, more than records, more than the game itself. Writing a story that outlasts every snap, every season, every era.`,
          items: [
            {
              imageSrc: `assets/media/image-43-800.webp`,
              imageAlt: `Quote image: seen from behind in a team jersey`,
            },
            {
              imageSrc: `assets/media/image-45-800.webp`,
              imageAlt: `Quote image: selfie with the crowd`,
            },
            {
              imageSrc: `assets/media/image-44-800.webp`,
              imageAlt: `Quote image: casual portrait`,
            },
          ],
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        "data-scene": !0,
        children: (0, d.jsx)(a, {
          handoff: 120,
          title: `Partnerships`,
          items: [
            {
              title: `Partner One`,
              description: `The signature partnership. The face of the brand's football line, custom game-day cleats, design sessions at headquarters and a say in where the footwear goes next.`,
              images: [{ src: `assets/media/image-42-1600.webp`, alt: `Partner image: gold football cleat` }],
              kind: `cutout`,
              float: !0,
              width: 100,
              shift: [0, 2],
            },
            {
              title: `Partner Two`,
              description: `Long-running drinks partner, with national campaigns, sideline visibility and a recurring slot in their game-day rotation.`,
              images: [
                {
                  src: `assets/media/image-24-1600.webp`,
                  alt: `Partner image: black and white portrait`,
                },
                {
                  src: `assets/media/image-25-1600.webp`,
                  alt: `Partner image: press event`,
                },
              ],
              kind: `pair`,
            },
            {
              title: `Partner Three`,
              description: `National soft-drink campaigns, suiting up for a big commercial alongside famous faces and crashing tailgates with the fans.`,
              images: [
                {
                  src: `assets/media/image-41-1600.webp`,
                  alt: `Partner image: campaign portrait in a work jacket`,
                },
              ],
              kind: `cutout`,
              bleed: !0,
            },
            {
              title: `Partner Four`,
              description: `Cereal-box royalty, limited-edition covers, a signature flavour, the athlete's own snack mix, and aisle-side spots with a famous actor.`,
              images: [
                {
                  src: `assets/media/image-39-1600.webp`,
                  alt: `Partner image: cereal boxes featuring the athlete`,
                },
              ],
              kind: `cutout`,
              width: 50,
            },
            {
              title: `Partner Five`,
              description: `Lifestyle and performance eyewear collaboration with the brand, from training visors to off-field shades.`,
              images: [
                {
                  src: `assets/media/image-40-1600.webp`,
                  alt: `Partner image: profile wearing sunglasses`,
                },
              ],
              kind: `cutout`,
              bleed: !0,
            },
            {
              title: `Partner Six`,
              description: `Game-day arrivals run through the audio partner, headphone campaigns and the custom iced-out pairs worn through the tunnel.`,
              images: [
                {
                  src: `assets/media/image-38-1600.webp`,
                  alt: `Partner image: custom headphones`,
                },
              ],
              kind: `cutout`,
              width: 66,
              shift: [-3, 0],
            },
          ],
          logos: [],
          button: { text: `View all`, href: `#partners` },
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `cta`,
        "data-section": `cta`,
        children: (0, d.jsx)(l, {
          underlay: 120,
          title: `Building something that lasts`,
          name: `The Foundation`,
          description: `A foundation that delivers a true impact in the community.`,
          items: [
            {
              imageSrc: `assets/media/image-04-1600.webp`,
              imageAlt: `Foundation image: campers on the field`,
            },
            {
              imageSrc: `assets/media/image-07-1600.webp`,
              imageAlt: `Foundation image: young athletes at the camp`,
            },
            {
              imageSrc: `assets/media/image-03-1600.webp`,
              imageAlt: `Foundation image: handing out backpacks at a community drive`,
            },
            {
              imageSrc: `assets/media/image-05-1600.webp`,
              imageAlt: `Foundation image: dancing at youth camp`,
            },
            {
              imageSrc: `assets/media/image-06-1600.webp`,
              imageAlt: `Foundation image: volunteers and families at a holiday drive`,
            },
          ],
          primaryButton: { text: `Learn more`, href: `#foundation` },
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `testimonial`,
        "data-section": `testimonial`,
        children: (0, d.jsx)(u, {
          title: `00 is gonna go out there and make a play`,
          items: [
            {
              title: `All-hands at partner HQ`,
              imageSrc: `assets/media/image-22-800.webp`,
              imageAlt: `All-hands at partner HQ`,
            },
            {
              title: `White on white, road game`,
              imageSrc: `assets/media/image-23-800.webp`,
              imageAlt: `White on white, road game`,
            },
            {
              title: `City trip, all white`,
              imageSrc: `assets/media/image-12-800.webp`,
              imageAlt: `City trip, all white`,
            },
            {
              title: `Red carpet, sparkly suit`,
              imageSrc: `assets/media/image-17-800.webp`,
              imageAlt: `Red carpet, sparkly suit`,
            },
            {
              title: `Youth camp days`,
              imageSrc: `assets/media/image-09-800.webp`,
              imageAlt: `Youth camp days`,
            },
            {
              title: `Suited for the honors`,
              imageSrc: `assets/media/image-18-800.webp`,
              imageAlt: `Suited for the honors`,
            },
            {
              title: `Big in the city`,
              imageSrc: `assets/media/image-08-800.webp`,
              imageAlt: `Big in the city`,
            },
            {
              title: `On set for a campaign`,
              imageSrc: `assets/media/image-15-800.webp`,
              imageAlt: `On set for a campaign`,
            },
            {
              title: `Park walk, off duty`,
              imageSrc: `assets/media/image-21-800.webp`,
              imageAlt: `Park walk, off duty`,
            },
            {
              title: `Touchdown, home stadium`,
              imageSrc: `assets/media/image-20-800.webp`,
              imageAlt: `Touchdown, home stadium`,
            },
            {
              title: `City tailoring`,
              imageSrc: `assets/media/image-14-800.webp`,
              imageAlt: `City tailoring`,
            },
            {
              title: `City streets`,
              imageSrc: `assets/media/image-13-800.webp`,
              imageAlt: `City streets`,
            },
            {
              title: `Rain check, abroad`,
              imageSrc: `assets/media/image-16-800.webp`,
              imageAlt: `Rain check, abroad`,
            },
            {
              title: `Stadium moment`,
              imageSrc: `assets/media/image-11-800.webp`,
              imageAlt: `Stadium moment`,
            },
            {
              title: `College nights`,
              imageSrc: `assets/media/image-10-800.webp`,
              imageAlt: `College nights`,
            },
            {
              title: `Street style`,
              imageSrc: `assets/media/image-19-800.webp`,
              imageAlt: `Street style`,
            },
          ],
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        children: (0, d.jsx)(o, {
          title: `Records were made to be broken`,
          primaryButton: { text: `On-Field`, href: `#gallery` },
          imageSrc: `assets/media/image-02-1600.webp`,
          imageAlt: `Footer image: helmet close-up`,
          panelImageSrc: `assets/media/image-01-800.webp`,
          panelImageAlt: `Footer image: gold cleat cut-out`,
          logos: [],
          note: `Your tagline here`,
          copyright: `© 20XX Your Brand`,
          legalLinks: [
            { text: `Privacy`, href: `#` },
            { text: `Terms`, href: `#` },
          ],
          credit: `Site by Studio Name`,
        }),
      }),
    ],
  });
}
export { p as default };
