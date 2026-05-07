import { useState, useEffect } from 'react';
import { Menu, X, Download, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleDownloadResume = () => {
  window.open(
    "https://drive.google.com/drive/folders/1VUJt3zJsHcF_8-FPNwzWzqBMhAei2TWS?usp=sharin",
    "_blank"
  );
};

  return (
    <header className="fixed w-full top-6 z-50 flex justify-center px-4 transition-all duration-300">
      <nav className={`w-full max-w-5xl rounded-full px-6 py-2 flex items-center justify-between transition-all duration-300 bg-card shadow-[0_0_20px_var(--shadow-card)] border border-border/50`}>
        
        {/* Logo */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm tracking-wider shadow-sm">
            AR
          </div>
          <span className="text-2xl font-bold text-primary tracking-tight">Ashmitha</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-semibold text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Button & Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full text-foreground hover:text-primary hover:bg-card-accent"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <div className="hidden md:block">
            <Button
              onClick={handleDownloadResume}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 h-10 font-semibold shadow-md transition-all hover:scale-105"
            >
              Resume <span className="ml-2 font-bold">→</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-primary hover:bg-gray-100 rounded-full"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 md:hidden">
          <div className="px-4 py-4 space-y-2 bg-white shadow-xl rounded-2xl border border-gray-100 flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-gray-800 font-semibold hover:text-primary hover:bg-gray-50 rounded-xl transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <Button
                onClick={handleDownloadResume}
                className="bg-primary hover:bg-primary/90 text-white rounded-full w-full h-12 font-semibold shadow-md"
              >
                View my Resume <span className="ml-2 font-bold">→</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;