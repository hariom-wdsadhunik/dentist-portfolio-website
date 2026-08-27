export interface TestimonialItem {
  id: string;
  displayName: string;
  treatment: string;
  category: "General" | "Cosmetic" | "Restorative" | "Comfort Care";
  rating: number;
  quote: string;
  context: string;
  location: string;
  featured: boolean;
  demoLabel: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "story-1",
    displayName: "Rachel M.",
    treatment: "Discreet Clear Aligners",
    category: "Cosmetic",
    rating: 5,
    quote: "I was hesitant about adult teeth alignment, but Dr. Rostova showed me a 3D digital simulation of my smile before we even started. The entire process was seamless, transparent, and completely anxiety-free.",
    context: "Completed 10-month clear aligner therapy while managing a busy corporate schedule in Downtown Austin.",
    location: "Downtown Austin",
    featured: true,
    demoLabel: "Portfolio Demo Patient Story",
  },
  {
    id: "story-2",
    displayName: "Marcus T.",
    treatment: "Same-Day CEREC Crown",
    category: "Restorative",
    rating: 5,
    quote: "Cracking a tooth right before a major presentation was stressful. Aura Dental got me in same-day, and I walked out 90 minutes later with a permanent ceramic crown. No gooey impressions or temporary crowns!",
    context: "Emergency same-day ceramic restoration following a molar fracture.",
    location: "East Austin",
    featured: true,
    demoLabel: "Portfolio Demo Patient Story",
  },
  {
    id: "story-3",
    displayName: "Elena & David K.",
    treatment: "Preventive Hygiene & Comfort Care",
    category: "Comfort Care",
    rating: 5,
    quote: "Dental anxiety kept me away from the dentist for three years. From the noise-canceling Bose headphones to warm lavender towels, the team made me feel completely relaxed and respected.",
    context: "Family hygiene wellness patient utilizing noise-canceling headphones & warm towel amenities.",
    location: "South Congress, Austin",
    featured: false,
    demoLabel: "Portfolio Demo Patient Story",
  },
  {
    id: "story-4",
    displayName: "Julian S.",
    treatment: "Handcrafted Porcelain Veneers",
    category: "Cosmetic",
    rating: 5,
    quote: "The attention to detail is unmatched. Dr. Rostova designed temporary veneers so I could test-drive my new smile before placing the final ceramics. The result looks incredibly natural.",
    context: "Cosmetic smile makeover addressing worn enamel and minor asymmetry.",
    location: "Clarksville, Austin",
    featured: false,
    demoLabel: "Portfolio Demo Patient Story",
  },
  {
    id: "story-5",
    displayName: "Sarah P.",
    treatment: "Professional Studio Whitening",
    category: "Cosmetic",
    rating: 5,
    quote: "I’ve always had sensitive teeth, so I avoided professional whitening. Aura used a desensitizing formula that brightened my teeth 6 shades with zero zingers!",
    context: "In-studio whitening session paired with desensitizing enamel treatment.",
    location: "Rainey Street, Austin",
    featured: false,
    demoLabel: "Portfolio Demo Patient Story",
  },
  {
    id: "story-6",
    displayName: "Michael B.",
    treatment: "Same-Day Emergency Triage",
    category: "General",
    rating: 5,
    quote: "Woke up with an excruciating toothache on a Thursday. They answered the emergency line immediately, saw me by 10 AM, and relieved the pain in under 45 minutes with total fee transparency.",
    context: "Same-day emergency triage for acute dental pain.",
    location: "Mueller, Austin",
    featured: false,
    demoLabel: "Portfolio Demo Patient Story",
  },
];
