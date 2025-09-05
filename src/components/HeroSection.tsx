import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 border border-primary-foreground rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-primary-foreground rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
            Enerlake:
            <br />
            <span className="text-4xl lg:text-6xl font-light">
              Powering the Future of Yield
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl font-light mb-8 text-primary-foreground/90 max-w-3xl mx-auto text-balance">
            Tokenized access to real-world energy infrastructure — from EV chargers to batteries.
          </p>

          {/* Value Proposition */}
          <p className="text-lg mb-12 text-primary-foreground/80 max-w-2xl mx-auto text-balance">
            Invest in the energy transition with transparent cash flows, secured structures, and institutional-grade trust.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 shadow-elegant hover:shadow-lift transition-smooth group"
            >
              Explore Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-smooth group"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Join Waitlist
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-16 border-t border-primary-foreground/20">
            <p className="text-sm text-primary-foreground/60 mb-6">Trusted by institutional investors</p>
            <div className="flex items-center justify-center space-x-12 opacity-60">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-24 h-8 bg-primary-foreground/20 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;