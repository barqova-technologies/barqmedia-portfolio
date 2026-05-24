/**
 * Multi-theme registry.
 *
 * Token VALUES live in `app/globals.css` under `[data-theme="..."]` selectors so
 * the browser can cross-fade them. This file is the single source of truth for
 * theme METADATA: which themes exist, their display names, switcher swatches,
 * and — critically — whether each theme is dark (so the right BARQ logo asset is
 * shown and never disappears against the background).
 */

export type ThemeId = "noir" | "chrome" | "ember";

export interface ThemeMeta {
  id: ThemeId;
  /** Label shown beside the switcher swatches. */
  name: string;
  /** Solid color of the circular switcher swatch. */
  swatch: string;
  /** Dark themes use the light (white-stroke) logo; light themes use the dark logo. */
  isDark: boolean;
}

export const THEMES: ThemeMeta[] = [
  { id: "noir", name: "Noir", swatch: "#000000", isDark: true },
  { id: "chrome", name: "Chrome", swatch: "#C0C0C0", isDark: false },
  { id: "ember", name: "Ember", swatch: "#7A1E12", isDark: true },
];

export const DEFAULT_THEME: ThemeId = "noir";

export const THEME_STORAGE_KEY = "barq-theme";

/** Logo asset per theme contrast — keeps the mark visible on any background. */
export const LOGO_DARK = "/barq-logo-dark.png"; // white strokes + yellow bolt
export const LOGO_LIGHT = "/barq-logo-light.png"; // black shutter + dark text

export function logoForTheme(id: ThemeId): string {
  const meta = THEMES.find((t) => t.id === id);
  return meta?.isDark ? LOGO_DARK : LOGO_LIGHT;
}

export function isValidTheme(value: unknown): value is ThemeId {
  return THEMES.some((t) => t.id === value);
}
