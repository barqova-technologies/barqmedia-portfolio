import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Careers } from "@/components/sections/Careers";
import { Footer } from "@/components/sections/Footer";
import { BRAND } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Barq Media. We're hiring Social Media Marketing Interns. Real client work, direct mentorship, remote-first.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: `Careers · ${BRAND.name}`,
    description:
      "Join Barq Media. Real client work, direct mentorship, remote-first.",
    url: "/careers",
    type: "website",
  },
};

export default function CareersPage() {
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
        <Careers />
      </div>
      <Footer />
    </>
  );
}
