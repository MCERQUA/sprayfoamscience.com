import { Space_Grotesk, Source_Serif_4 } from "next/font/google";

// Font pairing locked by the Stitch design system (ai/research/design-system.md) —
// a serif body face for long-form article readability, distinct from the sans-only
// pairings used on the other CCA sites in this batch.
export const bodyFont = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});
