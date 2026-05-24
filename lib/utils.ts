import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge conditional class names, de-duplicating conflicting Tailwind utilities. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Easing curve used by every section/card entrance (no bounce). */
export const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const;

/** Shared scroll-reveal config for `whileInView`. */
export const VIEWPORT_ONCE = { once: true, margin: "-100px" } as const;
