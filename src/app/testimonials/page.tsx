import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import EditorialSplit from "@/components/shared/EditorialSplit";
import CtaBanner from "@/components/shared/CtaBanner";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { StarIcon, CalendarIcon, QuoteIcon, ChevronRightIcon } from "@/components/ui/Icons";
import { TESTIMONIALS_DATA } from "@/lib/testimonialData";

export const metadata: Metadata = {
  title: "Patient Stories & Reviews | Aura Dental Studio Mumbai",
  description:
    "Explore patient stories and portfolio demonstration reviews for Aura Dental Studio in Bandra West, Mumbai. Discover why patients appreciate gentle, transparent, 3D digital dental care.",
};

export default function TestimonialsPage() {
  const featuredStory = TESTIMONIALS_DATA.find((t) => t.featured) || TESTIMONIALS_DATA[0];
  const gridStories = TESTIMONIALS_DATA.filter((t) => t.id !== featuredStory.id);

  return (
    <div className="flex-1 flex flex-col">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="PATIENT EXPERIENCES & STORIES"
        title="Real Experiences from Mumbai Community Members"
        description="Discover how transparent co-care planning, gentle 3D digital precision, and calming studio amenities shape the patient experience at Aura Dental Studio."
        primaryCta={
          <Button href="/book" variant="primary" size="lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-white" />
            Start Your Smile Journey
          </Button>
        }
        secondaryCta={
          <Button href="/experience" variant="outline" size="lg">
            Explore Comfort Amenities
          </Button>
        }
      />

      {/* 2. Portfolio Demo Disclosure Notice */}
      <Section bg="linen" className="py-6 border-b border-[#E7E2D8]">
        <Container className="text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-[#78716C]">
            <span className="font-semibold text-[#0D3B36]">Portfolio Showcase Notice:</span>
            <span>Testimonial quotes below represent illustrative patient scenarios designed for portfolio demonstration.</span>
          </div>
        </Container>
      </Section>

      {/* 3. Featured Patient Transformation Story */}
      <EditorialSplit
        eyebrow="FEATURED PATIENT STORY"
        title={`"${featuredStory.quote}"`}
        imageSide="left"
        bg="canvas"
        imageNode={
          <div className="relative rounded-2xl overflow-hidden bg-[#F4F0E8] border-2 border-[#E7E2D8] p-3 shadow-lg">
            <div className="bg-[#0D3B36] rounded-xl p-8 min-h-[380px] flex flex-col justify-between text-white">
              <div className="space-y-3">
                <div className="flex items-center space-x-1 text-[#D4A373]">
                  {[...Array(featuredStory.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4A373] bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block">
                  {featuredStory.treatment}
                </span>
                <h3 className="font-serif text-2xl font-bold">{featuredStory.displayName}</h3>
                <p className="text-xs text-[#E7E2D8]/80">{featuredStory.location}</p>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-[#E7E2D8]/70">
                {featuredStory.demoLabel}
              </div>
            </div>
          </div>
        }
        body={
          <>
            <p className="text-base text-[#1C1917] leading-relaxed font-medium">
              {featuredStory.context}
            </p>
            <p className="text-sm text-[#44403C] leading-relaxed">
              Dr. Rostova and the team focus on helping patients feel relaxed, informed, and completely in control of their care trajectory.
            </p>
          </>
        }
        cta={
          <Button href="/services/clear-aligners" variant="outline" size="md">
            Learn About Clear Aligners <ChevronRightIcon className="ml-1 w-4 h-4" />
          </Button>
        }
      />

      {/* 4. Patient Stories Grid */}
      <Section bg="white" className="py-16 md:py-24 border-b border-[#E7E2D8]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
              More Patient Feedback
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
              Stories Across All Care Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gridStories.map((item) => (
              <div
                key={item.id}
                className="relative bg-[#FBF9F5] rounded-xl border border-[#E7E2D8] p-8 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <QuoteIcon className="absolute top-6 right-6 w-8 h-8 text-[#D4A373]/20" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center space-x-1 text-[#D4A373]">
                    {[...Array(item.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="font-serif text-base text-[#1C1917] italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E2D8] text-xs relative z-10 space-y-1">
                  <p className="font-bold text-[#1C1917]">{item.displayName}</p>
                  <p className="text-[#78716C]">{item.location} • <span className="text-[#0D3B36] font-medium">{item.treatment}</span></p>
                  <span className="text-[11px] text-[#78716C]/70 block italic">{item.demoLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Closing Conversion Banner */}
      <CtaBanner
        eyebrow="Join Our Patient Community"
        title="Experience dental care designed around you"
        description="Book your comprehensive 3D digital assessment online or speak directly with our office concierge team."
        primaryCta={
          <Button href="/book" variant="gold" size="lg" className="shadow-lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-[#1C1917]" />
            Book Your Appointment Online
          </Button>
        }
        secondaryCta={
          <Button href="/services" variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 hover:border-white">
            View All Services Catalog
          </Button>
        }
      />
    </div>
  );
}
