import { Linkedin, Github, Mail, Heart } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#awards', label: 'Awards' },
  { href: '#media', label: 'Media' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/zhangpeng', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/zhangpeng', label: 'GitHub' },
  { icon: Mail, href: 'mailto:zhangpeng20252025@163.com', label: 'Email' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-500 text-white">
      <div className="max-w-7xl mx-auto section-padding py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="text-2xl font-bold text-white hover:text-teal-300 transition-colors">
              ZHANG<span className="text-teal-400">.</span>
            </a>
            <p className="mt-4 text-navy-100 max-w-md">
              AI Product Operations Director and Digital Strategy Expert with 10+ years of experience 
              in FinTech, real estate digitalization, and AI commercialization.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-navy-400/50 rounded-lg hover:bg-teal-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-navy-100 hover:text-teal-300 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">More</h4>
            <ul className="space-y-2">
              {navLinks.slice(4).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-navy-100 hover:text-teal-300 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-400/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-navy-200">
              © {new Date().getFullYear()} ZHANG Peng. All rights reserved.
            </p>
            <p className="text-sm text-navy-200 flex items-center gap-1">
              Built with <Heart className="h-4 w-4 text-gold-500 fill-gold-500" /> for professional excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
