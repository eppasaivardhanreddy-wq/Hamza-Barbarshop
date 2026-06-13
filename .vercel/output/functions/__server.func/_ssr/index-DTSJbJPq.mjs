import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useI18n, h as heroBg } from "./router-DwOibJWV.mjs";
import { a as services, s as styles } from "./services-data-CV9F1qOy.mjs";
import { s as styleFatherSon, a as styleModern, b as styleShave, c as styleBeard, d as styleClassic, e as styleSkinFade } from "./style-father-son-b7NIx81r.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { S as Star, e as Scissors, c as Clock, f as Sparkles } from "../_libs/lucide-react.mjs";
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
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const styleImgs = {
  "skin-fade": styleSkinFade,
  classic: styleClassic,
  beard: styleBeard,
  shave: styleShave,
  modern: styleModern,
  "father-son": styleFatherSon
};
function HomePage() {
  const {
    t
  } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[92vh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBg, alt: "Hamza's Barber Shop interior", className: "w-full h-full object-cover", width: 1920, height: 1280 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-6xl px-5 sm:px-6 py-24 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 24
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-5", children: t("home.location") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] max-w-3xl", children: [
          t("home.hero.title1"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-text-gradient italic", children: t("home.hero.titleAccent") }),
          " ",
          t("home.hero.title2")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed", children: t("home.hero.sub") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/60 backdrop-blur px-4 py-1.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "text-gold", fill: "currentColor" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "4,8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            "· ",
            t("home.reviews")
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/booking", className: "inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 transition", children: t("nav.book") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center justify-center rounded-full border border-gold/40 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:border-gold transition", children: t("home.cta.viewServices") })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-y border-border/60 bg-card/30 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-divider absolute top-0 left-0 right-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-animate": "up", "data-animate-stagger": "0.12", className: "mx-auto max-w-6xl px-5 sm:px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8", children: [{
        v: "4,8★",
        l: t("home.stats.rating")
      }, {
        v: "200+",
        l: t("home.stats.reviews")
      }, {
        v: "10+",
        l: t("home.stats.years")
      }, {
        v: "100%",
        l: t("home.stats.craft")
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl sm:text-5xl gold-text-gradient", children: s.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground", children: s.l })
      ] }, s.l)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-5 sm:px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-animate": "up", className: "flex flex-wrap items-end justify-between gap-4 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-3", children: t("home.services.kicker") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl", children: t("home.services.title") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "text-sm text-gold hover:underline", children: t("home.services.all") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-animate": "up", "data-animate-stagger": "0.08", className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: services.slice(0, 6).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-xl border border-border/60 bg-card/40 p-6 hover:border-gold/60 hover:-translate-y-1 hover:shadow-gold transition-all duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Scissors, { className: "text-gold", size: 22 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-display", children: t(`svc.${s.id}.name`) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: t(`svc.${s.id}.desc`) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 14, className: "text-gold" }),
            s.duration,
            " ",
            t("svc.min")
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold font-semibold", children: s.price })
        ] })
      ] }, s.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card/30 border-y border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-animate": "up", className: "flex flex-wrap items-end justify-between gap-4 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-3", children: t("home.styles.kicker") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl", children: t("home.styles.title") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/styles", className: "text-sm text-gold hover:underline", children: t("home.styles.openGallery") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-animate": "up", "data-animate-stagger": "0.08", className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: styles.slice(0, 6).map((st) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/booking", search: {
        service: st.id
      }, className: "group relative overflow-hidden rounded-xl aspect-[3/4] block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: styleImgs[st.img], alt: t(`style.${st.key}.title`), loading: "lazy", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110", width: 1024, height: 1280 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-gold", children: t(`style.${st.key}.subtitle`) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-white", children: t(`style.${st.key}.title`) })
        ] })
      ] }, st.id)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-6xl px-5 sm:px-6 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-animate": "up", className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-3", children: t("home.testimonials.kicker") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl", children: t("home.testimonials.title") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-animate": "up", "data-animate-stagger": "0.12", className: "grid md:grid-cols-3 gap-5", children: [{
        name: "Daniel M.",
        text: t("home.testimonial.1")
      }, {
        name: "Erkan K.",
        text: t("home.testimonial.2")
      }, {
        name: "Lukas W.",
        text: t("home.testimonial.3")
      }].map((tm) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 bg-card/40 p-6 hover:border-gold/40 transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex text-gold mb-3", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, fill: "currentColor" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-relaxed text-foreground/90 italic font-display text-lg", children: [
          '"',
          tm.text,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
          "— ",
          tm.name
        ] })
      ] }, tm.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-animate": "scale", className: "mx-auto max-w-4xl px-5 sm:px-6 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "text-gold mx-auto mb-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl sm:text-5xl", children: t("home.cta.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-lg mx-auto", children: t("home.cta.sub") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/booking", className: "mt-8 inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 hover:shadow-gold transition", children: t("home.cta.book") })
    ] }) })
  ] });
}
export {
  HomePage as component
};
