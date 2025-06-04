import { e as createComponent, f as createAstro, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, n as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_ZdVfgEHl.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro Basics</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Dev/astro-test/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const vehicleId = "70415866";
  const res = await fetch(
    `https://www.dasweltauto.at/api/locales/de_AT/vehicles/${vehicleId}/detail`
  );
  const vehicle = await res.json();
  var aiSummary = await import('../chunks/ai-summary_B3eTVkfg.mjs').then(n => n._);
  const summary = await aiSummary.chatWithAzureOpenAI([
    {
      role: "user",
      content: `Fasse die wichtigsten Informationen dieses Fahrzeugs f\xFCr einen Interessenten in einem Absatz zusammen. Antworte auf Englisch. f\xFCge emojis hinzu und teile den text sch\xF6n in abs\xE4tze ein. Fahrzeugdaten: ${JSON.stringify(vehicle)}`
    }
  ]);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section style="min-height: 80vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(135deg, #1e293b 0%, #0ea5e9 100%); color: #fff; position: relative; overflow: hidden;" data-astro-cid-j7pv25f6> <img src="/assets/background.svg" alt="" style="position: absolute; inset: 0; width: 100vw; height: 100%; object-fit: cover; opacity: 0.18; z-index: 0; pointer-events: none; user-select: none;" data-astro-cid-j7pv25f6> <div style="position: relative; z-index: 1; width: 100%; display: flex; flex-direction: column; align-items: center;" data-astro-cid-j7pv25f6> <h1 style="font-size: 3.5rem; font-weight: 900; letter-spacing: -2px; margin-bottom: 1rem; text-shadow: 0 4px 32px #0ea5e9aa;" data-astro-cid-j7pv25f6>
Discover Your <span style="color: #38bdf8;" data-astro-cid-j7pv25f6>Next Car</span> Today
</h1> <p style="font-size: 1.5rem; max-width: 600px; text-align: center; margin-bottom: 2.5rem; color: #e0f2fe;" data-astro-cid-j7pv25f6>
Find your dream vehicle with <span style="font-weight: bold; color: #7dd3fc;" data-astro-cid-j7pv25f6>Astro Test</span>.<br data-astro-cid-j7pv25f6>
Fast, modern, and future-ready car listings.
</p> <div style="display: flex; gap: 1.5rem; margin-bottom: 2.5rem;" data-astro-cid-j7pv25f6> <a href="/detail/70415866" style="padding: 0.9rem 2.5rem; background: #38bdf8; color: #0f172a; border-radius: 999px; font-weight: 700; font-size: 1.2rem; text-decoration: none; box-shadow: 0 2px 16px #0ea5e966; transition: background 0.2s;" data-astro-cid-j7pv25f6>
🚗 View Featured Car
</a> <a href="https://docs.astro.build" target="_blank" style="padding: 0.9rem 2.5rem; background: transparent; border: 2px solid #38bdf8; color: #38bdf8; border-radius: 999px; font-weight: 700; font-size: 1.2rem; text-decoration: none; transition: background 0.2s, color 0.2s;" data-astro-cid-j7pv25f6>
📚 Documentation
</a> </div> <div style="width: 100%; max-width: 900px; background: rgba(255,255,255,0.92); border-radius: 2rem; box-shadow: 0 8px 48px #0ea5e933; padding: 2.5rem 2rem; display: flex; flex-direction: column; gap: 2rem; align-items: center; border: 1px solid #e0e7ef; backdrop-filter: blur(6px);" data-astro-cid-j7pv25f6> <div style="display: flex; flex-direction: row; gap: 2rem; align-items: center; width: 100%;" data-astro-cid-j7pv25f6> <img src="../assets/Tuning_Lamborghini_Gallardo" style="width: 320px; height: 200px; object-fit: cover; border-radius: 1.2rem; box-shadow: 0 2px 24px #0ea5e933; border: 1px solid #e0e7ef; background: #f1f5f9;"${addAttribute(vehicle?.overview?.header ?? "Car", "alt")} data-astro-cid-j7pv25f6> <div style="flex: 1; min-width: 0;" data-astro-cid-j7pv25f6> <h2 style="font-size: 2rem; font-weight: 800; color: #0f172a; margin-bottom: 0.5rem;" data-astro-cid-j7pv25f6> ${vehicle.overview.header} </h2> <div style="color: #334155; font-size: 1.1rem; margin-bottom: 0.5rem;" data-astro-cid-j7pv25f6> ${vehicle.overview.subHeader} </div> <div style="display: flex; flex-wrap: wrap; gap: 1.2rem; color: #475569; font-size: 1rem; margin-bottom: 1rem;" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>🚙 <b data-astro-cid-j7pv25f6>${vehicle.overview.brand}</b> ${vehicle.overview.model}</span> <span data-astro-cid-j7pv25f6>📅 ${vehicle.technicalData.initialRegistrationDate}</span> <span data-astro-cid-j7pv25f6>🛣️ ${vehicle.technicalData.mileage} km</span> <span data-astro-cid-j7pv25f6>⚡ ${vehicle.technicalData.powerPs} PS / ${vehicle.technicalData.powerKw} kW</span> <span data-astro-cid-j7pv25f6>💶 <b style="font-size: 1.3rem; color: #f59e42;" data-astro-cid-j7pv25f6>${vehicle.overview.price} €</b></span> </div> <div style="display: flex; gap: 1rem; margin-bottom: 0.5rem;" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Farbe: <b data-astro-cid-j7pv25f6>${vehicle.technicalData.colorText}</b></span> <span data-astro-cid-j7pv25f6>Kraftstoff: <b data-astro-cid-j7pv25f6>${vehicle.technicalData.fuelText}</b></span> <span data-astro-cid-j7pv25f6>Getriebe: <b data-astro-cid-j7pv25f6>${vehicle.technicalData.gearTypeText}</b></span> </div> <div style="display: flex; gap: 1rem; margin-bottom: 0.5rem;" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Verbrauch: <b data-astro-cid-j7pv25f6>${vehicle.technicalData.combinedConsumption} ${vehicle.technicalData.consumptionUnitCode}</b></span> <span data-astro-cid-j7pv25f6>CO₂: <b data-astro-cid-j7pv25f6>${vehicle.technicalData.co2Emission} g/km</b></span> </div> <div style="display: flex; gap: 1rem; margin-bottom: 0.5rem;" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Türen: <b data-astro-cid-j7pv25f6>${vehicle.technicalData.doors}</b></span> <span data-astro-cid-j7pv25f6>Sitze: <b data-astro-cid-j7pv25f6>${vehicle.technicalData.seats}</b></span> <span data-astro-cid-j7pv25f6>Vorbesitzer: <b data-astro-cid-j7pv25f6>${vehicle.technicalData.previousOwners}</b></span> </div> <div style="margin-top: 1rem; display: flex; gap: 1rem;" data-astro-cid-j7pv25f6> <a${addAttribute(`/detail/${vehicleId}`, "href")} style="background: #38bdf8; color: #0f172a; padding: 0.7rem 2rem; border-radius: 999px; font-weight: 700; font-size: 1.1rem; text-decoration: none; box-shadow: 0 2px 16px #0ea5e966; transition: background 0.2s;" data-astro-cid-j7pv25f6>
Details ansehen
</a> <a${addAttribute(`tel:${vehicle.dealerDetail.employees[0]?.mobileNumber ?? vehicle.dealerDetail.employees[0]?.telephoneNumber}`, "href")} style="background: #f59e42; color: #fff; padding: 0.7rem 2rem; border-radius: 999px; font-weight: 700; font-size: 1.1rem; text-decoration: none; box-shadow: 0 2px 16px #f59e4299; transition: background 0.2s;" data-astro-cid-j7pv25f6>
📞 Kontakt
</a> </div> </div> </div> </div> </div> </section> <section style="display: flex; justify-content: center; margin-top: 2.5rem;" data-astro-cid-j7pv25f6> <div style="width: 100%; max-width: 900px; background: rgba(255,255,255,0.92); border-radius: 2rem; box-shadow: 0 8px 48px #0ea5e933; padding: 2.5rem 2rem; border: 1px solid #e0e7ef; backdrop-filter: blur(6px); display: flex; flex-direction: column; align-items: center;" data-astro-cid-j7pv25f6> <h3 style="color: #0f172a; font-size: 1.5rem; font-weight: 800; margin-bottom: 1.2rem; letter-spacing: -1px;" data-astro-cid-j7pv25f6>Fahrzeug-Zusammenfassung (AI)</h3> <div style="width: 100%;" data-astro-cid-j7pv25f6> <div style="background: #e0f2fe; color: #0f172a; border-radius: 1rem; padding: 1.5rem 1.2rem; font-size: 1.15rem; font-weight: 500; box-shadow: 0 2px 16px #0ea5e922; border: 1px solid #bae6fd; min-height: 80px; line-height: 1.6; text-align: left;" data-astro-cid-j7pv25f6> ${summary} </div> </div> </div> </section> <footer style="text-align: center; margin-top: 2rem; color: #64748b;" data-astro-cid-j7pv25f6> <small data-astro-cid-j7pv25f6>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Astro Test. Crafted with <span style="color: #f43f5e;" data-astro-cid-j7pv25f6>&#10084;</span> </small> </footer>  ` })}`;
}, "C:/Dev/astro-test/src/pages/index.astro", void 0);

const $$file = "C:/Dev/astro-test/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
