import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Asset Onboarding",
      description: "Infrastructure providers bring proven energy assets (chargers, batteries, solar) into an SPV.",
      icon: "🏗️"
    },
    {
      number: "02", 
      title: "Tokenization",
      description: "Rights to project revenues are issued as blockchain tokens, fully backed by contracts and custodians.",
      icon: "🔗"
    },
    {
      number: "03",
      title: "Investor Access", 
      description: "Investors earn regular yields from real-world energy cash flows.",
      icon: "💰"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Three simple steps to access institutional-grade energy infrastructure investments
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <Card className="h-full shadow-lift hover:shadow-elegant transition-smooth border-accent/20">
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-6">{step.icon}</div>
                    <div className="text-sm font-bold text-accent-strong mb-2 tracking-wider">
                      STEP {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-accent-strong" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Flowchart Placeholder */}
          <div className="bg-card rounded-2xl p-8 shadow-lift border">
            <h3 className="text-2xl font-bold text-center mb-6">Revenue Waterfall Structure</h3>
            <div className="bg-muted rounded-xl p-12 text-center">
              <div className="text-muted-foreground">
                <p className="text-lg mb-4">Revenue Waterfall Diagram</p>
                <p className="text-sm">Detailed flowchart showing how revenue flows from energy assets to investors</p>
                <div className="mt-8 h-48 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground/60">Flowchart Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;