import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { getNavItems } from "@/lib/navItems";

export default function Footer() {
  const navItems = getNavItems().filter((item) => item.href !== "#home");

  return (
    <footer className="border-t border-paper-line dark:border-ink-line">
      <div className="container-px mx-auto max-w-6xl py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-semibold text-ink dark:text-paper">
              {profile.name}
            </p>
            <p className="mt-2 text-sm text-ink2">
              Java Developer · Software Developer · AI Prompt Engineer
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-ink2">
              Quick Links
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-sm text-ink2 hover:text-accent"
                >
                  Home
                </a>
              </li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink2 hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-ink2">
              Connect
            </p>
            <div className="mt-3 flex gap-4">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-ink2 hover:text-accent"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-ink2 hover:text-accent"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                aria-label="Send an email"
                className="text-ink2 hover:text-accent"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-paper-line pt-6 dark:border-ink-line">
          <p className="text-xs text-ink2">
            © 2026 {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
