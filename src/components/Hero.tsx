import { Button } from "@/components/ui/button";
import { Upload, Shield, Brain } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 animate-pulse"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 2 + "s",
              animationDuration: Math.random() * 3 + 2 + "s",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-block">
            <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="text-sm font-medium gradient-text">
                AI + Blockchain • Genetic Health Intelligence
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Your Digital <span className="gradient-text">Health Twin</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Smart. Secure. Personalized. AI-powered health monitoring with complete data ownership through blockchain.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">AI Analysis</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Blockchain Security</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
              <Upload className="w-5 h-5 text-success" />
              <span className="text-sm font-medium">Instant Upload</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" className="group">
              Get Started
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold gradient-text">99.9%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold gradient-text">256-bit</div>
              <div className="text-sm text-muted-foreground">Encryption</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold gradient-text">&lt;2s</div>
              <div className="text-sm text-muted-foreground">Analysis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
