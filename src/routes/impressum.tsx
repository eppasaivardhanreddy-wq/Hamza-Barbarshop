import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Hamza's Barber Shop" },
      { name: "description", content: "Impressum und rechtliche Angaben für Hamza's Barber Shop in Koblenz." },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 sm:px-6 py-20">
      <div data-animate="up">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Rechtliches</p>
        <h1 className="font-display text-5xl sm:text-6xl">Impressum</h1>
      </div>

      <div data-animate="up" data-animate-delay="0.15" className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground">
        
        <div>
          <h2 className="font-display text-2xl text-foreground mb-3">Angaben gemäß § 5 DDG</h2>
          <p className="text-foreground font-semibold">Hamza [Nachname]</p>
          <p>Hamza's Barber Shop</p>
          <p>Hochstraße 80</p>
          <p>56070 Koblenz</p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-foreground mb-3">Kontakt</h2>
          <p>Telefon: <a href="tel:+4917682388939" className="hover:text-gold transition">+49 176 82388939</a></p>
          <p>E-Mail: <a href="mailto:Hamza.barber.shop2@gmail.com" className="hover:text-gold transition break-all">Hamza.barber.shop2@gmail.com</a></p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-foreground mb-3">Aufsichtsbehörde / Zuständige Kammer</h2>
          <p>Eingetragen in der Handwerksrolle der Handwerkskammer Koblenz.</p>
          <p className="mt-2"><strong className="text-foreground">Zuständige Handwerkskammer:</strong><br />
            Handwerkskammer Koblenz<br />
            Friedrich-Ebert-Ring 33<br />
            56068 Koblenz<br />
            Webseite: <a href="https://www.hwk-koblenz.de" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition">www.hwk-koblenz.de</a>
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-foreground mb-3">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p><strong className="text-foreground">Berufsbezeichnung:</strong> Friseurmeister (verliehen in der Bundesrepublik Deutschland)</p>
          <p className="mt-2"><strong className="text-foreground">Es gelten folgende berufsrechtliche Regelungen:</strong><br />
            Handwerksordnung (HwO) in der jeweils geltenden Fassung.<br />
            Regelung abrufbar unter: <a href="https://www.gesetze-im-internet.de/hwo/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition break-all">https://www.gesetze-im-internet.de/hwo/</a>
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-foreground mb-3">Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            <span className="text-foreground font-mono bg-card/60 px-2.5 py-1 rounded border border-border/40 inline-block mt-1">[DE_UMSATZSTEUER_ID_EINGEBEN]</span>
          </p>
        </div>

        <div className="border-t border-border/40 pt-6">
          <h2 className="font-display text-2xl text-foreground mb-3">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition break-all underline">
              https://ec.europa.eu/consumers/odr/
            </a>.
          </p>
          <p className="mt-2">
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-foreground mb-3">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

      </div>
    </section>
  );
}
