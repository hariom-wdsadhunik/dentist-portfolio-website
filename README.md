# Dentist Portfolio Website (Aura Dental Studio)

A premium sample portfolio website for a fictional dental clinic ("Aura Dental Studio"). This project serves as a showcase portfolio/demo application demonstrating modern frontend architecture, accessibility, clean design system integration, and responsive UX.

> **Current Phase**: `PHASE 11 — BOOKING EXPERIENCE`

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

- [`docs/BOOKING_IMPLEMENTATION.md`](docs/BOOKING_IMPLEMENTATION.md) — Implementation record for the interactive 3-step appointment-booking demonstration (`/book`), state model (`BookingFlow`), step components (`BookingProgress`, `BookingServiceStep`, `BookingDateTimeStep`, `BookingDetailsStep`, `BookingSummary`, `BookingConfirmation`, `BookingError`), demo safety disclosures, and mobile action bar safe-area behavior.
- [`docs/SUPPORT_PAGES_IMPLEMENTATION.md`](docs/SUPPORT_PAGES_IMPLEMENTATION.md) — Implementation record for support & conversion routes (`/testimonials`, `/faq`, `/contact`), data models (`testimonialData.ts`, `faqData.ts`), client-side `ContactForm` validation, demo safety disclaimers, accessibility, and SEO metadata.
- [`docs/SERVICE_DETAIL_IMPLEMENTATION.md`](docs/SERVICE_DETAIL_IMPLEMENTATION.md) — Implementation record for the dynamic service detail system (`/services/[slug]`), static route pre-rendering (`generateStaticParams`), service data model, shared UI patterns (`FaqAccordion`, `MetadataRow`), SEO metadata, accessibility, and content claim safety.
- [`docs/CORE_INTERNAL_PAGES_IMPLEMENTATION.md`](docs/CORE_INTERNAL_PAGES_IMPLEMENTATION.md) — Implementation record for the core internal marketing routes (`/about`, `/services`, `/experience`), reusable shared pattern primitives (`PageHeader`, `Breadcrumbs`, `EditorialSplit`, `CardGrid`, `ProcessSteps`, `CtaBanner`, `RelatedServices`), structured datasets (`servicesData.ts`, `teamData.ts`), responsive/accessibility verification, and SEO metadata.
- [`docs/INTERNAL_PAGES_ARCHITECTURE.md`](docs/INTERNAL_PAGES_ARCHITECTURE.md) — Comprehensive architecture specification for internal routes (`/about`, `/services`, `/services/[slug]`, `/experience`, `/testimonials`, `/faq`, `/contact`), page taxonomy matrix (Types A-F), shared template shell strategy, routing hierarchy, CTA matrix, content data architecture, SEO schema, and content safety rules.
- [`docs/SHARED_PAGE_PATTERNS.md`](docs/SHARED_PAGE_PATTERNS.md) — Pattern inventory specifying 10 reusable UI patterns (`PageHeader`, `Breadcrumbs`, `EditorialSplit`, `CardGrid`, `FaqAccordion`, `ProcessSteps`, `TestimonialQuote`, `CtaBanner`, `MetadataRow`, `RelatedServices`) detailing purpose, structure, data inputs, states, accessibility, responsive rules, and target pages.
- [`docs/HOMEPAGE_QA.md`](docs/HOMEPAGE_QA.md) — Visual QA & refinement audit documenting issue resolutions, amenity SVG icons, portfolio demo content disclosures, static SVG map graphic, responsive findings, accessibility verification, and placeholder asset inventory.
- [`docs/HOMEPAGE_IMPLEMENTATION.md`](docs/HOMEPAGE_IMPLEMENTATION.md) — Implemented homepage documentation detailing 9 section components (`HeroSection`, `TrustSection`, `ServicesSection`, `DentistSection`, `ExperienceSection`, `FirstVisitSection`, `TestimonialsSection`, `LocationSection`, `FinalCtaSection`), structured datasets, responsive decisions, accessibility, performance, and asset replacement points.
- [`docs/FRONTEND_FOUNDATION.md`](docs/FRONTEND_FOUNDATION.md) — Implemented frontend foundation detailing typography font loading, design token architecture, layout primitives (`Container`, `Section`, `Divider`), WCAG 2.2 AA accessibility rules (`SkipToContent`, focus rings), global shell (`Header`, `MobileDrawer`, `Footer`, `MobileActionBar`), button primitives, inline SVG icon strategy, and performance decisions.
- [`docs/HOMEPAGE_SPECIFICATION.md`](docs/HOMEPAGE_SPECIFICATION.md) — Implementation-ready homepage specification detailing section inventory, hero strategy, header/footer, trust bar, services grid, dentist spotlight, patient experience features, first visit walkthrough, testimonials, location/parking guide, final CTA, responsive rules, accessibility, imagery matrix, component inventory, data models, and text wireframe.
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — Creative direction (Editorial Luxury + Calm Clinical Minimalism + Modern Human Warmth), brand personality, color system, typography pairing, 8pt spacing scale, component design language, imagery art direction, design tokens, and design anti-patterns.
- [`docs/INFORMATION_ARCHITECTURE.md`](docs/INFORMATION_ARCHITECTURE.md) — Comprehensive sitemap, routing map, navigation architecture, page content hierarchies, detailed user flows, CTA matrix, booking flow blueprint, mobile UX, accessibility specs, and SEO IA.
- [`docs/PRODUCT_BRIEF.md`](docs/PRODUCT_BRIEF.md) — Product brief, clinic profile, target audience analysis, business goals, service catalog, trust framework, and functional/non-functional requirements.
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
│   ├── HOMEPAGE_IMPLEMENTATION.md
│   ├── HOMEPAGE_QA.md
│   ├── HOMEPAGE_SPECIFICATION.md
│   ├── INFORMATION_ARCHITECTURE.md
│   ├── INTERNAL_PAGES_ARCHITECTURE.md
│   ├── PRODUCT_BRIEF.md
│   ├── SERVICE_DETAIL_IMPLEMENTATION.md
│   ├── SHARED_PAGE_PATTERNS.md
│   └── SUPPORT_PAGES_IMPLEMENTATION.md
├── public/                      # Static assets
│   ├── icons/                   # SVG icons & symbols
│   └── images/                  # High-resolution media assets
├── src/
│   ├── app/                     # Next.js App Router (pages & layouts)
│   │   ├── about/               # About page route
│   │   ├── book/                # Interactive Booking Demonstration route
│   │   ├── contact/             # Contact & Location route
│   │   ├── experience/          # Experience page route
│   │   ├── faq/                 # FAQs & Financials route
│   │   ├── services/            # Services Catalog route
│   │   │   └── [slug]/          # Dynamic Service Detail route (7 treatments)
│   │   ├── testimonials/        # Patient Stories route
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx             # Homepage route
│   ├── components/              # Shared UI primitives, global shell, page patterns & booking components
│   │   ├── booking/             # BookingFlow, BookingProgress, BookingServiceStep, BookingDateTimeStep, BookingDetailsStep, BookingSummary, BookingConfirmation, BookingError
│   │   ├── global/              # Header, Footer, MobileDrawer, MobileActionBar
│   │   ├── shared/              # PageHeader, Breadcrumbs, EditorialSplit, CardGrid, ProcessSteps, FaqAccordion, MetadataRow, ContactForm, CtaBanner, RelatedServices
│   │   └── ui/                  # Button, Container, Section, Divider, Icons
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Homepage structured data & utilities
│   │   ├── faqData.ts
│   │   ├── homepageData.ts
│   │   ├── servicesData.ts
│   │   ├── teamData.ts
│   │   └── testimonialData.ts
│   ├── sections/                # Section components
│   │   └── home/                # Hero, Trust, Services, Dentist, Experience, FirstVisit, Testimonials, Location, FinalCTA
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
