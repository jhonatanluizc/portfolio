import { useState } from 'react';
import React from 'react';
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


export default function About() {
  const [selectedCard, setSelectedCard] = useState<LoreCard | null>(null);

  const loreCards: LoreCard[] = [
    {
      id: 1,
      title: "Origens",
      category: "I",
      description: "A jornada começa na ETEC e FATEC, onde os primeiros códigos foram escritos...",
      icon: <GraduationCap className="w-16 h-16" />,
      color: "neon-aqua",
      rarity: 'rare',
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
      fullStory: `Minha primeira experiência profissional real foi como estagiário na Prefeitura de Cruzeiro, seguido pelo início na Juntos Campus como Software Engineer I. Aqui aprendi que a teoria era apenas o começo, o mundo real exigia adaptação, trabalho em equipe e resolução criativa de problemas. Desenvolvi sistemas web, aplicativos híbridos com Apache Cordova, e integrei templates a frameworks internos. Cada desafio superado me tornava mais confiante e preparado.`
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
      title: "Full Stack",
      category: "IV",
      description: "Do frontend ao backend, dominando .NET, C# e arquitetura de sistemas...",
      icon: <Zap className="w-16 h-16" />,
      color: "neon-pink",
      rarity: 'epic',
      fullStory: `Evoluir para Software Engineer III significou abraçar responsabilidades maiores. Passei a trabalhar tanto no frontend (React, React Native) quanto no backend (.NET, C#, SQL Server). Aprendi sobre arquitetura de software, modelagem de dados, integração de sistemas e liderança técnica. Cada projeto complexo me ensinava sobre escalabilidade, performance e segurança. Não era mais apenas sobre escrever código, era sobre projetar soluções que funcionassem em escala e resistissem ao teste do tempo.`
    },
    {
      id: 5,
      title: "Clean Code",
      category: "V",
      description: "A busca pela excelência através de código limpo e boas práticas...",
      icon: <Heart className="w-16 h-16" />,
      color: "neon-pink",
      rarity: 'legendary',
      fullStory: `Com o tempo, aprendi que escrever código não é apenas fazer funcionar, é sobre criar algo sustentável, legível e manutenível. Abracei os princípios SOLID, padrões de design e a filosofia do Clean Code. Cada commit é uma oportunidade de deixar o código melhor do que estava. Aprendi que o verdadeiro profissionalismo está em pensar nos próximos desenvolvedores que lerão seu código, incluindo você mesmo no futuro.`
    },
    {
      id: 6,
      title: "Presente",
      category: "VI",
      description: "Vivendo no agora, sempre aprendendo, sempre evoluindo...",
      icon: <Rocket className="w-16 h-16" />,
      color: "neon-blue",
      rarity: 'legendary',
      fullStory: `Hoje, como Engenheiro de Software Sênior, continuo apaixonado por tecnologia e inovação. Acredito que o melhor momento para criar é o AGORA. Mantenho-me atualizado com as últimas tecnologias, contribuo para projetos desafiadores e busco sempre impactar positivamente a vida das pessoas através de soluções tecnológicas. A jornada nunca termina, cada dia é uma nova oportunidade de aprender, crescer e fazer a diferença.`
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

      <div className="max-w-7xl mx-auto px-2 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="gradient-text">Minha</span>{' '}
            <span className="text-white">História</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto mb-4 sm:mb-6"></div>
          <p className="text-gray-300 font-fira max-w-2xl mx-auto text-xs xs:text-sm sm:text-base px-2 sm:px-4">
            Clique nas cartas para descobrir os capítulos da minha jornada
          </p>
        </div>

        {/* Cards Display - Hand Layout */}
        <div className="flex justify-center items-end px-2 sm:px-4 py-6 sm:py-8 md:py-12">
          <div className="flex justify-center items-end">
            {loreCards.map((card, index) => {
              const totalCards = loreCards.length;
              const middleIndex = (totalCards - 1) / 2;
              const offset = index - middleIndex;
              const rotation = offset * 8; // 8 degrees per card on desktop
              const rotationMobile = offset * 3; // 3 degrees on mobile
              const translateY = Math.abs(offset) * 20; // Cards in the middle are lower
              const translateYMobile = Math.abs(offset) * 8; // Less on mobile
              const delay = index * 150; // 150ms delay between each card

              return (
                <div
                  key={card.id}
                  onClick={() => setSelectedCard(card)}
                  className="cursor-pointer group/card hover:z-50 -ml-[110px] xs:-ml-[120px] sm:-ml-24 md:-ml-28 lg:-ml-32 first:ml-0 animate-in fade-in"
                  style={{
                    transform: window.innerWidth >= 768
                      ? `rotate(${rotation}deg) translateY(${translateY}px)`
                      : `rotate(${rotationMobile}deg) translateY(${translateYMobile}px)`,
                    transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    animationDuration: '1s',
                    animationDelay: `${delay}ms`,
                    animationFillMode: 'backwards',
                  }}
                >
                  <div
                    className={`relative p-1 rounded-xl bg-gradient-to-br ${getRarityColor(card.rarity)} w-[140px] xs:w-[160px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[200px] xs:h-[230px] sm:h-[280px] md:h-[310px] lg:h-[340px] group-hover/card:shadow-[0_0_20px_3px] group-hover/card:shadow-${card.color} group-hover/card:-translate-y-4 sm:group-hover/card:-translate-y-6 md:group-hover/card:-translate-y-8 group-hover/card:ring-2 group-hover/card:ring-${card.color} group-hover/card:brightness-110`}
                    style={{
                      transform: 'rotate(0deg)',
                      transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    <div className="bg-dark-primary rounded-lg overflow-hidden h-full flex flex-col">
                      {/* Card Header */}
                      <div className="bg-dark-secondary border-b-2 border-gray-800 p-1.5 xs:p-2 sm:p-3 flex-shrink-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-[8px] xs:text-[9px] sm:text-xs font-orbitron font-bold text-white uppercase tracking-wider">
                            {card.title}
                          </h3>
                          <span className={`text-[8px] xs:text-[9px] sm:text-xs px-1 xs:px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-${card.color}/20 text-${card.color} font-fira font-semibold`}>
                            {card.category}
                          </span>
                        </div>
                      </div>

                      {/* Card Image/Icon */}
                      <div className="bg-gradient-to-b from-dark-secondary to-dark-primary p-3 xs:p-4 sm:p-5 md:p-6 flex items-center justify-center h-[90px] xs:h-[105px] sm:h-[130px] md:h-[150px] flex-shrink-0 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                          <div className="grid grid-cols-8 gap-1 h-full">
                            {Array.from({ length: 64 }).map((_, i) => (
                              <div key={i} className={`border border-${card.color}/30`}></div>
                            ))}
                          </div>
                        </div>
                        <div
                          className={`text-${card.color} relative z-10 group-hover/card:scale-110`}
                          style={{
                            transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          }}
                        >
                          {React.cloneElement(card.icon as React.ReactElement, {
                            className: 'w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16'
                          })}
                        </div>
                      </div>

                      {/* Card Description */}
                      <div className="bg-dark-secondary border-t-2 border-gray-800 p-1.5 xs:p-2 sm:p-3 flex-grow flex flex-col">
                        <p className="text-gray-300 font-fira text-[8px] xs:text-[9px] sm:text-xs leading-relaxed line-clamp-3 flex-grow">
                          {card.description}
                        </p>
                        <div className="mt-1 sm:mt-2 text-[8px] xs:text-[9px] sm:text-xs text-neon-aqua font-fira font-semibold">
                          Clique para ler mais →
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal - Card Expanded */}
      <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-xl md:max-w-2xl bg-dark-primary border-2 sm:border-4 border-neon-aqua/50 text-white">
          {selectedCard && (
            <>
              <div className={`absolute -top-1 -left-1 -right-1 h-1 sm:h-2 bg-gradient-to-r ${getRarityColor(selectedCard.rarity)}`}></div>
              <DialogHeader className="relative">
                <div className="flex items-center justify-between mb-4 gap-2">
                  <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-orbitron font-bold text-white">
                    {selectedCard.title}
                  </DialogTitle>
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded bg-${selectedCard.color}/20 text-${selectedCard.color} font-fira font-semibold text-xs sm:text-sm whitespace-nowrap`}>
                    {selectedCard.category}
                  </span>
                </div>
              </DialogHeader>

              <div className="space-y-4 sm:space-y-6">
                {/* Icon Display */}
                <div className="flex justify-center p-4 sm:p-6 md:p-8 bg-gradient-to-b from-dark-secondary to-dark-primary rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-12 gap-1 h-full">
                      {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className={`border border-${selectedCard.color}/30`}></div>
                      ))}
                    </div>
                  </div>
                  <div className={`text-${selectedCard.color} relative z-10`}>
                    {React.cloneElement(selectedCard.icon as React.ReactElement, {
                      className: 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16'
                    })}
                  </div>
                </div>

                {/* Full Story */}
                <div className="bg-dark-secondary/50 rounded-lg p-4 sm:p-6 border border-gray-800">
                  <p className="text-gray-300 font-fira leading-relaxed text-sm sm:text-base">
                    {selectedCard.fullStory}
                  </p>
                </div>

                {/* Rarity Badge */}
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => setSelectedCard(null)}
                    className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${getRarityColor(selectedCard.rarity)} text-dark-primary font-orbitron font-bold text-xs sm:text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-neon-aqua/60 transition`}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
