import { ExternalLink, Github, Eye, X } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Apps Usecorp',
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

  const selectedProjectData = projects.find(p => p.id === selectedProject);

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

        {/* Inventory Grid - Game Style */}
        <div className="mx-auto">
          {/* Inventory Header */}
          <div className="bg-gradient-to-r from-dark-secondary to-dark-primary border border-neon-aqua/30 rounded-t-lg p-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-neon-aqua/20 border border-neon-aqua rounded flex items-center justify-center">
                <span className="text-neon-aqua font-orbitron font-bold text-sm">{projects.length}</span>
              </div>
              <div>
                <h3 className="font-orbitron text-sm text-neon-aqua uppercase tracking-wider">Projetos</h3>
                <p className="font-fira text-xs text-gray-400">Selecione um item para ver detalhes</p>
              </div>
            </div>
          </div>

          {/* Inventory Slots */}
          <div className="bg-black/40 border-x border-b border-neon-aqua/30 rounded-b-lg p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="inventory-slot group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedProject(project.id)}
                >
                  {/* Item Image */}
                  <div className="relative w-full aspect-square overflow-hidden rounded">
                    <img
                      src={`/portfolio/src/assets/images/${project.image}`}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 pointer-events-none transition-opacity duration-300 group-hover:opacity-40`}></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <Eye className="w-6 h-6 text-neon-aqua mx-auto mb-1" />
                        <span className="text-neon-aqua text-xs font-fira font-bold uppercase">Examinar</span>
                      </div>
                    </div>
                  </div>

                  {/* Item Name */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-3 pt-10">
                    <h3 className="font-orbitron text-sm font-bold text-neon-aqua leading-tight line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="flex gap-1 mt-1.5 flex-wrap">
                      {project.technologies.slice(0, 2).map((tech, idx) => (
                        <span key={tech} className="text-xs text-gray-400 font-fira">
                          {tech}{idx === 0 && project.technologies.length > 1 ? ',' : ''}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="text-xs text-gray-500 font-fira">+{project.technologies.length - 2}</span>
                      )}
                    </div>
                  </div>

                  {/* Rarity Border Glow */}
                  <div className={`absolute inset-0 rounded border-2 border-transparent group-hover:border-neon-aqua transition-all duration-300 pointer-events-none group-hover:shadow-[0_0_20px_rgba(0,255,198,0.5)]`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details Modal */}
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl bg-[#0a0a0a] border-neon-aqua/30 text-white p-0 overflow-hidden max-h-[90vh] flex flex-col">
            {selectedProjectData && (
              <>
                {/* Fixed Header */}
                <div className="sticky top-0 z-50 bg-gradient-to-r from-dark-secondary to-dark-primary border-b border-neon-aqua/30 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-neon-aqua"></div>
                        <div className="w-3 h-3 rounded-full bg-neon-blue"></div>
                        <div className="w-3 h-3 rounded-full bg-neon-pink"></div>
                      </div>
                      <div className="text-xs font-fira text-gray-400">
                        {selectedProjectData.title.toLowerCase().replace(/\s+/g, '_')}
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Fechar</span>
                    </button>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto flex-1">
                  <div className="grid md:grid-cols-2 gap-6 p-6">
                    {/* Left Column - Image and Basic Info */}
                    <div className="space-y-4">
                      <div className="w-full h-64 rounded overflow-hidden relative border border-neon-aqua/20">
                        <img
                          src={`/portfolio/src/assets/images/${selectedProjectData.image}`}
                          alt={selectedProjectData.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${selectedProjectData.gradient} opacity-10 pointer-events-none`}></div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h4 className="text-xs font-fira text-neon-pink uppercase tracking-wider mb-2">Plataformas</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProjectData.platforms.map((platform) => (
                              <span
                                key={platform}
                                className="px-3 py-1 rounded text-xs font-fira border border-neon-pink/50 text-neon-pink bg-neon-pink/5"
                              >
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>

                        {selectedProjectData.links && selectedProjectData.links.length > 0 && (
                          <div>
                            <h4 className="text-xs font-fira text-neon-aqua uppercase tracking-wider mb-2">Links</h4>
                            <div className="flex flex-col gap-2">
                              {selectedProjectData.links.map((link, linkIndex) => (
                                <a
                                  key={linkIndex}
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 px-3 py-2 rounded bg-neon-aqua/10 hover:bg-neon-aqua/20 text-neon-aqua border border-neon-aqua/30 hover:border-neon-aqua transition-all text-xs font-fira hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  <span>{link.title}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-orbitron font-bold gradient-text mb-3">
                          {selectedProjectData.title}
                        </h3>
                        <p className="text-gray-300 font-fira text-sm leading-relaxed">
                          {selectedProjectData.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-fira text-neon-blue uppercase tracking-wider mb-3">Tecnologias</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProjectData.technologies.map((tech, techIndex) => (
                            <span
                              key={tech}
                              className={`px-3 py-1.5 rounded text-xs font-fira transition-all hover:scale-105 ${
                                techIndex % 3 === 0
                                  ? 'bg-neon-aqua/10 text-neon-aqua border border-neon-aqua/30'
                                  : techIndex % 3 === 1
                                    ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/30'
                                    : 'bg-neon-pink/10 text-neon-pink border border-neon-pink/30'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats Section - Inspired by game UI */}
                      <div className="border border-neon-aqua/20 rounded p-4 bg-neon-aqua/5">
                        <h4 className="text-xs font-fira text-neon-aqua uppercase tracking-wider mb-3">Informações</h4>
                        <div className="space-y-2 font-fira text-xs">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Plataformas:</span>
                            <span className="text-white font-bold">{selectedProjectData.platforms.length}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Tecnologias:</span>
                            <span className="text-white font-bold">{selectedProjectData.technologies.length}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Tipo:</span>
                            <span className="text-neon-pink">Projeto Profissional</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
