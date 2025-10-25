import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Image, Activity } from "lucide-react";

const UploadZone = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Upload Your <span className="gradient-text">Health Data</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Securely upload medical scans, genetic reports, or health records. Our AI instantly analyzes and creates your digital health twin.
          </p>
        </div>

        {/* Upload Card */}
        <Card className="relative overflow-hidden bg-gradient-card border-primary/20 shadow-card">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          
          <div className="relative p-8 md:p-12">
            {/* Drag & Drop Zone */}
            <div className="border-2 border-dashed border-primary/30 rounded-xl p-12 text-center hover:border-primary/50 transition-colors group cursor-pointer">
              <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
                  <div className="relative bg-primary/10 p-6 rounded-full">
                    <Upload className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Drop files here or click to browse</h3>
                  <p className="text-sm text-muted-foreground">
                    Supports MRI, CT, X-Ray scans, genetic reports (PDF, DICOM, PNG, JPG)
                  </p>
                </div>

                <Button variant="hero" size="lg">
                  Select Files
                </Button>
              </div>
            </div>

            {/* Supported File Types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Image className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-sm">Medical Scans</div>
                  <div className="text-xs text-muted-foreground">MRI, CT, X-Ray</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-sm">Genetic Reports</div>
                  <div className="text-xs text-muted-foreground">DNA, Genome data</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50">
                <div className="bg-success/10 p-2 rounded-lg">
                  <Activity className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="font-medium text-sm">Health Records</div>
                  <div className="text-xs text-muted-foreground">Lab results, vitals</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default UploadZone;
