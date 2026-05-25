"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowDown, Play, Heart, MessageCircle, Zap } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ShutterAperture } from "@/components/ui/ShutterAperture";
import { Icon } from "@/components/ui/Icon";
import { BRAND, PLATFORMS } from "@/lib/data/site";
import { EASE_SMOOTH, cn } from "@/lib/utils";

const HERO_PLATFORMS = PLATFORMS.slice(0, 3); // Instagram · YouTube Shorts · LinkedIn

/**
 * Cinematic opening frame for a social studio. Follows the active theme (accent,
 * background, glows all read from theme tokens). Mouse-parallax depth layers, a
 * rotating camera-shutter aperture (BARQ identity), and floating social-UI chips.
 */
export function Hero() {
  const reduce = useReducedMotion();

  // Pointer position normalized to -0.5..0.5, springed for buttery parallax.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: EASE_SMOOTH, delay },
        };

  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative flex min-h-[100svh] items-center justify-center bg-bg-primary px-5 pb-32 pt-32 md:pb-36"
    >
      {/* Decorative layer — clipped to the section; content never clips. */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        {/* Grid lines */}
        <div className="absolute inset-0 bg-grid" />

        {/* Radial glows */}
        <div
          className="absolute left-[15%] top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "var(--accent-glow)", opacity: 0.25 }}
        />
        <div
          className="absolute bottom-0 right-[10%] h-[360px] w-[360px] rounded-full blur-3xl"
          style={{ background: "var(--accent-glow)", opacity: 0.18 }}
        />

        {/* feTurbulence noise overlay */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]">
          <filter id="hero-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-noise)" />
        </svg>

        {/* Identity layer: rotating shutter aperture + floating bolt (deep parallax) */}
        <Parallax sx={sx} sy={sy} depth={-26} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ShutterAperture className="h-[78vh] w-[78vh] opacity-[0.22]" />
        </Parallax>
        <Parallax sx={sx} sy={sy} depth={-16} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="relative"
            animate={reduce ? { opacity: 0.85 } : { y: [-10, 10, -10] }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          >
            {/* Big soft glow — the "shadow" cast by the bolt. */}
            <motion.svg
              viewBox="0 0 100 200"
              className="absolute left-1/2 top-1/2 h-[80vh] -translate-x-1/2 -translate-y-1/2 blur-[64px]"
              fill="var(--accent)"
              animate={reduce ? { opacity: 0.55 } : { opacity: [0.4, 0.65, 0.4] }}
              transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
            >
              <path d="M58 0 L20 110 L46 110 L34 200 L82 80 L54 80 Z" />
            </motion.svg>
            {/* Crisp bolt on top so the lightning shape stays readable. */}
            <motion.svg
              viewBox="0 0 100 200"
              className="relative h-[72vh] blur-[2px] drop-shadow-[0_0_40px_var(--accent-glow)]"
              fill="var(--accent)"
              animate={reduce ? { opacity: 0.35 } : { opacity: [0.28, 0.42, 0.28] }}
              transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
            >
              <path d="M58 0 L20 110 L46 110 L34 200 L82 80 L54 80 Z" />
            </motion.svg>
          </motion.div>
        </Parallax>

        {/* Floating social-UI chips (desktop only; honest — no fake metrics) */}
        <ReelChip sx={sx} sy={sy} reduce={reduce} />
        <LiveChip sx={sx} sy={sy} reduce={reduce} />
        <HookChip sx={sx} sy={sy} reduce={reduce} />
        <EngagementChip sx={sx} sy={sy} reduce={reduce} />
        <PlatformBubbles sx={sx} sy={sy} reduce={reduce} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <motion.span
          {...fade(0)}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border-accent bg-accent-dim px-4 py-2 font-body text-label uppercase text-text-primary"
        >
          <Zap size={14} className="text-accent" fill="currentColor" aria-hidden /> A different kind of creative studio
        </motion.span>

        <h1 className="font-display text-hero text-text-primary [&_.text-accent]:[text-shadow:0_0_80px_var(--accent-glow),0_0_32px_var(--accent-glow)]">
          <AnimatedText text={"Built For\nAttention."} accentWords={["Attention"]} delay={0.15} immediate />
        </h1>

        <motion.p
          {...fade(0.4)}
          className="mt-8 max-w-2xl font-body text-[18px] leading-relaxed text-text-secondary md:text-[20px]"
        >
          Brand storytelling, cinematic reels, and brand strategy
          <br className="hidden sm:block" /> for businesses that demand to be seen.
        </motion.p>

        <motion.ul {...fade(0.55)} className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {HERO_PLATFORMS.map((p) => (
            <li
              key={p.name}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-body text-[13px] text-text-secondary"
            >
              <Icon name={p.icon} size={16} className="text-accent" aria-hidden />
              {p.name}
            </li>
          ))}
        </motion.ul>

        <motion.div {...fade(0.65)} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <MagneticButton href="#capabilities" variant="filled" size="lg">
            See What We Do
          </MagneticButton>
          <MagneticButton href="/book" variant="ghost" size="lg">
            Start a Project
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#manifesto"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-text-secondary"
      >
        <ArrowDown size={22} className="animate-scroll-pulse" />
      </a>

      <span className="sr-only">{BRAND.tagline}</span>
    </section>
  );
}

/* ─────────────────────────── parallax plumbing ─────────────────────────── */

type SV = MotionValue<number>;

/** Wraps children in a layer that shifts with the pointer by `depth` pixels. */
function Parallax({
  sx,
  sy,
  depth,
  className,
  children,
}: {
  sx: SV;
  sy: SV;
  depth: number;
  className?: string;
  children: React.ReactNode;
}) {
  const x = useTransform(sx, (v) => v * depth);
  const y = useTransform(sy, (v) => v * depth);
  return (
    <motion.div aria-hidden style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
}

/** Floating chip: pointer parallax (outer) + gentle idle float (inner). */
function Floater({
  sx,
  sy,
  depth,
  reduce,
  className,
  floatRange = 12,
  duration = 6,
  delay = 0,
  children,
}: {
  sx: SV;
  sy: SV;
  depth: number;
  reduce: boolean | null;
  className?: string;
  floatRange?: number;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}) {
  const x = useTransform(sx, (v) => v * depth);
  const y = useTransform(sy, (v) => v * depth);
  return (
    <motion.div
      aria-hidden
      style={{ x, y }}
      className={cn("pointer-events-none absolute z-[5] hidden lg:block", className)}
    >
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
        animate={
          reduce
            ? { opacity: 1 }
            : { opacity: 1, scale: 1, y: [0, -floatRange, 0] }
        }
        transition={{
          opacity: { duration: 0.6, delay: 0.8 + delay },
          scale: { duration: 0.6, delay: 0.8 + delay },
          y: { duration, ease: "easeInOut", repeat: Infinity, delay },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

const glassBg = "color-mix(in srgb, var(--bg-card) 80%, transparent)";
const cardCls =
  "rounded-2xl border border-border-accent backdrop-blur-md shadow-glow-sm";

/* Mini vertical Reel frame — top-left. */
function ReelChip({ sx, sy, reduce }: { sx: SV; sy: SV; reduce: boolean | null }) {
  return (
    <Floater sx={sx} sy={sy} depth={46} reduce={reduce} delay={0.1} className="left-[7%] top-[24%]">
      <div className={cn(cardCls, "flex h-44 w-28 flex-col overflow-hidden p-0")} style={{ background: glassBg }}>
        <div className="relative flex-1" style={{ background: "linear-gradient(160deg, color-mix(in srgb, var(--accent) 18%, transparent), var(--bg-secondary))" }}>
          <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full" style={{ background: "color-mix(in srgb, var(--text-primary) 14%, transparent)" }}>
            <Play size={14} className="ml-0.5 text-text-primary" fill="currentColor" />
          </div>
          <div className="absolute bottom-2 left-2 right-2 h-1 rounded-full" style={{ background: "color-mix(in srgb, var(--text-muted) 60%, transparent)" }}>
            <div className="h-full w-1/3 rounded-full bg-accent" />
          </div>
        </div>
        <span className="px-2 py-1.5 font-body text-[10px] uppercase tracking-wide text-accent">Reel</span>
      </div>
    </Floater>
  );
}

/* ● LIVE recording pill — top-right. */
function LiveChip({ sx, sy, reduce }: { sx: SV; sy: SV; reduce: boolean | null }) {
  return (
    <Floater sx={sx} sy={sy} depth={34} reduce={reduce} delay={0.35} duration={7} className="right-[9%] top-[20%]">
      <div className={cn(cardCls, "flex items-center gap-2 px-3 py-2")} style={{ background: glassBg }}>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="font-body text-[11px] font-semibold uppercase tracking-wide text-text-primary">Now Recording</span>
      </div>
    </Floater>
  );
}

/* "Hook-driven" craft chip — bottom-left. */
function HookChip({ sx, sy, reduce }: { sx: SV; sy: SV; reduce: boolean | null }) {
  return (
    <Floater sx={sx} sy={sy} depth={40} reduce={reduce} delay={0.6} duration={6.5} className="bottom-[22%] left-[11%]">
      <div className={cn(cardCls, "flex flex-col gap-1 px-4 py-3")} style={{ background: glassBg }}>
        <span className="font-body text-[10px] uppercase tracking-wide text-text-secondary">First 3 seconds</span>
        <span className="font-display text-[15px] font-semibold text-text-primary">Hook-driven.</span>
      </div>
    </Floater>
  );
}

/* Engagement icons pill — bottom-right (no counts, honest). */
function EngagementChip({ sx, sy, reduce }: { sx: SV; sy: SV; reduce: boolean | null }) {
  return (
    <Floater sx={sx} sy={sy} depth={30} reduce={reduce} delay={0.45} duration={7.5} className="bottom-[26%] right-[10%]">
      <div className={cn(cardCls, "flex items-center gap-3 px-4 py-3 text-accent")} style={{ background: glassBg }}>
        <Heart size={16} fill="currentColor" />
        <MessageCircle size={16} />
        <span className="font-body text-[11px] font-medium text-text-primary">Built to be saved</span>
      </div>
    </Floater>
  );
}

/* Platform icon bubbles — mid sides. */
function PlatformBubbles({ sx, sy, reduce }: { sx: SV; sy: SV; reduce: boolean | null }) {
  return (
    <>
      <Floater sx={sx} sy={sy} depth={22} reduce={reduce} delay={0.2} duration={8} className="left-[18%] top-[58%]">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border-accent text-accent backdrop-blur-md" style={{ background: glassBg }}>
          <Icon name="Instagram" size={20} />
        </div>
      </Floater>
      <Floater sx={sx} sy={sy} depth={26} reduce={reduce} delay={0.5} duration={7} className="right-[20%] top-[60%]">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border-accent text-accent backdrop-blur-md" style={{ background: glassBg }}>
          <Icon name="Youtube" size={20} />
        </div>
      </Floater>
    </>
  );
}
