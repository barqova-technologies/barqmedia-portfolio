"use client";

import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import { LOGO_DARK, LOGO_LIGHT } from "@/lib/themes";
import { BRAND } from "@/lib/data/site";
import { cn } from "@/lib/utils";

/**
 * BARQ logo (shutter + lightning bolt + wordmark). Swaps asset by theme so the
 * mark stays visible: white-stroke logo on dark backgrounds, dark logo on light.
 *
 * `bg` overrides the auto theme pick when the logo sits on a known backdrop —
 * e.g. the navbar overlays the always-black Hero before scroll, so it forces
 * `bg="dark"` to stay visible even in the light Chrome theme.
 */
export function Logo({
  className,
  priority = false,
  bg,
}: {
  className?: string;
  priority?: boolean;
  bg?: "dark" | "light";
}) {
  const { logoSrc } = useTheme();
  const src =
    bg === "dark" ? LOGO_DARK : bg === "light" ? LOGO_LIGHT : logoSrc;
  return (
    <Image
      src={src}
      alt={`${BRAND.name} logo`}
      width={1536}
      height={1024}
      priority={priority}
      sizes="280px"
      className={cn(
        "h-auto w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]",
        className
      )}
    />
  );
}
