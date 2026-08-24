// ============================================================
// src/data/skills.ts
// ------------------------------------------------------------
// Add/remove a skill by editing the arrays below — no
// percentages, just clean category-based tags.
// ============================================================

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "C", "C++"],
  },
  {
    category: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Database",
    skills: ["MySQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub"],
  },
];
