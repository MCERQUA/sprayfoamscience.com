export const site = {
  businessName: "Spray Foam Science",
  tagline: "The Building Science Behind Spray Foam Insulation",
  domain: "sprayfoamscience.com",
  url: "https://www.sprayfoamscience.com",
  phone: "844-967-5247",
  phoneDigits: "+18449675247",
  email: "josh@contractorschoiceagency.com",
  address: {
    street: "12220 E Riggs Rd",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
  },
  addressFull: "12220 E Riggs Rd, Chandler, AZ 85249",
} as const;

export interface Topic {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
}

// Final list confirmed by niche research (ai/research/05-topical-map/topical-map.md)
// Ordered to lead with real-search-volume fundamentals, then the differentiated
// "reputation risk" angle the keyword data surfaced as the open competitive lane.
export const topics: Topic[] = [
  {
    slug: "open-cell-vs-closed-cell-chemistry",
    name: "Open-Cell vs. Closed-Cell Chemistry",
    shortName: "Cell Chemistry",
    summary: "The polyurethane chemistry that separates open-cell and closed-cell spray foam, and what it actually means for performance.",
  },
  {
    slug: "r-value-thermal-performance",
    name: "R-Value & Real-World Thermal Performance",
    shortName: "R-Value & Thermal",
    summary: "How spray foam's R-value is measured, why lab and field numbers diverge, and what actually drives thermal performance in a real assembly.",
  },
  {
    slug: "why-spray-foam-becomes-a-red-flag",
    name: "Why Spray Foam Becomes a “Red Flag” — The Reputation Science",
    shortName: "The Reputation Problem",
    summary: "The building-science reasons some spray foam jobs turn into resale, insurance, and mold problems — and why it almost always traces back to installation, not the material.",
  },
  {
    slug: "off-ratio-improper-cure-science",
    name: "Off-Ratio & Improper Cure Science",
    shortName: "Off-Ratio & Cure",
    summary: "What happens chemically when spray foam is mixed off-ratio, how it causes shrinkage and odor complaints, and how proper application prevents it.",
  },
  {
    slug: "moisture-vapor-barrier-physics",
    name: "Moisture & Vapor Barrier Physics",
    shortName: "Moisture & Vapor",
    summary: "How spray foam interacts with moisture and vapor drive in a wall or roof assembly, and where it can trap water if installed wrong.",
  },
  {
    slug: "diy-kits-vs-professional-application",
    name: "DIY Kits vs. Professional Application",
    shortName: "DIY vs. Professional",
    summary: "Why ratio control and application equipment — not the chemistry itself — is what a small DIY kit usually can't replicate.",
  },
  {
    slug: "fire-code-compliance-science",
    name: "Fire & Code Compliance Science",
    shortName: "Fire & Code",
    summary: "The ignition-barrier and thermal-barrier code requirements that govern where and how spray foam can be installed.",
  },
] as const;
