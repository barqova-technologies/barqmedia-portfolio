/**
 * Capabilities bento grid ("What We Bring").
 * `visual` selects the unique CSS/SVG texture rendered inside each card.
 * `span` drives the asymmetric 4-column bento layout.
 */

export type CapabilityVisual =
  | "motion"
  | "blocks"
  | "calendar"
  | "slides"
  | "bars"
  | "swatches";

export interface Capability {
  id: string;
  label: string;
  title: string;
  copy: string;
  visual: CapabilityVisual;
  /** Short keyword pills shown in the card's text zone. */
  tags: string[];
  /** Tailwind grid spans for the desktop bento. */
  span: string;
}

export const CAPABILITIES: Capability[] = [
  {
    id: "reels",
    label: "Cinematic Reels",
    title: "Cinematic Reels",
    copy: "Hook-driven short-form video engineered for maximum watch time and shares.",
    visual: "motion",
    tags: ["Hooks", "Watch-time", "Sound design", "Shares"],
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "identity",
    label: "Brand Identity",
    title: "Brand Identity",
    copy: "Visual systems built for screens, not adapted from print.",
    visual: "blocks",
    tags: ["Screen-first", "Systems", "Type"],
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "strategy",
    label: "Content Strategy",
    title: "Content Strategy",
    copy: "Platforms, pillars, cadence. A full system, not a content calendar PDF.",
    visual: "calendar",
    tags: ["Pillars", "Cadence", "Platforms"],
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "carousels",
    label: "Carousels & Edu-Content",
    title: "Carousels & Edu-Content",
    copy: "Educational carousels that teach, sell, and get saved.",
    visual: "slides",
    tags: ["Educational", "Saves", "Swipe"],
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "paid",
    label: "Paid Social Campaigns",
    title: "Paid Social Campaigns",
    copy: "Creative-led Meta and Google campaigns. We write the ads, design the creatives, optimize for real outcomes.",
    visual: "bars",
    tags: ["Meta Ads", "Google Ads", "Creatives", "Optimization"],
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: "direction",
    label: "Creative Direction",
    title: "Creative Direction",
    copy: "Monthly vision-setting for brands that have a team but need a taste-maker.",
    visual: "swatches",
    tags: ["Moodboards", "Vision", "Monthly"],
    span: "md:col-span-1 md:row-span-1",
  },
];
