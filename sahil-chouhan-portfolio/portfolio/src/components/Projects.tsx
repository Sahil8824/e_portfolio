"use client";

import { useState } from "react";
import { FolderGit2 } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-y">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="projects"
          title="Things I'm building"
          description="A growing collection of projects — this section updates automatically as new ones are added."
        />

        {projects.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.08}>
                <ProjectCard project={project} onOpen={setActive} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-center rounded-2xl border border-dashed border-paper-line px-8 py-20 text-center dark:border-ink-line">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <FolderGit2 size={24} />
              </div>
              <p className="mt-5 font-mono text-sm text-ink2">
                // projects.length === 0
              </p>
              <p className="mt-2 max-w-sm text-ink2">
                Projects are currently being developed and will be added here
                soon.
              </p>
            </div>
          </Reveal>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
