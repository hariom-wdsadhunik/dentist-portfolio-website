import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { ChevronRightIcon } from "@/components/ui/Icons";

export interface ProcessStepItem {
  number: string;
  title: string;
  description: string;
  details?: string;
}

export interface ProcessStepsProps {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: ProcessStepItem[];
  bg?: "canvas" | "linen" | "white";
  cta?: React.ReactNode;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({
  eyebrow = "Step-by-step Journey",
  title,
  description,
  steps,
  bg = "white",
  cta,
}) => {
  return (
    <Section bg={bg} className="py-16 md:py-24 border-b border-[#E7E2D8]">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          {eyebrow && (
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
              {eyebrow}
            </span>
          )}
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="font-sans text-base text-[#44403C] leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-[#FBF9F5] rounded-xl border border-[#E7E2D8] p-8 space-y-4 flex flex-col justify-between hover:border-[#0D3B36]/30 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl font-bold text-[#D4A373] block">
                    {step.number}
                  </span>
                  {index < steps.length - 1 && (
                    <ChevronRightIcon className="hidden md:block w-6 h-6 text-[#D4A373]/60" />
                  )}
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                  {step.title}
                </h3>
                <p className="text-sm text-[#44403C] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {step.details && (
                <div className="pt-4 border-t border-[#E7E2D8] text-xs text-[#78716C]">
                  💡 <span className="font-medium text-[#1C1917]">{step.details}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {cta && <div className="text-center">{cta}</div>}
      </Container>
    </Section>
  );
};

export default ProcessSteps;
