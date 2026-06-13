import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { g as gsapWithCSS, S as ScrollTrigger } from "../_libs/gsap.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { X, M as Menu, I as Instagram, F as Facebook, a as MapPin, P as Phone, b as Mail, G as Globe, C as Check } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-CjnMRHFq.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const logo = "/assets/logo-CTkggHVr.jpeg";
const LANGS = [
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ar", label: "العربية", flag: "🇸🇦" }
];
const de = {
  // nav
  "nav.start": "Start",
  "nav.services": "Leistungen",
  "nav.styles": "Styles",
  "nav.about": "Über uns",
  "nav.contact": "Kontakt",
  "nav.book": "Termin buchen",
  "nav.menu": "Menü",
  // footer
  "footer.tagline": "Premium Herrenhaarschnitte, klassische Rasuren und Bartpflege in Koblenz-Neuendorf. Tradition trifft auf modernes Handwerk.",
  "footer.contact": "Kontakt",
  "footer.hours": "Öffnungszeiten",
  "footer.hours.weekdays": "Mo – Fr: 09:30 – 18:30",
  "footer.hours.sat": "Sa: 09:30 – 17:00",
  "footer.hours.sun": "So: Geschlossen",
  "footer.rights": "Alle Rechte vorbehalten.",
  "footer.madeIn": "Mit Sorgfalt gemacht in Koblenz.",
  // home
  "home.location": "Koblenz · Neuendorf",
  "home.hero.title1": "Handwerk, das man",
  "home.hero.titleAccent": "sieht",
  "home.hero.title2": "und spürt.",
  "home.hero.sub": "Premium Herrenhaarschnitte, klassische Rasuren und Bartpflege – in einem warmen, modernen Salon mit Atmosphäre.",
  "home.reviews": "200+ Google Bewertungen",
  "home.cta.viewServices": "Leistungen ansehen",
  "home.stats.rating": "Google Bewertung",
  "home.stats.reviews": "Bewertungen",
  "home.stats.years": "Jahre Erfahrung",
  "home.stats.craft": "Handwerk",
  "home.services.kicker": "Unsere Leistungen",
  "home.services.title": "Vom Klassiker bis zum modernen Cut",
  "home.services.all": "Alle ansehen →",
  "home.styles.kicker": "Inspiration",
  "home.styles.title": "Signature Styles",
  "home.styles.openGallery": "Galerie öffnen →",
  "home.testimonials.kicker": "Stimmen",
  "home.testimonials.title": "Was unsere Gäste sagen",
  "home.testimonial.1": "Bester Skin Fade in Koblenz. Saubere Arbeit, entspannte Atmosphäre.",
  "home.testimonial.2": "Hot Towel Shave wie im Urlaub. Komme jeden Monat wieder.",
  "home.testimonial.3": "Endlich ein Barber, der zuhört. Sehr präzise und freundlich.",
  "home.cta.title": "Bereit für Ihren nächsten Look?",
  "home.cta.sub": "Buchen Sie online in unter einer Minute. Wir bestätigen Ihren Termin per E-Mail.",
  "home.cta.book": "Jetzt Termin buchen",
  // services page
  "services.kicker": "Preise",
  "services.title": "Preise",
  "services.intro": "Klassisches Handwerk zu fairen Preisen. Wählen Sie Ihre Leistung – wir freuen uns auf Sie.",
  "services.extras": "Extras",
  "services.book": "Buchen",
  "services.note": "Endgültiger Preis wird vor Ort beim Termin bestätigt – abhängig von Haarlänge und Aufwand.",
  // styles page
  "styles.kicker": "Galerie",
  "styles.title": "Signature Styles",
  "styles.intro": "Sechs Looks, die wir lieben. Klicken Sie auf einen Style, um direkt zu buchen.",
  "styles.bookThis": "Diesen Style buchen →",
  // about
  "about.kicker": "Über uns",
  "about.title": "Handwerk mit Haltung.",
  "about.p1": "Hamza's Barber Shop in Koblenz-Neuendorf steht für klassisches Barbierhandwerk in einer modernen, ruhigen Umgebung – warmes Holz, weiches Licht und ein Boden aus poliertem Marmor. Hier nimmt man sich Zeit.",
  "about.p2": "Jeder Schnitt beginnt mit einem Gespräch. Wir hören zu, beraten ehrlich und arbeiten präzise. Ob sauberer Skin Fade, ein zeitloser klassischer Schnitt oder die königliche Hot-Towel-Rasur – das Handwerk steht im Mittelpunkt.",
  "about.quote": '"Ein guter Haarschnitt ist nicht laut. Er passt einfach."',
  "about.val1.t": "Präzision",
  "about.val1.d": "Jeder Millimeter zählt.",
  "about.val2.t": "Leidenschaft",
  "about.val2.d": "Wir lieben, was wir tun.",
  "about.val3.t": "Erfahrung",
  "about.val3.d": "Über 10 Jahre Handwerk.",
  // contact
  "contact.kicker": "Kontakt",
  "contact.title": "Besuchen Sie uns.",
  "contact.address": "Adresse",
  "contact.phone": "Telefon",
  "contact.email": "E-Mail",
  "contact.hours": "Öffnungszeiten",
  "contact.hours.mf": "Montag – Freitag: 09:30 – 18:30",
  "contact.hours.sa": "Samstag: 09:30 – 17:00",
  "contact.hours.so": "Sonntag: Geschlossen",
  "contact.map.prompt": "Google Maps laden?",
  "contact.map.desc": "Wenn Sie die Karte laden, werden personenbezogene Daten (wie Ihre IP-Adresse) an Google übertragen. Weitere Informationen finden Sie in unserer Datenschutzerklärung.",
  "contact.map.btn": "Karte anzeigen",
  // booking
  "booking.kicker": "Online buchen",
  "booking.title": "Termin reservieren",
  "booking.sub": "In unter einer Minute – wir bestätigen per E-Mail.",
  "booking.service": "Leistung",
  "booking.choose": "Bitte wählen…",
  "booking.date": "Datum",
  "booking.time": "Uhrzeit",
  "booking.noSlots": "Keine Slots",
  "booking.pickDate": "Zuerst Datum",
  "booking.name": "Name",
  "booking.namePlaceholder": "Vor- und Nachname",
  "booking.emailPlaceholder": "ihre@email.de",
  "booking.phone": "Telefon",
  "booking.notes": "Anmerkungen (optional)",
  "booking.notesPlaceholder": "Wünsche zum Schnitt, Allergien, …",
  "booking.submit": "Termin anfragen",
  "booking.cancelNote": "Stornierung bitte spätestens 2 Stunden vor dem Termin.",
  "booking.failed": "Buchung fehlgeschlagen",
  "booking.success.title": "Termin angefragt",
  "booking.success.msg": "Vielen Dank! Eine Bestätigung wurde an Ihre E-Mail gesendet. Wir freuen uns auf Sie.",
  "booking.success.ref": "Buchungs-Nr.:",
  "booking.success.home": "Zur Startseite",
  // errors / 404
  "err.404": "Seite nicht gefunden",
  "err.404.sub": "Die gesuchte Seite existiert nicht oder wurde verschoben.",
  "err.home": "Zur Startseite",
  "err.load": "Diese Seite konnte nicht geladen werden",
  "err.retry": "Bitte versuchen Sie es erneut.",
  "err.tryAgain": "Erneut versuchen",
  "err.homeShort": "Startseite",
  // language
  "lang.label": "Sprache",
  // services data
  "svc.haarschnitt.name": "Haarschnitt",
  "svc.haarschnitt.desc": "Klassischer Herrenschnitt nach Ihren Wünschen.",
  "svc.waschen-schneiden.name": "Waschen / Schneiden",
  "svc.waschen-schneiden.desc": "Haarwäsche und präziser Schnitt in einem Termin.",
  "svc.haarschnitt-kinder.name": "Haarschnitt Kinder",
  "svc.haarschnitt-kinder.desc": "Geduldiger Schnitt für die jungen Gentlemen.",
  "svc.kopfmassage.name": "Kopfmassage",
  "svc.kopfmassage.desc": "Entspannende Kopf- und Nackenmassage.",
  "svc.komplett-pflege.name": "Komplett-Pflege",
  "svc.komplett-pflege.desc": "Waschen, schneiden und rasieren – das komplette Erlebnis.",
  "svc.klassische-nassrasur.name": "Klassische Nassrasur",
  "svc.klassische-nassrasur.desc": "Traditionelle Nassrasur mit der Klinge.",
  "svc.nassrasur-modell.name": "Nassrasur Modell",
  "svc.nassrasur-modell.desc": "Konturierte Nassrasur nach Wunschform.",
  "svc.grauabdeckung-bart.name": "Grauabdeckung Bart",
  "svc.grauabdeckung-bart.desc": "Färbung zur Abdeckung grauer Bartpartien.",
  "svc.augenbrauen-zupfen.name": "Augenbrauen zupfen",
  "svc.augenbrauen-zupfen.desc": "Präzises Formen der Augenbrauen.",
  "svc.gesichtsreinigung-dampf.name": "Gesichtsreinigung mit Dampf",
  "svc.gesichtsreinigung-dampf.desc": "Tiefenreinigung mit warmem Dampf für strahlende Haut.",
  "svc.maske.name": "Maske",
  "svc.maske.desc": "Pflegende Gesichtsmaske für sichtbare Frische.",
  "svc.wachs-ohren-nase.name": "Wachs Ohren / Nase",
  "svc.wachs-ohren-nase.desc": "Schnelle, saubere Haarentfernung mit Wachs.",
  "svc.wachs-komplett.name": "Wachs Komplett",
  "svc.wachs-komplett.desc": "Ohren und Nase – komplette Wachsbehandlung.",
  "svc.min": "Min",
  // styles data
  "style.classic.title": "Klassischer Schnitt",
  "style.classic.subtitle": "Zeitlos · Elegant",
  "style.modern.title": "Wash & Cut",
  "style.modern.subtitle": "Modern · Frisch",
  "style.shave.title": "Klassische Nassrasur",
  "style.shave.subtitle": "Königlich · Entspannend",
  "style.beard.title": "Bart Sculpting",
  "style.beard.subtitle": "Präzise · Gepflegt",
  "style.skinfade.title": "Nassrasur Modell",
  "style.skinfade.subtitle": "Konturiert · Scharf",
  "style.fatherson.title": "Father & Son",
  "style.fatherson.subtitle": "Familie · Tradition"
};
const en = {
  "nav.start": "Home",
  "nav.services": "Services",
  "nav.styles": "Styles",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.book": "Book Appointment",
  "nav.menu": "Menu",
  "footer.tagline": "Premium men's haircuts, classic shaves and beard care in Koblenz-Neuendorf. Tradition meets modern craftsmanship.",
  "footer.contact": "Contact",
  "footer.hours": "Opening Hours",
  "footer.hours.weekdays": "Mon – Fri: 09:30 – 18:30",
  "footer.hours.sat": "Sat: 09:30 – 17:00",
  "footer.hours.sun": "Sun: Closed",
  "footer.rights": "All rights reserved.",
  "footer.madeIn": "Crafted with care in Koblenz.",
  "home.location": "Koblenz · Neuendorf",
  "home.hero.title1": "Craftsmanship you can",
  "home.hero.titleAccent": "see",
  "home.hero.title2": "and feel.",
  "home.hero.sub": "Premium men's haircuts, classic shaves and beard care – in a warm, modern salon with atmosphere.",
  "home.reviews": "200+ Google reviews",
  "home.cta.viewServices": "View services",
  "home.stats.rating": "Google Rating",
  "home.stats.reviews": "Reviews",
  "home.stats.years": "Years Experience",
  "home.stats.craft": "Craftsmanship",
  "home.services.kicker": "Our Services",
  "home.services.title": "From classic to modern cuts",
  "home.services.all": "View all →",
  "home.styles.kicker": "Inspiration",
  "home.styles.title": "Signature Styles",
  "home.styles.openGallery": "Open gallery →",
  "home.testimonials.kicker": "Voices",
  "home.testimonials.title": "What our guests say",
  "home.testimonial.1": "Best skin fade in Koblenz. Clean work, relaxed atmosphere.",
  "home.testimonial.2": "Hot towel shave like on holiday. Coming back every month.",
  "home.testimonial.3": "Finally a barber who listens. Very precise and friendly.",
  "home.cta.title": "Ready for your next look?",
  "home.cta.sub": "Book online in under a minute. We confirm your appointment by email.",
  "home.cta.book": "Book Now",
  "services.kicker": "Prices",
  "services.title": "Prices",
  "services.intro": "Classic craftsmanship at fair prices. Choose your service – we look forward to seeing you.",
  "services.extras": "Extras",
  "services.book": "Book",
  "services.note": "Final price is confirmed on site at your appointment – depending on hair length and effort.",
  "styles.kicker": "Gallery",
  "styles.title": "Signature Styles",
  "styles.intro": "Six looks we love. Tap a style to book it directly.",
  "styles.bookThis": "Book this style →",
  "about.kicker": "About",
  "about.title": "Craftsmanship with attitude.",
  "about.p1": "Hamza's Barber Shop in Koblenz-Neuendorf stands for classic barber craft in a modern, calm environment – warm wood, soft light and a polished marble floor. Here we take our time.",
  "about.p2": "Every cut starts with a conversation. We listen, give honest advice and work precisely. Whether it's a clean skin fade, a timeless classic cut or a royal hot towel shave – the craft is at the center.",
  "about.quote": `"A great haircut isn't loud. It just fits."`,
  "about.val1.t": "Precision",
  "about.val1.d": "Every millimeter counts.",
  "about.val2.t": "Passion",
  "about.val2.d": "We love what we do.",
  "about.val3.t": "Experience",
  "about.val3.d": "Over 10 years of craft.",
  "contact.kicker": "Contact",
  "contact.title": "Visit us.",
  "contact.address": "Address",
  "contact.phone": "Phone",
  "contact.email": "Email",
  "contact.hours": "Opening Hours",
  "contact.hours.mf": "Monday – Friday: 09:30 – 18:30",
  "contact.hours.sa": "Saturday: 09:30 – 17:00",
  "contact.hours.so": "Sunday: Closed",
  "contact.map.prompt": "Load Google Maps?",
  "contact.map.desc": "Loading the map will transmit personal data (such as your IP address) to Google. Read more in our Privacy Policy.",
  "contact.map.btn": "Show Map",
  "booking.kicker": "Book Online",
  "booking.title": "Reserve appointment",
  "booking.sub": "In under a minute – we confirm by email.",
  "booking.service": "Service",
  "booking.choose": "Please choose…",
  "booking.date": "Date",
  "booking.time": "Time",
  "booking.noSlots": "No slots",
  "booking.pickDate": "Pick date first",
  "booking.name": "Name",
  "booking.namePlaceholder": "First and last name",
  "booking.emailPlaceholder": "your@email.com",
  "booking.phone": "Phone",
  "booking.notes": "Notes (optional)",
  "booking.notesPlaceholder": "Cut preferences, allergies, …",
  "booking.submit": "Request appointment",
  "booking.cancelNote": "Please cancel at least 2 hours before the appointment.",
  "booking.failed": "Booking failed",
  "booking.success.title": "Appointment requested",
  "booking.success.msg": "Thank you! A confirmation has been sent to your email. We look forward to seeing you.",
  "booking.success.ref": "Booking ref:",
  "booking.success.home": "Back to home",
  "err.404": "Page not found",
  "err.404.sub": "The page you're looking for doesn't exist or has been moved.",
  "err.home": "Back to home",
  "err.load": "This page could not be loaded",
  "err.retry": "Please try again.",
  "err.tryAgain": "Try again",
  "err.homeShort": "Home",
  "lang.label": "Language",
  "svc.haarschnitt.name": "Haircut",
  "svc.haarschnitt.desc": "Classic men's cut tailored to your wishes.",
  "svc.waschen-schneiden.name": "Wash / Cut",
  "svc.waschen-schneiden.desc": "Hair wash and precise cut in one appointment.",
  "svc.haarschnitt-kinder.name": "Kids' Haircut",
  "svc.haarschnitt-kinder.desc": "Patient cut for the young gentlemen.",
  "svc.kopfmassage.name": "Head Massage",
  "svc.kopfmassage.desc": "Relaxing head and neck massage.",
  "svc.komplett-pflege.name": "Complete Care",
  "svc.komplett-pflege.desc": "Wash, cut and shave – the complete experience.",
  "svc.klassische-nassrasur.name": "Classic Wet Shave",
  "svc.klassische-nassrasur.desc": "Traditional wet shave with the blade.",
  "svc.nassrasur-modell.name": "Wet Shave Styled",
  "svc.nassrasur-modell.desc": "Contoured wet shave in your desired shape.",
  "svc.grauabdeckung-bart.name": "Beard Grey Cover",
  "svc.grauabdeckung-bart.desc": "Coloring to cover grey patches in the beard.",
  "svc.augenbrauen-zupfen.name": "Eyebrow Shaping",
  "svc.augenbrauen-zupfen.desc": "Precise eyebrow shaping.",
  "svc.gesichtsreinigung-dampf.name": "Facial Steam Cleansing",
  "svc.gesichtsreinigung-dampf.desc": "Deep cleansing with warm steam for radiant skin.",
  "svc.maske.name": "Mask",
  "svc.maske.desc": "Nourishing face mask for visible freshness.",
  "svc.wachs-ohren-nase.name": "Wax Ears / Nose",
  "svc.wachs-ohren-nase.desc": "Fast, clean hair removal with wax.",
  "svc.wachs-komplett.name": "Wax Complete",
  "svc.wachs-komplett.desc": "Ears and nose – complete waxing treatment.",
  "svc.min": "min",
  "style.classic.title": "Classic Cut",
  "style.classic.subtitle": "Timeless · Elegant",
  "style.modern.title": "Wash & Cut",
  "style.modern.subtitle": "Modern · Fresh",
  "style.shave.title": "Classic Wet Shave",
  "style.shave.subtitle": "Royal · Relaxing",
  "style.beard.title": "Beard Sculpting",
  "style.beard.subtitle": "Precise · Groomed",
  "style.skinfade.title": "Styled Wet Shave",
  "style.skinfade.subtitle": "Contoured · Sharp",
  "style.fatherson.title": "Father & Son",
  "style.fatherson.subtitle": "Family · Tradition"
};
const ar = {
  "nav.start": "الرئيسية",
  "nav.services": "الخدمات",
  "nav.styles": "التسريحات",
  "nav.about": "من نحن",
  "nav.contact": "اتصل بنا",
  "nav.book": "احجز موعد",
  "nav.menu": "القائمة",
  "footer.tagline": "قصات شعر رجالية فاخرة، حلاقة كلاسيكية والعناية باللحية في كوبلنز-نويندورف. التقليد يلتقي بالحرفية الحديثة.",
  "footer.contact": "اتصل بنا",
  "footer.hours": "ساعات العمل",
  "footer.hours.weekdays": "الإثنين – الجمعة: 09:30 – 18:30",
  "footer.hours.sat": "السبت: 09:30 – 17:00",
  "footer.hours.sun": "الأحد: مغلق",
  "footer.rights": "جميع الحقوق محفوظة.",
  "footer.madeIn": "صنع بعناية في كوبلنز.",
  "home.location": "كوبلنز · نويندورف",
  "home.hero.title1": "حرفة",
  "home.hero.titleAccent": "تُرى",
  "home.hero.title2": "وتُحَس.",
  "home.hero.sub": "قصات شعر رجالية فاخرة، حلاقة كلاسيكية والعناية باللحية – في صالون دافئ وعصري بأجواء مميزة.",
  "home.reviews": "+200 تقييم على جوجل",
  "home.cta.viewServices": "عرض الخدمات",
  "home.stats.rating": "تقييم جوجل",
  "home.stats.reviews": "التقييمات",
  "home.stats.years": "سنوات الخبرة",
  "home.stats.craft": "حرفية",
  "home.services.kicker": "خدماتنا",
  "home.services.title": "من الكلاسيكي إلى العصري",
  "home.services.all": "عرض الكل ←",
  "home.styles.kicker": "إلهام",
  "home.styles.title": "تسريحات مميزة",
  "home.styles.openGallery": "فتح المعرض ←",
  "home.testimonials.kicker": "آراء",
  "home.testimonials.title": "ماذا يقول زبائننا",
  "home.testimonial.1": "أفضل سكين فيد في كوبلنز. عمل نظيف وأجواء مريحة.",
  "home.testimonial.2": "حلاقة المنشفة الساخنة كأنها في إجازة. أعود كل شهر.",
  "home.testimonial.3": "أخيراً حلاق يستمع. دقيق جداً وودود.",
  "home.cta.title": "هل أنت مستعد لإطلالتك القادمة؟",
  "home.cta.sub": "احجز عبر الإنترنت في أقل من دقيقة. نؤكد موعدك عبر البريد الإلكتروني.",
  "home.cta.book": "احجز الآن",
  "services.kicker": "الأسعار",
  "services.title": "الأسعار",
  "services.intro": "حرفية كلاسيكية بأسعار عادلة. اختر خدمتك – نتطلع لرؤيتك.",
  "services.extras": "إضافات",
  "services.book": "احجز",
  "services.note": "يتم تأكيد السعر النهائي عند الموعد – حسب طول الشعر والجهد المبذول.",
  "styles.kicker": "المعرض",
  "styles.title": "تسريحات مميزة",
  "styles.intro": "ست إطلالات نحبها. اضغط على تسريحة لحجزها مباشرة.",
  "styles.bookThis": "احجز هذه التسريحة ←",
  "about.kicker": "من نحن",
  "about.title": "حرفة بمواقف.",
  "about.p1": "صالون حمزة للحلاقة في كوبلنز-نويندورف يمثل حرفة الحلاقة الكلاسيكية في بيئة حديثة وهادئة – خشب دافئ وإضاءة ناعمة وأرضية رخامية مصقولة. هنا نأخذ وقتنا.",
  "about.p2": "كل قصة تبدأ بحوار. نستمع ونقدم نصائح صادقة ونعمل بدقة. سواء كانت سكين فيد نظيفة أو قصة كلاسيكية خالدة أو حلاقة المنشفة الساخنة الملكية – الحرفة في المقدمة.",
  "about.quote": '"قصة الشعر الجيدة ليست صاخبة. هي ببساطة تناسبك."',
  "about.val1.t": "الدقة",
  "about.val1.d": "كل ملليمتر يهم.",
  "about.val2.t": "الشغف",
  "about.val2.d": "نحب ما نفعل.",
  "about.val3.t": "الخبرة",
  "about.val3.d": "أكثر من 10 سنوات من الحرفة.",
  "contact.kicker": "اتصل بنا",
  "contact.title": "زرنا.",
  "contact.address": "العنوان",
  "contact.phone": "الهاتف",
  "contact.email": "البريد الإلكتروني",
  "contact.hours": "ساعات العمل",
  "contact.hours.mf": "الإثنين – الجمعة: 09:30 – 18:30",
  "contact.hours.sa": "السبت: 09:30 – 17:00",
  "contact.hours.so": "الأحد: مغلق",
  "contact.map.prompt": "تحميل خرائط جوجل؟",
  "contact.map.desc": "تحميل الخريطة سيؤدي إلى نقل البيانات الشخصية (مثل عنوان IP الخاص بك) إلى جوجل. اقرأ المزيد في سياسة الخصوصية الخاصة بنا.",
  "contact.map.btn": "عرض الخريطة",
  "booking.kicker": "احجز عبر الإنترنت",
  "booking.title": "احجز موعد",
  "booking.sub": "في أقل من دقيقة – نؤكد عبر البريد الإلكتروني.",
  "booking.service": "الخدمة",
  "booking.choose": "الرجاء الاختيار…",
  "booking.date": "التاريخ",
  "booking.time": "الوقت",
  "booking.noSlots": "لا توجد مواعيد",
  "booking.pickDate": "اختر التاريخ أولاً",
  "booking.name": "الاسم",
  "booking.namePlaceholder": "الاسم الأول والأخير",
  "booking.emailPlaceholder": "your@email.com",
  "booking.phone": "الهاتف",
  "booking.notes": "ملاحظات (اختياري)",
  "booking.notesPlaceholder": "تفضيلات القصة، الحساسية، …",
  "booking.submit": "طلب موعد",
  "booking.cancelNote": "الرجاء الإلغاء قبل ساعتين على الأقل من الموعد.",
  "booking.failed": "فشل الحجز",
  "booking.success.title": "تم طلب الموعد",
  "booking.success.msg": "شكراً لك! تم إرسال تأكيد إلى بريدك الإلكتروني. نتطلع لرؤيتك.",
  "booking.success.ref": "رقم الحجز:",
  "booking.success.home": "العودة للرئيسية",
  "err.404": "الصفحة غير موجودة",
  "err.404.sub": "الصفحة المطلوبة غير موجودة أو تم نقلها.",
  "err.home": "العودة للرئيسية",
  "err.load": "تعذر تحميل هذه الصفحة",
  "err.retry": "الرجاء المحاولة مرة أخرى.",
  "err.tryAgain": "حاول مرة أخرى",
  "err.homeShort": "الرئيسية",
  "lang.label": "اللغة",
  "svc.haarschnitt.name": "قص الشعر",
  "svc.haarschnitt.desc": "قصة رجالية كلاسيكية حسب رغبتك.",
  "svc.waschen-schneiden.name": "غسيل / قص",
  "svc.waschen-schneiden.desc": "غسيل الشعر وقص دقيق في موعد واحد.",
  "svc.haarschnitt-kinder.name": "قص شعر الأطفال",
  "svc.haarschnitt-kinder.desc": "قصة بصبر للصغار.",
  "svc.kopfmassage.name": "تدليك الرأس",
  "svc.kopfmassage.desc": "تدليك مريح للرأس والرقبة.",
  "svc.komplett-pflege.name": "العناية الكاملة",
  "svc.komplett-pflege.desc": "غسيل وقص وحلاقة – التجربة الكاملة.",
  "svc.klassische-nassrasur.name": "حلاقة كلاسيكية رطبة",
  "svc.klassische-nassrasur.desc": "حلاقة رطبة تقليدية بالشفرة.",
  "svc.nassrasur-modell.name": "حلاقة رطبة منسقة",
  "svc.nassrasur-modell.desc": "حلاقة رطبة محددة بالشكل المطلوب.",
  "svc.grauabdeckung-bart.name": "تغطية الشيب في اللحية",
  "svc.grauabdeckung-bart.desc": "صباغة لتغطية الشيب في اللحية.",
  "svc.augenbrauen-zupfen.name": "تشكيل الحواجب",
  "svc.augenbrauen-zupfen.desc": "تشكيل دقيق للحواجب.",
  "svc.gesichtsreinigung-dampf.name": "تنظيف الوجه بالبخار",
  "svc.gesichtsreinigung-dampf.desc": "تنظيف عميق بالبخار الدافئ لبشرة مشرقة.",
  "svc.maske.name": "ماسك",
  "svc.maske.desc": "ماسك مغذي للوجه لنضارة واضحة.",
  "svc.wachs-ohren-nase.name": "شمع الأذن / الأنف",
  "svc.wachs-ohren-nase.desc": "إزالة سريعة ونظيفة للشعر بالشمع.",
  "svc.wachs-komplett.name": "شمع كامل",
  "svc.wachs-komplett.desc": "الأذن والأنف – علاج شمع كامل.",
  "svc.min": "دقيقة",
  "style.classic.title": "قصة كلاسيكية",
  "style.classic.subtitle": "خالدة · أنيقة",
  "style.modern.title": "غسيل وقص",
  "style.modern.subtitle": "عصرية · منعشة",
  "style.shave.title": "حلاقة كلاسيكية رطبة",
  "style.shave.subtitle": "ملكية · مريحة",
  "style.beard.title": "نحت اللحية",
  "style.beard.subtitle": "دقيقة · مهذبة",
  "style.skinfade.title": "حلاقة رطبة منسقة",
  "style.skinfade.subtitle": "محددة · حادة",
  "style.fatherson.title": "الأب والابن",
  "style.fatherson.subtitle": "عائلة · تقليد"
};
const dicts = { de, en, ar };
const LangCtx = reactExports.createContext(null);
function LanguageProvider({ children }) {
  const [lang, setLangState] = reactExports.useState("de");
  reactExports.useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("lang");
    if (stored && dicts[stored]) setLangState(stored);
  }, []);
  const dir = lang === "ar" ? "rtl" : "ltr";
  reactExports.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
  }, [lang, dir]);
  const setLang = (l) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const t = (key) => dicts[lang][key] ?? dicts.de[key] ?? key;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LangCtx.Provider, { value: { lang, setLang, t, dir }, children });
}
function useI18n() {
  const ctx = reactExports.useContext(LangCtx);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
function LanguageSwitcher({ compact = false }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];
  reactExports.useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        className: "inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5 text-xs text-muted-foreground hover:text-gold hover:border-gold/50 transition",
        "aria-label": "Change language",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: 14 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium uppercase tracking-wider", children: current.code })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute ${compact ? "right-0" : "end-0"} mt-2 min-w-[150px] rounded-lg border border-border/60 bg-card/95 backdrop-blur shadow-lg overflow-hidden z-50`, children: LANGS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => {
          setLang(l.code);
          setOpen(false);
        },
        className: `w-full flex items-center justify-between gap-2 px-3 py-2 text-sm hover:bg-gold/10 transition ${lang === l.code ? "text-gold" : "text-foreground"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.flag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.label })
          ] }),
          lang === l.code && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14 })
        ]
      },
      l.code
    )) })
  ] });
}
function Logo({ size = 44 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: logo,
        alt: "Hamza's Barber Shop Logo",
        width: size,
        height: size,
        className: "rounded-full border-2 border-gold object-cover shadow-[0_0_0_3px_rgba(201,168,76,0.15)] transition-transform group-hover:scale-105",
        style: { width: size, height: size }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base tracking-wide text-foreground", children: "Hamza's" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.25em] text-gold", children: "Barber Shop" })
    ] })
  ] });
}
function SiteLayout({ children }) {
  const [open, setOpen] = reactExports.useState(false);
  const { t } = useI18n();
  const navItems = [
    { to: "/", label: t("nav.start") },
    { to: "/services", label: t("nav.services") },
    { to: "/styles", label: t("nav.styles") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 border-b border-border/60 backdrop-blur-md bg-background/80", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-6 h-16 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-6", children: [
          navItems.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: i.to,
              className: "text-sm tracking-wide text-muted-foreground hover:text-gold transition-colors",
              activeProps: { className: "text-gold" },
              activeOptions: { exact: i.to === "/" },
              children: i.label
            },
            i.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSwitcher, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/booking",
              className: "ml-1 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:opacity-90 transition",
              children: t("nav.book")
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSwitcher, { compact: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen((v) => !v),
              className: "p-2 text-foreground",
              "aria-label": t("nav.menu"),
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 22 })
            }
          )
        ] })
      ] }),
      open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden border-t border-border/60 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4 flex flex-col gap-1", children: [
        navItems.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: i.to,
            onClick: () => setOpen(false),
            className: "py-3 text-base text-foreground border-b border-border/40",
            activeProps: { className: "text-gold" },
            activeOptions: { exact: i.to === "/" },
            children: i.label
          },
          i.to
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/booking",
            onClick: () => setOpen(false),
            className: "mt-3 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground",
            children: t("nav.book")
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border/60 mt-20 bg-card/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-6 py-14 grid gap-10 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { size: 52 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-muted-foreground max-w-md leading-relaxed", children: t("footer.tagline") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.instagram.com/hamza.sbarbershop",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-muted-foreground hover:text-gold transition",
                "aria-label": "Instagram",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.facebook.com/people/Hamzas-barber-shop/100048362336560/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-muted-foreground hover:text-gold transition",
                "aria-label": "Facebook",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 20 })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-[0.2em] text-gold mb-4", children: t("footer.contact") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "mt-0.5 text-gold shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Hochstraße 80, 56070 Koblenz" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16, className: "mt-0.5 text-gold shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+4917682388939", className: "hover:text-gold", dir: "ltr", children: "+49 176 82388939" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "mt-0.5 text-gold shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:Hamza.barber.shop2@gmail.com", className: "hover:text-gold break-all", children: "Hamza.barber.shop2@gmail.com" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-[0.2em] text-gold mb-4", children: t("footer.hours") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("footer.hours.weekdays") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("footer.hours.sat") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: t("footer.hours.sun") })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Hamza's Barber Shop. ",
          t("footer.rights")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/impressum", className: "hover:text-gold transition", children: "Impressum" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/datenschutz", className: "hover:text-gold transition", children: "Datenschutzerklärung" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("footer.madeIn") })
      ] }) })
    ] })
  ] });
}
function SplashScreen({ onComplete }) {
  const [mounted, setMounted] = reactExports.useState(false);
  const [show, setShow] = reactExports.useState(false);
  const onCompleteRef = reactExports.useRef(onComplete);
  onCompleteRef.current = onComplete;
  reactExports.useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    setShow(true);
    const t = setTimeout(() => {
      setShow(false);
    }, 1300);
    return () => clearTimeout(t);
  }, []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { onExitComplete: () => onCompleteRef.current?.(), children: show && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0, scale: 1.15 },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-background",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.5 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 1.2, ease: "easeOut" },
            className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.25),transparent_55%)]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute flex items-center justify-center",
            animate: { rotate: 360 },
            transition: { duration: 8, repeat: Infinity, ease: "linear" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-72 w-72 rounded-full border border-gold/20" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute flex items-center justify-center",
            animate: { rotate: -360 },
            transition: { duration: 12, repeat: Infinity, ease: "linear" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-80 w-80 rounded-full border border-gold/10" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { scale: 0.4, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 1.6, opacity: 0, y: -40 },
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            className: "relative flex flex-col items-center gap-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.img,
                  {
                    src: logo,
                    alt: "Hamza's Barber Shop",
                    className: "h-52 w-52 rounded-full border-[3px] border-gold object-cover shadow-[0_0_80px_rgba(201,168,76,0.5)]",
                    animate: {
                      boxShadow: [
                        "0 0 40px rgba(201,168,76,0.35)",
                        "0 0 100px rgba(201,168,76,0.7)",
                        "0 0 40px rgba(201,168,76,0.35)"
                      ]
                    },
                    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "absolute inset-0 rounded-full border-2 border-gold/40",
                    animate: { scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] },
                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { y: 30, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  exit: { y: -20, opacity: 0 },
                  transition: { delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  className: "flex flex-col items-center text-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl gold-text-gradient md:text-5xl", children: "Hamza's" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs uppercase tracking-[0.5em] text-gold/80", children: "Barber Shop" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { delay: 0.8, duration: 0.6 },
                        className: "mt-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
                        children: "Koblenz · Premium Herrenfriseur"
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    },
    "splash"
  ) });
}
if (typeof window !== "undefined") {
  gsapWithCSS.registerPlugin(ScrollTrigger);
}
function GsapReveals() {
  const location = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    let ctx = null;
    const raf = requestAnimationFrame(() => {
      ctx = gsapWithCSS.context(() => {
        const els = gsapWithCSS.utils.toArray("[data-animate]");
        els.forEach((el) => {
          const variant = el.dataset.animate || "up";
          const delay = parseFloat(el.dataset.animateDelay || "0");
          const stagger = el.dataset.animateStagger ? parseFloat(el.dataset.animateStagger) : 0;
          const from = { opacity: 0 };
          if (variant === "up") from.y = 32;
          if (variant === "down") from.y = -32;
          if (variant === "left") from.x = -32;
          if (variant === "right") from.x = 32;
          if (variant === "scale") from.scale = 0.94;
          const to = {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay,
            stagger,
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              once: true
            }
          };
          if (stagger > 0 && el.children.length > 0) {
            gsapWithCSS.set(el, { opacity: 1 });
            gsapWithCSS.set(el.children, { opacity: 0, y: 32 });
            gsapWithCSS.to(el.children, {
              ...to,
              scrollTrigger: {
                trigger: el,
                start: "top 95%",
                once: true
              }
            });
          } else {
            gsapWithCSS.fromTo(el, from, to);
          }
        });
        ScrollTrigger.refresh();
      });
    });
    const safety = window.setTimeout(() => {
      document.querySelectorAll("[data-animate]").forEach((el) => {
        const cs = window.getComputedStyle(el);
        if (parseFloat(cs.opacity) < 0.05) {
          gsapWithCSS.set(el, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: "transform" });
        }
        el.querySelectorAll(":scope > *").forEach((child) => {
          const ccs = window.getComputedStyle(child);
          if (parseFloat(ccs.opacity) < 0.05) {
            gsapWithCSS.set(child, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: "transform" });
          }
        });
      });
    }, 1500);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(safety);
      ctx?.revert();
    };
  }, [location]);
  return null;
}
function NotFoundComponent() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[60vh] items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-7xl gold-text-gradient", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: t("err.404") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t("err.404.sub") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground", children: t("err.home") }) })
  ] }) }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  const { t } = useI18n();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[60vh] items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: t("err.load") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t("err.retry") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-full bg-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground",
          children: t("err.tryAgain")
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "inline-flex items-center justify-center rounded-full border border-border px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em]", children: t("err.homeShort") })
    ] })
  ] }) }) });
}
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Hamza's Barber Shop",
  "@id": "https://hamzas-barber.de",
  url: "https://hamzas-barber.de",
  telephone: "+49 176 82388939",
  email: "Hamza.barber.shop2@gmail.com",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hochstraße 80",
    addressLocality: "Koblenz",
    postalCode: "56070",
    addressCountry: "DE"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "200"
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:30", closes: "18:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:30", closes: "17:00" }
  ]
};
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hamza's Barber Shop – Premium Herrenfriseur in Koblenz" },
      { name: "description", content: "Premium Herrenhaarschnitte, klassische Rasuren und Bartpflege in Koblenz-Neuendorf. Termin jetzt online buchen." },
      { name: "theme-color", content: "#1A1410" },
      { property: "og:title", content: "Hamza's Barber Shop – Premium Herrenfriseur in Koblenz" },
      { property: "og:description", content: "Premium Herrenhaarschnitte, klassische Rasuren und Bartpflege in Koblenz." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss }
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "de", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  const [splashDone, setSplashDone] = reactExports.useState(false);
  const handleSplashComplete = reactExports.useCallback(() => setSplashDone(true), []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(LanguageProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SplashScreen, { onComplete: handleSplashComplete }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GsapReveals, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.96, filter: "blur(4px)" },
        animate: splashDone ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.96, filter: "blur(4px)" },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
      }
    )
  ] }) });
}
const $$splitComponentImporter$7 = () => import("./styles-DJViuj1V.mjs");
const Route$7 = createFileRoute("/styles")({
  head: () => ({
    meta: [{
      title: "Signature Styles – Hamza's Barber Shop"
    }, {
      name: "description",
      content: "Inspiration aus unserer Galerie: Skin Fades, klassische Schnitte, Bart und Hot Towel Rasuren."
    }, {
      property: "og:title",
      content: "Signature Styles – Hamza's Barber Shop"
    }, {
      property: "og:description",
      content: "Inspiration aus unserer Galerie."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./services-PXdzb_1I.mjs");
const Route$6 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Leistungen & Preise – Hamza's Barber Shop"
    }, {
      name: "description",
      content: "Unsere Preisliste: Haarschnitt, Waschen/Schneiden, Nassrasur, Bartpflege und Extras wie Augenbrauen, Gesichtsreinigung und Wachsbehandlungen."
    }, {
      property: "og:title",
      content: "Leistungen & Preise – Hamza's Barber Shop"
    }, {
      property: "og:description",
      content: "Unsere Preisliste im Überblick."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./impressum-CF81jwfA.mjs");
const Route$5 = createFileRoute("/impressum")({
  head: () => ({
    meta: [{
      title: "Impressum – Hamza's Barber Shop"
    }, {
      name: "description",
      content: "Impressum und rechtliche Angaben für Hamza's Barber Shop in Koblenz."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./datenschutz-zLPJmkO3.mjs");
const Route$4 = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [{
      title: "Datenschutzerklärung – Hamza's Barber Shop"
    }, {
      name: "description",
      content: "Datenschutzerklärung und Informationen zum Datenschutz gemäß DSGVO."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-BFs3DXh2.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Kontakt & Anfahrt – Hamza's Barber Shop Koblenz"
    }, {
      name: "description",
      content: "Besuchen Sie uns in Koblenz-Neuendorf. Adresse, Öffnungszeiten und Telefonnummer."
    }, {
      property: "og:title",
      content: "Kontakt & Anfahrt – Hamza's Barber Shop"
    }, {
      property: "og:description",
      content: "Adresse, Öffnungszeiten und Telefonnummer in Koblenz."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./booking-CvYpUBEr.mjs");
objectType({
  service: stringType().min(1, "required"),
  appointment_date: stringType().regex(/^\d{4}-\d{2}-\d{2}$/, "required"),
  appointment_time: stringType().regex(/^\d{2}:\d{2}$/, "required"),
  customer_name: stringType().min(2, "required"),
  email: stringType().email("required"),
  phone: stringType().min(5, "required"),
  notes: stringType().max(500).optional()
});
const searchSchema = objectType({
  service: stringType().optional()
});
const Route$2 = createFileRoute("/booking")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [{
      title: "Termin buchen – Hamza's Barber Shop"
    }, {
      name: "description",
      content: "Buchen Sie Ihren Termin online – in unter einer Minute."
    }, {
      property: "og:title",
      content: "Termin buchen – Hamza's Barber Shop"
    }, {
      property: "og:description",
      content: "Buchen Sie Ihren Termin online."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DkQqs2Tn.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "Über uns – Hamza's Barber Shop"
    }, {
      name: "description",
      content: "Die Geschichte hinter Hamza's Barber Shop – Handwerk, Präzision und Leidenschaft seit 2015."
    }, {
      property: "og:title",
      content: "Über uns – Hamza's Barber Shop"
    }, {
      property: "og:description",
      content: "Handwerk, Präzision und Leidenschaft seit 2015."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const heroBg = "/assets/google-maps-image-D_2a9aIw.jpg";
const $$splitComponentImporter = () => import("./index-DTSJbJPq.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Hamza's Barber Shop – Premium Herrenfriseur in Koblenz"
    }, {
      name: "description",
      content: "Präzise Schnitte, klassische Rasuren und Bartpflege in Koblenz-Neuendorf. 4,8★ bei 200+ Google Bewertungen. Online buchen."
    }, {
      property: "og:title",
      content: "Hamza's Barber Shop – Premium Herrenfriseur in Koblenz"
    }, {
      property: "og:description",
      content: "Präzise Schnitte, klassische Rasuren und Bartpflege in Koblenz."
    }, {
      property: "og:image",
      content: heroBg
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const StylesRoute = Route$7.update({
  id: "/styles",
  path: "/styles",
  getParentRoute: () => Route$8
});
const ServicesRoute = Route$6.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$8
});
const ImpressumRoute = Route$5.update({
  id: "/impressum",
  path: "/impressum",
  getParentRoute: () => Route$8
});
const DatenschutzRoute = Route$4.update({
  id: "/datenschutz",
  path: "/datenschutz",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const BookingRoute = Route$2.update({
  id: "/booking",
  path: "/booking",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BookingRoute,
  ContactRoute,
  DatenschutzRoute,
  ImpressumRoute,
  ServicesRoute,
  StylesRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  heroBg as h,
  router as r,
  useI18n as u
};
