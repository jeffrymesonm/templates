/**
 * interactions.cjs — Template-specific interaction checks that verify.cjs cannot do generically:
 * language switch (ES→EN), menu filter, carousels/sliders, and contact forms (empty submit is
 * rejected; valid submit either opens the mail client or shows the demo/sent status).
 *
 * Usage:  node tools/interactions.cjs        Exit code 1 when any check fails.
 * Update the lists below when a template with these features is added.
 */
const { chromium } = require('playwright');
const { startServer } = require('./verify.cjs');

const LANGUAGE_SWITCH = ['burger-restaurant', 'cafe-restaurant', 'landscaping-services', 'luxury-real-estate'];
const SLIDERS = [['product-showcase', '[data-carousel-next]'], ['seaside-hotel', '[data-slider-next]']];
const FORMS = ['construction-company', 'landscaping-services', 'luxury-real-estate', 'vip-transport'];

let failures = 0;
/**
 * Print one check result and count failures.
 * @param {string} id - Template id. @param {string} check - Check name.
 * @param {boolean} ok - Whether it passed. @param {string} detail - Evidence.
 */
function report(id, check, ok, detail) {
  if (!ok) failures++;
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${id} · ${check} · ${detail}`);
}

/**
 * Open a template at 1440 px and collect console errors in page.errors.
 * @returns {Promise<import('playwright').Page>}
 */
async function open(browser, baseUrl, id) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.errors = [];
  page.on('console', message => { if (message.type() === 'error') page.errors.push(message.text().slice(0, 120)); });
  page.on('pageerror', error => page.errors.push(error.message.slice(0, 120)));
  await page.goto(`${baseUrl}/${id}/`, { waitUntil: 'load' });
  await page.waitForTimeout(4000);
  return page;
}

/**
 * Fill every real field of a form with valid sample data, skipping hidden and honeypot fields.
 * @param {import('playwright').Locator} form
 */
async function fillForm(form) {
  for (const field of await form.locator('input, textarea, select').all()) {
    const type = await field.getAttribute('type');
    const isHoneypot = (await field.getAttribute('name') || '').startsWith('_') || (await field.getAttribute('tabindex')) === '-1';
    if (isHoneypot || type === 'hidden' || !(await field.isVisible())) continue;
    const tag = await field.evaluate(node => node.tagName);
    if (tag === 'SELECT') await field.selectOption({ index: 1 });
    else if (type === 'checkbox' || type === 'radio') await field.check();
    else if (type === 'email') await field.fill('prueba@example.com');
    else if (type === 'tel') await field.fill('+000000000000');
    else if (type === 'date') await field.fill('2030-01-15');
    else if (type === 'number') await field.fill('2');
    else await field.fill('Texto de prueba suficientemente largo');
  }
}

(async () => {
  const server = await startServer();
  const baseUrl = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ channel: 'chrome' });
  try {
    for (const id of LANGUAGE_SWITCH) {
      const page = await open(browser, baseUrl, id);
      const before = await page.locator('[data-i18n]').first().innerText();
      await page.locator('[data-lang-option="en"]').filter({ visible: true }).first().click();
      await page.waitForTimeout(500);
      const lang = await page.evaluate(() => document.documentElement.lang);
      const after = await page.locator('[data-i18n]').first().innerText();
      report(id, 'idioma ES→EN', lang === 'en' && before !== after && !page.errors.length, `lang=${lang}, "${before.slice(0, 30)}" → "${after.slice(0, 30)}"`);
      await page.close();
    }

    {
      const id = 'cafe-restaurant';
      const page = await open(browser, baseUrl, id);
      const visibleDishes = () => page.locator('.dish').filter({ visible: true }).count();
      const all = await visibleDishes();
      await page.locator('[data-filter="coffee"]').click();
      await page.waitForTimeout(800);
      const filtered = await visibleDishes();
      report(id, 'filtro de menú', filtered > 0 && filtered < all, `${all} → ${filtered} platos visibles`);
      await page.close();
    }

    for (const [id, selector] of SLIDERS) {
      const page = await open(browser, baseUrl, id);
      const buttons = page.locator(selector);
      const total = await buttons.count();
      let reacted = 0;
      for (let index = 0; index < total; index++) {
        const section = buttons.nth(index).locator('xpath=ancestor::section[1]');
        await buttons.nth(index).scrollIntoViewIfNeeded();
        await page.waitForTimeout(400);
        const before = await section.innerHTML();
        await buttons.nth(index).click();
        await page.waitForTimeout(900);
        if ((await section.innerHTML()) !== before) reacted++;
      }
      report(id, 'sliders/carrusel', total > 0 && reacted === total && !page.errors.length, `${reacted}/${total} reaccionan`);
      await page.close();
    }

    for (const id of FORMS) {
      const page = await open(browser, baseUrl, id);
      const cdp = await page.context().newCDPSession(page);
      await cdp.send('Page.enable');
      let mailto = '';
      cdp.on('Page.frameRequestedNavigation', event => { if (event.url.startsWith('mailto:')) mailto = event.url; });
      const form = page.locator('form[data-contact-form]');
      await form.scrollIntoViewIfNeeded();
      await form.locator('[type="submit"]').click();
      await page.waitForTimeout(400);
      const invalid = await form.locator('[aria-invalid="true"]').count();
      await fillForm(form);
      await form.locator('[type="submit"]').click();
      await page.waitForTimeout(1200);
      const status = (await form.locator('[role="status"], [aria-live], [data-form-status]').allInnerTexts()).join(' ').replace(/\s+/g, ' ').trim();
      const outcome = mailto ? `abre ${decodeURIComponent(mailto).split('?')[0]}` : `sin envío (modo demo): "${status.slice(0, 70)}"`;
      report(id, 'formulario', invalid > 0 && (mailto || status) && !page.errors.length, `vacío → ${invalid} campos marcados; válido → ${outcome}`);
      await page.close();
    }
  } finally {
    await browser.close();
    server.close();
  }
  process.exit(failures ? 1 : 0);
})();
