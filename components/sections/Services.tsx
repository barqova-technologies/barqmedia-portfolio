"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/data/services";
import { EASE_SMOOTH, VIEWPORT_ONCE, cn } from "@/lib/utils";

/** "How We Engage" — three engagement models, glassmorphic cards. */
export function Services() {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      aria-label="How we engage"
      className="bg-bg-primary py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="04"
          kicker="Services"
          heading="How We Engage."
          className="mb-14 max-w-2xl"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.number}
              initial={reduce ? undefined : { opacity: 0, y: 30 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col rounded-card border p-8 transition-shadow duration-300",
                svc.featured
                  ? "border-border-accent shadow-glow-sm lg:-translate-y-4"
                  : "border-border"
              )}
              style={{
                background: "rgba(var(--bg-card-rgb), 0.6)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {svc.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wide text-bg-primary">
                  Most Popular
                </span>
              )}

              <span className="font-display text-[64px] font-bold leading-none text-text-muted">
                {svc.number}
              </span>

              <h3 className="mt-4 font-display text-h3 text-text-primary">
                {svc.name}
              </h3>
              <p className="mt-2 font-body text-[15px] leading-relaxed text-text-secondary">
                {svc.pitch}
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {svc.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-body text-[14px] text-text-secondary"
                  >
                    <Check
                      size={16}
                      className="mt-1 shrink-0 text-accent"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-body text-[13px] italic text-text-secondary">
                Ideal for: {svc.idealFor}
              </p>

              <a
                href="#cta"
                className="group mt-8 inline-flex items-center gap-1 font-body text-[14px] font-semibold text-text-primary transition-colors duration-200 hover:text-accent"
              >
                Let&apos;s Talk
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
