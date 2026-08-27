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
              <div className="bg-[#0D3B36] rounded-xl p-8 text-white space-y-4 text-left">
                <div className="inline-block px-3 py-1 rounded bg-white/10 border border-white/20 text-xs font-semibold text-[#D4A373]">
                  Downtown Austin Location
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold">
                  410 Congress Avenue, Suite 200
                </h3>
                <p className="text-xs text-[#E7E2D8]/80 leading-relaxed">
                  Located in the heart of the Downtown Arts &amp; Business District on the corner of 4th Street and Congress Avenue.
                </p>
              </div>

              {/* Parking Instructions */}
              <div className="bg-[#FBF9F5] p-4 rounded-xl border border-[#E7E2D8] text-xs text-[#1C1917] space-y-1.5">
                <p className="font-bold text-[#0D3B36] flex items-center">
                  <MapPinIcon className="w-4 h-4 mr-1.5 text-[#0D3B36]" />
                  Validated Garage Parking Instructions:
                </p>
                <p className="text-[#44403C]">
                  Complimentary 2-hour validated parking in the <strong>Congress Center Garage</strong> (entrance accessible via 4th Street). Bring your garage ticket to front desk concierge for validation.
                </p>
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
                Convenient Downtown Access
              </h2>
            </div>

            <div className="space-y-4 text-sm text-[#44403C]">
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-[#E7E2D8]">
                <MapPinIcon className="w-5 h-5 text-[#0D3B36] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C1917]">Address</h4>
                  <p>410 Congress Ave, Suite 200, Austin, TX 78701</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-[#E7E2D8]">
                <ClockIcon className="w-5 h-5 text-[#0D3B36] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C1917]">Studio Operating Hours</h4>
                  <p>Monday &ndash; Friday: 7:00 AM &ndash; 6:00 PM</p>
                  <p className="text-xs text-[#78716C] mt-0.5">Saturday: By Appointment | Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-[#E7E2D8]">
                <PhoneIcon className="w-5 h-5 text-[#0D3B36] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#1C1917]">Direct Phone &amp; Emergency Line</h4>
                  <a href="tel:5125550199" className="text-[#0D3B36] font-semibold hover:underline">
                    (512) 555-0199
                  </a>
                  <p className="text-xs text-[#78716C] mt-0.5">24/7 same-day emergency triage availability</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button
                href="https://maps.google.com/?q=410+Congress+Ave+Austin+TX"
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
