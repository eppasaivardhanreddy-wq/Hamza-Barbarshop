import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { services } from "@/lib/services-data";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Leistungen & Preise – Hamza's Barber Shop" },
      { name: "description", content: "Unsere Preisliste: Haarschnitt, Waschen/Schneiden, Nassrasur, Bartpflege und Extras wie Augenbrauen, Gesichtsreinigung und Wachsbehandlungen." },
      { property: "og:title", content: "Leistungen & Preise – Hamza's Barber Shop" },
      { property: "og:description", content: "Unsere Preisliste im Überblick." },
    ],
  }),
  component: ServicesPage,
});

function ServiceRow({ s }: { s: (typeof services)[number] }) {
  const { t } = useI18n();
  return (
    <div className="py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3 className="font-display text-xl sm:text-2xl">{t(`svc.${s.id}.name`)}</h3>
          <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground inline-flex items-center gap-1.5">
            <Clock size={12} className="text-gold" /> {s.duration} {t("svc.min")}
          </span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground max-w-xl">{t(`svc.${s.id}.desc`)}</p>
      </div>
      <div className="flex items-center gap-4 sm:flex-col sm:items-end shrink-0">
        <span className="text-2xl font-display gold-text-gradient">{s.price}</span>
        <Link
          to="/booking"
          search={{ service: s.id }}
          className="inline-flex items-center justify-center rounded-full border border-gold/60 hover:bg-gold hover:text-primary-foreground px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold transition"
        >
          {t("services.book")}
        </Link>
      </div>
    </div>
  );
}

function ServicesPage() {
  const { t } = useI18n();
  const haupt = services.filter((s) => s.category !== "extras");
  const extras = services.filter((s) => s.category === "extras");

  return (
    <section className="mx-auto max-w-4xl px-5 sm:px-6 py-20">
      <div data-animate="up" className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{t("services.kicker")}</p>
        <h1 className="font-display text-5xl sm:text-6xl gold-text-gradient">{t("services.title")}</h1>
        <div className="gold-divider mt-6 mx-auto max-w-[120px]" />
        <p className="mt-6 text-muted-foreground max-w-xl mx-auto">{t("services.intro")}</p>
      </div>

      <div data-animate="up" data-animate-stagger="0.05" className="divide-y divide-border/60 border-y border-border/60">
        {haupt.map((s) => <ServiceRow key={s.id} s={s} />)}
      </div>

      <div data-animate="up" className="mt-20 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{t("services.extras")}</p>
        <h2 className="font-display text-4xl sm:text-5xl">{t("services.extras")}</h2>
        <div className="gold-divider mt-6 mx-auto max-w-[120px]" />
      </div>

      <div data-animate="up" data-animate-stagger="0.05" className="mt-10 divide-y divide-border/60 border-y border-border/60">
        {extras.map((s) => <ServiceRow key={s.id} s={s} />)}
      </div>

      <p className="mt-10 text-xs text-center text-muted-foreground italic">
        {t("services.note")}
      </p>
    </section>
  );
}
