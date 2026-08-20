import { FlaskConical, Ruler, ShieldAlert, Users } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const points = [
  {
    icon: FlaskConical,
    title: "Chemistry First, Marketing Second",
    text: "Every article starts from the actual polyurethane chemistry and building physics involved &mdash; not a sales angle dressed up as science.",
  },
  {
    icon: Ruler,
    title: "Real Numbers, Not Rounded Marketing Claims",
    text: "R-value ranges, cure-time windows, and code thresholds are presented as the ranges they actually are, not a single flattering number.",
  },
  {
    icon: ShieldAlert,
    title: "We Cover Failure Modes, Not Just Benefits",
    text: "Off-ratio mixing, moisture entrapment, and code violations get the same honest treatment as the performance benefits.",
  },
  {
    icon: Users,
    title: "Backed by Former-Contractor Experience",
    text: "Written with 20+ years of Contractors Choice Agency's contractor-side experience behind it &mdash; not a manufacturer's marketing department.",
  },
];

export function WhyThisMatters() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why This Resource Exists</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Most Spray Foam Content Is Marketing. This Isn&apos;t.</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div className="p-8 rounded-xl bg-card border border-border h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: point.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
