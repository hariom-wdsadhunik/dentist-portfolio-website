# Mumbai, India Localization Specification & Record: Aura Dental Studio

> **Document Status**: Production Localization Record  
> **Project Phase**: Phase — Mumbai India Localization  
> **Target Application**: Dentist Portfolio Website (`dentist-portfolio-website`)

---

## 1. Executive Summary & Context Transformation

Aura Dental Studio has been localized from its original fictional Austin, Texas concept to a fictional **Bandra West, Mumbai, Maharashtra, India** boutique dental studio concept. The transformation preserves 100% of the site's visual identity, component architecture, WCAG 2.2 AA accessibility, and performance metrics while adapting every public-facing detail for an Indian urban audience.

### Context Comparison Matrix

| Property | Original Concept | Localized Mumbai Concept |
| :--- | :--- | :--- |
| **Primary Location** | Downtown Austin, Texas, USA | Bandra West, Mumbai, Maharashtra, India |
| **Fictional Address** | 410 Congress Ave, Suite 200, Austin, TX 78701 | 204, Sea View House, Linking Road, Bandra West, Mumbai 400050 |
| **Phone Number** | `(512) 555-0199` | `+91 98765 43210` (`tel:+919876543210`) |
| **Operating Hours** | Mon-Fri: 7:00 AM - 6:00 PM | Mon-Sat: 9:00 AM - 7:00 PM | Sun: Closed |
| **Currency** | USD (`$`) | INR (`₹`) |
| **Hygiene & Exam Pricing** | Intro exam: `$149` | Intro exam & hygiene: `₹2,500` |
| **Clear Aligners Pricing** | `$2,800` | `₹1,20,000` |
| **Same-Day Crowns Pricing** | `$1,100` | `₹22,000` |
| **Teeth Whitening Pricing** | `$399` | `₹12,500` |
| **Veneers Pricing** | `$1,200 – $1,800` per tooth | `₹18,000 – ₹35,000` per tooth |
| **Dental Implants Pricing** | `$2,900` | `₹45,000` |
| **Emergency Triage Pricing** | `$99` | `₹1,500` |
| **Insurance & Payment** | US PPO networks (Delta, Cigna, MetLife) | Private insurance claim documentation, UPI (GPay/PhonePe), Cards, Net Banking |
| **Practitioner Credentials** | `DDS, UT Health Science Center \| FAGD` | `BDS, MDS (Prosthodontics)` |
| **Transit / Access** | Congress Center Garage parking | Complimentary valet parking at Sea View House, 5 mins from Bandra station, Uber/Ola drop-off |
| **Open Graph & SEO Locale** | `en_US` | `en_IN` |

---

## 2. Local Positioning & Audience Adaptation

- **Target Audience**: Urban professionals, executives, entrepreneurs, technology leaders, and families residing or working in Bandra West, Lower Parel, Juhu, Worli, and surrounding Mumbai districts.
- **Brand Tone**: Retains the original calm luxury, architectural minimalism, and patient-centered co-care focus, presenting high-end 3D digital precision in an anxiety-free sanctuary environment.

---

## 3. SEO & Structured Data Localization

- **Root Metadata**: Updated titles, descriptions, and keywords in `src/app/layout.tsx` for `Bandra West, Mumbai`.
- **JSON-LD Schema**:
  - `addressCountry`: `IN`
  - `addressRegion`: `Maharashtra`
  - `addressLocality`: `Mumbai`
  - `postalCode`: `400050`
  - `telephone`: `+91 98765 43210`

---

## 4. Visual Assets & Media Adaptation

- **SVG Text Labels**: Updated embedded text labels in `public/images/hero-operatory-visual.svg`, `public/images/dentist-portrait-visual.svg`, and `public/og-image.svg` to reference Bandra West, Mumbai and `BDS, MDS` credentials.
- **Location Map Visual**: Updated `LocationSection.tsx` static map graphic to represent the Bandra West Linking Road grid.

---

## 5. Demo Safety & Disclosures

- Maintained site-wide footer and interactive form disclosures stating:
  *"Aura Dental Studio is a sample portfolio demonstration project created for web engineering and UX showcase purposes. Concept & Digital Experience by Hari Om."*

---

*This document certifies the complete localization of the Aura Dental Studio repository for Mumbai, India.*
