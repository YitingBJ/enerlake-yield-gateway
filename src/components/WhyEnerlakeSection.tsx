import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Users, Zap } from "lucide-react";

const WhyEnerlakeSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Real Assets, Real Yield",
      description: "Backed by operating energy infrastructure, not speculation. Every token represents tangible, cash-flow generating assets."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Transparent Structures", 
      description: "SPVs, custodians, and revenue waterfalls protect investors with institutional-grade legal frameworks."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Aligned Incentives",
      description: "Asset owners keep skin in the game, investors get first-priority payouts. Everyone wins when assets perform."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Liquidity & Access",
      description: "Enter and exit through digital tokens, with clear valuation models based on real asset performance."
    }
  ];

  return (
    <section id="why-enerlake" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Why Enerlake?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              The future of energy investment is here. Transparent, secure, and built for the next generation of infrastructure.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-lift hover:shadow-elegant transition-smooth border-accent/20 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-accent rounded-xl text-accent-strong group-hover:scale-110 transition-smooth">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-accent to-accent-strong rounded-2xl p-8 lg:p-12 text-center">
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">$500M+</div>
                <p className="text-lg opacity-90">Assets Under Management</p>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
                <p className="text-lg opacity-90">Uptime Guarantee</p>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">15%</div>
                <p className="text-lg opacity-90">Target Annual Yield</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEnerlakeSection;