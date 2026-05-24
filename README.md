# BARQ Media — Studio Site

A premium, single-page scrolling site for **BARQ Media**, a new creative studio
(social-media marketing, cinematic content, brand strategy). It sells capability,
taste, and point of view — **no fake clients, testimonials, or metrics**.

Built with Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS 3.4 ·
Framer Motion 11 · Lenis smooth scroll · lucide-react · next/font.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

Requires Node 18.18+ (developed on Node 25).

---

## Theme system

Three themes, swapped live from the navbar (top-right swatches):

| Theme    | Feel                                  | Logo shown        |
| -------- | ------------------------------------- | ----------------- |
| `noir`   | Black + electric yellow (default)     | white-stroke logo |
| `chrome` | Swiss editorial, daylight precision   | dark logo         |
| `ember`  | Indian luxury, maroon + burnt orange  | white-stroke logo |

How it works:

- **Token values** live in `app/globals.css` under `[data-theme="..."]` selectors
  so the browser can cross-fade them.
- **Token metadata** (names, swatches, which themes are dark) lives in
  `lib/themes.ts`.
- `components/ThemeProvider.tsx` writes `data-theme` on `<html>`, persists the
  choice to `localStorage`, and an inline script in `app/layout.tsx` applies the
  saved theme **before paint** (no flash).
- Every color/border/glow in components reads a CSS variable
  (`var(--accent)`, `text-text-secondary`, etc.) — **never hardcode hex**.

### Logo

The provided logo PNGs live in `public/`:

- `barq-logo-dark.png` — white strokes + yellow bolt → shown on **dark** themes.
- `barq-logo-light.png` — black shutter + dark wordmark → shown on **chrome**.

`components/ui/Logo.tsx` picks the right asset per theme so the mark is never
hidden. Swap files in `public/` or edit `lib/themes.ts` (`LOGO_DARK` / `LOGO_LIGHT`)
to change them.

### Hero & CTA are locked

The Hero and CTA sections set `data-theme="noir"` on their own wrapper so they
stay pure black with the electric-yellow accent on **every** theme — matching the
logo, which never changes color.

---

## Component map

```
app/
  layout.tsx        Fonts, metadata, providers (Theme → Lenis → Cursor → NavBar)
  page.tsx          Section composition (Hero eager, rest code-split)
  globals.css       Theme tokens, base styles, marquee/caret keyframes, reduced-motion

components/
  ThemeProvider.tsx Theme context + pre-paint init script
  SmoothScroll.tsx  Lenis provider (off under reduced-motion)
  sections/
    Hero · Manifesto · Capabilities · Services · Process
    About · NicheTargets · CTA · Footer
  ui/
    NavBar · ThemeSwitcher · Logo · CursorFollower
    MagneticButton · GlowCard · SectionHeading · AnimatedText
    Typewriter · Reveal · PlatformTicker · ContentCalendar
    CardVisual (per-format CSS/SVG textures) · Icon (lucide name → component)

lib/
  themes.ts         Theme registry + logo selection
  utils.ts          cn(), shared easing + viewport config
  data/             ALL copy & content — edit here, not in components
    site.ts         Brand, nav, platforms, ticker, calendar, footer
    manifesto.ts · capabilities.ts · services.ts
    process.ts · niches.ts · about.ts
```

---

## How to swap copy

All text and content lives in `lib/data/*`. Examples:

- Tagline, email, nav links, ticker, footer → `lib/data/site.ts`
- Bento cards (label/title/copy/visual/span) → `lib/data/capabilities.ts`
- Packages → `lib/data/services.ts`
- Timeline steps → `lib/data/process.ts`
- Manifesto statements → `lib/data/manifesto.ts`
- Niches + bad-vs-BARQ comparison → `lib/data/niches.ts`
- Studio bio + card → `lib/data/about.ts`

Icons are referenced by **lucide-react export name** (a string). To use a new
icon, add it to the map in `components/ui/Icon.tsx`, then reference its name in
the data file.

---

## Accessibility & motion

- All animations honor `prefers-reduced-motion` (Framer Motion renders static,
  Lenis is bypassed).
- Real `<h1>`–`<h2>` headings, semantic `<nav>/<main>/<section aria-label>/<footer>`.
- `focus-visible` outlines on every interactive element.
- The custom cursor is disabled on coarse-pointer (touch) devices.
- Theme palettes target WCAG AA contrast.

---

## Notes

- No TikTok anywhere — platform focus is Instagram · YouTube Shorts · LinkedIn ·
  Meta Ads, by design.
- Card visuals are pure CSS/SVG — no stock photography.
```
