import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'zhangpeng20252025@163.com',
    href: 'mailto:zhangpeng20252025@163.com',
    color: '#0071e3',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+86 6995 8288',
    href: 'tel:+8669958288',
    color: '#34c759',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hong Kong SAR, China',
    href: null,
    color: '#ff9500',
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [showModal, setShowModal] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section
      id="contact"
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
          <Badge className="bg-[#34c759]/10 text-[#34c759] hover:bg-[#34c759]/20 mb-4">
            Contact
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1d1d1f] tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-[#86868b] max-w-2xl mx-auto">
            I'm always open to discussing AI product opportunities, digital transformation 
            projects, and industry collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div 
            className={`space-y-8 transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div>
              <h3 className="text-xl font-semibold text-[#1d1d1f] mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card 
                    key={index} 
                    className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                          style={{ backgroundColor: `${item.color}15` }}
                        >
                          <item.icon className="h-5 w-5" style={{ color: item.color }} />
                        </div>
                        <div>
                          <p className="text-sm text-[#86868b]">{item.label}</p>
                          {item.href ? (
                            <a 
                              href={item.href}
                              className="text-lg font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-lg font-medium text-[#1d1d1f]">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-[#0071e3] to-[#5e5ce6] text-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                    <Download className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Download Resume</h4>
                    <p className="text-sm text-white/70">Get my full resume in PDF format</p>
                  </div>
                  <a 
                    href="/ZHANG-Peng-CV.pdf" 
                    download="ZHANG-Peng-CV.pdf"
                    className="bg-white text-[#0071e3] hover:bg-white/90 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
                  >
                    Download
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right - Contact Form */}
          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#86868b] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] focus:ring-2 focus:ring-[#0071e3] outline-none transition-all"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#86868b] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] focus:ring-2 focus:ring-[#0071e3] outline-none transition-all"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#86868b] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] focus:ring-2 focus:ring-[#0071e3] outline-none transition-all"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#86868b] mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-[#f5f5f7] border-0 rounded-xl text-[#1d1d1f] focus:ring-2 focus:ring-[#0071e3] outline-none transition-all resize-none"
                      placeholder="Your message..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-xl py-6 text-base font-medium"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* WeChat QR Code */}
        <div 
          className={`mt-20 text-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block">
            <p className="text-sm text-[#86868b] mb-4">Scan to connect on WeChat</p>
            <div className="p-4 bg-white rounded-2xl shadow-lg">
              <img 
                src="/images/wechat-qr.jpg" 
                alt="WeChat QR Code" 
                className="w-40 h-40 object-contain"
              />
            </div>
            <p className="text-xs text-[#86868b] mt-3">张鹏PaulAi</p>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-[#34c759]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="h-8 w-8 text-[#34c759]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">Message Received!</h3>
            <p className="text-[#86868b] mb-6">
              Thank you for reaching out. I've received your message and will get back to you soon.
            </p>
            <p className="text-sm text-[#0071e3] mb-6">
              For faster response, feel free to add me on WeChat!
            </p>
            <Button 
              onClick={() => setShowModal(false)}
              className="bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-8"
            >
              Got it
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
