import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Newspaper, Mic, FileText, ExternalLink, Calendar, ArrowRight } from 'lucide-react';

const mediaItems = [
  {
    type: 'Magazine Cover Story',
    title: '"Either Always Ready, Or Ready to Exit"',
    publication: 'Hopefluent People Magazine',
    year: '2017',
    description: 'Featured cover story discussing career philosophy, leadership insights, and the fast-paced nature of the internet industry.',
    images: [
      '/images/合富集团合富人杂志27期01-17\'.jpg',
      '/images/合富集团合富人杂志27期02-17\'.jpg',
      '/images/合富集团合富人杂志27期03-17\'.jpg',
    ],
    icon: BookOpen,
    color: 'navy',
    link: null,
  },
  {
    type: 'Industry Publication',
    title: 'AI Hopefluent: Reconstructing Real Estate Marketing',
    publication: 'Guandian Real Estate Network',
    year: '2022',
    description: 'In-depth article on how AI technology is transforming real estate marketing and customer service.',
    images: ['./images/【观点地产网】(220214)PC端官网文章页.jpg'],
    icon: Newspaper,
    color: 'teal',
    link: 'https://www.guandian.cn/article/20220214/284105.html',
  },
  {
    type: 'Speaking Engagement',
    title: 'DeepSeek Enterprise Deployment and Application',
    publication: 'Shenzhen Longgang HR Association AI Summit',
    year: '2025',
    description: 'Keynote speaker at the 2025 Longgang Human Resources Grand Lecture, sharing insights on AI deployment in enterprises.',
    images: [
      '/images/(250410)深圳龙岗人力资源协会AI讲座讲演.png',
      '/images/【龙人协&术源万算】(250419)AI·智汇未来 赋能发展-2025年龙岗人力资源大讲堂讲演.png',
    ],
    icon: Mic,
    color: 'gold',
    link: null,
  },
];

const additionalMedia = [
  {
    title: 'AI合富上线一周年记',
    image: './images/【合富】(220716)AI合富上线一周年记.jpg',
    year: '2022',
  },
  {
    title: '产业数字化转型演讲',
    image: './images/【AI合富】(220520)产业数字化转型，地产将迎来哪些机遇与挑战-张鹏《观点数字化大会》谈论讲演（网页）.png',
    year: '2022',
  },
  {
    title: 'Hopefluent Magazine Feature',
    image: './images/合富集团合富人杂志29期01-18\'.jpg',
    year: '2018',
  },
];

export default function Media() {
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
            <Badge className="bg-white/20 text-white mb-4">Publications</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">Media & Publications</h1>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Featured in industry publications, magazine interviews, and speaking engagements 
              sharing insights on AI, FinTech, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Media */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mediaItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Images */}
                  <div className={`grid ${item.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-2 p-4 bg-slate-50`}>
                    {item.images.map((img, i) => (
                      <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img
                          src={img}
                          alt={`${item.title} - ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${
                        item.color === 'navy' ? 'bg-navy-50' :
                        item.color === 'teal' ? 'bg-teal-50' : 'bg-gold-50'
                      }`}>
                        <item.icon className={`h-5 w-5 ${
                          item.color === 'navy' ? 'text-navy-500' :
                          item.color === 'teal' ? 'text-teal-500' : 'text-gold-500'
                        }`} />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {item.type}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-navy-600 mb-2">{item.title}</h3>

                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <Calendar className="h-4 w-4" />
                      {item.year}
                    </div>

                    <p className="text-teal-600 font-medium mb-4">{item.publication}</p>
                    <p className="text-slate-600 mb-6">{item.description}</p>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-navy-600 hover:text-navy-700 font-medium"
                      >
                        Read Article
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Media Gallery */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-navy-200 text-navy-600 mb-4">
              Gallery
            </Badge>
            <h2 className="text-3xl font-bold text-navy-500">
              More Media Coverage
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalMedia.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-medium text-navy-600">{item.title}</h4>
                  <p className="text-sm text-slate-500 mt-1">{item.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Publications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-teal-200 text-teal-600 mb-4">
              Research
            </Badge>
            <h2 className="text-3xl font-bold text-navy-500">
              Academic Publications
            </h2>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-50 rounded-lg">
                  <FileText className="h-6 w-6 text-navy-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-navy-600">
                    Datacenter Net Profit Optimization with Deadline Dependent Pricing
                  </h4>
                  <p className="text-teal-600 font-medium mt-1">
                    CISS Conference, Princeton University
                  </p>
                  <p className="text-sm text-slate-500 mt-1">2012</p>
                  <p className="text-slate-600 mt-3">
                    Research paper on cloud computing optimization, published at the Conference 
                    on Information Sciences and Systems. This work explored innovative pricing 
                    models for datacenter resource allocation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Interested in collaborating on research or industry publications?
            </p>
            <Button className="bg-navy-500 hover:bg-navy-600 text-white">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
