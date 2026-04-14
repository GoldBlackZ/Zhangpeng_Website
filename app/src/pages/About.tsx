import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Mail, Phone, Award, TrendingUp, Users, Lightbulb } from 'lucide-react';

const education = [
  {
    school: 'Lingnan University',
    location: 'Hong Kong',
    degree: 'MSc in AI Business Analysis (AIBA)',
    period: '2024 - 2025 (Expected June)',
    gpa: 'GPA: 3.67/4.0',
    image: 'https://kimi-web-img.moonshot.cn/img/img.freepik.com/3ed866c034fb095e542ef9dcc9e2b449db8c727e.jpg',
  },
  {
    school: 'George Washington University',
    location: 'Washington, D.C., USA',
    degree: 'MS in Electrical Engineering',
    period: '2010 - 2012',
    gpa: '',
    image: 'https://kimi-web-img.moonshot.cn/img/images.presentationgo.com/5b7ac387cd194633febea5f53927faebe3008f2d.jpg',
  },
  {
    school: 'North China Electric Power University',
    location: 'Beijing, China (211 Project)',
    degree: 'BS in Materials Science & Engineering',
    period: '2005 - 2009',
    gpa: '',
    image: 'https://kimi-web-img.moonshot.cn/img/www.shutterstock.com/398bb1976ae953818ecf67b7fdffc0a70ed47504.jpg',
  },
];

const advantages = [
  {
    title: 'End-to-End AI Commercialization',
    description: 'From business needs analysis to model deployment and scaling, delivering measurable ROI.',
    icon: TrendingUp,
    color: 'navy',
  },
  {
    title: 'Deep FinTech Expertise',
    description: 'Comprehensive knowledge spanning consumer finance, risk control, and regulatory compliance.',
    icon: Award,
    color: 'teal',
  },
  {
    title: '0-to-1 Product Building',
    description: 'Proven track record in building and scaling digital products from concept to market.',
    icon: Lightbulb,
    color: 'gold',
  },
  {
    title: 'Cross-Functional Leadership',
    description: 'Strong stakeholder management skills across technical, business, and executive teams.',
    icon: Users,
    color: 'navy',
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 bg-navy-500">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://kimi-web-img.moonshot.cn/img/img.freepik.com/446bb14da1de416c4f54d6e695340167b4b9f6ba.jpg')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <Badge className="bg-white/20 text-white mb-4">About Me</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">Professional Background</h1>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              A results-driven AI Product Operations Director with a unique blend of 
              technical expertise and business acumen.
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Photo & Contact */}
            <div className="space-y-6">
              <div className="aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/合富集团合富人杂志27期01-17'.jpg"
                  alt="ZHANG Peng - Professional Photo"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Contact Card */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-navy-600 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-teal-500" />
                      <span className="text-slate-600">zhangpeng20252025@163.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-teal-500" />
                      <span className="text-slate-600">+86 6995 8288</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-teal-500" />
                      <span className="text-slate-600">Hong Kong SAR, China</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right - Biography */}
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="border-navy-200 text-navy-600 mb-4">
                  Biography
                </Badge>
                <h2 className="text-3xl font-bold text-navy-500 mb-6">
                  ZHANG Peng
                </h2>
              </div>

              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed">
                  ZHANG Peng is a results-driven <strong className="text-navy-600">AI Product Operations Director</strong> and{' '}
                  <strong className="text-navy-600">Digital Strategy Expert</strong> with over a decade of experience leading 
                  digital transformation initiatives in FinTech and real estate industries.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  As a rare <strong>four-dimensional talent</strong> combining business acumen, product operations, 
                  AI technology, and data analytics, he excels at translating complex business requirements into 
                  scalable AI solutions that drive measurable revenue growth.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Currently pursuing his Master's degree in <strong className="text-navy-600">AI Business Analysis at Lingnan University</strong> in Hong Kong 
                  (GPA: 3.67/4.0), he brings a unique blend of academic rigor and hands-on industry experience to every project.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Throughout his career, he has served more than <strong className="text-navy-600">50 leading enterprises</strong>, 
                  managed 10+ successful product launches, and contributed to over{' '}
                  <strong className="text-navy-600">10 billion RMB in transaction volume</strong>. 
                  He holds <strong className="text-navy-600">30+ patents and software copyrights</strong> and is a certified PMP and CFA Level I candidate.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                {[
                  { value: '10+', label: 'Years' },
                  { value: '50+', label: 'Clients' },
                  { value: '30+', label: 'Patents' },
                  { value: '10B+', label: 'RMB Volume' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-navy-500">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-teal-200 text-teal-600 mb-4">
              Strengths
            </Badge>
            <h2 className="text-3xl font-bold text-navy-500">
              Core Competitive Advantages
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className={`p-3 rounded-lg w-fit mb-4 ${
                    advantage.color === 'navy' ? 'bg-navy-50' :
                    advantage.color === 'teal' ? 'bg-teal-50' : 'bg-gold-50'
                  }`}>
                    <advantage.icon className={`h-6 w-6 ${
                      advantage.color === 'navy' ? 'text-navy-500' :
                      advantage.color === 'teal' ? 'text-teal-500' : 'text-gold-500'
                    }`} />
                  </div>
                  <h4 className="font-semibold text-navy-600 mb-2">{advantage.title}</h4>
                  <p className="text-sm text-slate-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-navy-200 text-navy-600 mb-4">
              Education
            </Badge>
            <h2 className="text-3xl font-bold text-navy-500">
              Academic Background
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-navy-50 rounded-lg">
                      <GraduationCap className="h-5 w-5 text-navy-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-600">{edu.school}</h4>
                      <p className="text-sm text-slate-500">{edu.location}</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-slate-700 mt-2">{edu.degree}</p>
                  <p className="text-sm text-slate-500">{edu.period}</p>
                  {edu.gpa && (
                    <Badge className="mt-3 bg-teal-50 text-teal-600">
                      {edu.gpa}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20 bg-navy-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Professional Summary
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Fluent in English with basic Cantonese proficiency, I am well-positioned to lead 
            cross-border AI initiatives in the Greater Bay Area. My unique combination of 
            technical expertise, business acumen, and international experience makes me an 
            ideal candidate for senior AI product and digital strategy roles.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Badge className="bg-white/20 text-white px-4 py-2">PMP Certified</Badge>
            <Badge className="bg-white/20 text-white px-4 py-2">CFA Level I</Badge>
            <Badge className="bg-white/20 text-white px-4 py-2">English Fluent</Badge>
            <Badge className="bg-white/20 text-white px-4 py-2">Cantonese Basic</Badge>
          </div>
        </div>
      </section>
    </div>
  );
}
