import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import FaqAccordion from "@/components/shared/FaqAccordion";
import CtaBanner from "@/components/shared/CtaBanner";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CalendarIcon, ShieldCheckIcon, PhoneIcon } from "@/components/ui/Icons";
import { FAQ_ENTRIES, FaqEntry } from "@/lib/faqData";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Payment Options | Aura Dental Studio Mumbai",
  description:
    "Find clear answers about payment options, insurance reimbursement documentation, transparent pricing, appointment scheduling, and comfort amenities at Aura Dental Studio in Bandra West, Mumbai.",
};

export default function FaqPage() {
  const categories: Array<FaqEntry["category"]> = [
    "Appointments",
    "Financials & Insurance",
    "Comfort & Safety",
    "Treatments",
    "Emergency",
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="PATIENT FAQS & FINANCIAL TRANSPARENCY"
        title="Transparent Financials & Frequently Asked Questions"
        description="Find clear, honest answers regarding payment methods, insurance claim documentation, upfront written estimates, appointment punctuality, comfort amenities, and same-day treatment options."
        primaryCta={
          <Button href="/book" variant="primary" size="lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-white" />
            Book Appointment Online
          </Button>
        }
        secondaryCta={
          <Button href="/contact" variant="outline" size="lg">
            Contact Office Concierge
          </Button>
        }
      />

      {/* 2. Categorized Accordion Groups */}
      <Section bg="canvas" className="py-16 md:py-24 border-b border-[#E7E2D8]">
        <Container className="max-w-4xl mx-auto space-y-16">
          {categories.map((category) => {
            const categoryFaqs = FAQ_ENTRIES.filter((f) => f.category === category);
            if (categoryFaqs.length === 0) return null;

            return (
              <div key={category} className="space-y-6">
                <div className="border-b border-[#E7E2D8] pb-3 flex items-center justify-between">
                  <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
                    {category}
                  </h2>
                  <span className="text-xs text-[#78716C]">
                    {categoryFaqs.length} Questions
                  </span>
                </div>

                <FaqAccordion
                  items={categoryFaqs.map((f) => ({
                    question: f.question,
                    answer: f.answer,
                  }))}
                />
              </div>
            );
          })}
        </Container>
      </Section>

      {/* 3. Insurance & Payment Guidance Panel */}
      <Section bg="linen" className="py-16 md:py-24 border-b border-[#E7E2D8]">
        <Container className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-white px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
              Financial Transparency Standard
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
              Payment Options &amp; Claim Documentation
            </h2>
            <p className="text-base text-[#44403C] leading-relaxed max-w-2xl mx-auto">
              We accept all major Indian payment methods and provide itemized documentation for private dental insurance reimbursement claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#1C1917]">
            <div className="bg-white p-6 rounded-xl border border-[#E7E2D8] space-y-2">
              <ShieldCheckIcon className="w-6 h-6 text-[#0D3B36]" />
              <h3 className="font-bold text-sm">UPI &amp; Cards Accepted</h3>
              <p className="text-[#78716C] leading-relaxed">
                UPI (GPay, PhonePe, Paytm), credit/debit cards, and direct bank transfers accepted seamlessly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E7E2D8] space-y-2">
              <ShieldCheckIcon className="w-6 h-6 text-[#0D3B36]" />
              <h3 className="font-bold text-sm">Insurance Claim Papers</h3>
              <p className="text-[#78716C] leading-relaxed">
                Detailed itemized bills and treatment summaries provided for private health/dental insurance claims.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E7E2D8] space-y-2">
              <ShieldCheckIcon className="w-6 h-6 text-[#0D3B36]" />
              <h3 className="font-bold text-sm">Flexible Installments</h3>
              <p className="text-[#78716C] leading-relaxed">
                Monthly installment options available for major cosmetic and restorative treatment plans.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Closing Conversion Banner */}
      <CtaBanner
        eyebrow="Have a Specific Question?"
        title="Ready to experience stress-free care?"
        description="Schedule your comprehensive 3D digital assessment online or speak directly with our office concierge."
        primaryCta={
          <Button href="/book" variant="gold" size="lg" className="shadow-lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-[#1C1917]" />
            Book Appointment Online
          </Button>
        }
        secondaryCta={
          <Button href="tel:+919876543210" variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 hover:border-white">
            <PhoneIcon className="w-4 h-4 mr-2 text-white" />
            Call Concierge +91 98765 43210
          </Button>
        }
      />
    </div>
  );
}
