"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  /** Use "\n" to force line breaks; words stagger within and across lines. */
  text: string;
  className?: string;
  /** Words (punctuation-insensitive) rendered in the accent color. */
  accentWords?: string[];
  /** Words rendered with a muted strikethrough. */
  strikeWords?: string[];
  delay?: number;
  stagger?: number;
  /** Animate on mount instead of on scroll-into-view (use for above-the-fold headlines). */
  immediate?: boolean;
}

const normalize = (w: string) => w.replace(/[^a-zA-Z]/g, "").toLowerCase();

/**
 * Headline reveal: each word slides up from y:60 with a small stagger.
 * Honors reduced-motion (renders static, fully visible).
 */
export function AnimatedText({
  text,
  className,
  accentWords = [],
  strikeWords = [],
  delay = 0,
  stagger = 0.05,
  immediate = false,
}: AnimatedTextProps) {
  const reduce = useReducedMotion();
  const lines = text.split("\n");
  const accent = new Set(accentWords.map(normalize));
  const strike = new Set(strikeWords.map(normalize));

  let wordIndex = -1;

  return (
    <span className={cn("inline-block", className)}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((word, wi) => {
            wordIndex += 1;
            const key = normalize(word);
            const isAccent = accent.has(key);
            const isStrike = strike.has(key);
            const child = (
              <span
                className={cn(
                  "inline-block",
                  isAccent && "text-accent",
                  isStrike && "text-text-muted line-through"
                )}
              >
                {word}
              </span>
            );

            return (
              <Fragment key={wi}>
                <span className="inline-block overflow-hidden align-bottom">
                  {reduce ? (
                    child
                  ) : (
                    <motion.span
                      className="inline-block"
                      initial={{ y: 60, opacity: 0 }}
                      {...(immediate
                        ? { animate: { y: 0, opacity: 1 } }
                        : {
                            whileInView: { y: 0, opacity: 1 },
                            viewport: { once: true, margin: "-80px" },
                          })}
                      transition={{
                        duration: 0.6,
                        ease: [0.25, 0.1, 0.25, 1],
                        delay: delay + wordIndex * stagger,
                      }}
                    >
                      {child}
                    </motion.span>
                  )}
                </span>{" "}
              </Fragment>
            );
          })}
        </span>
      ))}
    </span>
  );
}
