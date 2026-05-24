"use client";

import { AnimatedText } from "@/components/ui/AnimatedText";
import { Typewriter } from "@/components/ui/Typewriter";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";

/** Closing call-to-action. Locked dark (NOIR) so it stays cinematic on any theme. */
export function CTA() {
  return (
    <section
      id="cta"
      data-theme="noir"
      aria-label="Start a project"
      className="relative overflow-hidden bg-bg-primary py-28 md:py-40"
    >
      {/* Soft accent glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "var(--accent-glow)", opacity: 0.2 }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        <h2 className="font-display text-[clamp(28px,4.5vw,58px)] font-bold leading-[1] tracking-[-0.04em] text-text-primary">
          <AnimatedText
            text={"Your brand deserves\nmore than average."}
            strikeWords={["average"]}
          />
        </h2>

        {/* Typed replacement for the struck-out word */}
        <div className="mt-3 font-display text-[clamp(28px,4.5vw,58px)] font-bold leading-[1] tracking-[-0.04em] text-accent">
          <Typewriter text="cinematic." />
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl font-body text-[18px] leading-relaxed text-text-secondary">
            Let&apos;s build something that stops the scroll.
            <br />
            We&apos;re focused. We&apos;re obsessive. And we&apos;re taking this seriously.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <MagneticButton href="/book" variant="filled" size="lg">
            Book a Free Strategy Call
          </MagneticButton>
          <MagneticButton href="#services" variant="ghost" size="lg">
            See What We Offer
          </MagneticButton>
        </Reveal>

        <p className="mt-8 font-body text-[12px] text-text-muted">
          No lock-in · Free first call · Response within 24 hours
        </p>
      </div>
    </section>
  );
}
