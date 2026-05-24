"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { MagneticButton } from "./MagneticButton";
import { NAV_LINKS } from "@/lib/data/site";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // While unscrolled the navbar overlays the always-black Hero. Lock it to the
  // NOIR palette there so links/CTA/logo stay readable on every theme; after
  // scroll it inherits the active theme's tokens.
  const forceNoir = !scrolled;

  return (
    <nav
      aria-label="Primary"
      data-theme={forceNoir ? "noir" : undefined}
      className="fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300"
      style={{
        backgroundColor: scrolled
          ? "color-mix(in srgb, var(--bg-primary) 95%, transparent)"
          : "color-mix(in srgb, var(--bg-primary) 80%, transparent)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: scrolled
          ? "var(--border-accent)"
          : "var(--border)",
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        {/* Left: logo — forced to the white asset while over the black Hero
            (unscrolled) so it never camouflages in the light Chrome theme. */}
        <a
          href="#top"
          aria-label="BARQ Media home"
          className="flex items-center transition-transform duration-300 hover:scale-[1.04]"
        >
          <Logo className="h-12 md:h-14" priority bg={forceNoir ? "dark" : undefined} />
        </a>

        {/* Center: links (desktop) */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-[14px] text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: theme switcher + CTA (desktop) */}
        <div className="hidden items-center gap-5 lg:flex">
          <ThemeSwitcher />
          <MagneticButton href="/book" variant="filled" size="md">
            Start a Project
          </MagneticButton>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeSwitcher />
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="text-text-primary"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-bg-primary px-6 py-6"
          >
            <div className="flex items-center justify-between">
              <Logo className="h-12" bg={forceNoir ? "dark" : undefined} />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="text-text-primary"
              >
                <X size={28} />
              </button>
            </div>

            <ul className="flex flex-1 flex-col justify-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl font-bold tracking-tight text-text-primary"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <MagneticButton
              href="/book"
              variant="filled"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Start a Project
            </MagneticButton>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
