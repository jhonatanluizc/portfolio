
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce API Platform',
      description: 'Comprehensive REST API with microservices architecture, payment integration, and real-time inventory management.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Docker', 'AWS'],
      status: 'Production',
      type: 'Backend',
      github: 'https://github.com',
      demo: 'https://api-demo.com'
    },
    {
      id: 2,
      title: 'Real-time Dashboard',
      description: 'React-based analytics dashboard with WebSocket connections, interactive charts, and responsive design.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Chart.js', 'Tailwind'],
      status: 'Active',
      type: 'Frontend',
      github: 'https://github.com',
      demo: 'https://dashboard-demo.com'
    },
    {
      id: 3,
      title: 'DevOps Automation Suite',
      description: 'CI/CD pipeline automation with Docker containerization, automated testing, and deployment orchestration.',
      technologies: ['Docker', 'Jenkins', 'AWS', 'Terraform', 'Shell Scripts'],
      status: 'Maintenance',
      type: 'DevOps',
      github: 'https://github.com'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Full-stack application for social media data analysis with machine learning insights and interactive visualizations.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'React', 'D3.js', 'ML'],
      status: 'Development',
      type: 'Full Stack',
      github: 'https://github.com',
      demo: 'https://analytics-demo.com'
    },
    {
      id: 5,
      title: 'Blockchain Voting System',
      description: 'Secure voting platform using blockchain technology with smart contracts and decentralized architecture.',
      technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'Ethereum'],
      status: 'Research',
      type: 'Blockchain',
      github: 'https://github.com'
    },
    {
      id: 6,
      title: 'AI-Powered Chatbot',
      description: 'Intelligent customer service chatbot with natural language processing and multi-platform integration.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI', 'React'],
      status: 'Beta',
      type: 'AI/ML',
      github: 'https://github.com',
      demo: 'https://chatbot-demo.com'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'neon-aqua';
      case 'Active': return 'neon-blue';
      case 'Development': return 'neon-pink';
      case 'Beta': return 'yellow-400';
      case 'Research': return 'purple-400';
      case 'Maintenance': return 'orange-400';
      default: return 'gray-400';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Frontend': return 'neon-blue';
      case 'Backend': return 'neon-aqua';
      case 'Full Stack': return 'neon-pink';
      case 'DevOps': return 'green-400';
      case 'Blockchain': return 'purple-400';
      case 'AI/ML': return 'yellow-400';
      default: return 'gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto mb-6"></div>
          <p className="text-gray-300 font-fira max-w-2xl mx-auto">
            A showcase of innovative solutions and technical achievements across various domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="terminal-window animate-fade-in group hover:scale-105 transition-all duration-300">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className={`terminal-dot bg-${getStatusColor(project.status)}`}></div>
                  <div className="terminal-dot bg-gray-500"></div>
                  <div className="terminal-dot bg-gray-500"></div>
                </div>
                <div className="text-xs font-fira text-gray-400">{project.title.toLowerCase().replace(/\s+/g, '_')}.js</div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-fira bg-${getStatusColor(project.status)}/20 text-${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-neon-aqua transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-fira border border-${getTypeColor(project.type)} text-${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                </div>

                <p className="text-gray-300 font-fira text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded text-xs font-fira border transition-colors duration-300 ${
                        techIndex % 3 === 0
                          ? 'border-neon-aqua/50 text-neon-aqua hover:bg-neon-aqua/10'
                          : techIndex % 3 === 1
                          ? 'border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10'
                          : 'border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 neon-border hover:bg-neon-aqua/10 transition-all duration-300 text-sm font-fira"
                  >
                    <span>View Code</span>
                    <div className="w-1 h-1 bg-neon-aqua rounded-full animate-pulse"></div>
                  </a>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 border border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10 transition-all duration-300 text-sm font-fira rounded-lg"
                    >
                      <span>Live Demo</span>
                      <div className="w-1 h-1 bg-neon-pink rounded-full animate-pulse"></div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats Panel */}
        <div className="mt-16 hud-panel animate-fade-in">
          <div className="terminal-header mb-6">
            <div className="terminal-dots">
              <div className="terminal-dot bg-neon-aqua"></div>
              <div className="terminal-dot bg-neon-blue"></div>
              <div className="terminal-dot bg-neon-pink"></div>
            </div>
            <div className="text-xs font-fira text-gray-400">github_stats.json</div>
            <div className="w-16"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-dark-primary/50 rounded">
              <div className="text-3xl font-orbitron font-bold text-neon-aqua mb-2">50+</div>
              <div className="text-gray-300 font-fira text-sm">Repositories</div>
            </div>
            <div className="p-4 bg-dark-primary/50 rounded">
              <div className="text-3xl font-orbitron font-bold text-neon-blue mb-2">1,200+</div>
              <div className="text-gray-300 font-fira text-sm">Commits</div>
            </div>
            <div className="p-4 bg-dark-primary/50 rounded">
              <div className="text-3xl font-orbitron font-bold text-neon-pink mb-2">25+</div>
              <div className="text-gray-300 font-fira text-sm">Stars</div>
            </div>
            <div className="p-4 bg-dark-primary/50 rounded">
              <div className="text-3xl font-orbitron font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-gray-300 font-fira text-sm">Forks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
