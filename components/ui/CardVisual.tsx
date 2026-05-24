import {
  Play,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  TrendingUp,
} from "lucide-react";
import type { CapabilityVisual } from "@/lib/data/capabilities";

/**
 * Each capability card sits on an abstract mock-up of the social surface it
 * produces — a Reel frame, a feed grid, an IG carousel post, a video card, an
 * ads dashboard, a moodboard. Pure CSS/SVG + lucide chrome, no real logos, all
 * theme-tokened. Scales subtly on parent card hover.
 */
export function CardVisual({ visual }: { visual: CapabilityVisual }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 transition-transform duration-500 ease-smooth group-hover:scale-[1.04]"
    >
      {visual === "motion" && <ReelFrame />}
      {visual === "blocks" && <FeedGrid />}
      {visual === "calendar" && <VideoCard />}
      {visual === "slides" && <CarouselPost />}
      {visual === "bars" && <AdsDashboard />}
      {visual === "swatches" && <Moodboard />}
    </div>
  );
}

const mix = (c: string, pct: number) =>
  `color-mix(in srgb, ${c} ${pct}%, transparent)`;

/* ── Reels / Shorts: vertical frame, play button, action rail, progress. ── */
function ReelFrame() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div
        className="relative h-full w-[58%] max-w-[220px] overflow-hidden rounded-2xl border"
        style={{
          borderColor: "var(--border)",
          background: `linear-gradient(160deg, ${mix(
            "var(--accent)",
            14
          )}, var(--bg-secondary))`,
        }}
      >
        {/* speed streaks */}
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 200">
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={i}
              x1={-20 + i * 26}
              y1={210}
              x2={30 + i * 26}
              y2={-10}
              stroke="var(--accent)"
              strokeWidth={i % 2 === 0 ? 1.5 : 0.5}
              opacity={i % 2 === 0 ? 0.25 : 0.1}
            />
          ))}
        </svg>

        {/* center play */}
        <div
          className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-sm"
          style={{ background: mix("var(--text-primary)", 12) }}
        >
          <Play size={16} className="ml-0.5 text-text-primary" fill="currentColor" />
        </div>

        {/* right action rail */}
        <div
          className="absolute bottom-10 right-2 flex flex-col items-center gap-3"
          style={{ color: mix("var(--text-primary)", 80) }}
        >
          <Heart size={14} />
          <MessageCircle size={14} />
          <Send size={14} />
        </div>

        {/* caption lines */}
        <div className="absolute bottom-5 left-3 flex w-1/2 flex-col gap-1.5">
          <span className="h-1.5 w-full rounded-full" style={{ background: mix("var(--text-secondary)", 40) }} />
          <span className="h-1.5 w-2/3 rounded-full" style={{ background: mix("var(--text-secondary)", 25) }} />
        </div>

        {/* progress bar (animated fill) */}
        <div className="absolute bottom-2 left-3 right-3 h-1 rounded-full" style={{ background: mix("var(--text-muted)", 60) }}>
          <div className="anim-progress h-full rounded-full bg-accent" />
        </div>
      </div>
    </div>
  );
}

/* ── Brand Identity: Instagram-style 3×3 profile feed grid. ── */
function FeedGrid() {
  const accentTiles = new Set([0, 4, 7]);
  return (
    <div className="absolute inset-0 flex flex-col gap-2 p-4">
      {/* mini profile header */}
      <div className="flex items-center gap-2">
        <span className="h-6 w-6 rounded-full bg-accent" />
        <div className="flex flex-col gap-1">
          <span className="h-1.5 w-16 rounded-full" style={{ background: mix("var(--text-secondary)", 45) }} />
          <span className="h-1.5 w-10 rounded-full" style={{ background: mix("var(--text-muted)", 70) }} />
        </div>
      </div>
      {/* 3×3 grid */}
      <div className="grid flex-1 grid-cols-3 gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="rounded-md"
            style={{
              background: accentTiles.has(i)
                ? mix("var(--accent)", 70)
                : mix("var(--text-muted)", 35),
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Content Strategy → YouTube-style video card: thumbnail + play + meta. ── */
function VideoCard() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2 p-5">
      <div
        className="relative aspect-video w-full overflow-hidden rounded-lg border"
        style={{
          borderColor: "var(--border)",
          background: `linear-gradient(135deg, ${mix("var(--accent)", 18)}, var(--bg-secondary))`,
        }}
      >
        <div
          className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
          style={{ background: mix("var(--text-primary)", 14) }}
        >
          <Play size={14} className="ml-0.5 text-text-primary" fill="currentColor" />
        </div>
        <span className="absolute bottom-1.5 right-1.5 rounded px-1 py-0.5 font-body text-[8px] text-text-primary" style={{ background: mix("var(--bg-primary)", 70) }}>
          0:30
        </span>
      </div>
      <div className="flex items-start gap-2">
        <span className="h-5 w-5 shrink-0 rounded-full bg-accent" />
        <div className="flex flex-1 flex-col gap-1">
          <span className="h-1.5 w-5/6 rounded-full" style={{ background: mix("var(--text-secondary)", 45) }} />
          <span className="h-1.5 w-1/2 rounded-full" style={{ background: mix("var(--text-muted)", 70) }} />
        </div>
      </div>
    </div>
  );
}

/* ── Carousels: Instagram carousel post — header, image, dots, actions. ── */
function CarouselPost() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-5">
      <div
        className="flex h-full w-full max-w-[260px] flex-col overflow-hidden rounded-xl border"
        style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
      >
        {/* header */}
        <div className="flex items-center gap-2 px-3 py-2">
          <span className="h-5 w-5 rounded-full bg-accent" />
          <span className="h-1.5 w-14 rounded-full" style={{ background: mix("var(--text-secondary)", 45) }} />
          <MoreHorizontal size={14} className="ml-auto text-text-muted" />
        </div>
        {/* image with stacked-slide hint */}
        <div className="relative flex-1" style={{ background: mix("var(--accent)", 10) }}>
          <div
            className="absolute right-2 top-2 rounded px-1.5 py-0.5 font-body text-[8px] text-text-primary"
            style={{ background: mix("var(--bg-primary)", 70) }}
          >
            1/5
          </div>
          <div className="absolute inset-x-6 inset-y-5 rounded-lg border" style={{ borderColor: "var(--border-accent)", background: mix("var(--text-muted)", 25) }} />
        </div>
        {/* dots */}
        <div className="flex items-center justify-center gap-1 py-2">
          {[0, 1, 2, 3, 4].map((d) => (
            <span
              key={d}
              className="h-1 w-1 rounded-full"
              style={{ background: d === 0 ? "var(--accent)" : mix("var(--text-muted)", 70) }}
            />
          ))}
        </div>
        {/* actions */}
        <div className="flex items-center gap-3 px-3 pb-2 text-text-secondary">
          <Heart size={14} />
          <MessageCircle size={14} />
          <Send size={14} />
          <Bookmark size={14} className="ml-auto" />
        </div>
      </div>
    </div>
  );
}

/* ── Paid Social: Ads Manager-style dashboard — bars + trend line. ── */
function AdsDashboard() {
  const heights = [42, 64, 50, 78, 60, 88, 70, 96];
  return (
    <div className="absolute inset-0 flex flex-col justify-end gap-2 p-6">
      <div className="flex items-center gap-2">
        <TrendingUp size={14} className="text-accent" />
        <span className="h-1.5 w-20 rounded-full" style={{ background: mix("var(--text-secondary)", 40) }} />
      </div>
      <div className="relative flex h-[55%] items-end gap-2">
        {heights.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              background: i === heights.length - 1 ? "var(--accent)" : mix("var(--text-muted)", 45),
            }}
          />
        ))}
        {/* trend line */}
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <polyline
            points="2,70 16,55 30,60 44,40 58,48 72,28 86,20 98,8"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            opacity="0.7"
          />
        </svg>
      </div>
    </div>
  );
}

/* ── Creative Direction: moodboard palette swatches. ── */
function Moodboard() {
  const palette = [
    "var(--accent)",
    "var(--text-primary)",
    "var(--text-secondary)",
    "var(--text-muted)",
  ];
  return (
    <div className="absolute inset-0 flex gap-1.5 p-4">
      {palette.map((c, i) => (
        <div
          key={i}
          className="flex-1 rounded-md"
          style={{ background: c, opacity: 0.85 - i * 0.12 }}
        />
      ))}
    </div>
  );
}
