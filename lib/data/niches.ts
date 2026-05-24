/** "Who We're Built For" — niche pills + honest comparison grid (no fake stats). */

export interface Niche {
  icon: string; // lucide-react export name
  label: string;
}

export const NICHES: Niche[] = [
  { icon: "Coffee", label: "Cafés & Restaurants" },
  { icon: "Dumbbell", label: "Fitness & Wellness" },
  { icon: "Shirt", label: "Fashion & Streetwear" },
  { icon: "Building2", label: "Real Estate" },
  { icon: "Sparkles", label: "Beauty & Skincare" },
  { icon: "User", label: "Personal Brands & Founders" },
  { icon: "ShoppingBag", label: "D2C & E-commerce" },
  { icon: "Hotel", label: "Hospitality & Travel" },
  { icon: "Briefcase", label: "Professional Services" },
  { icon: "Zap", label: "SaaS & Tech Startups" },
];

/** Left = what most brands get (struck through), right = what BARQ delivers. */
export const COMPARISON: { bad: string; good: string }[] = [
  { bad: "Generic Canva templates", good: "Cinematic, scroll-stopping visuals" },
  { bad: "Random posting schedule", good: "Engineered content systems" },
  { bad: "Vanity metrics", good: "Content built for real business outcomes" },
  { bad: "One-size-fits-all captions", good: "Voice-matched copy per platform" },
  { bad: "Set and forget", good: "Monthly strategy iteration" },
];
