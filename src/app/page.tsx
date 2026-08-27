import React from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col justify-center">
      <Section bg="canvas" className="py-16 md:py-24">
        <Container className="text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F4F0E8] border border-[#E7E2D8] text-xs font-semibold text-[#0D3B36] uppercase tracking-wider">
            <span>Phase 5 — Frontend Foundation & Global Shell</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] leading-tight">
            Aura Dental Studio
          </h1>

          <p className="text-base sm:text-lg text-[#44403C] leading-relaxed max-w-2xl mx-auto">
            The frontend foundation and global application shell have been established.
            Typography (<em>Cormorant Garamond</em> &amp; <em>Plus Jakarta Sans</em>), design tokens, responsive layout grid, site header, mobile navigation drawer, global footer, and mobile action bar are active.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button href="/book" variant="primary" size="lg">
              Test Booking Action
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Services Catalog
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
}
