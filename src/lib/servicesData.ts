export interface ServiceProcessStep {
  number: string;
  title: string;
  description: string;
  details?: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServicePracticalInfo {
  label: string;
  value: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  category: "Preventive" | "Cosmetic" | "Restorative" | "Emergency";
  categoryBadge: string;
  shortDescription: string;
  patientBenefit: string;
  heroIntro: string;
  patientProblem: string;
  overview: string;
  benefits: string[];
  processSteps?: ServiceProcessStep[];
  suitability: string[];
  practicalInfo: ServicePracticalInfo[];
  faqs?: ServiceFaq[];
  featured: boolean;
  pricingGuidance: string;
  durationGuidance: string;
  route: string;
  relatedServices: string[];
  metaTitle: string;
  metaDescription: string;
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
    patientBenefit: "Pain-free ultrasonic plaque removal and early detection of decay before it causes discomfort.",
    heroIntro: "Maintain a healthy, vibrant smile with gentle ultrasonic hygiene care and non-invasive 3D digital oral health evaluations.",
    patientProblem: "Plaque build-up, gum inflammation, and hidden enamel decay often develop without early symptoms.",
    overview: "Our preventive wellness appointments combine advanced 3D digital imaging with gentle ultrasonic hygiene technology. We thoroughly evaluate your teeth, gums, and bite function while keeping you completely relaxed in our soothing studio environment.",
    benefits: [
      "Gentle ultrasonic technology removes hardened plaque with minimal sensitivity",
      "Low-radiation 3D intraoral digital imaging eliminates uncomfortable traditional X-ray film",
      "Early detection of micro-cavities before they require invasive restorative work",
      "Personalized at-home hygiene recommendations tailored to your unique enamel profile",
    ],
    processSteps: [
      {
        number: "01",
        title: "3D Digital Scan & Visual Exam",
        description: "We capture a complete 3D digital map of your mouth, reviewing images side-by-side with you on a chairside screen.",
      },
      {
        number: "02",
        title: "Gentle Ultrasonic Hygiene",
        description: "Our licensed hygienist uses fine ultrasonic water vibrations to gently remove plaque build-up without scraping.",
      },
      {
        number: "03",
        title: "Co-Care Preventive Plan",
        description: "Dr. Rostova discusses your oral health findings and provides clear, upfront recommendations for ongoing wellness.",
      },
    ],
    suitability: [
      "Adults seeking routine 6-month oral health examinations and hygiene cleanings",
      "Patients experiencing mild gum sensitivity or bleeding during brushing",
      "Individuals looking for an anxiety-free, gentle dental hygiene environment",
    ],
    practicalInfo: [
      { label: "Appointment Duration", value: "60 minutes" },
      { label: "Anesthesia / Numbing", value: "None required for routine hygiene" },
      { label: "Recommended Frequency", value: "Every 6 months" },
      { label: "Insurance & Pricing", value: "Covered by most PPO plans | Self-pay intro: $149" },
    ],
    faqs: [
      {
        question: "How often should I schedule a dental wellness hygiene exam?",
        answer: "We recommend a comprehensive hygiene exam and professional cleaning every 6 months to prevent plaque calcification and catch early signs of enamel demineralization.",
      },
      {
        question: "Will ultrasonic cleaning hurt if I have sensitive teeth?",
        answer: "Our ultrasonic instruments use warm water micro-vibrations and adjustable power settings, making the experience far gentler and more comfortable than traditional hand scaling.",
      },
    ],
    featured: true,
    pricingGuidance: "Covered by most PPO insurance plans | Self-pay intro exam: $149",
    durationGuidance: "60 minutes",
    route: "/services/preventive-hygiene",
    relatedServices: ["teeth-whitening", "same-day-crowns"],
    metaTitle: "Comprehensive Dental Exams & Gentle Hygiene | Aura Dental Studio Austin",
    metaDescription: "Experience gentle ultrasonic cleaning and 3D digital dental exams in Downtown Austin. Covered by major PPO insurance. Book your visit online.",
  },

  // 2. Cosmetic: Clear Aligners
  {
    id: "clear-aligners",
    slug: "clear-aligners",
    name: "Discreet Clear Aligners",
    category: "Cosmetic",
    categoryBadge: "Orthodontics & Alignment",
    shortDescription: "Custom transparent aligners that gently straighten teeth without metal brackets or wires.",
    patientBenefit: "Removable aligners allow normal eating and brushing with zero lifestyle disruption.",
    heroIntro: "Achieve a straight, harmonious smile discreetly using custom 3D digital planning and clear removable aligner trays.",
    patientProblem: "Crowded, gapped, or misaligned teeth can affect confidence and make effective flossing difficult.",
    overview: "Clear aligner therapy offers an invisible, comfortable alternative to traditional metal braces. Using precision 3D intraoral scans, Dr. Rostova maps out your entire tooth movement timeline before treatment even begins.",
    benefits: [
      "Virtually invisible transparent trays that fit seamlessly into professional and social lifestyles",
      "Removable aligners allow you to eat all your favorite foods and brush without restrictions",
      "Smooth medical-grade polymer material eliminates sharp metal brackets and mouth sores",
      "Preview your final simulated 3D smile outcome before starting treatment",
    ],
    processSteps: [
      {
        number: "01",
        title: "3D Digital Smile Simulation",
        description: "We scan your teeth in under 60 seconds and generate a step-by-step 3D digital simulation of your target alignment.",
      },
      {
        number: "02",
        title: "Custom Aligner Fabrication",
        description: "Your custom series of clear trays is precision-crafted to apply gentle, targeted pressure to specific teeth.",
      },
      {
        number: "03",
        title: "Progress Checks & Refinement",
        description: "You switch to a new tray set every 1-2 weeks, visiting our studio briefly every 6-8 weeks to monitor progress.",
      },
    ],
    suitability: [
      "Adults and teens looking to correct mild to moderate crowding, spacing, or relapse",
      "Patients seeking an aesthetic, removable alternative to traditional metal braces",
      "Individuals committed to wearing aligners 20-22 hours per day",
    ],
    practicalInfo: [
      { label: "Treatment Length", value: "Typically 6 to 14 months" },
      { label: "Check-in Frequency", value: "Brief office check-in every 6–8 weeks" },
      { label: "Daily Wear Time", value: "20 to 22 hours per day" },
      { label: "Financial Guidance", value: "Plans starting from $2,800 | Monthly financing from $99/mo" },
    ],
    faqs: [
      {
        question: "How visible are clear aligners when wearing them?",
        answer: "Clear aligners are made from ultra-thin, transparent medical-grade polymer designed to fit snugly over your teeth, making them virtually unnoticeable in daily conversations.",
      },
      {
        question: "Does clear aligner treatment hurt?",
        answer: "You may feel mild pressure for 24-48 hours after switching to a new tray set, which is a normal indicator that your teeth are gently moving into position.",
      },
    ],
    featured: true,
    pricingGuidance: "Custom plans starting from $2,800 | Monthly financing from $99/mo",
    durationGuidance: "6 to 14 months",
    route: "/services/clear-aligners",
    relatedServices: ["teeth-whitening", "porcelain-veneers"],
    metaTitle: "Discreet Clear Aligners in Austin | Aura Dental Studio",
    metaDescription: "Straighten your teeth discreetly with 3D digital clear aligners in Downtown Austin. Virtual smile previews & flexible monthly financing available.",
  },

  // 3. Cosmetic: Teeth Whitening
  {
    id: "teeth-whitening",
    slug: "teeth-whitening",
    name: "Professional Studio Whitening",
    category: "Cosmetic",
    categoryBadge: "Stain Removal & Brightening",
    shortDescription: "Same-day studio brightening combined with custom take-home maintenance trays.",
    patientBenefit: "Enamel-safe whitening formulas paired with desensitizing treatments for zero zingers.",
    heroIntro: "Lift stubborn stains from coffee, tea, wine, and aging up to 8 shades lighter in a single comfortable session.",
    patientProblem: "Deep enamel staining and yellowing often resist drugstore whitening strips and toothpaste.",
    overview: "Our studio whitening system pairs powerful professional-grade brightening gel with desensitizing agents and LED activation. In just over an hour, you achieve a noticeably brighter smile without enamel damage or sharp zingers.",
    benefits: [
      "Noticeably brighter smile achieved in a single 75-minute studio visit",
      "Formulated with integrated desensitizers for a comfortable, low-sensitivity experience",
      "Includes custom-molded take-home maintenance trays for long-lasting touch-ups",
      "Enamel-safe professional formula administered under clinical supervision",
    ],
    processSteps: [
      {
        number: "01",
        title: "Gingival Barrier Protection",
        description: "We carefully apply a protective barrier over your gums and soft tissue to prevent irritation.",
      },
      {
        number: "02",
        title: "LED Activated Whitening",
        description: "Professional brightening gel is applied to enamel and activated with cool LED light in 15-minute cycles.",
      },
      {
        number: "03",
        title: "Desensitizing & Take-Home Kit",
        description: "We finish with a mineralizing fluoridating treatment and provide custom maintenance trays for home touch-ups.",
      },
    ],
    suitability: [
      "Patients looking to brighten yellowed or discolored teeth before major events",
      "Individuals who experienced tooth sensitivity with over-the-counter whitening products",
      "Adults seeking safe, clinically supervised smile brightening",
    ],
    practicalInfo: [
      { label: "Appointment Duration", value: "75 minutes" },
      { label: "Results Duration", value: "12 to 24 months with touch-up maintenance" },
      { label: "Sensitivity Level", value: "Minimal to zero with our formula" },
      { label: "Pricing Guidance", value: "In-studio session: $399 | Take-home maintenance kit: $199" },
    ],
    faqs: [
      {
        question: "Will professional whitening damage my tooth enamel?",
        answer: "No. Our studio whitening gel uses pH-balanced formulas that penetrate enamel pores to dissolve organic stains without weakening or altering tooth structure.",
      },
    ],
    featured: false,
    pricingGuidance: "In-studio session: $399 | Take-home kit: $199",
    durationGuidance: "75 minutes",
    route: "/services/teeth-whitening",
    relatedServices: ["clear-aligners", "porcelain-veneers"],
    metaTitle: "Professional Studio Teeth Whitening Austin | Aura Dental Studio",
    metaDescription: "Lift deep enamel stains up to 8 shades lighter in 75 minutes. Low-sensitivity professional teeth whitening in Downtown Austin.",
  },

  // 4. Cosmetic: Porcelain Veneers
  {
    id: "porcelain-veneers",
    slug: "porcelain-veneers",
    name: "Handcrafted Porcelain Veneers",
    category: "Cosmetic",
    categoryBadge: "Smile Transformation",
    shortDescription: "Ultra-thin porcelain shells handcrafted to correct chips, gaps, and persistent discoloration.",
    patientBenefit: "Stain-resistant, durable porcelain crafted for a lifelike translucency and long-lasting confidence.",
    heroIntro: "Transform chipped, discolored, or uneven teeth with custom porcelain veneers crafted for a natural, editorial finish.",
    patientProblem: "Persistent discoloration, chipped enamel, worn edges, or irregular tooth shapes detract from smile confidence.",
    overview: "Porcelain veneers are thin, custom-crafted ceramic shells bonded permanently to the front surface of your teeth. Dr. Rostova designs every veneer case to match your facial symmetry, skin tone, and personal aesthetic goals for a natural result.",
    benefits: [
      "Permanently stain-resistant porcelain reflects light naturally like real tooth enamel",
      "Custom-shaped to correct asymmetry, worn edges, chips, and stubborn discoloration",
      "Conservative enamel preparation preserves the majority of your natural tooth structure",
      "Durable ceramic restorations engineered to last 15+ years with proper care",
    ],
    processSteps: [
      {
        number: "01",
        title: "Aesthetic Design & Digital Preview",
        description: "We discuss your ideal smile goals and design a 3D digital preview of your proposed veneer shapes.",
      },
      {
        number: "02",
        title: "Conservative Prep & Temporaries",
        description: "Teeth are gently prepared and detailed temporary veneers are placed so you can test-drive your new smile.",
      },
      {
        number: "03",
        title: "Final Ceramic Bonding",
        description: "Your handcrafted porcelain veneers are permanently bonded and meticulously polished to perfection.",
      },
    ],
    suitability: [
      "Adults seeking a comprehensive aesthetic transformation for chipped or uneven teeth",
      "Patients with severe intrinsic stains that do not respond to traditional whitening",
      "Individuals looking for long-lasting, stain-resistant cosmetic restoration",
    ],
    practicalInfo: [
      { label: "Appointments Required", value: "2 to 3 visits" },
      { label: "Expected Longevity", value: "15+ years with proper oral hygiene" },
      { label: "Material Used", value: "High-translucency feldspathic ceramic or E-Max porcelain" },
      { label: "Pricing Guidance", value: "Consultation required | $1,200 – $1,800 per tooth" },
    ],
    faqs: [
      {
        question: "Are porcelain veneers permanent?",
        answer: "Because a micro-thin layer of enamel is prepared to ensure a seamless bond, veneers are considered a permanent cosmetic commitment that will periodically need maintenance over your lifetime.",
      },
    ],
    featured: true,
    pricingGuidance: "Consultation required | $1,200 – $1,800 per tooth",
    durationGuidance: "2 to 3 appointments",
    route: "/services/porcelain-veneers",
    relatedServices: ["clear-aligners", "same-day-crowns"],
    metaTitle: "Handcrafted Porcelain Veneers Austin | Aura Dental Studio",
    metaDescription: "Transform your smile with natural-looking porcelain veneers in Downtown Austin. Customized 3D smile design & conservative enamel preservation.",
  },

  // 5. Restorative: Same-Day Crowns
  {
    id: "same-day-crowns",
    slug: "same-day-crowns",
    name: "Same-Day CEREC Digital Crowns",
    category: "Restorative",
    categoryBadge: "Precision Tooth Restoration",
    shortDescription: "Precision ceramic crowns designed, milled, and permanently placed in a single visit.",
    patientBenefit: "No temporary crowns to fall out, no second visit, and 100% metal-free biocompatible ceramic.",
    heroIntro: "Restore cracked, decayed, or weakened teeth with 100% biocompatible ceramic crowns crafted and placed in a single 90-minute appointment.",
    patientProblem: "Cracked or deeply decayed teeth require strong protective crowns, but traditional methods require multiple weeks and temporary crowns.",
    overview: "Using our in-house CEREC CAD/CAM technology, we scan your prepared tooth, custom-design your crown in 3D, and mill it from a solid block of high-strength ceramic right in our studio. You walk out with a permanent, natural-looking tooth restoration the very same day.",
    benefits: [
      "Complete treatment in a single 90-minute visit—no second appointment required",
      "No messy impression putty or uncomfortable temporary crowns that can fall out",
      "100% metal-free biocompatible ceramic color-matched perfectly to your natural enamel",
      "Precision 3D digital margin fit ensures maximum long-term durability and gum health",
    ],
    processSteps: [
      {
        number: "01",
        title: "3D Digital Scan & Design",
        description: "We prepare the tooth gently and capture a 3D digital optical scan in seconds—no impression putty.",
      },
      {
        number: "02",
        title: "Studio Ceramic Milling",
        description: "Our in-house 3D milling unit carves your custom crown from a solid ceramic block in about 15 minutes.",
      },
      {
        number: "03",
        title: "Permanent Placement",
        description: "Dr. Rostova custom-stains, glazes, and permanently bonds the crown to your tooth in the same visit.",
      },
    ],
    suitability: [
      "Patients with fractured, cracked, or severely decayed teeth needing full coverage",
      "Busy professionals seeking to replace old metal crowns without multiple office visits",
      "Individuals wanting a metal-free, natural ceramic restoration",
    ],
    practicalInfo: [
      { label: "Appointment Duration", value: "90 minutes (Single Visit)" },
      { label: "Material Composition", value: "100% Biocompatible Ceramic / E-Max" },
      { label: "Temporary Crown Needed", value: "No temporary crown required" },
      { label: "Financial Guidance", value: "Starting from $1,100 | Insurance PPO co-pays apply" },
    ],
    faqs: [
      {
        question: "Are same-day crowns as durable as traditional laboratory crowns?",
        answer: "Yes. Same-day CEREC crowns are precision-milled from solid high-density ceramic blocks under high heat and pressure, offering equal or superior strength compared to lab-fabricated crowns.",
      },
    ],
    featured: true,
    pricingGuidance: "Starting from $1,100 | Insurance PPO co-pays apply",
    durationGuidance: "90 minutes (single visit)",
    route: "/services/same-day-crowns",
    relatedServices: ["dental-implants", "preventive-hygiene"],
    metaTitle: "Same-Day CEREC Digital Crowns Austin | Aura Dental Studio",
    metaDescription: "Restore damaged teeth in a single 90-minute appointment. No temporary crowns or messy impressions. Same-day CEREC ceramic crowns in Austin.",
  },

  // 6. Restorative: Dental Implants
  {
    id: "dental-implants",
    slug: "dental-implants",
    name: "3D Guided Dental Implants",
    category: "Restorative",
    categoryBadge: "Permanent Tooth Replacement",
    shortDescription: "Natural-looking titanium root replacements topped with custom ceramic crowns.",
    patientBenefit: "Restores 100% natural bite function and prevents jawbone loss with lifelike aesthetics.",
    heroIntro: "Permanently replace missing teeth with 3D CBCT guided implant restorations that look, feel, and function like real natural teeth.",
    patientProblem: "Missing teeth make chewing difficult, cause neighboring teeth to shift, and lead to progressive jawbone loss over time.",
    overview: "Dental implants are the gold standard for tooth replacement. A bio-compatible titanium post acts as an artificial root, anchored into the jawbone and topped with a custom handcrafted ceramic crown. Our 3D CBCT guided planning ensures millimeter surgical accuracy and optimal aesthetic outcomes.",
    benefits: [
      "Restores 100% natural chewing strength and speech clarity without slipping",
      "Stimulates jawbone density to prevent bone loss and facial collapse",
      "Does not require altering adjacent healthy teeth unlike traditional dental bridges",
      "Permanent solution designed to last a lifetime with normal brushing and flossing",
    ],
    processSteps: [
      {
        number: "01",
        title: "3D CBCT Surgical Scan",
        description: "We capture a 3D volumetric scan of your jaw structure to map nerve pathways and precise bone density.",
      },
      {
        number: "02",
        title: "Guided Implant Placement",
        description: "The biocompatible titanium post is precisely positioned using a 3D computer-generated surgical guide.",
      },
      {
        number: "03",
        title: "Ceramic Crown Restoration",
        description: "After healing, a custom-shaded ceramic crown is secured on top to complete your seamless permanent smile.",
      },
    ],
    suitability: [
      "Adults missing one or more teeth due to trauma, decay, or failed root canals",
      "Patients with adequate jawbone density seeking a permanent non-removable solution",
      "Individuals wanting to replace loose dentures with stable implant support",
    ],
    practicalInfo: [
      { label: "Treatment Timeline", value: "3 to 6 months total (healing phase included)" },
      { label: "Surgical Precision", value: "3D CBCT Computer-Guided Surgery" },
      { label: "Success Rate", value: "Nationwide clinical success rates exceed 95%" },
      { label: "Pricing Guidance", value: "Single tooth implant package starting from $2,900" },
    ],
    faqs: [
      {
        question: "Is dental implant surgery painful?",
        answer: "Implant placement is performed under gentle local anesthesia and is typically reported as comfortable. Most patients manage mild post-procedure soreness with standard over-the-counter pain relief.",
      },
    ],
    featured: false,
    pricingGuidance: "Single tooth implant complete package from $2,900",
    durationGuidance: "Multi-stage treatment over 3-6 months",
    route: "/services/dental-implants",
    relatedServices: ["same-day-crowns", "porcelain-veneers"],
    metaTitle: "3D Guided Dental Implants Austin | Aura Dental Studio",
    metaDescription: "Permanently replace missing teeth with 3D CBCT guided dental implants in Downtown Austin. Restore 100% natural bite strength & aesthetics.",
  },

  // 7. Emergency: Emergency Care
  {
    id: "emergency-care",
    slug: "emergency-care",
    name: "Same-Day Emergency Triage",
    category: "Emergency",
    categoryBadge: "Urgent Pain & Fracture Relief",
    shortDescription: "Immediate priority appointments for severe toothaches, broken teeth, or dental trauma.",
    patientBenefit: "Immediate diagnosis, gentle localized pain control, and transparent same-day treatment options.",
    heroIntro: "Fast, compassionate pain relief when you need it most. We reserve priority same-day time slots for urgent dental emergencies.",
    patientProblem: "Severe tooth pain, cracked teeth, lost crowns, or dental trauma require immediate clinical attention to stop pain and prevent permanent loss.",
    overview: "A dental emergency can be stressful and disruptive. Our studio prioritizes same-day emergency appointments for established and new patients. We focus on diagnosing the source of pain immediately, providing gentle localized relief, and stabilizing your tooth.",
    benefits: [
      "Priority same-day appointment slots reserved daily for urgent cases",
      "Immediate localized pain control and gentle diagnostic evaluation",
      "Transparent written treatment options provided before any emergency procedure begins",
      "Direct 24/7 phone triage line to speak with a clinical team member",
    ],
    processSteps: [
      {
        number: "01",
        title: "Immediate Phone Triage",
        description: "Call (512) 555-0199 for immediate guidance and to reserve your priority same-day emergency slot.",
      },
      {
        number: "02",
        title: "Focused Digital Diagnosis",
        description: "We take a low-radiation targeted 3D digital image to pinpoint the source of pain or fracture instantly.",
      },
      {
        number: "03",
        title: "Pain Relief & Stabilization",
        description: "Dr. Rostova administers gentle localized numbing and stabilizes your tooth to restore immediate comfort.",
      },
    ],
    suitability: [
      "Patients experiencing severe, throbbing toothaches or sudden temperature sensitivity",
      "Individuals with cracked, chipped, knocked-out, or fractured teeth from trauma",
      "Patients with loose crowns, broken fillings, or acute gum swelling",
    ],
    practicalInfo: [
      { label: "Emergency Availability", value: "Same-Day Priority Booking (Mon-Fri)" },
      { label: "Emergency Line", value: "(512) 555-0199 for 24/7 Phone Triage" },
      { label: "Evaluation Fee", value: "Emergency diagnosis & X-ray: $99" },
      { label: "PPO Insurance", value: "Emergency care covered under standard PPO benefits" },
    ],
    faqs: [
      {
        question: "What should I do if a tooth gets completely knocked out?",
        answer: "Handle the tooth only by the crown (top), do not scrub the root, place it in a small container of cold milk or saline, and call our emergency line immediately for best re-implantation results within 60 minutes.",
      },
    ],
    featured: true,
    pricingGuidance: "Emergency evaluation & X-ray: $99 | Urgent treatment billed transparently",
    durationGuidance: "Same-day priority booking",
    route: "/services/emergency-care",
    relatedServices: ["same-day-crowns", "preventive-hygiene"],
    metaTitle: "Same-Day Emergency Dentist Austin | Aura Dental Studio",
    metaDescription: "Immediate relief for severe toothaches, broken teeth & dental trauma in Downtown Austin. Same-day emergency appointments & 24/7 triage.",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_CATALOG.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES_CATALOG.map((s) => s.slug);
}
