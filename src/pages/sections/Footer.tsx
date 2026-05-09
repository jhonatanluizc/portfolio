import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Interesses', href: '#passions' },
    { name: 'Trajetória', href: '#experience' },
    { name: 'Projetos', href: '#projects' }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/jhonatanluizc',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/jhonatanluizc',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:jhonatan.sont@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-dark-secondary/50 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-orbitron font-bold gradient-text mb-4">
              Jhonatan Luiz
            </h3>
            <p className="text-gray-400 font-fira text-sm leading-relaxed mb-4">
              Engenheiro de Software Sênior especializado em React Native, React e .NET. 
              Transformando ideias em soluções digitais de alta qualidade.
            </p>
            <div className="flex items-center space-x-2 text-neon-aqua">
              <Code className="w-4 h-4" />
              <span className="text-xs font-fira">Código limpo, resultados excepcionais</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-orbitron font-bold text-neon-blue mb-4">
              Navegação Rápida
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-neon-aqua transition-colors font-fira text-sm flex items-center group"
                  >
                    <span className="w-2 h-2 bg-neon-pink rounded-full mr-2 group-hover:animate-pulse"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-orbitron font-bold text-neon-pink mb-4">
              Conecte-se
            </h3>
            <p className="text-gray-400 font-fira text-sm mb-4">
              Vamos conversar sobre tecnologia e novas oportunidades
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded hover:border-neon-aqua hover:bg-neon-aqua/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <span className="text-gray-400 group-hover:text-neon-aqua transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-500 font-fira text-sm">
            © {currentYear} Jhonatan Luiz Chagas. Todos os direitos reservados.
          </div>
          <div className="flex items-center space-x-2 text-gray-500 font-fira text-sm">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-neon-pink animate-pulse" />
            <span>e</span>
            <span className="text-neon-aqua">React + TypeScript</span>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-neon-aqua to-neon-blue text-dark-primary rounded-full shadow-lg hover:shadow-neon-aqua/50 transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
