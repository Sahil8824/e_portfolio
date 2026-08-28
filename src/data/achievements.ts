// ============================================================
// src/data/achievements.ts
// ------------------------------------------------------------
// HOW TO ADD AN ACHIEVEMENT:
// Copy the commented example, fill it in, and add it to the
// `achievements` array. The section auto-hides when this is empty.
// ============================================================

export type Achievement = {
  id: string;
  title: string;
  description: string;
  date: string;
  organization?: string;
  image?: string; // path under /public
};

export const achievements: Achievement[] = [
  // {
  //   id: "example-achievement",
  //   title: "Achievement Title",
  //   description: "A short description of what you achieved and why it mattered.",
  //   date: "Mar 2027",
  //   organization: "Organization Name",
  //   image: "/achievements/example.png",
  // },
];
