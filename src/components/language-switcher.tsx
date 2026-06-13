import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { LANGS, useI18n, type Lang } from "@/lib/i18n";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5 text-xs text-muted-foreground hover:text-gold hover:border-gold/50 transition"
        aria-label="Change language"
      >
        <Globe size={14} />
        <span className="font-medium uppercase tracking-wider">{current.code}</span>
      </button>
      {open && (
        <div className={`absolute ${compact ? "right-0" : "end-0"} mt-2 min-w-[150px] rounded-lg border border-border/60 bg-card/95 backdrop-blur shadow-lg overflow-hidden z-50`}>
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code as Lang); setOpen(false); }}
              className={`w-full flex items-center justify-between gap-2 px-3 py-2 text-sm hover:bg-gold/10 transition ${lang === l.code ? "text-gold" : "text-foreground"}`}
            >
              <span className="flex items-center gap-2">
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </span>
              {lang === l.code && <Check size={14} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
