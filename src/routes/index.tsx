import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Scissors, Sparkles, Clock, Star } from "lucide-react";
import heroBg from "@/assets/google-maps-image.jpg";
import { services, styles } from "@/lib/services-data";
import { useI18n } from "@/lib/i18n";
import styleSkinFade from "@/assets/style-skin-fade.jpg";
import styleClassic from "@/assets/style-classic.jpg";
import styleBeard from "@/assets/style-beard.jpg";
import styleShave from "@/assets/style-shave.jpg";
import styleModern from "@/assets/style-modern.jpg";
import styleFatherSon from "@/assets/style-father-son.jpg";

const styleImgs: Record<string, string> = {
  "skin-fade": styleSkinFade,
  classic: styleClassic,
  beard: styleBeard,
  shave: styleShave,
  modern: styleModern,
  "father-son": styleFatherSon,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hamza's Barber Shop – Premium Herrenfriseur in Koblenz" },
      { name: "description", content: "Präzise Schnitte, klassische Rasuren und Bartpflege in Koblenz-Neuendorf. 4,8★ bei 200+ Google Bewertungen. Online buchen." },
      { property: "og:title", content: "Hamza's Barber Shop – Premium Herrenfriseur in Koblenz" },
      { property: "og:description", content: "Präzise Schnitte, klassische Rasuren und Bartpflege in Koblenz." },
      { property: "og:image", content: heroBg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useI18n();
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Hamza's Barber Shop interior" className="w-full h-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6 py-24 w-full">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-5">{t("home.location")}</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.05] max-w-3xl">
              {t("home.hero.title1")} <span className="gold-text-gradient italic">{t("home.hero.titleAccent")}</span> {t("home.hero.title2")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t("home.hero.sub")}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/60 backdrop-blur px-4 py-1.5 text-sm">
              <Star size={14} className="text-gold" fill="currentColor" />
              <span className="font-semibold">4,8</span>
              <span className="text-muted-foreground">· {t("home.reviews")}</span>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/booking" className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 transition">
                {t("nav.book")}
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center rounded-full border border-gold/40 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:border-gold transition">
                {t("home.cta.viewServices")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-card/30 relative">
        <div className="gold-divider absolute top-0 left-0 right-0" />
        <div data-animate="up" data-animate-stagger="0.12" className="mx-auto max-w-6xl px-5 sm:px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v: "4,8★", l: t("home.stats.rating") },
            { v: "200+", l: t("home.stats.reviews") },
            { v: "10+", l: t("home.stats.years") },
            { v: "100%", l: t("home.stats.craft") },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-4xl sm:text-5xl gold-text-gradient">{s.v}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-20">
        <div data-animate="up" className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{t("home.services.kicker")}</p>
            <h2 className="font-display text-4xl sm:text-5xl">{t("home.services.title")}</h2>
          </div>
          <Link to="/services" className="text-sm text-gold hover:underline">{t("home.services.all")}</Link>
        </div>
        <div data-animate="up" data-animate-stagger="0.08" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map((s) => (
            <div key={s.id} className="group rounded-xl border border-border/60 bg-card/40 p-6 hover:border-gold/60 hover:-translate-y-1 hover:shadow-gold transition-all duration-300">
              <Scissors className="text-gold" size={22} />
              <h3 className="mt-4 text-xl font-display">{t(`svc.${s.id}.name`)}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(`svc.${s.id}.desc`)}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Clock size={14} className="text-gold" />{s.duration} {t("svc.min")}</span>
                <span className="text-gold font-semibold">{s.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STYLES PREVIEW */}
      <section className="bg-card/30 border-y border-border/60">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-20">
          <div data-animate="up" className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{t("home.styles.kicker")}</p>
              <h2 className="font-display text-4xl sm:text-5xl">{t("home.styles.title")}</h2>
            </div>
            <Link to="/styles" className="text-sm text-gold hover:underline">{t("home.styles.openGallery")}</Link>
          </div>
          <div data-animate="up" data-animate-stagger="0.08" className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {styles.slice(0, 6).map((st) => (
              <Link
                key={st.id}
                to="/booking"
                search={{ service: st.id }}
                className="group relative overflow-hidden rounded-xl aspect-[3/4] block"
              >
                <img src={styleImgs[st.img]} alt={t(`style.${st.key}.title`)} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" width={1024} height={1280} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold">{t(`style.${st.key}.subtitle`)}</p>
                  <h3 className="font-display text-lg text-white">{t(`style.${st.key}.title`)}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 py-20">
        <div data-animate="up" className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{t("home.testimonials.kicker")}</p>
          <h2 className="font-display text-4xl sm:text-5xl">{t("home.testimonials.title")}</h2>
        </div>
        <div data-animate="up" data-animate-stagger="0.12" className="grid md:grid-cols-3 gap-5">
          {[
            { name: "Daniel M.", text: t("home.testimonial.1") },
            { name: "Erkan K.", text: t("home.testimonial.2") },
            { name: "Lukas W.", text: t("home.testimonial.3") },
          ].map((tm) => (
            <div key={tm.name} className="rounded-xl border border-border/60 bg-card/40 p-6 hover:border-gold/40 transition">
              <div className="flex text-gold mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-sm leading-relaxed text-foreground/90 italic font-display text-lg">"{tm.text}"</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">— {tm.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60">
        <div data-animate="scale" className="mx-auto max-w-4xl px-5 sm:px-6 py-20 text-center">
          <Sparkles className="text-gold mx-auto mb-5" />
          <h2 className="font-display text-4xl sm:text-5xl">{t("home.cta.title")}</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">{t("home.cta.sub")}</p>
          <Link to="/booking" className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 hover:shadow-gold transition">
            {t("home.cta.book")}
          </Link>
        </div>
      </section>
    </>
  );
}
