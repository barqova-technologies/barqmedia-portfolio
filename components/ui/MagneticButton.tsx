"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "filled" | "ghost";
type Size = "md" | "lg";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
}

const VARIANTS: Record<Variant, string> = {
  filled:
    "bg-accent text-bg-primary border border-transparent hover:shadow-glow",
  ghost:
    "bg-transparent text-text-primary border border-border-accent hover:bg-accent-dim hover:shadow-glow-sm",
};

const SIZES: Record<Size, string> = {
  md: "px-6 py-3 text-[14px]",
  lg: "px-8 py-4 text-[16px]",
};

/**
 * Button that drifts toward the cursor when it enters an 80px radius, then
 * springs back on leave. Magnetism is disabled under reduced-motion.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "filled",
  size = "md",
  className,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 300, damping: 20 });
  const y = useSpring(0, { stiffness: 300, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    if (Math.hypot(dx, dy) < rect.width / 2 + 80) {
      x.set(dx * 0.3);
      y.set(dy * 0.3);
    }
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-btn font-body font-semibold",
    "transition-[box-shadow,background-color,border-color] duration-300 ease-smooth",
    "whitespace-nowrap select-none",
    VARIANTS[variant],
    SIZES[size],
    className
  );

  const content = <span className="relative z-10">{children}</span>;

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ x, y }}
        className={classes}
        aria-label={ariaLabel}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={classes}
      aria-label={ariaLabel}
    >
      {content}
    </motion.button>
  );
}
