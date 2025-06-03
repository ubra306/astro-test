import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_D2krMLYW.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const res = await fetch(
    `https://www.dasweltauto.at/api/locales/de_AT/vehicles/${id}/detail`
  );
  const overview = await res.json();
  return renderTemplate`${maybeRenderHead()}<h1>${overview.header}</h1>`;
}, "C:/Dev/astro-test/src/pages/[id].astro", void 0);

const $$file = "C:/Dev/astro-test/src/pages/[id].astro";
const $$url = "/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
