import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Mounts global GSAP scroll-triggered reveals.
 * Any element with [data-animate] is faded/translated in on view.
 * Variants: data-animate="fade" | "up" | "left" | "right" | "scale"
 * Optional: data-animate-delay="0.2"
 */
export function GsapReveals() {
  const location = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    let ctx: gsap.Context | null = null;
    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const els = gsap.utils.toArray<HTMLElement>("[data-animate]");
        els.forEach((el) => {
          const variant = el.dataset.animate || "up";
          const delay = parseFloat(el.dataset.animateDelay || "0");
          const stagger = el.dataset.animateStagger
            ? parseFloat(el.dataset.animateStagger)
            : 0;

          const from: gsap.TweenVars = { opacity: 0 };
          if (variant === "up") from.y = 32;
          if (variant === "down") from.y = -32;
          if (variant === "left") from.x = -32;
          if (variant === "right") from.x = 32;
          if (variant === "scale") from.scale = 0.94;

          const to: gsap.TweenVars = {
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
              once: true,
            },
          };

          if (stagger > 0 && el.children.length > 0) {
            gsap.set(el, { opacity: 1 });
            gsap.set(el.children, { opacity: 0, y: 32 });
            gsap.to(el.children, {
              ...to,
              scrollTrigger: {
                trigger: el,
                start: "top 95%",
                once: true,
              },
            });
          } else {
            gsap.fromTo(el, from, to);
          }
        });

        ScrollTrigger.refresh();
      });
    });

    // Safety net: force-reveal any element still hidden after animations would have completed
    const safety = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>("[data-animate]").forEach((el) => {
        const cs = window.getComputedStyle(el);
        if (parseFloat(cs.opacity) < 0.05) {
          gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: "transform" });
        }
        el.querySelectorAll<HTMLElement>(":scope > *").forEach((child) => {
          const ccs = window.getComputedStyle(child);
          if (parseFloat(ccs.opacity) < 0.05) {
            gsap.set(child, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: "transform" });
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
