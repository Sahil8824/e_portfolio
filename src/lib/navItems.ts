export type NavItem = {
  label: string;
  href: string;
};

// Certifications always appears (it shows a "coming soon" state when
// empty rather than hiding). Achievements/Experience are intentionally
// left out of the navbar and fully hide themselves when their data
// files are empty — see src/data/achievements.ts and experience.ts.
export function getNavItems(): NavItem[] {
  return [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];
}
