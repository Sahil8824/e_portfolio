// ============================================================
// src/data/certifications.ts
// ------------------------------------------------------------
// HOW TO ADD A CERTIFICATION:
// Copy the commented example, fill it in, and add it to the
// `certifications` array. The section auto-hides when this is empty.
// ============================================================

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: string; // path under /public
};

export const certifications: Certification[] = [
  // {
  //   id: "example-cert",
  //   name: "Certification Name",
  //   issuer: "Issuing Organization",
  //   date: "Jan 2027",
  //   credentialId: "ABC123",
  //   credentialUrl: "https://example.com/verify/ABC123",
  //   image: "/certifications/example-cert.png",
  // },
];
