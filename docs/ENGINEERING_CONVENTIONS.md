# Engineering Conventions

This document establishes the engineering rules, architectural principles, and quality standards for the `dentist-portfolio-website` project.

---

## 1. Component Architecture & Modular Design

* **Prefer Reusable Components**: Abstract components into `src/components/` when reuse across multiple sections or pages is justified. Avoid premature abstraction for single-use logic.
* **Avoid Duplication**: Do not duplicate styling patterns, layout logic, or utility methods unnecessarily. Extract common patterns into reusable helpers or primitives.
* **Avoid Monolithic Components**: Break large page sections into smaller, focused sub-components. Aim for clear single-responsibility per file.
* **Separate Reusable UI from Page Logic**: Keep atomic UI elements (buttons, modals, inputs, badges) in `src/components/ui/`, section-specific components in `src/sections/`, and route configurations in `src/app/`.

---

## 2. HTML, Accessibility & Responsive Design

* **Semantic HTML**: Use native semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) to provide meaningful document structure.
* **Accessibility (a11y) as a Baseline**: Treat accessibility as a standard part of implementation. Include appropriate ARIA roles, labels (`aria-label`), keyboard navigation support, and sufficient color contrast ratios.
* **Intentional Responsive Behavior**: Design mobile-first layouts intentionally. Ensure fluid transitions between mobile, tablet, and desktop viewports without horizontal scrolling or broken elements.

---

## 3. Design Tokens & Styling Rules

* **Centralized Design Tokens**: Define colors, typography scales, spacing, border radii, and breakpoints using Tailwind CSS theme configuration or CSS custom properties.
* **Lean & Maintainable Styling**: Avoid arbitrary hardcoded utility classes where design tokens exist. Use consistent spacing and color tokens.

---

## 4. TypeScript & Code Quality Standards

* **Strict TypeScript Usage**: Use explicit types and interfaces for component props, data models, and helper functions.
* **No Casual `any`**: Do not fall back to `any`. Use `unknown`, generics, or exact union types when exact shapes are flexible.
* **Error Surface & Handling**: Surface errors cleanly with meaningful context instead of swallowing exceptions or silently returning empty fallbacks.
* **Consistent Naming Conventions**:
  * React Components: `PascalCase` (e.g., `HeaderNavigation.tsx`)
  * Utilities & Custom Hooks: `camelCase` (e.g., `useScrollPosition.ts`, `formatDate.ts`)
  * Constants & Tokens: `UPPER_SNAKE_CASE` or structured objects
  * Types & Interfaces: `PascalCase` (e.g., `NavEntry`, `DentalService`)

---

## 5. Dependency & Complexity Management

* **Avoid Unnecessary Packages**: Prefer native Web APIs, standard React patterns, and lightweight utilities over heavy third-party dependencies.
* **No Over-Engineering**: Keep the architecture clean, approachable, and appropriate for a high-quality portfolio/demo website. Avoid micro-abstractions or over-complicated state machines where simple React state suffices.
* **Purposeful File Creation**: Avoid generating unused placeholder files, dead code, or empty utility modules without a clear purpose.
* **Clean Code Definition of Done**: Remove temporary hacks, console logs, and hardcoded placeholders before considering any phase complete.
