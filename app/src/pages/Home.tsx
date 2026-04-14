import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, Award, TrendingUp } from 'lucide-react';

const skillTags = [
  'AI Commercialization',
  'FinTech',
  'Big Data',
  'Product Management',
  'Digital Transformation',
  'AI Agents',
];

const highlights = [
  {
    icon: TrendingUp,
    value: '10+',
    label: 'Years Experience',
    color: 'navy',
  },
  {
    icon: Briefcase,
    value: '50+',
    label: 'Enterprise Clients',
    color: 'teal',
  },
  {
    icon: Award,
    value: '30+',
    label: 'Patents & Copyrights',
    color: 'gold',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://kimi-web-img.moonshot.cn/img/img.freepik.com/446bb14da1de416c4f54d6e695340167b4b9f6ba.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy-500/95 via-navy-500/85 to-navy-500/70" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div>
                <p className="text-teal-300 font-medium mb-4">Welcome to my portfolio</p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                  ZHANG <span className="text-teal-400">Peng</span>
                </h1>
                <p className="text-xl sm:text-2xl font-semibold mt-4 text-white/90">
                  AI Product Operations Director
                </p>
                <p className="text-lg text-white/80 mt-2">
                  Digital Strategy Leader | FinTech & PropTech Expert
                </p>
              </div>

              <p className="text-white/70 text-lg max-w-lg">
                Bridging AI Technology and Business Value with 10+ years of experience 
                transforming industries through innovative digital solutions.
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {skillTags.map((tag, index) => (
                  <Badge
                    key={index}
                    className="px-3 py-1.5 text-sm font-medium bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button
                    size="lg"
                    className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-base font-semibold"
                  >
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base font-semibold"
                  >
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Stats Cards */}
            <div className="hidden lg:block">
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        item.color === 'navy' ? 'bg-navy-500' :
                        item.color === 'teal' ? 'bg-teal-500' : 'bg-gold-500'
                      }`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">{item.value}</div>
                        <div className="text-white/70 text-sm">{item.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/合富集团合富人杂志27期01-17'.jpg"
                  alt="ZHANG Peng - Featured in Hopefluent People Magazine"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
                <Badge className="bg-gold-500 text-white">Featured</Badge>
                <p className="text-sm font-medium text-slate-700 mt-2">Hopefluent People Magazine</p>
                <p className="text-xs text-slate-500">Cover Story 2017</p>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <Badge variant="outline" className="border-navy-200 text-navy-600">
                About Me
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-500">
                A Rare Four-Dimensional Talent
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Combining <strong>business acumen</strong>, <strong>product operations</strong>, 
                <strong> AI technology</strong>, and <strong>data analytics</strong> to deliver 
                measurable results. I excel at translating complex business requirements into 
                scalable AI solutions.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                  <div className="text-2xl font-bold text-navy-500">10B+</div>
                  <div className="text-sm text-slate-500">RMB Transaction Volume</div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                  <div className="text-2xl font-bold text-teal-500">GPA 3.67</div>
                  <div className="text-sm text-slate-500">Lingnan University (AIBA)</div>
                </div>
              </div>
              <Link to="/about">
                <Button className="bg-navy-500 hover:bg-navy-600 text-white">
                  Learn More About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-teal-200 text-teal-600 mb-4">
              Featured Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-500">
              Key Projects
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              A selection of projects demonstrating expertise in AI commercialization, 
              FinTech innovation, and digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'SRR Intelligent Case Processing',
                desc: 'AI-powered government case processing system with 85% efficiency improvement.',
                image: 'https://kimi-web-img.moonshot.cn/img/static.vecteezy.com/07d53f98bdfb317647672f61cb2922ebb34001af.jpg',
                link: '/projects',
              },
              {
                title: 'AI Hopefluent Platform',
                desc: 'Integrated real estate digital platform serving 100K+ agents.',
                image: '/images/【AI合富】(210705)咨询师内部宣传1.jpg',
                link: '/projects',
              },
              {
                title: 'FinTech Risk Control System',
                desc: 'ML-powered credit evaluation reducing default rate by 27%.',
                image: 'https://kimi-web-img.moonshot.cn/img/www.fusioninformatics.com/f4a1a3219772a5072556d075af3f812d8fa0367d.jpg',
                link: '/projects',
              },
            ].map((project, index) => (
              <Link key={index} to={project.link} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-navy-600 group-hover:text-teal-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-2">{project.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="outline" className="border-navy-500 text-navy-600 hover:bg-navy-50">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Awards Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="border-gold-200 text-gold-600">
                Recognition
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-500">
                Awards & Honors
              </h2>
              <p className="text-slate-600 text-lg">
                Recognized for excellence in product innovation, digital transformation, 
                and industry leadership.
              </p>
              <ul className="space-y-3">
                {[
                  'Annual Best Project Award (2017)',
                  'Internet Finance Innovation Award (2018)',
                  'Guangzhou Youth Federation Committee Member',
                  '30+ Patents & Software Copyrights',
                ].map((award, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full" />
                    <span className="text-slate-700">{award}</span>
                  </li>
                ))}
              </ul>
              <Link to="/awards">
                <Button className="bg-gold-500 hover:bg-gold-600 text-white">
                  View All Awards
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Award Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/images/【合富】2017年度优秀项目易点钱-171231.jpg"
                  alt="2017 Best Project Award"
                  className="rounded-xl shadow-lg w-full"
                />
                <img
                  src="/images/【市青联】委任证书-170501.jpg"
                  alt="Youth Federation Certificate"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              <div className="pt-8">
                <img
                  src="/images/%E3%80%90%E5%90%88%E5%AF%8C%E3%80%912018%E5%B9%B4%E5%BA%A6%E6%9C%80%E4%BD%B3%E9%A1%B9%E7%9B%AE%E2%80%9C%E4%BA%92%E9%87%91%E9%A3%8E%E4%BA%91%E5%A5%96%E2%80%9D-181231.jpg"
                  alt="2018 Innovation Award"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing AI product opportunities, digital transformation 
            projects, and industry collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8"
              >
                Get In Touch
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8"
              >
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
