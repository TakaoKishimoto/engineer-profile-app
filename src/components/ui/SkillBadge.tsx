import { Skill } from "../../lib/types/engineer";

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-secondary px-3 py-1">
      <span className="font-bold">{skill.name}</span>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i < skill.level
                ? "bg-primary"
                : "bg-secondary-foreground opacity-20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
