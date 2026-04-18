import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, TrendingUp, Users, Lightbulb } from 'lucide-react';

const advantages = [
  {
    icon: TrendingUp,
    title: 'End-to-End AI',
    description: 'From business needs to model deployment, delivering measurable ROI.',
    color: 'from-[#0071e3] to-[#5e5ce6]',
  },
  {
    icon: Lightbulb,
    title: 'Deep FinTech',
    description: 'Consumer finance, risk control, and regulatory compliance expertise.',
    color: 'from-[#5e5ce6] to-[#bf5af2]',
  },
  {
    icon: Users,
    title: '0-to-1 Building',
    description: 'Proven track record scaling products from concept to market.',
    color: 'from-[#bf5af2] to-[#ff375f]',
  },
  {
    icon: GraduationCap,
    title: 'Cross-Functional',
    description: 'Leading technical, business, and executive stakeholder teams.',
    color: 'from-[#34c759] to-[#0071e3]',
  },
];

const education = [
  {
    school: 'Lingnan University',
    degree: 'MSc in AI Business Analysis (AIBA)',
    period: '2024 - 2025',
    detail: 'GPA: 3.67/4.0',
  },
  {
    school: 'George Washington University',
    degree: 'MS in Electrical Engineering',
    period: '2010 - 2012',
    detail: 'Communication Networks',
  },
  {
    school: 'North China Electric Power University',
    degree: 'BS in Materials Science & Engineering',
    period: '2005 - 2009',
    detail: '211 Project University',
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      id="about"
      ref={sectionRef}
      className="py-32 bg-[#fafafa]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Badge className="bg-[#0071e3]/10 text-[#0071e3] hover:bg-[#0071e3]/20 mb-4">
            About Me
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-tight">
            A Rare Four-Dimensional Talent
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Bio */}
          <div 
            className={`space-y-8 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-[#1d1d1f] leading-relaxed">
                ZHANG Peng is a results-driven <span className="font-semibold text-[#0071e3]">AI Product Operations Director</span> and{' '}
                <span className="font-semibold text-[#0071e3]">Digital Strategy Expert</span> with over a decade of experience.
              </p>
              <p className="text-[#86868b] leading-relaxed mt-4">
                Combining <strong>business acumen</strong>, <strong>product operations</strong>, 
                <strong> AI technology</strong>, and <strong>data analytics</strong> to deliver 
                measurable results. I excel at translating complex business requirements into 
                scalable AI solutions.
              </p>
              <p className="text-[#86868b] leading-relaxed mt-4">
                Currently pursuing my Master's in <span className="font-semibold">AI Business Analysis at Lingnan University</span> 
                (GPA: 3.67/4.0), I bring academic rigor and hands-on industry experience to every project.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: '50+', label: 'Clients' },
                { value: '10B+', label: 'RMB Volume' },
                { value: '30+', label: 'Patents' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-2xl shadow-sm">
                  <div className="text-2xl font-semibold text-[#1d1d1f]">{stat.value}</div>
                  <div className="text-xs text-[#86868b] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Advantages */}
          <div 
            className={`grid sm:grid-cols-2 gap-4 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {advantages.map((item, index) => (
              <Card 
                key={index} 
                className="group border-0 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white overflow-hidden"
              >
                <div className={`h-1 bg-gradient-to-r ${item.color}`} />
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-[#1d1d1f] mb-2">{item.title}</h4>
                  <p className="text-sm text-[#86868b]">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div 
          className={`mt-24 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#0071e3]/10 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-[#0071e3]" />
                  </div>
                  <span className="text-sm text-[#86868b]">{edu.period}</span>
                </div>
                <h4 className="font-semibold text-[#1d1d1f] mb-1">{edu.school}</h4>
                <p className="text-sm text-[#86868b]">{edu.degree}</p>
                <p className="text-xs text-[#0071e3] mt-2">{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
