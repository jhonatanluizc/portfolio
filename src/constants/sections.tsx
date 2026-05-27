import About from '@/pages/sections/About';
import Experience from '@/pages/sections/Experience';
import Hero from '@/pages/sections/Hero';
import Projects from '@/pages/sections/Projects';
import SkillTree from '@/pages/sections/SkillTree';

const sections = [
  { id: 'hero', label: 'Home', href: '#hero', component: <Hero /> },
  { id: 'about', label: 'Sobre', href: '#about', component: <About /> },
  { id: 'skill-tree', label: 'Habilidades', href: '#skill-tree', component: <SkillTree /> },
  { id: 'experience', label: 'Trajetória', href: '#experience', component: <Experience /> },
  { id: 'projects', label: 'Projetos', href: '#projects', component: <Projects /> },
] as any[];

export default sections;