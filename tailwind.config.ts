import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // All colors read from CSS custom properties — never hardcode hex in components.
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-card": "var(--bg-card)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        accent: "var(--accent)",
        "accent-dim": "var(--accent-dim)",
        "accent-glow": "var(--accent-glow)",
        border: "var(--border)",
        "border-accent": "var(--border-accent)",
        "card-hover": "var(--card-hover)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Tuned for Unbounded (a wide display face): smaller maxes + tight tracking.
        hero: [
          "clamp(40px, 7vw, 88px)",
          { lineHeight: "0.98", letterSpacing: "-0.05em", fontWeight: "700" },
        ],
        h2: [
          "clamp(28px, 4.2vw, 46px)",
          { lineHeight: "1.1", letterSpacing: "-0.035em", fontWeight: "700" },
        ],
        h3: [
          "20px",
          { lineHeight: "1.25", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "card-title": ["16px", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["16px", { lineHeight: "1.75", fontWeight: "400" }],
        label: [
          "12px",
          { lineHeight: "1.4", letterSpacing: "0.1em", fontWeight: "500" },
        ],
      },
      borderRadius: {
        card: "16px",
        btn: "12px",
      },
      boxShadow: {
        glow: "0 0 40px var(--accent-glow)",
        "glow-sm": "0 0 20px var(--accent-glow)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
