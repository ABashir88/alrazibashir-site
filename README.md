# alrazibashir-site

> Personal website and professional positioning platform for Alrazi Bashir — Enterprise SaaS Account Executive specializing in AI infrastructure, conversational AI, and CX technology.

---

## Overview

This site serves as a professional portfolio and positioning platform, showcasing experience in enterprise SaaS sales, AI infrastructure knowledge, and technical experimentation projects.

It complements a traditional resume by providing deeper context around enterprise sales experience, AI infrastructure knowledge, technical experimentation, and thought leadership around conversational AI and CX platforms.

**Built for:**

| Audience | Purpose |
|---|---|
| Recruiters | Evaluating enterprise sales candidates |
| Hiring Managers | Assessing domain expertise and achievements |
| Companies | Building AI and CX infrastructure |
| Collaborators | Exploring technical and commercial work |

---

## Site Sections

**Home** — Professional introduction and positioning statement.

**Hiring** — Dedicated page for hiring managers summarizing career highlights, enterprise SaaS sales experience, key achievements, and technical and industry focus.

**Projects** — Showcases technical exploration projects including voice AI experimentation, conversational AI pipelines, and infrastructure experiments.

**Contact** — Ways to connect for professional opportunities.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Deployment | Vercel |
| Analytics | Vercel Web Analytics |

---

## Architecture

The project follows the Next.js App Router structure.
```text
app/
├── layout.tsx
├── page.tsx
├── hiring/
└── projects/

public/
├── images/
└── assets/

src/
├── components/
└── styles/
```

**Key design goals:**

- Fast static rendering
- Minimal dependencies
- Clean responsive layout
- Optimized performance

---

## Local Development

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment

The site is deployed on Vercel. Every push to the `main` branch triggers an automatic build and deployment.

---

## About

Alrazi Bashir is an Enterprise SaaS Account Executive focused on helping organizations evaluate and deploy AI infrastructure, conversational AI platforms, and CX technologies. This repository contains the code for the personal website used to present that work.

---

## License

Personal project. Not intended for reuse without permission.
