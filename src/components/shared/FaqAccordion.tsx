"use client";

import React, { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items, className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `faq-btn-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={index}
            className="bg-[#FBF9F5] rounded-xl border border-[#E7E2D8] overflow-hidden transition-colors"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="w-full text-left p-6 font-serif text-xl font-bold text-[#1C1917] flex items-center justify-between gap-4 hover:text-[#0D3B36] focus-visible:outline-2 focus-visible:outline-[#0D3B36] transition-colors"
              >
                <span>{item.question}</span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full bg-[#F4F0E8] flex items-center justify-center text-xs text-[#0D3B36] transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-6 pb-6 text-sm text-[#44403C] leading-relaxed border-t border-[#E7E2D8]/60 pt-4"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
