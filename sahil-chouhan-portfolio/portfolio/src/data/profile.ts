// ============================================================
// src/data/profile.ts
// ------------------------------------------------------------
// This is the ONE file you edit to update your personal info.
// Every component (Hero, About, Navbar, Footer, Contact...)
// reads from here — change a value once, it updates everywhere.
// ============================================================

export const profile = {
  name: "Sahil Chouhan",
  initials: "SC",

  // Rotating hero titles (typed effect)
  titles: ["Java Developer", "Software Developer", "AI Prompt Engineer"],

  tagline:
    "An Information Technology student passionate about software development, Java, AI, and building practical technology solutions.",

  introduction: [
    "I'm a third-year B.Tech Information Technology student at SRM Institute of Science and Technology, currently exploring Java development, software engineering, and AI prompt engineering.",
    "I enjoy understanding how things work under the hood, picking up new tools quickly, and turning ideas into working software. Outside of code, I read regularly and spend time thinking through new ideas and ways to apply what I learn.",
    "I'm still early in my journey — building projects, strengthening my fundamentals, and learning something new every week.",
  ],

  location: {
    college: "Trichy, Tamil Nadu, India",
    home: "Rajasthan, India",
  },

  education: {
    degree: "B.Tech in Information Technology",
    institute: "SRM Institute of Science and Technology",
    year: "3rd Year",
    cgpa: "8.2",
    location: "Trichy, Tamil Nadu, India",
  },

  contact: {
    email: "sc8972@srmist.edu.in",
    phone: "8824743143",
    github: "https://github.com/Sahil8824",
    linkedin: "https://www.linkedin.com/in/sahil-chouhan-987aa43aa",
  },

  resumeUrl: "/resume/Sahil-Chouhan-Resume.pdf",

  strengths: [
    {
      title: "Quick Learner",
      description:
        "I enjoy learning new technologies and adapting to new challenges.",
    },
    {
      title: "Creative Thinker",
      description:
        "I enjoy exploring ideas and thinking about practical solutions.",
    },
    {
      title: "Problem Solver",
      description:
        "I like understanding problems and developing logical solutions.",
    },
    {
      title: "Continuous Learner",
      description:
        "I continuously work on improving my technical and development skills.",
    },
  ],

  interests: [
    "Artificial Intelligence",
    "AI Prompt Engineering",
    "Java Development",
    "Software Development",
    "Web Technologies",
    "Problem Solving",
    "Learning New Technologies",
  ],

  personalInterests: [
    "Reading books",
    "Creating new ideas",
    "Exploring technology",
    "Continuous learning",
  ],
};

export type Profile = typeof profile;
