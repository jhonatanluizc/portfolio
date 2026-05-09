import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Apps Corporativos Usecorp',
      description: 'Desenvolvimento e manutenção de aplicativos móveis corporativos com foco em produtividade, disponíveis nas lojas Google Play e App Store.',
      technologies: ['React Native', 'JavaScript', 'Android Studio', 'Xcode', 'Firebase', 'OneSignal'],
      image: 'usecorp-app.png',
      gradient: 'from-neon-pink to-neon-aqua',
      platforms: ['iOS', 'Android'],
      links: [
        { href: 'https://play.google.com/store/apps/details?id=juntos.campus.usecorp', title: 'Google Play' },
        { href: 'https://apps.apple.com/br/app/usecorp/id1578721727', title: 'App Store' }
      ]
    },
    {
      id: 2,
      title: 'Plataforma Usecorp',
      description: 'Desenvolvimento de módulos, landing pages, automações, blog, manutenção e integrações entre sistemas, proporcionando soluções completas e escaláveis para diferentes demandas corporativas.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'SQL', 'Webflow', 'C#', '.NET', 'Entity Framework'],
      image: 'usecorp-site.png',
      gradient: 'from-neon-blue to-neon-pink',
      platforms: ['Web', 'APIs'],
      links: [
        { href: 'https://www.usecorp.co', title: 'Website' },
      ]
    },
    {
      id: 3,
      title: 'Juntos Campus',
      description: 'Desenvolvimento de APIs REST, websites responsivos, programas internos em C#, algoritmos customizados e soluções integradas, otimizando processos e garantindo escalabilidade.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'C#', 'Kotlin', 'Python'],
      image: 'juntos-campus.png',
      gradient: 'from-neon-blue to-neon-pink',
      platforms: ['Web', 'Desktop'],
      links: [
        { href: 'https://www.juntoscampus.com/', title: 'Website' },
      ]
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

        <div className="grid md:grid-cols-3 gap-3">
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
                {/* Project Image */}
                <div className="w-full h-48 rounded mb-4 overflow-hidden relative">
                  <img
                    src={`/portfolio/src/assets/images/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 pointer-events-none`}></div>
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-xs font-fira ${techIndex % 3 === 0
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

                {/* Project Links */}
                {project.links && project.links.length > 0 && (
                  <div className="flex gap-3 pt-4 border-t border-gray-700/50">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded bg-neon-aqua/10 hover:bg-neon-aqua/20 text-neon-aqua border border-neon-aqua/30 hover:border-neon-aqua transition-all text-xs font-fira"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{link.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
