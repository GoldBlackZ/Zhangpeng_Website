import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'SRR Intelligent Case Processing System',
    period: '2024 - Present',
    role: 'AI Product Operations Director',
    problem: 'Government case processing was slow (55 min/case) with 42% error rate due to manual handling.',
    data: 'Processing 50,000+ case documents with OCR-extracted text and multimodal inputs.',
    approach: '7-layer Agent architecture with LLM, RAG, GraphRAG, and PostgreSQL vector database.',
    results: ['Processing time: 55min → 10min (85% improvement)', 'Accuracy: 95%+ information extraction', 'Annual savings: 2M+ RMB'],
    contribution: 'Led end-to-end product design, model development, and government deployment.',
    tags: ['AI Agents', 'LLM', 'RAG', 'Python'],
    image: 'https://kimi-web-img.moonshot.cn/img/thumbs.dreamstime.com/d54858cd4b871d0baec4e2899202cb91bd13617e.jpg',
    color: '#0071e3',
  },
  {
    id: 2,
    title: 'Financial Credit Evaluation Model',
    period: '2023 - 2024',
    role: 'Lead Product Manager',
    problem: 'Traditional credit scoring failed to assess underserved MSMEs, causing high default rates.',
    data: '50,000+ records of operational/financial/credit reference data.',
    approach: 'PyTorch + decision tree/regression algorithms, Hadoop for distributed processing.',
    results: ['Approval rate: +32%', 'Default rate: -27%', 'Industry-viable accuracy achieved'],
    contribution: 'Designed model architecture, curated training data, validated business outcomes.',
    tags: ['PyTorch', 'Hadoop', 'ML', 'Big Data'],
    image: 'https://kimi-web-img.moonshot.cn/img/images.presentationgo.com/be328d4749d9a5a4e7484f7f617d846eb3a6c886.jpg',
    color: '#5e5ce6',
  },
  {
    id: 3,
    title: 'Real Estate Valuation & Recommendation',
    period: '2022 - 2023',
    role: 'Product Director',
    problem: 'Manual property valuation was inconsistent, taking 3+ days with varying accuracy.',
    data: '240,000+ pieces of behavioral/housing listing data.',
    approach: 'Python + Spark big data architecture, multi-factor valuation + recommendation algorithm.',
    results: ['Valuation accuracy: 92%', 'Processing: 3 days → 5 minutes', 'User conversion: +35%'],
    contribution: 'Led cross-functional team, integrated data sources, launched commercial product.',
    tags: ['Python', 'Spark', 'ML', 'Recommendations'],
    image: 'https://kimi-web-img.moonshot.cn/img/thumbs.dreamstime.com/33bc19b14bba744f728e77b92dc5b38ce6db3ecd.jpg',
    color: '#bf5af2',
  },
  {
    id: 4,
    title: 'AI Hopefluent Platform',
    period: '2021 - 2022',
    role: 'Operations Director',
    problem: 'Fragmented real estate industry lacked integrated digital solutions across verticals.',
    data: '5.4M users, 550K+ families served, 83 regional platforms integrated.',
    approach: 'Full-stack development with API integration, cloud computing, and AI modules.',
    results: ['100K+ agents served', '4 verticals integrated', 'Best Digital Transformation Award'],
    contribution: 'Oversaw platform strategy, partner integration, and go-to-market execution.',
    tags: ['Full-stack', 'API', 'Cloud', 'Integration'],
    image: 'https://kimi-web-img.moonshot.cn/img/www.shutterstock.com/81da9cc946700b4c203b0e66c8078f79401bc236.jpg',
    color: '#ff375f',
  },
  {
    id: 5,
    title: 'Yidianqian Consumer Finance Platform',
    period: '2016',
    role: 'Product & Operations Director',
    problem: 'Lack of accessible consumer credit options for young professionals.',
    data: '30K+ active users with transaction data tracking.',
    approach: 'Mobile-first platform with integrated risk control and payment systems.',
    results: ['180M+ RMB in 6 months', 'Annual Best Project Award', '30K+ active users'],
    contribution: 'Built product from scratch, established risk framework, achieved profitability.',
    tags: ['Mobile', 'Risk Control', 'Payments'],
    image: 'https://kimi-web-img.moonshot.cn/img/media.istockphoto.com/52a4be40b03c73912b99b92ed633dcd4b117a4e4.jpg',
    color: '#34c759',
  },
  {
    id: 6,
    title: 'Yizhongtong Business Management App',
    period: '2018',
    role: 'Product Director',
    problem: 'Distributed sales teams lacked centralized management tools across regions.',
    data: '40+ channels across 23 cities with real-time sync requirements.',
    approach: 'Cross-platform mobile app with cloud computing and real-time synchronization.',
    results: ['23 cities covered', '40+ channels integrated', 'Internet Finance Innovation Award'],
    contribution: 'Led product design, user research, and nationwide rollout.',
    tags: ['Mobile', 'Cloud', 'Real-time Sync'],
    image: 'https://kimi-web-img.moonshot.cn/img/media.easy-peasy.ai/0eec611e498856aa2fab1702c56cb458460a1ab8.webp',
    color: '#0071e3',
  },
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
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
      id="projects"
      ref={sectionRef}
      className="py-32 bg-[#fafafa]"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Badge className="bg-[#5e5ce6]/10 text-[#5e5ce6] hover:bg-[#5e5ce6]/20 mb-4">
            Portfolio
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-[#86868b] max-w-2xl mx-auto">
            A selection of key projects demonstrating expertise in AI commercialization, 
            FinTech innovation, and digital transformation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="group border-0 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-white h-full">
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Color Accent Bar */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ backgroundColor: project.color }}
                  />
                </div>

                <CardContent className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#86868b]">{project.period} · {project.role}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] px-2 py-0.5 rounded-full bg-[#f5f5f7] text-[#86868b]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Brief Description */}
                  <p className="text-xs text-[#86868b]/80 mb-3">{project.problem}</p>

                  {/* Key Results */}
                  <div className="space-y-1 mb-3">
                    {project.results.slice(0, 2).map((result, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[10px] text-[#34c759]">
                        <CheckCircle className="h-3 w-3" />
                        <span className="truncate">{result}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="flex items-center gap-1 text-xs text-[#0071e3] hover:text-[#0077ed] transition-colors"
                  >
                    {expandedIndex === index ? (
                      <>Less details <ChevronUp className="h-3 w-3" /></>
                    ) : (
                      <>More details <ChevronDown className="h-3 w-3" /></>
                    )}
                  </button>

                  {/* Expanded Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-500 ${
                      expandedIndex === index ? 'max-h-96 opacity-100 mt-4 pt-4 border-t border-[#f5f5f7]' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="space-y-3 text-xs">
                      <div>
                        <span className="font-medium text-[#1d1d1f]">Data: </span>
                        <span className="text-[#86868b]">{project.data}</span>
                      </div>
                      <div>
                        <span className="font-medium text-[#1d1d1f]">Approach: </span>
                        <span className="text-[#86868b]">{project.approach}</span>
                      </div>
                      <div>
                        <span className="font-medium text-[#1d1d1f]">My Contribution: </span>
                        <span className="text-[#86868b]">{project.contribution}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button 
            variant="outline" 
            className="rounded-full border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#f5f5f7] px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
