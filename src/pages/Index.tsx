
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Navigation from '../components/Navigation';
import EasterEgg from '../components/EasterEgg';
// import Projects from '../components/Projects';
// import Education from '../components/Education';
// import Contact from '../components/Contact';

const Index = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...konamiSequence, event.code].slice(-10);
      setKonamiSequence(newSequence);

      if (newSequence.join(',') === konamiCode.join(',')) {
        setShowEasterEgg(true);
        setKonamiSequence([]);
        console.log('🎮 Konami Code activated! Welcome to the Matrix...');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiSequence]);

  return (
    <div className="min-h-screen bg-dark-primary text-white relative overflow-x-hidden">
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
      </main>
      {showEasterEgg && (<EasterEgg onClose={() => setShowEasterEgg(false)} />)}
    </div>
  );
};

export default Index;
