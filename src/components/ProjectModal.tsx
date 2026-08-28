"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} details`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-paper-line bg-paper-soft p-6 dark:border-ink-line dark:bg-ink-soft sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-semibold text-ink dark:text-paper">
                {project.name}
              </h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-paper-line text-ink2 hover:border-accent hover:text-accent dark:border-ink-line"
              >
                <X size={16} />
              </button>
            </div>

            <p className="mt-4 leading-relaxed text-ink2">
              {project.detailedDescription}
            </p>

            {project.myRole && (
              <div className="mt-5">
                <p className="font-mono text-xs uppercase tracking-wide text-ink2">
                  My Role
                </p>
                <p className="mt-1 text-ink dark:text-paper">
                  {project.myRole}
                </p>
              </div>
            )}

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="mt-5">
                <p className="font-mono text-xs uppercase tracking-wide text-ink2">
                  Key Features
                </p>
                <ul className="mt-2 space-y-1.5">
                  {project.keyFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-ink2"
                    >
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-5">
              <p className="font-mono text-xs uppercase tracking-wide text-ink2">
                Technologies
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-paper-line px-2 py-0.5 font-mono text-[11px] text-ink2 dark:border-ink-line"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3 border-t border-paper-line pt-5 dark:border-ink-line">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-paper-line px-4 py-2 text-sm font-medium text-ink hover:border-accent hover:text-accent dark:border-ink-line dark:text-paper"
                >
                  <Github size={15} /> GitHub
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink"
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
