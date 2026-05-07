import { Calendar, MapPin, GraduationCap, Mail, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: 'Date of Birth', value: '01/09/2004' },
    { icon: GraduationCap, label: 'CGPA', value: '8.87 (2026)' },
    { icon: Mail, label: 'Email', value: 'ashmitharagavis@gmail.com' },];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="glow-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aspiring AI & Data Science student with strong skills in machine learning and web development, seeking a role in Information Technology to leverage my skills in Artificial Intelligence, Machine Learning, Data Science and software development while contributing to organizational success and continuously enhancing my expertise in a dynamic environment. </p>
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
                      <p className="text-muted-foreground">CGPA: 8.87 • Graduating 2026</p>
                    </div>
                  </div>
                </div>


              </CardContent>
            </Card>
          </div>

          {/* Personal Information */}
          <div className="slide-up">
            <Card className="card-gradient p-8 h-full">
              <CardContent className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Personal Info</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium text-foreground">{info.value}</p>
                      </div>
                    </div>
                  ))}
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