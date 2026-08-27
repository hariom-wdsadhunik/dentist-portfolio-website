import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { ChevronRightIcon, ShieldCheckIcon } from "@/components/ui/Icons";

export const DentistSection: React.FC = () => {
  return (
    <Section bg="canvas" className="py-16 md:py-24 border-b border-[#E7E2D8]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Visual Placeholder */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-[#F4F0E8] border-2 border-[#E7E2D8] p-3 shadow-lg">
              <div className="bg-gradient-to-t from-[#1C1917] via-[#0D3B36] to-[#082824] rounded-xl p-8 min-h-[420px] flex flex-col justify-end text-white">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4A373] bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block">
                    Founder &amp; Lead Dentist
                  </span>
                  <h3 className="font-serif text-3xl font-bold">
                    Dr. Elena Rostova, DDS, FAGD
                  </h3>
                  <p className="text-xs text-[#E7E2D8]/80">
                    15+ Years Practicing Patient-Centered Dentistry in Austin, TX
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-3 py-1 rounded-full border border-[#E7E2D8]">
                Clinical Leadership &amp; Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
                Gentle Care Led by Experience and Empathy
              </h2>
            </div>

            <blockquote className="font-serif text-xl text-[#0D3B36] italic border-l-4 border-[#D4A373] pl-4 py-1">
              &ldquo;Dental visits should never feel intimidating or rushed. We take the time to listen, explain every option side-by-side, and ensure you are in complete control of your oral health.&rdquo;
            </blockquote>

            <p className="text-base text-[#44403C] leading-relaxed">
              Dr. Rostova holds a Fellowship with the Academy of General Dentistry (FAGD)—an honor earned by less than 6% of general dentists nationwide. Her practice focuses on conservative, pain-free techniques and transparent care plans.
            </p>

            {/* Credentials Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2.5 p-3 rounded-lg bg-white border border-[#E7E2D8] text-xs text-[#1C1917]">
                <ShieldCheckIcon className="w-5 h-5 text-[#0D3B36] shrink-0" />
                <span>Fellow, Academy of General Dentistry (FAGD)</span>
              </div>
              <div className="flex items-center space-x-2.5 p-3 rounded-lg bg-white border border-[#E7E2D8] text-xs text-[#1C1917]">
                <ShieldCheckIcon className="w-5 h-5 text-[#0D3B36] shrink-0" />
                <span>DDS, UT Health Science Center</span>
              </div>
            </div>

            <div className="pt-4">
              <Button href="/about" variant="outline" size="md">
                Meet Dr. Rostova &amp; Our Team <ChevronRightIcon className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default DentistSection;
