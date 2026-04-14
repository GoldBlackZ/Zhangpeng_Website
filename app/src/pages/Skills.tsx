import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Code2, 
  Database, 
  BarChart3, 
  Briefcase, 
  Shield, 
  Award,
  CheckCircle
} from 'lucide-react';

const technicalSkills = [
  { name: 'Python & PyTorch', level: 95, category: 'AI/ML' },
  { name: 'Machine Learning & LLMs', level: 90, category: 'AI/ML' },
  { name: 'RAG & AI Agents', level: 88, category: 'AI/ML' },
  { name: 'Hadoop & Spark', level: 85, category: 'Big Data' },
  { name: 'SQL & Data Modeling', level: 92, category: 'Big Data' },
  { name: 'Power BI & Tableau', level: 88, category: 'Visualization' },
];

const businessSkills = [
  { name: 'Product Operations', level: 95 },
  { name: 'Digital Strategy', level: 92 },
  { name: 'Agile Development', level: 90 },
  { name: 'Stakeholder Management', level: 93 },
  { name: 'FinTech Risk Control', level: 88 },
  { name: 'Credit Scoring', level: 85 },
  { name: 'Real Estate Digitalization', level: 90 },
  { name: 'Growth Hacking', level: 87 },
];

const certifications = [
  { name: 'Project Management Professional (PMP)', issuer: 'PMI', year: '2017' },
  { name: 'Chartered Financial Analyst (CFA) Level I', issuer: 'CFA Institute', year: '2018' },
  { name: 'Tencent Advertising Certified Marketer', issuer: 'Tencent', year: '2022' },
  { name: 'ByteDance Live Operations Marketer', issuer: 'ByteDance', year: '2024' },
  { name: 'FinTech Professional Qualification', issuer: 'Industry Association', year: '2019' },
];

const tools = [
  'Axure RP', 'Jira', 'Confluence', 'Git', 'Jupyter Notebook', 
  'Google Colab', 'VS Code', 'MySQL', 'PostgreSQL', 'Docker',
  'Kubernetes', 'AWS', 'Azure', 'Google Cloud'
];

export default function Skills() {
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
            <Badge className="bg-white/20 text-white mb-4">Expertise</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">Skills & Certifications</h1>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              A comprehensive skill set spanning AI/ML, big data analytics, 
              product management, and FinTech operations.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-navy-500 to-navy-600 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Technical Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-5">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-slate-100" />
                  </div>
                ))}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="h-4 w-4 text-teal-500" />
                    <span className="text-sm font-medium text-slate-700">Tools</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tools.slice(0, 7).map((tool, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-slate-100 text-slate-600">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business & Product Skills */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Business & Product</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-5">
                {businessSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-slate-100" />
                  </div>
                ))}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="h-4 w-4 text-navy-500" />
                    <span className="text-sm font-medium text-slate-700">FinTech Expertise</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Risk Control', 'Compliance', 'Credit Scoring', 'Regulatory'].map((item, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-slate-100 text-slate-600">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Award className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Certifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-slate-700">{cert.name}</p>
                        <p className="text-xs text-slate-500">{cert.issuer} • {cert.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="h-4 w-4 text-navy-500" />
                    <span className="text-sm font-medium text-slate-700">Languages</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">English</span>
                      <Badge className="text-xs bg-navy-50 text-navy-600">Fluent</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Cantonese</span>
                      <Badge className="text-xs bg-teal-50 text-teal-600">Basic</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Mandarin</span>
                      <Badge className="text-xs bg-navy-50 text-navy-600">Native</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-teal-200 text-teal-600 mb-4">
              Summary
            </Badge>
            <h2 className="text-3xl font-bold text-navy-500">
              Core Competencies
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'AI/ML', 
                items: ['Python', 'PyTorch', 'LLMs', 'RAG', 'AI Agents'],
                color: 'navy'
              },
              { 
                title: 'Big Data', 
                items: ['Hadoop', 'Spark', 'SQL', 'Data Modeling', 'ETL'],
                color: 'teal'
              },
              { 
                title: 'Product', 
                items: ['Agile', 'Strategy', 'Operations', 'Analytics'],
                color: 'gold'
              },
              { 
                title: 'FinTech', 
                items: ['Risk Control', 'Compliance', 'Credit Scoring'],
                color: 'navy'
              },
            ].map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className={`font-semibold mb-4 ${
                    category.color === 'navy' ? 'text-navy-600' :
                    category.color === 'teal' ? 'text-teal-600' : 'text-gold-600'
                  }`}>
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
