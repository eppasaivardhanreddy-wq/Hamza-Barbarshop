import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as services } from "./services-data-CV9F1qOy.mjs";
import { u as useI18n } from "./router-DwOibJWV.mjs";
import { c as Clock } from "../_libs/lucide-react.mjs";
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
import "../_libs/zod.mjs";
function ServiceRow({
  s
}) {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl sm:text-2xl", children: t(`svc.${s.id}.name`) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12, className: "text-gold" }),
          " ",
          s.duration,
          " ",
          t("svc.min")
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground max-w-xl", children: t(`svc.${s.id}.desc`) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 sm:flex-col sm:items-end shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-display gold-text-gradient", children: s.price }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/booking", search: {
        service: s.id
      }, className: "inline-flex items-center justify-center rounded-full border border-gold/60 hover:bg-gold hover:text-primary-foreground px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold transition", children: t("services.book") })
    ] })
  ] });
}
function ServicesPage() {
  const {
    t
  } = useI18n();
  const haupt = services.filter((s) => s.category !== "extras");
  const extras = services.filter((s) => s.category === "extras");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-5 sm:px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-animate": "up", className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-3", children: t("services.kicker") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl sm:text-6xl gold-text-gradient", children: t("services.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider mt-6 mx-auto max-w-[120px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-xl mx-auto", children: t("services.intro") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-animate": "up", "data-animate-stagger": "0.05", className: "divide-y divide-border/60 border-y border-border/60", children: haupt.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceRow, { s }, s.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-animate": "up", className: "mt-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-3", children: t("services.extras") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl", children: t("services.extras") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider mt-6 mx-auto max-w-[120px]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-animate": "up", "data-animate-stagger": "0.05", className: "mt-10 divide-y divide-border/60 border-y border-border/60", children: extras.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceRow, { s }, s.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 text-xs text-center text-muted-foreground italic", children: t("services.note") })
  ] });
}
export {
  ServicesPage as component
};
