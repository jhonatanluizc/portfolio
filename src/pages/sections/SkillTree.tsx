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

  // All skills unlocked by default
  const [purchased, setPurchased] = useState<Set<string>>(
    new Set(SKILLS.map(s => s.id))
  );

  // Responsive layout dimensions
  const COLS = 3;
  const COL_W = isMobile ? 100 : 200;
  const ROW_H = isMobile ? 130 : 200;
  const NODE = isMobile ? 60 : 80;
  const tiers = Math.max(...SKILLS.map((s) => s.tier)) + 1;
  const width = COLS * COL_W;
  const height = tiers * ROW_H;

  function pos(col: number, tier: number) {
    return {
      x: col * COL_W + COL_W / 2,
      y: tier * ROW_H + NODE / 2,
    };
  }

  const lines = useMemo(() => {
    const out: { from: Skill; to: Skill }[] = [];
    SKILLS.forEach((s) => s.requires?.forEach((r) => {
      const from = SKILLS.find((x) => x.id === r);
      if (from) out.push({ from, to: s });
    }));
    return out;
  }, []);

  return (
    <section id="skill-tree" className="py-20 relative overflow-hidden overflow-visible">
      <div className={cn("max-w-7xl mx-auto", isMobile ? "px-0" : "px-4 sm:px-6")}>

        {/* Header */}
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

        {/* Skill tree */}
        <div
          className="w-full relative flex justify-center"
          style={{
            width: '100%',
            height: `${height - 32}px`,
          }}
        >
          <div
            className="relative"
            style={{
              width: `${width}px`,
              height: `${height}px`,
            }}
          >
            {/* Connection lines — orthogonal path to keep tree readable */}
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
                  ? `M ${a.x} ${a.y} L ${b.x} ${b.y}` // same column — straight vertical
                  : `M ${a.x} ${a.y} L ${a.x} ${midY} L ${b.x} ${midY} L ${b.x} ${b.y}`; // different columns — segmented horizontal/vertical

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

            {/* Skill nodes */}
            {SKILLS.map((s) => {
              const p = pos(s.col, s.tier);
              const Icon = s.icon;
              const c = colorVar[s.color];

              // Keep tooltip inside viewport on mobile
              const tooltipPosition = isMobile
                ? (s.col === 0
                  ? "left-0" // align to left edge
                  : s.col === 2
                    ? "right-0" // align to right edge
                    : "left-1/2 -translate-x-1/2") // center
                : "left-1/2 -translate-x-1/2"; // desktop always centered

              return (
                <button
                  key={s.id}
                  className={cn(
                    "absolute grid place-items-center transition-all duration-300",
                    "group cursor-pointer",
                  )}
                  style={{
                    width: NODE,
                    height: NODE,
                    left: p.x - NODE / 2,
                    top: p.y - NODE / 2,
                  }}
                  aria-label={s.name}
                >
                  {/* Outer glowing diamond */}
                  <div
                    className="absolute inset-0 rotate-45 transition-all duration-300 group-hover:scale-110 bg-dark-secondary rounded-lg"
                    style={{
                      border: `${isMobile ? '1.5px' : '2px'} solid ${c}`,
                      boxShadow: isMobile ? `0 0 20px ${c}88, 0 0 35px ${c}55, inset 0 0 15px ${c}33` : `0 0 30px ${c}88, 0 0 50px ${c}55, inset 0 0 20px ${c}33`,
                    }}
                  />

                  {/* Icon */}
                  <Icon
                    className={cn(
                      "relative transition-all",
                      isMobile ? "w-6 h-6" : "w-9 h-9"
                    )}
                    strokeWidth={isMobile ? 1.5 : 1.8}
                    style={{
                      color: c,
                      filter: `drop-shadow(0 0 8px ${c}) drop-shadow(0 0 12px ${c})`
                    }}
                  />

                  {/* Skill name */}
                  <span
                    className={cn(
                      "absolute left-1/2 -translate-x-1/2 font-fira font-medium tracking-wider rounded-md transition-all duration-300 pointer-events-none group-hover:opacity-100 group-hover:scale-105",
                      isMobile ? "-bottom-8 text-[9px] px-2 py-1 max-w-[90px] text-center leading-tight" : "-bottom-12 text-[11px] px-3 py-1.5 whitespace-nowrap"
                    )}
                    style={{
                      color: c,
                      backgroundColor: 'rgba(17, 24, 39, 0.95)',
                      border: `1px solid ${c + '66'}`,
                      boxShadow: `0 0 15px ${c}44, 0 4px 12px rgba(0,0,0,0.5), inset 0 0 8px ${c}22`,
                      textShadow: `0 0 10px ${c}88, 0 0 20px ${c}44`,
                    }}
                  >
                    {s.name}
                  </span>

                  {/* Tooltip */}
                  <div
                    className={cn(
                      "absolute top-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 group-hover:translate-y-1",
                      isMobile ? "mt-9 w-52" : "mt-14 w-72",
                      tooltipPosition
                    )}
                    style={{
                      backgroundColor: 'rgba(17, 24, 39, 0.98)',
                      border: `1px solid ${c + '88'}`,
                      boxShadow: `0 0 20px ${c}55, 0 8px 24px rgba(0,0,0,0.7), inset 0 0 15px ${c}22`,
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
                          color: c,
                          textShadow: `0 0 10px ${c}88`,
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
                          color: c,
                          textShadow: `0 0 8px ${c}44`,
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
    </section>
  );
}

export default SkillTree;
