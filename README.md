# Prasoon Garg — Portfolio Website

Personal portfolio website for **Prasoon Garg**, Senior Data Engineer with 5+ years of experience in Azure, Microsoft Fabric, and Databricks.

**Live site:** https://ar2029.github.io/prasoon-portfolio/

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS |
| Icons | React Icons + custom SVGs |
| Deployment | GitHub Pages via GitHub Actions |

---

## Sections

- **Hero** — Animated typewriter role cycling, stats
- **About** — Bio and background
- **Experience** — Career timeline (Eptura → Accenture → TCS)
- **Skills** — Categorized tech stack with brand icons
- **What I Do** — Core engineering capabilities
- **Projects** — Envision & DART with architecture diagrams and detail modals
- **Certifications** — AZ-900, DP-900, SC-900
- **Achievements** — Awards and recognition

---

## Local Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
```

---

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── TechStack.tsx
│   ├── WhatIDo.tsx
│   ├── Projects/
│   │   ├── Projects.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ProjectModal.tsx
│   ├── Certifications.tsx
│   ├── Achievements.tsx
│   ├── AnnouncementBanner.tsx
│   ├── ResumeRequestModal.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── Badge.tsx
│       └── Modal.tsx
├── data/
│   ├── projects.ts       # Add new projects here
│   ├── experience.ts
│   ├── skills.ts
│   └── certifications.ts
├── App.tsx
└── index.css
public/
├── images/
│   ├── envision-architecture.svg
│   └── skill-icons/      # Brand SVGs for tech stack
```

---

## Adding a New Project

Edit `src/data/projects.ts` and add a new object to the `projects` array. No component changes needed.

---

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys to GitHub Pages.

The Vite base path is set to `/prasoon-portfolio/` on production builds so all assets resolve correctly under the Pages subpath.
