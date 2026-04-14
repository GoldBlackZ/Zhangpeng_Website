import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  User, 
  AlertCircle, 
  Cpu, 
  TrendingUp, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'SRR Intelligent Case Processing System',
    duration: '2024 - Present',
    role: 'AI Product Operations Director',
    problem: 'Manual case processing was slow, error-prone, and costly for government housing authorities. Processing time averaged 55 minutes per case with a 42% error rate.',
    technologies: ['7-layer AI Agent', 'LLM', 'RAG', 'Python', 'PostgreSQL'],
    results: [
      'Reduced processing time by 85%',
      'Improved accuracy to 98%',
      'Saved 2M+ RMB annually',
    ],
    contribution: 'Led end-to-end product design, model development, and government deployment. Architected the 7-layer AI Agent system and managed stakeholder expectations.',
    image: 'https://kimi-web-img.moonshot.cn/img/static.vecteezy.com/07d53f98bdfb317647672f61cb2922ebb34001af.jpg',
    color: 'navy',
  },
  {
    id: 2,
    title: 'Financial Credit Evaluation Prediction Model',
    duration: '2023 - 2024',
    role: 'Lead Product Manager',
    problem: 'Traditional credit scoring models failed to accurately assess risk for underserved populations, leading to high default rates and missed opportunities.',
    technologies: ['PyTorch', 'Hadoop', 'Big Data Analytics', 'Machine Learning'],
    results: [
      'Increased approval rate by 32%',
      'Reduced default rate by 27%',
      'Processed 50K+ data records',
    ],
    contribution: 'Designed model architecture, curated training data, and validated business outcomes. Collaborated with data scientists to optimize model performance.',
    image: 'https://kimi-web-img.moonshot.cn/img/www.fusioninformatics.com/f4a1a3219772a5072556d075af3f812d8fa0367d.jpg',
    color: 'teal',
  },
  {
    id: 3,
    title: 'Real Estate Intelligent Valuation & Recommendation',
    duration: '2022 - 2023',
    role: 'Product Director',
    problem: 'Manual property valuation was inconsistent and time-consuming, taking 3+ days per property with varying accuracy across different agents.',
    technologies: ['Python', 'Spark', 'Machine Learning', 'Recommendation Algorithms'],
    results: [
      'Valuation accuracy: 92%',
      'Reduced time: 3 days → 5 minutes',
      'User conversion +35%',
    ],
    contribution: 'Led cross-functional team, integrated with multiple data sources, and launched commercial product. Managed the full product lifecycle from ideation to market.',
    image: './images/【AI合富】(210705)咨询师内部宣传1.jpg',
    color: 'navy',
  },
  {
    id: 4,
    title: 'AI Hopefluent Platform',
    duration: '2021',
    role: 'Operations Director',
    problem: 'Fragmented real estate industry lacked integrated digital solutions, with agents using multiple disconnected tools for different tasks.',
    technologies: ['Full-stack Development', 'API Integration', 'Cloud Computing'],
    results: [
      'Integrated 4 industry verticals',
      'Served 100K+ agents',
      '550K+ families served',
    ],
    contribution: 'Oversaw platform strategy, partner integration, and go-to-market execution. Coordinated across 83 regional branches for unified deployment.',
    image: './images/【AI合富】(210705)咨询师内部宣传2.jpg',
    color: 'teal',
  },
  {
    id: 5,
    title: 'Yidianqian Consumer Finance Platform',
    duration: '2016',
    role: 'Product & Operations Director',
    problem: 'Lack of accessible consumer credit options for young professionals, with traditional banks having lengthy approval processes.',
    technologies: ['Mobile Development', 'Risk Control Systems', 'Payment Integration'],
    results: [
      '180M+ RMB in 6 months',
      'Won "Annual Best Project" award',
      '30K+ active users',
    ],
    contribution: 'Built product from scratch, established risk control framework, and achieved profitability within 6 months of launch.',
    image: './images/【合富】2017年度优秀项目易点钱-171231.jpg',
    color: 'gold',
  },
  {
    id: 6,
    title: 'Yizhongtong Business Management App',
    duration: '2018',
    role: 'Product Director',
    problem: 'Distributed sales teams lacked centralized management tools, leading to inefficiencies and poor coordination across regions.',
    technologies: ['Cross-platform Mobile', 'Cloud Computing', 'Real-time Sync'],
    results: [
      'Covered 23 cities',
      '40+ channels integrated',
      'Won "Internet Finance Innovation Award"',
    ],
    contribution: 'Led product design, user research, and nationwide rollout. Established standardized workflows across all regions.',
    image: './images/【合富】2018年度最佳项目"互金风云奖"-181231.jpg',
    color: 'navy',
  },
];

export default function Projects() {
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
            <Badge className="bg-white/20 text-white mb-4">Portfolio</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">Featured Projects</h1>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              A selection of key projects demonstrating expertise in AI commercialization, 
              FinTech innovation, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="border-0 shadow-lg overflow-hidden">
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <Badge className={`${
                      project.color === 'navy' ? 'bg-navy-500' :
                      project.color === 'teal' ? 'bg-teal-500' : 'bg-gold-500'
                    } text-white`}>
                      {project.duration}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                      <User className="h-4 w-4" />
                      {project.role}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-navy-600 mb-4">{project.title}</h3>

                  {/* Problem */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-slate-400" />
                      <span className="text-xs font-semibold text-slate-500 uppercase">Problem</span>
                    </div>
                    <p className="text-sm text-slate-600">{project.problem}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Cpu className="h-4 w-4 text-slate-400" />
                      <span className="text-xs font-semibold text-slate-500 uppercase">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-slate-200 text-slate-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-slate-400" />
                      <span className="text-xs font-semibold text-slate-500 uppercase">Results</span>
                    </div>
                    <ul className="space-y-1">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle className="h-4 w-4 text-teal-500 flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contribution */}
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-500 uppercase">My Contribution</span>
                    <p className="text-sm text-slate-600 mt-2">{project.contribution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-500 mb-6">
            Want to See More?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            I'm always working on new and exciting projects. If you'd like to learn more 
            about my work or discuss potential collaborations, let's connect.
          </p>
          <Button className="bg-navy-500 hover:bg-navy-600 text-white px-8">
            Get In Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
