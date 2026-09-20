import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.businessName} — The Building Science Behind Spray Foam Insulation`,
    template: `%s | ${site.businessName}`,
  },
  description:
    "The chemistry, thermal performance, and building science behind spray foam insulation — open-cell vs closed-cell, R-value, off-ratio curing, moisture physics, fire code, and VOC safety, explained accurately.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.businessName,
    title: `${site.businessName} — The Building Science Behind Spray Foam Insulation`,
    description:
      "The chemistry, thermal performance, and building science behind spray foam insulation, explained accurately.",
    images: [
      {
        url: "/images/hero-application.jpg",
        width: 1200,
        height: 630,
        alt: site.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName} — The Building Science Behind Spray Foam Insulation`,
    description:
      "The chemistry, thermal performance, and building science behind spray foam insulation, explained accurately.",
    images: ["/images/hero-application.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.businessName,
  description:
    "Technical and educational resource on the building science of spray foam insulation — chemistry, thermal performance, moisture physics, and code compliance — backed by Contractors Choice Agency.",
  url: site.url,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: "US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SmoothScroll>
          {children}
          <StickyMobileCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
