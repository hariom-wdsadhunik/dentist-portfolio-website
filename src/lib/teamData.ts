export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  experienceYears: string;
  bio: string;
  specialties: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dr-rostova",
    name: "Dr. Elena Rostova, BDS, MDS",
    role: "Founder & Lead Dentist",
    credentials: "BDS, MDS (Prosthodontics) | 15+ Years Clinical Practice",
    experienceYears: "15+ Years Experience",
    bio: "Dr. Rostova founded Aura Dental Studio in Bandra West, Mumbai to bridge the gap between high-end restorative dentistry and warm, anxiety-reducing patient care.",
    specialties: ["3D Digital Dentistry", "Cosmetic Aligners & Veneers", "Sedation & Comfort Care"],
  },
  {
    id: "dr-vance",
    name: "Dr. Marcus Vance, BDS",
    role: "Associate General Dentist",
    credentials: "BDS | Aesthetic Dentistry Certification",
    experienceYears: "9 Years Experience",
    bio: "Dr. Vance specializes in conservative restorative care and same-day digital crown restorations. He is passionate about explaining procedures step-by-step so patients feel fully empowered.",
    specialties: ["Same-Day CEREC Crowns", "Restorative Implants", "Gentle Endodontics"],
  },
  {
    id: "sarah-jenkins",
    name: "Pooja Sharma, RDH",
    role: "Lead Dental Hygienist",
    credentials: "BSc Dental Hygiene & Oral Health",
    experienceYears: "11 Years Experience",
    bio: "Pooja brings a gentle, meticulous touch to every preventative hygiene appointment. She specializes in ultrasonic hygiene care and personalized periodontal health education.",
    specialties: ["Ultrasonic Hygiene Care", "Periodontal Therapy", "Enamel Whitening"],
  },
];

export const CLINICAL_STANDARDS = [
  {
    id: "conservative-approach",
    title: "Conservative, Tooth-Preserving Dentistry",
    description: "We only recommend treatments that preserve maximum natural enamel, focusing on preventive health rather than aggressive overtreatment.",
  },
  {
    id: "3d-digital-precision",
    title: "100% Digital Workflow",
    description: "Say goodbye to messy impression putty. We use high-definition 3D intraoral scanners for instant digital modeling and precise diagnostics.",
  },
  {
    id: "upfront-transparency",
    title: "Zero Surprise Pricing Policy",
    description: "You will receive a complete, written co-care estimate with transparent fee breakdowns before any procedure begins.",
  },
  {
    id: "patient-autonomy",
    title: "Patient-Centered Co-Care Decisions",
    description: "We walk through high-resolution 3D scans side-by-side with you. You stay in 100% control of your treatment pace and options.",
  },
];
