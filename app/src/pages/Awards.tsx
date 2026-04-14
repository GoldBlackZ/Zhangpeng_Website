import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, Star, Medal, Calendar } from 'lucide-react';

const awards = [
  {
    title: 'Annual Best Project Award',
    year: '2017',
    organization: 'Hopefluent Group',
    description: 'Yidianqian Consumer Finance Platform - 180M+ RMB transaction volume in first 6 months',
    image: '/images/【合富】2017年度优秀项目易点钱-171231.jpg',
    icon: Trophy,
    color: 'gold',
  },
  {
    title: 'Internet Finance Innovation Award',
    year: '2018',
    organization: 'Hopefluent Group',
    description: 'Yizhongtong Business Management App - Covered 23 cities and 40+ channels',
    image: '/images/【合富】2018年度最佳项目"互金风云奖"-181231.jpg',
    icon: Award,
    color: 'navy',
  },
  {
    title: 'Guangzhou Youth Federation Committee Member',
    year: '2017',
    organization: 'Guangzhou Municipal Government',
    description: 'Appointed as committee member of the 12th Guangzhou Youth Federation',
    image: '/images/【市青联】委任证书-170501.jpg',
    icon: Star,
    color: 'teal',
  },
  {
    title: 'Tianhe District Youth Federation Committee Member',
    year: '2016',
    organization: 'Tianhe District Government',
    description: 'Appointed as committee member of the 4th Tianhe District Youth Federation',
    image: '/images/i天河区青联第四届委员会a-160408.jpg',
    icon: Medal,
    color: 'navy',
  },
];

const certifications = [
  {
    name: 'Tencent Advertising Certified Marketer',
    year: '2022',
    image: '/images/【腾讯】(220829)腾讯广告认证营销师_Pearson_DownLoadCer_certificateID=815-TX220722910-MS-ALL.jpg',
  },
  {
    name: 'Tencent Advertising Certified Assistant',
    year: '2022',
    image: '/images/【腾讯】(220807)腾讯广告认证营销助理_Pearson_DownLoadCer_certificateID=626-TX220722910-MA-ALL.jpg',
  },
  {
    name: 'ByteDance Live Operations Marketer',
    year: '2024',
    image: '/images/(240704)巨量引擎直播运营营销师-数字营销职业能力认证-巨量认证.jpg',
  },
  {
    name: 'Live Streaming Salesperson Certificate',
    year: '2024',
    image: '/images/(240704)职业技能等级证书-直播销售员-四级中级工-字节今日头条.jpg',
  },
];

const patents = [
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

export default function Awards() {
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
            <Badge className="bg-white/20 text-white mb-4">Recognition</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">Awards & Honors</h1>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Recognized for excellence in product innovation, digital transformation, 
              and industry leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-gold-200 text-gold-600 mb-4">
              Awards
            </Badge>
            <h2 className="text-3xl font-bold text-navy-500">
              Professional Recognition
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="grid sm:grid-cols-2 gap-0">
                  <div className="aspect-square sm:aspect-auto overflow-hidden">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col justify-center">
                    <div className={`p-2 rounded-lg w-fit mb-3 ${
                      award.color === 'gold' ? 'bg-gold-50' :
                      award.color === 'navy' ? 'bg-navy-50' : 'bg-teal-50'
                    }`}>
                      <award.icon className={`h-5 w-5 ${
                        award.color === 'gold' ? 'text-gold-500' :
                        award.color === 'navy' ? 'text-navy-500' : 'text-teal-500'
                      }`} />
                    </div>
                    <h3 className="font-semibold text-navy-600 mb-1">{award.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-slate-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      {award.year}
                    </div>
                    <p className="text-sm font-medium text-teal-600 mb-2">{award.organization}</p>
                    <p className="text-sm text-slate-600">{award.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-teal-200 text-teal-600 mb-4">
              Certifications
            </Badge>
            <h2 className="text-3xl font-bold text-navy-500">
              Professional Certifications
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-medium text-navy-600 text-sm">{cert.name}</h4>
                  <p className="text-xs text-slate-500 mt-1">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Patents & Copyrights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-navy-200 text-navy-600 mb-4">
              Intellectual Property
            </Badge>
            <h2 className="text-3xl font-bold text-navy-500">
              Patents & Software Copyrights
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              30+ patents and software copyrights in FinTech and Real Estate Technology
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {patents.map((patent, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg"
                  >
                    <span className="text-teal-500 mt-0.5">•</span>
                    <span className="text-sm text-slate-700">{patent}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="flex flex-wrap gap-8 justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-navy-500">30+</div>
                    <div className="text-sm text-slate-500">Total Patents & Copyrights</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-500">12</div>
                    <div className="text-sm text-slate-500">FinTech Systems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gold-500">9</div>
                    <div className="text-sm text-slate-500">AI Patents (2024-2025)</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
