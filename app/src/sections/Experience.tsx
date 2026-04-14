import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'Shenzhen Shuyuan Wansuan',
    position: 'AI Product Operations Director',
    period: 'Nov 2024 - Present',
    location: 'Shenzhen, China',
    current: true,
    description: 'Leading AI product commercialization across e-commerce, automotive, and manufacturing.',
    achievements: [
      '9 AI patents and 30+ Agent solutions',
      'Partnerships with BAIC, China Tobacco, Wuling Motors',
      'Multimodal AI systems for enterprise clients',
    ],
  },
  {
    company: 'Hopefluent Group (HKEX: 0733)',
    position: 'Director of Operations, Digital & AI',
    period: '2020 - 2024',
    location: 'Guangzhou, China',
    current: false,
    description: 'Led AI-driven digital transformation across 80+ regional branches.',
    achievements: [
      '5.4M users, 10B+ RMB transactions',
      'Data lake architecture & AI decision systems',
      'Recommendation models: +35% conversion',
    ],
  },
  {
    company: 'Hopefluent Group',
    position: 'Director, Internet Finance',
    period: '2016 - 2020',
    location: 'Guangzhou, China',
    current: false,
    description: 'Built fintech platforms serving 100K+ users with 10B+ RMB volume.',
    achievements: [
      'ML-powered credit risk models',
      'Big data analytics center & BI systems',
      'IT audit & compliance with regulators',
    ],
  },
  {
    company: 'Shenzhen D3 Financial Technology',
    position: 'Director of Operations',
    period: '2015 - 2016',
    location: 'Shenzhen, China',
    current: false,
    description: 'Managed IT product operations and platform performance.',
    achievements: [
      'F2B platform for 350+ SMEs',
      'CRM system & user conversion optimization',
    ],
  },
  {
    company: 'Guangdong Deli Development Group',
    position: 'Product Operations Manager',
    period: '2013 - 2015',
    location: 'Guangzhou, China',
    current: false,
    description: 'Led product lifecycle management for multiple IT systems.',
    achievements: [
      'E-commerce & supply chain finance tools',
      'Cross-functional product launches',
    ],
  },
  {
    company: 'United Nations Association (USA)',
    position: 'IT Engineer',
    period: '2011 - 2013',
    location: 'Washington, D.C., USA',
    current: false,
    description: 'Developed systems for international humanitarian operations.',
    achievements: [
      'UN Charity Fund System: 230K users',
      'Cloud services (Amazon EC2) integration',
    ],
  },
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 bg-[#000] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0071e3]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#5e5ce6]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Badge className="bg-[#0071e3]/10 text-[#0071e3] hover:bg-[#0071e3]/20 mb-4">
            Career Journey
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto">
            Over a decade of experience leading digital transformation initiatives 
            across FinTech, real estate, and international organizations.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card 
                className={`border-0 overflow-hidden transition-all duration-500 cursor-pointer ${
                  expandedIndex === index 
                    ? 'bg-white/10 shadow-2xl' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* Left - Position & Company */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                        {exp.current && (
                          <Badge className="bg-[#34c759] text-white text-xs">Current</Badge>
                        )}
                      </div>
                      <p className="text-[#86868b]">{exp.company}</p>
                    </div>

                    {/* Right - Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <ChevronRight 
                        className={`h-5 w-5 transition-transform duration-300 ${
                          expandedIndex === index ? 'rotate-90' : ''
                        }`} 
                      />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedIndex === index ? 'max-h-96 opacity-100 mt-6 pt-6 border-t border-white/10' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-white/70 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '6', label: 'Companies' },
            { value: '10B+', label: 'RMB Volume' },
            { value: '5.4M', label: 'Users Served' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/5 rounded-2xl">
              <div className="text-3xl font-semibold text-white">{stat.value}</div>
              <div className="text-sm text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
