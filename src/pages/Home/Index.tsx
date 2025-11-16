import About from '@/pages/Home/sections/About';
import EasterEgg from '@/pages/Home/sections/EasterEgg';
import Experience from '@/pages/Home/sections/Experience';
import Hero from '@/pages/Home/sections/Hero';
import Kode from '@/pages/Home/sections/Kode';
import Navigation from '@/pages/Home/sections/Navigation';
import Skills from '@/pages/Home/sections/Skills';
import { useEffect, useState, useRef, useCallback } from 'react';

export default function Home() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  const [sequence, setSequence] = useState<string[]>([]);

  const updateSequence = useCallback((key: string) => {
    if (!konamiCode.includes(key)) return;
    const newSequence = [...sequence, key].slice(-konamiCode.length);
    setSequence(newSequence);
    if (newSequence.join(',') === konamiCode.join(',')) {
      setShowEasterEgg(true);
      setSequence([]);
    }
  }, [sequence, konamiCode]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      updateSequence(event.code);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [updateSequence]);

  const keyHandler = (key: string) => updateSequence(key);

  return (
    <div className="min-h-screen bg-dark-primary text-white relative overflow-x-hidden">
      {showEasterEgg ?
        (<EasterEgg onClose={() => setShowEasterEgg(false)} />) :
        (
          <main className="relative z-10">
            <Navigation />
            <Hero />
            <Kode onPress={keyHandler} sequence={sequence} />
            <About />
            <Skills />
            <Experience />
          </main>
        )}
    </div>
  );
};