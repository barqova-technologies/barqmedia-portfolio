import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Booking } from "@/components/sections/Booking";
import { Footer } from "@/components/sections/Footer";
import { BRAND } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book a free 15-minute strategy call with BARQ Media (Barqova). No lock-in, response within 24 hours.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: `Book a Call · ${BRAND.name}`,
    description: "Book a free 15-minute strategy call with BARQ Media.",
    url: "/book",
    type: "website",
  },
};

export default function BookPage() {
  return (
    <>
      {/* pt clears the fixed navbar */}
      <div className="min-h-screen pt-20">
        <div className="mx-auto max-w-7xl px-5 pt-8 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-[14px] text-text-secondary transition-colors duration-200 hover:text-accent"
          >
            <ArrowLeft size={16} />
            Back to site
          </Link>
        </div>
        <Booking />
      </div>
      <Footer />
    </>
  );
}
