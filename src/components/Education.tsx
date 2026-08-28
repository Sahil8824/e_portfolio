import { GraduationCap, MapPin, CalendarClock, Award } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  const { degree, institute, year, cgpa, location } = profile.education;

  const rows = [
    { icon: GraduationCap, label: "Degree", value: degree },
    { icon: MapPin, label: "Institute", value: institute },
    { icon: CalendarClock, label: "Status", value: year },
    { icon: Award, label: "CGPA", value: cgpa },
  ];

  return (
    <section id="education" className="section-y bg-paper-softer dark:bg-ink-soft">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="education" title="Education" />

        <Reveal delay={0.1} className="mt-10">
          <div className="card overflow-hidden">
            <div className="border-b border-paper-line p-6 dark:border-ink-line sm:p-8">
              <h3 className="text-xl font-semibold text-ink dark:text-paper">
                {degree}
              </h3>
              <p className="mt-1 text-ink2">
                {institute} · {location}
              </p>
            </div>
            <div className="grid grid-cols-1 divide-y divide-paper-line dark:divide-ink-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              {rows.map((row) => (
                <div key={row.label} className="flex items-start gap-3 p-6">
                  <row.icon className="mt-0.5 text-accent" size={18} />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide text-ink2">
                      {row.label}
                    </p>
                    <p className="mt-1 font-medium text-ink dark:text-paper">
                      {row.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
