import About from '@/pages/sections/About';
import EasterEgg from '@/pages/sections/EasterEgg';
import Experience from '@/pages/sections/Experience';
import Footer from '@/pages/sections/Footer';
import Hero from '@/pages/sections/Hero';
import Navigation from '@/pages/sections/Navigation';
import Projects from '@/pages/sections/Projects';
import SkillTree from '@/pages/sections/SkillTree';
import Technologies from '@/pages/sections/Technologies';
import { useState } from 'react';
import sections from '@/constants/sections';

export default function Home() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
  const [sequence, setSequence] = useState<string[]>([]);

  // const updateSequence = useCallback((key: string) => {
  //   if (!konamiCode.includes(key)) return;
  //   const newSequence = [...sequence, key].slice(-konamiCode.length);
  //   setSequence(newSequence);
  //   if (newSequence.join(',') === konamiCode.join(',')) {
  //     setShowEasterEgg(true);
  //     setSequence([]);
  //   }
  // }, [sequence, konamiCode]);

  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     updateSequence(event.code);
  //   };
  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => window.removeEventListener('keydown', handleKeyDown);
  // }, [updateSequence]);

  // const keyHandler = (key: string) => updateSequence(key);

  return (
    <div className="min-h-screen bg-dark-primary text-white relative overflow-x-hidden">
      {showEasterEgg ?
        (<EasterEgg onClose={() => setShowEasterEgg(false)} />) :
        (
          <main className="relative z-10">
            <Navigation />
            {sections.map(section => (<div key={section.id} > {section.component} </div>))}
            <Footer />
          </main>
        )}
    </div>
  );
};