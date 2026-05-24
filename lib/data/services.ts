/** Engagement models ("How We Engage") — positioned as partnerships, not price lists. */

export interface Service {
  number: string;
  name: string;
  pitch: string;
  includes: string[];
  idealFor: string;
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    number: "01",
    name: "The Launchpad",
    pitch: "For brands starting from zero or restarting fresh.",
    includes: [
      "Brand audit & platform strategy",
      "30-day content sprint (12 pieces)",
      "Visual identity refresh",
      "Reporting & next-step roadmap",
    ],
    idealFor: "New businesses, personal brands, relaunch campaigns",
  },
  {
    number: "02",
    name: "The Growth Retainer",
    pitch: "Monthly creative partnership. Your content engine, fully outsourced.",
    includes: [
      "Full content calendar & strategy",
      "Cinematic reels production",
      "Carousels, stories, captions",
      "Monthly performance review",
      "Dedicated creative team",
    ],
    idealFor: "Growing brands ready to scale",
    featured: true,
  },
  {
    number: "03",
    name: "The Creative Sprint",
    pitch: "One campaign. Maximum impact.",
    includes: [
      "Campaign concept & creative direction",
      "Reel series (3–5 pieces)",
      "Paid ad creatives",
      "Launch strategy",
    ],
    idealFor: "Product launches, events, seasonal campaigns",
  },
];
