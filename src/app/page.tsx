import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TopicsGrid } from "@/components/sections/TopicsGrid";
import { WhyThisMatters } from "@/components/sections/WhyThisMatters";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Stats } from "@/components/sections/Stats";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

const homeFAQs = [
  {
    question: "Why is spray foam insulation now considered a “red flag” by some buyers and agents?",
    answer:
      "Almost always traceable to installation problems, not the chemistry itself: off-ratio mixing causing shrinkage or pulling away from framing, application over a damp substrate, or improper thickness for the assembly. A correctly specified, correctly installed system doesn't carry these risks the way a bad install does.",
  },
  {
    question: "Which has a higher R-value, open-cell or closed-cell spray foam?",
    answer:
      "Closed-cell typically runs about R-6 to R-7 per inch; open-cell typically runs about R-3.5 to R-3.7 per inch, because the closed, gas-filled cell structure resists heat transfer more effectively than the open, air-permeable structure.",
  },
  {
    question: "Can mold grow behind spray foam insulation?",
    answer:
      "Yes, if moisture gets trapped between the foam and the substrate — usually from applying foam to a damp surface, or a moisture-barrier design mismatch for that specific assembly. It is not a routine outcome of correctly installed foam on dry substrate.",
  },
  {
    question: "Can DIY spray foam kits achieve the same quality as professional application?",
    answer:
      "DIY kits use pre-measured, pressurized cylinders rather than a calibrated proportioning machine, so they're more exposed to ratio drift from temperature and pressure variation — the same off-ratio failure mode professional equipment is specifically built to control for.",
  },
  {
    question: "Is it safe to be in a house after spray foam installation?",
    answer:
      "Reputable manufacturers specify a re-entry time (commonly around 24 hours, varies by product) to allow off-gassing from the curing reaction to drop to safe levels. Following the manufacturer's specified re-entry time is the controlling factor.",
  },
  {
    question: "Does spray foam need to be covered by a fire barrier?",
    answer:
      "Yes, in almost every application. Occupied spaces require a thermal barrier (commonly 1/2-inch gypsum); unoccupied attics and crawlspaces require a lighter-weight ignition barrier appropriate to the specific product's code approval.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <Hero
        title="The Building Science Behind Spray Foam Insulation"
        subtitle="Chemistry, R-value, moisture physics, and code compliance — explained accurately, including the failure modes marketing usually leaves out. Backed by Contractors Choice Agency's 20+ years of contractor experience."
        image="/images/hero-application.jpg"
        imageAlt="Technician applying spray foam insulation on a job site"
      />

      <TopicsGrid />
      <WhyThisMatters />
      <ProcessSteps />
      <Stats />
      <TrustSignals />

      <FAQ
        title="Spray Foam Science, Answered"
        subtitle="Real questions people ask before starting a project."
        faqs={homeFAQs}
      />

      <CTA />
      <Footer />
    </main>
  );
}
