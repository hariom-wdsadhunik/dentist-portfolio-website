# Shared Page Patterns Inventory: Aura Dental Studio

> **Document Status**: Approved Pattern Specification  
> **Project Phase**: Phase 7 — Internal Pages Architecture & Shared Page Patterns  
> **Target Application**: Dentist Portfolio Website (`dentist-portfolio-website`)

---

## Pattern Inventory Overview

This inventory specifies 10 reusable UI patterns to be implemented in `src/components/patterns/` and `src/components/ui/` for constructing internal pages without code duplication.

```text
Shared Pattern Matrix
├── 1. PageHeader         -> Standardized top banner with title, eyebrow & breadcrumbs
├── 2. Breadcrumbs        -> Accessible navigation trail for nested routes
├── 3. EditorialSplit     -> Asymmetric 2-column image/text block
├── 4. CardGrid           -> Responsive grid container for service/team cards
├── 5. FaqAccordion       -> Expandable Q&A accordion list
├── 6. ProcessSteps       -> Numbered 3-step walkthrough progression
├── 7. TestimonialQuote   -> Highlighting patient scenario quotes
├── 8. CtaBanner          -> Reusable full-width closing conversion section
├── 9. MetadataRow        -> Key-value metadata table for treatment details
└── 10. RelatedServices   -> Contextual service recommendation cards
```

---

## Pattern Specifications

### 1. `PageHeader`
* **Purpose**: Provide consistent page entry header across internal marketing pages.
* **Structure**: Eyebrow label, `<h1>` heading, supporting paragraph, optional breadcrumb, optional primary action button.
* **Data Inputs**: `title: string`, `eyebrow?: string`, `description?: string`, `bg?: "canvas" | "linen" | "forest"`, `children?: React.ReactNode`.
* **States**: Default resting state. Supports dark (`forest`) and warm light (`canvas`/`linen`) canvas themes.
* **Accessibility**: Contains single `<h1>` per route. High contrast text.
* **Responsive Behavior**: Stacked text on mobile; maximum text width restricted to `65ch` on desktop.
* **Used On**: `/about`, `/services`, `/services/[slug]`, `/experience`, `/testimonials`, `/faq`, `/contact`.

---

### 2. `Breadcrumbs`
* **Purpose**: Display hierarchical route location and enable 1-click parent navigation.
* **Structure**: Horizontal list of links separated by chevron dividers (`/` or `>`). Current page rendered as plain text (`aria-current="page"`).
* **Data Inputs**: `items: Array<{ label: string; href?: string }>`.
* **States**: Hover state on parent links (`hover:text-[#0D3B36]`). Current page item is non-clickable.
* **Accessibility**: Wrapped in `<nav aria-label="Breadcrumb">`, screen reader breadcrumb list markup.
* **Responsive Behavior**: Truncates intermediate items on mobile (`< 640px`) to preserve horizontal layout.
* **Used On**: `/services/[slug]`, `/faq`, `/contact`.

---

### 3. `EditorialSplit`
* **Purpose**: Present composed editorial image and text content side-by-side.
* **Structure**: 2-column asymmetric grid (5-col image / 7-col text or 6-col / 6-col).
* **Data Inputs**: `title: string`, `eyebrow?: string`, `body: React.ReactNode`, `imageSide?: "left" | "right"`, `imageNode: React.ReactNode`, `cta?: React.ReactNode`.
* **States**: Static resting layout.
* **Accessibility**: Image contains descriptive `alt` text. Keyboard accessible CTA buttons.
* **Responsive Behavior**: Stacks image above text on mobile; side-by-side on desktop (`≥ 1024px`).
* **Used On**: `/about`, `/services/[slug]`, `/experience`, `/contact`.

---

### 4. `CardGrid`
* **Purpose**: Display cards (services, amenities, team) in a clean responsive grid.
* **Structure**: CSS grid container with customizable column counts and gaps.
* **Data Inputs**: `columns?: { mobile?: 1, tablet?: 2, desktop?: 3 | 4 }`, `children: React.ReactNode`.
* **Responsive Behavior**: 1 column on mobile, 2 columns on tablet, 3–4 columns on desktop.
* **Used On**: `/services`, `/about`, `/experience`, `/testimonials`.

---

### 5. `FaqAccordion`
* **Purpose**: Present expandable question-and-answer pairs without overwhelming page height.
* **Structure**: Stack of accordion items with question trigger header and expandable answer body.
* **Data Inputs**: `items: Array<{ question: string; answer: string; category?: string }>`.
* **States**: Expanded (`aria-expanded="true"`) vs Collapsed (`aria-expanded="false"`).
* **Accessibility**: Header trigger button with `aria-controls` pointing to answer container ID. Keyboard `Enter`/`Space` toggle.
* **Responsive Behavior**: Full-width expansion on all viewports.
* **Used On**: `/faq`, `/services/[slug]`.

---

### 6. `ProcessSteps`
* **Purpose**: Walk patients through a multi-step procedure or onboarding journey.
* **Structure**: 3-step or 4-step horizontal/vertical card sequence with step numbers (`01`, `02`, `03`) and directional chevrons.
* **Data Inputs**: `steps: Array<{ number: string; title: string; description: string; details?: string }>`.
* **Responsive Behavior**: Stacked cards on mobile; 3-column row with chevrons on desktop (`≥ 768px`).
* **Used On**: Homepage, `/experience`, `/services/[slug]`.

---

### 7. `TestimonialQuote`
* **Purpose**: Highlight individual patient scenario feedback or care quote.
* **Structure**: Quote watermark icon, star rating, italic quote text, patient name, location, and procedure tag.
* **Data Inputs**: `quote: string`, `author: string`, `location: string`, `treatment: string`, `rating?: number`.
* **Used On**: Homepage, `/testimonials`, `/experience`.

---

### 8. `CtaBanner`
* **Purpose**: Provide full-width closing conversion section at the bottom of pages.
* **Structure**: Background container (`bg-[#0D3B36]` or `bg-[#F4F0E8]`), headline, supporting copy, primary CTA button, microcopy guarantees.
* **Data Inputs**: `title: string`, `description: string`, `primaryCta: React.ReactNode`, `secondaryCta?: React.ReactNode`, `bg?: "forest" | "linen"`.
* **Used On**: All internal pages (`/about`, `/services`, `/services/[slug]`, `/experience`, `/testimonials`, `/faq`, `/contact`).

---

### 9. `MetadataRow`
* **Purpose**: Display quick-fact key-value treatment specifications (e.g. Duration, Anesthesia, Recovery, Fee Range).
* **Structure**: 2-column or 4-column key-value grid with subtle dividers.
* **Data Inputs**: `items: Array<{ label: string; value: string }>`.
* **Used On**: `/services/[slug]`.

---

### 10. `RelatedServices`
* **Purpose**: Encourage cross-page treatment exploration.
* **Structure**: 2 or 3 service recommendation cards with category badges, short description, and arrow links.
* **Data Inputs**: `services: Array<{ title: string; description: string; href: string }>`.
* **Used On**: `/services/[slug]`.

---

*This pattern inventory governs all shared component construction in Phase 8+.*
