import { ArrowDown, Github, Linkedin, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import avatarImage from '@/assets/avatar-professional.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground">Hello, I'm</p>
                <h1 className="text-5xl lg:text-6xl font-bold">
                  <span className="glow-text">Ashmitha</span> Ragavi S
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-secondary">
                  Aspiring AI & Web Developer
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                B.Tech student in Artificial Intelligence and Data Science, passionate about 
                creating innovative solutions that bridge AI technology with web development. 
                Currently exploring the fascinating world of machine learning and modern web technologies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#projects">
                  <Button className="btn-hero">
                    <Code2 className="w-5 h-5 mr-2" />
                    My Work
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-6 pt-4">
                <a
                  href="https://github.com/ragaviashmitha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/ashmitha-ragavi24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="slide-up lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-[var(--shadow-elegant)]">
                <img
                  src={avatarImage}
                  alt="Ashmitha Ragavi S"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;