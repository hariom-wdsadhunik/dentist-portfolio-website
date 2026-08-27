import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { SERVICES_CATALOG, ServiceItem } from "@/lib/servicesData";
import { ChevronRightIcon } from "@/components/ui/Icons";

export interface BookingServiceStepProps {
  selectedServiceSlug: string;
  selectedPatientType: "new" | "returning";
  onContinue: (serviceSlug: string, patientType: "new" | "returning") => void;
}

export const BookingServiceStep: React.FC<BookingServiceStepProps> = ({
  selectedServiceSlug,
  selectedPatientType,
  onContinue,
}) => {
  const [serviceSlug, setServiceSlug] = useState<string>(selectedServiceSlug || SERVICES_CATALOG[0].slug);
  const [patientType, setPatientType] = useState<"new" | "returning">(selectedPatientType || "new");
  const [error, setError] = useState<string | null>(null);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceSlug) {
      setError("Please select a service treatment");
      return;
    }
    setError(null);
    onContinue(serviceSlug, patientType);
  };

  return (
    <form onSubmit={handleNext} className="space-y-8 text-left">
      <div className="space-y-2">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
          01. Select Your Service &amp; Patient Status
        </h2>
        <p className="text-sm text-[#44403C] leading-relaxed">
          Choose the treatment you wish to discuss during your 3D digital assessment and indicate whether you are a new or returning patient.
        </p>
      </div>

      {/* Patient Type Selection */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917]">
          Patient Status <span className="text-red-600">*</span>
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setPatientType("new")}
            className={`p-4 rounded-xl border text-left transition-all ${
              patientType === "new"
                ? "border-[#0D3B36] bg-[#0D3B36]/5 ring-2 ring-[#0D3B36]"
                : "border-[#E7E2D8] bg-white hover:border-[#0D3B36]/30"
            }`}
          >
            <span className="block font-serif font-bold text-base text-[#1C1917]">
              New Patient
            </span>
            <span className="block text-xs text-[#78716C] mt-0.5">
              First visit to Aura Dental Studio
            </span>
          </button>

          <button
            type="button"
            onClick={() => setPatientType("returning")}
            className={`p-4 rounded-xl border text-left transition-all ${
              patientType === "returning"
                ? "border-[#0D3B36] bg-[#0D3B36]/5 ring-2 ring-[#0D3B36]"
                : "border-[#E7E2D8] bg-white hover:border-[#0D3B36]/30"
            }`}
          >
            <span className="block font-serif font-bold text-base text-[#1C1917]">
              Returning Patient
            </span>
            <span className="block text-xs text-[#78716C] mt-0.5">
              Established patient check-up
            </span>
          </button>
        </div>
      </div>

      {/* Service Catalog Selection */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917]">
          Select Treatment Service <span className="text-red-600">*</span>
        </label>
        <div className="space-y-3">
          {SERVICES_CATALOG.map((service: ServiceItem) => {
            const isSelected = serviceSlug === service.slug;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setServiceSlug(service.slug)}
                className={`w-full p-4 rounded-xl border text-left flex items-center justify-between gap-4 transition-all ${
                  isSelected
                    ? "border-[#0D3B36] bg-[#0D3B36]/5 ring-2 ring-[#0D3B36]"
                    : "border-[#E7E2D8] bg-white hover:border-[#0D3B36]/30"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-2 py-0.5 rounded border border-[#E7E2D8]">
                      {service.category}
                    </span>
                    <span className="font-serif font-bold text-lg text-[#1C1917]">
                      {service.name}
                    </span>
                  </div>
                  <p className="text-xs text-[#44403C] leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                    isSelected ? "border-[#0D3B36] bg-[#0D3B36] text-white" : "border-[#A8A29E]"
                  }`}
                >
                  {isSelected && <span className="text-xs">✓</span>}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {error && <p className="text-xs text-red-600 font-medium">{error}</p>}

      {/* Action Navigation */}
      <div className="pt-4 flex justify-end">
        <Button type="submit" variant="primary" size="lg">
          Continue to Date &amp; Time <ChevronRightIcon className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </form>
  );
};

export default BookingServiceStep;
