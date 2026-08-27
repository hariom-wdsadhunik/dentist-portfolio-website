import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { CalendarIcon, PhoneIcon, ShieldCheckIcon } from "@/components/ui/Icons";

export const FinalCtaSection: React.FC = () => {
  return (
    <Section bg="forest" className="py-20 md:py-28 text-center text-white">
      <Container className="max-w-4xl mx-auto space-y-6">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#D4A373] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
          Start Your Smile Journey
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Ready to experience gentle, modern dental care?
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#E7E2D8]/90 max-w-2xl mx-auto leading-relaxed">
          Book your comprehensive 3D digital assessment online in under 60 seconds or speak directly with our office concierge.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/book" variant="gold" size="lg" className="w-full sm:w-auto shadow-lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-[#1C1917]" />
            Book Appointment Online
          </Button>

          <Button href="tel:5125550199" variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 hover:border-white">
            <PhoneIcon className="w-4 h-4 mr-2 text-white" />
            Call Concierge (512) 555-0199
          </Button>
        </div>

        {/* Guarantees List */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-[#E7E2D8]/70">
          <span className="flex items-center space-x-1.5">
            <ShieldCheckIcon className="w-4 h-4 text-[#D4A373]" />
            <span>24/7 Self-Service Booking</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <ShieldCheckIcon className="w-4 h-4 text-[#D4A373]" />
            <span>Complimentary Validated Parking</span>
          </span>
          <span className="flex items-center space-x-1.5">
            <ShieldCheckIcon className="w-4 h-4 text-[#D4A373]" />
            <span>Upfront Transparent Pricing</span>
          </span>
        </div>
      </Container>
    </Section>
  );
};

export default FinalCtaSection;
