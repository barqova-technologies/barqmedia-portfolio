"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { CardVisual } from "@/components/ui/CardVisual";
import { ContentCalendar } from "@/components/ui/ContentCalendar";
import { Reveal } from "@/components/ui/Reveal";
import { CAPABILITIES } from "@/lib/data/capabilities";
import { EASE_SMOOTH, VIEWPORT_ONCE, cn } from "@/lib/utils";

/** "What We Bring" — asymmetric bento of craft vocabulary, not a price list. */
export function Capabilities() {
  const reduce = useReducedMotion();

  return (
    <section
      id="capabilities"
      aria-label="What we do"
      className="bg-bg-secondary py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="03"
          kicker="Capabilities"
          heading="What We Bring."
          className="mb-14 max-w-2xl"
        />

        <div className="grid auto-rows-[290px] grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.id}
              className={cn("min-h-[290px]", cap.span)}
              initial={reduce ? undefined : { opacity: 0, y: 30 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: i * 0.1 }}
            >
              <GlowCard interactive cursor="explore" className="flex h-full flex-col">
                {/* ── Preview zone: contained mockup, text never sits on it ── */}
                <div
                  className="relative min-h-0 flex-1 overflow-hidden border-b border-border"
                  style={{
                    background:
                      "radial-gradient(120% 100% at 50% 0%, color-mix(in srgb, var(--accent) 8%, transparent), var(--bg-secondary))",
                  }}
                >
                  <CardVisual visual={cap.visual} />

                  {/* hover sheen sweep (over preview only) */}
                  <div aria-hidden className="card-sheen pointer-events-none absolute inset-0 z-[6]" />

                  {/* hover arrow top-right */}
                  <span
                    aria-hidden
                    className="absolute right-4 top-4 z-10 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full border border-border-accent text-accent opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ background: "color-mix(in srgb, var(--bg-card) 60%, transparent)" }}
                  >
                    <ArrowUpRight size={15} />
                  </span>
                </div>

                {/* ── Text zone: solid, fully legible ── */}
                <div className="shrink-0 bg-bg-card p-5">
                  <h3 className="font-display text-[15px] font-semibold leading-tight tracking-[-0.02em] text-text-primary transition-colors duration-300 group-hover:text-accent">
                    {cap.title}
                  </h3>
                  <p className="mt-1.5 font-body text-[13px] leading-[1.5] text-text-secondary">
                    {cap.copy}
                  </p>

                  {/* keyword pills — outside the mockup */}
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {cap.tags.map((tag) => (
                      <li
                        key={tag}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-secondary px-2.5 py-1 font-body text-[11px] font-medium text-text-secondary transition-colors duration-300 group-hover:border-border-accent"
                      >
                        <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-8" delay={0.1}>
          <ContentCalendar />
        </Reveal>
      </div>
    </section>
  );
}
