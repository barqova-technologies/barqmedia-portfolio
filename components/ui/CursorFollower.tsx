"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor: an instant 8px dot + a lagging 32px ring.
 * Grows over interactive elements; shows "Explore" over capability cards.
 * Fully disabled on coarse-pointer (touch) devices.
 */
export function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [explore, setExplore] = useState(false);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  // Ring trails the dot with a soft spring (~120ms feel).
  const ringX = useSpring(dotX, { stiffness: 350, damping: 28, mass: 0.6 });
  const ringY = useSpring(dotY, { stiffness: 350, damping: 28, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    setEnabled(true);
    document.body.classList.add("cursor-none");

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        'a, button, [role="button"], input, textarea, [data-cursor]'
      );
      setHovering(!!target);
      setExplore(target?.getAttribute("data-cursor") === "explore");
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.body.classList.remove("cursor-none");
    };
  }, [dotX, dotY]);

  if (!enabled) return null;

  return (
    <>
      {/* Inner dot — zero lag, hidden while hovering interactive elements. */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "var(--accent)",
          opacity: hovering ? 0 : 1,
        }}
      />
      {/* Outer ring — spring lag, grows + fills on hover. */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: "1px solid var(--accent)",
          backgroundColor: hovering ? "var(--accent-dim)" : "transparent",
        }}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          opacity: hovering ? 1 : 0.4,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
      >
        {explore && (
          <span
            className="font-body text-[11px] font-medium uppercase tracking-wide"
            style={{ color: "var(--accent)" }}
          >
            Explore
          </span>
        )}
      </motion.div>
    </>
  );
}
