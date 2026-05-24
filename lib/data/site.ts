/** Brand identity, navigation, platforms, ticker, calendar, footer — all copy. */

export const BRAND = {
  name: "BARQ Media",
  shortName: "BARQ",
  tagline: "Built For Attention.",
  subTagline:
    "Content systems, cinematic reels, and brand strategy for businesses that refuse to be ignored.",
  email: "hello@barqmedia.in",
  location: "India · Working Globally",
  hours: "Available Mon–Sat, 10am–7pm IST",
  established: "Est. 2025",
  availability: "Currently accepting new clients for Q3 2026",
} as const;

/** Canonical site + SEO config. Used by metadata, sitemap, robots, JSON-LD. */
export const SITE = {
  url: "https://barqmedia.in",
  ogImage: "/barq-logo-light.png",
  locale: "en_US",
  craftedBy: { name: "Barqova", href: "https://barqova.com" },
  // Both brands surfaced so searches for "BARQ Media" and "Barqova" resolve here.
  keywords: [
    "BARQ Media",
    "Barqova",
    "BARQ Media studio",
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
  { name: "YouTube Shorts", icon: "Youtube" },
  { name: "LinkedIn", icon: "Linkedin" },
  { name: "Meta Ads", icon: "Facebook" },
] as const;

// Absolute hashes ("/#...") so the nav works from any route (e.g. /book), not
// just the home page.
export const NAV_LINKS = [
  { label: "What We Do", href: "/#capabilities" },
  { label: "How We Work", href: "/#process" },
  { label: "Our Thinking", href: "/#manifesto" },
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
  copyright: "© 2026 BARQ Media.",
  socials: [
    { name: "Instagram", href: "#", icon: "Instagram" },
    { name: "YouTube", href: "#", icon: "Youtube" },
    { name: "LinkedIn", href: "#", icon: "Linkedin" },
  ],
  columns: {
    studio: {
      title: "Studio",
      links: [
        { label: "What We Do", href: "/#capabilities" },
        { label: "How We Work", href: "/#process" },
        { label: "Services", href: "/#services" },
        { label: "About", href: "/#about" },
      ],
    },
    platforms: {
      title: "Platforms",
      links: [
        { label: "Instagram", href: "#" },
        { label: "YouTube Shorts", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Meta Ads", href: "#" },
      ],
    },
  },
  contactNote: "Currently open to new clients",
  signature: "Made with obsession.",
} as const;
