"use client";

import { ArrowUpRight, Infinity as InfinityIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ECOSYSTEM } from "@/lib/data/site";

/** /ecosystem body — the family of brands BARQ Media belongs to. */
export function Ecosystem() {
  return (
    <section aria-label="Ecosystem" className="bg-bg-primary">
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          index="01"
          kicker="Ecosystem"
          heading={`A unit of ${ECOSYSTEM.parent}.`}
        />

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl font-body text-[17px] leading-relaxed text-text-secondary md:text-[18px]">
            {ECOSYSTEM.intro}
          </p>
        </Reveal>

        {/* Brand cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ECOSYSTEM.brands.map((brand, i) => {
            const CardTag = brand.current ? "div" : "a";
            const linkProps = brand.current
              ? {}
              : {
                  href: brand.url,
                  target: "_blank" as const,
                  rel: "noopener noreferrer",
                };
            return (
              <Reveal key={brand.domain} delay={0.05 * i}>
                <CardTag
                  {...linkProps}
                  className="group flex h-full flex-col rounded-card border border-border-accent bg-bg-card p-6 transition-colors duration-200 hover:border-accent md:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-[20px] font-bold text-text-primary">
                      {brand.name}
                    </h3>
                    {brand.current ? (
                      <span className="rounded-full border border-border-accent bg-accent-dim px-2.5 py-1 font-body text-[11px] uppercase tracking-wide text-accent">
                        You are here
                      </span>
                    ) : (
                      <ArrowUpRight
                        size={20}
                        className="shrink-0 text-text-muted transition-colors duration-200 group-hover:text-accent"
                        aria-hidden
                      />
                    )}
                  </div>
                  <p className="mt-3 flex-1 font-body text-[14px] leading-relaxed text-text-secondary">
                    {brand.blurb}
                  </p>
                  <span className="mt-4 font-body text-[13px] text-accent">
                    {brand.domain}
                  </span>
                </CardTag>
              </Reveal>
            );
          })}
        </div>

        {/* Separate-registration note */}
        <Reveal delay={0.1}>
          <p className="mt-12 flex items-start gap-3 rounded-card border border-border bg-bg-secondary px-5 py-4 font-body text-[14px] leading-relaxed text-text-secondary">
            <InfinityIcon size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden />
            {ECOSYSTEM.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
