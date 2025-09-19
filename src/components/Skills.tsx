import { 
  Code2, 
  Database, 
  Globe, 
  Brain, 
  BarChart3, 
  GitBranch,
  Palette,
  Terminal
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Java', 'Python', 'C/C++', 'JavaScript', 'SQL'],
      color: 'from-primary to-secondary'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['HTML/CSS','React', 'Bootstrap', 'Tailwind CSS'],
      color: 'from-secondary to-accent'
    },
    {
      title: 'Tools & Technologies',
      icon: Terminal,
      skills: ['Git', 'GitHub', 'VS Code', 'Tableau', 'Power BI', 'MS Office'],
      color: 'from-accent to-primary'
    },
    {
      title: 'AI/ML Libraries',
      icon: Brain,
      skills: ['TensorFlow', 'Pandas', 'NumPy', 'Matplotlib'],
      color: 'from-primary to-accent'
    }
  ];

  const certifications = [
    'Web Development',
    'Tableau Desktop',
    'Java',
    'Python Full Stack',
    'Artificial Intelligence',
    'Machine Learning'
  ];

  return (
    <section id="skills" className="section-padding bg-card/20">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="glow-text">TECHNICAL SKILLS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning programming languages, web technologies, 
            and cutting-edge AI/ML frameworks.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-glass slide-up hover:scale-105 transition-transform duration-300">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${category.color} p-4 mb-4`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="fade-in">
          <Card className="card-gradient">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">
                <span className="glow-text">Certifications</span>
              </CardTitle>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 transition-colors duration-200">
                    <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;