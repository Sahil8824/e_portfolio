import { Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Interests() {
  return (
    <section className="section-y">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="interests"
          title="What I'm exploring"
          description="Areas I'm actively learning about and building toward."
        />

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
          {profile.interests.map((interest) => (
            <span
              key={interest}
              className="inline-flex items-center gap-2 rounded-full border border-paper-line bg-paper-soft px-4 py-2 text-sm text-ink dark:border-ink-line dark:bg-ink-soft dark:text-paper"
            >
              <Sparkles size={14} className="text-accent" />
              {interest}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
