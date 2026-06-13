import { createFileRoute } from "@tanstack/react-router";
import { Award, Heart, Scissors } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Über uns – Hamza's Barber Shop" },
      { name: "description", content: "Die Geschichte hinter Hamza's Barber Shop – Handwerk, Präzision und Leidenschaft seit 2015." },
      { property: "og:title", content: "Über uns – Hamza's Barber Shop" },
      { property: "og:description", content: "Handwerk, Präzision und Leidenschaft seit 2015." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  const values = [
    { icon: Scissors, t: t("about.val1.t"), d: t("about.val1.d") },
    { icon: Heart, t: t("about.val2.t"), d: t("about.val2.d") },
    { icon: Award, t: t("about.val3.t"), d: t("about.val3.d") },
  ];
  return (
    <section className="mx-auto max-w-3xl px-5 sm:px-6 py-20">
      <div data-animate="up">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{t("about.kicker")}</p>
        <h1 className="font-display text-5xl sm:text-6xl">{t("about.title")}</h1>
      </div>

      <div data-animate="up" data-animate-delay="0.15" className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
        <p className="text-foreground italic font-display text-2xl">{t("about.quote")}</p>
      </div>

      <div data-animate="up" data-animate-stagger="0.1" className="mt-16 grid sm:grid-cols-3 gap-5">
        {values.map(({ icon: Icon, t: title, d }) => (
          <div key={title} className="rounded-xl border border-border/60 bg-card/40 p-6">
            <Icon className="text-gold" size={24} />
            <h3 className="mt-3 font-display text-xl">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
