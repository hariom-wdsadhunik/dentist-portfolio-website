import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { ShieldCheckIcon } from "@/components/ui/Icons";

export interface CtaBannerProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: React.ReactNode;
  secondaryCta?: React.ReactNode;
  bg?: "forest" | "linen";
  guarantees?: string[];
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  eyebrow = "Start Your Smile Care Journey",
  title,
  description,
  primaryCta,
  secondaryCta,
  bg = "forest",
  guarantees = [
    "24/7 Self-Service Booking",
    "Complimentary Validated Parking",
    "Upfront Transparent Pricing",
  ],
}) => {
  const isForest = bg === "forest";

  return (
    <Section
      bg={bg}
      className={`py-20 md:py-28 text-center ${
        isForest ? "text-white" : "text-[#1C1917] border-t border-b border-[#E7E2D8]"
      }`}
    >
      <Container className="max-w-4xl mx-auto space-y-6">
        {eyebrow && (
          <div
            className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
              isForest
                ? "bg-white/10 border border-white/20 text-[#D4A373]"
                : "bg-[#F4F0E8] border border-[#E7E2D8] text-[#0D3B36]"
            }`}
          >
            <span>{eyebrow}</span>
          </div>
        )}

        <h2
          className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight ${
            isForest ? "text-white" : "text-[#1C1917]"
          }`}
        >
          {title}
        </h2>

        <p
          className={`font-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${
            isForest ? "text-[#E7E2D8]/90" : "text-[#44403C]"
          }`}
        >
          {description}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryCta}
          {secondaryCta}
        </div>

        {guarantees && guarantees.length > 0 && (
          <div
            className={`pt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs ${
              isForest ? "text-[#E7E2D8]/70" : "text-[#78716C]"
            }`}
          >
            {guarantees.map((item, idx) => (
              <span key={idx} className="flex items-center space-x-1.5">
                <ShieldCheckIcon
                  className={`w-4 h-4 ${isForest ? "text-[#D4A373]" : "text-[#0D3B36]"}`}
                />
                <span>{item}</span>
              </span>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default CtaBanner;
