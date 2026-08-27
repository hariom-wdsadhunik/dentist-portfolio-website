"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Patient Experience", href: "/experience" },
  { label: "Stories & Reviews", href: "/testimonials" },
  { label: "FAQs & Pricing", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  // Close drawer on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Close drawer on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-drawer-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1C1917]/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Body */}
      <div className="relative ml-auto w-full max-w-xs bg-[#FBF9F5] h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E7E2D8]">
          <span
            id="mobile-drawer-title"
            className="font-serif text-lg font-bold tracking-tight text-[#1C1917]"
          >
            AURA DENTAL STUDIO
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-[#44403C] hover:text-[#1C1917] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D3B36]"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-6 py-6 space-y-1 flex-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-3 rounded-md text-base font-semibold transition-colors ${
                  isActive
                    ? "bg-[#F4F0E8] text-[#0D3B36]"
                    : "text-[#1C1917] hover:bg-[#F4F0E8] hover:text-[#0D3B36]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Info & Booking CTA */}
        <div className="p-6 border-t border-[#E7E2D8] bg-[#F4F0E8] space-y-4">
          <div className="space-y-2 text-xs text-[#44403C]">
            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-4 h-4 text-[#0D3B36]" />
              <span>410 Congress Ave, Suite 200, Austin, TX</span>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-4 h-4 text-[#0D3B36]" />
              <span>Mon-Fri: 7:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-4 h-4 text-[#0D3B36]" />
              <a href="tel:5125550199" className="hover:underline font-medium">
                (512) 555-0199
              </a>
            </div>
          </div>

          <Button href="/book" variant="primary" className="w-full justify-center">
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
