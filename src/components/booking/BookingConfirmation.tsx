import React from "react";
import Button from "@/components/ui/Button";
import { ServiceItem } from "@/lib/servicesData";
import { ShieldCheckIcon, CalendarIcon } from "@/components/ui/Icons";

export interface BookingConfirmationProps {
  service?: ServiceItem;
  patientType: "new" | "returning";
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  referenceNumber: string;
  onRestart: () => void;
}

export const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  service,
  patientType,
  date,
  timeSlot,
  fullName,
  email,
  phone,
  referenceNumber,
  onRestart,
}) => {
  return (
    <div className="bg-white rounded-2xl border-2 border-[#0D3B36] p-8 md:p-12 text-center space-y-8 shadow-xl max-w-3xl mx-auto">
      {/* Checkmark Icon */}
      <div className="w-16 h-16 rounded-full bg-[#0D3B36] text-white flex items-center justify-center mx-auto text-2xl font-bold shadow-lg ring-4 ring-[#D4A373]/30">
        ✓
      </div>

      {/* Main Title & Headline */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-3.5 py-1 rounded-full border border-[#E7E2D8] inline-block">
          Demonstration Complete
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
          Booking Request Demonstration Complete
        </h2>
        <p className="text-base text-[#44403C] max-w-xl mx-auto leading-relaxed">
          Thank you, <strong>{fullName}</strong>! You have successfully completed the appointment booking workflow demonstration.
        </p>
      </div>

      {/* Explicit Portfolio Disclosure Banner */}
      <div className="bg-[#F4F0E8] p-5 rounded-xl border border-[#E7E2D8] text-xs text-[#1C1917] space-y-2 text-left">
        <p className="font-bold text-[#0D3B36] flex items-center text-sm">
          <ShieldCheckIcon className="w-5 h-5 mr-2 text-[#0D3B36]" />
          Portfolio Demonstration Notice:
        </p>
        <p className="text-[#44403C] leading-relaxed">
          This website is a sample portfolio showcase for the fictional <strong>Aura Dental Studio</strong>. No real appointment has been scheduled in an external calendar, and no personal data was transmitted to a healthcare server.
        </p>
      </div>

      {/* Booking Summary Card */}
      <div className="bg-[#FBF9F5] p-6 rounded-xl border border-[#E7E2D8] text-left space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E7E2D8] pb-3 gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#78716C]">
            Illustrative Reference Number:
          </span>
          <span className="font-mono text-sm font-bold text-[#0D3B36] bg-white px-3 py-1 rounded border border-[#E7E2D8]">
            {referenceNumber}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#1C1917]">
          <div>
            <span className="text-[#78716C] block">Selected Treatment:</span>
            <span className="font-bold text-sm text-[#0D3B36]">{service?.name || "Dental Assessment"}</span>
          </div>

          <div>
            <span className="text-[#78716C] block">Patient Status:</span>
            <span className="font-semibold text-sm capitalize">{patientType} Patient</span>
          </div>

          <div>
            <span className="text-[#78716C] block">Scheduled Date &amp; Time:</span>
            <span className="font-semibold text-sm">{date} &bull; {timeSlot}</span>
          </div>

          <div>
            <span className="text-[#78716C] block">Contact Details:</span>
            <span className="font-semibold text-sm">{email} ({phone})</span>
          </div>
        </div>

        <div className="pt-3 border-t border-[#E7E2D8] text-[11px] text-[#78716C]">
          📍 <strong>Studio Address:</strong> 204, Sea View House, Linking Road, Bandra West, Mumbai 400050
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button type="button" variant="primary" size="lg" onClick={onRestart}>
          <CalendarIcon className="w-5 h-5 mr-2 text-white" />
          Start New Demo Booking
        </Button>
        <Button href="/" variant="outline" size="lg">
          Return to Homepage
        </Button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
