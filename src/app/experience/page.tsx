import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import EditorialSplit from "@/components/shared/EditorialSplit";
import ProcessSteps from "@/components/shared/ProcessSteps";
import CtaBanner from "@/components/shared/CtaBanner";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  CalendarIcon,
  ChevronRightIcon,
  HeadphonesIcon,
  WavesIcon,
  SunIcon,
  HeartIcon,
  ShieldCheckIcon,
} from "@/components/ui/Icons";
import { COMFORT_AMENITIES, FIRST_VISIT_STEPS } from "@/lib/homepageData";

export const metadata: Metadata = {
  title: "The Patient Experience & Comfort Care | Aura Dental Studio Austin",
  description:
    "Discover how Aura Dental Studio eliminates dental anxiety with soothing amenities (Bose headphones, warm towels, ergonomic chairs), 3D digital impressions, and transparent co-care planning.",
};

const iconMap = {
  headphones: <HeadphonesIcon className="w-6 h-6 text-[#0D3B36]" />,
  ultrasonic: <WavesIcon className="w-6 h-6 text-[#0D3B36]" />,
  towels: <SunIcon className="w-6 h-6 text-[#0D3B36]" />,
  blanket: <HeartIcon className="w-6 h-6 text-[#0D3B36]" />,
};

export default function ExperiencePage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="STRESS-FREE CARE EXPERIENCE"
        title="Designed to Eliminate Dental Anxiety & Provide Calm Clinical Excellence"
        description="We have reimagined every detail of the dental visit—from soothing studio amenities to 3D digital precision—so you feel calm, respected, and completely in control."
        primaryCta={
          <Button href="/book" variant="primary" size="lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-white" />
            Schedule a Gentle Visit
          </Button>
        }
        secondaryCta={
          <Button href="/about" variant="outline" size="lg">
            Meet Dr. Rostova &amp; Team
          </Button>
        }
      />

      {/* 2. Arrival Experience Narrative Split */}
      <EditorialSplit
        eyebrow="A BOUTIQUE ATMOSPHERE"
        title="A Calming Studio Designed to Feel Like a Sanctuary"
        imageSide="left"
        imageNode={
          <div className="relative rounded-2xl overflow-hidden bg-[#F4F0E8] border-2 border-[#E7E2D8] p-3 shadow-lg">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#0D3B36]">
              <Image
                src="/images/clinic-lounge-visual.svg"
                alt="Aura Dental Studio Reception Sanctuary Lounge in Downtown Austin"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        }
        body={
          <>
            <p>
              The moment you step into our studio, you will notice the difference. We replaced cold fluorescent lighting and sterile waiting rooms with warm wood tones, natural sunlight, subtle organic aromatherapy, and a peaceful lounge.
            </p>
            <p>
              We respect your busy schedule with a strict <strong>Zero-Wait Punctuality Standard</strong>. Your appointment starts on time, every time, allowing you to relax without feeling rushed.
            </p>
          </>
        }
        cta={
          <div className="flex items-center space-x-2.5 p-3 rounded-lg bg-white border border-[#E7E2D8] text-xs text-[#1C1917] inline-flex">
            <ShieldCheckIcon className="w-5 h-5 text-[#0D3B36] shrink-0" />
            <span>Zero-Wait Punctuality Standard</span>
          </div>
        }
      />

      {/* 3. Comfort Amenities Grid */}
      <Section bg="linen" className="py-16 md:py-24 border-b border-[#E7E2D8]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-white px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
              Comfort Menu
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
              Complimentary Comfort Care Amenities
            </h2>
            <p className="font-sans text-base text-[#44403C] leading-relaxed">
              Personalize your visit with your choice of soothing amenities designed to help you relax during treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMFORT_AMENITIES.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#E7E2D8] p-6 space-y-3.5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[#F4F0E8] flex items-center justify-center border border-[#E7E2D8]">
                  {iconMap[item.iconName]}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1917]">{item.title}</h3>
                <p className="text-xs text-[#44403C] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Digital Precision & Technology Split */}
      <EditorialSplit
        eyebrow="DIGITAL PRECISION"
        title="Modern 3D Imaging Without Gooey Impressions"
        imageSide="right"
        bg="white"
        imageNode={
          <div className="relative rounded-2xl overflow-hidden bg-[#FBF9F5] border-2 border-[#E7E2D8] p-3 shadow-lg">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#0D3B36]">
              <Image
                src="/images/digital-scan-visual.svg"
                alt="3D Intraoral Digital Scanning Technology at Aura Dental Studio"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        }
        body={
          <>
            <p>
              We have eliminated painful, gag-inducing impression putty from our practice. Instead, our high-definition 3D intraoral scanners capture tens of thousands of data points per second to generate a precise 3D model of your teeth.
            </p>
            <p>
              You can view your 3D digital model on a chairside screen side-by-side with Dr. Rostova. We point out areas of interest together, ensuring total transparency before deciding on any treatment.
            </p>
          </>
        }
      />

      {/* 5. First Visit Process Steps */}
      <ProcessSteps
        eyebrow="NEW PATIENT ONBOARDING"
        title="What to Expect During Your First Visit"
        description="No surprise fees, no painful putty, and zero judgment. Here is how your first appointment unfolds."
        steps={FIRST_VISIT_STEPS}
        bg="linen"
        cta={
          <Button href="/book" variant="primary" size="lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-white" />
            Schedule Your First Visit Online
          </Button>
        }
      />

      {/* 6. Closing Conversion CTA Banner */}
      <CtaBanner
        eyebrow="Experience Calming Oral Care"
        title="Ready for a stress-free dental appointment?"
        description="Book your introductory consultation online in under 60 seconds with instant calendar confirmation."
        primaryCta={
          <Button href="/book" variant="gold" size="lg" className="shadow-lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-[#1C1917]" />
            Book Your Visit Online
          </Button>
        }
        secondaryCta={
          <Button href="/services" variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 hover:border-white">
            Explore Services Catalog <ChevronRightIcon className="ml-1 w-4 h-4" />
          </Button>
        }
      />
    </div>
  );
}
