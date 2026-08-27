# Frontend Foundation & Global Shell: Aura Dental Studio

> **Document Status**: Implemented Specification  
> **Project Phase**: Phase 5 — Frontend Foundation & Global Shell  
> **Target Application**: Dentist Portfolio Website (`dentist-portfolio-website`)

---

## 1. Typography Implementation

* **Display / Editorial Font**: `Cormorant Garamond` (loaded via `next/font/google`, mapped to CSS variable `--font-cormorant`, fallback `Georgia, serif`).
* **UI / Body Font**: `Plus Jakarta Sans` (loaded via `next/font/google`, mapped to CSS variable `--font-plus-jakarta`, fallback `system-ui, sans-serif`).
* **Performance**: Utilizes `display: "swap"` and pre-subsets `latin` to eliminate layout shift (CLS) and ensure zero unstyled text flash.

---

## 2. Design Token Architecture

The design tokens are defined in `src/app/globals.css` via CSS custom properties and Tailwind CSS v4 `@theme` bindings:

```css
:root {
  --color-background-primary: #FBF9F5;   /* Warm Alabaster */
  --color-background-secondary: #F4F0E8; /* Soft Linen */
  --color-surface-card: #FFFFFF;         /* Pristine White */
  --color-surface-elevated: #FAF8F3;     /* Warm Cream */
  --color-text-primary: #1C1917;         /* Deep Charcoal */
  --color-text-secondary: #44403C;       /* Warm Taupe */
  --color-text-[#78716C];                /* Muted Stone */
  --color-accent-primary: #0D3B36;       /* Forest Jade */
  --color-accent-hover: #082824;         /* Deep Jade */
  --color-accent-secondary: #D4A373;     /* Sandalwood Gold */
  --color-border-subtle: #E7E2D8;        /* Soft Linen Line */
  --color-focus-ring: #0D3B36;           /* 3px Focus Outline */
}
```

---

## 3. Spacing & Layout Primitives

* [`Container`](file:///d:/Dentist%20Web/dentist-portfolio-website/src/components/ui/Container.tsx) (`src/components/ui/Container.tsx`): Reusable layout box enforcing `max-w-7xl` (1280px container max-width) and responsive horizontal padding (`px-4 sm:px-6 lg:px-8`).
* [`Section`](file:///d:/Dentist%20Web/dentist-portfolio-website/src/components/ui/Section.tsx) (`src/components/ui/Section.tsx`): Reusable section wrapper enforcing 8pt grid vertical padding (`py-16 md:py-24`) and background canvas variants (`canvas`, `linen`, `white`, `forest`).
* [`Divider`](file:///d:/Dentist%20Web/dentist-portfolio-website/src/components/ui/Divider.tsx) (`src/components/ui/Divider.tsx`): Fine-line structural separator (`#E7E2D8`).

---

## 4. Accessibility Foundation (WCAG 2.2 AA)

* [`SkipToContent`](file:///d:/Dentist%20Web/dentist-portfolio-website/src/components/ui/SkipToContent.tsx) (`src/components/ui/SkipToContent.tsx`): Keyboard focusable skip link jumping directly to `#main-content`.
* **Focus Indicators**: 3px solid focus ring (`outline-3 outline-[#0D3B36] outline-offset-3`) on all interactive controls (`*:focus-visible`).
* **Focus Traps & ESC Key**: `MobileDrawer` traps focus and closes when `Escape` key is pressed.
* **Reduced Motion**: Disables smooth scrolling and CSS animations when `prefers-reduced-motion: reduce` is enabled.

---

## 5. Global Header & Mobile Drawer Architecture

* [`Header`](file:///d:/Dentist%20Web/dentist-portfolio-website/src/components/global/Header.tsx) (`src/components/global/Header.tsx`):
  * Sticky top position with backdrop blur (`backdrop-blur-md bg-[#FBF9F5]/90`).
  * Desktop top utility bar featuring office address, emergency triage line, and clinic hours.
  * Main header displaying brand wordmark `AURA DENTAL STUDIO`, desktop navigation, and `Book Online` CTA button.
* [`MobileDrawer`](file:///d:/Dentist%20Web/dentist-portfolio-website/src/components/global/MobileDrawer.tsx) (`src/components/global/MobileDrawer.tsx`):
  * Slide-over overlay with `aria-modal="true"`, dynamic pathname active link highlighting, and body scroll lock.

---

## 6. Global Footer & Mobile Action Bar

* [`Footer`](file:///d:/Dentist%20Web/dentist-portfolio-website/src/components/global/Footer.tsx) (`src/components/global/Footer.tsx`):
  * 4-column structured layout covering Clinic Identity, Quick Links, Treatment Catalog, Contact & Hours, and Fictional Demo Portfolio disclosures.
* [`MobileActionBar`](file:///d:/Dentist%20Web/dentist-portfolio-website/src/components/global/MobileActionBar.tsx) (`src/components/global/MobileActionBar.tsx`):
  * Fixed bottom action bar on mobile (`lg:hidden`) offering equal-width `Call Us` (`tel:`) and `Book Online` (`/book`) actions with 48px+ touch targets.

---

## 7. Component Primitives & Icon Strategy

* [`Button`](file:///d:/Dentist%20Web/dentist-portfolio-website/src/components/ui/Button.tsx) (`src/components/ui/Button.tsx`): Supports `primary`, `secondary`, `outline`, `ghost`, and `gold` variants, `sm`/`md`/`lg` sizes, internal `Link` or external `a` rendering.
* [`Icons`](file:///d:/Dentist%20Web/dentist-portfolio-website/src/components/ui/Icons.tsx) (`src/components/ui/Icons.tsx`): Modular inline SVG icons (`PhoneIcon`, `CalendarIcon`, `MapPinIcon`, `ClockIcon`, `MenuIcon`, `CloseIcon`, `ChevronRightIcon`, `StarIcon`) without bulky external icon packages.

---

*This document records the implemented frontend foundation for Phase 5.*
