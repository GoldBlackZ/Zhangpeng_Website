import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, User, Briefcase, FolderOpen, Award, Newspaper, Mail } from 'lucide-react';

const skillTags = [
  'AI Commercialization',
  'FinTech',
  'Big Data',
  'Product Management',
  'Digital Transformation',
];

const quickNavs = [
  { label: 'About', href: '#about', icon: User },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Projects', href: '#projects', icon: FolderOpen },
  { label: 'Awards', href: '#awards', icon: Award },
  { label: 'Media', href: '#media', icon: Newspaper },
  { label: 'Contact', href: '#contact', icon: Mail },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#0071e3]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#5e5ce6]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#bf5af2]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Pre-title */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="w-2 h-2 bg-[#34c759] rounded-full animate-pulse" />
            <span className="text-sm text-white/70">Available for opportunities</span>
          </div>

          {/* Main Title */}
          <h1 
            className={`text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            ZHANG <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071e3] to-[#5e5ce6]">Peng</span>
          </h1>

          {/* Subtitle */}
          <p 
            className={`mt-6 text-xl sm:text-2xl text-white/60 font-light transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            AI Product Operations Director
          </p>
          <p 
            className={`mt-2 text-lg text-white/40 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Digital Strategy Leader · FinTech & PropTech Expert
          </p>

          {/* Skill Tags */}
          <div 
            className={`flex flex-wrap justify-center gap-3 mt-10 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {skillTags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm text-white/70 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Quick Navigation */}
          <div 
            className={`mt-16 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-white/40 text-sm mb-6">Quick Navigation</p>
            <div className="flex flex-wrap justify-center gap-3">
              {quickNavs.map((nav, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(nav.href)}
                  className="group flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <nav.icon className="h-4 w-4 text-white/50 group-hover:text-[#0071e3] transition-colors" />
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">{nav.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-8 py-6 text-base font-medium transition-all hover:scale-105"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-8 py-6 text-base font-medium transition-all hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors animate-bounce"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
}
