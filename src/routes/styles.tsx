import { createFileRoute, Link } from "@tanstack/react-router";
import { styles } from "@/lib/services-data";
import { useI18n } from "@/lib/i18n";
import styleSkinFade from "@/assets/style-skin-fade.jpg";
import styleClassic from "@/assets/style-classic.jpg";
import styleBeard from "@/assets/style-beard.jpg";
import styleShave from "@/assets/style-shave.jpg";
import styleModern from "@/assets/style-modern.jpg";
import styleFatherSon from "@/assets/style-father-son.jpg";

const imgs: Record<string, string> = {
  "skin-fade": styleSkinFade,
  classic: styleClassic,
  beard: styleBeard,
  shave: styleShave,
  modern: styleModern,
  "father-son": styleFatherSon,
};

export const Route = createFileRoute("/styles")({
  head: () => ({
    meta: [
      { title: "Signature Styles – Hamza's Barber Shop" },
      { name: "description", content: "Inspiration aus unserer Galerie: Skin Fades, klassische Schnitte, Bart und Hot Towel Rasuren." },
      { property: "og:title", content: "Signature Styles – Hamza's Barber Shop" },
      { property: "og:description", content: "Inspiration aus unserer Galerie." },
    ],
  }),
  component: StylesPage,
});

function StylesPage() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-6 py-20">
      <div data-animate="up" className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{t("styles.kicker")}</p>
        <h1 className="font-display text-5xl sm:text-6xl">{t("styles.title")}</h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{t("styles.intro")}</p>
      </div>

      <div data-animate="up" data-animate-stagger="0.08" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {styles.map((st) => (
          <Link
            key={st.id}
            to="/booking"
            search={{ service: st.id }}
            className="group relative overflow-hidden rounded-2xl aspect-[3/4] block"
          >
            <img
              src={imgs[st.img]}
              alt={t(`style.${st.key}.title`)}
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold">{t(`style.${st.key}.subtitle`)}</p>
              <h3 className="font-display text-2xl text-white mt-1">{t(`style.${st.key}.title`)}</h3>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/80 group-hover:text-gold transition">
                {t("styles.bookThis")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
