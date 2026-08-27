import { Trophy } from "lucide-react";
import { achievements } from "@/data/achievements";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Achievements() {
  if (achievements.length === 0) return null;

  return (
    <section id="achievements" className="section-y bg-paper-softer dark:bg-ink-soft">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="achievements" title="Achievements" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <div className="card h-full p-6">
                <Trophy className="text-accent" size={22} />
                <h3 className="mt-4 font-semibold text-ink dark:text-paper">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink2">
                  {item.description}
                </p>
                <p className="mt-3 font-mono text-xs text-ink2">
                  {item.organization ? `${item.organization} · ` : ""}
                  {item.date}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
