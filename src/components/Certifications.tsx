import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="section-y">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="certifications" title="Certifications" />

        {certifications.length > 0 ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <Reveal key={cert.id} delay={i * 0.08}>
                <div className="card h-full p-6 transition-transform hover:-translate-y-1">
                  <BadgeCheck className="text-accent" size={22} />
                  <h3 className="mt-4 font-semibold text-ink dark:text-paper">
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink2">
                    {cert.issuer} · {cert.date}
                  </p>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                    >
                      Verify Credential <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-center rounded-2xl border border-dashed border-paper-line px-8 py-16 text-center dark:border-ink-line">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Award size={24} />
              </div>
              <p className="mt-5 text-ink2">
                Certifications will be added soon.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
