import { useMemo, useState, useEffect } from "react";
import {
  Code2, Database, Cloud, GitBranch, Layers,
  Zap, Smartphone, FileCode, Workflow, type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

type Color = "cyan" | "pink" | "purple" | "orange" | "green" | "blue" | "gray";
type Status = "purchased" | "available" | "locked";
type Skill = {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
  color: Color;
  tier: number;
  col: number;
  requires?: string[];
  title: string;
};

const SKILLS: Skill[] = [
  {
    id: "fullstack",
    name: "Full Stack",
    title: "Engenheiro de Software Full Stack",
    desc: "Mais de 5 anos de experiência no desenvolvimento de aplicações mobile, web e backend utilizando React, React Native, .NET e C#, atuando em todas as etapas do ciclo de desenvolvimento.",
    icon: Code2,
    color: "orange",
    tier: 0,
    col: 1,
  },
  {
    id: "mobile",
    name: "Mobile",
    title: "Desenvolvedor Mobile",
    desc: "Especialista em React Native, desenvolvendo aplicativos móveis com foco em performance, integrações de APIs, estabilidade e experiência do usuário.",
    icon: Smartphone,
    color: "purple",
    tier: 1,
    col: 0,
    requires: ["fullstack"],
  },
  {
    id: "arquitetura",
    name: "Arquitetura",
    title: "Arquiteto de Software",
    desc: "Aplicação de boas práticas de desenvolvimento, princípios SOLID e arquitetura escalável, garantindo código limpo, organizado e de fácil manutenção.",
    icon: Layers,
    color: "purple",
    tier: 1,
    col: 1,
    requires: ["fullstack"],
  },
  {
    id: "database",
    name: "Banco de Dados",
    title: " Banco de Dados",
    desc: "Experiência em modelagem relacional, SQL Server, otimização de consultas e estruturação de bancos de dados voltados para aplicações escaláveis.",
    icon: Database,
    color: "purple",
    tier: 1,
    col: 2,
    requires: ["fullstack"],
  },
  {
    id: "ux",
    name: "UI/UX Design",
    title: "Experiência do Usuário",
    desc: "Comprometido em criar interfaces intuitivas, responsivas e eficientes, priorizando usabilidade, performance e a melhor experiência do usuário em aplicações mobile e web.",
    icon: Zap,
    color: "blue",
    tier: 2,
    col: 0,
    requires: ["mobile"],
  },
  {
    id: "apis",
    name: "APIs & Integrações",
    title: "APIs e Integrações",
    desc: "Desenvolvimento e integração de APIs REST, autenticação, comunicação entre sistemas e consumo de serviços externos com foco em escalabilidade e confiabilidade.",
    icon: Cloud,
    color: "blue",
    tier: 2,
    col: 1,
    requires: ["arquitetura"],
  },
  {
    id: "cicd",
    name: "CI/CD & Deploy",
    title: "CI/CD e Deploy",
    desc: "Experiência com versionamento, pipelines de deploy, publicação de aplicativos e manutenção contínua de aplicações em produção.",
    icon: GitBranch,
    color: "blue",
    tier: 2,
    col: 2,
    requires: ["database"],
  },
];

const colorVar: Record<Color, string> = {
  cyan: "#00FFC6",     // neon-aqua
  pink: "#FF2079",     // neon-pink
  purple: "#B24BF3",   // purple neon
  orange: "#FF6F00",   // neon-pumpkin
  green: "#39FF14",    // neon green
  blue: "#33C4FF",     // neon-blue
  gray: "#999999",     // gray for locked
};

function SkillTree() {
  const isMobile = useIsMobile();

  // Rastrear largura da janela
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 800
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Todas as habilidades desbloqueadas
  const [purchased, setPurchased] = useState<Set<string>>(
    new Set(SKILLS.map(s => s.id))
  );
  const [selectedId, setSelectedId] = useState<string>("cicd");

  // layout responsivo
  const COLS = 3;
  const COL_W = isMobile ? 100 : 220;
  const ROW_H = isMobile ? 130 : 220;
  const NODE = isMobile ? 60 : 88;
  const PAD_X = isMobile ? 4 : 60;
  const PAD_Y = isMobile ? 4 : 40;

  function pos(col: number, tier: number) {
    return {
      x: PAD_X + col * COL_W + COL_W / 2,
      y: PAD_Y + tier * ROW_H + NODE / 2,
    };
  }

  const status = (s: Skill): Status => {
    if (purchased.has(s.id)) return "purchased";
    const reqMet = !s.requires || s.requires.every((r) => purchased.has(r));
    return reqMet ? "available" : "locked";
  };

  const selected = SKILLS.find((s) => s.id === selectedId)!;
  const tiers = Math.max(...SKILLS.map((s) => s.tier)) + 1;
  const width = PAD_X * 2 + COLS * COL_W;
  const height = PAD_Y * 2 + tiers * ROW_H;

  // Calcular escala para mobile se necessário
  const containerPadding = windowWidth < 640 ? 0 : 48; // sem padding em mobile, px-6 em desktop
  const maxWidth = windowWidth - containerPadding;
  const scale = width > maxWidth ? Math.max(maxWidth / width, 0.45) : 1;

  const lines = useMemo(() => {
    const out: { from: Skill; to: Skill }[] = [];
    SKILLS.forEach((s) => s.requires?.forEach((r) => {
      const from = SKILLS.find((x) => x.id === r);
      if (from) out.push({ from, to: s });
    }));
    return out;
  }, []);

  function unlock(s: Skill) {
    if (status(s) === "available") {
      setPurchased((p) => new Set(p).add(s.id));
    }
    setSelectedId(s.id);
  }

  return (
    <section id="skill-tree" className="py-20 relative overflow-hidden">
      <div className={cn("max-w-7xl mx-auto", isMobile ? "px-0" : "px-4 sm:px-6")}>

        {/* header */}
        <div className={cn(
          "text-center mb-16",
          isMobile && "px-4"
        )}>
          <h2 className={cn(
            "font-orbitron font-bold gradient-text mb-4",
            isMobile ? "text-3xl" : "text-4xl md:text-5xl"
          )}>
            Habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-aqua to-neon-pink mx-auto mb-6"></div>
          <p className={cn(
            "text-gray-300 font-fira max-w-2xl mx-auto",
            isMobile && "text-sm"
          )}>
            Minhas principais especialidades e competências técnicas
          </p>
        </div>

        {/* skill tree */}
        <div className="w-full flex justify-center mb-12">
          <div
            className="relative flex justify-center"
            style={{
              width: '100%',
              height: `${height * scale}px`,
            }}
          >
            <div
              className="relative"
              style={{
                transform: `scale(${scale})`,
                transformOrigin: 'top center',
                width: `${width}px`,
                height: `${height}px`,
              }}
            >
              {/* connection lines */}
              <svg
                className="absolute inset-0 pointer-events-none"
                width={width}
                height={height}
              >
                {lines.map(({ from, to }, i) => {
                  const a = pos(from.col, from.tier);
                  const b = pos(to.col, to.tier);
                  const active = purchased.has(from.id);
                  const color = colorVar["gray"];
                  const midY = a.y + (b.y - a.y) / 2;
                  const path = from.col === to.col
                    ? `M ${a.x} ${a.y} L ${b.x} ${b.y}` // mesma coluna, linha reta vertical
                    : `M ${a.x} ${a.y} L ${a.x} ${midY} L ${b.x} ${midY} L ${b.x} ${b.y}`; // colunas diferentes, linhas retas

                  return (
                    <path
                      key={i}
                      d={path}
                      stroke={color}
                      strokeWidth={active ? (isMobile ? 2 : 2.5) : (isMobile ? 1 : 1.5)}
                      fill="none"
                      strokeDasharray={active ? "0" : "6 6"}
                      style={active ? {
                        filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 10px ${color})`
                      } : undefined}
                    />
                  );
                })}
              </svg>

              {/* skill nodes */}
              {SKILLS.map((s) => {
                const p = pos(s.col, s.tier);
                const st = status(s);
                const Icon = s.icon;
                const isSelected = s.id === selectedId;
                const c = colorVar[s.color];
                const isPurchased = st === "purchased";
                const isAvailable = st === "available";

                // Lógica de posicionamento do tooltip para não sair da tela (apenas mobile)
                const tooltipPosition = isMobile
                  ? (s.col === 0
                    ? "left-0" // Alinha à esquerda
                    : s.col === 2
                      ? "right-0" // Alinha à direita
                      : "left-1/2 -translate-x-1/2") // Centraliza
                  : "left-1/2 -translate-x-1/2"; // Desktop sempre centralizado

                return (
                  <button
                    key={s.id}
                    onClick={() => unlock(s)}
                    className={cn(
                      "absolute grid place-items-center transition-all duration-300",
                      "group cursor-pointer",
                      isSelected && "z-10",
                    )}
                    style={{
                      width: NODE,
                      height: NODE,
                      left: p.x - NODE / 2,
                      top: p.y - NODE / 2,
                    }}
                    aria-label={s.name}
                  >
                    {/* Diamante externo com brilho */}
                    <div
                      className="absolute inset-0 rotate-45 transition-all duration-300 group-hover:scale-110 bg-dark-secondary rounded-lg"
                      style={{
                        border: `${isMobile ? '1.5px' : '2px'} solid ${isPurchased || isAvailable ? c : '#444'}`,
                        boxShadow: isPurchased
                          ? isMobile
                            ? `0 0 20px ${c}88, 0 0 35px ${c}55, inset 0 0 15px ${c}33`
                            : `0 0 30px ${c}88, 0 0 50px ${c}55, inset 0 0 20px ${c}33`
                          : isAvailable
                            ? isMobile
                              ? `0 0 15px ${c}66, 0 0 25px ${c}44, inset 0 0 10px ${c}22`
                              : `0 0 20px ${c}66, 0 0 35px ${c}44, inset 0 0 15px ${c}22`
                            : 'none',
                      }}
                    />

                    {/* icon */}
                    <Icon
                      className={cn(
                        "relative transition-all",
                        isMobile ? "w-6 h-6" : "w-9 h-9"
                      )}
                      strokeWidth={isMobile ? 1.5 : 1.8}
                      style={{
                        color: isPurchased || isAvailable ? c : '#666',
                        filter: isPurchased
                          ? `drop-shadow(0 0 8px ${c}) drop-shadow(0 0 12px ${c})`
                          : isAvailable
                            ? `drop-shadow(0 0 6px ${c})`
                            : 'none',
                      }}
                    />

                    {/* skill name */}
                    <span
                      className={cn(
                        "absolute left-1/2 -translate-x-1/2 font-fira font-medium tracking-wider rounded-md transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:scale-105",
                        isMobile ? "-bottom-8 text-[9px] px-2 py-1 max-w-[90px] text-center leading-tight" : "-bottom-12 text-[11px] px-3 py-1.5 whitespace-nowrap"
                      )}
                      style={{
                        color: isPurchased || isAvailable ? c : '#666',
                        backgroundColor: 'rgba(17, 24, 39, 0.95)',
                        border: `1px solid ${isPurchased || isAvailable ? c + '66' : '#333'}`,
                        boxShadow: isPurchased || isAvailable
                          ? `0 0 15px ${c}44, 0 4px 12px rgba(0,0,0,0.5), inset 0 0 8px ${c}22`
                          : '0 4px 12px rgba(0,0,0,0.5)',
                        textShadow: isPurchased || isAvailable
                          ? `0 0 10px ${c}88, 0 0 20px ${c}44`
                          : 'none',
                      }}
                    >
                      {s.name}
                    </span>

                    { /* tooltip */}
                    <div
                      className={cn(
                        "absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 group-hover:translate-y-1",
                        isMobile ? "mt-9 w-52" : "mt-14 w-72",
                        tooltipPosition
                      )}
                      style={{
                        backgroundColor: 'rgba(17, 24, 39, 0.98)',
                        border: `1px solid ${isPurchased || isAvailable ? c + '88' : '#444'}`,
                        boxShadow: isPurchased || isAvailable
                          ? `0 0 20px ${c}55, 0 8px 24px rgba(0,0,0,0.7), inset 0 0 15px ${c}22`
                          : '0 8px 24px rgba(0,0,0,0.7)',
                      }}
                    >
                      <div className={cn(
                        "rounded-lg",
                        isMobile ? "px-3 py-2" : "px-4 py-3"
                      )}>
                        <h3
                          className={cn(
                            "font-orbitron font-bold mb-2",
                            isMobile ? "text-xs" : "text-sm"
                          )}
                          style={{
                            color: isPurchased || isAvailable ? c : '#9ca3af',
                            textShadow: isPurchased || isAvailable
                              ? `0 0 10px ${c}88`
                              : 'none',
                          }}
                        >
                          {s.title}
                        </h3>
                        <p
                          className={cn(
                            "font-fira leading-relaxed",
                            isMobile ? "text-[10px]" : "text-xs"
                          )}
                          style={{
                            color: isPurchased || isAvailable ? '#e5e7eb' : '#9ca3af',
                            textShadow: isPurchased || isAvailable
                              ? `0 0 8px ${c}44`
                              : 'none',
                          }}
                        >
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillTree;
