import localFont from "next/font/local";

// Font pairing locked by the Stitch design system (ai/research/design-system.md) —
// a serif body face for long-form article readability, distinct from the sans-only
// pairings used on the other CCA sites in this batch.
export const bodyFont = localFont({
  src: [{ path: "./fonts/SourceSerif4-variable.woff2", weight: "200 900", style: "normal" }],
  variable: "--font-body",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

export const headingFont = localFont({
  src: [
    { path: "./fonts/SpaceGrotesk-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/SpaceGrotesk-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/SpaceGrotesk-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});
