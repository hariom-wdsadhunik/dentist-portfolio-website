import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import CtaBanner from "@/components/shared/CtaBanner";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ChevronRightIcon, CalendarIcon, ShieldCheckIcon } from "@/components/ui/Icons";
import { SERVICES_CATALOG, ServiceItem } from "@/lib/servicesData";

export const metadata: Metadata = {
  title: "Services Catalog | Aura Dental Studio Austin",
  description:
    "Explore comprehensive dental services at Aura Dental Studio in Downtown Austin: Preventive Hygiene, Clear Aligners, Same-Day CEREC Crowns, Whitening, Veneers & Emergency Triage.",
};

export default function ServicesPage() {
  const categories: Array<ServiceItem["category"]> = [
    "Preventive",
    "Cosmetic",
    "Restorative",
    "Emergency",
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="TREATMENT CATALOG"
        title="Comprehensive Dental Care Tailored to Your Lifestyle"
        description="From routine wellness hygiene to same-day CEREC crowns and clear aligner transformations, explore our transparent care offerings delivered with gentle precision."
        primaryCta={
          <Button href="/book" variant="primary" size="lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-white" />
            Book Service Appointment
          </Button>
        }
        secondaryCta={
          <Button href="/faq" variant="outline" size="lg">
            View Insurance &amp; Pricing FAQ
          </Button>
        }
      />

      {/* 2. Categorized Services Directory */}
      <Section bg="canvas" className="py-16 md:py-24 border-b border-[#E7E2D8]">
        <Container>
          <div className="space-y-16">
            {categories.map((category) => {
              const categoryServices = SERVICES_CATALOG.filter(
                (s) => s.category === category
              );
              if (categoryServices.length === 0) return null;

              return (
                <div key={category} className="space-y-8">
                  {/* Category Header */}
                  <div className="border-b border-[#E7E2D8] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-3 py-1 rounded-full border border-[#E7E2D8]">
                        {category} Care Catalog
                      </span>
                      <h2 className="font-serif text-3xl font-bold text-[#1C1917] mt-2">
                        {category === "Preventive" && "Wellness Hygiene & Preventive Maintenance"}
                        {category === "Cosmetic" && "Cosmetic Aesthetics & Smile Design"}
                        {category === "Restorative" && "Restorative Precision & Digital Dentistry"}
                        {category === "Emergency" && "Same-Day Urgent Emergency Triage"}
                      </h2>
                    </div>
                    <span className="text-xs text-[#78716C]">
                      {categoryServices.length} Treatments Available
                    </span>
                  </div>

                  {/* Category Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categoryServices.map((service) => (
                      <div
                        key={service.id}
                        className="group bg-white rounded-xl border border-[#E7E2D8] p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md hover:border-[#0D3B36]/30 transition-all duration-200"
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-2.5 py-1 rounded border border-[#E7E2D8]">
                              {service.categoryBadge}
                            </span>
                            {service.featured && (
                              <span className="text-xs font-medium text-[#D4A373] bg-[#0D3B36] px-2.5 py-0.5 rounded-full">
                                Popular Treatment
                              </span>
                            )}
                          </div>

                          <h3 className="font-serif text-2xl font-bold text-[#1C1917] group-hover:text-[#0D3B36] transition-colors">
                            {service.name}
                          </h3>

                          <p className="text-sm text-[#44403C] leading-relaxed">
                            {service.shortDescription}
                          </p>

                          <div className="bg-[#FBF9F5] p-3.5 rounded-lg border border-[#E7E2D8] text-xs space-y-1">
                            <span className="font-semibold text-[#0D3B36] block">
                              Key Patient Benefit:
                            </span>
                            <p className="text-[#44403C]">{service.patientBenefit}</p>
                          </div>
                        </div>

                        <div className="pt-6 border-t border-[#E7E2D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                          <div className="space-y-0.5">
                            <span className="font-bold text-[#1C1917] block">
                              Pricing Guidance:
                            </span>
                            <span className="text-[#78716C]">{service.pricingGuidance}</span>
                          </div>

                          <Button href={service.route} variant="ghost" size="sm" className="shrink-0 group-hover:translate-x-1">
                            Details <ChevronRightIcon className="ml-1 w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3. Fee Transparency Guidance Panel */}
      <Section bg="linen" className="py-16 md:py-24 border-b border-[#E7E2D8]">
        <Container className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-white px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
              Financial Transparency Guarantee
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
              No Hidden Fees, No Surprise Bills
            </h2>
            <p className="text-base text-[#44403C] leading-relaxed max-w-2xl mx-auto">
              We provide a full, written co-care estimate with transparent fee breakdowns before any procedure begins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#1C1917]">
            <div className="bg-white p-6 rounded-xl border border-[#E7E2D8] space-y-2">
              <ShieldCheckIcon className="w-6 h-6 text-[#0D3B36]" />
              <h4 className="font-bold text-sm">PPO Insurance Accepted</h4>
              <p className="text-[#78716C] leading-relaxed">
                We accept most major dental PPO plans and file claims directly on your behalf to maximize your benefits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E7E2D8] space-y-2">
              <ShieldCheckIcon className="w-6 h-6 text-[#0D3B36]" />
              <h4 className="font-bold text-sm">Transparent Upfront Pricing</h4>
              <p className="text-[#78716C] leading-relaxed">
                Receive an itemized breakdown of your co-pay and out-of-pocket costs before treatment starts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E7E2D8] space-y-2">
              <ShieldCheckIcon className="w-6 h-6 text-[#0D3B36]" />
              <h4 className="font-bold text-sm">Flexible Monthly Options</h4>
              <p className="text-[#78716C] leading-relaxed">
                Interest-free monthly payment plans available for cosmetic aligners, veneers, and full restorations.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Closing Conversion CTA Banner */}
      <CtaBanner
        eyebrow="Explore Transparent Dental Care"
        title="Find the treatment that fits your smile goals"
        description="Book your comprehensive introductory consultation online or speak directly with our clinical coordinator."
        primaryCta={
          <Button href="/book" variant="gold" size="lg" className="shadow-lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-[#1C1917]" />
            Book Treatment Assessment
          </Button>
        }
        secondaryCta={
          <Button href="/about" variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 hover:border-white">
            Meet Our Care Team <ChevronRightIcon className="ml-1 w-4 h-4" />
          </Button>
        }
      />
    </div>
  );
}
