export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  category: "Preventive" | "Cosmetic" | "Restorative" | "Emergency";
  categoryBadge: string;
  shortDescription: string;
  introduction: string;
  patientBenefit: string;
  featured: boolean;
  pricingGuidance: string;
  durationGuidance: string;
  route: string;
  relatedServices?: string[];
}

export const SERVICES_CATALOG: ServiceItem[] = [
  // 1. Preventive & Hygiene Wellness
  {
    id: "preventive-hygiene",
    slug: "preventive-hygiene",
    name: "Comprehensive Exams & Gentle Hygiene",
    category: "Preventive",
    categoryBadge: "Wellness & Oral Maintenance",
    shortDescription: "3D digital exams, ultrasonic precision cleaning, and personalized oral health wellness plans.",
    introduction: "Routine wellness hygiene designed to keep your natural smile healthy, bright, and free of disease.",
    patientBenefit: "Pain-free ultrasonic plaque removal and early detection of decay before it causes discomfort.",
    featured: true,
    pricingGuidance: "Covered by most PPO insurance plans | Self-pay intro exam: $149",
    durationGuidance: "60 minutes",
    route: "/services/preventive-hygiene",
    relatedServices: ["teeth-whitening", "same-day-crowns"],
  },

  // 2. Cosmetic & Smile Aesthetics
  {
    id: "clear-aligners",
    slug: "clear-aligners",
    name: "Discreet Clear Aligners",
    category: "Cosmetic",
    categoryBadge: "Orthodontics & Alignment",
    shortDescription: "Custom transparent aligners that gently straighten teeth without metal brackets or wires.",
    introduction: "Straighten your smile discreetly with custom 3D digital planning and virtually invisible aligner trays.",
    patientBenefit: "Removable aligners allow normal eating and brushing with zero lifestyle disruption.",
    featured: true,
    pricingGuidance: "Custom plans starting from $2,800 | Monthly financing from $99/mo",
    durationGuidance: "6 to 14 months",
    route: "/services/clear-aligners",
    relatedServices: ["teeth-whitening", "porcelain-veneers"],
  },
  {
    id: "teeth-whitening",
    slug: "teeth-whitening",
    name: "Professional Studio Whitening",
    category: "Cosmetic",
    categoryBadge: "Stain Removal & Brightening",
    shortDescription: "Same-day studio brightening combined with custom take-home maintenance trays.",
    introduction: "Lift deep coffee, wine, and age stains up to 8 shades lighter in a single comfortable session.",
    patientBenefit: "Enamel-safe whitening formulas paired with desensitizing treatments for zero zingers.",
    featured: false,
    pricingGuidance: "In-studio session: $399 | Take-home kit: $199",
    durationGuidance: "75 minutes",
    route: "/services/teeth-whitening",
    relatedServices: ["clear-aligners", "porcelain-veneers"],
  },
  {
    id: "porcelain-veneers",
    slug: "porcelain-veneers",
    name: "Handcrafted Porcelain Veneers",
    category: "Cosmetic",
    categoryBadge: "Smile Transformation",
    shortDescription: "Ultra-thin porcelain shells handcrafted to correct chips, gaps, and persistent discoloration.",
    introduction: "Achieve an editorial, natural-looking smile makeover tailored to your unique facial proportions.",
    patientBenefit: "Stain-resistant, durable porcelain crafted for a lifelike translucency and long-lasting confidence.",
    featured: true,
    pricingGuidance: "Consultation required | $1,200 – $1,800 per tooth",
    durationGuidance: "2 to 3 appointments",
    route: "/services/porcelain-veneers",
    relatedServices: ["clear-aligners", "same-day-crowns"],
  },

  // 3. Restorative Dentistry
  {
    id: "same-day-crowns",
    slug: "same-day-crowns",
    name: "Same-Day CEREC Digital Crowns",
    category: "Restorative",
    categoryBadge: "Precision Tooth Restoration",
    shortDescription: "Precision ceramic crowns designed, milled, and permanently placed in a single visit.",
    introduction: "Restore damaged or broken teeth in one 90-minute appointment without gooey impressions or temporary crowns.",
    patientBenefit: "No temporary crowns to fall out, no second visit, and 100% metal-free biocompatible ceramic.",
    featured: true,
    pricingGuidance: "Starting from $1,100 | Insurance PPO co-pays apply",
    durationGuidance: "90 minutes (single visit)",
    route: "/services/same-day-crowns",
    relatedServices: ["dental-implants", "preventive-hygiene"],
  },
  {
    id: "dental-implants",
    slug: "dental-implants",
    name: "3D Guided Dental Implants",
    category: "Restorative",
    categoryBadge: "Permanent Tooth Replacement",
    shortDescription: "Natural-looking titanium root replacements topped with custom ceramic crowns.",
    introduction: "Permanently replace missing teeth with 3D CBCT guided implant surgery for superior stability and chewing strength.",
    patientBenefit: "Restores 100% natural bite function and prevents jawbone loss with lifelike aesthetics.",
    featured: false,
    pricingGuidance: "Single tooth implant complete package from $2,900",
    durationGuidance: "Multi-stage treatment over 3-6 months",
    route: "/services/dental-implants",
    relatedServices: ["same-day-crowns", "porcelain-veneers"],
  },

  // 4. Emergency & Specialty Care
  {
    id: "emergency-care",
    slug: "emergency-care",
    name: "Same-Day Emergency Triage",
    category: "Emergency",
    categoryBadge: "Urgent Pain & Fracture Relief",
    shortDescription: "Immediate priority appointments for severe toothaches, broken teeth, or dental trauma.",
    introduction: "Fast, compassionate pain relief when you need it most. Reserved daily time slots for dental emergencies.",
    patientBenefit: "Immediate diagnosis, gentle localized pain control, and transparent same-day treatment options.",
    featured: true,
    pricingGuidance: "Emergency evaluation & X-ray: $99 | Urgent treatment billed transparently",
    durationGuidance: "Same-day priority booking",
    route: "/services/emergency-care",
    relatedServices: ["same-day-crowns", "preventive-hygiene"],
  },
];
