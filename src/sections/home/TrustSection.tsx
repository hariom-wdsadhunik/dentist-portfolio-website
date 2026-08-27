import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { TRUST_METRICS } from "@/lib/homepageData";

export const TrustSection: React.FC = () => {
  return (
    <Section bg="linen" className="py-10 border-b border-[#E7E2D8]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#E7E2D8]">
          {TRUST_METRICS.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center text-center p-2 ${
                index !== 0 ? "pt-6 md:pt-2 md:pl-6" : ""
              }`}
            >
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#0D3B36]">
                {item.value}
              </span>
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#1C1917] mt-1">
                {item.label}
              </span>
              <span className="font-sans text-xs text-[#78716C] mt-1 max-w-[200px] leading-normal">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default TrustSection;
