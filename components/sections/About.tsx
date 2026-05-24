"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Icon } from "@/components/ui/Icon";
import { ABOUT_PARAGRAPHS, STUDIO_CARD } from "@/lib/data/about";
import { PLATFORMS } from "@/lib/data/site";

const ABOUT_PLATFORMS = PLATFORMS.slice(0, 3);

/** "The Studio" — confident, point-of-view-led bio. */
export function About() {
  return (
    <section
      id="about"
      aria-label="The studio"
      className="bg-bg-primary py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="06"
          kicker="Studio"
          heading="Focused Studio. Clear Vision."
          className="mb-14 max-w-2xl"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          {/* Left copy */}
          <Reveal className="flex flex-col gap-6">
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <p
                key={i}
                className={
                  i === ABOUT_PARAGRAPHS.length - 1
                    ? "font-display text-h3 text-accent"
                    : "font-body text-[17px] leading-relaxed text-text-secondary"
                }
              >
                {p}
              </p>
            ))}
          </Reveal>

          {/* Right studio card */}
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-5 rounded-card border border-border-accent bg-bg-card p-8 shadow-glow-sm">
              <div className="flex flex-col gap-1">
                <span className="font-display text-h3 text-text-primary">
                  {STUDIO_CARD.established}
                </span>
                <span className="font-body text-[15px] text-text-secondary">
                  {STUDIO_CARD.location}
                </span>
              </div>

              <p className="font-body text-[14px] text-text-secondary">
                {STUDIO_CARD.availability}
              </p>

              <ul className="flex flex-wrap gap-3">
                {ABOUT_PLATFORMS.map((p) => (
                  <li
                    key={p.name}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 font-body text-[12px] text-text-secondary"
                  >
                    <Icon name={p.icon} size={14} className="text-accent" aria-hidden />
                    {p.name}
                  </li>
                ))}
              </ul>

              <p className="font-body text-[15px] font-semibold text-accent">
                {STUDIO_CARD.highlight}
              </p>

              <MagneticButton href="/book" variant="filled" size="md" className="w-full">
                {STUDIO_CARD.cta} →
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
