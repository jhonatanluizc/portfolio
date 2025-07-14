
const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Content */}
          <div className="hud-panel animate-fade-in">
            <div className="terminal-header mb-6">
              <div className="terminal-dots">
                <div className="terminal-dot bg-neon-aqua"></div>
                <div className="terminal-dot bg-neon-blue"></div>
                <div className="terminal-dot bg-neon-pink"></div>
              </div>
              <div className="text-xs font-fira text-gray-400">README.md</div>
              <div className="w-16"></div>
            </div>

            <div className="space-y-6 font-fira text-gray-300 leading-relaxed">
              {/* <p>
                Sou <span className="text-neon-aqua font-semibold">Jhonatan</span>, Engenheiro de Software Senior na Juntos Campus e Usecorp especializado em <span className="text-neon-blue font-semibold">React Native</span> para aplicativos móveis, além de sites e sistemas web utilizando <span className="text-neon-blue font-semibold">.NET</span> e <span className="text-neon-blue font-semibold">React</span>. Minha trajetória na área começou durante meus estudos na <span className="text-neon-pink font-semibold">FATEC</span> e <span className="text-neon-pink font-semibold">ETEC</span>, onde adquiri as bases para criar soluções eficientes e escaláveis.
              </p> */}
              <p>
                Sou <span className="text-neon-aqua font-semibold">Jhonatan</span>, Engenheiro de Software Sênior, atualmente atuando na{' '}
                <a href="https://juntoscampus.com.br" target="_blank" rel="noopener noreferrer" className="text-neon-blue font-semibold underline">
                  Juntos Campus
                </a>{' '}
                e na{' '}
                <a href="https://usecorp.com.br" target="_blank" rel="noopener noreferrer" className="text-neon-blue font-semibold underline">
                  Usecorp
                </a>, especializado em <span className="text-neon-blue font-semibold">React Native</span> para aplicativos móveis, além de sites e sistemas web utilizando <span className="text-neon-blue font-semibold">.NET</span> e <span className="text-neon-blue font-semibold">React</span>. Minha trajetória na área começou durante meus estudos na <span className="text-neon-pink font-semibold">FATEC</span> e <span className="text-neon-pink font-semibold">ETEC</span>, onde adquiri as bases para criar soluções eficientes e escaláveis.
              </p>
              <p>
                Apaixonado por tecnologia e programação, acredito que o melhor momento para criar e inovar é o agora. Estou sempre focado no presente, aprendendo e aplicando novas tecnologias para enfrentar desafios complexos e desenvolver soluções que impactem positivamente a vida das pessoas.
              </p>

              {/* <div className="pt-4 border-t border-neon-aqua/20">
                <p className="text-neon-aqua font-semibold mb-2">Curiosidades:</p>
                <ul className="space-y-1 text-sm">
                  <li>🚀 Adoro explorar tecnologias de ponta</li>
                  <li>☕ Sessões de desenvolvimento regadas a café</li>
                  <li>🎮 Entusiasta de jogos</li>
                  <li>📚 Aprendiz contínuo e compartilhador de conhecimento</li>
                </ul>
              </div> */}
            </div>
          </div>

          {/* Stats Panel */}
          {/* <div className="space-y-6">
            <div className="hud-panel animate-fade-in">
              <h3 className="text-xl font-orbitron font-bold text-neon-aqua mb-4 flex items-center">
                <span className="w-2 h-2 bg-neon-aqua rounded-full mr-3 animate-pulse"></span>
                Estatísticas
              </h3>

              <div className="space-y-4 font-fira">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Experience Level</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-dark-primary rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-neon-aqua to-neon-blue"></div>
                    </div>
                    <span className="text-neon-aqua text-sm">Senior</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Problem Solving</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-dark-primary rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-neon-pink to-neon-blue"></div>
                    </div>
                    <span className="text-neon-pink text-sm">Expert</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Team Collaboration</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 h-2 bg-dark-primary rounded-full overflow-hidden">
                      <div className="w-5/6 h-full bg-gradient-to-r from-neon-blue to-neon-aqua"></div>
                    </div>
                    <span className="text-neon-blue text-sm">Advanced</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hud-panel animate-fade-in">
              <h3 className="text-xl font-orbitron font-bold text-neon-pink mb-4 flex items-center">
                <span className="w-2 h-2 bg-neon-pink rounded-full mr-3 animate-pulse"></span>
                Education
              </h3>

              <div className="space-y-3 font-fira text-sm">
                <div className="p-3 bg-dark-primary/50 rounded border-l-2 border-neon-aqua">
                  <div className="text-neon-aqua font-semibold">FATEC</div>
                  <div className="text-gray-300">Technology in Systems Analysis and Development</div>
                </div>
                <div className="p-3 bg-dark-primary/50 rounded border-l-2 border-neon-blue">
                  <div className="text-neon-blue font-semibold">ETEC</div>
                  <div className="text-gray-300">Technical Course in Informatics</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
