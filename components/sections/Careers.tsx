"use client";

import { Check, MapPin, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BRAND, CAREERS } from "@/lib/data/site";

/** /careers body — intro, perks, and the live open roles. */
export function Careers() {
  return (
    <section aria-label="Careers" className="bg-bg-primary">
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="01"
          kicker="Careers"
          heading="Build a portfolio that actually moves numbers."
        />

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl font-body text-[17px] leading-relaxed text-text-secondary md:text-[18px]">
            {CAREERS.intro}
          </p>
        </Reveal>

        {/* Perks */}
        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {CAREERS.perks.map((perk, i) => (
            <Reveal as="li" key={perk} delay={0.05 * i}>
              <span className="flex items-start gap-3 rounded-card border border-border bg-bg-card px-4 py-3 font-body text-[14px] text-text-primary">
                <Check size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                {perk}
              </span>
            </Reveal>
          ))}
        </ul>

        {/* Open roles */}
        <h3 className="mt-16 font-display text-h3 text-text-primary">Open roles</h3>
        <div className="mt-6 flex flex-col gap-5">
          {CAREERS.openings.map((role, i) => (
            <Reveal key={role.title} delay={0.05 * i}>
              <article className="rounded-card border border-border-accent bg-bg-card p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h4 className="font-display text-[22px] font-bold text-text-primary">
                      {role.title}
                    </h4>
                    <div className="mt-2 flex flex-wrap items-center gap-4 font-body text-[13px] text-text-secondary">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} className="text-accent" aria-hidden />
                        {role.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Users size={14} className="text-accent" aria-hidden />
                        {role.openings} {Number(role.openings) === 1 ? "opening" : "openings"}
                      </span>
                    </div>
                  </div>
                  <MagneticButton
                    href={`mailto:${BRAND.email}?subject=${encodeURIComponent(
                      `Application: ${role.title}`
                    )}`}
                    variant="filled"
                    size="md"
                  >
                    Apply
                  </MagneticButton>
                </div>

                <p className="mt-4 max-w-2xl font-body text-[15px] leading-relaxed text-text-secondary">
                  {role.blurb}
                </p>

                <ul className="mt-5 flex flex-col gap-2">
                  {role.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-3 font-body text-[14px] text-text-secondary"
                    >
                      <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                      {r}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Open application */}
        <Reveal delay={0.1}>
          <p className="mt-12 font-body text-[14px] text-text-muted">
            Don&apos;t see your role?{" "}
            <a
              href={`mailto:${BRAND.email}?subject=${encodeURIComponent(
                "Open application"
              )}`}
              className="font-semibold text-accent transition-colors duration-200 hover:underline"
            >
              Pitch us anyway
            </a>
            . We read everything.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
