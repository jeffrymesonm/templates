import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./LoaderSignalDot-Cyr7iEUg.js";
import r from "./NavbarHudBar-NcxyKnul.js";
import i from "./AboutParticleMast-BYJsnrpA.js";
import a from "./ContactTickForm-C3LrBza-.js";
import o from "./ServicesFieldCards-C_986HpH.js";
import s from "./FooterFieldWordmark-CbT5JLmq.js";
import c from "./HeroParticleIsland-JGBQt61b.js";
import l from "./PricingReadoutPlans-B259XHeE.js";
import u from "./TeamTickCoverflow-BrQijEs_.js";
import d from "./TestimonialCaseSlider-caMkUI1G.js";
/* empty css              */ var f = e(),
  p = 1.4;
function m() {
  return (0, f.jsxs)(`main`, {
    "data-particles": `health`,
    "data-button": `default`,
    "data-card": `filled`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, f.jsx)(t, {}),
      (0, f.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, f.jsx)(n, { readout: `0.0 stars`, brand: `Your Brand`, introDelay: p }),
      (0, f.jsx)(r, {
        brand: `Your Brand`,
        navItems: [
          { name: `Services`, href: `#services` },
          { name: `Our approach`, href: `#about` },
          { name: `Doctors`, href: `#team` },
          { name: `Prices`, href: `#pricing` },
        ],
        primaryButton: { text: `Book a visit`, href: `#contact` },
      }),
      (0, f.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        "data-scene": !0,
        children: (0, f.jsx)(c, {
          title: `Unhurried Doctors for the Whole Family`,
          description: `Short description of your practice and where it is. List your main services and how fast patients can be seen.`,
          primaryButton: { text: `Book a visit`, href: `#contact` },
          readoutValue: 4.9,
          readoutUnit: `stars`,
          readoutCaption: `Average of 2,000 patient reviews`,
          scrollHint: `Scroll to look around`,
          introDelay: p,
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `about`,
        "data-section": `about`,
        children: (0, f.jsx)(i, {
          label: `Our approach`,
          title: `Thirty Minutes With a Doctor Who Listens`,
          items: [
            { title: `Every appointment is thirty minutes, never a rushed ten` },
            { title: `You see the same doctor each visit, who knows your history` },
            { title: `Blood tests and scans in house, results within two days` },
            { title: `Your doctor explains every result in plain words` },
            { title: `Same day appointments for children and urgent problems` },
          ],
          scanLabel: `Room 04`,
          scanMeta: `Health check`,
          meterValue: 36.6,
          meterUnit: `°C`,
          readout: { label: `Patients registered since 20XX`, value: 20000, suffix: `+` },
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        children: (0, f.jsx)(o, {
          tag: `Services`,
          title: `Everyday Care and Answers Under One Roof`,
          items: [
            {
              label: `GP visits`,
              title: `Unhurried Appointments With Your Own Doctor`,
              imageSrc: `assets/media/image-15-1600.webp`,
              imageAlt: `Service image: consultation`,
              description: `Thirty minute visits for new worries, ongoing conditions, prescriptions and referrals, in person or by video.`,
            },
            {
              label: `Blood tests`,
              title: `Blood Tests Without the Wait`,
              imageSrc: `assets/media/image-06-1600.webp`,
              imageAlt: `Service image: blood tests`,
              description: `Walk in from 7am, most results within two days, and a doctor's note on what they mean.`,
            },
            {
              label: `Scans`,
              title: `Ultrasound and ECG in the Same Building`,
              imageSrc: `assets/media/image-01-1600.webp`,
              imageAlt: `Service image: scans`,
              description: `Ultrasound, ECG and heart monitoring on site, so you are not sent across town for a scan.`,
            },
            {
              label: `Children`,
              title: `Calm Visits for Babies and Kids`,
              imageSrc: `assets/media/image-05-1600.webp`,
              imageAlt: `Service image: children's care`,
              description: `Baby checks, vaccinations and same day visits for poorly children, with doctors who are good with little ones.`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `team`,
        "data-section": `team`,
        children: (0, f.jsx)(u, {
          tag: `Our doctors`,
          title: `Doctors and Nurses Who Take Their Time`,
          items: [
            {
              name: `Dr. Full Name`,
              role: `Lead GP`,
              imageSrc: `assets/media/image-10-1600.webp`,
              imageAlt: `Team portrait`,
            },
            {
              name: `Dr. Full Name`,
              role: `Family GP`,
              imageSrc: `assets/media/image-12-1600.webp`,
              imageAlt: `Team portrait`,
            },
            {
              name: `Full Name`,
              role: `Practice nurse`,
              imageSrc: `assets/media/image-14-1600.webp`,
              imageAlt: `Team portrait`,
            },
            {
              name: `Dr. Full Name`,
              role: `GP and sports medicine`,
              imageSrc: `assets/media/image-04-1600.webp`,
              imageAlt: `Team portrait`,
            },
            {
              name: `Dr. Full Name`,
              role: `Cardiologist`,
              imageSrc: `assets/media/image-13-1600.webp`,
              imageAlt: `Team portrait`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `testimonial`,
        "data-section": `testimonial`,
        children: (0, f.jsx)(d, {
          tag: `Patient stories`,
          title: `Busy parents, worried first timers and patients who finally feel heard.`,
          items: [
            {
              label: `Health check`,
              quote: `My doctor spotted my blood pressure early and explained every step. I feel better than in years.`,
              name: `Full Name`,
              role: `Patient since 20XX`,
              imageSrc: `assets/media/image-02-1600.webp`,
              imageAlt: `Patient story image`,
            },
            {
              label: `Family care`,
              quote: `Both my kids were seen the same morning. Our doctor even called back that evening to check in.`,
              name: `Full Name`,
              role: `Mum of two`,
              imageSrc: `assets/media/image-03-1600.webp`,
              imageAlt: `Patient story image`,
            },
            {
              label: `Blood tests`,
              quote: `Bloods at eight, results by Thursday and a call from my doctor. No chasing anyone.`,
              name: `Full Name`,
              role: `Annual health check`,
              imageSrc: `assets/media/image-07-1600.webp`,
              imageAlt: `Patient story image`,
            },
            {
              label: `Scans`,
              quote: `I had my ultrasound downstairs and talked the results through with my GP the same week.`,
              name: `Full Name`,
              role: `Ultrasound patient`,
              imageSrc: `assets/media/image-11-1600.webp`,
              imageAlt: `Patient story image`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, f.jsx)(l, {
          tag: `Prices`,
          title: `Clear Prices, With or Without Insurance`,
          items: [
            {
              name: `GP visit`,
              price: `$00`,
              period: `/ visit`,
              description: `A thirty minute appointment with your own doctor.`,
              features: [`In person or by video`, `Prescriptions and referrals`, `Same day slots most days`],
              button: { text: `Book a visit`, href: `#contact` },
            },
            {
              name: `Membership`,
              price: `$00`,
              period: `/ month`,
              description: `Unlimited GP visits for one adult, no insurance needed.`,
              features: [
                `Unlimited GP visits`,
                `Yearly health check and bloods`,
                `Text your doctor directly`,
                `Cancel any time`,
              ],
              button: { text: `Become a member`, href: `#contact` },
            },
            {
              name: `Health check`,
              price: `$00`,
              period: `/ check`,
              description: `A full check with bloods, ECG and a written plan.`,
              features: [
                `Ninety minutes with a doctor`,
                `Full blood panel and ECG`,
                `Results talked through in person`,
              ],
              button: { text: `Ask about it`, href: `#contact` },
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, f.jsx)(a, {
          title: `Book Your Next Visit`,
          submitText: `Request a time`,
          successText: `Thanks, we will call you today to confirm a time.`,
          readout: `00.00 N / 00.00 W`,
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        children: (0, f.jsx)(s, {
          brand: `Your Brand`,
          offices: [`123 Example Street, City`, `Mon to Sat, 7am to 8pm`],
          columns: [
            {
              title: `Practice`,
              links: [
                { text: `Our approach`, href: `#about` },
                { text: `Doctors`, href: `#team` },
                { text: `Book a visit`, href: `#contact` },
              ],
            },
            {
              title: `Services`,
              links: [
                { text: `GP visits`, href: `#services` },
                { text: `Blood tests`, href: `#services` },
                { text: `Prices`, href: `#pricing` },
              ],
            },
            { title: `Patients`, links: [{ text: `Patient stories`, href: `#testimonial` }] },
            {
              title: `Social`,
              links: [
                { text: `Instagram`, href: `#` },
                { text: `Reviews`, href: `#` },
              ],
            },
          ],
          copyright: `20XX Your Brand. All rights reserved`,
          backToTop: `Back to top`,
          imageSrc: `assets/media/image-08-1600.webp`,
          imageAlt: `Footer image: your practice`,
        }),
      }),
    ],
  });
}
export { m as default };
