import { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar,
  MapPin
} from 'lucide-react';

const workExperience = [
  {
    company: 'Shenzhen Shuyuan Wansuan Information Technology Co., Ltd.',
    position: 'AI Product Operations Director',
    period: 'Nov 2024 - Present',
    location: 'Shenzhen, China',
    highlights: [
      'Lead AI product commercialization strategy across e-commerce, automotive, and manufacturing',
      'Design multimodal AI systems and data pipelines for enterprise clients',
      'Secure partnerships with Xinbao Electric, BAIC, China Tobacco, Wuling Motors',
      'Achieved 9 AI patents and 30+ Agent solutions for government/enterprise',
    ],
  },
  {
    company: 'Hopefluent Group Holdings Ltd. (HKEX: 0733)',
    position: 'Director of Operations, Digital & AI Platform',
    period: '2020 - 2024',
    location: 'Guangzhou, China',
    highlights: [
      'Led AI-driven digital transformation across 80+ regional branches',
      'Built integrated platform with 5.4M users, 10B+ RMB transactions',
      'Designed data lake architecture and AI-enabled decision systems',
      'Developed recommendation models improving conversion by 35%',
    ],
  },
  {
    company: 'Hopefluent Group Holdings Ltd.',
    position: 'Director, Internet Finance Department',
    period: '2016 - 2020',
    location: 'Guangzhou, China',
    highlights: [
      'Built fintech platforms serving 100K+ users with 10B+ RMB volume',
      'Developed credit risk models using machine learning',
      'Established big data analytics center and BI systems',
      'Led IT audit and compliance initiatives with regulators',
    ],
  },
  {
    company: 'Shenzhen D3 Financial Technology Services',
    position: 'Director of Operations',
    period: '2015 - 2016',
    location: 'Shenzhen, China',
    highlights: [
      'Managed IT product operations and platform performance',
      'Led F2B platform development serving 350+ SMEs',
      'Built CRM system and optimized user conversion',
    ],
  },
  {
    company: 'Guangdong Deli Development Group',
    position: 'Product Operations Manager',
    period: '2013 - 2015',
    location: 'Guangzhou, China',
    highlights: [
      'Led product lifecycle management for multiple IT systems',
      'Delivered e-commerce platform, supply chain finance tools',
      'Coordinated cross-functional teams for product launches',
    ],
  },
  {
    company: 'United Nations Association (USA)',
    position: 'IT Engineer',
    period: '2011 - 2013',
    location: 'Washington, D.C., USA',
    highlights: [
      'Developed UN Charity Fund Management System for 230K users',
      'Optimized client management interface and database',
      'Implemented cloud services (Amazon EC2) integration',
    ],
  },
];

const education = [
  {
    school: 'Lingnan University',
    degree: 'MSc in AI Business Analysis (AIBA)',
    period: '2024 - 2025 (Expected June)',
    location: 'Hong Kong',
    details: 'GPA: 3.67/4.0 | Focus: AI Commercialization, Big Data Analytics',
  },
  {
    school: 'George Washington University',
    degree: 'MS in Electrical Engineering',
    period: '2010 - 2012',
    location: 'Washington, D.C., USA',
    details: 'Communication Networks Focus | Grade Scholarship Recipient',
  },
  {
    school: 'North China Electric Power University',
    degree: 'BS in Materials Science & Engineering',
    period: '2005 - 2009',
    location: 'Beijing, China (211 Project)',
    details: 'Outstanding Student | University Scholarship | Student Union Leadership',
  },
];

const certifications = [
  { name: 'Project Management Professional (PMP)', year: '2017', issuer: 'PMI' },
  { name: 'Chartered Financial Analyst (CFA) Level I', year: '2018', issuer: 'CFA Institute' },
  { name: 'Tencent Advertising Certified Marketer', year: '2022', issuer: 'Tencent' },
  { name: 'ByteDance Live Operations Marketer', year: '2024', issuer: 'ByteDance' },
  { name: 'Network Communication Security Manager', year: '2018', issuer: 'Certified' },
];

const awards = [
  { name: 'Annual Best Project Award', year: '2017', organization: 'Hopefluent Group (Yidianqian Project)' },
  { name: 'Internet Finance Innovation Award', year: '2018', organization: 'Hopefluent Group (Yizhongtong Project)' },
  { name: 'Guangzhou Youth Federation Committee Member', year: '2017', organization: 'Guangzhou Municipal Government' },
  { name: 'Tianhe District Youth Federation Committee Member', year: '2016', organization: 'Tianhe District Government' },
];

export default function Resume() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
    // In a real implementation, this would download the actual PDF
    alert('Resume download functionality would be implemented here. Please contact me directly for the full resume.');
  };

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div className="reveal opacity-0 text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm font-medium border-navy-200 text-navy-600">
            Resume
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full" />
        </div>

        {/* Download Button */}
        <div className="reveal opacity-0 stagger-1 flex justify-center mb-12">
          <Button
            size="lg"
            onClick={handleDownload}
            className="bg-navy-500 hover:bg-navy-600 text-white px-8 py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Full Resume (PDF)
          </Button>
        </div>

        {/* Resume Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="reveal opacity-0 stagger-2 lg:col-span-2">
            <Card className="border-0 shadow-lg h-full">
              <CardHeader className="bg-gradient-to-r from-navy-500 to-navy-600 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5" />
                  <CardTitle>Work Experience</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {workExperience.map((job, index) => (
                    <div key={index} className="border-b border-slate-100 last:border-0 pb-6 last:pb-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                        <div>
                          <h4 className="font-semibold text-navy-600">{job.position}</h4>
                          <p className="text-sm text-slate-600">{job.company}</p>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-500">
                          <Calendar className="h-4 w-4" />
                          {job.period}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-500 mb-3">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <ul className="space-y-1.5">
                        {job.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="text-teal-500 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Education */}
            <div className="reveal opacity-0 stagger-3">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-lg py-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5" />
                    <CardTitle className="text-lg">Education</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-5">
                  <div className="space-y-4">
                    {education.map((edu, index) => (
                      <div key={index} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                        <h4 className="font-semibold text-navy-600 text-sm">{edu.school}</h4>
                        <p className="text-sm text-slate-700">{edu.degree}</p>
                        <p className="text-xs text-slate-500">{edu.period}</p>
                        <p className="text-xs text-slate-500">{edu.location}</p>
                        <p className="text-xs text-slate-600 mt-1">{edu.details}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Certifications */}
            <div className="reveal opacity-0 stagger-4">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-t-lg py-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5" />
                    <CardTitle className="text-lg">Certifications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-5">
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-gold-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-slate-700">{cert.name}</p>
                          <p className="text-xs text-slate-500">{cert.issuer} • {cert.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Awards */}
            <div className="reveal opacity-0 stagger-5">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-navy-500 to-navy-600 text-white rounded-t-lg py-4">
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5" />
                    <CardTitle className="text-lg">Awards & Recognition</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-5">
                  <div className="space-y-3">
                    {awards.map((award, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-navy-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-slate-700">{award.name}</p>
                          <p className="text-xs text-slate-500">{award.organization} • {award.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="reveal opacity-0 stagger-6 mt-8 text-center">
          <p className="text-sm text-slate-500">
            Full resume with references available upon request
          </p>
        </div>
      </div>
    </section>
  );
}
