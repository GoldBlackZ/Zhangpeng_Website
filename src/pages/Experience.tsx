import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const workExperience = [
  {
    company: 'Shenzhen Shuyuan Wansuan Information Technology Co., Ltd.',
    position: 'AI Product Operations Director',
    period: 'Nov 2024 - Present',
    location: 'Shenzhen, China',
    type: 'Current',
    description: 'Leading AI product commercialization strategy across e-commerce, automotive, and manufacturing sectors.',
    highlights: [
      'Design multimodal AI systems and data pipelines for enterprise clients',
      'Secure partnerships with Xinbao Electric, BAIC, China Tobacco, Wuling Motors',
      'Achieved 9 AI patents and 30+ Agent solutions for government/enterprise',
      'Lead cross-functional teams in AI solution deployment',
    ],
    image: 'https://kimi-web-img.moonshot.cn/img/images.stockcake.com/3f8b7a8c3e9e4f5d6a7b8c9d0e1f2a3b4c5d6e7f.jpg',
  },
  {
    company: 'Hopefluent Group Holdings Ltd. (HKEX: 0733)',
    position: 'Director of Operations, Digital & AI Platform',
    period: '2020 - 2024',
    location: 'Guangzhou, China',
    type: '',
    description: 'Led AI-driven digital transformation across 80+ regional branches.',
    highlights: [
      'Built integrated platform with 5.4M users, 10B+ RMB transactions',
      'Designed data lake architecture and AI-enabled decision systems',
      'Developed recommendation models improving conversion by 35%',
      'Managed product lifecycle for 10+ digital products',
    ],
    image: './images/【AI合富】(210705)咨询师内部宣传1.jpg',
  },
  {
    company: 'Hopefluent Group Holdings Ltd.',
    position: 'Director, Internet Finance Department',
    period: '2016 - 2020',
    location: 'Guangzhou, China',
    type: '',
    description: 'Built fintech platforms serving 100K+ users with 10B+ RMB volume.',
    highlights: [
      'Developed credit risk models using machine learning',
      'Established big data analytics center and BI systems',
      'Led IT audit and compliance initiatives with regulators',
      'Launched multiple successful fintech products',
    ],
    image: './images/【合富】2017年度优秀项目易点钱-171231.jpg',
  },
  {
    company: 'Shenzhen D3 Financial Technology Services',
    position: 'Director of Operations',
    period: '2015 - 2016',
    location: 'Shenzhen, China',
    type: '',
    description: 'Managed IT product operations and platform performance.',
    highlights: [
      'Led F2B platform development serving 350+ SMEs',
      'Built CRM system and optimized user conversion',
      'Managed cross-functional product teams',
    ],
    image: 'https://kimi-web-img.moonshot.cn/img/www.fusioninformatics.com/f4a1a3219772a5072556d075af3f812d8fa0367d.jpg',
  },
  {
    company: 'Guangdong Deli Development Group',
    position: 'Product Operations Manager',
    period: '2013 - 2015',
    location: 'Guangzhou, China',
    type: '',
    description: 'Led product lifecycle management for multiple IT systems.',
    highlights: [
      'Delivered e-commerce platform, supply chain finance tools',
      'Coordinated cross-functional teams for product launches',
      'Managed vendor relationships and partnerships',
    ],
    image: 'https://kimi-web-img.moonshot.cn/img/img.freepik.com/3ed866c034fb095e542ef9dcc9e2b449db8c727e.jpg',
  },
  {
    company: 'United Nations Association (USA)',
    position: 'IT Engineer',
    period: '2011 - 2013',
    location: 'Washington, D.C., USA',
    type: '',
    description: 'Developed systems for international humanitarian operations.',
    highlights: [
      'Developed UN Charity Fund Management System for 230K users',
      'Optimized client management interface and database',
      'Implemented cloud services (Amazon EC2) integration',
    ],
    image: 'https://kimi-web-img.moonshot.cn/img/images.presentationgo.com/5b7ac387cd194633febea5f53927faebe3008f2d.jpg',
  },
];

export default function Experience() {
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
            <Badge className="bg-white/20 text-white mb-4">Career Journey</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">Work Experience</h1>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Over a decade of experience leading digital transformation initiatives 
              across FinTech, real estate, and international organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Image */}
                  <div className="aspect-video lg:aspect-auto overflow-hidden">
                    <img
                      src={job.image}
                      alt={job.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className="p-2 bg-navy-50 rounded-lg">
                        <Briefcase className="h-5 w-5 text-navy-500" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-600">{job.position}</h3>
                      {job.type && (
                        <Badge className="bg-teal-500 text-white">{job.type}</Badge>
                      )}
                    </div>

                    <h4 className="text-lg font-medium text-slate-700 mb-2">{job.company}</h4>

                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4">{job.description}</p>

                    <div className="space-y-2">
                      {job.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-gold-200 text-gold-600 mb-4">
              Achievements
            </Badge>
            <h2 className="text-3xl font-bold text-navy-500">
              Career Highlights
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '10+', label: 'Years Experience', color: 'navy' },
              { value: '6', label: 'Companies', color: 'teal' },
              { value: '10B+', label: 'RMB Volume', color: 'gold' },
              { value: '5.4M', label: 'Users Served', color: 'navy' },
            ].map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className={`text-4xl font-bold ${
                    stat.color === 'navy' ? 'text-navy-500' :
                    stat.color === 'teal' ? 'text-teal-500' : 'text-gold-500'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-500 mt-2">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
