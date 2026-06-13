/** Brand identity, navigation, platforms, ticker, calendar, footer — all copy. */

export const BRAND = {
  name: "Barq Media",
  shortName: "Barq",
  tagline: "Built For Attention.",
  subTagline:
    "Content systems, cinematic reels, and brand strategy for businesses that refuse to be ignored.",
  email: "hello@barqmedia.in",
  location: "India · Working Globally",
  hours: "Available Mon–Sat, 10am–7pm IST",
  established: "Est. 2025",
  availability: "Currently accepting new clients for Q3 2026",
  phoneDisplay: "+91 8052 911 323",
  whatsapp:
    "https://wa.me/918052911323?text=Hi%20Barq%20Media%2C%20I%27d%20like%20to%20talk%20about%20a%20project.",
} as const;

/** Canonical site + SEO config. Used by metadata, sitemap, robots, JSON-LD. */
export const SITE = {
  // Live domain. Override per-deploy via NEXT_PUBLIC_SITE_URL (see app/layout.tsx).
  url: "https://barqmedia.in",
  ogImage: "/og.png",
  icon: "/icon.png",
  locale: "en_US",
  // SEO title (50–60 chars) + description (110–160 chars).
  title: "Barq Media · Built For Attention | Social Media Studio",
  description:
    "Barq Media is a creative studio building content systems, cinematic reels, and brand strategy for Instagram, YouTube Shorts, LinkedIn and Meta Ads.",
  craftedBy: { name: "Barqova Technologies", href: "https://barqova.com" },
  // Both brands surfaced so searches for "Barq Media" and "Barqova" resolve here.
  keywords: [
    "Barq Media",
    "Barqova",
    "Barq Media studio",
    "social media marketing studio",
    "cinematic reels",
    "content systems",
    "brand strategy",
    "Instagram marketing",
    "YouTube Shorts agency",
    "LinkedIn content",
    "Meta Ads",
    "creative studio India",
    "UGC",
    "paid social campaigns",
  ],
  social: {
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://linkedin.com/",
  },
} as const;

/** Platform focus — NO TikTok anywhere. `icon` keys map to lucide-react / custom SVGs. */
export const PLATFORMS = [
  { name: "Instagram", icon: "Instagram" },
  { name: "YouTube", icon: "Youtube" },
  { name: "LinkedIn", icon: "Linkedin" },
  { name: "Meta Ads", icon: "Facebook" },
] as const;

// Absolute hashes ("/#...") so the nav works from any route (e.g. /book), not
// just the home page.
export const NAV_LINKS = [
  { label: "What We Do", href: "/#capabilities" },
  { label: "How We Work", href: "/#process" },
  { label: "Our Thinking", href: "/#manifesto" },
  { label: "Careers", href: "/careers" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Book a Call", href: "/book" },
] as const;

/** Two-row infinite marquee (PlatformTicker). */
export const TICKER_ROW_ONE = [
  { label: "Instagram", icon: "Instagram" },
  { label: "YouTube Shorts", icon: "Youtube" },
  { label: "LinkedIn", icon: "Linkedin" },
  { label: "Meta Ads", icon: "Facebook" },
  { label: "Google Ads", icon: "Search" },
  { label: "Reels", icon: "Clapperboard" },
  { label: "Carousels", icon: "GalleryHorizontal" },
] as const;

export const TICKER_ROW_TWO = [
  { label: "Brand Strategy", icon: "Compass" },
  { label: "Creative Direction", icon: "Palette" },
  { label: "Content Systems", icon: "LayoutGrid" },
  { label: "UGC", icon: "Users" },
  { label: "Paid Campaigns", icon: "Megaphone" },
  { label: "Brand Films", icon: "Film" },
] as const;

/** Weekly sprint grid (ContentCalendar). */
export const CALENDAR_DAYS = [
  { day: "Mon", type: "Reel" },
  { day: "Tue", type: "Story" },
  { day: "Wed", type: "Carousel" },
  { day: "Thu", type: "Reel" },
  { day: "Fri", type: "Reel" },
  { day: "Sat", type: "UGC" },
  { day: "Sun", type: "Rest" },
] as const;

export type ContentType = "Reel" | "Story" | "Carousel" | "UGC" | "Rest";

/** Color-coded legend for content types. Colors are theme-agnostic hues kept subtle. */
export const CALENDAR_LEGEND: { type: ContentType; tint: string }[] = [
  { type: "Reel", tint: "var(--accent)" },
  { type: "Story", tint: "#6c8cff" },
  { type: "Carousel", tint: "#48c9b0" },
  { type: "UGC", tint: "#c77dff" },
  { type: "Rest", tint: "var(--text-muted)" },
];

export const FOOTER = {
  blurb:
    "Content systems and cinematic social media for businesses that demand to be seen.",
  copyright: "© 2026 Barq Media.",
  socials: [
    { name: "Instagram", href: "#", icon: "Instagram" },
    { name: "Facebook", href: "#", icon: "Facebook" },
    { name: "LinkedIn", href: "#", icon: "Linkedin" },
    { name: "YouTube", href: "#", icon: "Youtube" },
  ],
  columns: {
    studio: {
      title: "Studio",
      links: [
        { label: "What We Do", href: "/#capabilities" },
        { label: "How We Work", href: "/#process" },
        { label: "Services", href: "/#services" },
        { label: "About", href: "/#about" },
        { label: "Careers", href: "/careers" },
        { label: "Ecosystem", href: "/ecosystem" },
      ],
    },
    platforms: {
      title: "Platforms",
      links: [
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "YouTube", href: "#" },
      ],
    },
  },
  contactNote: "Currently open to new clients",
  signature: "Made with obsession.",
} as const;

/** Careers — open roles surfaced on /careers. */
export const CAREERS = {
  intro:
    "We're a young studio with something to prove. If you think in hooks, obsess over the first 3 seconds, and want to build a portfolio that actually moves numbers, we want to hear from you.",
  perks: [
    "Real client work from week one, no busywork",
    "Direct mentorship from the founding team",
    "Remote-first, India hours, flexible",
    "Certificate + letter of recommendation on completion",
  ],
  openings: [
    {
      title: "Social Media Marketing Intern",
      type: "Internship · Remote",
      openings: 2,
      blurb:
        "Plan, script, and ship short-form content (Reels, Shorts, carousels) across Instagram, YouTube and LinkedIn. Track what performs and iterate fast.",
      responsibilities: [
        "Draft hooks, captions, and short-form scripts",
        "Schedule and publish across platforms",
        "Track retention, saves, and reach; report what works",
        "Research trends, sounds, and competitor angles",
      ],
    },
  ],
} as const;

/**
 * Ecosystem — the family of brands Barq Media belongs to.
 * NOTE: brand blurbs below are placeholders — adjust to the real positioning.
 */
export const ECOSYSTEM = {
  parent: "Infinity Ventures",
  intro:
    "Barq Media is a unit of Infinity Ventures, a small ecosystem of independent brands that share craft, standards, and people.",
  brands: [
    {
      name: "Barqova",
      domain: "barqova.com",
      url: "https://barqova.com",
      blurb: "The creative studio and engineering craft behind the ecosystem.",
      current: false,
    },
    {
      name: "Barq Media",
      domain: "barqmedia.in",
      url: "https://barqmedia.in",
      blurb: "Content systems, cinematic reels, and brand strategy.",
      current: true,
    },
    {
      name: "Matrix Event",
      domain: "matrixevent.in",
      url: "https://matrixevent.in",
      blurb: "Events, experiences, and on-ground production.",
      current: false,
    },
    {
      name: "Inkqova",
      domain: "inkqova.com",
      url: "https://inkqova.com",
      blurb: "Writing, editorial, and brand storytelling in print.",
      current: false,
    },
  ],
  note: "Barqova Technologies is registered separately but operates within the same ecosystem.",
} as const;
