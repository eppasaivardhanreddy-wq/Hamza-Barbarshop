import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpeg";

interface SplashScreenProps {
  onComplete?: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    setShow(true);
    const t = setTimeout(() => {
      setShow(false);
    }, 800);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence onExitComplete={() => onCompleteRef.current?.()}>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* Animated radial glow behind logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.25),transparent_55%)]"
          />

          {/* Spinning golden ring */}
          <motion.div
            className="absolute flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="h-72 w-72 rounded-full border border-gold/20" />
          </motion.div>
          <motion.div
            className="absolute flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <div className="h-80 w-80 rounded-full border border-gold/10" />
          </motion.div>

          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.6, opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center gap-8"
          >
            {/* Big Logo */}
            <div className="relative">
              <motion.img
                src={logo}
                alt="Hamza's Barber Shop"
                className="h-52 w-52 rounded-full border-[3px] border-gold object-cover shadow-[0_0_80px_rgba(201,168,76,0.5)]"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(201,168,76,0.35)",
                    "0 0 100px rgba(201,168,76,0.7)",
                    "0 0 40px rgba(201,168,76,0.35)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Pulsing ring around logo */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-gold/40"
                animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.2, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {/* Brand name + tagline */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <div className="font-display text-4xl gold-text-gradient md:text-5xl">
                Hamza's
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.5em] text-gold/80">
                Barber Shop
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
              >
                Koblenz · Premium Herrenfriseur
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
