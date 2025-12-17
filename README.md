# Narahari BN — Portfolio

A personal portfolio website built to showcase my work as a Software Developer and Data Engineering enthusiast. It features an interactive 3D character, scroll-driven animations, a physics-based tech stack, and clean responsive sections that walk through who I am, what I do, and what I've built.

> **Hello, I'm Narahari BN** — a passionate Developer / Data Engineer pursuing a B.S. in Information Technology at Northeastern University (Class of 2027). I focus on building scalable data pipelines, ETL processes, and cloud solutions on AWS and Azure, while bringing a full-stack engineering perspective to every project.

---

## Sections

- **Landing** — Animated hero with 3D character and rotating tagline
- **About** — Short intro and background
- **What I Do** — Two focus areas: Develop and Data Engineer
- **Career & Experience** — Timeline of internship, projects, and current focus
- **Work** — Featured projects (Stock Market ETL Pipeline live demo + more)
- **Tech Stack** — Interactive physics-based scene with all my tools
- **Contact** — Email, phone, GitHub, LinkedIn, LeetCode

---

## Tech Stack

**Frontend & Languages**
- React 18 · TypeScript · JavaScript · HTML5 · CSS3
- Vite (build tool)

**3D & Animations**
- Three.js · @react-three/fiber · @react-three/drei
- @react-three/rapier (physics) · @react-three/postprocessing
- GSAP (with ScrollTrigger)
- Lenis (smooth scrolling)

**Data Engineering & Cloud (in my work, not the site itself)**
- Python · SQL · PostgreSQL · MySQL · Pandas · SQLAlchemy
- AWS · Azure · Power BI · Excel
- Docker · GitHub Actions · Streamlit · Great Expectations

**Other**
- Git · Java · `react-icons` · `react-fast-marquee`

---

## Run Locally

### Prerequisites
- Node.js 18+ and npm
- Git

### Setup

```bash
git clone <this-repo-url>
cd Portfolio-Website-main
npm install
npm run dev
```

The dev server runs on `http://localhost:5173` (Vite default).

### Other scripts

```bash
npm run build     # Type-check and build for production
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

---

## Project Structure

```
Portfolio-Website-main/
├── public/
│   ├── images/              Tech stack logos (React, Python, AWS, etc.)
│   ├── models/              3D scene assets (HDR environment, character)
│   └── fonts/               Custom typography
├── src/
│   ├── components/
│   │   ├── Character/       3D character scene (Three.js)
│   │   ├── styles/          Component-scoped CSS
│   │   ├── Landing.tsx      Hero with animated name & tagline
│   │   ├── About.tsx        Bio section
│   │   ├── WhatIDo.tsx      Develop / Data Engineer cards
│   │   ├── Career.tsx       Experience timeline
│   │   ├── Work.tsx         Project grid with live links
│   │   ├── TechStack.tsx    Physics-based skill spheres
│   │   ├── Contact.tsx      Contact form section
│   │   ├── SocialIcons.tsx  GitHub / LinkedIn / LeetCode
│   │   ├── Navbar.tsx       Top navigation
│   │   └── Loading.tsx      Initial load screen
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

---

## Featured Project

### [Stock Market ETL Pipeline](https://stock-market-etl-pipeline-5rp9gkvb5jlekm9tcasqqw.streamlit.app)

End-to-end automated system tracking 17 stocks across 7 sectors. ML predicts next-day prices (~70–75% accuracy), generates real-time buy/sell signals, validates 2,900+ daily records, and ships alerts via Email & Slack.

**Tools:** Python · PostgreSQL · Docker · Streamlit · Pandas · SQLAlchemy · Great Expectations · GitHub Actions

---

## Contact

- **Email:** [bheemaganapallinar.n@northeastern.edu](mailto:bheemaganapallinar.n@northeastern.edu)
- **Phone:** +1 857 351 5640
- **GitHub:** [Narahari2364](https://github.com/Narahari2364)
- **LinkedIn:** [narahari-bn](https://www.linkedin.com/in/narahari-bn-435488284/)
- **LeetCode:** [Narahari_bn](https://leetcode.com/u/Narahari_bn/)

---

## Credits

Designed and developed by **Narahari BN** · 2026

Built on top of an open-source portfolio template, then heavily customized — content, branding, color palette, character lighting, project sections, contact info, and the full tech stack scene have all been rewritten to reflect my own work.

