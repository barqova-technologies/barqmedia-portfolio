"use client";

import {
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  Search,
  Clapperboard,
  GalleryHorizontal,
  Compass,
  Palette,
  LayoutGrid,
  Users,
  Megaphone,
  Film,
  Coffee,
  Dumbbell,
  Shirt,
  Building2,
  Sparkles,
  User,
  ShoppingBag,
  Hotel,
  Briefcase,
  Zap,
  type LucideProps,
} from "lucide-react";

/** Maps the string `icon` keys used in `lib/data/*` to lucide-react components. */
const ICONS = {
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
  Search,
  Clapperboard,
  GalleryHorizontal,
  Compass,
  Palette,
  LayoutGrid,
  Users,
  Megaphone,
  Film,
  Coffee,
  Dumbbell,
  Shirt,
  Building2,
  Sparkles,
  User,
  ShoppingBag,
  Hotel,
  Briefcase,
  Zap,
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = ICONS[name as IconName];
  if (!Cmp) return null;
  return <Cmp {...props} />;
}
