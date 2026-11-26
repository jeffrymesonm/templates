import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import n from "./LightRaysCenterBackground-CMpbg0Iv.js";
import r from "./NavbarDropdown-CvvuhwrU.js";
import i from "./BlogSimpleCards-ChUagGWr.js";
import a from "./ContactCta-Ce3I-orZ.js";
import o from "./FaqTwoColumn-az-uCx0B.js";
import s from "./FeaturesGridSplit-BnfLyY0H.js";
import c from "./FeaturesMediaCards-8wEtqjDI.js";
import l from "./FooterSimple-aPJ3v-mE.js";
import u from "./HeroBillboardFloatingCards-BLuLUAEp.js";
import d from "./MetricsFeatureCards-BJ1mLSnb.js";
import f from "./PricingLayeredCards-32MIlM-9.js";
import p from "./TestimonialDetailedCards-CJ2nSu19.js";
/* empty css               */ var m = e();
function h() {
  return (0, m.jsxs)(t, {
    root: !0,
    children: [
      (0, m.jsx)(`div`, {
        className: `fixed inset-0 -z-10 opacity-25 pointer-events-none`,
        children: (0, m.jsx)(n, { className: `absolute` }),
      }),
      (0, m.jsx)(r, {
        logo: `Your Brand`,
        navItems: [
          { name: `Features`, href: `#features` },
          { name: `Pricing`, href: `#pricing` },
          { name: `Integrations`, href: `#integrations` },
          { name: `FAQ`, href: `#faq` },
        ],
        ctaButton: { text: `Start Free Trial`, href: `#` },
      }),
      (0, m.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        children: (0, m.jsx)(u, {
          textAnimation: `fade-blur`,
          avatarsSrc: [
            `assets/media/image-01.webp`,
            `assets/media/image-02.webp`,
            `assets/media/image-03.webp`,
            `assets/media/image-04.webp`,
          ],
          avatarsLabel: `Trusted by 100+ users`,
          title: `Headline That States Your Main Promise Clearly`,
          description: `Short description of your product, who it is for and the main result it delivers. One or two sentences.`,
          primaryButton: { text: `Start Free Trial`, href: `#` },
          secondaryButton: { text: `Watch Demo`, href: `#` },
          note: `No credit card required`,
          floatingCardsSrc: [
            `assets/media/image-08.webp`,
            `assets/media/image-09.webp`,
            `assets/media/image-10.webp`,
            `assets/media/image-11.webp`,
          ],
          imageSrc: `assets/media/image-12.webp`,
          logosSrc: [
            `assets/media/image-08.webp`,
            `assets/media/image-09.webp`,
            `assets/media/image-10.webp`,
            `assets/media/image-11.webp`,
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `features`,
        "data-section": `features`,
        children: (0, m.jsx)(s, {
          textAnimation: `fade-blur`,
          tag: `Features`,
          title: `Everything You Need to Scale`,
          description: `Short summary of what your product does and how it helps your customers grow.`,
          topItems: [
            {
              title: `First Key Feature of Your Product`,
              description: `Describe the first key feature: what it does, which problem it solves and the result the customer gets. Keep it to two short sentences.`,
              imageSrc: `assets/media/image-13.webp`,
            },
            {
              title: `Second Key Feature of Your Product`,
              description: `Describe the second key feature: how it saves time or effort for your customers and why it matters. Keep it to two short sentences.`,
              imageSrc: `assets/media/image-15.webp`,
            },
          ],
          bottomItem: {
            title: `Highlighted Feature With a Clear Benefit`,
            description: `Describe the feature you want to highlight most and the benefit it brings. Add a short line that invites the visitor to learn more.`,
            imageSrc: `assets/media/image-14.webp`,
            primaryButton: { text: `View use cases`, href: `#` },
            avatarsSrc: [
              `assets/media/image-01.webp`,
              `assets/media/image-02.webp`,
              `assets/media/image-03.webp`,
              `assets/media/image-04.webp`,
            ],
            avatarsLabel: `Trusted by 100+ clients`,
          },
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `metrics`,
        "data-section": `metrics`,
        children: (0, m.jsx)(d, {
          textAnimation: `fade-blur`,
          tag: `By the Numbers`,
          title: `Results That Speak for Themselves`,
          description: `Short line about the results your customers get with your product.`,
          metrics: [
            {
              value: `100%`,
              title: `First Key Metric`,
              features: [
                `Supporting point for this metric`,
                `Second supporting point`,
                `Third supporting point`,
              ],
            },
            {
              value: `3x`,
              title: `Second Key Metric`,
              features: [
                `Supporting point for this metric`,
                `Second supporting point`,
                `Third supporting point`,
              ],
            },
            {
              value: `25%`,
              title: `Third Key Metric`,
              features: [`Supporting point for this metric`, `Second supporting point`, `Third supporting point`],
            },
          ],
        }),
      }),
      (0, m.jsx)(c, {
        textAnimation: `fade-blur`,
        tag: `How It Works`,
        title: `Built for Modern Teams`,
        description: `Short line that explains how your product works in a few simple steps.`,
        items: [
          {
            title: `Step One`,
            description: `Describe the first step: what the customer sets up or does first and how long it takes to get going.`,
            imageSrc: `assets/media/image-16.webp`,
          },
          {
            title: `Step Two`,
            description: `Describe the second step: the main action the customer takes with your product and what it gives them.`,
            imageSrc: `assets/media/image-17.webp`,
          },
          {
            title: `Step Three`,
            description: `Describe the third step: how the customer follows the results and what happens next.`,
            imageSrc: `assets/media/image-18.webp`,
          },
        ],
      }),
      (0, m.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, m.jsx)(f, {
          textAnimation: `fade-blur`,
          tag: `Pricing`,
          title: `Simple, Transparent Pricing`,
          description: `Short line about your pricing: how to start and how plans grow with the customer.`,
          plans: [
            {
              tag: `Starter`,
              price: `$00/mo`,
              description: `Who this plan is for, in one short sentence.`,
              primaryButton: { text: `Get Started Free`, href: `#` },
              features: [`Plan feature one`, `Plan feature two`, `Plan feature three`, `Plan feature four`],
            },
            {
              tag: `Pro`,
              price: `$00/mo`,
              description: `Who this plan is for and what it adds, in one sentence.`,
              primaryButton: { text: `Start Free Trial`, href: `#` },
              features: [
                `Plan feature one`,
                `Plan feature two`,
                `Plan feature three`,
                `Plan feature four`,
                `Plan feature five`,
                `Plan feature six`,
              ],
            },
            {
              tag: `Enterprise`,
              price: `$00/mo`,
              description: `Who this plan is for, in one short sentence.`,
              primaryButton: { text: `Contact Sales`, href: `#` },
              features: [
                `Plan feature one`,
                `Plan feature two`,
                `Plan feature three`,
                `Plan feature four`,
                `Plan feature five`,
                `Plan feature six`,
                `Plan feature seven`,
              ],
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `testimonials`,
        "data-section": `testimonials`,
        children: (0, m.jsx)(p, {
          textAnimation: `fade-blur`,
          tag: `Testimonials`,
          title: `Loved by Our Customers`,
          description: `See what our customers have to say about Your Brand.`,
          testimonials: [
            {
              quote: `A customer quote about the main result they got after switching to your product and the time it saves them every week.`,
              name: `Full Name`,
              role: `Job Title, Company Name`,
              imageSrc: `assets/media/image-20.webp`,
            },
            {
              quote: `A customer quote about how quickly the product paid for itself and what their team can focus on now.`,
              name: `Full Name`,
              role: `Job Title, Company Name`,
              imageSrc: `assets/media/image-21.webp`,
            },
            {
              quote: `A customer quote about how easy the setup was, how fast they saw results and what they value most.`,
              name: `Full Name`,
              role: `Job Title, Company Name`,
              imageSrc: `assets/media/image-22.webp`,
            },
            {
              quote: `A customer quote about your support team, how fast they answer and how the product keeps improving over time.`,
              name: `Full Name`,
              role: `Job Title, Company Name`,
              imageSrc: `assets/media/image-20.webp`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, m.jsx)(o, {
          textAnimation: `fade-blur`,
          tag: `FAQ`,
          title: `Frequently Asked Questions`,
          description: `Everything you need to know about Your Brand.`,
          items: [
            {
              question: `What is Your Brand?`,
              answer: `Answer in two or three sentences: what your product is, who it is for and the main problem it solves. Close with the benefit the customer gets so they can focus on growing their business.`,
            },
            {
              question: `Is it easy to get started?`,
              answer: `Answer the question about ease of use: who can use the product without help and how long it takes to get the first result.`,
            },
            {
              question: `How does the product work?`,
              answer: `Answer in plain words how the product works behind the scenes and what the customer gets from it, without technical jargon or long lists.`,
            },
            {
              question: `Can I bring my existing data?`,
              answer: `Answer how customers can move their existing data into the product, for example from a file or from the tools they already use.`,
            },
            {
              question: `Is there a free plan?`,
              answer: `Answer whether there is a free plan or trial, what it includes and what the customer needs to sign up. Keep it short and clear.`,
            },
            {
              question: `What integrations do you support?`,
              answer: `List the main types of tools your product connects with and mention whether customers can build their own integrations.`,
            },
            {
              question: `How reliable is the service?`,
              answer: `Answer how you keep the service reliable and secure, and what extra guarantees the higher plans include for larger customers.`,
            },
            {
              question: `Can I cancel anytime?`,
              answer: `Answer your cancellation policy: contract length, how to change plans and where the customer can cancel from their account.`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `blog`,
        "data-section": `blog`,
        children: (0, m.jsx)(i, {
          textAnimation: `fade-blur`,
          tag: `Blog`,
          title: `Latest from the Blog`,
          description: `Short line about what readers will find on your blog.`,
          items: [
            {
              category: `Strategy`,
              title: `Title of a Helpful Article for Your Customers`,
              excerpt: `Short summary of the article: what the reader will learn and why it is useful for them right now.`,
              authorName: `Full Name`,
              authorImageSrc: `assets/media/image-20.webp`,
              date: `Month 00, 20XX`,
              imageSrc: `assets/media/image-07.webp`,
            },
            {
              category: `Tutorial`,
              title: `Step-by-Step Guide to a Common Task`,
              excerpt: `Short summary of the guide: which task it explains and what the reader can do after reading it.`,
              authorName: `Full Name`,
              authorImageSrc: `assets/media/image-21.webp`,
              date: `Month 00, 20XX`,
              imageSrc: `assets/media/image-05.webp`,
            },
            {
              category: `Insights`,
              title: `Insights and Trends From Your Industry`,
              excerpt: `Short summary of the article: the data or trends it covers and what the reader will take away from it.`,
              authorName: `Full Name`,
              authorImageSrc: `assets/media/image-22.webp`,
              date: `Month 00, 20XX`,
              imageSrc: `assets/media/image-06.webp`,
            },
          ],
        }),
      }),
      (0, m.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, m.jsx)(a, {
          textAnimation: `fade-blur`,
          tag: `Get Started`,
          text: `Closing call to action: invite the visitor to start today and tell them what they get in return.`,
          primaryButton: { text: `Start Free Trial`, href: `#` },
          secondaryButton: { text: `Talk to Sales`, href: `#` },
        }),
      }),
      (0, m.jsx)(l, {
        brand: `Your Brand`,
        columns: [
          {
            title: `Product`,
            items: [
              { label: `Features`, href: `#features` },
              { label: `Pricing`, href: `#pricing` },
              { label: `Integrations`, href: `#integrations` },
              { label: `Changelog`, href: `#` },
            ],
          },
          {
            title: `Resources`,
            items: [
              { label: `Blog`, href: `#blog` },
              { label: `Documentation`, href: `#` },
              { label: `API Reference`, href: `#` },
              { label: `Help Center`, href: `#` },
            ],
          },
          {
            title: `Company`,
            items: [
              { label: `About`, href: `#` },
              { label: `Careers`, href: `#` },
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
export { h as default };
