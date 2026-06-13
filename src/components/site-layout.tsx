import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/language-switcher";

function Logo({ size = 44 }: { size?: number }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src={logo}
        alt="Hamza's Barber Shop Logo"
        width={size}
        height={size}
        className="rounded-full border-2 border-gold object-cover shadow-[0_0_0_3px_rgba(201,168,76,0.15)] transition-transform group-hover:scale-105"
        style={{ width: size, height: size }}
      />
      <div className="leading-tight">
        <div className="font-display text-base tracking-wide text-foreground">Hamza's</div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Barber Shop</div>
      </div>
    </Link>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const navItems = [
    { to: "/" as const, label: t("nav.start") },
    { to: "/services" as const, label: t("nav.services") },
    { to: "/styles" as const, label: t("nav.styles") },
    { to: "/about" as const, label: t("nav.about") },
    { to: "/contact" as const, label: t("nav.contact") },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur-md bg-background/80">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                className="text-sm tracking-wide text-muted-foreground hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: i.to === "/" }}
              >
                {i.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              to="/booking"
              className="ml-1 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:opacity-90 transition"
            >
              {t("nav.book")}
            </Link>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher compact />
            <button
              onClick={() => setOpen((v) => !v)}
              className="p-2 text-foreground"
              aria-label={t("nav.menu")}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-border/60 bg-background">
            <div className="px-5 py-4 flex flex-col gap-1">
              {navItems.map((i) => (
                <Link
                  key={i.to}
                  to={i.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base text-foreground border-b border-border/40"
                  activeProps={{ className: "text-gold" }}
                  activeOptions={{ exact: i.to === "/" }}
                >
                  {i.label}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground"
              >
                {t("nav.book")}
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/60 mt-20 bg-card/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo size={52} />
            <p className="mt-5 text-sm text-muted-foreground max-w-md leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href="https://www.instagram.com/hamza.sbarbershop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/people/Hamzas-barber-shop/100048362336560/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
                <span>Hochstraße 80, 56070 Koblenz</span>
              </li>
              <li className="flex gap-2">
                <Phone size={16} className="mt-0.5 text-gold shrink-0" />
                <a href="tel:+4917682388939" className="hover:text-gold" dir="ltr">+49 176 82388939</a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="mt-0.5 text-gold shrink-0" />
                <a href="mailto:Hamza.barber.shop2@gmail.com" className="hover:text-gold break-all">Hamza.barber.shop2@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">{t("footer.hours")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{t("footer.hours.weekdays")}</li>
              <li>{t("footer.hours.sat")}</li>
              <li>{t("footer.hours.sun")}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Hamza's Barber Shop. {t("footer.rights")}</span>
            <span>{t("footer.madeIn")}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
