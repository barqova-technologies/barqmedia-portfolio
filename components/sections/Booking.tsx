"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { useTheme } from "@/components/ThemeProvider";
import { THEMES, type ThemeId } from "@/lib/themes";

const NAMESPACE = "15min";
/** Change this to the real Cal.com link later. */
export const CAL_LINK = "barqova/15min";

/** Brand color passed into the Cal iframe per theme (iframe can't read our CSS vars). */
const ACCENT_HEX: Record<ThemeId, string> = {
  noir: "#FFC107",
  chrome: "#111111",
  ember: "#E8622A",
};

const CALL_POINTS = [
  "A quick read on your current content",
  "One or two ideas you can use immediately",
  "An honest take on whether we're the right fit",
];

/** "Book a Call" section — Cal.com embed wrapped in a BARQ-aesthetic card. */
export function Booking() {
  const { theme } = useTheme();
  const isDark = THEMES.find((t) => t.id === theme)?.isDark ?? true;
  const calTheme: "light" | "dark" = isDark ? "dark" : "light";
  const brand = ACCENT_HEX[theme];
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      if (!active) return;
      cal("ui", {
        theme: calTheme,
        cssVarsPerTheme: {
          light: { "cal-brand": brand },
          dark: { "cal-brand": brand },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      setReady(true);
    })();
    return () => {
      active = false;
    };
  }, [calTheme, brand]);

  return (
    <section
      id="book"
      aria-label="Book a call"
      className="bg-bg-primary py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-14 flex flex-col gap-4">
          <span className="font-body text-label uppercase text-accent">
            [ Book a Call ]
          </span>
          <h1 className="max-w-2xl font-display text-h2 text-text-primary">
            Book a Free Strategy Call.
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Left — what to expect */}
          <Reveal className="flex flex-col gap-7">
            <p className="font-body text-[18px] leading-relaxed text-text-secondary">
              15 minutes. No pitch deck. We look at your brand, your goals, and
              whether we&apos;re the right studio for you.
            </p>

            <ul className="flex flex-col gap-4">
              {CALL_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 font-body text-[15px] text-text-primary"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-accent bg-accent-dim text-accent">
                    <Check size={14} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-2 flex flex-col gap-3 rounded-card border border-border bg-bg-card p-5">
              <span className="flex items-center gap-2 font-body text-[14px] font-semibold text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Currently accepting clients for Q3 2026
              </span>
              <span className="font-body text-[13px] text-text-muted">
                No lock-in · Free first call · Response within 24 hours
              </span>
            </div>
          </Reveal>

          {/* Right — Cal.com embed in a BARQ frame */}
          <Reveal delay={0.15}>
            <div className="rounded-card border border-border-accent bg-bg-card p-2 shadow-glow-sm">
              <div className="flex items-center justify-between px-3 py-2.5">
                <span className="flex items-center gap-2 font-body text-label uppercase text-text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  15-min intro call
                </span>
                <span className="font-body text-[11px] text-text-muted">
                  Powered by Cal.com
                </span>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-border">
                {!ready && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-bg-secondary">
                    <span className="font-body text-[13px] text-text-secondary">
                      Loading calendar…
                    </span>
                  </div>
                )}
                <Cal
                  namespace={NAMESPACE}
                  calLink={CAL_LINK}
                  style={{ width: "100%", height: "640px", overflow: "scroll" }}
                  config={{ layout: "month_view", theme: calTheme }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
