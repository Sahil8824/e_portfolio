"use client";

// ============================================================
// HOW TO CONNECT A REAL EMAIL SERVICE:
// This form currently opens the visitor's email client via a
// `mailto:` link — no backend, no data is sent anywhere. To make
// it send directly:
//   1. Sign up for a form service (e.g. Formspree, EmailJS, Resend).
//   2. Replace the `handleSubmit` function below with a `fetch()`
//      call to that service's API, using the same `form` state.
// Everything else (validation, layout) can stay exactly as is.
// ============================================================

import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type FormState = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!emailRegex.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please enter a message.";
    else if (form.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-lg border bg-paper-soft px-4 py-2.5 text-sm text-ink outline-none transition-colors dark:bg-ink-soft dark:text-paper ${
      errors[field]
        ? "border-red-400"
        : "border-paper-line focus:border-accent dark:border-ink-line"
    }`;

  return (
    <section id="contact" className="section-y">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="contact"
          title="Let's talk"
          description="Reach out for internships, opportunities, or just to say hello."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <Reveal delay={0.1} className="space-y-4">
            <a
              href={`mailto:${profile.contact.email}`}
              className="card flex items-center gap-4 p-5 transition-colors hover:border-accent/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Mail size={18} />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-ink2">
                  Email
                </p>
                <p className="font-medium text-ink dark:text-paper break-all">
                  {profile.contact.email}
                </p>
              </div>
            </a>

            <a
              href={`tel:${profile.contact.phone}`}
              className="card flex items-center gap-4 p-5 transition-colors hover:border-accent/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Phone size={18} />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-ink2">
                  Phone
                </p>
                <p className="font-medium text-ink dark:text-paper">
                  {profile.contact.phone}
                </p>
              </div>
            </a>

            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 p-5 transition-colors hover:border-accent/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Github size={18} />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-ink2">
                  GitHub
                </p>
                <p className="font-medium text-ink dark:text-paper">
                  github.com/Sahil8824
                </p>
              </div>
            </a>

            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 p-5 transition-colors hover:border-accent/50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Linkedin size={18} />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-ink2">
                  LinkedIn
                </p>
                <p className="font-medium text-ink dark:text-paper">
                  linkedin.com/in/sahil-chouhan
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-ink dark:text-paper"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass("name")}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-ink dark:text-paper"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass("email")}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-ink dark:text-paper"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={inputClass("message")}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-glow transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <Send size={16} />
                Send Message
              </button>

              <p className="mt-3 font-mono text-xs text-ink2" role="status">
                {sent
                  ? "Opening your email client to send this message…"
                  : "Opens your email client — no data is stored or sent to a server."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
