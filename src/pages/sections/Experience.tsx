import { useState } from 'react';
import { Briefcase, GraduationCap, Coffee, X, MapPin, Calendar } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ExperienceItem = {
  id: number;
  date: string;
  title: string;
  company: string;
  location: string;
  type: 'work' | 'education' | 'break';
  duration?: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
  icon: React.ReactNode;
};

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      date: 'Mai, 2026',
      title: 'Pausa na carreira',
      company: 'Desenvolvimento profissional',
      location: 'Piquete, São Paulo, Brasil',
      type: 'break',
      duration: '1 mês',
      description: 'Período de descanso e planejamento profissional.',
      icon: <Coffee className="w-6 h-6" />
    },
    {
      id: 2,
      date: 'Dez, 2023',
      title: 'Software Engineer III',
      company: 'Juntos Campus',
      location: 'Itanhandu, Minas Gerais, Brasil',
      type: 'work',
      duration: 'Mai 2023 - Abr 2026 · 3 anos',
      description: 'Arquitetura e desenvolvimento de aplicativos escaláveis e de alta disponibilidade. Liderança técnica em projetos complexos.',
      achievements: [
        'Arquitetura e desenvolvimento de aplicativos em React Native',
        'Desenvolvimento escalável e de alta disponibilidade',
        'Design e arquitetura de sistemas de software',
        'Implementação de boas práticas de desenvolvimento de software',
        'Liderança técnica em projetos complexos',
        'Otimização de desempenho e segurança de software'
      ],
      technologies: ['React Native', 'Aplicativos móveis', '.NET', 'C#', 'SQL Server'],
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      id: 3,
      date: 'Mar, 2022',
      title: 'Software Engineer II',
      company: 'Juntos Campus',
      location: 'Itanhandu, Minas Gerais, Brasil',
      type: 'work',
      duration: 'Fev 2021 - Abr 2023 · 2 anos 3 meses',
      description: 'Desenvolvimento de APIs e integração de sistemas com foco em análise e modelagem de dados.',
      achievements: [
        'Análise e interpretação de informações para tomada de decisão',
        'Desenvolvimento de APIs',
        'Integração de sistemas',
        'Levantamento e modelagem de dados'
      ],
      technologies: ['Apache Cordova', 'Aplicativos móveis', '.NET', 'C#'],
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      id: 4,
      date: 'Set, 2021',
      title: 'Software Engineer',
      company: 'Usecorp.co',
      location: 'São Paulo, Brasil',
      type: 'work',
      duration: 'Set 2021 - Abr 2026 · 4 anos 8 meses',
      description: 'Desenvolvimento e manutenção de aplicativos mobile com React Native. Bens por assinatura - plataforma que conecta milhares de fornecedores.',
      achievements: [
        'Desenvolvimento de aplicativos móveis em React Native',
        'Integração com APIs REST',
        'Publicação e manutenção na App Store e Google Play',
        'Otimização de performance de aplicações mobile'
      ],
      technologies: ['React Native', 'TypeScript', 'REST APIs', 'Firebase'],
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      id: 5,
      date: 'Out, 2020',
      title: 'Software Engineer I',
      company: 'Juntos Campus',
      location: 'Itanhandu, Minas Gerais, Brasil',
      type: 'work',
      duration: 'Out 2020 - Jan 2021 · 4 meses',
      description: 'Desenvolvimento de software, sistemas web e aplicativos híbridos. Criação de Landing Pages e customização de sistemas.',
      achievements: [
        'Desenvolvimento de software, sistemas web e aplicativos híbridos',
        'Criação de Landing Pages e integração de templates ao framework interno',
        'Customização e correções em sistemas já existentes',
        'Testes de endpoints em APIs'
      ],
      technologies: ['Apache Cordova', 'Aplicativos móveis', 'JavaScript', 'HTML/CSS'],
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      id: 6,
      date: 'Mar, 2020',
      title: 'Estagiário - Setor Zoonoses',
      company: 'Prefeitura de Cruzeiro',
      location: 'Cruzeiro, São Paulo',
      type: 'work',
      duration: 'Mar 2020 - Nov 2020 · 9 meses',
      description: 'Atuação em campo e atendimento ao público com foco em controle de vetores e monitoramento de dados epidemiológicos.',
      achievements: [
        'Atendimento ao público',
        'Atuação em campo com visitas domiciliares para inspeção e orientação sobre controle de vetores',
        'Digitalização e organização de documentos e formulários de controle',
        'Registro e monitoramento de dados epidemiológicos'
      ],
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      id: 7,
      date: 'Jul, 2021',
      title: 'Análise e Desenvolvimento de Sistemas',
      company: 'Fatec Cruzeiro - Prof. Waldomiro May',
      location: 'Cruzeiro, São Paulo',
      type: 'education',
      duration: '2018 - Jul 2021',
      description: 'Graduação em Análise e Desenvolvimento de Sistemas com foco em desenvolvimento de software, banco de dados e engenharia de software.',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      id: 8,
      date: 'Ago, 2019',
      title: 'Professor de Informática',
      company: 'Pastoral da Criança',
      location: 'Cruzeiro, São Paulo',
      type: 'work',
      duration: 'Jan 2018 - Ago 2019 · 1 ano 8 meses',
      description: 'Voluntário na promoção da inclusão social no universo da informática, compartilhando conhecimentos de informática com pessoas dispostas a aprender.',
      achievements: [
        'Ensino de princípios básicos de informática',
        'História e fundamentos do computador',
        'Pacote Office (Word, Excel, PowerPoint)',
        'Conceitos de Hardware e Software',
        'Organização de dados e arquivos',
        'Operação de programas básicos'
      ],
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      id: 9,
      date: 'Jun, 2018',
      title: 'Técnico em Informática',
      company: 'Etec Prof. Sant\'Ana de Castro',
      location: 'Cruzeiro, São Paulo',
      type: 'education',
      duration: '2017 - 2018',
      description: 'Curso técnico em Informática com conhecimentos em programação, redes e manutenção de computadores.',
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'neon-aqua';
      case 'education': return 'neon-blue';
      case 'break': return 'neon-pink';
      default: return 'gray-400';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work': return 'Experiência';
      case 'education': return 'Formação';
      case 'break': return 'Pausa';
      default: return '';
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-1 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-neon-blue/20"></div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="gradient-text">Trajetória</span>{' '}
            <span className="text-white">Profissional</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto mb-6"></div>
          <p className="text-gray-300 font-fira max-w-2xl mx-auto">
            Uma linha do tempo de crescimento, desafios e conquistas
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line - Central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-aqua via-neon-blue to-neon-pink hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const color = getTypeColor(exp.type);

              return (
                <div
                  key={exp.id}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  onClick={() => setSelectedExperience(exp)}
                  role="button"
                  tabIndex={0}
                >
                  {/* Card */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="group cursor-pointer p-6 rounded-lg border border-gray-800 bg-dark-secondary/50 hover:bg-dark-secondary transition-all duration-300 hover:border-neon-aqua/50 hover:shadow-lg hover:shadow-neon-aqua/20">
                      <div className={`flex items-start ${isLeft ? 'md:flex-row-reverse md:justify-end' : ''} gap-4 mb-3`}>
                        <div className={`text-${color} p-3 rounded-lg bg-${color}/10 transition-transform duration-300 group-hover:scale-110`}>
                          {exp.icon}
                        </div>
                        <div className={isLeft ? 'md:text-right' : ''}>
                          <h3 className="text-lg font-orbitron font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-sm font-fira text-neon-aqua mb-1">{exp.company}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-400 font-fira">
                            <MapPin className="w-3 h-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 font-fira line-clamp-2">
                        {exp.description}
                      </p>
                      <div className="mt-3 text-xs text-neon-pink font-fira">
                        Clique para ver mais →
                      </div>
                    </div>
                  </div>
               
                  {/* Date Badge */}
                  <div className={`hidden md:block w-5/12 ${!isLeft ? 'text-right pr-8' : 'pl-8'}`}>
                    <div className={`inline-block px-4 py-2 rounded-full ${
                      exp.type === 'work' ? 'bg-neon-aqua' :
                      exp.type === 'education' ? 'bg-neon-blue' :
                      'bg-neon-pink'
                    }`}>
                      <span className="text-sm font-fira font-semibold text-dark-primary">
                        {exp.date}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedExperience} onOpenChange={() => setSelectedExperience(null)}>
        <DialogContent className="max-w-3xl bg-[#0a0a0a] border-neon-aqua/30 text-white p-0 overflow-hidden max-h-[90vh] flex flex-col">
          {selectedExperience && (
            <>
              {/* Fixed Header */}
              <div className="sticky top-0 z-50 bg-gradient-to-r from-dark-secondary to-dark-primary border-b border-neon-aqua/30 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-neon-aqua"></div>
                      <div className="w-3 h-3 rounded-full bg-neon-blue"></div>
                      <div className="w-3 h-3 rounded-full bg-neon-pink"></div>
                    </div>
                    <div className="text-xs font-fira text-gray-400">
                      {selectedExperience.title.toLowerCase().replace(/\s+/g, '_')}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedExperience(null)}
                    className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Fechar</span>
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto flex-1 p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`text-${getTypeColor(selectedExperience.type)} p-4 rounded-lg bg-${getTypeColor(selectedExperience.type)}/10`}>
                    {selectedExperience.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-2">
                      {selectedExperience.title}
                    </h3>
                    <p className="text-neon-aqua font-fira text-lg mb-2">
                      {selectedExperience.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-fira">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {selectedExperience.location}
                      </div>
                      {selectedExperience.duration && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {selectedExperience.duration}
                        </div>
                      )}
                      <span className={`px-3 py-1 rounded-full bg-${getTypeColor(selectedExperience.type)}/20 text-${getTypeColor(selectedExperience.type)} text-xs font-semibold`}>
                        {getTypeLabel(selectedExperience.type)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
            <div>
              <h4 className="text-neon-blue font-fira font-semibold mb-3">Descrição:</h4>
              <p className="text-gray-300 font-fira leading-relaxed">
                {selectedExperience?.description}
              </p>
            </div>

            {selectedExperience?.achievements && selectedExperience.achievements.length > 0 && (
              <div>
                <h4 className="text-neon-blue font-fira font-semibold mb-3">Principais Atividades:</h4>
                <ul className="space-y-2">
                  {selectedExperience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-gray-300 font-fira text-sm">
                      <span className="w-2 h-2 bg-neon-pink rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {selectedExperience?.technologies && selectedExperience.technologies.length > 0 && (
              <div>
                <h4 className="text-neon-pink font-fira font-semibold mb-3">Tecnologias:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded border border-neon-aqua/50 text-neon-aqua text-xs font-fira hover:bg-neon-aqua/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Experience;
