import { BRAND } from "@/lib/data/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

/** Floating WhatsApp connect button — fixed bottom-right on every page. */
export function WhatsAppFloat() {
  return (
    <a
      href={BRAND.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${BRAND.name} on WhatsApp at ${BRAND.phoneDisplay}`}
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_-6px_rgba(37,211,102,0.6)] transition-transform duration-200 hover:scale-110 hover:shadow-[0_14px_36px_-6px_rgba(37,211,102,0.85)] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
      />
      <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
