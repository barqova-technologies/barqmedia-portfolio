"use client";

import { useTheme } from "@/components/ThemeProvider";
import { THEMES } from "@/lib/themes";
import { cn } from "@/lib/utils";

/** Three circular swatches; the active one wears a glowing accent ring. */
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const activeName = THEMES.find((t) => t.id === theme)?.name;

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2" role="radiogroup" aria-label="Color theme">
        {THEMES.map((t) => {
          const active = t.id === theme;
          return (
            <button
              key={t.id}
              type="button"
              role="radio"
              aria-checked={active}
              aria-label={`${t.name} theme`}
              onClick={() => setTheme(t.id)}
              className={cn(
                "relative h-6 w-6 rounded-full border transition-transform duration-300",
                "hover:scale-110"
              )}
              style={{
                backgroundColor: t.swatch,
                // Always-visible ring so dark swatches (e.g. Noir) stay readable
                // on dark themes like Ember; adapts to the active theme's contrast.
                borderColor: active
                  ? "var(--accent)"
                  : "color-mix(in srgb, var(--text-primary) 40%, transparent)",
                boxShadow: active ? "0 0 12px var(--accent-glow)" : "none",
              }}
            >
              {active && (
                <span
                  aria-hidden
                  className="absolute -inset-1 rounded-full border"
                  style={{ borderColor: "var(--accent)" }}
                />
              )}
            </button>
          );
        })}
      </div>
      <span className="hidden font-body text-label uppercase text-text-secondary sm:inline">
        {activeName}
      </span>
    </div>
  );
}
