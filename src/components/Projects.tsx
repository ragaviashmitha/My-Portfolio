import { ExternalLink, Github, Brain, Code, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Burger Billing System',
      description: 'A comprehensive billing system built with Python featuring pricing calculations,  and efficient order handling. Includes user-friendly interface and receipt generation.',
      tech: ['Python', 'File Handling'],
      icon: Code,
      category: 'Software Development',
      highlights: [ 'Order Processing', 'Receipt Generation']
    },
    {
      title: 'Sentiment Analysis of Tweets',
      description: 'Advanced NLP and machine learning model for analyzing and classifying tweet sentiments. Implements natural language processing techniques to determine emotional tone of social media content.',
      tech: ['Python', 'NLP', 'Machine Learning', 'Data Processing'],
      icon: Brain,
      category: 'AI/ML',
      highlights: ['NLP Processing', 'ML Classification', 'Data Analysis']
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A personal portfolio website showcasing my projects, skills, and experience. Built with modern web technologies and responsive design principles.',
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      icon: Code,
      category: 'Web Development',
      highlights: ['Responsive Design',  'User Experience']
    }

  ];

  const internships = [
    {
      organization: 'Internz Learn',
      role: 'AI & Data Science Intern',
      duration: '30 days',
      description: 'Gained hands-on experience in artificial intelligence and data science methodologies, working on real-world datasets and implementing ML algorithms.',
      skills: ['Data Analysis', 'Machine Learning', 'Python']
    },
    {
      organization: 'Pantech E-Learning',
      role: 'Python Full Stack Developer Intern',
      duration: '15 days',
      description: 'Developed full-stack web applications using Python, learned modern web development practices and database integration.',
      skills: ['Python', 'Web Development', 'Database Management', 'Full Stack']
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Projects & <span className="glow-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects and professional internship experiences, 
            demonstrating practical application of AI, web development, and software engineering skills.
          </p>
        </div>

        {/* Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-gradient slide-up hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="skill-icon">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <p className="text-sm text-accent font-medium">{project.category}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  
                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-secondary" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                 
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div className="fade-in">
          <h3 className="text-3xl font-bold text-center mb-12">Professional Experience</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {internships.map((internship, index) => (
              <Card key={index} className="card-glass slide-up">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {internship.organization.split(' ')[0][0]}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{internship.organization}</CardTitle>
                      <p className="text-secondary font-medium">{internship.role}</p>
                      <p className="text-sm text-muted-foreground">{internship.duration}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{internship.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Skills Developed</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;