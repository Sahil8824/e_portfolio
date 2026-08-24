# Sahil Chouhan — Developer Portfolio

A premium, responsive developer portfolio built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

## Tech stack

- Next.js 14 + React 18 + TypeScript
- Tailwind CSS (design tokens in `tailwind.config.ts`)
- Framer Motion — scroll reveals, hero entrance, mobile menu
- next-themes — dark/light mode (system-aware, saved to localStorage)
- lucide-react — icons

## Getting started

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

To build for production:

```bash
npm run build
npm run start
```

---

## How to update your personal information

Open **`src/data/profile.ts`**. Every field there (name, titles, tagline,
introduction paragraphs, education, contact details, strengths, interests)
is used across the whole site — change it once here and it updates the
Hero, About, Footer, Contact, and Education sections automatically.

## How to add a new project

Open **`src/data/projects.ts`**. Copy the commented example object,
fill in the fields, and add it to the `projects` array:

```ts
{
  id: "unique-id",
  name: "Project Name",
  shortDescription: "One sentence for the card.",
  detailedDescription: "Longer description for the modal.",
  technologies: ["Java", "Spring Boot"],
  githubUrl: "https://github.com/...",
  liveDemoUrl: "https://...",       // optional
  image: "/projects/your-image.png", // put the image in public/projects/
  keyFeatures: ["Feature one", "Feature two"],
  myRole: "What you did on this project.",
}
```

A new project card appears automatically — no component needs to change.
The "Projects are currently being developed…" placeholder disappears
the moment this array is no longer empty.

## How to add a certification

Open **`src/data/certifications.ts`**, copy the commented example into
the `certifications` array, and fill in the details. Put any certificate
image in `public/certifications/`. The section switches automatically
from "Certifications will be added soon" to a grid of certification cards.

## How to add an achievement

Open **`src/data/achievements.ts`**, copy the commented example into the
`achievements` array. The Achievements section is hidden site-wide until
this array has at least one entry.

## How to add an internship / work experience

Open **`src/data/experience.ts`**, copy the commented example into the
`experience` array. The Experience section is hidden site-wide until this
array has at least one entry.

## How to change the theme color

1. Open **`src/config/theme.ts`** and update the hex values.
2. Open **`tailwind.config.ts`** and update `colors.accent.DEFAULT / light / dark`
   to the same hex values.

Every button, tag, link, and highlight on the site pulls from this one
accent color, in both dark and light mode.

## How to add your resume

Place your PDF at `public/resume/Sahil-Chouhan-Resume.pdf` (the exact
filename `profile.resumeUrl` already points to in `src/data/profile.ts`).
The "Download Resume" and "View Resume" buttons will work immediately —
no code changes needed.

## Project structure

```
src/
├── app/                 # Next.js App Router: layout, page, global CSS
├── components/          # All UI sections (Navbar, Hero, About, ...)
├── data/                # Editable content — profile, projects, skills,
│                           certifications, achievements, experience
├── config/
│   └── theme.ts          # Central accent-color config
└── lib/
    └── navItems.ts        # Navbar links (auto-adjusts to available sections)
```
