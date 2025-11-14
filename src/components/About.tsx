const Link = ({ href, text, className }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`font-semibold ${className}`}>{text}</a>
  );
}

export default function About() {
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
              <p>
                Sou <span className="text-neon-aqua font-semibold">Jhonatan</span>, Engenheiro de Software Sênior, atualmente atuando na{' '}
                <Link href="https://juntoscampus.com" text="Juntos Campus" className="text-neon-blue" />
                {' '}e na{' '}
                <Link href="https://www.usecorp.co" text="Usecorp" className="text-neon-blue" />
                {', '}especializado em{' '}
                <Link
                  href="https://reactnative.dev/"
                  text="React Native"
                  className="text-neon-blue font-semibold"
                />
                {' '}para aplicativos móveis, além de sites e sistemas web utilizando{' '}
                <Link
                  href="https://dotnet.microsoft.com/"
                  text=".NET"
                  className="text-neon-blue font-semibold"
                />
                {' '}e{' '}
                <Link
                  href="https://react.dev/"
                  text="React"
                  className="text-neon-blue font-semibold"
                />
                . Minha trajetória na área começou durante meus estudos na{' '}
                <Link href="http://eteccruzeiro.educacao.ws" text="ETEC" className="text-neon-pink" />
                {' '}e{' '}
                <Link href="https://www.fateccruzeiro.edu.br" text="FATEC" className="text-neon-pink" />
                {', '}onde adquiri as bases para criar soluções eficientes e escaláveis.
              </p>
              <p>
                Apaixonado por tecnologia e programação, acredito que o melhor momento para criar e inovar é o agora. Estou sempre focado no presente, aprendendo e aplicando novas tecnologias para enfrentar desafios complexos e desenvolver soluções que impactem positivamente a vida das pessoas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
