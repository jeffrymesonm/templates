import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./lenis-react-DPHPAgo_.js";
import { t as n } from "./createLucideIcon-0q7jiDOo.js";
import { t as r } from "./bot-COqNGuok.js";
import { t as i } from "./calendar-CaehLsbO.js";
import { t as a } from "./clock-BGj0tszi.js";
import { t as o } from "./layers-DQNd7Ofr.js";
import { t as s } from "./mail-BIMXjy2H.js";
import { t as c } from "./message-square-BgQkhadu.js";
import { t as l } from "./user-DbgDDifS.js";
import { t as u } from "./workflow-BFvs9aTN.js";
import { t as d } from "./zap-4z9_vjlO.js";
import { t as f } from "./LightRaysCornerBackground-fcLCtIbA.js";
import p from "./NavbarCentered-CZ4Q1bHH.js";
import m from "./AboutTextWave-C1MaKn1x.js";
import h from "./ContactCenter-BgVbvgjd.js";
import g from "./FeaturesBento-B_swLnNH.js";
import _ from "./FeaturesStatCards-f4YDV1WP.js";
import v from "./FooterSimpleReveal-CzkLuAoZ.js";
import y from "./HeroToolRing-Cxb-yXDF.js";
import b from "./PricingLayeredEnterprise-GYAs7UKJ.js";
import x from "./TeamOverlayCards-DXW-tnoQ.js";
/* empty css               */ var S = n(`file-spreadsheet`, [
    [
      `path`,
      {
        d: `M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,
        key: `1oefj6`,
      },
    ],
    [`path`, { d: `M14 2v5a1 1 0 0 0 1 1h5`, key: `wfsgrz` }],
    [`path`, { d: `M8 13h2`, key: `yr2amv` }],
    [`path`, { d: `M14 13h2`, key: `un5t4a` }],
    [`path`, { d: `M8 17h2`, key: `2yhykz` }],
    [`path`, { d: `M14 17h2`, key: `10kma7` }],
  ]),
  C = e(),
  w = `assets/media`;
function T() {
  return (0, C.jsxs)(t, {
    root: !0,
    children: [
      (0, C.jsx)(p, {
        buttonStagger: !0,
        logo: `YOUR BRAND`,
        navItems: [
          { name: `Services`, href: `#services` },
          { name: `Results`, href: `#results` },
          { name: `Pricing`, href: `#pricing` },
          { name: `Team`, href: `#team` },
        ],
        ctaButton: { text: `Book a Free Audit`, href: `#contact` },
      }),
      (0, C.jsxs)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        className: `relative isolate`,
        children: [
          (0, C.jsx)(f, { className: `absolute -scale-x-100` }),
          (0, C.jsx)(y, {
            title: `Headline with your`,
            titleMuted: `main promise.`,
            description: `Short description of what you build or automate, who it is for and the result your clients get from working with you.`,
            detail: { title: `Key result this week`, description: `1,000 across clients` },
            stat: { value: 50, label: `tools connected` },
            primaryButton: { text: `Book a Free Audit`, href: `#contact` },
            secondaryButton: { text: `Our Services`, href: `#services` },
            items: [
              `chatgpt`,
              `gmail`,
              `zapier`,
              `notion`,
              `claude`,
              `slack`,
              `hubspot`,
              `make`,
              `shopify`,
            ].map((e) => ({ imageSrc: `${w}/${e}.svg` })),
          }),
        ],
      }),
      (0, C.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, C.jsx)(m, {
          title: `A short statement about the problem your clients have, how much it costs them, and how your service solves it step by step for them.`,
          primaryButton: { text: `Book a Free Audit`, href: `#contact` },
          secondaryButton: { text: `See Results`, href: `#results` },
        }),
      }),
      (0, C.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        children: (0, C.jsx)(g, {
          titleGradient: !0,
          buttonStagger: !0,
          cardAnimation: `rotate-scale`,
          textAnimation: `slide-up`,
          tag: `What We Automate`,
          title: `Your workflows, on autopilot.`,
          primaryButton: { text: `Book a Free Audit`, href: `#contact` },
          secondaryButton: { text: `See Pricing`, href: `#pricing` },
          features: [
            {
              bentoComponent: `orbiting-icons`,
              centerIcon: u,
              orbitIcons: [s, i, S, c],
              title: `Connected Tools`,
              description: `Your CRM, inbox and calendar finally work as one system.`,
            },
            {
              bentoComponent: `tilted-stack-cards`,
              stackCards: [
                { icon: s, title: `Lead follow-up`, subtitle: `Sent in 2 minutes`, detail: `Automated` },
                { icon: S, title: `Invoice processing`, subtitle: `340 this week`, detail: `Done` },
                { icon: i, title: `Meeting booking`, subtitle: `28 booked`, detail: `Live` },
              ],
              title: `Self-Running Workflows`,
              description: `Follow-ups, invoices and scheduling handled without anyone touching them.`,
            },
            {
              bentoComponent: `chat-marquee`,
              aiIcon: r,
              userIcon: l,
              exchanges: [
                {
                  userMessage: `Qualify today's new leads`,
                  aiResponse: `Scored 42 leads and booked 6 calls.`,
                },
                {
                  userMessage: `Summarize this week's support tickets`,
                  aiResponse: `Found 3 themes, report sent to your team.`,
                },
                { userMessage: `Update the CRM from yesterday's calls`, aiResponse: `128 records updated.` },
              ],
              placeholder: `Ask your agent...`,
              title: `AI Agents on Your Team`,
              description: `Agents that read, decide and act inside your tools around the clock.`,
            },
          ],
        }),
      }),
      (0, C.jsx)(`div`, {
        id: `results`,
        "data-section": `results`,
        children: (0, C.jsx)(_, {
          titleGradient: !0,
          cardAnimation: `rotate-scale`,
          textAnimation: `slide-up`,
          tag: `Results`,
          title: `Less busywork. More time to grow.`,
          features: [
            { icon: a, stat: { value: 20, suffix: `+` }, title: `Hours saved every week` },
            { icon: d, stat: { value: 24, suffix: `/7` }, title: `Agents working around the clock` },
            { icon: o, stat: { value: 50, suffix: `+` }, title: `Tools connected to your stack` },
          ],
        }),
      }),
      (0, C.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, C.jsx)(b, {
          titleGradient: !0,
          buttonStagger: !0,
          cardAnimation: `rotate-scale`,
          textAnimation: `slide-up`,
          tag: `Pricing`,
          title: `Clear pricing. Results you can measure.`,
          plans: [
            {
              tag: `Roadmap`,
              price: `$00`,
              description: `A clear plan for what to automate first.`,
              primaryButton: { text: `Get Started`, href: `#contact` },
              features: [
                `Workflow and tool audit`,
                `Time and cost savings estimate`,
                `Prioritized automation plan`,
                `Delivered within one week`,
              ],
            },
            {
              tag: `Build`,
              price: `$00`,
              description: `Your top workflows, built and running.`,
              primaryButton: { text: `Get Started`, href: `#contact` },
              features: [
                `Everything in Roadmap`,
                `Up to 3 automations or agents`,
                `Connected to your existing tools`,
                `30 days of support`,
              ],
            },
            {
              tag: `Growth`,
              price: `$00/mo`,
              description: `Automation that grows with you.`,
              primaryButton: { text: `Get Started`, href: `#contact` },
              features: [
                `Everything in Build`,
                `New automations every month`,
                `Ongoing monitoring and tuning`,
                `Priority support`,
              ],
            },
          ],
          enterprise: {
            tag: `Custom pricing`,
            title: `Enterprise`,
            description: `Unlimited automations, SSO, security review and a dedicated engineer, scoped to your team.`,
            primaryButton: { text: `Talk to Sales`, href: `#contact` },
          },
        }),
      }),
      (0, C.jsx)(`div`, {
        id: `team`,
        "data-section": `team`,
        children: (0, C.jsx)(x, {
          titleGradient: !0,
          buttonStagger: !0,
          cardAnimation: `rotate-scale`,
          textAnimation: `slide-up`,
          tag: `Team`,
          title: `Built by engineers who automate for a living.`,
          members: [
            { name: `Full Name`, role: `CEO`, imageSrc: `assets/media/image-01-1600.webp` },
            { name: `Full Name`, role: `COO`, imageSrc: `assets/media/image-02-1600.webp` },
            { name: `Full Name`, role: `CTO`, imageSrc: `assets/media/image-03-1600.webp` },
          ],
        }),
      }),
      (0, C.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, C.jsx)(h, {
          titleGradient: !0,
          buttonStagger: !0,
          wideContent: !0,
          textAnimation: `slide-up`,
          tag: `Get Started`,
          title: `Ready to get your hours back?`,
          description: `Book a free 30-minute automation audit and see what we would automate first.`,
          inputPlaceholder: `Enter your email`,
          buttonText: `Book a Free Audit`,
        }),
      }),
      (0, C.jsx)(v, {
        brand: `YOUR BRAND`,
        columns: [
          {
            title: `Services`,
            items: [
              { label: `What We Automate`, href: `#services` },
              { label: `Results`, href: `#results` },
              { label: `Pricing`, href: `#pricing` },
            ],
          },
          {
            title: `Company`,
            items: [
              { label: `Team`, href: `#team` },
              { label: `Contact`, href: `#contact` },
              { label: `Book a Free Audit`, href: `#contact` },
            ],
          },
          {
            title: `Legal`,
            items: [
              { label: `Terms of Service`, href: `#` },
              { label: `Privacy Policy`, href: `#` },
            ],
          },
        ],
        copyright: `© 20XX Your Brand. All rights reserved.`,
        links: [
          { label: `Terms`, href: `#` },
          { label: `Privacy`, href: `#` },
        ],
      }),
    ],
  });
}
export { T as default };
