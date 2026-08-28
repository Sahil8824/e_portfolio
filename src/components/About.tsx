import { GraduationCap, MapPin, Home, Sparkles } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const infoCards = [
  {
    icon: GraduationCap,
    label: "Education",
    value: `${profile.education.degree}`,
    sub: `${profile.education.institute} · ${profile.education.year} · CGPA ${profile.education.cgpa}`,
  },
  {
    icon: MapPin,
    label: "College Location",
    value: profile.location.college,
    sub: "Currently studying here",
  },
  {
    icon: Home,
    label: "Home Location",
    value: profile.location.home,
    sub: "Where I'm from",
  },
  {
    icon: Sparkles,
    label: "Focus",
    value: "Java · Software Dev · AI",
    sub: "Quick learner, technology enthusiast",
  },
];

export default function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="about"
          title="A bit about me"
          description="Where I'm studying, what I'm focused on, and how I like to work."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal delay={0.1} className="space-y-5">
            {profile.introduction.map((para, i) => (
              <p key={i} className="leading-relaxed text-ink2">
                {para}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              {profile.personalInterests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-paper-line px-3 py-1 font-mono text-xs text-ink2 dark:border-ink-line"
                >
                  {interest}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {infoCards.map((card, i) => (
              <Reveal key={card.label} delay={0.15 + i * 0.08}>
                <div className="card h-full p-5 transition-transform hover:-translate-y-1">
                  <card.icon className="text-accent" size={22} />
                  <p className="mt-4 font-mono text-xs uppercase tracking-wide text-ink2">
                    {card.label}
                  </p>
                  <p className="mt-1 font-semibold text-ink dark:text-paper">
                    {card.value}
                  </p>
                  <p className="mt-1 text-sm text-ink2">{card.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
