export interface ServiceItem {
  id: string;
  category: "Preventive" | "Cosmetic" | "Restorative" | "Specialty";
  title: string;
  description: string;
  benefit: string;
  feeNotice: string;
  badge?: string;
  href: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  iconName: "headphones" | "ultrasonic" | "towels" | "blanket";
}

export interface VisitStepItem {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  treatment: string;
  rating: number;
}

export const TRUST_METRICS: MetricItem[] = [
  {
    id: "rating",
    value: "4.9 ★",
    label: "Demo Rating Summary",
    description: "Reflecting high patient satisfaction in gentle oral care",
  },
  {
    id: "experience",
    value: "15+ Yrs",
    label: "Clinical Leadership",
    description: "Led by Dr. Elena Rostova, DDS, FAGD",
  },
  {
    id: "technology",
    value: "3D Scanning",
    label: "Same-Day Restorations",
    description: "Single-visit digital crowns without messy trays",
  },
  {
    id: "pricing",
    value: "$0 Hidden Fees",
    label: "Upfront Transparency",
    description: "Clear fee estimates provided before care begins",
  },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "preventive-hygiene",
    category: "Preventive",
    title: "Preventive Wellness & Hygiene",
    description: "Comprehensive oral exams, gentle ultrasonic plaque removal, and digital X-ray diagnostics.",
    benefit: "Keeps your breath fresh, protects gum foundations, and prevents tooth decay early.",
    feeNotice: "From $149 • Covered by most PPO plans",
    badge: "Essential Care",
    href: "/services/preventive-hygiene",
  },
  {
    id: "clear-aligners",
    category: "Cosmetic",
    title: "Clear Aligner Orthodontics",
    description: "Custom, virtually invisible removable aligners that straighten teeth discreetly.",
    benefit: "Achieve a straighter, balanced smile without the discomfort of metal braces.",
    feeNotice: "Flexible monthly payment options",
    badge: "Popular Cosmetic",
    href: "/services/clear-aligners",
  },
  {
    id: "same-day-crowns",
    category: "Restorative",
    title: "Same-Day Ceramic Crowns",
    description: "Single-visit digital intraoral scanning and precision in-house ceramic milling.",
    benefit: "Restores broken or decayed teeth in 90 minutes with zero temporary crowns.",
    feeNotice: "Upfront estimate after 3D scan",
    badge: "1-Visit Tech",
    href: "/services/same-day-crowns",
  },
  {
    id: "emergency-care",
    category: "Specialty",
    title: "Urgent & Emergency Dental Triage",
    description: "Priority same-day evaluation for acute toothaches, chipped teeth, or dental trauma.",
    benefit: "Immediate pain relief and rapid stabilization when unexpected emergencies happen.",
    feeNotice: "Same-day priority scheduling",
    badge: "Priority Triage",
    href: "/services/emergency-care",
  },
];

export const COMFORT_AMENITIES: AmenityItem[] = [
  {
    id: "bose-headphones",
    title: "Bose Noise-Canceling Headphones",
    description: "Enjoy your favorite music, audiobooks, or relaxing audio tracks during your visit.",
    iconName: "headphones",
  },
  {
    id: "ultrasonic-care",
    title: "Gentle Ultrasonic Hygiene",
    description: "Advanced low-vibration cleaning tools that eliminate harsh scraping sounds and discomfort.",
    iconName: "ultrasonic",
  },
  {
    id: "warm-towels",
    title: "Warm Towels & Aromatherapy",
    description: "Unwind post-treatment with soothing warm face towels and gentle lavender scenting.",
    iconName: "towels",
  },
  {
    id: "heated-chairs",
    title: "Memory Foam Ergonomic Chairs",
    description: "Contoured treatment chairs with gentle lumbar support and plush neck pillows.",
    iconName: "blanket",
  },
];

export const FIRST_VISIT_STEPS: VisitStepItem[] = [
  {
    number: "01",
    title: "Warm Concierge Welcome",
    description: "Arrive at our Downtown Congress Ave studio. Enjoy a beverage and relax in a quiet, non-clinical lounge.",
    details: "No rushed paperwork—complete digital check-in on your phone prior to arrival.",
  },
  {
    number: "02",
    title: "Gentle 3D Digital Scanning",
    description: "Experience painless, ultra-fast 3D digital impressions without cold or messy impression putty.",
    details: "High-definition digital X-rays display your teeth side-by-side on an interactive screen.",
  },
  {
    number: "03",
    title: "Transparent Co-Care Planning",
    description: "Review your scan results directly with Dr. Rostova. Receive a clear, zero-pressure cost estimate.",
    details: "You decide your care timeline with complete financial transparency before anything begins.",
  },
];

export const DEMO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote: "Dr. Rostova and her team completely changed how I feel about dental visits. The studio feels like a calm spa, and my same-day ceramic crown was completed seamlessly in under 90 minutes!",
    author: "Marcus T.",
    location: "Downtown Austin",
    treatment: "Same-Day Ceramic Crown",
    rating: 5,
  },
  {
    id: "2",
    quote: "As someone who avoided the dentist for years due to severe anxiety, finding Aura Dental Studio was a revelation. Noise-canceling headphones, gentle ultrasound cleaning, and absolute kindness.",
    author: "Sarah L.",
    location: "East Austin",
    treatment: "Preventive Hygiene & Exam",
    rating: 5,
  },
  {
    id: "3",
    quote: "Clear aligners with Dr. Rostova were so easy. Upfront pricing with no surprise bills, convenient early morning appointments before work, and an incredible result.",
    author: "Julian K.",
    location: "South Congress, Austin",
    treatment: "Clear Aligner Orthodontics",
    rating: 5,
  },
];
