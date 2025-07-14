
import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImg from "@/assets/images/profile.jpg";

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Criando soluções digitais com código limpo e pensamento inovador';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[100px]">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-1 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-neon-aqua/20"></div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 relative inline-block">
          <div className="w-48 h-48 mx-auto rounded-full border-4 border-neon-aqua neon-border overflow-hidden">
            <img
              src={profileImg}
              alt="Jhonatan Luiz Chagas"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -inset-2 rounded-full border border-neon-pink/30 animate-pulse-neon"></div>
        </div>

        {/* Terminal Window */}
        <div className="terminal-window max-w-3xl mx-auto mb-8 animate-fade-in">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
            </div>
            <div className="text-xs font-fira text-gray-400">Index.js</div>
            <div className="w-16"></div>
          </div>
          <div className="p-8 font-fira text-left">
            <span className="text-dev-blue">const </span>
            <span className="text-dev-moonlight">developer = </span>
            <span className="text-dev-yellow">{'{'}</span>
            <div className="ml-6 space-y-1">
              <div>
                <span className="text-dev-bluelight mr-1">name:</span>
                <span className="text-dev-brown">'Jhonatan Luiz Chagas'</span>,
              </div>
              <div>
                <span className="text-dev-bluelight mr-1">position:</span>
                <span className="text-dev-brown">'Engenheiro de Software Senior'</span>,
              </div>
              <div>
                <span className="text-dev-bluelight mr-1">company:</span>
                <span className="text-dev-brown">'Juntos Campus'</span>,
              </div>
              <div>
                <span className="text-dev-bluelight mr-1">email:</span>
                <span className="text-dev-brown">'jhonatan.sont@gmail.com'</span>,
              </div>
              <div>
                <span className="text-dev-bluelight mr-1">degree:</span>
                <span className="text-dev-brown">'Analise e Desenvolvimento de Sistemas'</span>
              </div>
            </div>
            <span className="text-dev-yellow">{'}'}</span>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-fira">
          Desenvolvo soluções com clareza, criatividade e atenção ao que realmente importa: o agora.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/jhonatanluizc/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 px-6 py-3 neon-border hover:bg-neon-aqua/10 transition-all duration-300"
          >
            <Github className="w-5 h-5 text-neon-aqua group-hover:animate-pulse" />
            <span className="font-fira text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jhonatanluizc/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 px-6 py-3 neon-border hover:bg-neon-blue/10 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5 text-neon-blue group-hover:animate-pulse" />
            <span className="font-fira text-sm">LinkedIn</span>
          </a>
          {/* <a
            href="mailto:jhonatan@example.com"
            className="group flex items-center space-x-2 px-6 py-3 neon-border hover:bg-neon-pink/10 transition-all duration-300"
          >
            <Mail className="w-5 h-5 text-neon-pink group-hover:animate-pulse" />
            <span className="font-fira text-sm">Contact</span>
          </a> */}
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-aqua rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-aqua rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
