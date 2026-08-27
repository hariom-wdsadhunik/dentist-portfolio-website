import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import CardGrid from "@/components/shared/CardGrid";
import CtaBanner from "@/components/shared/CtaBanner";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CalendarIcon, ChevronRightIcon, ShieldCheckIcon } from "@/components/ui/Icons";
import { SERVICES_CATALOG, ServiceItem } from "@/lib/servicesData";

export const metadata: Metadata = {
  title: "Services Catalog & Treatments | Aura Dental Studio Mumbai",
  description:
    "Explore our complete dental treatment catalog in Bandra West, Mumbai: 3D preventive hygiene, clear aligners, same-day crowns, porcelain veneers, teeth whitening, implants, and emergency care.",
};

export default function ServicesPage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="TREATMENTS & SERVICES CATALOG"
        title="Comprehensive Dental Care Tailored to Your Long-Term Health"
        description="From routine 3D preventive hygiene to same-day CEREC crowns and clear aligner orthodontics, explore our transparently priced care offerings."
        primaryCta={
          <Button href="/book" variant="primary" size="lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-white" />
            Book a Treatment Consultation
          </Button>
        }
        secondaryCta={
          <Button href="/faq" variant="outline" size="lg">
            Payment &amp; Financial FAQs
          </Button>
        }
      />

      {/* 2. Full Services Catalog Grid */}
      <Section bg="canvas" className="py-16 md:py-24 border-b border-[#E7E2D8]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
              ALL SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
              Our Full Treatment Offerings
            </h2>
            <p className="font-sans text-base text-[#44403C] leading-relaxed">
              Click any service below for detailed treatment procedures, recovery expectations, financial guidance, and clinical FAQs.
            </p>
          </div>

          <CardGrid columns={{ mobile: 1, tablet: 2, desktop: 3 }}>
            {SERVICES_CATALOG.map((service: ServiceItem) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-[#E7E2D8] p-6 space-y-4 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-2.5 py-0.5 rounded border border-[#E7E2D8] inline-block">
                    {service.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#44403C] leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="pt-2 border-t border-[#E7E2D8] space-y-1">
                    <span className="font-bold text-[#0D3B36] uppercase tracking-wider text-[11px] block">
                      Clinical Focus &amp; Pricing Guidance:
                    </span>
                    <p className="text-xs font-medium text-[#1C1917]">{service.pricingGuidance}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E7E2D8]">
                  <Button
                    href={`/services/${service.slug}`}
                    variant="outline"
                    size="sm"
                    className="w-full justify-between group"
                  >
                    <span>View Treatment Details</span>
                    <ChevronRightIcon className="w-4 h-4 text-[#0D3B36] group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </CardGrid>
        </Container>
      </Section>

      {/* 3. Financial Transparency Standard Panel */}
      <Section bg="linen" className="py-16 md:py-24 border-b border-[#E7E2D8]">
        <Container className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-white px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
              Financial Transparency Standard
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1C1917]">
              No Surprise Billing or Hidden Costs
            </h2>
            <p className="text-base text-[#44403C] leading-relaxed max-w-2xl mx-auto">
              We provide itemized written estimates before treatment begins and supply official claim documentation for private insurance reimbursement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#1C1917]">
            <div className="bg-white p-6 rounded-xl border border-[#E7E2D8] space-y-2">
              <ShieldCheckIcon className="w-6 h-6 text-[#0D3B36]" />
              <h3 className="font-bold text-sm">Insurance Claim Papers</h3>
              <p className="text-[#78716C] leading-relaxed">
                Itemized bills provided for private health/dental insurance reimbursement claims.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E7E2D8] space-y-2">
              <ShieldCheckIcon className="w-6 h-6 text-[#0D3B36]" />
              <h3 className="font-bold text-sm">Upfront Written Estimates</h3>
              <p className="text-[#78716C] leading-relaxed">
                Every fee and cost breakdown explained clearly before care starts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E7E2D8] space-y-2">
              <ShieldCheckIcon className="w-6 h-6 text-[#0D3B36]" />
              <h3 className="font-bold text-sm">Flexible Installment Options</h3>
              <p className="text-[#78716C] leading-relaxed">
                Structured monthly payment plans for major cosmetic and restorative treatments.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Closing Conversion Banner */}
      <CtaBanner
        eyebrow="Not Sure Which Treatment You Need?"
        title="Schedule a 3D digital assessment consultation"
        description="Dr. Rostova will review your 3D digital scan with you side-by-side to recommend personalized options."
        primaryCta={
          <Button href="/book" variant="gold" size="lg" className="shadow-lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-[#1C1917]" />
            Book Consultation Online
          </Button>
        }
        secondaryCta={
          <Button href="/contact" variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 hover:border-white">
            Contact Office Concierge
          </Button>
        }
      />
    </div>
  );
}
