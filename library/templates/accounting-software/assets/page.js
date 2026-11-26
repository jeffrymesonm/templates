import { t as e } from "./jsx-runtime-BAjjBXwY.js";
import { t } from "./SmoothScroll-ChrUt1wD.js";
import n from "./NavbarLoginTab-DDTkYMgg.js";
import r from "./ContactFluidForm-DbSWIMDx.js";
import i from "./FaqStickyAccordion-BhRaWX00.js";
import a from "./FeaturesFluidUseCases-CbD2b1PG.js";
import o from "./ProcessFluidSteps-2RzpBeo2.js";
import s from "./FooterSubscribeWordmark-POshhDH_.js";
import c from "./HeroFluidDashboard-CT0a_pFm.js";
import l from "./PricingFluidPlans-BCOT7zSf.js";
import u from "./SocialProofLogoRow-DvLJ97K2.js";
import d from "./TestimonialGlassSlider-BBORlkzi.js";
/* empty css              */ var f = e(),
  p = 0.2;
function m() {
  return (0, f.jsxs)(`main`, {
    "data-button": `default`,
    "data-card": `filled`,
    "data-pattern": `none`,
    className: `relative isolate overflow-x-clip bg-background text-foreground`,
    children: [
      (0, f.jsx)(t, {}),
      (0, f.jsx)(`div`, { className: `kit-pattern`, "aria-hidden": `true` }),
      (0, f.jsx)(n, {
        brand: `Your Brand`,
        navItems: [
          { name: `How it works`, href: `#process` },
          { name: `Who it's for`, href: `#services` },
          { name: `Pricing`, href: `#pricing` },
          { name: `Support`, href: `#contact` },
        ],
        primaryButton: { text: `Start free trial`, href: `#pricing` },
        secondaryButton: { text: `Log in`, href: `#` },
      }),
      (0, f.jsx)(`div`, {
        id: `hero`,
        "data-section": `hero`,
        children: (0, f.jsx)(c, {
          tag: `New: short announcement here`,
          title: `Headline that states your main promise.`,
          mutedTitle: `your main promise.`,
          description: `Short description of your product and who it is for. Explain the main benefit in one or two clear sentences.`,
          primaryButton: { text: `Start free trial`, href: `#pricing` },
          secondaryButton: { text: `See how it works`, href: `#process` },
          variant: `overview`,
          dashboard: {
            appName: `Your Brand`,
            menuLabel: `Books`,
            navItems: [
              { label: `Overview`, icon: `overview` },
              { label: `Invoices`, icon: `file` },
              { label: `Expenses`, icon: `card` },
              { label: `Bank feeds`, icon: `transfer` },
              { label: `Reports`, icon: `chart` },
              { label: `Customers`, icon: `users` },
              { label: `Payroll`, icon: `wallet` },
            ],
            activeIndex: 0,
            generalLabel: `General`,
            generalItems: [
              { label: `Settings`, icon: `settings` },
              { label: `Help center`, icon: `help` },
            ],
            pageTitle: `Overview`,
            greeting: `Good morning, Name`,
            subline: `Here is how your business did this month.`,
            stats: [
              {
                label: `Cash in bank`,
                value: `$10,000.00`,
                delta: `+5.0%`,
                points: [8, 9, 8.5, 10, 9.6, 11, 10.8, 12, 12.4, 13.2],
              },
              {
                label: `Unpaid invoices`,
                value: `$5,000.00`,
                delta: `4 due`,
                points: [9, 8, 8.4, 7.2, 7.6, 6.8, 7, 6.2, 6.6, 5.9],
              },
            ],
            chart: {
              title: `Invoices paid`,
              legend: [`Paid`, `Invoiced`],
              bars: [
                { label: `Jun`, value: 14000, target: 17000 },
                { label: `Jul`, value: 16000, target: 17000 },
                { label: `Aug`, value: 13000, target: 15000 },
                { label: `Sep`, value: 18000, target: 19000 },
                { label: `Oct`, value: 18000, target: 20000 },
                { label: `Nov`, value: 16000, target: 21000 },
              ],
            },
            table: {
              title: `Recent invoices`,
              columns: [`Customer`, `Status`],
              rows: [
                { title: `Company Name`, meta: `INV-0001, $000`, value: `Paid today` },
                { title: `Company Name`, meta: `INV-0002, $000`, value: `Due in 5 days` },
                { title: `Company Name`, meta: `INV-0003, $000`, value: `3 days late` },
              ],
            },
            promo: {
              title: `Tax set aside`,
              text: `$000 saved for your next tax bill.`,
              progress: 0.72,
              button: { text: `View estimate`, href: `#pricing` },
            },
          },
          introDelay: p,
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `logos`,
        "data-section": `logos`,
        children: (0, f.jsx)(u, {
          title: `Trusted by 1,000 businesses like yours`,
          names: [
            `Company Name`,
            `Company Name`,
            `Company Name`,
            `Company Name`,
            `Company Name`,
            `Company Name`,
            `Company Name`,
            `Company Name`,
            `Company Name`,
            `Company Name`,
            `Company Name`,
            `Company Name`,
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `process`,
        "data-section": `process`,
        children: (0, f.jsx)(o, {
          tag: `How it works`,
          title: `How your product works in six steps.`,
          mutedTitle: `in six steps.`,
          description: `Short overview of the process from sign up to result. Explain what the customer does and what your product does for them.`,
          items: [
            {
              title: `Connect your accounts`,
              description: `Link your bank, cards and payroll in a few clicks. Every transaction flows in daily and lands in the right category.`,
              ui: {
                kind: `connect`,
                variant: `hub`,
                sources: [
                  { label: `Bank`, icon: `bank` },
                  { label: `Cards`, icon: `card` },
                  { label: `Receipts`, icon: `file` },
                  { label: `Payroll`, icon: `users` },
                ],
              },
            },
            {
              title: `See what needs you`,
              description: `Late invoices, unmatched receipts and bills coming due rise to the top, so nothing slips through.`,
              ui: {
                kind: `ranked`,
                variant: `list`,
                title: `Needs your review`,
                badge: `Today`,
                rows: [
                  { label: `Late invoices`, value: 0.9 },
                  { label: `Unmatched receipts`, value: 0.65 },
                  { label: `Bills due Friday`, value: 0.4 },
                ],
              },
            },
            {
              title: `Approve in one go`,
              description: `Approve drafted reminders, supplier payments and the month end report, then get back to work.`,
              ui: {
                kind: `approve`,
                variant: `checklist`,
                title: `Month end close`,
                badge: `Day 2`,
                tasks: [`Match receipts`, `Send reminders`, `Pay supplier bills`, `Share report`],
                primary: `Approve all`,
                secondary: `Review`,
              },
            },
            {
              title: `Invite your accountant`,
              description: `Give your accountant read access so year end questions get answered without email chains.`,
              ui: {
                kind: `connect`,
                variant: `hub`,
                sources: [
                  { label: `You`, icon: `users` },
                  { label: `Accountant`, icon: `users` },
                  { label: `Bookkeeper`, icon: `users` },
                ],
              },
            },
            {
              title: `Watch your cash`,
              description: `See upcoming bills, expected payments and tax set asides in one short list each week.`,
              ui: {
                kind: `ranked`,
                variant: `list`,
                title: `Cash this week`,
                badge: `Weekly`,
                rows: [
                  { label: `Bills due`, value: 0.8 },
                  { label: `Expected payments`, value: 0.6 },
                  { label: `Tax set aside`, value: 0.35 },
                ],
              },
            },
            {
              title: `File with confidence`,
              description: `Your numbers are tidy all year, so tax time is a quick review and a single click.`,
              ui: {
                kind: `approve`,
                variant: `checklist`,
                title: `Tax ready`,
                badge: `Q4`,
                tasks: [`Check categories`, `Review totals`, `File return`],
                primary: `File now`,
                secondary: `Review`,
              },
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `services`,
        "data-section": `services`,
        children: (0, f.jsx)(a, {
          label: `Who it's for`,
          variant: `status`,
          title: `Built for the people you serve.`,
          mutedTitle: `people you serve.`,
          description: `Short description of the customer groups you serve and why your product fits each one of them.`,
          items: [
            {
              title: `Freelancers`,
              heading: `Invoice, get paid, move on.`,
              description: `Send clean invoices, take card payments and let reminders chase late clients for you.`,
              points: [
                `Card and bank payments`,
                `Automatic late reminders`,
                `Tax set aside on every payment`,
              ],
              panel: {
                variant: `status`,
                icon: `invoice`,
                title: `Invoices`,
                meta: `This month`,
                rows: [
                  { name: `Company Name`, status: `Paid`, tone: `done` },
                  { name: `Company Name`, status: `Due Friday`, tone: `pending` },
                  { name: `Company Name`, status: `6 days late`, tone: `alert` },
                ],
                note: `One invoice is 6 days late. A friendly reminder is ready to send.`,
                action: `Send reminder`,
              },
            },
            {
              title: `Shops and cafes`,
              heading: `Every sale and cost in one place.`,
              description: `Till sales, card spend and supplier bills land in one ledger, matched and sorted without a spreadsheet.`,
              points: [
                `Sales synced from your till`,
                `Supplier bills scheduled`,
                `Cash forecast for 90 days`,
              ],
              panel: {
                variant: `metrics`,
                icon: `shop`,
                title: `This week`,
                meta: `Mon-Sun`,
                stats: [
                  { label: `Sales`, value: `$0,000`, delta: `+5.0%` },
                  { label: `Bills due`, value: `$0,000`, delta: `4 bills` },
                ],
                chart: [4, 6, 5, 7, 8, 7, 9],
                chartType: `bars`,
                action: `Pay bills`,
              },
            },
            {
              title: `Trades`,
              heading: `Quote, invoice and get paid on site.`,
              description: `Turn a quote into an invoice from your phone and take payment before you pack up the van.`,
              points: [
                `Quotes that become invoices`,
                `Deposits and stage payments`,
                `Mileage tracked for you`,
              ],
              panel: {
                variant: `timeline`,
                icon: `briefcase`,
                title: `Job 0001`,
                meta: `Project name`,
                steps: [
                  { name: `Quote accepted`, time: `Mon`, done: !0 },
                  { name: `Deposit paid`, time: `Tue`, done: !0 },
                  { name: `Job finished`, time: `Thu` },
                  { name: `Final invoice paid`, time: `Fri` },
                ],
                action: `Send final invoice`,
              },
            },
            {
              title: `Small teams`,
              heading: `Close the month without the panic.`,
              description: `Your team snaps receipts, you approve claims, and the books close on a simple checklist.`,
              points: [
                `Expense claims with photos`,
                `Bank feeds reconciled daily`,
                `Year end pack for your accountant`,
              ],
              panel: {
                variant: `metrics`,
                icon: `team`,
                title: `Team spend`,
                meta: `This month`,
                stats: [
                  { label: `Claims`, value: `$0,000`, delta: `Under budget` },
                  { label: `Receipts`, value: `95%`, delta: `Matched` },
                ],
                chart: [2.1, 2.6, 2.4, 3.1, 3.4, 3.9, 4.3],
                chartType: `line`,
                action: `Approve claims`,
              },
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `testimonial`,
        "data-section": `testimonial`,
        children: (0, f.jsx)(d, {
          label: `Customers`,
          title: `What your customers say about you.`,
          mutedTitle: `say about you.`,
          description: `Short line that introduces the customer stories below and who they come from.`,
          items: [
            {
              quote: `Customer quote that describes the problem they had and how your product solved it for them.`,
              name: `Full Name`,
              role: `Owner, Company Name`,
              metric: `-5h / month`,
              imageSrc: `assets/media/image-06-1600.webp`,
              imageAlt: `Customer photo: the person quoted at work`,
            },
            {
              quote: `Customer quote about a specific result they got, told in their own words and kept short.`,
              name: `Full Name`,
              role: `Owner, Company Name`,
              metric: `Paid same day`,
              imageSrc: `assets/media/image-03-1600.webp`,
              imageAlt: `Customer photo: the person quoted at work`,
            },
            {
              quote: `Customer quote about the feature they value most and how it changed their week.`,
              name: `Full Name`,
              role: `Owner, Company Name`,
              metric: `Weekly P&L`,
              imageSrc: `assets/media/image-04-1600.webp`,
              imageAlt: `Customer photo: the person quoted at work`,
            },
            {
              quote: `Customer quote about the peace of mind your product gives them during the busy season.`,
              name: `Full Name`,
              role: `Owner, Company Name`,
              metric: `No tax surprise`,
              imageSrc: `assets/media/image-01-1600.webp`,
              imageAlt: `Customer photo: the person quoted at work`,
            },
            {
              quote: `Customer quote about a result someone else noticed, such as a partner or an advisor.`,
              name: `Full Name`,
              role: `Owner, Company Name`,
              metric: `Clean year end`,
              imageSrc: `assets/media/image-05-1600.webp`,
              imageAlt: `Customer photo: the person quoted at work`,
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `pricing`,
        "data-section": `pricing`,
        children: (0, f.jsx)(l, {
          label: `Pricing`,
          title: `Simple plans, no surprise add-ons.`,
          mutedTitle: `no surprise add-ons.`,
          description: `Every plan includes bank feeds, receipt capture and a 30 day free trial. Switch or cancel any time.`,
          items: [
            {
              name: `Solo`,
              price: `$00`,
              period: `/month`,
              description: `For freelancers and side businesses.`,
              features: [`One business`, `Unlimited invoices`, `Receipt capture`, `Quarterly tax estimate`],
              button: { text: `Start free trial`, href: `#` },
            },
            {
              name: `Business`,
              price: `$00`,
              period: `/month`,
              description: `For shops, cafes and trades with bills to pay.`,
              features: [
                `Up to 5 users`,
                `Bill pay and scheduling`,
                `Till and card sync`,
                `Quotes and deposits`,
                `Sales tax returns`,
              ],
              button: { text: `Start free trial`, href: `#` },
            },
            {
              name: `Team`,
              price: `$00`,
              period: `/month`,
              description: `For small teams with staff and expense claims.`,
              features: [
                `Unlimited users`,
                `Payroll for up to 20`,
                `Expense claims and approvals`,
                `Month end checklist`,
                `Accountant access included`,
              ],
              button: { text: `Start free trial`, href: `#` },
            },
          ],
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `faq`,
        "data-section": `faq`,
        children: (0, f.jsx)(i, {
          label: `FAQ`,
          title: `Good questions, plain answers.`,
          mutedTitle: `plain answers.`,
          description: `Short line inviting visitors to read the most common questions.`,
          items: [
            {
              question: `Can I switch from my current tool or a spreadsheet?`,
              answer: `Yes. Import your history from your current tool or a CSV file. Our team checks your opening balances with you for free.`,
            },
            {
              question: `Do I still need an accountant?`,
              answer: `Many owners file on their own with our product. If you work with an accountant, invite them for free and they get clean reports.`,
            },
            {
              question: `Does it handle sales tax?`,
              answer: `Yes. Sales tax is tracked on every invoice and expense, and your return is prepared for you to review and file.`,
            },
            {
              question: `Is my financial data safe?`,
              answer: `Bank connections are read only and your data is encrypted. Nothing is paid or sent without your approval.`,
            },
            {
              question: `How does receipt capture work?`,
              answer: `Snap a photo or forward the email. The app reads the amount, date and supplier and matches it to the right transaction.`,
            },
            {
              question: `Can I cancel any time?`,
              answer: `Yes. Plans are monthly, there is no contract, and you can export all your records whenever you like.`,
            },
          ],
          contactCard: {
            title: `Still unsure?`,
            description: `Ask our support team, usually answered in minutes.`,
            button: { text: `Ask us`, href: `#contact` },
          },
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `contact`,
        "data-section": `contact`,
        children: (0, f.jsx)(r, {
          tag: `Support`,
          title: `Talk to a real person.`,
          mutedTitle: `a real person.`,
          nameLabel: `Name`,
          emailLabel: `Email`,
          companyLabel: `Business name`,
          messageLabel: `Your question`,
          submitText: `Send message`,
          variant: `status`,
          status: {
            online: `Support team online`,
            responseLabel: `Average reply`,
            responseValue: `5 min`,
            queue: [
              { title: `Bank feed reconnected`, meta: `Solved`, done: !0 },
              { title: `Data import question`, meta: `Solved`, done: !0 },
              { title: `Sales tax question`, meta: `Replying` },
            ],
          },
        }),
      }),
      (0, f.jsx)(`div`, {
        id: `footer`,
        "data-section": `footer`,
        children: (0, f.jsx)(s, {
          brand: `Your Brand`,
          description: `Short line that says what your product does and for whom.`,
          subscribe: { placeholder: `hello@example.com`, button: `Get tips` },
          columns: [
            {
              title: `Product`,
              links: [
                { text: `How it works`, href: `#process` },
                { text: `Invoicing`, href: `#services` },
                { text: `Receipt capture`, href: `#process` },
                { text: `Pricing`, href: `#pricing` },
              ],
            },
            {
              title: `Company`,
              links: [
                { text: `Customers`, href: `#testimonial` },
                { text: `Careers`, href: `#` },
                { text: `Contact`, href: `#contact` },
              ],
            },
            {
              title: `Resources`,
              links: [
                { text: `Help center`, href: `#faq` },
                { text: `Tax calendar`, href: `#` },
                { text: `Status`, href: `#` },
              ],
            },
            {
              title: `Legal`,
              links: [
                { text: `Privacy`, href: `#` },
                { text: `Terms`, href: `#` },
                { text: `Security`, href: `#` },
              ],
            },
          ],
          socials: [
            { text: `LinkedIn`, href: `#` },
            { text: `Instagram`, href: `#` },
            { text: `YouTube`, href: `#` },
          ],
          copyright: `© 20XX Your Brand. All rights reserved.`,
        }),
      }),
    ],
  });
}
export { m as default };
