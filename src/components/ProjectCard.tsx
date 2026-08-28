"use client";

import { ExternalLink, Github, Info } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <div className="group card flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-glow">
      <div className="relative aspect-video overflow-hidden border-b border-paper-line bg-paper-softer dark:border-ink-line dark:bg-ink-softer">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-xs text-ink2">
            preview image
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-ink dark:text-paper">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink2">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5 opacity-80 transition-opacity group-hover:opacity-100">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-paper-line px-2 py-0.5 font-mono text-[11px] text-ink2 dark:border-ink-line"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-paper-line pt-4 dark:border-ink-line">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
          >
            <Info size={15} /> View Project
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink2 hover:text-accent"
            >
              <Github size={15} /> GitHub
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-ink2 hover:text-accent"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
