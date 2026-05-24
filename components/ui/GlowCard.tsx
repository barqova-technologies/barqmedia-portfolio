"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  /** Lift + glow on hover (capabilities, niches). */
  interactive?: boolean;
  /** Sets the custom-cursor label ("explore" → ring shows "Explore"). */
  cursor?: string;
}

/**
 * Base card: 16px radius, token border, accent glow on hover.
 * Used as the shell for capability/service/niche cards.
 */
export function GlowCard({
  children,
  className,
  interactive = false,
  cursor,
}: GlowCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      data-cursor={cursor}
      whileHover={
        interactive && !reduce ? { scale: 1.02 } : undefined
      }
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-card border border-border bg-bg-card",
        "transition-[border-color,box-shadow] duration-[400ms] ease-smooth",
        interactive && "hover:border-border-accent hover:shadow-glow",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
