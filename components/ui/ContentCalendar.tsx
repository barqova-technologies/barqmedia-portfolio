"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CALENDAR_DAYS,
  CALENDAR_LEGEND,
  type ContentType,
} from "@/lib/data/site";
import { EASE_SMOOTH, VIEWPORT_ONCE } from "@/lib/utils";

const tintFor = (type: string) =>
  CALENDAR_LEGEND.find((l) => l.type === (type as ContentType))?.tint ??
  "var(--text-muted)";

/** Styled weekly sprint grid with color-coded content-type pills + legend. */
export function ContentCalendar() {
  const reduce = useReducedMotion();

  return (
    <div className="rounded-card border border-border bg-bg-card p-6 md:p-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
        {CALENDAR_DAYS.map((d, i) => {
          const tint = tintFor(d.type);
          return (
            <motion.div
              key={d.day}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.5, ease: EASE_SMOOTH, delay: i * 0.06 }}
              className="flex flex-col gap-3 rounded-btn border border-border bg-bg-secondary p-4"
            >
              <span className="font-body text-label uppercase text-text-secondary">
                {d.day}
              </span>
              <span
                className="inline-flex w-fit items-center rounded-full px-3 py-1 font-body text-[13px] font-medium"
                style={{
                  color: tint,
                  backgroundColor: "color-mix(in srgb, currentColor 12%, transparent)",
                  border: "1px solid color-mix(in srgb, currentColor 35%, transparent)",
                }}
              >
                {d.type}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-[14px] italic text-text-secondary">
          A sample weekly sprint. Not a one-off. A system.
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {CALENDAR_LEGEND.map((l) => (
            <li
              key={l.type}
              className="flex items-center gap-2 font-body text-[12px] text-text-secondary"
            >
              <span
                aria-hidden
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: l.tint }}
              />
              {l.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
