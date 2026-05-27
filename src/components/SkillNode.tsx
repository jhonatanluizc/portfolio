import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type SkillStatus = "purchased" | "available" | "locked";

interface SkillNodeProps {
  icon: LucideIcon;
  name: string;
  status: SkillStatus;
  selected?: boolean;
  diamond?: boolean;
  onClick?: () => void;
}

export function SkillNode({ icon: Icon, status, selected, diamond, onClick }: SkillNodeProps) {
  const isOn = status === "purchased" || status === "available";
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative grid place-items-center transition-all duration-300 group",
        diamond ? "w-20 h-20 rotate-45" : "w-16 h-16",
        selected && "scale-110",
      )}
      aria-label="skill"
    >
      <span
        className={cn(
          "absolute inset-0 border-2 transition-all",
          diamond ? "" : "[clip-path:polygon(50%_0,100%_25%,100%_75%,50%_100%,0_75%,0_25%)]",
          status === "purchased" && "bg-card border-frost animate-pulse-frost",
          status === "available" && "bg-card/60 border-frost/70 skill-glow",
          status === "locked" && "bg-card/40 border-border",
          selected && "border-accent skill-glow-rune",
        )}
      />
      <Icon
        className={cn(
          "relative z-10 transition-all",
          diamond ? "-rotate-45 w-7 h-7" : "w-7 h-7",
          isOn ? "text-foreground text-glow" : "text-muted-foreground/50",
          selected && "text-accent text-rune-glow",
        )}
        strokeWidth={1.5}
      />
    </button>
  );
}