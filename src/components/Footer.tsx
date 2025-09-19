import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold glow-text">Ashmitha Ragavi S</span>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Made</span>
           
            <Code2 className="w-4 h-4 text-primary" />
            <span>by Ashmitha</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2024 Ashmitha Ragavi S.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;