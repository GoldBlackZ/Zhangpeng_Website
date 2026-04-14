import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight, ArrowUp } from 'lucide-react';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Awards from './sections/Awards';
import Media from './sections/Media';
import Contact from './sections/Contact';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#awards', label: 'Awards' },
  { href: '#media', label: 'Media' },
  { href: '#contact', label: 'Contact' },
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      // Determine active section
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation - Apple Style */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#home')}
              className="text-lg font-semibold tracking-tight text-[#1d1d1f] hover:opacity-70 transition-opacity"
            >
              ZHANG<span className="text-[#0071e3]">.</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-[#0071e3]'
                      : 'text-[#1d1d1f]/70 hover:text-[#1d1d1f]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA - Desktop */}
            <div className="hidden lg:block">
              <Button
                size="sm"
                onClick={() => scrollToSection('#contact')}
                className="bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-5 text-sm font-medium"
              >
                Resume
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-full text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-[#d2d2d7] px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-xl transition-all ${
                  activeSection === link.href.slice(1)
                    ? 'text-[#0071e3] bg-[#0071e3]/5'
                    : 'text-[#1d1d1f] hover:bg-[#f5f5f7]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Media />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-[#1d1d1f] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <button
                onClick={() => scrollToSection('#home')}
                className="text-2xl font-semibold tracking-tight"
              >
                ZHANG<span className="text-[#0071e3]">.</span>
              </button>
              <p className="mt-2 text-[#86868b] text-sm">
                AI Product Operations Director
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#86868b]">
              {navLinks.slice(1).map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#424245] text-center text-[#86868b] text-xs">
            © {new Date().getFullYear()} ZHANG Peng. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-[#0071e3] text-white rounded-full shadow-lg hover:bg-[#0077ed] transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}

export default App;
