import { Download, FileText } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Resume() {
  return (
    <section className="section-y bg-paper-softer dark:bg-ink-soft">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading eyebrow="resume" title="Resume" />

        <Reveal delay={0.1} className="mt-10">
          <div className="card flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <FileText size={22} />
              </div>
              <div>
                <p className="font-semibold text-ink dark:text-paper">
                  Sahil-Chouhan-Resume.pdf
                </p>
                <p className="text-sm text-ink2">
                  Add your resume PDF to{" "}
                  <code className="font-mono text-xs">
                    /public/resume/
                  </code>{" "}
                  to activate these buttons.
                </p>
              </div>
            </div>

            <div className="flex flex-shrink-0 gap-3">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-paper-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent dark:border-ink-line dark:text-paper"
              >
                View Resume
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink shadow-glow"
              >
                <Download size={15} />
                Download
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
