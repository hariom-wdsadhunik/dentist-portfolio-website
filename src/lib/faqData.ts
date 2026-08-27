export interface FaqEntry {
  id: string;
  category: "Appointments" | "Financials & Insurance" | "Comfort & Safety" | "Treatments" | "Emergency";
  question: string;
  answer: string;
}

export const FAQ_ENTRIES: FaqEntry[] = [
  // Appointments
  {
    id: "faq-appt-1",
    category: "Appointments",
    question: "How do I schedule an appointment at Aura Dental Studio?",
    answer: "You can book directly online 24/7 through our self-service portal with instant calendar confirmation, or call our concierge desk at (512) 555-0199 during regular business hours.",
  },
  {
    id: "faq-appt-2",
    category: "Appointments",
    question: "What is your Zero-Wait Punctuality Guarantee?",
    answer: "We value your time. We structure our schedule so your appointment starts at your reserved time—no sitting in crowded waiting rooms for 45 minutes.",
  },

  // Financials & Insurance
  {
    id: "faq-fin-1",
    category: "Financials & Insurance",
    question: "Which dental PPO insurance plans do you accept?",
    answer: "We accept most major dental PPO insurance plans (including Delta Dental, MetLife, Cigna, Aetna, Guardian, and Humana) and file claims directly on your behalf to maximize your benefits.",
  },
  {
    id: "faq-fin-2",
    category: "Financials & Insurance",
    question: "How does your Zero Surprise Pricing Policy work?",
    answer: "Before any procedure begins, you receive an itemized, written co-care estimate detailing insurance coverage, co-pays, and out-of-pocket costs. You will never receive an unexpected bill.",
  },
  {
    id: "faq-fin-3",
    category: "Financials & Insurance",
    question: "Do you offer financing for cosmetic treatments or clear aligners?",
    answer: "Yes. We offer flexible, interest-free monthly financing options through CareCredit and Sunbit, allowing you to split treatment costs into manageable monthly installments starting from $99/month.",
  },

  // Comfort & Safety
  {
    id: "faq-com-1",
    category: "Comfort & Safety",
    question: "What amenities are available to help with dental anxiety?",
    answer: "We offer a complimentary comfort menu including Bose noise-canceling headphones, warm lavender towels, memory foam dental chairs, organic aromatherapy, and chairside streaming entertainment.",
  },
  {
    id: "faq-com-2",
    category: "Comfort & Safety",
    question: "Do you use traditional impression putty?",
    answer: "No. We have replaced uncomfortable impression putty with high-definition 3D intraoral optical scanners that capture thousands of digital data points in seconds.",
  },

  // Treatments
  {
    id: "faq-trt-1",
    category: "Treatments",
    question: "How do same-day CEREC ceramic crowns work?",
    answer: "Using in-house 3D CAD/CAM milling technology, we scan your prepared tooth, design your crown in 3D, and mill it from solid ceramic right in our studio in about 90 minutes—eliminating temporary crowns and second visits.",
  },
  {
    id: "faq-trt-2",
    category: "Treatments",
    question: "Are clear aligners suitable for all orthodontic cases?",
    answer: "Clear aligners are highly effective for mild to moderate crowding, spacing, and bite adjustments. During your 3D digital evaluation, Dr. Rostova will confirm if aligners fit your specific alignment goals.",
  },

  // Emergency
  {
    id: "faq-emg-1",
    category: "Emergency",
    question: "What should I do if I experience a dental emergency after hours?",
    answer: "Call our direct triage line at (512) 555-0199. Established and new patients can leave a priority emergency message for prompt same-day triage guidance.",
  },
];
