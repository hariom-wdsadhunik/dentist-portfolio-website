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
      "Scheduling is simple and instantaneous via our online booking portal at /book. Select your treatment service, choose a convenient date and time slot, and receive immediate demonstration confirmation.",
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
    question: "Which payment options and insurance documentation do you support?",
    answer:
      "We accept all major payment methods including UPI (GPay, PhonePe, Paytm), credit/debit cards, and direct bank transfers. We provide itemized bills and documentation for private insurance reimbursement claims.",
  },
  {
    id: "faq-4",
    category: "Financials & Insurance",
    question: "Do you offer installment or payment plans?",
    answer:
      "Yes. We offer flexible monthly installment plans for major cosmetic and restorative treatments. We also provide clear, itemized written estimates before any treatment begins so there are never surprise costs.",
  },
  {
    id: "faq-5",
    category: "Comfort & Safety",
    question: "How do you help patients who experience dental anxiety?",
    answer:
      "We specialize in gentle, anxiety-free care. Our studio offers noise-canceling Bose headphones with music, warm scented facial towels, ergonomic chairs, and step-by-step co-care explanations before starting.",
  },
  {
    id: "faq-6",
    category: "Treatments",
    question: "What are same-day CEREC crowns and how do they work?",
    answer:
      "CEREC same-day crowns use 3D optical scanners and chairside CAD/CAM milling to craft custom, high-strength ceramic crowns in a single 90-minute visit—eliminating temporary crowns and second visits.",
  },
  {
    id: "faq-7",
    category: "Emergency",
    question: "What should I do if I experience a dental emergency?",
    answer:
      "Call our studio triage line at +91 98765 43210 immediately. We reserve daily emergency blocks to provide same-day pain relief and triage for acute toothaches, cracked teeth, or lost crowns.",
  },
];
