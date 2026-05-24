"use client";

import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { BRAND, FOOTER, SITE } from "@/lib/data/site";

/** Minimal premium footer — 4 columns desktop, stacked mobile. */
export function Footer() {
  return (
    <footer
      aria-label="Footer"
      className="relative border-t border-border-accent bg-bg-primary"
      style={{ boxShadow: "0 -1px 20px var(--accent-glow)" }}
    >
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — brand */}
          <div className="flex flex-col gap-4">
            <Logo className="h-14" />
            <p className="max-w-xs font-body text-[14px] leading-relaxed text-text-secondary">
              {FOOTER.blurb}
            </p>
            <p className="font-body text-[13px] text-text-muted">
              {FOOTER.copyright}
            </p>
            <ul className="mt-1 flex gap-4">
              {FOOTER.socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    aria-label={s.name}
                    className="block text-text-muted transition-colors duration-200 hover:text-accent"
                  >
                    <Icon name={s.icon} size={20} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 — studio */}
          <FooterColumn
            title={FOOTER.columns.studio.title}
            links={FOOTER.columns.studio.links}
          />

          {/* Col 3 — platforms */}
          <FooterColumn
            title={FOOTER.columns.platforms.title}
            links={FOOTER.columns.platforms.links}
          />

          {/* Col 4 — get in touch */}
          <div className="flex flex-col gap-3">
            <h3 className="font-body text-label uppercase text-text-secondary">
              Get In Touch
            </h3>
            <a
              href={`mailto:${BRAND.email}`}
              className="font-body text-[15px] text-text-primary transition-colors duration-200 hover:text-accent"
            >
              {BRAND.email}
            </a>
            <p className="font-body text-[13px] text-text-secondary">
              {BRAND.hours}
            </p>
            <a
              href="/book"
              className="group inline-flex items-center gap-1 font-body text-[14px] font-semibold text-accent"
            >
              Book a Call
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
            <p className="font-body text-[13px] text-text-muted">
              {FOOTER.contactNote}
            </p>
          </div>
        </div>

        <p className="mt-16 text-center font-body text-[11px] text-text-muted">
          {FOOTER.signature} · Crafted by{" "}
          <a
            href={SITE.craftedBy.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-text-secondary transition-colors duration-200 hover:text-accent"
          >
            {SITE.craftedBy.name}
          </a>
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-body text-label uppercase text-text-secondary">
        {title}
      </h3>
      <ul className="flex flex-col gap-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="font-body text-[14px] text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
