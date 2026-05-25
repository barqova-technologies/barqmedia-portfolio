import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Footer } from "@/components/sections/Footer";
import { BRAND, ECOSYSTEM } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Ecosystem",
  description: `Barq Media is a unit of ${ECOSYSTEM.parent}, an ecosystem of independent brands sharing craft, standards, and people.`,
  alternates: { canonical: "/ecosystem" },
  openGraph: {
    title: `Ecosystem · ${BRAND.name}`,
    description: `Barq Media is a unit of ${ECOSYSTEM.parent}.`,
    url: "/ecosystem",
    type: "website",
  },
};

export default function EcosystemPage() {
  return (
    <>
      {/* pt clears the fixed navbar */}
      <div className="min-h-screen pt-20">
        <div className="mx-auto max-w-5xl px-5 pt-8 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-[14px] text-text-secondary transition-colors duration-200 hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to site
          </Link>
        </div>
        <Ecosystem />
      </div>
      <Footer />
    </>
  );
}
