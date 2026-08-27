import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ContactForm from "@/components/shared/ContactForm";
import CtaBanner from "@/components/shared/CtaBanner";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { MapPinIcon, PhoneIcon, ClockIcon, CalendarIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact Us & Location Directions | Aura Dental Studio Austin",
  description:
    "Visit Aura Dental Studio at 410 Congress Ave, Suite 200 in Downtown Austin. Find studio hours, phone numbers, validated parking garage instructions, and online message concierge.",
};

export default function ContactPage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="LOCATION & CONTACT"
        title="Visit Aura Dental Studio in Downtown Austin"
        description="Conveniently located on Congress Avenue with complimentary 2-hour validated garage parking. Reach out via direct phone, email concierge, or online booking."
        primaryCta={
          <Button href="/book" variant="primary" size="lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-white" />
            Book Appointment Online
          </Button>
        }
        secondaryCta={
          <Button href="tel:5125550199" variant="outline" size="lg">
            <PhoneIcon className="w-4 h-4 mr-2 text-[#0D3B36]" />
            Call (512) 555-0199
          </Button>
        }
      />

      {/* 2. Location Details & Interactive Contact Form Split */}
      <Section bg="canvas" className="py-16 md:py-24 border-b border-[#E7E2D8]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Address, Hours, Phone & Map Anchor */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
                  Studio Details
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
                  Downtown Studio Information
                </h2>
              </div>

              <div className="space-y-4 text-sm text-[#44403C]">
                {/* Physical Address */}
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-[#E7E2D8]">
                  <MapPinIcon className="w-5 h-5 text-[#0D3B36] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#1C1917]">Address</h3>
                    <p>410 Congress Ave, Suite 200, Austin, TX 78701</p>
                    <p className="text-xs text-[#78716C] mt-0.5">Elevator access to 2nd floor from lobby</p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-[#E7E2D8]">
                  <ClockIcon className="w-5 h-5 text-[#0D3B36] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#1C1917]">Studio Operating Hours</h3>
                    <p>Monday &ndash; Friday: 7:00 AM &ndash; 6:00 PM</p>
                    <p className="text-xs text-[#78716C] mt-0.5">Saturday: By Appointment | Sunday: Closed</p>
                  </div>
                </div>

                {/* Phone & Emergency Line */}
                <div className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-[#E7E2D8]">
                  <PhoneIcon className="w-5 h-5 text-[#0D3B36] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#1C1917]">Direct Phone &amp; Emergency Line</h3>
                    <a href="tel:5125550199" className="text-[#0D3B36] font-semibold hover:underline">
                      (512) 555-0199
                    </a>
                    <p className="text-xs text-[#78716C] mt-0.5">24/7 same-day emergency triage availability</p>
                  </div>
                </div>
              </div>

              {/* Validated Parking Instructions */}
              <div className="bg-white p-5 rounded-xl border border-[#E7E2D8] text-xs text-[#1C1917] space-y-2">
                <p className="font-bold text-[#0D3B36] flex items-center text-sm">
                  <MapPinIcon className="w-4 h-4 mr-1.5 text-[#0D3B36]" />
                  Validated Garage Parking Instructions:
                </p>
                <p className="text-[#44403C] leading-relaxed">
                  Complimentary 2-hour validated parking is available in the <strong>Congress Center Garage</strong> (entrance accessible on 4th Street between Congress Ave and Brazos St). Bring your garage ticket to our front desk concierge for validation.
                </p>
              </div>

              {/* Google Maps External Button */}
              <div>
                <Button
                  href="https://maps.google.com/?q=410+Congress+Ave+Austin+TX"
                  external
                  variant="primary"
                  size="md"
                >
                  Get Directions on Google Maps
                </Button>
              </div>
            </div>

            {/* Right Column: Interactive Demo Contact Form */}
            <div className="lg:col-span-6 bg-white p-8 rounded-2xl border-2 border-[#E7E2D8] shadow-md">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Closing Conversion Banner */}
      <CtaBanner
        eyebrow="Visit Aura Dental Studio"
        title="Ready to schedule your appointment?"
        description="Book your comprehensive 3D digital assessment online in under 60 seconds."
        primaryCta={
          <Button href="/book" variant="gold" size="lg" className="shadow-lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-[#1C1917]" />
            Book Your Appointment Online
          </Button>
        }
        secondaryCta={
          <Button href="/services" variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 hover:border-white">
            Explore Services Catalog
          </Button>
        }
      />
    </div>
  );
}
