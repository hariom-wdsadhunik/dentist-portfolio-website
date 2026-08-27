import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import BookingFlow from "@/components/booking/BookingFlow";

export const metadata: Metadata = {
  title: "Book Appointment Demonstration | Aura Dental Studio Mumbai",
  description:
    "Interactive appointment booking demonstration for Aura Dental Studio in Bandra West, Mumbai. Select services, preferred dates, and time slots in a portfolio showcase flow.",
};

export default function BookPage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Page Header */}
      <PageHeader
        eyebrow="ONLINE APPOINTMENT DEMO"
        title="Schedule Your Visit at Aura Dental Studio"
        description="Experience our 3-step interactive appointment booking demonstration. Select your treatment service, preferred date, and contact details."
      />

      {/* Main Booking Workspace */}
      <Section bg="canvas" className="py-12 md:py-20 border-b border-[#E7E2D8]">
        <Container>
          <BookingFlow />
        </Container>
      </Section>
    </div>
  );
}
