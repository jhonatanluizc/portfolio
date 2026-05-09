import { Linkedin } from 'lucide-react';

const Testimonials = () => {
  const references = [
    {
      id: 1,
      name: 'Tadeu Gardenghi',
      role: 'Cofundador e Diretor',
      company: 'Usecorp S/A',
      linkedin: 'https://www.linkedin.com/in/gardenghi/',
      image: '👨‍💼',
      gradient: 'from-neon-aqua to-neon-blue'
    },
    {
      id: 2,
      name: 'Amarilis Marques Lamin',
      role: 'Head de Produtos e Operações',
      company: 'Usecorp S/A',
      linkedin: 'https://www.linkedin.com/in/amarilis-marques-lamin-905bb9181',
      image: '👩‍💼',
      gradient: 'from-neon-blue to-neon-pink'
    },
    {
      id: 3,
      name: 'Yuri de Paula',
      role: 'Coordenador de Engenharia de Software',
      company: 'Juntos Campus',
      linkedin: 'https://www.linkedin.com/in/yuridpaula/',
      image: '👨‍💻',
      gradient: 'from-neon-pink to-neon-aqua'
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Referências Profissionais
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto mb-6"></div>
          <p className="text-gray-300 font-fira max-w-2xl mx-auto">
            Profissionais com quem trabalhei - contatos disponíveis mediante solicitação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {references.map((reference, index) => (
            <div
              key={reference.id}
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
                  {reference.name.toLowerCase().trim().split(/\s+/)[0]}.ref
                </div>
                <div className="w-16"></div>
              </div>

              <div className="p-6">
                {/* Profile */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${reference.gradient} flex items-center justify-center text-4xl mb-4`}>
                    {reference.image}
                  </div>
                  <h4 className="font-orbitron font-bold text-neon-aqua text-lg mb-2">
                    {reference.name}
                  </h4>
                  <p className="text-sm text-gray-300 font-fira mb-1">
                    {reference.role}
                  </p>
                  <p className="text-xs text-gray-500 font-fira mb-4">
                    {reference.company}
                  </p>
                  <a
                    href={reference.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 neon-border hover:bg-neon-blue/10 transition-all duration-300 group"
                  >
                    <Linkedin className="w-4 h-4 text-neon-blue group-hover:animate-pulse" />
                    <span className="font-fira text-xs">Ver LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 font-fira text-sm">
            💼 Informações de contato e detalhes profissionais disponíveis mediante solicitação
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
