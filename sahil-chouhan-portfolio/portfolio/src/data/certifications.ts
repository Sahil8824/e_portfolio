// ============================================================
// src/data/certifications.ts
// ============================================================

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
};

export const certifications: Certification[] = [
  {
    id: "data-structures",
    name: "Data Structures and Backend with JAVA",
    issuer: "Certification",
    date: "2026",
    image:
      "/certifications/CERTIFICATE - Data structures ans backend with JAVA.jpeg",
  },

  {
    id: "cybersecurity-foundation",
    name: "Foundation of Cybersecurity",
    issuer: "Certification",
    date: "2026",
    image:
      "/certifications/CERTIFICATE - Foundation of Cybersecurity.jpeg",
  },

  {
    id: "computer",
    name: "Introduction to Computer",
    issuer: "Certification",
    date: "2026",
    image:
      "/certifications/CERTIFICATE - Introduction to computer.jpeg",
  },

  {
    id: "manage-security-risks",
    name: "Manage Security Risks",
    issuer: "Coursera",
    date: "2026",
    image:
      "/certifications/Coursera - Manage Security Risks - Copy.pdf",
  },

  {
    id: "operating-systems",
    name: "Operating Systems",
    issuer: "Coursera",
    date: "2026",
    image:
      "/certifications/Coursera-  Operating Systems .pdf",
  },

  {
    id: "embedded-c",
    name: "Crash Course on Embedded C",
    issuer: "Coursera",
    date: "2026",
    image:
      "/certifications/Coursera- Crash Course on Embedded C Programming.pdf",
  },

  {
    id: "java",
    name: "Java",
    issuer: "Coursera",
    date: "2026",
    image:
      "/certifications/Coursera- java .pdf",
  },

  {
    id: "hackathon",
    name: "Hackathon Certificate",
    issuer: "Hackathon",
    date: "2026",
    image:
      "/certifications/Hackathon certificate.pdf",
  },

  {
    id: "internship",
    name: "Internship Certificate",
    issuer: "Internship",
    date: "2026",
    image:
      "/certifications/INTERNSHIP CERTIFICATE.pdf",
  },

  {
    id: "mathlab",
    name: "MATLAB Certificate",
    issuer: "MathWorks",
    date: "2026",
    image:
      "/certifications/mathlab.pdf",
  },

  {
    id: "mongodb",
    name: "MongoDB Certificate",
    issuer: "MongoDB",
    date: "2026",
    image:
      "/certifications/mongodibi.png",
  },

  {
    id: "ntn",
    name: "NTN Certificate",
    issuer: "NTN",
    date: "2026",
    image:
      "/certifications/NTN Certificate.jpeg",
  },

  {
    id: "zyren",
    name: "ZYREN Certificate",
    issuer: "ZYREN",
    date: "2026",
    image:
      "/certifications/ZYREN ` 26.jpeg",
  },
];
