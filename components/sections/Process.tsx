"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/data/process";
import { EASE_SMOOTH, VIEWPORT_ONCE, cn } from "@/lib/utils";

/** "From Brief to Scroll-Stop" — cinematic timeline; the spine fills on scroll. */
export function Process() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 80%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      aria-label="How we work"
      className="bg-bg-secondary py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          index="05"
          kicker="Process"
          heading="From Brief to Scroll-Stop."
          align="center"
          className="mb-20 items-center"
        />

        <div ref={ref} className="relative">
          {/* Central spine */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-border md:left-1/2 md:-translate-x-1/2">
            <motion.div
              className="absolute left-0 top-0 w-full origin-top bg-accent"
              style={{ height: "100%", scaleY: reduce ? 1 : scaleY }}
            />
          </div>

          <ol className="flex flex-col gap-12 md:gap-16">
            {PROCESS_STEPS.map((step, i) => {
              const right = i % 2 === 1;
              return (
                <li key={step.step} className="relative">
                  <div
                    className={cn(
                      "grid items-center gap-x-8 md:grid-cols-2",
                      right && "md:[direction:rtl]"
                    )}
                  >
                    {/* Card */}
                    <motion.div
                      initial={reduce ? undefined : { opacity: 0, y: 30 }}
                      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                      viewport={VIEWPORT_ONCE}
                      transition={{ duration: 0.6, ease: EASE_SMOOTH }}
                      className={cn(
                        "ml-12 rounded-card border border-border bg-bg-card p-6 [direction:ltr] md:ml-0",
                        right ? "md:mr-12 md:text-right" : "md:ml-12"
                      )}
                    >
                      <div className="mb-2 flex items-center gap-3 md:justify-start">
                        <span className="font-body text-label uppercase text-accent">
                          {step.time}
                        </span>
                      </div>
                      <h3 className="font-display text-h3 text-text-primary">
                        {step.title}
                      </h3>
                      <p className="mt-2 font-body text-[15px] leading-relaxed text-text-secondary">
                        {step.copy}
                      </p>
                    </motion.div>
                    <div aria-hidden className="hidden md:block" />
                  </div>

                  {/* Node */}
                  <motion.span
                    initial={reduce ? undefined : { scale: 0.6, opacity: 0.4 }}
                    whileInView={
                      reduce ? undefined : { scale: 1, opacity: 1 }
                    }
                    viewport={{ once: true, margin: "-45% 0px -45% 0px" }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-5 top-6 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-bg-primary font-display text-[14px] font-bold text-accent md:left-1/2"
                  >
                    {step.step}
                  </motion.span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
