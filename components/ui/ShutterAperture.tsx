"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Hexagon iris vertices (r=55) and their outer spoke tips (r=90), center 100,100. */
const ANGLES = [0, 60, 120, 180, 240, 300];
const pt = (deg: number, r: number) => {
  const a = (deg * Math.PI) / 180;
  return [100 + r * Math.cos(a), 100 + r * Math.sin(a)] as const;
};
const HEX = ANGLES.map((d) => pt(d, 55));
const HEX_POINTS = HEX.map((p) => p.join(",")).join(" ");

/**
 * BARQ identity motif: a slowly rotating camera-shutter aperture (iris blades +
 * spokes + ring). Pairs with the lightning bolt to echo the logo mark.
 */
export function ShutterAperture({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 200 200"
      className={cn("text-accent", className)}
      animate={reduce ? undefined : { rotate: 360 }}
      transition={{ duration: 70, ease: "linear", repeat: Infinity }}
    >
      {/* outer ring */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
      <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.18" />
      {/* iris opening */}
      <polygon points={HEX_POINTS} fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      {/* blades: each hex vertex to the next, offset outward to suggest overlap */}
      {HEX.map((v, i) => {
        const tip = pt(ANGLES[i], 90);
        return (
          <line
            key={i}
            x1={v[0]}
            y1={v[1]}
            x2={tip[0]}
            y2={tip[1]}
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.3"
          />
        );
      })}
      {/* chord blades for the classic iris look */}
      {HEX.map((v, i) => {
        const next = HEX[(i + 2) % 6];
        return (
          <line
            key={`c${i}`}
            x1={v[0]}
            y1={v[1]}
            x2={next[0]}
            y2={next[1]}
            stroke="currentColor"
            strokeWidth="0.4"
            opacity="0.15"
          />
        );
      })}
    </motion.svg>
  );
}
