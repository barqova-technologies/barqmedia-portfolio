"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { NICHES, COMPARISON } from "@/lib/data/niches";
import { EASE_SMOOTH, VIEWPORT_ONCE } from "@/lib/utils";

/** "Who We're Built For" — niche pills + honest bad-vs-BARQ comparison (no fake stats). */
export function NicheTargets() {
  const reduce = useReducedMotion();

  return (
    <section
      id="built-for"
      aria-label="Who we are built for"
      className="bg-bg-secondary py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="07"
          kicker="Built For"
          heading="We're Built For Brands Like Yours."
          className="mb-14 max-w-2xl"
        />

        {/* Part A — niche pills */}
        <p className="mb-6 font-body text-label uppercase text-text-secondary">
          Industries we understand deeply:
        </p>
        <ul className="flex flex-wrap gap-3">
          {NICHES.map((niche, i) => (
            <motion.li
              key={niche.label}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.4, ease: EASE_SMOOTH, delay: i * 0.04 }}
              className="flex items-center gap-2.5 rounded-btn border border-border bg-bg-card px-4 py-2.5 transition-colors duration-300 hover:border-border-accent"
            >
              <Icon name={niche.icon} size={18} className="text-accent" aria-hidden />
              <span className="font-body text-[14px] text-text-primary">
                {niche.label}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* Part B — comparison */}
        <Reveal className="mt-20" delay={0.1}>
          <div className="grid grid-cols-1 gap-x-10 gap-y-1 md:grid-cols-[1fr_auto_1fr]">
            <span className="mb-4 font-body text-label uppercase text-text-muted">
              What most brands get
            </span>
            <span aria-hidden className="hidden md:block" />
            <span className="mb-4 font-body text-label uppercase text-accent">
              What Barq delivers
            </span>

            {COMPARISON.map((row) => (
              <div key={row.good} className="contents">
                <p className="py-3 font-body text-[17px] text-text-muted line-through decoration-text-muted">
                  {row.bad}
                </p>
                <span
                  aria-hidden
                  className="hidden items-center font-display text-accent md:flex"
                >
                  →
                </span>
                <p className="border-b border-border py-3 font-body text-[17px] font-medium text-text-primary md:border-b-0">
                  {row.good}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
