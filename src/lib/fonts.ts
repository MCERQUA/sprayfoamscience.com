import { Lexend, Inter } from "next/font/google";

// Provisional pairing — reconciled against ai/research/design-system.md (Stitch) once generated.
export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const headingFont = Lexend({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});
