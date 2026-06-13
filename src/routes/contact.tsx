import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Star } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontakt & Anfahrt – Hamza's Barber Shop Koblenz" },
      { name: "description", content: "Besuchen Sie uns in Koblenz-Neuendorf. Adresse, Öffnungszeiten und Telefonnummer." },
      { property: "og:title", content: "Kontakt & Anfahrt – Hamza's Barber Shop" },
      { property: "og:description", content: "Adresse, Öffnungszeiten und Telefonnummer in Koblenz." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-5xl px-5 sm:px-6 py-20">
      <div data-animate="up">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">{t("contact.kicker")}</p>
        <h1 className="font-display text-5xl sm:text-6xl">{t("contact.title")}</h1>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/40 px-4 py-1.5 text-sm">
          <Star size={14} className="text-gold" fill="currentColor" />
          <span className="font-semibold">4,8</span>
          <span className="text-muted-foreground">· {t("home.reviews")}</span>
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-10">
        <div data-animate="left" className="space-y-6">
          <div className="flex gap-4">
            <MapPin className="text-gold shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-display text-xl">{t("contact.address")}</h3>
              <p className="text-muted-foreground">Hochstraße 80<br />56070 Koblenz</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="text-gold shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-display text-xl">{t("contact.phone")}</h3>
              <a href="tel:+4917682388939" className="text-muted-foreground hover:text-gold" dir="ltr">+49 176 82388939</a>
            </div>
          </div>
          <div className="flex gap-4">
            <Mail className="text-gold shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-display text-xl">{t("contact.email")}</h3>
              <a href="mailto:Hamza.barber.shop2@gmail.com" className="text-muted-foreground hover:text-gold break-all">Hamza.barber.shop2@gmail.com</a>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="text-gold shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-display text-xl">{t("contact.hours")}</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>{t("contact.hours.mf")}</li>
                <li>{t("contact.hours.sa")}</li>
                <li>{t("contact.hours.so")}</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4 pt-2">
            <a href="https://www.instagram.com/hamza.sbarbershop" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold">
              <Instagram size={18} /> @hamza.sbarbershop
            </a>
            <a href="https://www.facebook.com/people/Hamzas-barber-shop/100048362336560/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold">
              <Facebook size={18} /> Facebook
            </a>
          </div>
        </div>

        <div data-animate="right" className="rounded-2xl overflow-hidden border border-border/60 aspect-square md:aspect-auto shadow-warm">
          <iframe
            title="Karte – Hamza's Barber Shop Koblenz"
            src="https://www.google.com/maps?q=Hochstra%C3%9Fe+80,+56070+Koblenz&output=embed"
            className="w-full h-full min-h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
