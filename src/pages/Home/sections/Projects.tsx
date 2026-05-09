import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'App Mobile Juntos Campus',
      description: 'Aplicativo mobile desenvolvido em React Native para gerenciamento educacional, com funcionalidades de acompanhamento acadêmico, notificações push e integração com sistemas internos.',
      technologies: ['React Native', 'TypeScript', 'REST API', 'Firebase', 'OneSignal'],
      image: '',
      gradient: 'from-neon-aqua to-neon-blue',
      platforms: ['iOS', 'Android']
    },
    {
      id: 2,
      title: 'Sistema Backend .NET',
      description: 'Desenvolvimento de APIs REST escaláveis em .NET/C# com arquitetura em microsserviços, integração com múltiplos sistemas e otimização de performance para alto volume de requisições.',
      technologies: ['.NET', 'C#', 'SQL Server', 'REST API', 'Microservices'],
      image: '',
      gradient: 'from-neon-blue to-neon-pink',
      platforms: ['Backend']
    },
    {
      id: 3,
      title: 'Apps Corporativos Usecorp',
      description: 'Desenvolvimento e manutenção de aplicativos móveis corporativos com foco em produtividade, disponíveis nas lojas Google Play e App Store.',
      technologies: ['React Native', 'JavaScript', 'Android Studio', 'Xcode', 'Firebase'],
      image: '',
      gradient: 'from-neon-pink to-neon-aqua',
      platforms: ['iOS', 'Android']
    },
    {
      id: 4,
      title: 'Landing Pages Webflow',
      description: 'Criação de páginas responsivas e otimizadas para campanhas e conversão, utilizando Webflow com integração de analytics e formulários.',
      technologies: ['Webflow', 'HTML', 'CSS', 'JavaScript', 'SEO'],
      image: '',
      gradient: 'from-neon-aqua via-neon-pink to-neon-blue',
      platforms: ['Web']
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Projetos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto mb-6"></div>
          <p className="text-gray-300 font-fira max-w-2xl mx-auto">
            Soluções desenvolvidas ao longo da minha jornada profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="terminal-window group hover:scale-105 transition-transform duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot bg-neon-aqua"></div>
                  <div className="terminal-dot bg-neon-blue"></div>
                  <div className="terminal-dot bg-neon-pink"></div>
                </div>
                <div className="text-xs font-fira text-gray-400">
                  {project.title.toLowerCase().replace(/\s+/g, '_')}.md
                </div>
                <div className="w-16"></div>
              </div>

              <div className="p-6">
                {/* Project Image Placeholder */}
                <div className={`w-full h-48 rounded mb-4 bg-gradient-to-br ${project.gradient} opacity-20 flex items-center justify-center`}>
                  <div className="text-6xl opacity-50">💻</div>
                </div>

                <h3 className="text-xl font-orbitron font-bold text-neon-aqua mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 font-fira text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="px-2 py-1 rounded text-xs font-fira border border-neon-pink/50 text-neon-pink"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-xs font-fira ${
                        techIndex % 3 === 0
                          ? 'bg-neon-aqua/10 text-neon-aqua'
                          : techIndex % 3 === 1
                          ? 'bg-neon-blue/10 text-neon-blue'
                          : 'bg-neon-pink/10 text-neon-pink'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
