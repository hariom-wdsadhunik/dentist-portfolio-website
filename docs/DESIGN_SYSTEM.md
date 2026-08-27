# Visual Design System & Creative Direction: Aura Dental Studio

> **Document Status**: Approved Specification Baseline  
> **Project Phase**: Phase 3 — Visual Design System  
> **Target Application**: Dentist Portfolio Website (`dentist-portfolio-website`)

---

## 1. Creative Direction

The creative direction for Aura Dental Studio establishes a distinct visual identity combining three core pillars:

$$\text{Editorial Luxury} + \text{Calm Clinical Minimalism} + \text{Modern Human Warmth}$$

### Brand Atmosphere & Aesthetic Principles

```text
Visual Atmosphere Spectrum
┌───────────────────────────┬───────────────────────────┬───────────────────────────┐
│     EDITORIAL LUXURY      │ CALM CLINICAL MINIMALISM  │    MODERN HUMAN WARMTH    │
├───────────────────────────┼───────────────────────────┼───────────────────────────┤
│ • Elegant Serif Headlines │ • Generous Whitespace     │ • Warm Neutral Tones      │
│ • Refined Proportions     │ • Precise Grid Alignment  │ • Gentle Micro-Transitions│
│ • Subtle Gold Accents     │ • Uncluttered Layouts     │ • Authentic Human Imagery │
│ • Architectural Details   │ • High Contrast Legibility│ • Reassuring Copy Tone   │
└───────────────────────────┴───────────────────────────┴───────────────────────────┘
```

* **Trust**: Communicated through crisp typography, high contrast text, strict grid alignment, and prominent practitioner credentials.
* **Comfort**: Communicated through soft warm alabaster backgrounds, generous whitespace, rounded architectural frames, and gentle visual transitions.
* **Precision**: Communicated through fine-line dividers, explicit metadata styling, structured service grids, and clean border details.
* **Premium Service**: Communicated through sophisticated editorial serif display headers, deep forest jade accents, and refined subtle shadows.
* **Human Care**: Communicated through authentic photography, approachable spacing, warm lighting, and accessible interaction states.

---

## 2. Brand Personality Attributes

| Attribute | Design Translation | Interface Manifestation |
| :--- | :--- | :--- |
| **1. Calm** | Generous whitespace and muted neutral surfaces. | Minimum 96px vertical section padding; warm alabaster canvas (`#FBF9F5`) instead of harsh pure white. |
| **2. Sophisticated** | Editorial typography and restrained accent colors. | Display headlines in *Cormorant Garamond* serif; deep forest jade (`#0D3B36`) for primary actions. |
| **3. Precise** | Architectural lines and structured grids. | 1px fine-line borders (`#E7E2D8`), exact 8pt spacing alignment, structured data cards. |
| **4. Reassuring** | Soft visual containers and gentle transitions. | Subtle 12px border radii, 200ms smooth hover easing, zero harsh flashes or aggressive popups. |
| **5. Transparent** | Clear typography scale and unhidden content hierarchy. | Prominent fee range displays, step-by-step visit walkthrough cards, distinct badge indicators. |
| **6. Contemporary** | Clean sans-serif body copy and fluid responsive behavior. | *Plus Jakarta Sans* body text, mobile-first touch optimization, responsive container padding. |

---

## 3. Color System

The color palette avoids cheap "medical cyan" and generic corporate blue, opting instead for a warm, editorial palette that evokes serenity, cleanliness, and luxury.

```text
Color Palette Overview
┌───────────────────────┬───────────────────────┬───────────────────────┐
│ Canvas / Alabaster    │ Forest Jade (Primary) │ Sandalwood (Accent)   │
│ #FBF9F5               │ #0D3B36               │ #D4A373               │
├───────────────────────┼───────────────────────┼───────────────────────┤
│ Charcoal (Text Main)  │ Warm Taupe (Text Sec) │ Linen (Borders)       │
│ #1C1917               │ #44403C               │ #E7E2D8               │
└───────────────────────┴───────────────────────┴───────────────────────┘
```

### Color Specification & WCAG Compliance

| Token Name | HEX Code | RGB Value | Role & Semantic Application | WCAG Ratio vs Canvas |
| :--- | :--- | :--- | :--- | :--- |
| `color.background.primary` | `#FBF9F5` | `251, 249, 245` | Main page canvas background (Warm Alabaster) | Base Canvas |
| `color.background.secondary` | `#F4F0E8` | `244, 240, 232` | Alternating section background (Soft Linen) | N/A |
| `color.surface.card` | `#FFFFFF` | `255, 255, 255` | Card containers, dropdowns, and modal surfaces | 1.05:1 |
| `color.surface.elevated` | `#FAF8F3` | `250, 248, 243` | Hovered card state & elevated panel fill | 1.02:1 |
| `color.text.primary` | `#1C1917` | `28, 25, 23` | Main headings, body text, primary labels | **16.8:1** (AAA) |
| `color.text.secondary` | `#44403C` | `68, 64, 60` | Subtitles, supporting copy, card descriptions | **10.2:1** (AAA) |
| `color.text.muted` | `#78716C` | `120, 113, 108` | Form captions, metadata, breadcrumbs | **4.8:1** (AA) |
| `color.accent.primary` | `#0D3B36` | `13, 59, 54` | Primary buttons, active nav, hero accents (Forest Jade) | **11.4:1** (AAA) |
| `color.accent.hover` | `#082824` | `8, 40, 36` | Primary button hover & active press states | **14.2:1** (AAA) |
| `color.accent.secondary` | `#D4A373` | `212, 163, 115` | Luxury badges, rating stars, subtle highlights | **2.2:1** (Large text/ui) |
| `color.border.subtle` | `#E7E2D8` | `231, 226, 216` | Card borders, input borders, structural dividers | 1.2:1 |
| `color.border.divider` | `#F0ECE1` | `240, 236, 225` | Subtle horizontal rules within sections | 1.1:1 |
| `color.status.success` | `#2D6A4F` | `45, 106, 79` | Positive confirmations, open availability indicators | **6.1:1** (AA) |
| `color.status.warning` | `#B45309` | `180, 83, 9` | Urgent warnings, limited slot availability | **5.4:1** (AA) |
| `color.status.error` | `#991B1B` | `153, 27, 27` | Form validation errors, missing field alerts | **8.2:1** (AAA) |
| `color.focus.ring` | `#0D3B36` | `13, 59, 54` | Accessible keyboard focus outline (3px offset) | **11.4:1** (AAA) |

---

## 4. Typography System

### Font Family Pairing
* **Display & Heading Font**: `Cormorant Garamond` (Google Font) — An elegant, high-contrast serif that projects editorial sophistication and medical authority.
* **UI & Body Font**: `Plus Jakarta Sans` (Google Font) — A clean, geometric sans-serif engineered for digital interfaces and screen legibility.

```text
Typography Scale Matrix
┌───────────────────┬─────────────────────┬───────────┬────────────┬─────────────┐
│ Category          │ Font Family         │ Size (px) │ Weight     │ Line Height │
├───────────────────┼─────────────────────┼───────────┼────────────┼─────────────┤
│ Display (Hero)    │ Cormorant Garamond  │ 56 - 72   │ Bold (700) │ 1.1         │
│ H1 Header         │ Cormorant Garamond  │ 40 - 52   │ Semi (600) │ 1.15        │
│ H2 Section Header │ Cormorant Garamond  │ 32 - 40   │ Semi (600) │ 1.2         │
│ H3 Card Header    │ Plus Jakarta Sans   │ 20 - 24   │ Bold (700) │ 1.3         │
│ H4 Sub-header     │ Plus Jakarta Sans   │ 16 - 18   │ Semi (600) │ 1.4         │
│ Body Regular      │ Plus Jakarta Sans   │ 16        │ Reg (400)  │ 1.6         │
│ Body Small        │ Plus Jakarta Sans   │ 14        │ Reg (400)  │ 1.5         │
│ Eyebrow / Label   │ Plus Jakarta Sans   │ 12 - 13   │ Bold (700) │ 1.2 (UPPER) │
│ Button Text       │ Plus Jakarta Sans   │ 15        │ Semi (600) │ 1.0         │
└───────────────────┴─────────────────────┴───────────┴────────────┴─────────────┘
```

---

## 5. Spacing System

Based on a strict 8pt grid scale (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`, `128px`).

```text
Vertical Section Spacing Strategy
┌────────────────────────────────────────────────────────┐
│ [ Section Padding Top: 96px Desktop / 64px Mobile ]    │
│                                                        │
│   ┌────────────────────────────────────────────────┐   │
│   │ Section Header (Mb: 48px)                      │   │
│   ├────────────────────────────────────────────────┤   │
│   │ Content Grid (Gap: 32px Desktop / 24px Mobile) │   │
│   └────────────────────────────────────────────────┘   │
│                                                        │
│ [ Section Padding Bottom: 96px Desktop / 64px Mobile ] │
└────────────────────────────────────────────────────────┘
```

* **Page Gutter Padding**: 16px (Mobile) / 24px (Tablet) / 48px (Desktop).
* **Maximum Container Width**: 1280px (Main content max-width) / 1440px (Full bleed canvas wrapper).

---

## 6. Layout & Grid System

* **12-Column Grid** on Desktop (≥1024px) with 32px gaps.
* **8-Column Grid** on Tablet (768px - 1023px) with 24px gaps.
* **4-Column Grid** on Mobile (320px - 767px) with 16px gaps.
* **Text Measure Limitation**: Maximum paragraph width capped at `65ch` (characters) to ensure optimal reading comfort.

---

## 7. Responsive Design Principles

```text
Breakpoint Strategy Matrix
┌─────────────┬─────────────────┬──────────────────────────────────────────────┐
│ Breakpoint  │ Viewport Width  │ Behavioral Adaptation                        │
├─────────────┼─────────────────┼──────────────────────────────────────────────┤
│ Mobile S/M  │ 320px - 374px   │ Single column stack, sticky bottom action bar│
│ Mobile L    │ 375px - 767px   │ 4-col grid, 48px touch targets, compact hero │
│ Tablet      │ 768px - 1023px  │ 8-col grid, side-by-side cards, drawer nav   │
│ Desktop     │ 1024px - 1439px │ 12-col grid, full header menu, 96px sections │
│ Ultra-Wide  │ 1440px+         │ Centered 1280px container, rich media cards  │
└─────────────┴─────────────────┴──────────────────────────────────────────────┘
```

---

## 8. Component Design Language

### Buttons
* **Primary Button**: Solid Forest Jade (`#0D3B36`) background, white text, 8px border radius, 12px 24px padding, subtle shadow. Hover: Deep Jade (`#082824`).
* **Secondary Button**: Soft Linen border (`#E7E2D8`), Transparent background, Charcoal text (`#1C1917`). Hover: Warm Alabaster fill (`#F4F0E8`).
* **Text Button**: Underlined Charcoal text with Forest Jade arrow icon (`→`). Hover: 4px right arrow translation.

### Cards
* **Service Card**: White surface (`#FFFFFF`), 1px subtle border (`#E7E2D8`), 12px border radius, 32px internal padding. Hover: 4px vertical lift (`translate-y-[-4px]`) and soft shadow (`shadow-md`).
* **Testimonial Card**: Warm Cream surface (`#FAF8F3`), 1px border (`#E7E2D8`), 16px border radius, quote mark watermark icon, 5-star Sandalwood Gold rating display.

### Forms & Interactive Controls
* **Text Inputs / Selects**: White surface, 1px border (`#E7E2D8`), 8px border radius, 14px 16px padding. Active Focus: 2px Forest Jade border (`#0D3B36`) + 3px soft focus ring.
* **Interactive Date/Time Slots**: Pill-shaped time slots (`rounded-full`), white background with 1px border. Selected State: Solid Forest Jade fill + white text.

---

## 9. Border Radius & Shadow System

* **Small Radius (`rounded-sm` / 4px)**: Input badges, tooltips, tags.
* **Medium Radius (`rounded-md` / 8px)**: Buttons, form text fields, dropdown menus.
* **Large Radius (`rounded-lg` / 12px)**: Cards, image frames, section containers.
* **Pill Radius (`rounded-full` / 9999px)**: Status indicators, time slot pills, floating CTA badges.
* **Shadow Soft (`shadow-sm`)**: `0 2px 4px rgba(28, 25, 23, 0.04)` — Resting cards.
* **Shadow Elevated (`shadow-md`)**: `0 8px 16px rgba(28, 25, 23, 0.08)` — Hovered cards & dropdown menus.
* **Shadow Modal (`shadow-xl`)**: `0 20px 40px rgba(13, 59, 54, 0.15)` — Interactive booking modal.

---

## 10. Interaction Design Language

* **Timing Categories**:
  * Micro-interactions (hover, active focus): `150ms ease-out`
  * Container transitions (accordion open, tab switch): `250ms cubic-bezier(0.4, 0, 0.2, 1)`
  * Modal & Drawer open: `300ms cubic-bezier(0.16, 1, 0.3, 1)`
* **Accessibility Reduced Motion**:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```

---

## 11. Imagery Art Direction

```text
Imagery Categories & Composition Guidelines
┌───────────────────────────┬──────────────────────────────────────────────┐
│ Category                  │ Art Direction Criteria                       │
├───────────────────────────┼──────────────────────────────────────────────┤
│ 1. Clinic Interior        │ Natural daylight, clean lines, warm wood     │
│ 2. Practitioner Portraits │ Warm authentic smiles, professional attire    │
│ 3. Patient Interaction    │ Relaxed, non-clinical posture, genuine care  │
│ 4. Treatment Technology   │ Precision details, sleek modern scanner tools│
│ 5. Macro Detail           │ Soft-focus ceramic crowns, clean aligners    │
└───────────────────────────┴──────────────────────────────────────────────┘
```

---

## 12. Design Tokens Specification

```text
Design Token Schema
├── color
│   ├── background (primary, secondary)
│   ├── surface (card, elevated)
│   ├── text (primary, secondary, muted)
│   ├── accent (primary, hover, secondary)
│   └── border (subtle, divider)
├── typography
│   ├── family (display, body)
│   ├── size (display, h1, h2, h3, h4, body, small, label)
│   └── weight (regular, medium, semibold, bold)
├── spacing (xs:4px, sm:8px, md:16px, lg:24px, xl:32px, 2xl:48px, 3xl:64px, 4xl:96px)
└── radius (sm:4px, md:8px, lg:12px, full:9999px)
```

---

## 13. Accessibility Design System Rules

1. **Color Independence**: Never rely solely on color to indicate state (e.g., error fields must display an icon and explicit error text in addition to red border).
2. **High-Contrast Focus**: Every interactive control must display a visible 3px focus ring on keyboard navigation (`tab`).
3. **Target Sizes**: All mobile touch targets must meet or exceed 48x48px.
4. **Readable Scaling**: All font sizes must use relative units (`rem`) to support browser font zooming up to 200%.

---

## 14. Homepage Art Direction Concept

1. **Hero Section**: Warm alabaster backdrop, editorial *Cormorant Garamond* display title, large rounded image frame featuring Dr. Rostova welcoming a patient, prominent Forest Jade `Book Appointment` CTA.
2. **Trust Bar**: 4-column clean metric grid separated by 1px fine-line vertical dividers (`#E7E2D8`).
3. **Services Grid**: 4 distinct cards with subtle hover elevation and custom line-art iconography.
4. **Dentist Spotlight**: Split layout (Left: Doctor portrait with subtle gold border accent; Right: Credentials & care philosophy text).
5. **Comfort Feature**: Warm Linen background section (`#F4F0E8`) with icon cards for noise-canceling headphones, warm towels, and gentle care options.
6. **Final CTA Banner**: Solid Forest Jade container (`#0D3B36`) with white editorial typography and instant booking action button.

---

## 15. Design Anti-Patterns

> [!CAUTION]
> The implementation phase MUST NOT introduce any of the following anti-patterns:

1. ❌ **No Generic Stock Photo Heroes**: Do not use cliché images of models pointing at fake oversized teeth.
2. ❌ **No Medical Cyan / Corporate Blue Overuse**: Avoid traditional harsh medical blue (`#00FFFF` or `#0066CC`).
3. ❌ **No Overloaded Gradients**: Avoid heavy multi-color CSS gradients across card backgrounds.
4. ❌ **No Glassmorphism Abuse**: Avoid blurry backdrop filters that compromise contrast and performance.
5. ❌ **No Tiny Body Text**: Body text must never drop below 16px on desktop or 14px on mobile.
6. ❌ **No Low-Contrast Gray Text**: Secondary text must strictly pass WCAG AA contrast (≥ 4.5:1).
7. ❌ **No Excessive Rounded "SaaS UI" Cards**: Avoid exaggerated 32px pill-shaped card containers.
8. ❌ **No Intimidating Clinical Imagery**: Avoid close-up shots of needles, blood, or invasive surgical tools.
9. ❌ **No Distracting Auto-play Video/Carousels**: Avoid aggressive auto-advancing banners.
10. ❌ **No Hardcoded Pixel Spacing**: Never use random hardcoded spacing values outside the 8pt grid scale.

---

*This design system specification governs all visual styling, token definitions, and UI component construction in Phase 4+.*
