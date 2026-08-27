# Aura Dental Studio

A premium, high-performance sample portfolio website for a fictional boutique dental practice in Downtown Austin, TX ("Aura Dental Studio"). Built as a showcase application demonstrating modern frontend architecture, WCAG 2.2 AA accessibility, clean design system integration, and responsive UX with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

> **Project Status**: `PROJECT COMPLETE — PORTFOLIO READY`

---

## Executive Overview

Aura Dental Studio presents a complete digital presence for a modern dental studio. The project balances three visual and experience pillars:
1. **Editorial Luxury**: Crisp architectural compositions, restrained gold accents, elegant typography.
2. **Calm Clinical Minimalism**: Warm alabaster canvas, soft natural daylighting, zero clinical clutter.
3. **Modern Human Warmth**: Empathetic practitioner portrayal, relaxed atmosphere, collaborative co-care focus.

---

## Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Components & SSG)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: Inline Accessible SVG Icon System
- **Fonts**: `Cormorant Garamond` (Editorial Headings) & `Plus Jakarta Sans` (Body & UI Controls) via `next/font`
- **Linting & Quality**: [ESLint](https://eslint.org/)

---

## Key Features & User Journeys

- **9-Section Marketing Homepage**: Hero, trust bar, services catalog grid, dentist spotlight, patient experience features, first visit walkthrough, patient stories, location/parking guide, and final CTA banner.
- **Dynamic Service Detail System (`/services/[slug]`)**: Pre-renders 7 treatment detail routes statically (`preventive-hygiene`, `clear-aligners`, `teeth-whitening`, `porcelain-veneers`, `same-day-crowns`, `dental-implants`, `emergency-care`) with customized FAQs, pricing guidance, and treatment steps.
- **Interactive Booking Demonstration (`/book`)**: 3-step in-memory appointment booking flow (`Service Selection` → `Date & Time` → `Patient Details` → `Confirmation`) featuring live summary review and automated mobile action bar hiding.
- **Accessible Support Routes**: Informational pages for `/about`, `/services`, `/experience`, `/testimonials`, `/faq`, and `/contact` with interactive client-validated forms.
- **Production SEO & Infrastructure**: Root application metadata, Open Graph social cards (`og-image.svg`), browser favicon (`icon.svg`), `robots.txt`, and automated XML sitemap generator (`sitemap.ts`).

---

## Route Inventory

All 18 static routes pre-render cleanly at build time:

- `/` — Homepage
- `/_not-found` — Custom 404 Error Boundary Page
- `/about` — Practice Philosophy & Team Profiles
- `/services` — Full Treatments Catalog
- `/services/preventive-hygiene` — 3D Preventive Care & Wellness Cleanings
- `/services/clear-aligners` — Clear Aligner Orthodontics
- `/services/teeth-whitening` — Professional In-Studio Whitening
- `/services/porcelain-veneers` — Custom Porcelain Veneers
- `/services/same-day-crowns` — Same-Day CEREC Ceramic Crowns
- `/services/dental-implants` — Dental Implants Restoration
- `/services/emergency-care` — Same-Day Emergency Triage
- `/experience` — Patient Comfort Care & 3D Scanning Tech
- `/testimonials` — Patient Stories & Demo Reviews
- `/faq` — Categorized FAQs & PPO Financial Standards
- `/contact` — Studio Location, Parking Guide & `ContactForm`
- `/book` — Interactive 3-Step Appointment Booking Demo
- `/robots.txt` — Crawler Rules
- `/sitemap.xml` — XML Sitemap

---

## Documentation Index

- [`docs/PRODUCTION_READINESS.md`](docs/PRODUCTION_READINESS.md) — Production deployment record, pre-rendering matrix, security audit, WCAG 2.2 AA accessibility, and deployment instructions.
- [`docs/VISUAL_POLISH_REPORT.md`](docs/VISUAL_POLISH_REPORT.md) — Final visual polish assessment record detailing the visual QA scorecard (9.8/10 average), typography refinements, section rhythm, CTA prominence, and mobile ergonomics.
- [`docs/FULL_SITE_QA.md`](docs/FULL_SITE_QA.md) — Full-site quality assurance, accessibility (WCAG 2.2 AA), responsive grid, heading hierarchy, contrast, content claim neutralization, SEO metadata, and JSON-LD record.
- [`docs/VISUAL_ASSETS.md`](docs/VISUAL_ASSETS.md) — Visual asset specification record detailing image art direction, asset inventory (`hero-operatory-visual.svg`, `dentist-portrait-visual.svg`, `clinic-lounge-visual.svg`, `digital-scan-visual.svg`), Next.js `<Image />` optimization, and responsive crop rules.
- [`docs/BOOKING_IMPLEMENTATION.md`](docs/BOOKING_IMPLEMENTATION.md) — Implementation record for the interactive 3-step appointment-booking demonstration (`/book`), state model (`BookingFlow`), step components, demo safety disclosures, and mobile action bar safe-area behavior.
- [`docs/SUPPORT_PAGES_IMPLEMENTATION.md`](docs/SUPPORT_PAGES_IMPLEMENTATION.md) — Implementation record for support & conversion routes (`/testimonials`, `/faq`, `/contact`), data models, and `ContactForm` validation.
- [`docs/SERVICE_DETAIL_IMPLEMENTATION.md`](docs/SERVICE_DETAIL_IMPLEMENTATION.md) — Implementation record for the dynamic service detail system (`/services/[slug]`), static route pre-rendering (`generateStaticParams`), service data model, and shared UI patterns.
- [`docs/CORE_INTERNAL_PAGES_IMPLEMENTATION.md`](docs/CORE_INTERNAL_PAGES_IMPLEMENTATION.md) — Implementation record for core internal marketing routes (`/about`, `/services`, `/experience`), reusable shared pattern primitives, structured datasets, and SEO metadata.
- [`docs/INTERNAL_PAGES_ARCHITECTURE.md`](docs/INTERNAL_PAGES_ARCHITECTURE.md) — Comprehensive architecture specification for internal routes, page taxonomy matrix, template shell strategy, routing hierarchy, CTA matrix, content data architecture, and content safety rules.
- [`docs/SHARED_PAGE_PATTERNS.md`](docs/SHARED_PAGE_PATTERNS.md) — Pattern inventory specifying 10 reusable UI patterns (`PageHeader`, `Breadcrumbs`, `EditorialSplit`, `CardGrid`, `FaqAccordion`, `ProcessSteps`, `TestimonialQuote`, `CtaBanner`, `MetadataRow`, `RelatedServices`).
- [`docs/HOMEPAGE_QA.md`](docs/HOMEPAGE_QA.md) — Visual QA & refinement audit documenting issue resolutions, amenity SVG icons, portfolio demo content disclosures, static SVG map graphic, and responsive findings.
- [`docs/HOMEPAGE_IMPLEMENTATION.md`](docs/HOMEPAGE_IMPLEMENTATION.md) — Implemented homepage documentation detailing 9 section components, structured datasets, responsive decisions, and accessibility.
- [`docs/FRONTEND_FOUNDATION.md`](docs/FRONTEND_FOUNDATION.md) — Implemented frontend foundation detailing typography font loading, design token architecture, layout primitives (`Container`, `Section`, `Divider`), WCAG 2.2 AA accessibility rules (`SkipToContent`, focus rings), global shell, and button primitives.
- [`docs/HOMEPAGE_SPECIFICATION.md`](docs/HOMEPAGE_SPECIFICATION.md) — Implementation-ready homepage specification detailing section inventory, hero strategy, header/footer, trust bar, services grid, dentist spotlight, patient experience features, first visit walkthrough, testimonials, location/parking guide, final CTA, and wireframes.
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — Creative direction, brand personality, color system, typography pairing, 8pt spacing scale, component design language, imagery art direction, and design tokens.
- [`docs/INFORMATION_ARCHITECTURE.md`](docs/INFORMATION_ARCHITECTURE.md) — Comprehensive sitemap, routing map, navigation architecture, page content hierarchies, detailed user flows, CTA matrix, booking flow blueprint, mobile UX, accessibility specs, and SEO IA.
- [`docs/PRODUCT_BRIEF.md`](docs/PRODUCT_BRIEF.md) — Product brief, clinic profile, target audience analysis, business goals, service catalog, trust framework, and functional requirements.
- [`docs/ENGINEERING_CONVENTIONS.md`](docs/ENGINEERING_CONVENTIONS.md) — Engineering rules, accessibility standards, responsive guidelines, and code quality conventions.

---

## Project Structure

```text
dentist-portfolio-website/
├── docs/                        # Specifications, architecture blueprints, pattern inventories & implementation records
│   ├── BOOKING_IMPLEMENTATION.md
│   ├── CORE_INTERNAL_PAGES_IMPLEMENTATION.md
│   ├── DESIGN_SYSTEM.md
│   ├── ENGINEERING_CONVENTIONS.md
│   ├── FRONTEND_FOUNDATION.md
│   ├── FULL_SITE_QA.md
│   ├── HOMEPAGE_IMPLEMENTATION.md
│   ├── HOMEPAGE_QA.md
│   ├── HOMEPAGE_SPECIFICATION.md
│   ├── INFORMATION_ARCHITECTURE.md
│   ├── INTERNAL_PAGES_ARCHITECTURE.md
│   ├── PRODUCT_BRIEF.md
│   ├── PRODUCTION_READINESS.md
│   ├── SERVICE_DETAIL_IMPLEMENTATION.md
│   ├── SHARED_PAGE_PATTERNS.md
│   ├── SUPPORT_PAGES_IMPLEMENTATION.md
│   ├── VISUAL_ASSETS.md
│   └── VISUAL_POLISH_REPORT.md
├── public/                      # Static assets & optimized media system
│   ├── icons/                   # SVG icons & symbols
│   ├── images/                  # High-resolution media assets (hero, dentist portrait, clinic lounge, digital scan)
│   ├── og-image.svg             # Open Graph social preview banner (1200x630)
│   └── robots.txt               # Production crawler rules
├── src/
│   ├── app/                     # Next.js App Router (pages, layouts, icon & sitemap)
│   │   ├── about/               # About page route
│   │   ├── book/                # Interactive Booking Demonstration route
│   │   ├── contact/             # Contact & Location route
│   │   ├── experience/          # Experience page route
│   │   ├── faq/                 # FAQs & Financials route
│   │   ├── services/            # Services Catalog route
│   │   │   └── [slug]/          # Dynamic Service Detail route (7 treatments)
│   │   ├── testimonials/        # Patient Stories route
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── icon.svg             # Application favicon SVG
│   │   ├── layout.tsx           # Root layout shell & global metadata
│   │   ├── page.tsx             # Homepage route
│   │   └── sitemap.ts           # Dynamic XML sitemap generator
│   ├── components/              # Shared UI primitives, global shell, page patterns & booking components
│   │   ├── booking/             # BookingFlow, BookingProgress, BookingServiceStep, BookingDateTimeStep, BookingDetailsStep, BookingSummary, BookingConfirmation, BookingError
│   │   ├── global/              # Header, Footer, MobileDrawer, MobileActionBar
│   │   ├── shared/              # PageHeader, Breadcrumbs, EditorialSplit, CardGrid, ProcessSteps, FaqAccordion, MetadataRow, ContactForm, CtaBanner, RelatedServices
│   │   └── ui/                  # Button, Container, Section, Divider, Icons
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Structured datasets & utilities
│   │   ├── faqData.ts
│   │   ├── homepageData.ts
│   │   ├── servicesData.ts
│   │   ├── teamData.ts
│   │   └── testimonialData.ts
│   └── sections/                # Homepage section components
│       └── home/                # Hero, Trust, Services, Dentist, Experience, FirstVisit, Testimonials, Location, FinalCTA
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Development & Build Workflow

### Prerequisites

- **Node.js**: `v20+` (Recommended: `v24+`)
- **Package Manager**: `npm` (v10+)

### Commands

- **Install Dependencies**:
  ```bash
  npm install
  ```

- **Run Local Development Server**:
  ```bash
  npm run dev
  ```
  App opens at [http://localhost:3000](http://localhost:3000).

- **Execute Production Build**:
  ```bash
  npm run build
  ```
  Compiles Next.js Turbopack build and pre-renders all 18 static pages.

- **Start Local Production Server**:
  ```bash
  npm run start
  ```

- **Run Code Quality Lint**:
  ```bash
  npm run lint
  ```

---

## Fictional Showcase Disclosure

**Aura Dental Studio is a sample portfolio demonstration project.** All practice details, practitioner bios, patient reviews, pricing estimates, appointment availability, and contact interactions are illustrative concepts designed to showcase modern web application design and engineering. No real medical services are rendered, and no personal data is transmitted to an external server.
