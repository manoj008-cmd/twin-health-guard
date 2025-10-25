import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, Brain, Activity, TrendingUp, Shield, AlertCircle } from "lucide-react";

const Dashboard = () => {
  const healthMetrics = [
    { label: "Cardiovascular", value: 92, icon: Heart, status: "healthy" },
    { label: "Neural Activity", value: 88, icon: Brain, status: "healthy" },
    { label: "Metabolic Rate", value: 95, icon: Activity, status: "healthy" },
    { label: "Risk Assessment", value: 13, icon: AlertCircle, status: "warning" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Your Health <span className="gradient-text">Twin Dashboard</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time AI analysis of your complete health profile with predictive insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Health Score */}
          <Card className="lg:col-span-2 bg-gradient-card border-primary/20 shadow-card overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Overall Health Score</h3>
                  <p className="text-muted-foreground">Based on AI analysis of all data points</p>
                </div>
                <Badge className="bg-success/20 text-success border-success/30">Healthy</Badge>
              </div>

              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-muted/20"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#gradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={552}
                      strokeDashoffset={552 - (552 * 87) / 100}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(263 70% 50%)" />
                        <stop offset="100%" stopColor="hsl(188 95% 50%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl font-bold gradient-text">87%</div>
                      <div className="text-sm text-muted-foreground mt-1">Healthy</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {healthMetrics.map((metric, index) => (
                  <div key={index} className="p-4 rounded-lg bg-background/50 border border-border/50">
                    <div className="flex items-center gap-2 mb-3">
                      <metric.icon className={`w-4 h-4 ${
                        metric.status === "healthy" ? "text-success" : "text-destructive"
                      }`} />
                      <span className="text-sm font-medium">{metric.label}</span>
                    </div>
                    <Progress value={metric.value} className="h-2 mb-2" />
                    <div className="text-xs text-muted-foreground">{metric.value}%</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Side Cards */}
          <div className="space-y-6">
            {/* Blockchain Verification */}
            <Card className="bg-gradient-card border-accent/20 shadow-card">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold">Blockchain Secured</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status</span>
                    <span className="text-success font-medium">Verified ✓</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Records</span>
                    <span className="font-medium">24</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Hash</span>
                    <span className="font-mono text-xs">0x7a9f...3e2d</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/50">
                  <div className="text-xs text-muted-foreground">
                    Last updated: 2 minutes ago
                  </div>
                </div>
              </div>
            </Card>

            {/* AI Insights */}
            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">AI Insights</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                    <div className="text-xs font-medium text-success mb-1">Positive Trend</div>
                    <div className="text-xs text-muted-foreground">
                      Cardiovascular health improved 5% this month
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                    <div className="text-xs font-medium text-accent mb-1">Recommendation</div>
                    <div className="text-xs text-muted-foreground">
                      Consider vitamin D supplementation
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
