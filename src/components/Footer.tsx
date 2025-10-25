import { Dna } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Dna className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl gradient-text">GHT</span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center">
            © 2025 Genetic Health Twin. Your Health. Your Data. Your Power.
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
