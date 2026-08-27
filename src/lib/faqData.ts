export interface FaqEntry {
  id: string;
  category: "Appointments" | "Financials & Insurance" | "Comfort & Safety" | "Treatments" | "Emergency";
  question: string;
  answer: string;
}

export const FAQ_ENTRIES: FaqEntry[] = [
  {
    id: "faq-1",
    category: "Appointments",
    question: "How do I schedule an appointment online?",
    answer:
      "Scheduling is simple and instantaneous via our 24/7 online booking portal at /book. Select your treatment service, choose a convenient date and time slot, and receive immediate calendar confirmation.",
  },
  {
    id: "faq-2",
    category: "Appointments",
    question: "What is your Zero-Wait Punctuality Standard?",
    answer:
      "We respect your schedule. Our studio reserves dedicated treatment time for every patient, ensuring your appointment begins on time with zero waiting room delays.",
  },
  {
    id: "faq-3",
    category: "Financials & Insurance",
    question: "Which PPO dental insurance plans do you accept?",
    answer:
      "We accept all major PPO dental insurance plans including Delta Dental, MetLife, Cigna, Aetna, Guardian, Humana, and UnitedConcordia. Our team files claims directly on your behalf.",
  },
  {
    id: "faq-4",
    category: "Financials & Insurance",
    question: "Do you offer financing or payment plans?",
    answer:
      "Yes. We offer 0% interest monthly payment plans through CareCredit and Sunbit. We also provide itemized written estimates before any treatment begins so there are never surprise costs.",
  },
  {
    id: "faq-5",
    category: "Comfort & Safety",
    question: "How do you help patients who experience dental anxiety?",
    answer:
      "We specialize in gentle, anxiety-free care. Our studio offers noise-canceling Bose headphones with music or streaming, warm scented facial towels, ergonomic chairs, and step-by-step co-care explanations before starting.",
  },
  {
    id: "faq-6",
    category: "Treatments",
    question: "What are same-day CEREC crowns and how do they work?",
    answer:
      "CEREC same-day crowns use 3D optical scanners and chairside CAD/CAM milling to craft custom, high-strength porcelain crowns in a single 90-minute visit—eliminating temporary crowns and second visits.",
  },
  {
    id: "faq-7",
    category: "Emergency",
    question: "What should I do if I experience a dental emergency?",
    answer:
      "Call our direct studio concierge line at (512) 555-0199 immediately. We reserve daily emergency blocks to provide same-day pain relief and triage for toothaches, cracked teeth, or lost crowns.",
  },
];
