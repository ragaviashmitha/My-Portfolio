import { ExternalLink, Github, Brain, Code, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Online Explainable Multi-Class Self-Healing Intrusion Detection System',
      description: 'Designed a behavioral graph from anonymized network traffic and applied Graph Neural Networks (Graph Attention Network) for intrusion detection. Utilized clustering techniques for behavior modeling and classification, and integrated Explainable AI (XAI) to ensure transparency.',
      tech: ['Graph Neural Networks', 'XAI', 'Python', 'ML', 'Clustering'],
      icon: Brain,
      category: 'AI/ML',
      highlights: ['Intrusion Detection', 'Explainable AI', 'Behavioral Graph Analysis']
    },
    {
      title: 'Intelligent Disease Prediction and Monitoring System',
      description: 'Built an AI/ML system to use real healthcare data and patient inputs. Trained models for accurate predictions. Developed a website dashboard for real-time health monitoring and risk assessment.',
      tech: ['AI/ML', 'Python', 'Real-time Monitoring', 'Dashboard'],
      icon: Brain,
      category: 'AI/ML',
      highlights: ['Disease Prediction', 'Real-time Dashboard', 'Risk Assessment']
    },
    {
      title: 'Investment Management Company Website',
      description: 'Developed a responsive Investment Management website with secure authentication, portfolio tracking, and interactive dashboards, ensuring a seamless user experience.',
      tech: ['React', 'Authentication', 'Portfolio Tracking', 'Interactive Dashboards'],
      icon: Code,
      category: 'Web Development',
      highlights: ['Secure Authentication', 'Portfolio Tracking', 'Responsive Design']
    },
    {
      title: 'Pothole Detection',
      description: 'A high-performance, single-file web application for detecting potholes from road surface images or live webcam feeds. This version is completely self-contained and communicates directly with the Roboflow API.',
      tech: ['Computer Vision', 'Web Development', 'Roboflow API'],
      icon: Brain,
      category: 'AI & Web Development',
      highlights: ['Live Detection', 'API Integration', 'Self-contained']
    }
  ];

  const internships = [
    {
      organization: 'HUROMAT',
      role: 'Freelance Full Stack and AI Developer',
      duration: 'Freelance',
      description: 'Delivered freelance full stack and AI solutions, including frontend, backend, server management, and Docker-based deployment. Built scalable applications and integrated APIs.',
      skills: ['Full Stack', 'AI Solutions', 'Docker', 'API Integration']
    },
    {
      organization: 'HUROMATA',
      role: 'Full Stack Development Intern',
      duration: '3 Months',
      description: 'Developed full stack web applications with frontend, backend, and API integration. Improved performance, handled databases, and ensured smooth end-to-end functionality.',
      skills: ['Full Stack', 'API Integration', 'Database Management', 'Performance Optimization']
    },
    {
      organization: 'HACKBOX',
      role: 'AI & Software Development Intern',
      duration: '1 Year',
      description: 'Developed web applications and AI-based solutions with responsive frontend design and API integration. Improved performance and implemented ML features.',
      skills: ['AI', 'Software Development', 'Responsive Design', 'ML Features', 'Git']
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