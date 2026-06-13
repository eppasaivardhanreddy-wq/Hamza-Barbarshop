import { createFileRoute, Link, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, Clock, User, Check, Loader2 } from "lucide-react";
import { services } from "@/lib/services-data";
import { createBooking } from "@/lib/booking.functions";
import { useI18n } from "@/lib/i18n";

const bookingSchema = z.object({
  service: z.string().min(1, "required"),
  appointment_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "required"),
  appointment_time: z.string().regex(/^\d{2}:\d{2}$/, "required"),
  customer_name: z.string().min(2, "required"),
  email: z.string().email("required"),
  phone: z.string().min(5, "required"),
  notes: z.string().max(500).optional(),
});
type BookingForm = z.infer<typeof bookingSchema>;

const searchSchema = z.object({
  service: z.string().optional(),
});

export const Route = createFileRoute("/booking")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Termin buchen – Hamza's Barber Shop" },
      { name: "description", content: "Buchen Sie Ihren Termin online – in unter einer Minute." },
      { property: "og:title", content: "Termin buchen – Hamza's Barber Shop" },
      { property: "og:description", content: "Buchen Sie Ihren Termin online." },
    ],
  }),
  component: BookingPage,
});

// time slots based on day of week
function slotsForDate(dateStr: string): string[] {
  if (!dateStr) return [];
  const d = new Date(dateStr + "T00:00:00");
  const dow = d.getDay(); // 0=Sun, 6=Sat
  if (dow === 0) return []; // closed on Sundays
  const start = 9 * 60 + 30; // 09:30
  const end = dow === 6 ? 17 * 60 : 18 * 60 + 30; // Sat until 17:00, Mon–Fri until 18:30
  const slots: string[] = [];
  for (let m = start; m + 30 <= end; m += 30) {
    slots.push(`${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`);
  }
  return slots;
}

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}
function maxDateStr(): string {
  const d = new Date();
  d.setMonth(d.getMonth() + 2);
  return d.toISOString().slice(0, 10);
}

function BookingPage() {
  const { t } = useI18n();
  const search = useSearch({ from: "/booking" });
  const createBookingFn = useServerFn(createBooking);
  const [submitted, setSubmitted] = useState<{ id: string } | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: search.service ?? "",
      appointment_date: "",
      appointment_time: "",
      customer_name: "",
      email: "",
      phone: "",
      notes: "",
    },
  });

  const date = form.watch("appointment_date");
  const slots = slotsForDate(date);

  async function onSubmit(values: BookingForm) {
    setSubmitError(null);
    try {
      const res = await createBookingFn({ data: { ...values, notes: values.notes ?? "" } });
      setSubmitted({ id: res.id });
    } catch (e) {
      setSubmitError(e instanceof Error ? e.message : t("booking.failed"));
    }
  }

  if (submitted) {
    return (
      <section className="mx-auto max-w-xl px-5 sm:px-6 py-24 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-gold/15 border border-gold flex items-center justify-center">
          <Check className="text-gold" size={28} />
        </div>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl">{t("booking.success.title")}</h1>
        <p className="mt-4 text-muted-foreground">{t("booking.success.msg")}</p>
        <p className="mt-2 text-xs text-muted-foreground">{t("booking.success.ref")} {submitted.id.slice(0, 8)}</p>
        <Link to="/" className="mt-10 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
          {t("booking.success.home")}
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-2xl px-5 sm:px-6 py-16">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{t("booking.kicker")}</p>
        <h1 className="font-display text-4xl sm:text-5xl">{t("booking.title")}</h1>
        <p className="mt-3 text-muted-foreground text-sm">{t("booking.sub")}</p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <Field label={t("booking.service")} icon={<User size={16} />} error={form.formState.errors.service?.message}>
          <select
            {...form.register("service")}
            className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold"
          >
            <option value="">{t("booking.choose")}</option>
            {services.map((s) => (
              <option key={s.id} value={s.id}>{t(`svc.${s.id}.name`)} · {s.price}</option>
            ))}
          </select>
        </Field>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label={t("booking.date")} icon={<Calendar size={16} />} error={form.formState.errors.appointment_date?.message}>
            <input
              type="date"
              min={todayStr()}
              max={maxDateStr()}
              {...form.register("appointment_date")}
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold"
            />
          </Field>
          <Field label={t("booking.time")} icon={<Clock size={16} />} error={form.formState.errors.appointment_time?.message}>
            <select
              {...form.register("appointment_time")}
              disabled={!date}
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold disabled:opacity-50"
            >
              <option value="">{date ? (slots.length ? t("booking.choose") : t("booking.noSlots")) : t("booking.pickDate")}</option>
              {slots.map((tm) => <option key={tm} value={tm}>{tm}</option>)}
            </select>
          </Field>
        </div>

        <Field label={t("booking.name")} error={form.formState.errors.customer_name?.message}>
          <input type="text" {...form.register("customer_name")} placeholder={t("booking.namePlaceholder")}
            className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold" />
        </Field>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label={t("contact.email")} error={form.formState.errors.email?.message}>
            <input type="email" {...form.register("email")} placeholder={t("booking.emailPlaceholder")}
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold" />
          </Field>
          <Field label={t("booking.phone")} error={form.formState.errors.phone?.message}>
            <input type="tel" {...form.register("phone")} placeholder="+49 …"
              className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold" />
          </Field>
        </div>

        <Field label={t("booking.notes")} error={form.formState.errors.notes?.message}>
          <textarea {...form.register("notes")} rows={3} placeholder={t("booking.notesPlaceholder")}
            className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold resize-none" />
        </Field>

        {submitError && (
          <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {submitError}
          </div>
        )}

        <button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 transition disabled:opacity-60"
        >
          {form.formState.isSubmitting && <Loader2 size={16} className="animate-spin" />}
          {t("booking.submit")}
        </button>

        <p className="text-xs text-center text-muted-foreground">
          {t("booking.cancelNote")}
        </p>
      </form>
    </section>
  );
}

function Field({ label, icon, error, children }: { label: string; icon?: React.ReactNode; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
        {icon && <span className="text-gold">{icon}</span>}
        {label}
      </span>
      {children}
      {error && <span className="block mt-1.5 text-xs text-destructive">{error}</span>}
    </label>
  );
}
