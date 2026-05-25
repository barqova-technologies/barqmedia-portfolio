"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE_SMOOTH, VIEWPORT_ONCE } from "@/lib/utils";

interface SectionHeadingProps {
  /** e.g. "02" */
  index: string;
  /** e.g. "Thinking" — rendered inside the bracketed label. */
  kicker: string;
  /** The real <h2> text. */
  heading: string;
  className?: string;
  align?: "left" | "center";
}

/** Numbered section label `[ 0X — Kicker ]` above a real <h2>. */
export function SectionHeading({
  index,
  kicker,
  heading,
  className,
  align = "left",
}: SectionHeadingProps) {
  const reduce = useReducedMotion();
  const reveal = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: VIEWPORT_ONCE,
        transition: { duration: 0.7, ease: EASE_SMOOTH },
      };

  return (
    <motion.div
      {...reveal}
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="font-body text-label uppercase text-accent">
        [ {index} · {kicker} ]
      </span>
      <h2 className="font-display text-h2 text-text-primary text-balance">
        {heading}
      </h2>
    </motion.div>
  );
}
