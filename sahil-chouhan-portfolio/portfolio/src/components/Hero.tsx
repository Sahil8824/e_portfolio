"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import TypedRole from "@/components/TypedRole";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.15 * i, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Ambient background grid + glow — subtle, not neon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,theme(colors.paper.line)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.paper.line)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 dark:bg-[linear-gradient(to_right,theme(colors.ink.line)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.ink.line)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
      />

      <div className="container-px mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        {/* Left: copy */}
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-paper-line px-3 py-1 font-mono text-xs text-ink2 dark:border-ink-line"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Open to internships &amp; software developer roles
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-ink dark:text-paper sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-4 font-mono text-lg sm:text-xl"
          >
            <TypedRole titles={profile.titles} />
          </motion.p>

          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink2 sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-paper-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent dark:border-ink-line dark:text-paper"
            >
              Contact Me
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-ink2 transition-colors hover:text-accent"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-ink2 transition-colors hover:text-accent"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-ink2 transition-colors hover:text-accent"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              aria-label="Send an email"
              className="text-ink2 transition-colors hover:text-accent"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right: signature visual — a "Developer.java" editor window */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md animate-floatSlow lg:max-w-none"
        >
          <div className="overflow-hidden rounded-2xl border border-paper-line bg-ink shadow-2xl dark:border-ink-line">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-ink-line bg-ink-soft px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#EF5350]" />
              <span className="h-3 w-3 rounded-full bg-[#F5C451]" />
              <span className="h-3 w-3 rounded-full bg-[#4FD1C5]" />
              <span className="ml-3 font-mono text-xs text-ink2">
                Developer.java
              </span>
            </div>

            {/* Code body */}
            <div className="flex px-0 py-5 font-mono text-[13px] leading-7 sm:text-sm">
              <div
                aria-hidden="true"
                className="select-none border-r border-ink-line px-4 text-right text-ink2/50"
              >
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>
              <div className="flex-1 px-4 text-paper/90">
                <div>
                  <span className="text-teal">public class</span>{" "}
                  <span className="text-accent-light">Developer</span> {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-teal">String</span> name ={" "}
                  <span className="text-accent-light">
                    &quot;{profile.name}&quot;
                  </span>
                  ;
                </div>
                <div className="pl-4">
                  <span className="text-teal">String</span> role ={" "}
                  <span className="text-accent-light">&quot;</span>
                  <TypedRole titles={profile.titles} />
                  <span className="text-accent-light">&quot;</span>;
                </div>
                <div className="pl-4">
                  <span className="text-teal">String</span> education ={" "}
                  <span className="text-accent-light">
                    &quot;B.Tech - IT, 3rd Year&quot;
                  </span>
                  ;
                </div>
                <div className="pl-4">
                  <span className="text-teal">String[]</span> interests = {"{"}
                </div>
                <div className="pl-8 text-ink2">
                  &quot;Java&quot;, &quot;AI&quot;, &quot;Software Dev&quot;
                </div>
                <div className="pl-4">{"};"}</div>
                <div className="pl-4">
                  <span className="text-teal">boolean</span> quickLearner ={" "}
                  <span className="text-accent-light">true</span>;
                </div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>

          {/* Floating tech chips */}
          <div className="pointer-events-none absolute -bottom-5 -left-5 hidden rounded-xl border border-paper-line bg-paper-soft px-3 py-2 font-mono text-xs text-ink shadow-lg dark:border-ink-line dark:bg-ink-soft dark:text-paper sm:block">
            git commit -m &quot;learning&quot;
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ink2 transition-colors hover:text-accent sm:block"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
