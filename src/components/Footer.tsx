import { Button } from "@/components/ui/button";
import { ArrowRight, Twitter, Linkedin, Github } from "lucide-react";
import enerlakeLogo from "@/assets/enerlake-logo.png";

const Footer = () => {
  const footerLinks = {
    Platform: [
      "How It Works",
      "Asset Types", 
      "Token Economics",
      "Security"
    ],
    Investors: [
      "Getting Started",
      "Portfolio Dashboard",
      "Risk Disclosure",
      "Tax Information"
    ],
    "Asset Owners": [
      "List Your Asset",
      "Onboarding Process",
      "Revenue Sharing",
      "Support"
    ],
    Company: [
      "About Us",
      "Team",
      "Careers",
      "Press"
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
              Ready to invest in the energy transition?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80 text-balance">
              Join Enerlake today and earn yield from real-world energy infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-6 text-lg shadow-elegant hover:shadow-lift transition-smooth group"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
              >
                List Your Asset
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={enerlakeLogo} 
                alt="Enerlake" 
                className="h-8 w-auto filter invert"
              />
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Democratizing access to energy infrastructure investments through blockchain technology and tokenization.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="md:col-span-1">
              <h3 className="font-bold mb-4 text-primary-foreground">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Enerlake. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-smooth">Risk Disclosure</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;