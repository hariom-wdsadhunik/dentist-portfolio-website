import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { ChevronRightIcon } from "@/components/ui/Icons";
import { CORE_SERVICES } from "@/lib/homepageData";

export const ServicesSection: React.FC = () => {
  return (
    <Section id="services" bg="white" className="py-16 md:py-24 border-b border-[#E7E2D8]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-3 py-1 rounded-full border border-[#E7E2D8]">
              Comprehensive Dental Care
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
              Designed Around Your Oral Health &amp; Lifestyle
            </h2>
            <p className="font-sans text-base text-[#44403C] leading-relaxed">
              From routine wellness hygiene to full aesthetic transformations, every treatment is delivered with transparent upfront pricing and gentle precision.
            </p>
          </div>

          <div className="shrink-0">
            <Button href="/services" variant="outline" size="md">
              View All Services <ChevronRightIcon className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-[#FBF9F5] rounded-xl border border-[#E7E2D8] p-8 flex flex-col justify-between hover:shadow-md hover:border-[#0D3B36]/30 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-2.5 py-1 rounded border border-[#E7E2D8]">
                    {service.category}
                  </span>
                  {service.badge && (
                    <span className="text-xs font-medium text-[#D4A373] bg-[#0D3B36] px-2.5 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-[#1C1917] group-hover:text-[#0D3B36] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#44403C] leading-relaxed">
                  {service.description}
                </p>

                {/* Patient Benefit Highlight */}
                <div className="bg-white p-3.5 rounded-lg border border-[#E7E2D8]/80 text-xs text-[#1C1917] space-y-1">
                  <span className="font-semibold text-[#0D3B36] block">Key Patient Benefit:</span>
                  <p className="text-[#44403C]">{service.benefit}</p>
                </div>
              </div>

              {/* Card Footer: Pricing Notice & Action */}
              <div className="pt-6 mt-6 border-t border-[#E7E2D8] flex items-center justify-between text-xs">
                <span className="font-medium text-[#78716C]">{service.feeNotice}</span>
                <Button href={service.href} variant="ghost" size="sm" className="group-hover:translate-x-1">
                  Details <ChevronRightIcon className="ml-1 w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ServicesSection;
