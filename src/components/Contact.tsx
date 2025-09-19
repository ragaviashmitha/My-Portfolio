import { Mail, Phone, Github, Linkedin, Code2, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ragaviashmitha@gmail.com',
      href: 'mailto:ragaviashmitha@gmail.com',
      color: 'from-primary to-secondary'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ragaviashmitha',
      username: '@ragaviashmitha',
      color: 'from-primary to-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/ashmitha-ragavi24',
      username: 'ashmitha-ragavi24',
      color: 'from-secondary to-secondary'
    }
   
  ];

  return (
    <section id="contact" className="section-padding bg-card/20">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="glow-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, exciting projects, 
            or just having a conversation about technology and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 slide-up">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-200 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} p-3 group-hover:scale-110 transition-transform duration-200`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </a>
                ))}

                
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2 slide-up">
            <Card className="card-glass h-full">
              <CardHeader>
                <CardTitle className="text-xl">Connect With Me</CardTitle>
                <p className="text-muted-foreground">
                  Follow my journey and connect with me on these platforms
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="card-gradient hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary/30">
                        <CardContent className="p-6 text-center">
                          <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${social.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-200`}>
                            <social.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{social.label}</h3>
                          <p className="text-sm text-muted-foreground">{social.username}</p>
                        </CardContent>
                      </Card>
                    </a>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border/50"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;