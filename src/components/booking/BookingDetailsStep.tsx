import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { ShieldCheckIcon } from "@/components/ui/Icons";

export interface BookingDetailsData {
  fullName: string;
  email: string;
  phone: string;
  preferredContact: "email" | "phone" | "text";
  notes: string;
}

export interface BookingDetailsStepProps {
  initialData: BookingDetailsData;
  onBack: () => void;
  onSubmit: (data: BookingDetailsData) => void;
}

export const BookingDetailsStep: React.FC<BookingDetailsStepProps> = ({
  initialData,
  onBack,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<BookingDetailsData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingDetailsData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingDetailsData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g. name@example.com)";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required for appointment confirmation";
    } else if (!/^[0-9\-\+\s\(\)]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof BookingDetailsData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 text-left">
      <div className="space-y-2">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
          03. Patient Contact &amp; Confirmation
        </h2>
        <p className="text-sm text-[#44403C] leading-relaxed">
          Provide your contact details to complete the portfolio booking demonstration.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#1C1917]">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-[#1C1917] focus-visible:outline-2 focus-visible:outline-[#0D3B36] ${
              errors.fullName ? "border-red-500" : "border-[#E7E2D8]"
            }`}
            placeholder="e.g. Sarah Jenkins"
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-xs text-red-600 font-medium">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#1C1917]">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-[#1C1917] focus-visible:outline-2 focus-visible:outline-[#0D3B36] ${
              errors.email ? "border-red-500" : "border-[#E7E2D8]"
            }`}
            placeholder="sarah@example.com"
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-600 font-medium">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#1C1917]">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-[#1C1917] focus-visible:outline-2 focus-visible:outline-[#0D3B36] ${
              errors.phone ? "border-red-500" : "border-[#E7E2D8]"
            }`}
            placeholder="(512) 555-0199"
          />
          {errors.phone && (
            <p id="phone-error" className="text-xs text-red-600 font-medium">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div className="space-y-1.5">
          <label htmlFor="preferredContact" className="block text-xs font-bold uppercase tracking-wider text-[#1C1917]">
            Preferred Confirmation Method
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-[#E7E2D8] bg-white text-sm text-[#1C1917] focus-visible:outline-2 focus-visible:outline-[#0D3B36]"
          >
            <option value="email">Email Confirmation</option>
            <option value="phone">Phone Call</option>
            <option value="text">SMS Text Reminder</option>
          </select>
        </div>
      </div>

      {/* Optional Notes */}
      <div className="space-y-1.5">
        <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-[#1C1917]">
          Comfort Notes or Special Requests <span className="text-[#78716C] font-normal">(Optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-lg border border-[#E7E2D8] bg-white text-sm text-[#1C1917] focus-visible:outline-2 focus-visible:outline-[#0D3B36]"
          placeholder="e.g. Requesting Bose headphones or mild dental anxiety assistance..."
        />
      </div>

      {/* Demo Privacy Guarantee */}
      <div className="flex items-start space-x-2 text-xs text-[#78716C] bg-[#F4F0E8] p-3 rounded-lg border border-[#E7E2D8]">
        <ShieldCheckIcon className="w-4 h-4 text-[#0D3B36] shrink-0 mt-0.5" />
        <span>
          <strong>Data Privacy Disclosure:</strong> Your information is stored strictly in memory for this portfolio session and will not be transmitted to an external server.
        </span>
      </div>

      {/* Action Navigation */}
      <div className="pt-4 flex items-center justify-between gap-4">
        <Button type="button" variant="outline" size="md" onClick={onBack}>
          ← Back to Date &amp; Time
        </Button>
        <Button type="submit" variant="gold" size="lg" className="shadow-md">
          Complete Demo Booking
        </Button>
      </div>
    </form>
  );
};

export default BookingDetailsStep;
