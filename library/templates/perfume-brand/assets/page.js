import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import n from "./CornerGlowBackground-BksAScU7.js";
import { t as r } from "./LightRaysCornerBackground-fcLCtIbA.js";
import i from "./NavbarDropdown-CvvuhwrU.js";
import a from "./BlogSimpleCards-ChUagGWr.js";
import o from "./ContactSplitForm-oVn5m90m.js";
import s from "./FaqSplitMedia-LskckYRr.js";
import c from "./FeaturesAlternatingSplit-DWQiYCdz.js";
import l from "./FeaturesMediaCards-8wEtqjDI.js";
import u from "./FooterBrand-DLRDSF8d.js";
import d from "./HeroBillboardTiltedCarousel-B11nMPlw.js";
import f from "./ProductVariantCards-BRdE_8vd.js";
/* empty css               */ var p = e();
function m() {
  return (0, p.jsxs)(t, {
    root: !0,
    children: [
      (0, p.jsx)(n, { className: `fixed` }),
      (0, p.jsx)(i, {
        logo: `Your Brand`,
        navItems: [
          { name: `Collection`, href: `#products` },
          { name: `Craft`, href: `#features` },
          { name: `Journal`, href: `#blog` },
          { name: `Contact`, href: `#contact` },
        ],
        ctaButton: { text: `Shop Now`, href: `#products` },
      }),
      (0, p.jsxs)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        className: `relative isolate`,
        children: [
          (0, p.jsx)(r, { className: `absolute` }),
          (0, p.jsx)(d, {
            textAnimation: `fade`,
            tag: `Luxury Fragrance`,
            title: `Headline That States Your Main Promise Here`,
            description: `Short description of your brand and your products: what makes them special and who they are made for, in one or two sentences.`,
            primaryButton: { text: `Explore Collection`, href: `#products` },
            secondaryButton: { text: `Our Craft`, href: `#features` },
            items: [
              { imageSrc: `assets/media/set-01/image-03.webp` },
              { imageSrc: `assets/media/set-01/image-04.webp` },
              { imageSrc: `assets/media/set-01/image-05.webp` },
              { imageSrc: `assets/media/set-01/image-06.webp` },
              { imageSrc: `assets/media/set-01/image-07.webp` },
              { imageSrc: `assets/media/set-01/image-08.webp` },
            ],
          }),
        ],
      }),
      (0, p.jsx)(`div`, {
        id: `products`,
        "data-section": `products`,
        children: (0, p.jsx)(f, {
          textAnimation: `fade`,
          tag: `Best Sellers`,
          title: `Featured Collection`,
          description: `Short introduction to your best-selling products: what they have in common and why customers choose them.`,
          products: [
            {
              name: `Product Name One`,
              variant: `50ml • Scent Family`,
              price: `$00`,
              imageSrc: `assets/media/set-01/image-09.webp`,
            },
            {
              name: `Product Name Two`,
              variant: `50ml • Scent Family`,
              price: `$00`,
              imageSrc: `assets/media/set-01/image-10.webp`,
            },
            {
              name: `Product Name Three`,
              variant: `100ml • Scent Family`,
              price: `$00`,
              imageSrc: `assets/media/set-01/image-11.webp`,
            },
            {
              name: `Product Name Four`,
              variant: `30ml • Scent Family`,
              price: `$00`,
              imageSrc: `assets/media/set-01/image-12.webp`,
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `features`,
        "data-section": `features`,
        children: (0, p.jsx)(c, {
          textAnimation: `fade`,
          tag: `Perfumery Craft`,
          title: `What Makes Your Products Different`,
          description: `Short introduction to how you make your products and the care that goes into each one, from start to finish.`,
          items: [
            {
              title: `First Strength Here`,
              description: `Describe where your ingredients or materials come from and why that choice matters to the final product and the customer.`,
              imageSrc: `assets/media/set-04/image-01.webp`,
            },
            {
              title: `Second Strength`,
              description: `Describe the people or the process behind each product and the expertise they bring, in a sentence or two at most.`,
              imageSrc: `assets/media/set-04/image-02.webp`,
            },
            {
              title: `Third Strength`,
              description: `Describe a key benefit the customer notices when using the product, and how it makes a difference in their day.`,
              imageSrc: `assets/media/set-04/image-03.webp`,
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `influencers`,
        "data-section": `influencers`,
        children: (0, p.jsx)(l, {
          textAnimation: `fade`,
          tag: `Community`,
          title: `Chosen By The People Who Inspire Us`,
          description: `Short line about the community that wears and shares your brand.`,
          items: [
            {
              title: `Full Name`,
              description: ` `,
              videoSrc: `assets/media/set-01/video-01.mp4`,
            },
            {
              title: `Full Name`,
              description: ` `,
              videoSrc: `assets/media/set-01/video-02.mp4`,
            },
            {
              title: `Full Name`,
              description: ` `,
              videoSrc: `assets/media/set-01/video-03.mp4`,
            },
            {
              title: `Full Name`,
              description: ` `,
              videoSrc: `assets/media/set-01/video-04.mp4`,
            },
            {
              title: `Full Name`,
              description: ` `,
              videoSrc: `assets/media/set-01/video-06.mp4`,
            },
            {
              title: `Full Name`,
              description: ` `,
              videoSrc: `assets/media/set-01/video-05.mp4`,
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `blog`,
        "data-section": `blog`,
        children: (0, p.jsx)(a, {
          textAnimation: `fade`,
          tag: `Journal`,
          title: `The Brand Journal`,
          description: `Short introduction to your blog: the topics you write about and why readers should follow along.`,
          items: [
            {
              category: `Category`,
              title: `Title of your first article goes here today`,
              excerpt: `Short summary of the article: what the reader will learn and why it is worth reading through to the end.`,
              imageSrc: `assets/media/set-02/image-01.webp`,
              authorName: `Full Name`,
              authorImageSrc: `assets/media/set-03/image-01.webp`,
              date: `Month 20XX`,
            },
            {
              category: `Category`,
              title: `Title of your second article: a short subtitle`,
              excerpt: `Short summary of the article: the story it tells and what makes it interesting for your audience.`,
              imageSrc: `assets/media/set-02/image-02.webp`,
              authorName: `Full Name`,
              authorImageSrc: `assets/media/set-03/image-02.webp`,
              date: `Month 20XX`,
            },
            {
              category: `Category`,
              title: `Title of your third article goes here`,
              excerpt: `Short summary of the article: who it features and the main idea the reader will take away from it.`,
              imageSrc: `assets/media/set-02/image-03.webp`,
              authorName: `Full Name`,
              authorImageSrc: `assets/media/set-03/image-03.webp`,
              date: `Month 20XX`,
            },
          ],
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, p.jsx)(s, {
          textAnimation: `fade`,
          tag: `Support`,
          title: `Frequently Asked Questions`,
          description: `Answers to the questions customers ask most about your products, ingredients and guarantee.`,
          items: [
            {
              question: `What makes your products different from other brands?`,
              answer: `Answer in two or three sentences: explain what sets your products apart and the care that goes into making each one. Keep it short and concrete.`,
            },
            {
              question: `How long does the product last once applied?`,
              answer: `Answer with the typical duration of your products and any tip that helps customers get the best results from them each day.`,
            },
            {
              question: `Are your products suitable for sensitive skin?`,
              answer: `Answer describing the ingredients you use and who the products are suitable for. Mention anything customers with sensitive skin should know.`,
            },
            {
              question: `Do you offer a satisfaction guarantee?`,
              answer: `Answer with your guarantee or return policy: how long customers have, what is covered and how to request a refund.`,
            },
            {
              question: `What ingredients do you use?`,
              answer: `Answer listing the main types of ingredients you use and why you chose them for your products.`,
            },
            {
              question: `How do I choose the right product for me?`,
              answer: `Answer with a simple tip or a sample option that helps new customers find the product that suits them.`,
            },
          ],
          imageSrc: `assets/media/set-01/image-02.webp`,
        }),
      }),
      (0, p.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, p.jsx)(o, {
          textAnimation: `fade`,
          tag: `Contact`,
          title: `Get in Touch`,
          description: `Short invitation to get in touch: questions, orders or advice. Say how soon you reply.`,
          inputs: [
            { name: `name`, type: `text`, placeholder: `Your name`, required: !0 },
            { name: `email`, type: `email`, placeholder: `hello@example.com`, required: !0 },
            { name: `phone`, type: `tel`, placeholder: `+00 000 000 0000` },
            { name: `subject`, type: `text`, placeholder: `How can we help?`, required: !0 },
          ],
          textarea: {
            name: `message`,
            placeholder: `Tell us what you are looking for...`,
            required: !0,
          },
          buttonText: `Send Message`,
          imageSrc: `assets/media/set-01/image-01.webp`,
        }),
      }),
      (0, p.jsx)(u, {
        brand: `Your Brand`,
        columns: [
          {
            items: [
              { label: `Shop`, href: `#products` },
              { label: `Our Craft`, href: `#features` },
              { label: `Why Us`, href: `#metrics` },
            ],
          },
          {
            items: [
              { label: `Our Story`, href: `#` },
              { label: `Sustainability`, href: `#` },
              { label: `Community`, href: `#influencers` },
            ],
          },
          {
            items: [
              { label: `Customer Care`, href: `#` },
              { label: `Contact`, href: `#contact` },
              { label: `FAQ`, href: `#faq` },
            ],
          },
          {
            items: [
              { label: `Privacy Policy`, href: `#` },
              { label: `Terms & Conditions`, href: `#` },
              { label: `Return Policy`, href: `#` },
            ],
          },
        ],
      }),
    ],
  });
}
export { m as default };
