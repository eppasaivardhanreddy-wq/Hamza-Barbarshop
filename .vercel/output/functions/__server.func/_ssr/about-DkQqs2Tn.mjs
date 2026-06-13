import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useI18n } from "./router-DwOibJWV.mjs";
import { e as Scissors, H as Heart, A as Award } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/gsap.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/zod.mjs";
function AboutPage() {
  const {
    t
  } = useI18n();
  const values = [{
    icon: Scissors,
    t: t("about.val1.t"),
    d: t("about.val1.d")
  }, {
    icon: Heart,
    t: t("about.val2.t"),
    d: t("about.val2.d")
  }, {
    icon: Award,
    t: t("about.val3.t"),
    d: t("about.val3.d")
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-3xl px-5 sm:px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-animate": "up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-3", children: t("about.kicker") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl sm:text-6xl", children: t("about.title") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-animate": "up", "data-animate-delay": "0.15", className: "mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("about.p1") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: t("about.p2") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground italic font-display text-2xl", children: t("about.quote") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-animate": "up", "data-animate-stagger": "0.1", className: "mt-16 grid sm:grid-cols-3 gap-5", children: values.map(({
      icon: Icon,
      t: title,
      d
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card/40 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "text-gold", size: 24 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-xl", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: d })
    ] }, title)) })
  ] });
}
export {
  AboutPage as component
};
