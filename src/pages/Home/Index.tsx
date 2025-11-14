
import About from '@/pages/Home/sections/About';
import EasterEgg from '@/pages/Home/sections/EasterEgg';
import Experience from '@/pages/Home/sections/Experience';
import Hero from '@/pages/Home/sections/Hero';
import Navigation from '@/pages/Home/sections/Navigation';
import Skills from '@/pages/Home/sections/Skills';
import { useEffect, useState } from 'react';

export default function Home() {
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