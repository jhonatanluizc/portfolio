const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Juntos Campus',
      role: 'Engenheiro de Software Senior',
      period: '2020 - Presente',
      location: 'Itanhandu, MG',
      type: 'Full-time',
      description: 'Atuação no ciclo completo de desenvolvimento de software, desde análise e arquitetura até entrega e manutenção. Liderança técnica em projetos móveis e web, com foco em performance, escalabilidade e boas práticas de engenharia. Desenvolvimento de aplicações mobile com React Native e backend em .NET.',
      achievements: [
        'Publicação de aplicativos na App Store e Google Play com Xcode e Android Studio',
        'Arquitetura escalável utilizando .NET e microsserviços',
        'Integrações robustas com APIs REST externas e internas',
        'Criação de páginas responsivas no Webflow para campanhas e landing pages',
        'Refatoração de código legado com foco em estabilidade e desempenho'
      ],
      technologies: ['React Native', '.NET', 'C#', 'Webflow', 'Android Studio', 'Xcode', 'Google Play Console', 'App Store', 'SQL Server']
    },
    {
      id: 2,
      company: 'Usecorp',
      role: 'Engenheiro de Software Senior',
      period: '2021 - Presente',
      location: 'São Paulo, SP',
      type: 'Full-time',
      description: 'Responsável pelo desenvolvimento e manutenção de sistemas corporativos, aplicativos Android e iOS. Atuação com foco em backend utilizando .NET e C#, integração de APIs, publicação e manutenção de aplicativos nas lojas Google Play e App Store. Participação em decisões técnicas e melhoria contínua de performance e segurança das aplicações.',
      achievements: [
        'Manutenção e publicação de aplicativos Android na Google Play utilizando Android Studio',
        'Manutenção e publicação de aplicativos iOS na App Store utilizando Xcode',
        'Desenvolvimento de sistemas backend em .NET e C#',
        'Integrações complexas com APIs REST internas e externas'
      ],
      technologies: ['React Native', '.NET', 'C#', 'Android Studio', 'Xcode', 'Google Play Console', 'App Store Connect', 'REST APIs']
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time': return 'neon-aqua';
      case 'Freelance': return 'neon-pink';
      case 'Contract': return 'neon-blue';
      default: return 'gray-400';
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Jornada Profissional
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto mb-6"></div>
          <p className="text-gray-300 font-fira max-w-2xl mx-auto">
            Uma linha do tempo de crescimento, desafios e conquistas no desenvolvimento de software
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-aqua via-neon-blue to-neon-pink"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative animate-fade-in">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-neon-aqua rounded-full border-4 border-dark-primary animate-pulse-neon"></div>

                {/* Experience Card */}
                <div className="ml-20 terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <div className="terminal-dot bg-neon-aqua"></div>
                      <div className="terminal-dot bg-neon-blue"></div>
                      <div className="terminal-dot bg-neon-pink"></div>
                    </div>
                    <div className="text-xs font-fira text-gray-400">{exp.company.toLowerCase().replace(/\s+/g, '_')}.md</div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-fira bg-${getTypeColor(exp.type)}/20 text-${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-orbitron font-bold text-neon-aqua mb-1">
                          {exp.role}
                        </h3>
                        <div className="text-lg text-white font-fira mb-2">{exp.company}</div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400 font-fira">
                          <span>{exp.period}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 font-fira text-sm mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-neon-blue font-fira font-semibold mb-3">Principais Conquistas:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-gray-300 font-fira text-sm">
                            <span className="w-2 h-2 bg-neon-pink rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-neon-pink font-fira font-semibold mb-3">Tecnologias Utilizadas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded text-xs font-fira border transition-colors duration-300 ${techIndex % 3 === 0
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <div className="mt-16 hud-panel animate-fade-in">
          <div className="terminal-header mb-6">
            <div className="terminal-dots">
              <div className="terminal-dot bg-green-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-red-500"></div>
            </div>
            <div className="text-xs font-fira text-gray-400">career_summary.json</div>
            <div className="w-16"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-dark-primary/50 rounded">
              <div className="text-4xl font-orbitron font-bold text-neon-aqua mb-3">5+</div>
              <div className="text-gray-300 font-fira">Anos de Experiência</div>
              <div className="text-xs text-gray-500 font-fira mt-2">Aprendizado Contínuo</div>
            </div>
            <div className="p-6 bg-dark-primary/50 rounded">
              <div className="text-2xl font-orbitron font-bold text-neon-blue mb-3">Inteligência Artificial</div>
              <div className="text-gray-300 font-fira">Automação & Eficiência</div>
              <div className="text-xs text-gray-500 font-fira mt-2">Soluções inteligentes com IA para inovação e resultados</div>
            </div>
            <div className="p-6 bg-dark-primary/50 rounded">
              <div className="text-4xl font-orbitron font-bold text-neon-pink mb-3">100%</div>
              <div className="text-gray-300 font-fira">Clean Code</div>
              <div className="text-xs text-gray-500 font-fira mt-2">Práticas sólidas e código limpo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
