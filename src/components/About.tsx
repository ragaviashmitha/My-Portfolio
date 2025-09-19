import { Calendar, MapPin, GraduationCap, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: 'Date of Birth', value: '01/09/2004' },
    { icon: MapPin, label: 'Gender', value: 'Female' },
    { icon: GraduationCap, label: 'CGPA', value: '8.3 (2026)' },
    { icon: Mail, label: 'Email', value: 'ashmitharagavis@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9597816561' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="glow-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Seeking an entry-level role in the field of Information Technology where I can apply my skills in
 software development, data analysis, and emerging technologies, while actively contributing to the
 organization's success and expanding my expertise in a dynamic work environment. </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education & Background */}
          <div className="slide-up">
            <Card className="card-gradient p-8">
              <CardContent className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Education</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="skill-icon">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">B.Tech in Artificial Intelligence & Data Science</h4>
                      <p className="text-secondary font-medium">Karpagam Academy Of Higher Education</p>
                      <p className="text-muted-foreground">CGPA: 8.3 • Graduating 2026</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/50 pt-6">
                  <h4 className="font-semibold text-lg mb-4">Areas of Interest</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {['Web Development', 'Artificial Intelligence', 'Data Science', 'Machine Learning','UI/UX Design','MERN Stack Development'].map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">{interest}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Personal Information */}
          <div className="slide-up">
            <Card className="card-gradient p-8">
              <CardContent className="space-y-6">
                <div className="text-center mb-8">
                  <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
                </div>
                
                

                <div className="border-t border-border/50 pt-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Current Status</span>
                      <span className="font-medium text-primary">Final Year Student</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience Level</span>
                      <span className="font-medium text-secondary">Fresher</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Availability</span>
                      <span className="font-medium text-accent">Open for Work</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;