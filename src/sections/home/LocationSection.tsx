import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { MapPinIcon, PhoneIcon, ClockIcon } from "@/components/ui/Icons";

export const LocationSection: React.FC = () => {
  return (
    <Section bg="linen" className="py-16 md:py-24 border-b border-[#E7E2D8]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Map / Parking Guide Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border-2 border-[#E7E2D8] p-6 space-y-6 shadow-md">
              {/* Studio Info Card */}
              <div className="bg-[#0D3B36] rounded-xl p-6 text-white space-y-3 text-left">
                <div className="inline-block px-3 py-1 rounded bg-white/10 border border-white/20 text-xs font-semibold text-[#D4A373]">
                  Bandra West, Mumbai Location
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold">
                  204, Sea View House, Linking Road
                </h3>
                <p className="text-xs text-[#E7E2D8]/80 leading-relaxed">
                  Located in the heart of Bandra West on Linking Road, near Turner Road junction.
                </p>
              </div>

              {/* Static SVG Map Graphic Illustration */}
              <div className="relative rounded-xl border border-[#E7E2D8] bg-[#FBF9F5] p-6 text-center space-y-3 overflow-hidden">
                <div className="flex items-center justify-between text-xs text-[#78716C] font-semibold border-b border-[#E7E2D8] pb-3">
                  <span>Bandra West Linking Road Grid</span>
                  <span className="text-[#0D3B36] font-bold">Linking Rd &amp; Turner Rd</span>
                </div>

                <div className="py-6 flex flex-col items-center justify-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#0D3B36] text-white flex items-center justify-center shadow-lg ring-4 ring-[#D4A373]/30">
                    <MapPinIcon className="w-6 h-6 text-[#D4A373]" />
                  </div>
                  <p className="font-serif text-lg font-bold text-[#1C1917]">
                    Aura Dental Studio • Suite 204
                  </p>
                  <p className="text-xs text-[#44403C] max-w-xs">
                    Entrance via Sea View House Lobby Elevator to 2nd Floor
                  </p>
                </div>

                {/* Parking & Access Instructions */}
                <div className="bg-white p-3.5 rounded-lg border border-[#E7E2D8] text-xs text-[#1C1917] text-left space-y-1">
                  <p className="font-bold text-[#0D3B36] flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-1.5 text-[#0D3B36]" />
                    Parking &amp; Transit Access:
                  </p>
                  <p className="text-[#44403C]">
                    Complimentary valet parking available at building entrance. 5 minutes from Bandra railway station with direct rideshare drop-off (Uber/Ola).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Office Hours & Direct Contact */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-white px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
                Visit &amp; Contact Details
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
                Convenient Bandra West Access
              </h2>
            </div>

            <div className="space-y-4 text-sm text-[#44403C]">
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-[#E7E2D8]">
                <MapPinIcon className="w-5 h-5 text-[#0D3B36] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C1917]">Address</h4>
                  <p>204, Sea View House, Linking Road, Bandra West, Mumbai, Maharashtra 400050</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-[#E7E2D8]">
                <ClockIcon className="w-5 h-5 text-[#0D3B36] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C1917]">Studio Operating Hours</h4>
                  <p>Monday &ndash; Saturday: 9:00 AM &ndash; 7:00 PM</p>
                  <p className="text-xs text-[#78716C] mt-0.5">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-[#E7E2D8]">
                <PhoneIcon className="w-5 h-5 text-[#0D3B36] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C1917]">Direct Phone &amp; Triage Line</h4>
                  <a href="tel:+919876543210" className="text-[#0D3B36] font-semibold hover:underline">
                    +91 98765 43210
                  </a>
                  <p className="text-xs text-[#78716C] mt-0.5">Same-day urgent dental assessment availability</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button
                href="https://maps.google.com/?q=Linking+Road+Bandra+West+Mumbai"
                external
                variant="primary"
                size="md"
              >
                Get Directions on Google Maps
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Contact Office Concierge
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default LocationSection;
