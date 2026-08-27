import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { COMFORT_AMENITIES, AmenityItem } from "@/lib/homepageData";
import {
  ChevronRightIcon,
  HeadphonesIcon,
  WavesIcon,
  SunIcon,
  HeartIcon,
} from "@/components/ui/Icons";

const iconMap: Record<AmenityItem["iconName"], React.ReactNode> = {
  headphones: <HeadphonesIcon className="w-6 h-6 text-[#0D3B36]" />,
  ultrasonic: <WavesIcon className="w-6 h-6 text-[#0D3B36]" />,
  towels: <SunIcon className="w-6 h-6 text-[#0D3B36]" />,
  blanket: <HeartIcon className="w-6 h-6 text-[#0D3B36]" />,
};

export const ExperienceSection: React.FC = () => {
  return (
    <Section bg="linen" className="py-16 md:py-24 border-b border-[#E7E2D8]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-white px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
            Dental Anxiety Relief
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            Designed Around Your Complete Comfort
          </h2>
          <p className="font-sans text-base text-[#44403C] leading-relaxed">
            We have reimagined the dental experience from the ground up to eliminate cold clinical fear and replace it with warm, soothing care.
          </p>
        </div>

        {/* Amenity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {COMFORT_AMENITIES.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#E7E2D8] p-6 space-y-3.5 shadow-sm hover:shadow-md hover:border-[#0D3B36]/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[#F4F0E8] flex items-center justify-center border border-[#E7E2D8]">
                {iconMap[item.iconName]}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                {item.title}
              </h3>
              <p className="text-xs text-[#44403C] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="text-center">
          <Button href="/experience" variant="secondary" size="md">
            Explore Full Comfort Care Amenities <ChevronRightIcon className="ml-1 w-4 h-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default ExperienceSection;
