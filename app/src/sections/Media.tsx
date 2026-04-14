import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Newspaper, Mic, ExternalLink, Calendar } from 'lucide-react';

const mediaFeatures = [
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
    color: '#0071e3',
  },
  {
    type: 'Industry Publication',
    title: 'AI Hopefluent: Reconstructing Real Estate Marketing',
    publication: 'Guandian Real Estate Network',
    year: '2022',
    description: 'In-depth article on how AI technology is transforming real estate marketing and customer service.',
    images: ['./images/【观点地产网】(220214)PC端官网文章页.jpg'],
    icon: Newspaper,
    color: '#5e5ce6',
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
    color: '#bf5af2',
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
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
      id="media"
      ref={sectionRef}
      className="py-32 bg-[#000] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#bf5af2]/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0071e3]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Badge className="bg-[#bf5af2]/10 text-[#bf5af2] hover:bg-[#bf5af2]/20 mb-4">
            Publications
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Media & Publications
          </h2>
          <p className="mt-4 text-white/50 max-w-2xl mx-auto">
            Featured in industry publications, magazine interviews, and speaking engagements 
            sharing insights on AI, FinTech, and digital transformation.
          </p>
        </div>

        {/* Featured Media */}
        <div className="space-y-8">
          {mediaFeatures.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card className="border-0 shadow-lg bg-white/5 backdrop-blur-sm overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Images */}
                  <div className={`lg:col-span-1 grid ${feature.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-1 p-1`}>
                    {feature.images.map((img, i) => (
                      <div 
                        key={i} 
                        className="aspect-[4/3] overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                      >
                        <img
                          src={img}
                          alt={`${feature.title} - ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Content */}
                  <CardContent className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${feature.color}20` }}
                      >
                        <feature.icon className="h-5 w-5" style={{ color: feature.color }} />
                      </div>
                      <Badge 
                        className="text-xs"
                        style={{ backgroundColor: `${feature.color}20`, color: feature.color }}
                      >
                        {feature.type}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>

                    <div className="flex items-center gap-2 text-sm text-white/50 mb-3">
                      <Calendar className="h-4 w-4" />
                      {feature.year}
                    </div>

                    <p className="text-[#0071e3] font-medium mb-4">{feature.publication}</p>
                    <p className="text-white/60">{feature.description}</p>

                    {feature.link && (
                      <a
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 text-[#0071e3] hover:text-[#0077ed] font-medium"
                      >
                        Read Article
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Media Gallery */}
        <div 
          className={`mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl font-semibold text-white mb-6">More Media Coverage</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {additionalMedia.map((item, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg bg-white/5 overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-medium text-white text-sm group-hover:text-[#0071e3] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/40 mt-1">{item.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic */}
        <div 
          className={`mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Card className="border-0 shadow-lg bg-white/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#34c759]/20 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-[#34c759]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Datacenter Net Profit Optimization with Deadline Dependent Pricing
                  </h4>
                  <p className="text-[#0071e3] font-medium">CISS Conference, Princeton University</p>
                  <p className="text-sm text-white/40 mt-1">2012</p>
                  <p className="text-white/60 mt-4">
                    Research paper on cloud computing optimization, published at the Conference 
                    on Information Sciences and Systems. This work explored innovative pricing 
                    models for datacenter resource allocation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Media"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <button
              className="absolute -top-12 right-0 text-white/70 hover:text-white text-sm"
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
