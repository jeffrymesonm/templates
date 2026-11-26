import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./NavbarYellowTile-To8IGNj2.js";
import r from "./ContactGhostWordCard-DoSYRDnw.js";
import i from "./FaqHighlightRows-aC6IEPug.js";
import a from "./FeaturesRideAlongRows-BBCuz52y.js";
import o from "./FooterColumnLines-UYdDAcZG.js";
import s from "./HeroStatsTakeover-CgxOQ8T6.js";
import c from "./PricingLineColumns-B8LnKXX0.js";
import l from "./TeamSaturateCards-BEohc1l_.js";
import u from "./TestimonialHighlightSkip-D6z90xZo.js";
/* empty css              */ var d = e();
function f() {
  return (0, d.jsxs)(`main`, {
    "data-button": `yellow`,
    "data-card": `plain`,
    "data-pattern": `columns`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, d.jsx)(t, {}),
      (0, d.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, d.jsx)(n, {
        brand: `Your Brand`,
        navItems: [
          { name: `Home`, href: `#home` },
          { name: `Classes`, href: `#classes` },
          { name: `Coaches`, href: `#coaches` },
          { name: `Memberships`, href: `#memberships` },
          { name: `FAQ`, href: `#faq` },
        ],
        cta: { text: `Book a free session »`, href: `#join` },
        socials: [
          { text: `Instagram`, href: `#` },
          { text: `YouTube`, href: `#` },
          { text: `Facebook`, href: `#` },
        ],
      }),
      (0, d.jsx)(`div`, {
        id: `home`,
        "data-section": `hero`,
        children: (0, d.jsx)(s, {
          title: `Your Brand Training Club`,
          description: `Short description of your gym and where it is. Mention your classes, personal training and what the space is built for.`,
          stats: [
            { value: `100+`, label: `Members` },
            { value: `10`, label: `Coaches` },
            { value: `50`, label: `Classes a week` },
          ],
          imageSrc: `assets/media/image-06-1600.webp`,
          imageAlt: `Hero image: a member training in your gym`,
          primaryButton: { text: `Book a free session »`, href: `#join` },
          secondaryButton: { text: `See classes`, href: `#classes` },
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `classes`,
        "data-section": `services`,
        "data-scene": !0,
        children: (0, d.jsx)(a, {
          title: `Classes and coaching`,
          items: [
            {
              title: `Class one`,
              description: `Short description of this class: what members do and who it suits.`,
              meta: `Days and times`,
              imageSrc: `assets/media/image-09-1600.webp`,
              imageAlt: `Class one image: members in this class`,
            },
            {
              title: `Class two`,
              description: `Short description of this class: how long it lasts and what it builds.`,
              meta: `Days and times`,
              imageSrc: `assets/media/image-02-1600.webp`,
              imageAlt: `Class two image: members in this class`,
            },
            {
              title: `Class three`,
              description: `Short description of this class: the main exercises and the benefit.`,
              meta: `Days and times`,
              imageSrc: `assets/media/image-12-1600.webp`,
              imageAlt: `Class three image: members in this class`,
            },
            {
              title: `Personal training`,
              description: `One coach, a plan written for you and a weekly check in.`,
              meta: `From $00 a session`,
              imageSrc: `assets/media/image-15-1600.webp`,
              imageAlt: `Personal training image: a coach with a member`,
            },
            {
              title: `Beginner course`,
              description: `Short description of your starter course for new members and its length.`,
              meta: `$00 once`,
              imageSrc: `assets/media/image-03-1600.webp`,
              imageAlt: `Beginner course image: a coach with a new member`,
            },
            {
              title: `Program six`,
              description: `Short description of an advanced program for members who want more.`,
              meta: `On request`,
              imageSrc: `assets/media/image-05-1600.webp`,
              imageAlt: `Program image: members training together`,
            },
          ],
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `coaches`,
        "data-section": `team`,
        children: (0, d.jsx)(l, {
          title: `The coaches`,
          items: [
            {
              name: `Full Name`,
              role: `Head coach and founder`,
              imageSrc: `assets/media/image-07-1600.webp`,
              imageAlt: `Coach portrait`,
            },
            {
              name: `Full Name`,
              role: `Coach role`,
              imageSrc: `assets/media/image-01-1600.webp`,
              imageAlt: `Coach portrait`,
            },
            {
              name: `Full Name`,
              role: `Coach role`,
              imageSrc: `assets/media/image-08-1600.webp`,
              imageAlt: `Coach portrait`,
            },
            {
              name: `Full Name`,
              role: `Personal trainer`,
              imageSrc: `assets/media/image-04-1600.webp`,
              imageAlt: `Coach portrait`,
            },
          ],
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `results`,
        "data-section": `testimonial`,
        children: (0, d.jsx)(u, {
          title: `Member results`,
          items: [
            {
              quote: `A member quote about where they started. A few months later they *reached a clear goal* they are proud of.`,
              name: `Full Name`,
              role: `Member since 20XX`,
              imageSrc: `assets/media/image-10-1600.webp`,
              imageAlt: `Member portrait`,
            },
            {
              quote: `A member quote about how a class helped them. Now training is *the best part of their day*.`,
              name: `Full Name`,
              role: `Class name`,
              imageSrc: `assets/media/image-14-1600.webp`,
              imageAlt: `Member portrait`,
            },
            {
              quote: `A member quote about a problem that is gone and how they feel *stronger than ever before*. A coach made it happen.`,
              name: `Full Name`,
              role: `Personal training`,
              imageSrc: `assets/media/image-13-1600.webp`,
              imageAlt: `Member portrait`,
            },
          ],
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `memberships`,
        "data-section": `pricing`,
        children: (0, d.jsx)(c, {
          title: `Memberships`,
          items: [
            {
              name: `Plan one`,
              price: `$00`,
              period: `per month`,
              features: [
                `Opening hours included`,
                `Equipment you can use`,
                `One coached intro session`,
              ],
              cta: { text: `Join plan one`, href: `#join` },
            },
            {
              name: `Plan two`,
              price: `$00`,
              period: `per month`,
              features: [
                `Every class on the timetable`,
                `Everything in plan one`,
                `Regular progress checks`,
              ],
              cta: { text: `Join plan two`, href: `#join` },
              featured: !0,
            },
            {
              name: `Plan three`,
              price: `$00`,
              period: `per month`,
              features: [
                `One to one sessions`,
                `Plan and nutrition guidance`,
                `Everything in plan two`,
              ],
              cta: { text: `Ask about plan three`, href: `#join` },
            },
          ],
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, d.jsx)(i, {
          title: `Questions`,
          items: [
            {
              title: `I have never trained. Can I join?`,
              description: `Answer explaining how beginners start, for example with a short starter course that teaches the basics step by step.`,
            },
            {
              title: `What does the free session include?`,
              description: `Answer describing the free session: a tour, a short assessment and one class. Say there is no contract.`,
            },
            {
              title: `When do classes run?`,
              description: `Answer with how many classes run each week and your opening hours on weekdays and weekends. Say how to book.`,
            },
            {
              title: `Is there a joining fee or contract?`,
              description: `Answer explaining your fees, how memberships renew and the notice needed to cancel.`,
            },
            {
              title: `Is there parking and showers?`,
              description: `Answer listing your facilities, such as changing rooms, showers, lockers, bike storage and parking nearby.`,
            },
          ],
        }),
      }),
      (0, d.jsx)(`div`, {
        id: `join`,
        "data-section": `contact`,
        children: (0, d.jsx)(r, {
          title: `Book a free session`,
          description: `Tell us your goal and when you can train. A coach will reply within one working day with a time.`,
          ghostWord: `Join`,
          submitText: `Book my session`,
        }),
      }),
      (0, d.jsx)(`div`, {
        "data-section": `footer`,
        children: (0, d.jsx)(o, {
          brand: `Your Brand`,
          columns: [
            {
              title: `Menu`,
              links: [
                { text: `Home`, href: `#home` },
                { text: `Classes`, href: `#classes` },
                { text: `Coaches`, href: `#coaches` },
                { text: `Memberships`, href: `#memberships` },
              ],
            },
            {
              title: `Socials`,
              links: [
                { text: `Instagram`, href: `#` },
                { text: `YouTube`, href: `#` },
                { text: `Facebook`, href: `#` },
              ],
            },
            {
              title: `Visit`,
              links: [
                { text: `hello@example.com`, href: `mailto:hello@example.com` },
                { text: `+00 000 000 0000`, href: `tel:+000000000000` },
                { text: `123 Example Street, City`, href: `#` },
              ],
            },
          ],
          credit: { text: `© 20XX Your Brand`, href: `#home` },
          legalLinks: [
            { text: `Privacy policy`, href: `#` },
            { text: `Terms`, href: `#` },
          ],
        }),
      }),
    ],
  });
}
export { f as default };
