// ============================================================
// src/data/experience.ts
// ------------------------------------------------------------
// HOW TO ADD AN INTERNSHIP / EXPERIENCE:
// Copy the commented example, fill it in, and add it to the
// `experience` array. The section auto-hides when this is empty.
// ============================================================

export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  companyUrl?: string;
};

export const experience: Experience[] = [
  // {
  //   id: "example-internship",
  //   company: "Company Name",
  //   role: "Java Developer Intern",
  //   duration: "Jun 2027 - Aug 2027",
  //   location: "Remote",
  //   responsibilities: [
  //     "Built and maintained backend services using Java and Spring Boot.",
  //     "Collaborated with a small team using Git for version control.",
  //   ],
  //   technologies: ["Java", "Spring Boot", "MySQL", "Git"],
  //   companyUrl: "https://example.com",
  // },
];
