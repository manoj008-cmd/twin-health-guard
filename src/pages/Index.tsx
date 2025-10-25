import Hero from "@/components/Hero";
import UploadZone from "@/components/UploadZone";
import Dashboard from "@/components/Dashboard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <UploadZone />
      <Dashboard />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
