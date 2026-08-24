import { Braces, Code2, Database, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const categoryIcons: Record<string, typeof Braces> = {
  "Programming Languages": Braces,
  "Web Technologies": Code2,
  Database: Database,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section-y bg-paper-softer dark:bg-ink-soft">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="skills"
          title="Technical skills"
          description="Technologies I've learned and regularly practice with — organized by category, not inflated with percentages."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((group, i) => {
            const Icon = categoryIcons[group.category] ?? Code2;
            return (
              <Reveal key={group.category} delay={i * 0.1}>
                <div className="card h-full p-6 transition-transform hover:-translate-y-1 hover:border-accent/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={19} />
                  </div>
                  <h3 className="mt-4 font-semibold text-ink dark:text-paper">
                    {group.category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-paper-line px-2.5 py-1 font-mono text-xs text-ink2 dark:border-ink-line"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
