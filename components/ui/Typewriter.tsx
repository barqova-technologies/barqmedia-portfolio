"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Types `text` one char at a time (80ms) once in view, with a blinking caret. */
export function Typewriter({
  text,
  className,
  speed = 80,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setCount(text.length);
      return;
    }
    if (count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [inView, count, text.length, speed, reduce]);

  return (
    <span ref={ref} className={cn("inline-flex items-baseline", className)}>
      <span>{text.slice(0, count)}</span>
      <span
        aria-hidden
        className="ml-0.5 inline-block w-[0.06em] self-stretch bg-accent animate-caret"
      />
    </span>
  );
}
