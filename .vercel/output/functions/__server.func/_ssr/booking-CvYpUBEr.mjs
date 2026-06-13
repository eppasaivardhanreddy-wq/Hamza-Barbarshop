import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useSearch, L as Link, u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { m as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { u } from "../_libs/hookform__resolvers.mjs";
import { a as services } from "./services-data-CV9F1qOy.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-ztKtDdl1.mjs";
import { u as useI18n } from "./router-DwOibJWV.mjs";
import "../_libs/seroval.mjs";
import { C as Check, U as User, d as Calendar, c as Clock, L as LoaderCircle } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "async_hooks";
import "stream";
import "crypto";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/gsap.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const BookingSchema = objectType({
  customer_name: stringType().min(2).max(100),
  email: stringType().email().max(200),
  phone: stringType().min(5).max(40),
  service: stringType().min(1).max(80),
  appointment_date: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
  appointment_time: stringType().regex(/^\d{2}:\d{2}$/),
  notes: stringType().max(500).optional().default("")
});
const createBooking = createServerFn({
  method: "POST"
}).validator((input) => BookingSchema.parse(input)).handler(createSsrRpc("d5d1516df3b15f9b01e23ed40cda22b58728aafe46e1ea4dd526f9df75ede78c"));
const bookingSchema = objectType({
  service: stringType().min(1, "required"),
  appointment_date: stringType().regex(/^\d{4}-\d{2}-\d{2}$/, "required"),
  appointment_time: stringType().regex(/^\d{2}:\d{2}$/, "required"),
  customer_name: stringType().min(2, "required"),
  email: stringType().email("required"),
  phone: stringType().min(5, "required"),
  notes: stringType().max(500).optional()
});
function slotsForDate(dateStr) {
  if (!dateStr) return [];
  const d = /* @__PURE__ */ new Date(dateStr + "T00:00:00");
  const dow = d.getDay();
  if (dow === 0) return [];
  const start = 9 * 60 + 30;
  const end = dow === 6 ? 17 * 60 : 18 * 60 + 30;
  const slots = [];
  for (let m = start; m + 30 <= end; m += 30) {
    slots.push(`${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`);
  }
  return slots;
}
function todayStr() {
  return (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
}
function maxDateStr() {
  const d = /* @__PURE__ */ new Date();
  d.setMonth(d.getMonth() + 2);
  return d.toISOString().slice(0, 10);
}
function BookingPage() {
  const {
    t
  } = useI18n();
  const search = useSearch({
    from: "/booking"
  });
  const createBookingFn = useServerFn(createBooking);
  const [submitted, setSubmitted] = reactExports.useState(null);
  const [submitError, setSubmitError] = reactExports.useState(null);
  const form = useForm({
    resolver: u(bookingSchema),
    defaultValues: {
      service: search.service ?? "",
      appointment_date: "",
      appointment_time: "",
      customer_name: "",
      email: "",
      phone: "",
      notes: ""
    }
  });
  const date = form.watch("appointment_date");
  const slots = slotsForDate(date);
  async function onSubmit(values) {
    setSubmitError(null);
    try {
      const res = await createBookingFn({
        data: {
          ...values,
          notes: values.notes ?? ""
        }
      });
      setSubmitted({
        id: res.id
      });
    } catch (e) {
      setSubmitError(e instanceof Error ? e.message : t("booking.failed"));
    }
  }
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-xl px-5 sm:px-6 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-16 h-16 rounded-full bg-gold/15 border border-gold flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "text-gold", size: 28 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-4xl sm:text-5xl", children: t("booking.success.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: t("booking.success.msg") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-muted-foreground", children: [
        t("booking.success.ref"),
        " ",
        submitted.id.slice(0, 8)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-10 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground", children: t("booking.success.home") })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-2xl px-5 sm:px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-gold mb-3", children: t("booking.kicker") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl", children: t("booking.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground text-sm", children: t("booking.sub") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("booking.service"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 16 }), error: form.formState.errors.service?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...form.register("service"), className: "w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: t("booking.choose") }),
        services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: s.id, children: [
          t(`svc.${s.id}.name`),
          " · ",
          s.price
        ] }, s.id))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("booking.date"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 16 }), error: form.formState.errors.appointment_date?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", min: todayStr(), max: maxDateStr(), ...form.register("appointment_date"), className: "w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("booking.time"), icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16 }), error: form.formState.errors.appointment_time?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { ...form.register("appointment_time"), disabled: !date, className: "w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold disabled:opacity-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: date ? slots.length ? t("booking.choose") : t("booking.noSlots") : t("booking.pickDate") }),
          slots.map((tm) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: tm, children: tm }, tm))
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("booking.name"), error: form.formState.errors.customer_name?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", ...form.register("customer_name"), placeholder: t("booking.namePlaceholder"), className: "w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("contact.email"), error: form.formState.errors.email?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", ...form.register("email"), placeholder: t("booking.emailPlaceholder"), className: "w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("booking.phone"), error: form.formState.errors.phone?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", ...form.register("phone"), placeholder: "+49 …", className: "w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: t("booking.notes"), error: form.formState.errors.notes?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { ...form.register("notes"), rows: 3, placeholder: t("booking.notesPlaceholder"), className: "w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold resize-none" }) }),
      submitError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive", children: submitError }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: form.formState.isSubmitting, className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 transition disabled:opacity-60", children: [
        form.formState.isSubmitting && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { size: 16, className: "animate-spin" }),
        t("booking.submit")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center text-muted-foreground", children: t("booking.cancelNote") })
    ] })
  ] });
}
function Field({
  label,
  icon,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2", children: [
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: icon }),
      label
    ] }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-1.5 text-xs text-destructive", children: error })
  ] });
}
export {
  BookingPage as component
};
