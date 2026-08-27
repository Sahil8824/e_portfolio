import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="section-y">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="experience" title="Experience" />

        <div className="mt-12 space-y-5">
          {experience.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <div className="card p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <Briefcase className="mt-1 text-accent" size={20} />
                    <div>
                      <h3 className="font-semibold text-ink dark:text-paper">
                        {item.role} · {item.company}
                      </h3>
                      <p className="mt-1 text-sm text-ink2">
                        {item.location}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-ink2">
                    {item.duration}
                  </span>
                </div>

                <ul className="mt-4 space-y-1.5 pl-8">
                  {item.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2 text-sm text-ink2"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5 pl-8">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-paper-line px-2 py-0.5 font-mono text-[11px] text-ink2 dark:border-ink-line"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
