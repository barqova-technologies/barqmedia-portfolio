/** Manifesto statements ("Our Thinking") — authority through point of view. */

export interface ManifestoStatement {
  label: string;
  /** Lines render as separate flowing rows of headline-sized type. */
  lines: string[];
}

export const MANIFESTO: ManifestoStatement[] = [
  {
    label: "On Content",
    lines: [
      "Most brands post.",
      "We build systems.",
      "There's a difference between",
      "throwing content at the algorithm",
      "and engineering content that compounds.",
    ],
  },
  {
    label: "On Reels",
    lines: [
      "The first 3 seconds decide everything.",
      "We script for the hook before we think about the story.",
      "Retention is a design problem.",
      "We treat it like one.",
    ],
  },
  {
    label: "On Brands",
    lines: [
      "Your Instagram is not a portfolio.",
      "It's a first impression that happens",
      "ten thousand times a day.",
      "It should feel like something.",
    ],
  },
];

/** Accent bar wedged between statements 2 and 3. */
export const MANIFESTO_INTERLUDE = "Scroll. Stop. Feel something. That's the goal.";
