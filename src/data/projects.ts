// ============================================================
// src/data/projects.ts
// ------------------------------------------------------------
// HOW TO ADD A PROJECT:
// Copy the commented example below, fill in your details, and
// push it into the `projects` array. The Projects section will
// automatically render a new card — no other file needs to change.
// Leave `projects` as an empty array until your first real project
// is ready; a "coming soon" placeholder is shown automatically.
// ============================================================

export type Project = {
  id: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  image?: string; // path under /public, e.g. "/projects/my-project.png"
  keyFeatures?: string[];
  myRole?: string;
};

export const projects: Project[] = [
  // Example — copy this block for each new project, then remove the comment markers:
  //
  // {
  //   id: "student-management-system",
  //   name: "Student Management System",
  //   shortDescription: "A web app to manage student records built with Java & Spring Boot.",
  //   detailedDescription:
  //     "A full description of the problem this project solves, how it works, and what you learned building it.",
  //   technologies: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
  //   githubUrl: "https://github.com/Sahil8824/student-management-system",
  //   liveDemoUrl: "",
  //   image: "/projects/student-management.png",
  //   keyFeatures: ["Add / view / edit / delete students", "Form validation", "Responsive UI"],
  //   myRole: "Sole developer — design, backend, and frontend.",
  // },
];
