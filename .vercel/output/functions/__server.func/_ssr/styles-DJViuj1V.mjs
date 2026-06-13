import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as styles } from "./services-data-CV9F1qOy.mjs";
import { u as useI18n } from "./router-DwOibJWV.mjs";
import { s as styleFatherSon, a as styleModern, b as styleShave, c as styleBeard, d as styleClassic, e as styleSkinFade } from "./style-father-son-b7NIx81r.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "stream";
import "crypto";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/gsap.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/zod.mjs";
const imgs = {
  "skin-fade": styleSkinFade,
  classic: styleClassic,
  beard: styleBeard,
  shave: styleShave,
  modern: styleModern,
  "father-son": styleFatherSon
};
function StylesPage() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-5 sm:px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-animate": "up", className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-3", children: t("styles.kicker") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl sm:text-6xl", children: t("styles.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl mx-auto", children: t("styles.intro") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-animate": "up", "data-animate-stagger": "0.08", className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: styles.map((st) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/booking", search: {
      service: st.id
    }, className: "group relative overflow-hidden rounded-2xl aspect-[3/4] block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imgs[st.img], alt: t(`style.${st.key}.title`), loading: "lazy", width: 1024, height: 1280, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.25em] text-gold", children: t(`style.${st.key}.subtitle`) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-white mt-1", children: t(`style.${st.key}.title`) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs uppercase tracking-[0.2em] text-white/80 group-hover:text-gold transition", children: t("styles.bookThis") })
      ] })
    ] }, st.id)) })
  ] });
}
export {
  StylesPage as component
};
