import { useState } from 'react';
import { Code, Sparkles, Rocket, Zap, Heart, GraduationCap } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type LoreCard = {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  fullStory: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
};

const Link = ({ href, text, className }: { href: string; text: string; className?: string }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`font-semibold hover:underline ${className}`}>{text}</a>
  );
}

export default function About() {
  const [selectedCard, setSelectedCard] = useState<LoreCard | null>(null);

  const loreCards: LoreCard[] = [
    {
      id: 1,
      title: "Origens",
      category: "I",
      description: "A jornada começa na ETEC e FATEC, onde os primeiros códigos foram escritos...",
      icon: <GraduationCap className="w-16 h-16" />,
      color: "neon-blue",
      rarity: 'epic',
      fullStory: `Minha jornada na tecnologia começou nos corredores da ETEC e FATEC em Cruzeiro, SP. Foi lá que descobri minha paixão por criar soluções através do código. Cada linha escrita era um novo aprendizado, cada erro uma oportunidade de crescimento. Durante esses anos formativos, absorvi conhecimentos fundamentais em programação, banco de dados e engenharia de software que moldariam minha carreira.`
    },
    {
      id: 2,
      title: "Primeira Quest",
      category: "II",
      description: "De estagiário a Software Engineer I, os primeiros desafios reais surgem...",
      icon: <Code className="w-16 h-16" />,
      color: "neon-aqua",
      rarity: 'rare',
      fullStory: `Minha primeira experiência profissional real foi como estagiário na Prefeitura de Cruzeiro, seguido pelo início na Juntos Campus como Software Engineer I. Aqui aprendi que a teoria era apenas o começo - o mundo real exigia adaptação, trabalho em equipe e resolução criativa de problemas. Desenvolvi sistemas web, aplicativos híbridos com Apache Cordova, e integrei templates a frameworks internos. Cada desafio superado me tornava mais confiante e preparado.`
    },
    {
      id: 3,
      title: "Evolução Mobile",
      category: "III",
      description: "React Native entra em cena, abrindo as portas do desenvolvimento mobile...",
      icon: <Sparkles className="w-16 h-16" />,
      color: "neon-pink",
      rarity: 'epic',
      fullStory: `A descoberta do React Native foi transformadora. De repente, eu podia criar aplicativos nativos para iOS e Android com JavaScript/TypeScript. Na Usecorp e Juntos Campus, mergulhei fundo nessa tecnologia, desenvolvendo apps escaláveis e de alta performance. Aprendi sobre otimização, integração de APIs, publicação nas lojas (App Store e Google Play), e como entregar experiências mobile incríveis. Cada app lançado era uma vitória compartilhada com o time.`
    },
    {
      id: 4,
      title: "Full Stack Master",
      category: "IV",
      description: "Do frontend ao backend, dominando .NET, C# e arquitetura de sistemas...",
      icon: <Zap className="w-16 h-16" />,
      color: "neon-aqua",
      rarity: 'legendary',
      fullStory: `Evoluir para Software Engineer III significou abraçar responsabilidades maiores. Passei a trabalhar tanto no frontend (React, React Native) quanto no backend (.NET, C#, SQL Server). Aprendi sobre arquitetura de software, modelagem de dados, integração de sistemas e liderança técnica. Cada projeto complexo me ensinava sobre escalabilidade, performance e segurança. Não era mais apenas sobre escrever código - era sobre projetar soluções que funcionassem em escala e resistissem ao teste do tempo.`
    },
    {
      id: 5,
      title: "Clean Code Philosophy",
      category: "V",
      description: "A busca pela excelência através de código limpo e boas práticas...",
      icon: <Heart className="w-16 h-16" />,
      color: "neon-pink",
      rarity: 'legendary',
      fullStory: `Com o tempo, aprendi que escrever código não é apenas fazer funcionar - é sobre criar algo sustentável, legível e manutenível. Abracei os princípios SOLID, padrões de design e a filosofia do Clean Code. Cada commit é uma oportunidade de deixar o código melhor do que estava. Aprendi que o verdadeiro profissionalismo está em pensar nos próximos desenvolvedores que lerão seu código, incluindo você mesmo no futuro.`
    },
    {
      id: 6,
      title: "Momento Presente",
      category: "VI",
      description: "Vivendo no agora, sempre aprendendo, sempre evoluindo...",
      icon: <Rocket className="w-16 h-16" />,
      color: "neon-blue",
      rarity: 'legendary',
      fullStory: `Hoje, como Engenheiro de Software Sênior, continuo apaixonado por tecnologia e inovação. Acredito que o melhor momento para criar é o AGORA. Mantenho-me atualizado com as últimas tecnologias, contribuo para projetos desafiadores e busco sempre impactar positivamente a vida das pessoas através de soluções tecnológicas. A jornada nunca termina - cada dia é uma nova oportunidade de aprender, crescer e fazer a diferença.`
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-yellow-400 to-orange-500';
      case 'epic': return 'from-purple-400 to-pink-500';
      case 'rare': return 'from-blue-400 to-cyan-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getRarityGlow = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'shadow-yellow-500/50';
      case 'epic': return 'shadow-purple-500/50';
      case 'rare': return 'shadow-cyan-500/50';
      default: return 'shadow-gray-500/50';
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-1 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-neon-pink/20"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="gradient-text">Minha</span>{' '}
            <span className="text-white">Lore</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto mb-6"></div>
          <p className="text-gray-300 font-fira max-w-2xl mx-auto">
            Clique nas cartas para descobrir os capítulos da minha jornada
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loreCards.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className="group cursor-pointer h-full"
            >
              <div className={`relative p-1 rounded-xl bg-gradient-to-br ${getRarityColor(card.rarity)} hover:scale-105 transition-transform duration-300 h-[420px]`}>
                <div className="bg-dark-primary rounded-lg overflow-hidden h-full flex flex-col">
                  {/* Card Header */}
                  <div className="bg-dark-secondary border-b-2 border-gray-800 p-3 flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-orbitron font-bold text-white uppercase tracking-wider">
                        {card.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded bg-${card.color}/20 text-${card.color} font-fira font-semibold`}>
                        {card.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Image/Icon */}
                  <div className="bg-gradient-to-b from-dark-secondary to-dark-primary p-8 flex items-center justify-center h-[200px] flex-shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-8 gap-1 h-full">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div key={i} className={`border border-${card.color}/30`}></div>
                        ))}
                      </div>
                    </div>
                    <div className={`text-${card.color} relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                  </div>

                  {/* Card Description */}
                  <div className="bg-dark-secondary border-t-2 border-gray-800 p-4 flex-grow flex flex-col">
                    <p className="text-gray-300 font-fira text-sm leading-relaxed line-clamp-3 flex-grow">
                      {card.description}
                    </p>
                    <div className="mt-3 text-xs text-neon-aqua font-fira font-semibold">
                      Clique para ler mais →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Card Expanded */}
      <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="max-w-2xl bg-dark-primary border-4 border-neon-aqua/50 text-white">
          {selectedCard && (
            <>
              <div className={`absolute -top-1 -left-1 -right-1 h-2 bg-gradient-to-r ${getRarityColor(selectedCard.rarity)}`}></div>
              <DialogHeader className="relative">
                <div className="flex items-center justify-between mb-4">
                  <DialogTitle className="text-3xl font-orbitron font-bold text-white">
                    {selectedCard.title}
                  </DialogTitle>
                  <span className={`px-3 py-1 rounded bg-${selectedCard.color}/20 text-${selectedCard.color} font-fira font-semibold text-sm`}>
                    {selectedCard.category}
                  </span>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Icon Display */}
                <div className="flex justify-center p-8 bg-gradient-to-b from-dark-secondary to-dark-primary rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-12 gap-1 h-full">
                      {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className={`border border-${selectedCard.color}/30`}></div>
                      ))}
                    </div>
                  </div>
                  <div className={`text-${selectedCard.color} relative z-10`}>
                    {selectedCard.icon}
                  </div>
                </div>

                {/* Full Story */}
                <div className="bg-dark-secondary/50 rounded-lg p-6 border border-gray-800">
                  <p className="text-gray-300 font-fira leading-relaxed text-base">
                    {selectedCard.fullStory}
                  </p>
                </div>

                {/* Rarity Badge */}
                <div className="flex justify-center">
                  <span className={`px-6 py-2 rounded-full bg-gradient-to-r ${getRarityColor(selectedCard.rarity)} text-dark-primary font-orbitron font-bold text-sm uppercase tracking-wider`}>
                    {selectedCard.rarity}
                  </span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
