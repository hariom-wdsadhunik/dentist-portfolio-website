'use client';

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneIcon, MapPinIcon, ClockIcon, MenuIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";
import MobileDrawer from "./MobileDrawer";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Reviews", href: "/testimonials" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleOpenMobileMenu = useCallback(() => {
    setMobileMenuOpen(true);
  }, []);

  const handleCloseMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E7E2D8] transition-all">
      {/* Utility Top Bar (Desktop Only) */}
      <div className="hidden lg:block bg-[#F4F0E8] border-b border-[#E7E2D8] text-xs text-[#44403C] py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1.5">
              <MapPinIcon className="w-3.5 h-3.5 text-[#0D3B36]" />
              <span>204, Sea View House, Bandra West, Mumbai 400050</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ClockIcon className="w-3.5 h-3.5 text-[#0D3B36]" />
              <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-1.5">
            <PhoneIcon className="w-3.5 h-3.5 text-[#0D3B36]" />
            <span className="font-semibold text-[#1C1917]">Emergency Triage:</span>
            <a href="tel:+919876543210" className="hover:text-[#0D3B36] font-medium transition-colors">
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 lg:h-20 flex items-center justify-between gap-2">
        {/* Brand Wordmark / Logo */}
        <Link href="/" className="flex items-center space-x-2 group focus-visible:outline-none min-w-0">
          <span className="font-serif text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-[#1C1917] group-hover:text-[#0D3B36] transition-colors truncate">
            AURA DENTAL STUDIO
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors py-1 ${
                  isActive
                    ? "text-[#0D3B36] border-b-2 border-[#0D3B36]"
                    : "text-[#44403C] hover:text-[#0D3B36]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action & Mobile Trigger */}
        <div className="flex items-center space-x-2 shrink-0">
          {/* Direct Call Button (Mobile) */}
          <a
            href="tel:+919876543210"
            aria-label="Call clinic"
            className="lg:hidden p-2.5 text-[#0D3B36] hover:bg-[#F4F0E8] rounded-md transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <PhoneIcon className="w-5 h-5" />
          </a>

          {/* Desktop Header CTA */}
          <div className="hidden lg:block">
            <Button href="/book" variant="primary" size="md">
              Book Online
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={handleOpenMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Open navigation menu"
            className="lg:hidden p-2.5 text-[#1C1917] hover:text-[#0D3B36] active:bg-[#F4F0E8] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D3B36] min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer relative z-10"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Component */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={handleCloseMobileMenu}
      />
    </header>
  );
};

export default Header;
