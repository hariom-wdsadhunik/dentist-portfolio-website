import React from "react";
import { ServiceItem } from "@/lib/servicesData";

export interface BookingSummaryProps {
  service?: ServiceItem;
  patientType: "new" | "returning";
  date: string;
  timeSlot: string;
  fullName?: string;
  email?: string;
  className?: string;
}

export const BookingSummary: React.FC<BookingSummaryProps> = ({
  service,
  patientType,
  date,
  timeSlot,
  fullName,
  email,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-2xl border-2 border-[#E7E2D8] p-6 space-y-6 shadow-sm text-left ${className}`}
    >
      <div className="border-b border-[#E7E2D8] pb-4 flex items-center justify-between">
        <h3 className="font-serif text-xl font-bold text-[#1C1917]">Booking Summary</h3>
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-2 py-0.5 rounded border border-[#E7E2D8]">
          Demo Review
        </span>
      </div>

      <div className="space-y-4 text-xs text-[#44403C]">
        {/* Selected Service */}
        <div className="space-y-1">
          <span className="font-bold text-[#1C1917] block uppercase tracking-wider text-[11px]">
            Selected Treatment
          </span>
          <p className="text-sm font-semibold text-[#0D3B36]">
            {service ? service.name : "Not selected yet"}
          </p>
          {service && (
            <p className="text-[11px] text-[#78716C]">{service.pricingGuidance}</p>
          )}
        </div>

        {/* Patient Status */}
        <div className="space-y-1 border-t border-[#F0ECE1] pt-3">
          <span className="font-bold text-[#1C1917] block uppercase tracking-wider text-[11px]">
            Patient Status
          </span>
          <p className="text-sm text-[#1C1917] capitalize">
            {patientType === "new" ? "New Patient (First Visit)" : "Returning Patient"}
          </p>
        </div>

        {/* Selected Date & Time */}
        <div className="space-y-1 border-t border-[#F0ECE1] pt-3">
          <span className="font-bold text-[#1C1917] block uppercase tracking-wider text-[11px]">
            Appointment Schedule
          </span>
          <p className="text-sm font-medium text-[#1C1917]">
            {date ? date : "Date pending"} &bull; {timeSlot ? timeSlot : "Time pending"}
          </p>
        </div>

        {/* Patient Details (If available) */}
        {fullName && (
          <div className="space-y-1 border-t border-[#F0ECE1] pt-3">
            <span className="font-bold text-[#1C1917] block uppercase tracking-wider text-[11px]">
              Patient Contact
            </span>
            <p className="text-sm font-semibold text-[#1C1917]">{fullName}</p>
            {email && <p className="text-xs text-[#78716C]">{email}</p>}
          </div>
        )}
      </div>

      {/* Location Confirmation */}
      <div className="pt-4 border-t border-[#E7E2D8] bg-[#FBF9F5] p-3 rounded-lg text-[11px] text-[#78716C] space-y-0.5">
        <p className="font-bold text-[#0D3B36]">Aura Dental Studio Downtown</p>
        <p>410 Congress Ave, Suite 200, Austin, TX</p>
        <p className="text-[#0D3B36]">✓ Validated Garage Parking Included</p>
      </div>
    </div>
  );
};

export default BookingSummary;
