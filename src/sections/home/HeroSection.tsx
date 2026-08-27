import React from "react";
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
              <span>Downtown Austin Dental Studio</span>
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

          {/* Right Column: Architectural Visual Anchor Placeholder */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-[#F4F0E8] border-2 border-[#E7E2D8] p-4 shadow-xl">
              {/* Gold Accent Outline Frame */}
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#0D3B36] to-[#082824] p-8 text-white min-h-[380px] md:min-h-[440px] flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 rounded bg-[#D4A373]/20 border border-[#D4A373]/40 text-xs font-semibold text-[#D4A373]">
                    Dr. Elena Rostova, DDS, FAGD
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold leading-tight text-white">
                    Gentle Care Led by Clinical Excellence
                  </h2>
                  <p className="text-xs md:text-sm text-[#E7E2D8]/80 leading-relaxed">
                    &ldquo;Our goal is to make every dental visit feel calm, transparent, and completely empowering.&rdquo;
                  </p>
                </div>

                {/* Architectural Feature Graphic Placeholder */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#E7E2D8]/70">
                  <div className="space-y-1">
                    <p className="font-medium text-white">Congress Center Operatory</p>
                    <p>410 Congress Ave, Suite 200</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#2D6A4F] mr-1.5 animate-pulse" />
                    <span>Open Mon - Fri</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
