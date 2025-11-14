
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'Sobre' },
    { id: 'skills', label: 'Tecnologias' },
    { id: 'experience', label: 'Experiência' },
    // { id: 'projects', label: 'Projects' },
    // { id: 'education', label: 'Education' },
    // { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/90 backdrop-blur-md border-b border-neon-aqua/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-orbitron font-bold gradient-text">
              JLC<span className="animate-blink">_</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-fira text-sm transition-all duration-300 hover:text-neon-aqua ${
                    activeSection === item.id
                      ? 'text-neon-aqua neon-glow'
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/jhonatanluizc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-neon-aqua transition-colors duration-300 neon-glow"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jhonatanluizc/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-neon-blue transition-colors duration-300 neon-glow"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-dark-secondary/90 backdrop-blur-md rounded-full px-6 py-3 border border-neon-aqua/30">
          <div className="flex items-center space-x-6">
            {navItems.slice(0, 5).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-neon-aqua animate-pulse-neon'
                    : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
