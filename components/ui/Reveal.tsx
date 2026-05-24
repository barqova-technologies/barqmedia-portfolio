"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE_SMOOTH, VIEWPORT_ONCE } from "@/lib/utils";

/** Default section/element entrance: fade + rise, once, on scroll into view. */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.7, ease: EASE_SMOOTH, delay }}
    >
      {children}
    </MotionTag>
  );
}
