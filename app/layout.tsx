import type { Metadata, Viewport } from "next";
import { Unbounded, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { NavBar } from "@/components/ui/NavBar";
import { BRAND, SITE } from "@/lib/data/site";

// Display: chunky geometric poster headline. Body: clean + warm.
const display = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const TITLE = SITE.title;

// Resolve the live host so the OG image URL is always reachable:
// explicit env -> Vercel prod domain -> Vercel deploy URL -> canonical fallback.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : SITE.url);

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${BRAND.name}`,
  },
  description: SITE.description,
  applicationName: BRAND.name,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.craftedBy.name, url: SITE.craftedBy.href }],
  creator: SITE.craftedBy.name,
  publisher: BRAND.name,
  alternates: { canonical: "/" },
  category: "Creative Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: BRAND.name,
    title: TITLE,
    description: SITE.description,
    url: "/",
    locale: SITE.locale,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — ${BRAND.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  // Favicon / app icons are provided by the app/ file convention
  // (app/icon.png, app/apple-icon.png, app/favicon.ico) — auto-linked by Next.
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

/** Organization + WebSite structured data — links BARQ Media ⇄ Barqova for search. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: BRAND.name,
      alternateName: ["Barqova", "BARQ", "BARQ Media Studio"],
      url: SITE.url,
      email: BRAND.email,
      slogan: BRAND.tagline,
      description: BRAND.subTagline,
      logo: `${SITE.url}${SITE.icon}`,
      foundingDate: "2025",
      areaServed: "Worldwide",
      sameAs: [
        SITE.craftedBy.href,
        SITE.social.instagram,
        SITE.social.youtube,
        SITE.social.linkedin,
      ],
      creator: {
        "@type": "Organization",
        name: SITE.craftedBy.name,
        url: SITE.craftedBy.href,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: BRAND.name,
      alternateName: "Barqova",
      description: BRAND.subTagline,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <head>
        {/* Apply persisted theme before paint to prevent a flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Structured data for search engines. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <SmoothScroll>
            <NavBar />
            <main>{children}</main>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
