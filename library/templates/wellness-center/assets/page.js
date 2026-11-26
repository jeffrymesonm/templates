import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import n from "./NavbarFloating-CJsiqIZg.js";
import r from "./BlogMediaCards-D6zf3ULA.js";
import i from "./FaqSimple-CaEB436g.js";
import a from "./FeaturesAlternatingSplit-DWQiYCdz.js";
import o from "./FeaturesMediaSimple-F47jVGEW.js";
import s from "./FooterSimpleMedia-DaeOqc30.js";
import c from "./HeroOverlayStatistics-DQ06LZeJ.js";
import l from "./PricingHighlightedCards-BxfYOpjH.js";
/* empty css              */ var u = e();
function d() {
  return (0, u.jsxs)(t, {
    root: !0,
    children: [
      (0, u.jsx)(n, {
        logo: `Your Brand`,
        navItems: [
          { name: `Services`, href: `#services` },
          { name: `How It Works`, href: `#how-it-works` },
          { name: `Pricing`, href: `#pricing` },
          { name: `Journal`, href: `#blog` },
          { name: `FAQ`, href: `#faq` },
        ],
        ctaButton: { text: `Apply Now`, href: `#contact` },
      }),
      (0, u.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        children: (0, u.jsx)(c, {
          textAnimation: `slide-up`,
          title: `Headline With Your Main Health Promise.`,
          description: `Short description of your wellness center: what you measure or treat, who it is for and the result clients can expect after working with your team.`,
          primaryButton: { text: `Apply Now`, href: `#contact` },
          secondaryButton: { text: `See Our Services`, href: `#services` },
          imageSrc: `assets/media/set-01/image-01.webp`,
          avatarsSrc: [
            `assets/media/set-03/image-01.webp`,
            `assets/media/set-03/image-02.webp`,
            `assets/media/set-03/image-03.webp`,
          ],
          avatarsLabel: `Trusted by 100+ clients`,
          statistics: [
            { title: `100+ Metric`, subtitle: `Short supporting line` },
            { title: `Key Benefit`, subtitle: `Short supporting line` },
            { title: `100+ Clients`, subtitle: `Short supporting line` },
          ],
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        children: (0, u.jsx)(o, {
          textAnimation: `slide-up`,
          tag: `Our Services`,
          title: `Services Section Title`,
          description: `Short paragraph explaining your approach: how every program starts, what you take into account for each client and why it works better than a generic plan.`,
          items: [
            {
              title: `First Service`,
              description: `Short description of this service: what the client does and what they receive from it.`,
              imageSrc: `assets/media/set-02/image-01.webp`,
            },
            {
              title: `Second Service`,
              description: `Short description of this service and how clients follow their progress over time.`,
              imageSrc: `assets/media/set-02/image-02.webp`,
            },
            {
              title: `Third Service`,
              description: `Short description of this service and how it is tailored to each client.`,
              imageSrc: `assets/media/set-02/image-03.webp`,
            },
          ],
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `how-it-works`,
        "data-section": `how-it-works`,
        children: (0, u.jsx)(a, {
          textAnimation: `slide-up`,
          tag: `How It Works`,
          title: `Your Process Explained in 3 Steps`,
          description: `One or two sentences explaining how your method differs from the usual approach and why clients choose it.`,
          items: [
            {
              title: `First Step Title`,
              description: `Describe the first step of your process: the assessment or first visit, what you look at with each client and what your team learns from it before recommending anything to them.`,
              imageSrc: `assets/media/set-03/image-01.webp`,
            },
            {
              title: `Second Step Title`,
              description: `Describe the second step: how you turn the assessment into a personal plan, which areas it covers and how it is adapted to the goals and needs of each client.`,
              imageSrc: `assets/media/set-03/image-02.webp`,
            },
            {
              title: `Third Step Title`,
              description: `Describe the third step: how you follow each client over time, when you review the plan and how you adjust it so their results keep improving.`,
              imageSrc: `assets/media/set-03/image-03.webp`,
            },
          ],
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, u.jsx)(l, {
          textAnimation: `slide-up`,
          tag: `Pricing`,
          title: `Pricing Section Title Goes Here`,
          description: `One or two sentences about your pricing: what is included and how clients pay for it.`,
          plans: [
            {
              tag: `Basic`,
              price: `$00`,
              description: `Who this plan is for`,
              features: [
                `First feature of this plan`,
                `Second feature of this plan`,
                `Third feature of this plan`,
                `Fourth feature of this plan`,
                `Fifth feature of this plan`,
              ],
              primaryButton: { text: `Get Started`, href: `#contact` },
            },
            {
              tag: `Standard`,
              price: `$00/mo`,
              description: `Who this plan is for`,
              highlight: `Most Popular`,
              features: [
                `Everything in the first plan`,
                `Second feature of this plan`,
                `Third feature of this plan`,
                `Fourth feature of this plan`,
                `Fifth feature of this plan`,
                `Sixth feature of this plan`,
              ],
              primaryButton: { text: `Get Started`, href: `#contact` },
            },
            {
              tag: `Premium`,
              price: `$00/mo`,
              description: `Who this plan is for`,
              features: [
                `Everything in the second plan`,
                `Second feature of this plan`,
                `Third feature of this plan`,
                `Fourth feature of this plan`,
                `Fifth feature of this plan`,
                `Sixth feature of this plan`,
              ],
              primaryButton: { text: `Contact Us`, href: `#contact` },
            },
          ],
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `blog`,
        "data-section": `blog`,
        children: (0, u.jsx)(r, {
          textAnimation: `slide-up`,
          tag: `Journal`,
          title: `Articles Section Title`,
          description: `One sentence introducing the articles and guides you publish for your clients.`,
          items: [
            {
              category: `Category`,
              title: `Article Title That Explains the Main Topic in a Few Words`,
              excerpt: `Short summary of the article: the question it answers and what the reader will learn by reading it to the end.`,
              authorName: `Full Name`,
              authorImageSrc: `assets/media/set-03/image-01.webp`,
              date: `Month 00, 20XX`,
              imageSrc: `assets/media/set-02/image-01.webp`,
              href: `#`,
            },
            {
              category: `Category`,
              title: `Article Title About a Common Client Question`,
              excerpt: `Short summary of the article: the problem it covers, why it matters to your clients and the practical advice it gives them.`,
              authorName: `Full Name`,
              authorImageSrc: `assets/media/set-03/image-02.webp`,
              date: `Month 00, 20XX`,
              imageSrc: `assets/media/set-02/image-02.webp`,
              href: `#`,
            },
            {
              category: `Category`,
              title: `Article Title About a Topic Your Clients Care About`,
              excerpt: `Short summary of the article: the idea behind it, what most people get wrong about the topic and how your team helps clients with it.`,
              authorName: `Full Name`,
              authorImageSrc: `assets/media/set-03/image-03.webp`,
              date: `Month 00, 20XX`,
              imageSrc: `assets/media/set-02/image-03.webp`,
              href: `#`,
            },
          ],
        }),
      }),
      (0, u.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, u.jsx)(i, {
          textAnimation: `slide-up`,
          tag: `FAQ`,
          title: `Frequently Asked Questions`,
          description: `Short line introducing the answers below.`,
          items: [
            {
              question: `How is your service different from the usual option?`,
              answer: `Answer explaining what makes your approach different: how much time you spend with each client, what you look at that others do not and the kind of results you aim for with every plan.`,
            },
            {
              question: `Who can benefit from your services?`,
              answer: `Answer describing the people you usually help, why they come to you even when they feel fine and what you can detect or improve for them before small issues become bigger problems.`,
            },
            {
              question: `How quickly will I see results?`,
              answer: `Answer explaining when clients usually notice the first changes, how you measure progress along the way and why results keep improving the longer they follow the plan with your team.`,
            },
            {
              question: `How does payment work?`,
              answer: `Answer explaining how clients pay for your services, what is included in the price and any options for coverage, financing or packages so there are no surprises later.`,
            },
            {
              question: `What happens during my first visit?`,
              answer: `Answer describing the first visit step by step: the tests or assessments you run, the conversation about goals and history, and what the client receives afterwards and how soon they get it.`,
            },
            {
              question: `Can I do this remotely?`,
              answer: `Answer explaining which parts of your service can be done online, which ones need an in-person visit and how clients who live far away can still work with your team.`,
            },
          ],
        }),
      }),
      (0, u.jsx)(s, {
        imageSrc: `assets/media/set-01/image-01.webp`,
        brand: `Your Brand`,
        columns: [
          {
            title: `Company`,
            items: [
              { label: `About`, href: `#` },
              { label: `Careers`, href: `#` },
              { label: `Press`, href: `#` },
            ],
          },
          {
            title: `Services`,
            items: [
              { label: `Diagnostics`, href: `#services` },
              { label: `Protocols`, href: `#how-it-works` },
              { label: `Pricing`, href: `#pricing` },
            ],
          },
          {
            title: `Resources`,
            items: [
              { label: `Journal`, href: `#blog` },
              { label: `FAQ`, href: `#faq` },
              { label: `Contact`, href: `#contact` },
            ],
          },
        ],
        copyright: `© 20XX Your Brand. All rights reserved.`,
        links: [
          { label: `Privacy Policy`, href: `#` },
          { label: `Terms of Service`, href: `#` },
        ],
      }),
    ],
  });
}
export { d as default };
