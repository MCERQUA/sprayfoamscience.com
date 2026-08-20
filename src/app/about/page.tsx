import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { Stats } from "@/components/sections/Stats";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { site } from "@/lib/site";
import { BookOpenCheck, ShieldCheck, ScanSearch } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.businessName} is a technical resource on spray foam building science, backed by Contractors Choice Agency.`,
};

const values = [
  {
    icon: BookOpenCheck,
    title: "Accuracy Over Advocacy",
    text: "Every page covers failure modes and limitations honestly, alongside genuine performance benefits &mdash; not a one-sided sales case.",
  },
  {
    icon: ScanSearch,
    title: "Root-Cause Explanations",
    text: "Problems are explained by their actual chemistry and physics &mdash; off-ratio mixing, moisture drive, substrate prep &mdash; not vague warnings.",
  },
  {
    icon: ShieldCheck,
    title: "Backed by Former-Contractor Experience",
    text: "Written with 20+ years of Contractors Choice Agency's contractor-side experience behind it, not a manufacturer's marketing department.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              A Technical Resource, Not a Sales Page
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Most spray foam content online comes from a manufacturer or an installer with an
              obvious incentive to only tell one side of the story. {site.businessName} exists to
              cover the actual building science &mdash; chemistry, thermal performance, moisture
              physics, and code compliance &mdash; including the failure modes and reputation
              concerns that a sales-driven site has no reason to explain honestly.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We're backed by Contractors Choice Agency, bringing over 20 years of former-contractor
              experience to every article. When you're ready to talk to someone, we connect you with
              a certified, insured installer from CCA's network &mdash; free, with no obligation, and
              only after you've had a chance to actually understand the science first.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/about-credibility.jpg" alt={`${site.businessName} technical resource`} fill className="object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">How We Write</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-8 rounded-xl bg-card border border-border h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: value.text }} />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <Stats />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">A Network That Covers the Country</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              When you're ready for a quote, CCA's installer network reaches homeowners nationwide
              &mdash; the fastest way to get matched is a free installer request.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
