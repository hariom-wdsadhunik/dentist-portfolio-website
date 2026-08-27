import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { SparklesIcon, CalendarIcon, ShieldCheckIcon } from "@/components/ui/Icons";

export const HeroSection: React.FC = () => {
  return (
    <Section bg="canvas" className="pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#E7E2D8]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Conversion Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F4F0E8] border border-[#E7E2D8] text-xs font-bold text-[#0D3B36] uppercase tracking-wider">
              <SparklesIcon className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>Bandra West, Mumbai Dental Studio</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] leading-[1.12]">
              Modern, gentle dentistry designed around your comfort, schedule, and confidence.
            </h1>

            {/* Supporting Paragraph */}
            <p className="font-sans text-base sm:text-lg text-[#44403C] leading-relaxed max-w-2xl">
              Experience stress-free oral care with transparent upfront pricing, 3D digital precision, and soothing comfort amenities in a warm, design-forward environment.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/book" variant="primary" size="lg" className="shadow-md">
                <CalendarIcon className="w-5 h-5 mr-2 text-white" />
                Book Appointment
              </Button>

              <Button href="#services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>

            {/* Microcopy & Guarantees */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#78716C] border-t border-[#F0ECE1]">
              <span className="flex items-center space-x-1.5">
                <ShieldCheckIcon className="w-4 h-4 text-[#0D3B36]" />
                <span>24/7 Self-Service Booking</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <ShieldCheckIcon className="w-4 h-4 text-[#0D3B36]" />
                <span>Instant Calendar Confirmation</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <ShieldCheckIcon className="w-4 h-4 text-[#0D3B36]" />
                <span>Zero Hidden Fees</span>
              </span>
            </div>
          </div>

          {/* Right Column: Integrated Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-[#F4F0E8] border-2 border-[#E7E2D8] p-3 shadow-xl">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0D3B36]">
                <Image
                  src="/images/hero-operatory-visual.svg"
                  alt="Aura Dental Studio Modern Operatory Suite in Bandra West, Mumbai"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
