import { Icon } from "./Icon";
import { TICKER_ROW_ONE, TICKER_ROW_TWO } from "@/lib/data/site";

type Item = { label: string; icon: string };

function Row({
  items,
  direction,
}: {
  items: readonly Item[];
  direction: "left" | "right";
}) {
  // Duplicate the set so the -50% keyframe loops seamlessly.
  const doubled = [...items, ...items];
  return (
    <div className="flex w-max">
      <div
        className={
          direction === "left"
            ? "flex w-max animate-marquee-left"
            : "flex w-max animate-marquee-right"
        }
      >
        {doubled.map((item, i) => (
          <span
            key={`${item.label}-${i}`}
            className="flex items-center gap-3 px-6 font-body text-[18px] text-text-muted"
          >
            <Icon name={item.icon} size={18} aria-hidden />
            <span>{item.label}</span>
            <span aria-hidden className="ml-6 text-text-muted">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Full-width two-row infinite CSS marquee (no JS). */
export function PlatformTicker() {
  return (
    <section
      aria-label="What we work with"
      className="overflow-hidden border-y border-border bg-bg-secondary py-10"
    >
      <div className="flex flex-col gap-6">
        <div className="overflow-hidden">
          <Row items={TICKER_ROW_ONE} direction="left" />
        </div>
        <div className="overflow-hidden">
          <Row items={TICKER_ROW_TWO} direction="right" />
        </div>
      </div>
    </section>
  );
}
