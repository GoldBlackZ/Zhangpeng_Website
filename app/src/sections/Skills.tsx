import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Database, BarChart3, Briefcase, Shield, Award, CheckCircle } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI / Machine Learning',
    icon: Code2,
    color: '#0071e3',
    skills: [
      { name: 'Python & PyTorch', level: 95 },
      { name: 'Machine Learning & LLMs', level: 90 },
      { name: 'RAG & AI Agents', level: 88 },
      { name: 'Computer Vision', level: 82 },
    ],
  },
  {
    title: 'Big Data & Analytics',
    icon: Database,
    color: '#5e5ce6',
    skills: [
      { name: 'Hadoop & Spark', level: 85 },
      { name: 'SQL & Data Modeling', level: 92 },
      { name: 'ETL Pipelines', level: 88 },
      { name: 'Data Warehousing', level: 85 },
    ],
  },
  {
    title: 'Visualization',
    icon: BarChart3,
    color: '#bf5af2',
    skills: [
      { name: 'Power BI', level: 90 },
      { name: 'Tableau', level: 88 },
      { name: 'SPSS', level: 85 },
      { name: 'Data Storytelling', level: 92 },
    ],
  },
  {
    title: 'Product & Strategy',
    icon: Briefcase,
    color: '#ff375f',
    skills: [
      { name: 'Product Operations', level: 95 },
      { name: 'Digital Strategy', level: 92 },
      { name: 'Agile Development', level: 90 },
      { name: 'Stakeholder Management', level: 93 },
    ],
  },
  {
    title: 'FinTech Expertise',
    icon: Shield,
    color: '#34c759',
    skills: [
      { name: 'Risk Control', level: 90 },
      { name: 'Credit Scoring', level: 88 },
      { name: 'Regulatory Compliance', level: 87 },
      { name: 'Payment Systems', level: 85 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Award,
    color: '#ff9500',
    tools: ['Axure RP', 'Jira', 'Confluence', 'Git', 'Docker', 'AWS', 'Azure', 'GCP'],
  },
];

const certifications = [
  { name: 'PMP', full: 'Project Management Professional', year: '2017' },
  { name: 'CFA Level I', full: 'Chartered Financial Analyst', year: '2018' },
  { name: 'Tencent Marketer', full: 'Tencent Advertising Certified', year: '2022' },
  { name: 'ByteDance Marketer', full: 'Live Operations Certified', year: '2024' },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<{[key: string]: number}>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars
          skillCategories.forEach((cat, catIndex) => {
            cat.skills?.forEach((skill, skillIndex) => {
              const key = `${catIndex}-${skillIndex}`;
              setTimeout(() => {
                setAnimatedLevels(prev => ({ ...prev, [key]: skill.level }));
              }, (catIndex * 200) + (skillIndex * 100));
            });
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-32 bg-[#000] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#0071e3]/10 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5e5ce6]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Badge className="bg-[#bf5af2]/10 text-[#bf5af2] hover:bg-[#bf5af2]/20 mb-4">
            Expertise
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Skills & Certifications
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto">
            A comprehensive skill set spanning AI/ML, big data analytics, 
            product management, and FinTech operations.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <Card className="border-0 shadow-lg bg-white/5 backdrop-blur-sm overflow-hidden h-full">
                <div 
                  className="h-1"
                  style={{ backgroundColor: category.color }}
                />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <category.icon className="h-5 w-5" style={{ color: category.color }} />
                    </div>
                    <h3 className="font-semibold text-white">{category.title}</h3>
                  </div>

                  {category.skills ? (
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => {
                        const key = `${catIndex}-${skillIndex}`;
                        const animatedLevel = animatedLevels[key] || 0;
                        return (
                          <div key={skillIndex}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-white/70">{skill.name}</span>
                              <span className="text-xs text-white/40">{skill.level}%</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full transition-all duration-1000 ease-out"
                                style={{ 
                                  width: `${animatedLevel}%`,
                                  backgroundColor: category.color 
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {category.tools?.map((tool, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white/70"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div 
          className={`mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Professional Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-[#34c759] flex-shrink-0" />
                <div>
                  <p className="font-medium text-white text-sm">{cert.name}</p>
                  <p className="text-xs text-white/40">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div 
          className={`mt-8 flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { lang: 'English', level: 'Fluent' },
            { lang: 'Cantonese', level: 'Basic' },
            { lang: 'Mandarin', level: 'Native' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
              <span className="text-white/70 text-sm">{item.lang}</span>
              <span className="text-xs text-white/40">{item.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
