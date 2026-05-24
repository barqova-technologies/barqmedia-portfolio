"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  isValidTheme,
  logoForTheme,
  type ThemeId,
} from "@/lib/themes";

interface ThemeContextValue {
  theme: ThemeId;
  setTheme: (t: ThemeId) => void;
  /** Logo asset that stays visible on the current theme's background. */
  logoSrc: string;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Reads the persisted theme on mount (the inline script in layout already
 * applied it pre-paint to avoid a flash) and writes the `data-theme` attribute
 * on <html> whenever it changes.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (isValidTheme(stored)) setThemeState(stored);
    else {
      const fromDom = document.documentElement.getAttribute("data-theme");
      if (isValidTheme(fromDom)) setThemeState(fromDom);
    }
  }, []);

  const setTheme = useCallback((t: ThemeId) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, t);
    } catch {
      /* storage may be unavailable (private mode) — non-fatal */
    }
  }, []);

  // Keep the DOM attribute in sync if theme changes via other means.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, logoSrc: logoForTheme(theme) }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

/**
 * Inline script injected before paint so the persisted theme is applied to
 * <html> with no flash of the default theme. Stringified into a <script>.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem('${THEME_STORAGE_KEY}');var valid=['noir','chrome','ember'];if(valid.indexOf(t)===-1){t='${DEFAULT_THEME}';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','${DEFAULT_THEME}');}})();`;
