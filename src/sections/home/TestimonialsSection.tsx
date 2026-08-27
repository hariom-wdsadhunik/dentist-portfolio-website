import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { StarIcon, ChevronRightIcon, QuoteIcon } from "@/components/ui/Icons";
import { DEMO_TESTIMONIALS } from "@/lib/homepageData";

export const TestimonialsSection: React.FC = () => {
  return (
    <Section bg="canvas" className="py-16 md:py-24 border-b border-[#E7E2D8]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#F4F0E8] border border-[#E7E2D8] text-xs font-bold text-[#0D3B36] uppercase tracking-wider">
            <span>Portfolio Demo Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Patient Experience Showcase
          </h2>
          <p className="font-sans text-base text-[#44403C] leading-relaxed">
            Illustrative feedback demonstrating how patient comfort, punctuality, and transparent communication shape the Aura Dental Studio experience.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {DEMO_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="relative bg-[#FAF8F3] rounded-xl border border-[#E7E2D8] p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <QuoteIcon className="absolute top-6 right-6 w-8 h-8 text-[#D4A373]/20" />

              <div className="space-y-4 relative z-10">
                {/* 5-Star Rating */}
                <div className="flex items-center space-x-1 text-[#D4A373]">
                  {[...Array(item.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif text-base text-[#1C1917] italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#E7E2D8] text-xs relative z-10">
                <p className="font-bold text-[#1C1917]">{item.author}</p>
                <p className="text-[#78716C]">{item.location} • <span className="text-[#0D3B36] font-medium">{item.treatment}</span></p>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Notice Disclaimer & Action */}
        <div className="text-center space-y-4">
          <p className="text-xs text-[#78716C] italic max-w-xl mx-auto">
            * Testimonials above represent illustrative patient scenario showcases written for portfolio demonstration.
          </p>
          <div>
            <Button href="/testimonials" variant="outline" size="md">
              Read More Patient Stories <ChevronRightIcon className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
