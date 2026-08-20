import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { site, topics } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Science",
  description:
    "The building science behind spray foam insulation: chemistry, R-value, moisture physics, off-ratio failures, DIY vs professional application, and fire code compliance.",
};

const topicImages: Record<string, string> = {
  "open-cell-vs-closed-cell-chemistry": "/images/topic-chemistry.jpg",
  "r-value-thermal-performance": "/images/topic-thermal-performance.jpg",
  "why-spray-foam-becomes-a-red-flag": "/images/hero-cross-section.jpg",
  "off-ratio-improper-cure-science": "/images/topic-chemistry.jpg",
  "moisture-vapor-barrier-physics": "/images/topic-moisture-vapor.jpg",
  "diy-kits-vs-professional-application": "/images/hero-application.jpg",
  "fire-code-compliance-science": "/images/topic-fire-code.jpg",
};

export default function TopicsIndexPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} />

      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Science</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold">Spray Foam, Explained Accurately</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Seven in-depth topics covering the chemistry, physics, and code science behind spray
              foam insulation &mdash; including the parts marketing usually skips.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {topics.map((topic) => (
              <StaggerItem key={topic.slug}>
                <Link href={`/topics/${topic.slug}`} className="group block h-full">
                  <article className="rounded-xl overflow-hidden bg-card border border-border group-hover:border-primary/40 transition-colors h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={topicImages[topic.slug]} alt={topic.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h2 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">{topic.name}</h2>
                      <p className="mt-2 text-sm text-muted-foreground flex-grow">{topic.summary}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Read the science <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
