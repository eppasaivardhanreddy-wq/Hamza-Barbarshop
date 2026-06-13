import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useI18n } from "./router-DwOibJWV.mjs";
import { S as Star, a as MapPin, P as Phone, b as Mail, c as Clock, I as Instagram, F as Facebook, E as Eye } from "../_libs/lucide-react.mjs";
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
function ContactPage() {
  const {
    t
  } = useI18n();
  const [showMap, setShowMap] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-5 sm:px-6 py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-animate": "up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-3", children: t("contact.kicker") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl sm:text-6xl", children: t("contact.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/40 px-4 py-1.5 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "text-gold", fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "4,8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "· ",
          t("home.reviews")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-animate": "left", className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "text-gold shrink-0 mt-1", size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: t("contact.address") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
              "Hochstraße 80",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "56070 Koblenz"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "text-gold shrink-0 mt-1", size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: t("contact.phone") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+4917682388939", className: "text-muted-foreground hover:text-gold", dir: "ltr", children: "+49 176 82388939" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "text-gold shrink-0 mt-1", size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: t("contact.email") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:Hamza.barber.shop2@gmail.com", className: "text-muted-foreground hover:text-gold break-all", children: "Hamza.barber.shop2@gmail.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "text-gold shrink-0 mt-1", size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl", children: t("contact.hours") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-muted-foreground space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("contact.hours.mf") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("contact.hours.sa") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("contact.hours.so") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.instagram.com/hamza.sbarbershop", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 18 }),
            " @hamza.sbarbershop"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.facebook.com/people/Hamzas-barber-shop/100048362336560/", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 18 }),
            " Facebook"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-animate": "right", className: "rounded-2xl overflow-hidden border border-border/60 aspect-square md:aspect-auto shadow-warm min-h-[360px] relative bg-card/30 flex items-center justify-center", children: showMap ? /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Karte – Hamza's Barber Shop Koblenz", src: "https://www.google.com/maps?q=Hochstra%C3%9Fe+80,+56070+Koblenz&output=embed", className: "w-full h-full min-h-[360px]", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center flex flex-col items-center justify-center max-w-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 28 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mb-3", children: t("contact.map.prompt") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-6", children: t("contact.map.desc") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowMap(true), className: "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 transition cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 14 }),
          t("contact.map.btn")
        ] })
      ] }) })
    ] })
  ] });
}
export {
  ContactPage as component
};
