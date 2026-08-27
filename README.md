# Dentist Portfolio Website (Aura Dental Studio)

A premium sample portfolio website for a fictional dental clinic ("Aura Dental Studio"). This project serves as a showcase portfolio/demo application demonstrating modern frontend architecture, accessibility, clean design system integration, and responsive UX.

> **Current Phase**: `PHASE 3 — VISUAL DESIGN SYSTEM`

---

## Project Purpose

The primary objective of this repository is to build a modern, high-performance portfolio website for a premium dental clinic. It demonstrates frontend engineering best practices using Next.js, TypeScript, and Tailwind CSS.

---

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Linting & Formatting**: [ESLint](https://eslint.org/)
- **Architecture**: Modular Component-Based Architecture

---

## Documentation Index

- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — Creative direction (Editorial Luxury + Calm Clinical Minimalism + Modern Human Warmth), brand personality, color system, typography pairing, 8pt spacing scale, component design language, imagery art direction, design tokens, and design anti-patterns.
- [`docs/INFORMATION_ARCHITECTURE.md`](docs/INFORMATION_ARCHITECTURE.md) — Comprehensive sitemap, routing map, navigation architecture, page content hierarchies, detailed user flows, CTA matrix, booking flow blueprint, mobile UX, accessibility specs, and SEO IA.
- [`docs/PRODUCT_BRIEF.md`](docs/PRODUCT_BRIEF.md) — Product brief, clinic profile, target audience analysis, business goals, service catalog, trust framework, and functional/non-functional requirements.
- [`docs/ENGINEERING_CONVENTIONS.md`](docs/ENGINEERING_CONVENTIONS.md) — Engineering rules, accessibility standards, responsive guidelines, and code quality conventions.

---

## Project Structure

```text
dentist-portfolio-website/
├── docs/                        # Project specifications, architecture & design systems
│   ├── DESIGN_SYSTEM.md
│   ├── ENGINEERING_CONVENTIONS.md
│   ├── INFORMATION_ARCHITECTURE.md
│   └── PRODUCT_BRIEF.md
├── public/                      # Static assets
│   ├── icons/                   # SVG icons & symbols
│   └── images/                  # High-resolution media assets
├── src/
│   ├── app/                     # Next.js App Router (pages & layouts)
│   ├── components/              # Shared reusable UI components
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utilities & helper functions
│   ├── sections/                # Page-specific feature sections
│   └── styles/                  # Global styles & Tailwind configuration
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js**: `v20+` (Recommended: v24+)
- **Package Manager**: `npm` (v10+)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hariom-wdsadhunik/dentist-portfolio-website.git
   cd dentist-portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- **Development Server**:
  ```bash
  npm run dev
  ```
  Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

- **Production Build**:
  ```bash
  npm run build
  ```
  Compiles and builds the production application.

- **Start Production Server**:
  ```bash
  npm run start
  ```
  Starts the built production server locally.

- **Linting**:
  ```bash
  npm run lint
  ```
  Runs ESLint to check for code quality and style compliance.
