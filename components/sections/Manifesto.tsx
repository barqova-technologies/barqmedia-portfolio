"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MANIFESTO, MANIFESTO_INTERLUDE } from "@/lib/data/manifesto";

/** "Our Thinking" — authority through point of view, not portfolio. */
export function Manifesto() {
  return (
    <section
      id="manifesto"
      aria-label="Our thinking"
      className="bg-bg-primary py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="02"
          kicker="Thinking"
          heading="We Think Differently About Attention."
          className="mb-20 max-w-3xl"
        />

        <div className="flex flex-col gap-20 md:gap-28">
          {MANIFESTO.map((stmt, i) => (
            <div key={stmt.label}>
              <Reveal>
                <p className="mb-5 font-body text-label uppercase text-accent">
                  {stmt.label}
                </p>
                <p className="font-display text-[clamp(22px,3vw,38px)] font-bold leading-[1.15] tracking-[-0.03em] text-text-primary text-balance">
                  {stmt.lines.map((line, li) => (
                    <span key={li} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </Reveal>

              {/* Accent bar between statements 2 and 3 */}
              {i === 1 && (
                <Reveal className="mt-20 md:mt-28">
                  <div className="rounded-card border border-border-accent bg-bg-secondary px-6 py-10 text-center">
                    <p className="font-body text-[24px] italic text-text-secondary">
                      &ldquo;{MANIFESTO_INTERLUDE}&rdquo;
                    </p>
                  </div>
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
