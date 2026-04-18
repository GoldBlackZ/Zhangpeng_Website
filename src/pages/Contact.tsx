import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Send,
  MessageSquare,
  Download
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'zhangpeng20252025@163.com',
    href: 'mailto:zhangpeng20252025@163.com',
    color: 'navy',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+86 6995 8288',
    href: 'tel:+8669958288',
    color: 'teal',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Hong Kong SAR, China',
    href: null,
    color: 'gold',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/zhangpeng',
    color: 'bg-[#0077B5]',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/zhangpeng',
    color: 'bg-[#333]',
  },
];

export default function Contact() {
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
            <Badge className="bg-white/20 text-white mb-4">Contact</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold">Get In Touch</h1>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              I'm always open to discussing AI product opportunities, digital transformation 
              projects, and industry collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="border-navy-200 text-navy-600 mb-4">
                  Contact Info
                </Badge>
                <h2 className="text-3xl font-bold text-navy-500 mb-4">
                  Let's Connect
                </h2>
                <p className="text-slate-600">
                  Feel free to reach out for any inquiries, collaboration opportunities, 
                  or just to say hello. I'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${
                          item.color === 'navy' ? 'bg-navy-50' : 
                          item.color === 'teal' ? 'bg-teal-50' : 'bg-gold-50'
                        }`}>
                          <item.icon className={`h-5 w-5 ${
                            item.color === 'navy' ? 'text-navy-500' : 
                            item.color === 'teal' ? 'text-teal-500' : 'text-gold-500'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-500">{item.label}</p>
                          {item.href ? (
                            <a 
                              href={item.href}
                              className="text-base font-medium text-slate-700 hover:text-navy-600 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-base font-medium text-slate-700">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                  Connect on Social Media
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white p-3 rounded-lg hover:opacity-90 transition-opacity shadow-md`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Download Resume */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-navy-500 to-navy-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 rounded-lg">
                      <Download className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Download Resume</h4>
                      <p className="text-sm text-white/80">Get my full resume in PDF format</p>
                    </div>
                    <Button 
                      variant="secondary" 
                      className="bg-white text-navy-600 hover:bg-white/90"
                      onClick={() => alert('Resume download functionality would be implemented here.')}
                    >
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy-500 mb-6">Send a Message</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition-all"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-navy-500 hover:bg-navy-600 text-white py-3"
                      onClick={() => alert('Thank you for your message! I will get back to you soon.')}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="h-12 w-12 text-teal-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-navy-500 mb-4">
            Looking Forward to Hearing From You
          </h2>
          <p className="text-lg text-slate-600">
            "I am always open to discussing AI product opportunities, digital transformation 
            projects, and industry collaborations. Let's connect and explore how we can work together."
          </p>
        </div>
      </section>
    </div>
  );
}
