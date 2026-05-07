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
      skills: ['Java', 'Python', 'C/C++', 'SQL'],
      color: 'from-primary to-secondary'
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Tailwind CSS', 'DOM manipulation'],
      color: 'from-secondary to-accent'
    },
    {
      title: 'Tools & Technologies',
      icon: Terminal,
      skills: ['Git', 'GitHub', 'Visual Studio Code', 'Canva', 'Figma', 'AI Tools'],
      color: 'from-accent to-primary'
    },
    {
      title: 'Data Science',
      icon: BarChart3,
      skills: ['Tableau', 'Power BI', 'NumPy', 'Pandas', 'Matplotlib'],
      color: 'from-primary to-accent'
    },
    {
      title: 'Artificial Intelligence',
      icon: Brain,
      skills: ['Machine Learning (ML)'],
      color: 'from-secondary to-primary'
    }
  ];

  const certifications = [
    'Java',
    'Artificial Intelligence',
    'FullStack Development',
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-glass slide-up group hover:scale-105 transition-all duration-500 overflow-hidden min-h-[220px] flex flex-col items-center justify-center cursor-default relative">
              <CardHeader className="text-center transition-all duration-500 group-hover:-translate-y-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${category.color} p-4 mb-4 shadow-lg group-hover:shadow-primary/20 transition-all duration-500`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold tracking-tight">{category.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="absolute inset-0 flex flex-col bg-card/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 overflow-hidden">
                <div className="w-full flex flex-col h-full">
                  <h4 className="text-primary font-bold text-center mb-4 border-b border-primary/20 pb-2 shrink-0">{category.title}</h4>
                  <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-3 slide-up" style={{ animationDelay: `${skillIndex * 50}ms` }}>
                        <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_var(--primary-glow)] shrink-0"></div>
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
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