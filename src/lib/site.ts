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

// Placeholder — replaced with the final research-confirmed list (ai/research/05-topical-map/topical-map.md)
export const topics: Topic[] = [
  {
    slug: "open-cell-vs-closed-cell-chemistry",
    name: "Open-Cell vs. Closed-Cell Chemistry",
    shortName: "Cell Chemistry",
    summary: "The polyurethane chemistry that separates open-cell and closed-cell spray foam, and what it means for performance.",
  },
  {
    slug: "r-value-thermal-performance",
    name: "R-Value & Thermal Performance",
    shortName: "R-Value & Thermal",
    summary: "How spray foam's R-value is measured, why it differs by product, and what actually drives real-world thermal performance.",
  },
  {
    slug: "off-ratio-curing-science",
    name: "Off-Ratio & Curing Science",
    shortName: "Off-Ratio & Curing",
    summary: "What happens chemically when spray foam is mixed off-ratio, and how proper curing conditions prevent failure.",
  },
  {
    slug: "moisture-vapor-barrier-physics",
    name: "Moisture & Vapor Barrier Physics",
    shortName: "Moisture & Vapor",
    summary: "How spray foam interacts with moisture and vapor drive in a wall or roof assembly, and where it can go wrong.",
  },
  {
    slug: "fire-code-compliance-science",
    name: "Fire & Code Compliance Science",
    shortName: "Fire & Code",
    summary: "The ignition-barrier and thermal-barrier code requirements that govern spray foam installations.",
  },
  {
    slug: "voc-health-safety-science",
    name: "VOC & Health & Safety Science",
    shortName: "VOC & Safety",
    summary: "What off-gassing and re-entry science actually says about spray foam installation safety.",
  },
] as const;
