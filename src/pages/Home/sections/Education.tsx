import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      institution: 'FATEC Prof. Waldomiro May',
      location: 'Cruzeiro/SP',
      period: '2018 - 2021',
      description: 'Formação focada em desenvolvimento de software, análise de sistemas, banco de dados e engenharia de software.',
      icon: '🎓',
      color: 'neon-aqua'
    },
    {
      id: 2,
      degree: 'Técnico em Informática',
      institution: 'FATEC Prof. Waldomiro May',
      location: 'Cruzeiro/SP',
      period: '2017 - 2018',
      description: 'Curso técnico com fundamentos em programação, redes, hardware e manutenção de sistemas.',
      icon: '💻',
      color: 'neon-blue'
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Formação Acadêmica
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto mb-6"></div>
          <p className="text-gray-300 font-fira max-w-2xl mx-auto">
            Base sólida de conhecimento técnico e teórico
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-aqua to-neon-blue hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 bg-${edu.color} rounded-full border-4 border-dark-primary hidden md:block`}></div>

                {/* Education Card */}
                <div className="md:ml-20 terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-dots">
                      <div className="terminal-dot bg-neon-aqua"></div>
                      <div className="terminal-dot bg-neon-blue"></div>
                      <div className="terminal-dot bg-neon-pink"></div>
                    </div>
                    <div className="text-xs font-fira text-gray-400">
                      {edu.institution.toLowerCase().replace(/\s+/g, '_')}.edu
                    </div>
                    <div className="w-16"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{edu.icon}</div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-orbitron font-bold text-${edu.color} mb-2`}>
                          {edu.degree}
                        </h3>
                        <div className="text-lg text-white font-fira mb-2">
                          {edu.institution}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400 font-fira mb-4">
                          <span>{edu.period}</span>
                          <span>•</span>
                          <span>{edu.location}</span>
                        </div>
                        <p className="text-gray-300 font-fira text-sm leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 hud-panel animate-fade-in">
          <div className="terminal-header mb-6">
            <div className="terminal-dots">
              <div className="terminal-dot bg-green-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-red-500"></div>
            </div>
            <div className="text-xs font-fira text-gray-400">continuous_learning.json</div>
            <div className="w-16"></div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Award className="w-8 h-8 text-neon-pink" />
              <h3 className="text-2xl font-orbitron font-bold text-neon-aqua">
                Aprendizado Contínuo
              </h3>
            </div>
            <p className="text-gray-300 font-fira max-w-2xl mx-auto">
              Sempre em busca de novos conhecimentos e tecnologias. Acredito que o aprendizado constante é essencial para se manter relevante e entregar soluções inovadoras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
