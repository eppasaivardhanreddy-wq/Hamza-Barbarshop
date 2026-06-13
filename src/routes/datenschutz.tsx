import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Hamza's Barber Shop" },
      { name: "description", content: "Datenschutzerklärung und Informationen zum Datenschutz gemäß DSGVO." },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 sm:px-6 py-20">
      <div data-animate="up">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Rechtliches</p>
        <h1 className="font-display text-5xl sm:text-6xl">Datenschutzerklärung</h1>
      </div>

      <div data-animate="up" data-animate-delay="0.15" className="mt-12 space-y-8 text-sm leading-relaxed text-muted-foreground">
        
        <div>
          <h2 className="font-display text-2xl text-foreground mb-3">1. Datenschutz auf einen Blick</h2>
          <h3 className="font-semibold text-foreground mt-4 mb-2">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>
          <h3 className="font-semibold text-foreground mt-4 mb-2">Datenerfassung auf unserer Website</h3>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
          </p>
          <p className="mt-2">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Buchungsformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-foreground mb-3">2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="font-semibold text-foreground mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
          <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
          <p className="text-foreground font-semibold mt-2">Hamza [Nachname]</p>
          <p>Hamza's Barber Shop</p>
          <p>Hochstraße 80</p>
          <p>56070 Koblenz</p>
          <p className="mt-2">Telefon: +49 176 82388939</p>
          <p>E-Mail: Hamza.barber.shop2@gmail.com</p>
          <p className="mt-4">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p>
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres üblichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
          </p>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Recht auf Datenübertragbarkeit</h3>
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </p>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Auskunft, Löschung und Berichtigung</h3>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
          </p>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Recht auf Einschränkung der Verarbeitung</h3>
          <p>
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Zudem steht Ihnen ein Widerspruchsrecht gegen die Verarbeitung nach Art. 21 DSGVO zu.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-foreground mb-3">3. Datenerfassung auf unserer Website</h2>
          
          <h3 className="font-semibold text-foreground mt-4 mb-2">Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Browsertyp und Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL (die zuvor besuchte Seite)</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="mt-2">
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>
          <p>
            Die Erfassung dieser Daten erfolgt auf Grundlage von <strong className="text-foreground">Art. 6 Abs. 1 lit. f DSGVO</strong>. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Logfiles erfasst werden.
          </p>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Online-Terminbuchung und Kontakt</h3>
          <p>
            Wenn Sie über unser Buchungsformular einen Termin anfragen, werden die von Ihnen eingegebenen Daten (Vor- und Nachname, E-Mail-Adresse, Telefonnummer, gewählte Dienstleistung, gewünschtes Datum und Uhrzeit sowie optionale Anmerkungen) verarbeitet.
          </p>
          <p className="mt-2">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von <strong className="text-foreground">Art. 6 Abs. 1 lit. b DSGVO</strong> (Vertragsanbahnung bzw. Vertragserfüllung im Rahmen der Terminvereinbarung). Die Daten werden so lange gespeichert, bis der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossenem Termin oder Löschungsaufforderung), es sei denn, gesetzliche Aufbewahrungsfristen (z. B. steuerliche Vorgaben) stehen dem entgegen.
          </p>

          <h3 className="font-semibold text-foreground mt-6 mb-2">Datenweitergabe an Drittanbieter zur Benachrichtigung</h3>
          <p>
            Zur Durchführung unseres Online-Buchungsprozesses nutzen wir die Unterstützung der folgenden Dienste:
          </p>
          <ul className="list-decimal pl-5 space-y-4 mt-2">
            <li>
              <strong className="text-foreground">Brevo (E-Mail-Bestätigungen):</strong><br />
              Um Ihnen Buchungsbestätigungen zuzustellen, werden Name, E-Mail-Adresse, Termindetails und Dienstleistungen an Brevo (Sendinblue GmbH, Köpenicker Straße 126, 10179 Berlin, Deutschland) übermittelt. Wir haben mit Brevo einen Vertrag über Auftragsverarbeitung (AVV) geschlossen, um den Schutz Ihrer Daten zu gewährleisten. Die Übermittlung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
            </li>
            <li>
              <strong className="text-foreground">Telegram (Interne Benachrichtigungen):</strong><br />
              Sobald Sie einen Termin anfragen, wird eine verschlüsselte Benachrichtigung mit Ihren Buchungsdetails (Name, Telefonnummer, Leistung, Zeit) über die Telegram Bot API an den Saloninhaber weitergeleitet. Dies dient der Echtzeit-Terminkoordination und der Betriebsorganisation des Salons. Die Übermittlung basiert auf unserem berechtigten Interesse an einer schnellen Terminabwicklung (Art. 6 Abs. 1 lit. f DSGVO). Es werden dabei keine Zahlungsdaten übertragen.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl text-foreground mb-3">4. Externe Dienste & Embeds</h2>
          <h3 className="font-semibold text-foreground mt-4 mb-2">Google Maps</h3>
          <p>
            Wir binden auf unserer Kontaktseite Kartenmaterial von Google Maps ein. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
          </p>
          <p className="mt-2">
            Um Ihre Privatsphäre zu schützen, ist diese Karte standardmäßig deaktiviert (2-Klick-Lösung). Erst wenn Sie dem Laden der Karte explizit zustimmen („Opt-In“ durch Klick auf den Button), baut Ihr Browser eine direkte Verbindung zu den Servern von Google auf. Dabei wird Ihre IP-Adresse an Google übertragen und ggf. Cookies gesetzt.
          </p>
          <p className="mt-2">
            Die Rechtsgrundlage für das Laden der Karte ist Ihre Einwilligung gemäß <strong className="text-foreground">Art. 6 Abs. 1 lit. a DSGVO</strong>. Sie können diese Einwilligung für die Dauer Ihrer Browser-Sitzung erteilen. Eine dauerhafte Speicherung der Einwilligung in Form von Tracking-Cookies findet auf unserer Webseite nicht statt.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-foreground mb-3">5. Cookies</h2>
          <p>
            Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb und die Sicherheit des Webauftritts unerlässlich sind (z. B. zur Speicherung Ihrer Sprachauswahl).
          </p>
          <p className="mt-2">
            Wir führen kein Nutzer-Tracking durch und verwenden keine Analyse-Cookies (wie Google Analytics) oder Werbepixel (wie den Meta-Pixel). Da wir keine einwilligungspflichtigen Werbe- oder Marketing-Cookies einsetzen, ist auf dieser Website gem. DSGVO und TDDDG <strong className="text-foreground">kein Cookie-Banner erforderlich</strong>.
          </p>
        </div>

      </div>
    </section>
  );
}
