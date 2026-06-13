import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteLayout } from "@/components/site-layout";
import { SplashScreen } from "@/components/splash-screen";
import { GsapReveals } from "@/components/gsap-reveals";
import { LanguageProvider, useI18n } from "@/lib/i18n";

function NotFoundComponent() {
  const { t } = useI18n();
  return (
    <SiteLayout>
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="font-display text-7xl gold-text-gradient">404</h1>
          <h2 className="mt-4 text-xl font-semibold">{t("err.404")}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{t("err.404.sub")}</p>
          <div className="mt-6">
            <Link to="/" className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
              {t("err.home")}
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { t } = useI18n();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <SiteLayout>
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold">{t("err.load")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t("err.retry")}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => { router.invalidate(); reset(); }}
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground"
            >
              {t("err.tryAgain")}
            </button>
            <a href="/" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em]">
              {t("err.homeShort")}
            </a>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
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
    addressCountry: "DE",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "200",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:30", closes: "18:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:30", closes: "17:00" },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
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
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashComplete = useCallback(() => setSplashDone(true), []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <SplashScreen onComplete={handleSplashComplete} />
        <GsapReveals />
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
          animate={
            splashDone
              ? { opacity: 1, scale: 1, filter: "blur(0px)" }
              : { opacity: 0, scale: 0.96, filter: "blur(4px)" }
          }
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SiteLayout>
            <Outlet />
          </SiteLayout>
        </motion.div>
      </LanguageProvider>
    </QueryClientProvider>
  );
}
