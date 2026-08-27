import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/shared/PageHeader";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import EditorialSplit from "@/components/shared/EditorialSplit";
import ProcessSteps from "@/components/shared/ProcessSteps";
import MetadataRow from "@/components/shared/MetadataRow";
import FaqAccordion from "@/components/shared/FaqAccordion";
import RelatedServices from "@/components/shared/RelatedServices";
import CtaBanner from "@/components/shared/CtaBanner";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CalendarIcon, ShieldCheckIcon, PhoneIcon } from "@/components/ui/Icons";
import {
  SERVICES_CATALOG,
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/lib/servicesData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Static Generation Slugs
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

// 2. SEO Metadata Generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Treatment Not Found | Aura Dental Studio Mumbai",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

// 3. Main Detail Component
export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Get related service objects
  const relatedServiceObjects = SERVICES_CATALOG.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  const isEmergency = service.category === "Emergency";

  return (
    <div className="flex-1 flex flex-col">
      {/* 1. Page Header with Breadcrumbs */}
      <PageHeader
        breadcrumbs={
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.name },
            ]}
          />
        }
        eyebrow={`${service.category.toUpperCase()} CARE`}
        title={service.name}
        description={service.heroIntro}
        primaryCta={
          isEmergency ? (
            <Button href="tel:+919876543210" variant="primary" size="lg">
              <PhoneIcon className="w-5 h-5 mr-2 text-white" />
              Call Triage Line +91 98765 43210
            </Button>
          ) : (
            <Button href="/book" variant="primary" size="lg">
              <CalendarIcon className="w-5 h-5 mr-2 text-white" />
              Book {service.name} Assessment
            </Button>
          )
        }
        secondaryCta={
          <Button href="/services" variant="outline" size="lg">
            Back to Services Catalog
          </Button>
        }
      />

      {/* 2. Overview & Problem Context */}
      <EditorialSplit
        eyebrow="TREATMENT OVERVIEW"
        title={`Understanding ${service.name}`}
        imageSide="left"
        imageNode={
          <div className="relative rounded-2xl overflow-hidden bg-[#F4F0E8] border-2 border-[#E7E2D8] p-3 shadow-lg">
            <div className="bg-[#0D3B36] rounded-xl p-8 min-h-[380px] flex flex-col justify-between text-white">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4A373] bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block">
                  {service.categoryBadge}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold">
                  {service.name}
                </h3>
                <p className="text-xs text-[#E7E2D8]/80 leading-relaxed">
                  Delivered with 3D digital precision and soothing studio comfort amenities in Bandra West, Mumbai.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-[#E7E2D8]/70">
                ✓ 100% Upfront Pricing • No Surprise Fees
              </div>
            </div>
          </div>
        }
        body={
          <>
            <p className="font-medium text-[#1C1917] text-lg">
              {service.patientProblem}
            </p>
            <p>{service.overview}</p>
          </>
        }
      />

      {/* 3. Key Patient Benefits */}
      <Section bg="linen" className="py-16 md:py-24 border-b border-[#E7E2D8]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-white px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
              Key Patient Advantages
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
              Why Patients Choose Aura Dental Studio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-[#E7E2D8] space-y-2 flex items-start space-x-3"
              >
                <ShieldCheckIcon className="w-5 h-5 text-[#0D3B36] shrink-0 mt-0.5" />
                <p className="text-sm text-[#1C1917] font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Treatment Process (If available) */}
      {service.processSteps && service.processSteps.length > 0 && (
        <ProcessSteps
          eyebrow="PROCEDURE STEPS"
          title={`Your ${service.name} Journey`}
          description="A clear, predictable step-by-step walkthrough of what happens during your treatment."
          steps={service.processSteps}
          bg="white"
        />
      )}

      {/* 5. Suitability & Practical Information */}
      <Section bg="canvas" className="py-16 md:py-24 border-b border-[#E7E2D8]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Suitability Guidelines */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
                  Candidacy &amp; Considerations
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#1C1917]">
                  When This Treatment May Be Recommended
                </h3>
              </div>

              <div className="space-y-3">
                {service.suitability.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 rounded-xl bg-white border border-[#E7E2D8] text-sm text-[#44403C]"
                  >
                    <span className="text-[#0D3B36] font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#78716C] italic">
                * Final treatment suitability is determined during a personal 3D intraoral clinical evaluation with Dr. Rostova.
              </p>
            </div>

            {/* Right: Practical Specifications */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
                  Practical Information
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#1C1917]">
                  Treatment Details at a Glance
                </h3>
              </div>

              <MetadataRow items={service.practicalInfo} />
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. Service FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <Section bg="white" className="py-16 md:py-24 border-b border-[#E7E2D8]">
          <Container className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
                Common Questions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
                Frequently Asked Questions About {service.name}
              </h2>
            </div>

            <FaqAccordion items={service.faqs} />
          </Container>
        </Section>
      )}

      {/* 7. Related Services Section */}
      {relatedServiceObjects.length > 0 && (
        <Section bg="linen" className="py-16 md:py-24 border-b border-[#E7E2D8]">
          <Container>
            <RelatedServices services={relatedServiceObjects} />
          </Container>
        </Section>
      )}

      {/* 8. Closing Conversion CTA Banner */}
      <CtaBanner
        eyebrow={`Schedule Your ${service.name}`}
        title={`Ready to discuss ${service.name}?`}
        description="Book your comprehensive 3D digital assessment online or contact our office concierge team."
        primaryCta={
          isEmergency ? (
            <Button href="tel:+919876543210" variant="gold" size="lg" className="shadow-lg">
              <PhoneIcon className="w-5 h-5 mr-2 text-[#1C1917]" />
              Call Triage Line +91 98765 43210
            </Button>
          ) : (
            <Button href="/book" variant="gold" size="lg" className="shadow-lg">
              <CalendarIcon className="w-5 h-5 mr-2 text-[#1C1917]" />
              Book Appointment Online
            </Button>
          )
        }
        secondaryCta={
          <Button
            href="/services"
            variant="outline"
            size="lg"
            className="text-white border-white/30 hover:bg-white/10 hover:border-white"
          >
            Explore Full Services Catalog
          </Button>
        }
      />
    </div>
  );
}
