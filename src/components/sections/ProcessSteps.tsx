import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const steps = [
  {
    number: "01",
    title: "Learn the Science",
    text: "Read the chemistry, thermal performance, and code-compliance topics relevant to your project before you talk to anyone selling foam.",
  },
  {
    number: "02",
    title: "Know What Questions to Ask",
    text: "Understand what off-ratio mixing, proper cure conditions, and correct thermal-barrier coverage actually look like, so you can evaluate a quote intelligently.",
  },
  {
    number: "03",
    title: "Get Matched With a Vetted Installer",
    text: "Tell us about your project and we'll connect you with a certified installer from CCA's network, at no cost and no obligation.",
  },
  {
    number: "04",
    title: "Get a Written, Accurate Quote",
    text: "A matched installer walks the property and gives you a written quote grounded in the same building science you just read about.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How to Use This Resource</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">From Research to a Real Installer</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                <span className="text-5xl font-heading font-bold text-primary/20">{step.number}</span>
                <h3 className="mt-3 text-lg font-heading font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: step.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
