import React from "react";
import HeroSection from "@/sections/home/HeroSection";
import TrustSection from "@/sections/home/TrustSection";
import ServicesSection from "@/sections/home/ServicesSection";
import DentistSection from "@/sections/home/DentistSection";
import ExperienceSection from "@/sections/home/ExperienceSection";
import FirstVisitSection from "@/sections/home/FirstVisitSection";
import TestimonialsSection from "@/sections/home/TestimonialsSection";
import LocationSection from "@/sections/home/LocationSection";
import FinalCtaSection from "@/sections/home/FinalCtaSection";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Immediate Trust Bar */}
      <TrustSection />

      {/* 3. Core Services Showcase */}
      <ServicesSection />

      {/* 4. Dentist & Philosophy Spotlight */}
      <DentistSection />

      {/* 5. Patient Experience & Comfort Feature */}
      <ExperienceSection />

      {/* 6. "Your First Visit" 3-Step Walkthrough */}
      <FirstVisitSection />

      {/* 7. Patient Stories & Testimonials Carousel */}
      <TestimonialsSection />

      {/* 8. Location, Hours & Parking Guide */}
      <LocationSection />

      {/* 9. Final Conversion Banner */}
      <FinalCtaSection />
    </div>
  );
}
