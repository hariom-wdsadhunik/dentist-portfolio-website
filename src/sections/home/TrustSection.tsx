import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { TRUST_METRICS } from "@/lib/homepageData";

export const TrustSection: React.FC = () => {
  return (
    <Section bg="linen" className="py-8 sm:py-10 border-b border-[#E7E2D8]">
      <Container>
        {/* Metric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TRUST_METRICS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center p-4 bg-[#FBF9F5] sm:bg-transparent rounded-lg sm:rounded-none border sm:border-0 border-[#E7E2D8]"
            >
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D3B36]">
                {item.value}
              </span>
              <span className="font-sans text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#1C1917] mt-1">
                {item.label}
              </span>
              <span className="font-sans text-xs text-[#78716C] mt-1 max-w-[200px] leading-normal">
                {item.description}
              </span>
            </div>
          ))}
        </div>

        {/* Demo Notice */}
        <div className="mt-4 sm:mt-6 text-center">
          <span className="text-[10px] sm:text-[11px] text-[#78716C]/80 italic">
            * Illustrative clinical quality standards &amp; brand positioning metrics for portfolio clinic demo.
          </span>
        </div>
      </Container>
    </Section>
  );
};

export default TrustSection;
