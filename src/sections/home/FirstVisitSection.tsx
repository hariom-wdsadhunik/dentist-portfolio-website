import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { FIRST_VISIT_STEPS } from "@/lib/homepageData";
import { CalendarIcon, ChevronRightIcon } from "@/components/ui/Icons";

export const FirstVisitSection: React.FC = () => {
  return (
    <Section bg="white" className="py-16 md:py-24 border-b border-[#E7E2D8]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
            New Patient Onboarding
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            What to Expect During Your First Visit
          </h2>
          <p className="font-sans text-base text-[#44403C] leading-relaxed">
            No surprise fees, no painful impression putty, and zero judgment. Here is how your first appointment unfolds step-by-step.
          </p>
        </div>

        {/* 3 Steps Grid with Progression Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-12">
          {FIRST_VISIT_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-[#FBF9F5] rounded-xl border border-[#E7E2D8] p-8 space-y-4 flex flex-col justify-between hover:border-[#0D3B36]/30 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-4xl font-bold text-[#D4A373] block">
                    {step.number}
                  </span>
                  {index < FIRST_VISIT_STEPS.length - 1 && (
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

              <div className="pt-4 border-t border-[#E7E2D8] text-xs text-[#78716C]">
                💡 <span className="font-medium text-[#1C1917]">{step.details}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <Button href="/book" variant="primary" size="lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-white" />
            Schedule Your First Visit Online
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default FirstVisitSection;
