import { Lightbulb, Puzzle, RefreshCw, Zap } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const icons = [Zap, Lightbulb, Puzzle, RefreshCw];

export default function WhyWorkWithMe() {
  return (
    <section className="section-y bg-paper-softer dark:bg-ink-soft">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="why-work-with-me" title="How I work" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {profile.strengths.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="card h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 font-semibold text-ink dark:text-paper">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink2">
                    {s.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
