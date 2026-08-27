import React from "react";
import Link from "next/link";
import { PhoneIcon, MapPinIcon, ClockIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D3B36] text-white pt-16 pb-24 lg:pb-12 border-t border-[#082824]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Column 1: Brand & Fictional Portfolio Disclaimer */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                AURA DENTAL STUDIO
              </span>
            </Link>
            <p className="text-sm text-[#E7E2D8]/80 leading-relaxed">
              Modern, gentle dentistry designed around your comfort, schedule, and confidence in Downtown Austin.
            </p>
            <div className="pt-2 text-xs text-[#D4A373] bg-[#082824] p-3 rounded-md border border-[#082824]">
              <strong>Note:</strong> Aura Dental Studio is a fictional demo portfolio project built for web engineering and design showcase purposes.
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-[#E7E2D8]/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About & Our Team</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services Catalog</Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-white transition-colors">Patient Comfort Care</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors">Stories & Reviews</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">FAQs & Pricing</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Location & Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Treatment Catalog */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Treatments
            </h3>
            <ul className="space-y-2.5 text-sm text-[#E7E2D8]/80">
              <li>
                <Link href="/services/preventive-hygiene" className="hover:text-white transition-colors">
                  Exams & Wellness Cleanings
                </Link>
              </li>
              <li>
                <Link href="/services/clear-aligners" className="hover:text-white transition-colors">
                  Clear Aligner Orthodontics
                </Link>
              </li>
              <li>
                <Link href="/services/teeth-whitening" className="hover:text-white transition-colors">
                  Professional Teeth Whitening
                </Link>
              </li>
              <li>
                <Link href="/services/porcelain-veneers" className="hover:text-white transition-colors">
                  Custom Porcelain Veneers
                </Link>
              </li>
              <li>
                <Link href="/services/same-day-crowns" className="hover:text-white transition-colors">
                  Same-Day Ceramic Crowns
                </Link>
              </li>
              <li>
                <Link href="/services/dental-implants" className="hover:text-white transition-colors">
                  Dental Implants Restoration
                </Link>
              </li>
              <li>
                <Link href="/services/emergency-care" className="hover:text-white transition-colors">
                  Emergency Dental Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Contact & Hours
            </h3>
            <div className="space-y-3 text-sm text-[#E7E2D8]/80">
              <div className="flex items-start space-x-2.5">
                <MapPinIcon className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" />
                <span>410 Congress Ave, Suite 200, Austin, TX 78701</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <PhoneIcon className="w-5 h-5 text-[#D4A373] shrink-0" />
                <a href="tel:5125550199" className="hover:text-white font-medium">
                  (512) 555-0199
                </a>
              </div>
              <div className="flex items-start space-x-2.5">
                <ClockIcon className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Fri: 7:00 AM - 6:00 PM</p>
                  <p className="text-xs text-[#E7E2D8]/60 mt-0.5">Sat: By Appointment | Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/book" variant="gold" size="sm" className="w-full justify-center">
                Book Appointment Online
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-8 border-t border-[#082824] flex flex-col md:flex-row items-center justify-between text-xs text-[#E7E2D8]/60 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Aura Dental Studio. Fictional Demo Portfolio Website.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Accessibility Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
