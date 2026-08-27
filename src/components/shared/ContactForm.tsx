"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { ShieldCheckIcon } from "@/components/ui/Icons";

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredContact: "email" | "phone" | "text";
  serviceInterest: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    preferredContact: "email",
    serviceInterest: "general-inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g. name@example.com)";
    }

    if (formData.phone.trim() && !/^[0-9\-\+\s\(\)]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message or inquiry details are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-[#F4F0E8] border-2 border-[#0D3B36] rounded-2xl p-8 space-y-4 text-center">
        <div className="w-12 h-12 rounded-full bg-[#0D3B36] text-white flex items-center justify-center mx-auto text-xl font-bold">
          ✓
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
          Inquiry Demonstration Received
        </h3>
        <p className="text-sm text-[#44403C] max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{formData.fullName}</strong>! Your demo form inquiry for{" "}
          <span className="text-[#0D3B36] font-semibold">{formData.serviceInterest}</span> has been processed.
        </p>
        <div className="bg-white p-4 rounded-xl border border-[#E7E2D8] text-xs text-[#78716C] italic max-w-md mx-auto">
          💡 <strong>Portfolio Demo Disclosure:</strong> This website is a sample portfolio demonstration. No real message was sent to an external server.
        </div>
        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                preferredContact: "email",
                serviceInterest: "general-inquiry",
                message: "",
              });
            }}
          >
            Submit Another Demo Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6 text-left">
      <div className="space-y-1">
        <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
          Contact Office Concierge
        </h3>
        <p className="text-xs text-[#78716C]">
          Have a question about services, PPO insurance, or scheduling? Send a message to our team.
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
            className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-[#1C1917] focus-visible:outline-2 focus-visible:outline-[#0D3B36] transition-colors ${
              errors.fullName ? "border-red-500" : "border-[#E7E2D8]"
            }`}
            placeholder="e.g. Dr. Alex Morgan"
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
            className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-[#1C1917] focus-visible:outline-2 focus-visible:outline-[#0D3B36] transition-colors ${
              errors.email ? "border-red-500" : "border-[#E7E2D8]"
            }`}
            placeholder="alex@example.com"
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
            Phone Number <span className="text-[#78716C] font-normal">(Optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-[#1C1917] focus-visible:outline-2 focus-visible:outline-[#0D3B36] transition-colors ${
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
            Preferred Contact Method
          </label>
          <select
            id="preferredContact"
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-[#E7E2D8] bg-white text-sm text-[#1C1917] focus-visible:outline-2 focus-visible:outline-[#0D3B36]"
          >
            <option value="email">Email Response</option>
            <option value="phone">Phone Call</option>
            <option value="text">SMS Text Message</option>
          </select>
        </div>
      </div>

      {/* Service Interest */}
      <div className="space-y-1.5">
        <label htmlFor="serviceInterest" className="block text-xs font-bold uppercase tracking-wider text-[#1C1917]">
          Topic / Service of Interest
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-lg border border-[#E7E2D8] bg-white text-sm text-[#1C1917] focus-visible:outline-2 focus-visible:outline-[#0D3B36]"
        >
          <option value="general-inquiry">General Studio Inquiry</option>
          <option value="preventive-hygiene">Preventive Hygiene &amp; Exams</option>
          <option value="clear-aligners">Discreet Clear Aligners</option>
          <option value="same-day-crowns">Same-Day CEREC Crowns</option>
          <option value="teeth-whitening">Professional Teeth Whitening</option>
          <option value="porcelain-veneers">Handcrafted Veneers</option>
          <option value="ppo-insurance">PPO Insurance &amp; Financials</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#1C1917]">
          Your Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-[#1C1917] focus-visible:outline-2 focus-visible:outline-[#0D3B36] transition-colors ${
            errors.message ? "border-red-500" : "border-[#E7E2D8]"
          }`}
          placeholder="How can we assist you with your smile goals?"
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-600 font-medium">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto shadow-md">
          Send Demo Inquiry
        </Button>
      </div>

      {/* Microcopy Guarantee */}
      <div className="flex items-center space-x-1.5 text-xs text-[#78716C] pt-2">
        <ShieldCheckIcon className="w-4 h-4 text-[#0D3B36]" />
        <span>Your privacy is protected. Demo submission only.</span>
      </div>
    </form>
  );
};

export default ContactForm;
