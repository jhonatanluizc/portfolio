
const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      color: 'neon-aqua',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'PHP', level: 75 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      color: 'neon-blue',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Express.js', level: 92 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 80 }
      ]
    },
    {
      title: 'Databases & Tools',
      color: 'neon-pink',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'Redis', level: 85 },
        { name: 'Docker', level: 87 },
        { name: 'AWS', level: 82 }
      ]
    }
  ];

  const technologies = ['.NET Framework', 'Apache Cordova', 'Aplicativos móveis', 'Bootstrap', 'C#', 'Desenvolvimento de software', 'Desenvolvimento web', 'Git', 'JavaScript', 'MongoDB', 'Node.js', 'PostgreSQL', 'Python', 'React', 'React Native', 'Redes neurais artificiais', 'SQL', 'Tailwind CSS', 'TypeScript', '.NET', 'Webflow', 'Android Studio', 'Xcode', 'Google Play Console', 'App Store', 'SQL Server'].sort();

  const bestPractices = ['Boas Práticas de Segurança', 'Clean Code', 'Desenvolvimento Orientado a Teste', 'Design de API REST', 'Integração Contínua/Entrega Contínua', 'Microsserviços', 'Otimização de Banco de Dados', 'Princípios SOLID'];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Arsenal Técnico
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto mb-6"></div>
          <p className="text-gray-300 font-fira max-w-2xl mx-auto">
            Um kit de ferramentas abrangente de tecnologias e metodologias modernas para a construção de aplicações escaláveis
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        {/* <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="hud-panel animate-fade-in">
              <div className="terminal-header mb-6">
                <div className="terminal-dots">
                  <div className={`terminal-dot bg-${category.color}`}></div>
                  <div className="terminal-dot bg-gray-500"></div>
                  <div className="terminal-dot bg-gray-500"></div>
                </div>
                <div className="text-xs font-fira text-gray-400">{category.title.toLowerCase().replace(' ', '_')}.json</div>
                <div className="w-16"></div>
              </div>

              <h3 className={`text-xl font-orbitron font-bold text-${category.color} mb-6`}>
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="font-fira">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className={`text-${category.color} text-xs`}>{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-primary rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/70 transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        {/* Technology Cloud */}
        <div className="hud-panel mb-16 animate-fade-in">
          <div className="terminal-header mb-6">
            <div className="terminal-dots">
              <div className="terminal-dot bg-neon-aqua"></div>
              <div className="terminal-dot bg-neon-blue"></div>
              <div className="terminal-dot bg-neon-pink"></div>
            </div>
            <div className="text-xs font-fira text-gray-400">technologies.array</div>
            <div className="w-16"></div>
          </div>

          <h3 className="text-2xl font-orbitron font-bold text-neon-aqua mb-6">Stack</h3>

          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-full border font-fira text-sm transition-all duration-300 hover:scale-105 cursor-pointer ${index % 3 === 0
                  ? 'border-neon-aqua text-neon-aqua hover:bg-neon-aqua/10'
                  : index % 3 === 1
                    ? 'border-neon-blue text-neon-blue hover:bg-neon-blue/10'
                    : 'border-neon-pink text-neon-pink hover:bg-neon-pink/10'
                  }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="hud-panel animate-fade-in">
          <div className="terminal-header mb-6">
            <div className="terminal-dots">
              <div className="terminal-dot bg-green-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-red-500"></div>
            </div>
            <div className="text-xs font-fira text-gray-400">best_practices.md</div>
            <div className="w-16"></div>
          </div>

          <h3 className="text-2xl font-orbitron font-bold text-neon-pink mb-6">Filosofia de Desenvolvimento</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {bestPractices.map((practice, index) => (
              <div
                key={practice}
                className="p-4 bg-dark-primary/50 rounded border-l-4 border-neon-aqua font-fira text-sm text-gray-300 hover:bg-dark-primary/70 transition-colors duration-300"
              >
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-neon-aqua rounded-full mr-3 animate-pulse"></span>
                  {practice}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
