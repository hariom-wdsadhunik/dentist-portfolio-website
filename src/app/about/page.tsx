import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import EditorialSplit from "@/components/shared/EditorialSplit";
import CtaBanner from "@/components/shared/CtaBanner";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CalendarIcon, ShieldCheckIcon, ChevronRightIcon } from "@/components/ui/Icons";
import { TEAM_MEMBERS, CLINICAL_STANDARDS } from "@/lib/teamData";

export const metadata: Metadata = {
  title: "About Dr. Elena Rostova & Team | Aura Dental Studio Austin",
  description:
    "Meet Dr. Elena Rostova, DDS, FAGD, and the experienced team at Aura Dental Studio in Downtown Austin. Discover our conservative, patient-centered care philosophy.",
};

export default function AboutPage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* 1. Page Header */}
      <PageHeader
        eyebrow="OUR DENTISTS & PHILOSOPHY"
        title="Experienced, Compassionate Care Led by Clinical Excellence"
        description="Founded by Dr. Elena Rostova, DDS, FAGD, Aura Dental Studio combines high-end 3D digital precision with warm, anxiety-reducing care in Downtown Austin."
        primaryCta={
          <Button href="/book" variant="primary" size="lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-white" />
            Schedule Visit with Dr. Rostova
          </Button>
        }
        secondaryCta={
          <Button href="/services" variant="outline" size="lg">
            Explore Treatment Catalog
          </Button>
        }
      />

      {/* 2. Practitioner Story Editorial Split */}
      <EditorialSplit
        eyebrow="CLINICAL LEADERSHIP STORY"
        title="Reimagining Dental Visits Around Patient Autonomy & Comfort"
        imageSide="left"
        imageNode={
          <div className="relative rounded-2xl overflow-hidden bg-[#F4F0E8] border-2 border-[#E7E2D8] p-3 shadow-lg">
            <div className="bg-gradient-to-t from-[#1C1917] via-[#0D3B36] to-[#082824] rounded-xl p-8 min-h-[420px] flex flex-col justify-end text-white">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4A373] bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block">
                  Founder &amp; Lead Dentist
                </span>
                <h3 className="font-serif text-3xl font-bold">Dr. Elena Rostova, DDS, FAGD</h3>
                <p className="text-xs text-[#E7E2D8]/80">
                  Fellow, Academy of General Dentistry • 15+ Years Practicing in Austin
                </p>
              </div>
            </div>
          </div>
        }
        body={
          <>
            <blockquote className="font-serif text-xl text-[#0D3B36] italic border-l-4 border-[#D4A373] pl-4 py-1 my-2">
              &ldquo;Dental care should never feel rushed, intimidating, or transactional. We take the time to listen, explain high-definition 3D scans side-by-side, and ensure you remain in 100% control of your care plan.&rdquo;
            </blockquote>
            <p>
              Dr. Rostova earned her Doctor of Dental Surgery degree from the UT Health Science Center and went on to complete over 500 hours of advanced continuing clinical education to earn her Fellowship with the Academy of General Dentistry (FAGD)—an honor achieved by fewer than 6% of general dentists nationwide.
            </p>
            <p>
              Her practice focuses on conservative enamel preservation, same-day ceramic restorations, and creating a calming environment where patient anxiety is met with empathy and respect.
            </p>
          </>
        }
        cta={
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center space-x-2.5 p-3 rounded-lg bg-white border border-[#E7E2D8] text-xs text-[#1C1917]">
              <ShieldCheckIcon className="w-5 h-5 text-[#0D3B36] shrink-0" />
              <span>Fellow, Academy of General Dentistry (FAGD)</span>
            </div>
            <div className="flex items-center space-x-2.5 p-3 rounded-lg bg-white border border-[#E7E2D8] text-xs text-[#1C1917]">
              <ShieldCheckIcon className="w-5 h-5 text-[#0D3B36] shrink-0" />
              <span>DDS, UT Health Science Center</span>
            </div>
          </div>
        }
      />

      {/* 3. Clinical Philosophy & Care Standards */}
      <Section bg="linen" className="py-16 md:py-24 border-b border-[#E7E2D8]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-white px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
              Clinical Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
              Our 4 Pillars of Responsible Dentistry
            </h2>
            <p className="font-sans text-base text-[#44403C] leading-relaxed">
              Every procedure at Aura Dental Studio is guided by strict clinical principles designed to protect your long-term health and financial peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CLINICAL_STANDARDS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-white rounded-xl border border-[#E7E2D8] p-8 space-y-3 shadow-sm hover:border-[#0D3B36]/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#F4F0E8] text-[#0D3B36] flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1C1917]">{pillar.title}</h3>
                <p className="text-sm text-[#44403C] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Practitioner Team Grid */}
      <Section bg="white" className="py-16 md:py-24 border-b border-[#E7E2D8]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
              Clinical Team Profiles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
              Meet Your Care Team
            </h2>
            <p className="font-sans text-base text-[#44403C] leading-relaxed">
              Dedicated professionals committed to making every visit seamless, comfortable, and tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-[#FBF9F5] rounded-xl border border-[#E7E2D8] p-8 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase text-[#D4A373] bg-[#0D3B36] px-2.5 py-0.5 rounded-full inline-block">
                      {member.role}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#1C1917]">{member.name}</h3>
                    <p className="text-xs text-[#78716C]">{member.credentials}</p>
                  </div>
                  <p className="text-xs text-[#44403C] leading-relaxed">{member.bio}</p>
                </div>

                <div className="pt-4 border-t border-[#E7E2D8] space-y-2">
                  <span className="text-[11px] font-bold text-[#0D3B36] uppercase tracking-wider block">
                    Clinical Focus &amp; Specialties:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-white border border-[#E7E2D8] px-2 py-0.5 rounded text-[#44403C]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Closing Conversion CTA Banner */}
      <CtaBanner
        eyebrow="Experience Patient-Centered Care"
        title="Ready to meet Dr. Rostova and our team?"
        description="Schedule your comprehensive introductory consultation online or speak directly with our office concierge team."
        primaryCta={
          <Button href="/book" variant="gold" size="lg" className="shadow-lg">
            <CalendarIcon className="w-5 h-5 mr-2 text-[#1C1917]" />
            Schedule Your Visit Online
          </Button>
        }
        secondaryCta={
          <Button href="/experience" variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 hover:border-white">
            Explore Comfort Amenities <ChevronRightIcon className="ml-1 w-4 h-4" />
          </Button>
        }
      />
    </div>
  );
}
