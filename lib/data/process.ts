/** Cinematic timeline ("From Brief to Scroll-Stop") — 5 steps. */

export interface ProcessStep {
  step: number;
  title: string;
  copy: string;
  time: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    copy: "We learn your brand, your audience, your competitors, and your goals. No assumptions. Just questions and listening.",
    time: "Day 1–3",
  },
  {
    step: 2,
    title: "Strategy",
    copy: "Platform selection, content pillars, posting cadence, format mix. A full system on paper before a single frame is shot.",
    time: "Day 4–7",
  },
  {
    step: 3,
    title: "Create",
    copy: "Scripting, direction, editing, captions, sound design. Every piece is built to stop the scroll in the first 3 seconds.",
    time: "Ongoing",
  },
  {
    step: 4,
    title: "Publish & Test",
    copy: "We go live, monitor real-time, and A/B test hooks, thumbnails, and copy. Week one tells us everything.",
    time: "Week 2",
  },
  {
    step: 5,
    title: "Review & Scale",
    copy: "Monthly strategy calls, performance analysis, format expansion. We don't set and forget. We iterate.",
    time: "Monthly",
  },
];
