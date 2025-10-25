import { Card } from "@/components/ui/card";
import { Dna, Brain, Shield, Zap, Activity, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Dna,
      title: "Genetic Analysis",
      description: "Deep DNA sequencing and analysis to predict hereditary health risks and personalized wellness insights.",
      color: "primary",
    },
    {
      icon: Brain,
      title: "AI-Powered Diagnosis",
      description: "Advanced neural networks analyze medical scans with 99.9% accuracy to detect anomalies early.",
      color: "accent",
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Your health data encrypted and stored on blockchain. You control who accesses your information.",
      color: "success",
    },
    {
      icon: Zap,
      title: "Real-Time Monitoring",
      description: "Continuous health tracking with instant alerts for any concerning changes in your metrics.",
      color: "primary",
    },
    {
      icon: Activity,
      title: "Predictive Analytics",
      description: "Machine learning models forecast future health risks years in advance for proactive prevention.",
      color: "accent",
    },
    {
      icon: Lock,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security meeting all healthcare data protection standards and regulations.",
      color: "success",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powered by <span className="gradient-text">Advanced Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining artificial intelligence, blockchain, and genetic science to revolutionize personal healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border/50 shadow-card hover:border-primary/30 transition-all duration-300 hover:shadow-glow cursor-pointer overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative p-6 space-y-4">
                <div className={`bg-${feature.color}/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-bold">{feature.title}</h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
