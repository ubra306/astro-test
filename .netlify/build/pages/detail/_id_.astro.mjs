import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from '../../chunks/astro/server_ZdVfgEHl.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const res = await fetch(
    `https://www.dasweltauto.at/api/locales/de_AT/vehicles/${id}/detail`
  );
  const vehicle = await res.json();
  return renderTemplate`${maybeRenderHead()}<div class="breadcrumb"> <a href="/">Zurück</a> / Home / Suche / ${vehicle.overview.brand} / ${vehicle.overview.model} / ${vehicle.overview.header} </div> <div class="detail-container"> <div class="main-info"> <div class="actions"> <button>Merken</button> <button>Vergleichen</button> <button>Drucken</button> <button>Teilen</button> </div> </div> <div class="sidebar"> <h2>${vehicle.overview.header}</h2> <div class="subtitle">${vehicle.overview.subHeader}</div> <div class="price">${vehicle.overview.price} €</div> <div class="leasing">
Leasing: <b>${vehicle.financeOptions?.leasingRate ?? "-"}</b> <br>
Kredit: <b>${vehicle.financeOptions?.creditRate ?? "-"}</b> </div> <a class="phone">${vehicle.dealerDetail.employees[0]?.mobileNumber ?? vehicle.dealerDetail.employees[0]?.telephoneNumber}</a> <button class="reserve"${addAttribute(!vehicle.overview.reservable, "disabled")}>Reservieren</button> <div class="dealer"> <b>${vehicle.dealerDetail.employees[0]?.fullname}</b><br> </div> </div> </div> <div class="vehicle-data"> <h3>Fahrzeugdaten</h3> <div class="data-grid"> <div><b>Farbe</b><br>${vehicle.technicalData.colorText}</div> <div><b>Erstzulassung</b><br>${vehicle.technicalData.initialRegistrationDate}</div> <div><b>Kilometerstand</b><br>${vehicle.technicalData.mileage} km</div> <div><b>Leistung</b><br>${vehicle.technicalData.powerPs} PS / ${vehicle.technicalData.powerKw} kW</div> <div><b>Kraftstoffart</b><br>${vehicle.technicalData.fuelText}</div> <div><b>Komb. Kraftstoffverbrauch</b><br>${vehicle.technicalData.combinedConsumption} ${vehicle.technicalData.consumptionUnitCode}</div> <div><b>CO₂-Emission</b><br>${vehicle.technicalData.co2Emission} g/km</div> <div><b>Antrieb</b><br>${vehicle.technicalData.driveText}</div> <div><b>Türen</b><br>${vehicle.technicalData.doors}</div> <div><b>Sitze</b><br>${vehicle.technicalData.seats}</div> <div><b>Vorbesitzer</b><br>${vehicle.technicalData.previousOwners}</div> <div><b>Hubraum</b><br>${vehicle.technicalData.motorCapacity} cm³</div> <div><b>Karosserie</b><br>${vehicle.technicalData.bodyText}</div> <div><b>Getriebeart</b><br>${vehicle.technicalData.gearTypeText}</div> </div> </div>`;
}, "C:/Dev/astro-test/src/pages/detail/[id].astro", void 0);

const $$file = "C:/Dev/astro-test/src/pages/detail/[id].astro";
const $$url = "/detail/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
