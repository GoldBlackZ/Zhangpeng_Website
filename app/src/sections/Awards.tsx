import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, Star, Medal, FileText, ExternalLink } from 'lucide-react';

// 荣誉奖项数据
const awardCategories = [
  {
    title: 'Project Awards',
    icon: Trophy,
    color: '#ff9500',
    items: [
      {
        title: 'Annual Best Project Award',
        year: '2017',
        organization: 'Hopefluent Group',
        description: 'Yidianqian Consumer Finance Platform - 180M+ RMB transaction volume in first 6 months',
        image: './images/【合富】2017年度优秀项目易点钱-171231.jpg',
      },
      {
        title: 'Internet Finance Innovation Award',
        year: '2018',
        organization: 'Hopefluent Group',
        description: 'Yizhongtong Business Management App - Covered 23 cities and 40+ channels',
        image: './images/【合富】2018年度最佳项目\"互金风云奖\"-181231.jpg',
      },
    ],
  },
  {
    title: 'Government Recognition',
    icon: Medal,
    color: '#0071e3',
    items: [
      {
        title: 'Guangzhou Youth Federation Committee Member',
        year: '2017',
        organization: 'Guangzhou Municipal Government',
        description: 'Appointed as committee member of the 12th Guangzhou Youth Federation',
        image: './images/【市青联】委任证书-170501.jpg',
      },
      {
        title: 'Tianhe District Youth Federation Committee Member',
        year: '2016',
        organization: 'Tianhe District Government',
        description: 'Appointed as committee member of the 4th Tianhe District Youth Federation',
        image: './images/i天河区青联第四届委员会a-160408.jpg',
      },
    ],
  },
];

// 专业认证
const certifications = [
  {
    name: 'Tencent Advertising Certified Marketer',
    issuer: 'Tencent',
    year: '2022',
    image: './images/【腾讯】(220829)腾讯广告认证营销师_Pearson_DownLoadCer_certificateID=815-TX220722910-MS-ALL.jpg',
  },
  {
    name: 'Tencent Advertising Certified Assistant',
    issuer: 'Tencent',
    year: '2022',
    image: './images/【腾讯】(220807)腾讯广告认证营销助理_Pearson_DownLoadCer_certificateID=626-TX220722910-MA-ALL.jpg',
  },
  {
    name: 'ByteDance Live Operations Marketer',
    issuer: 'ByteDance / 巨量引擎',
    year: '2024',
    image: './images/(240704)巨量引擎直播运营营销师-数字营销职业能力认证-巨量认证.jpg',
  },
  {
    name: 'Live Streaming Salesperson Certificate (Level 4)',
    issuer: 'ByteDance / 今日头条',
    year: '2024',
    image: './images/(240704)职业技能等级证书-直播销售员-四级中级工-字节今日头条.jpg',
  },
];

// 软件著作权列表
const softwareCopyrights = [
  'Financial Risk Alert Software V1.0',
  'Financial Market Reporting System V1.0',
  'Financial Institution Supervision Platform V1.0',
  'Financial Consumer Installment System V1.0',
  'Financial Credit Analysis System V1.0',
  'Financial Industry Marketing Management System V1.0',
  'Financial Asset Management System V1.0',
  'Real Estate Valuation System',
  'Yizhongtong Business Management System',
  'HFcredit Risk Control System',
  'AI Hopefluent Platform',
  'SRR Intelligent Case Processing System',
];

// 专利统计
const patentStats = [
  { label: 'Total Patents & Copyrights', value: '30+', color: '#0071e3' },
  { label: 'FinTech Systems', value: '12', color: '#5e5ce6' },
  { label: 'AI Patents (2024-2025)', value: '9', color: '#bf5af2' },
];

export default function Awards() {
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
      id="awards"
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
          <Badge className="bg-[#ff9500]/10 text-[#ff9500] hover:bg-[#ff9500]/20 mb-4">
            Recognition
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-tight">
            Awards & Honors
          </h2>
          <p className="mt-4 text-[#86868b] max-w-2xl mx-auto">
            Recognized for excellence in product innovation, digital transformation, 
            and industry leadership.
          </p>
        </div>

        {/* Patent Stats */}
        <div 
          className={`grid grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {patentStats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white rounded-2xl shadow-sm"
            >
              <div 
                className="text-4xl font-semibold"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-[#86868b] mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Awards by Category */}
        <div className="space-y-12">
          {awardCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(catIndex + 1) * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon className="h-5 w-5" style={{ color: category.color }} />
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f]">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item, index) => (
                  <Card 
                    key={index} 
                    className="group border-0 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <div className="flex">
                      {/* Thumbnail */}
                      <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Content */}
                      <CardContent className="p-4 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-medium text-[#1d1d1f] text-sm group-hover:text-[#0071e3] transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-xs text-[#86868b] mt-1">
                              {item.organization} · {item.year}
                            </p>
                            <p className="text-xs text-[#86868b]/70 mt-2 line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-[#86868b] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Certifications */}
        <div 
          className={`mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#34c759]/10 flex items-center justify-center">
              <Award className="h-5 w-5 text-[#34c759]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1d1d1f]">Professional Certifications</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="group border-0 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(cert.image)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-3">
                  <p className="text-sm font-medium text-[#1d1d1f] line-clamp-2 group-hover:text-[#0071e3] transition-colors">
                    {cert.name}
                  </p>
                  <p className="text-xs text-[#86868b] mt-1">
                    {cert.issuer} · {cert.year}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Software Copyrights */}
        <div 
          className={`mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#5e5ce6]/10 flex items-center justify-center">
              <FileText className="h-5 w-5 text-[#5e5ce6]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1d1d1f]">Software Copyrights</h3>
          </div>

          <Card className="border-0 shadow-sm bg-white">
            <CardContent className="p-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {softwareCopyrights.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 p-3 bg-[#f5f5f7] rounded-lg"
                  >
                    <Star className="h-4 w-4 text-[#ff9500] flex-shrink-0" />
                    <span className="text-sm text-[#1d1d1f]">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Award/Certificate"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <button
              className="absolute -top-12 right-0 text-white/70 hover:text-white"
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
