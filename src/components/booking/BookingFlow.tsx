"use client";

import React, { useState } from "react";
import BookingProgress from "./BookingProgress";
import BookingServiceStep from "./BookingServiceStep";
import BookingDateTimeStep from "./BookingDateTimeStep";
import BookingDetailsStep, { BookingDetailsData } from "./BookingDetailsStep";
import BookingSummary from "./BookingSummary";
import BookingConfirmation from "./BookingConfirmation";
import BookingError from "./BookingError";
import { SERVICES_CATALOG, getServiceBySlug } from "@/lib/servicesData";

export interface BookingState {
  step: 1 | 2 | 3 | 4 | 5; // 1: Service, 2: Date/Time, 3: Details, 4: Confirmation, 5: Error
  serviceSlug: string;
  patientType: "new" | "returning";
  date: string;
  timeSlot: string;
  details: BookingDetailsData;
  referenceNumber: string;
}

export const BookingFlow: React.FC = () => {
  const [state, setState] = useState<BookingState>({
    step: 1,
    serviceSlug: SERVICES_CATALOG[0].slug,
    patientType: "new",
    date: "2026-09-01",
    timeSlot: "09:00 AM",
    details: {
      fullName: "",
      email: "",
      phone: "",
      preferredContact: "email",
      notes: "",
    },
    referenceNumber: "",
  });

  const selectedService = getServiceBySlug(state.serviceSlug);

  // Step 1 -> Step 2
  const handleServiceSubmit = (serviceSlug: string, patientType: "new" | "returning") => {
    setState((prev) => ({
      ...prev,
      serviceSlug,
      patientType,
      step: 2,
    }));
  };

  // Step 2 -> Step 3
  const handleDateTimeSubmit = (date: string, timeSlot: string) => {
    setState((prev) => ({
      ...prev,
      date,
      timeSlot,
      step: 3,
    }));
  };

  // Step 3 -> Confirmation (Step 4)
  const handleDetailsSubmit = (details: BookingDetailsData) => {
    const randomRef = `DEMO-AURA-${Math.floor(1000 + Math.random() * 9000)}`;
    setState((prev) => ({
      ...prev,
      details,
      referenceNumber: randomRef,
      step: 4,
    }));
  };

  // Restart booking flow
  const handleRestart = () => {
    setState({
      step: 1,
      serviceSlug: SERVICES_CATALOG[0].slug,
      patientType: "new",
      date: "2026-09-01",
      timeSlot: "09:00 AM",
      details: {
        fullName: "",
        email: "",
        phone: "",
        preferredContact: "email",
        notes: "",
      },
      referenceNumber: "",
    });
  };

  // Step 4: Confirmation view
  if (state.step === 4) {
    return (
      <BookingConfirmation
        service={selectedService}
        patientType={state.patientType}
        date={state.date}
        timeSlot={state.timeSlot}
        fullName={state.details.fullName}
        email={state.details.email}
        phone={state.details.phone}
        referenceNumber={state.referenceNumber}
        onRestart={handleRestart}
      />
    );
  }

  // Step 5: Error view
  if (state.step === 5) {
    return (
      <BookingError
        onRetry={() => setState((prev) => ({ ...prev, step: 3 }))}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="space-y-8">
      {/* Step Progress Bar */}
      <BookingProgress currentStep={state.step as 1 | 2 | 3} />

      {/* Main Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Current Active Step */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border-2 border-[#E7E2D8] shadow-sm">
          {state.step === 1 && (
            <BookingServiceStep
              selectedServiceSlug={state.serviceSlug}
              selectedPatientType={state.patientType}
              onContinue={handleServiceSubmit}
            />
          )}

          {state.step === 2 && (
            <BookingDateTimeStep
              selectedDate={state.date}
              selectedTimeSlot={state.timeSlot}
              onBack={() => setState((prev) => ({ ...prev, step: 1 }))}
              onContinue={handleDateTimeSubmit}
            />
          )}

          {state.step === 3 && (
            <BookingDetailsStep
              initialData={state.details}
              onBack={() => setState((prev) => ({ ...prev, step: 2 }))}
              onSubmit={handleDetailsSubmit}
            />
          )}
        </div>

        {/* Right Column: Live Booking Summary */}
        <div className="lg:col-span-5 lg:sticky lg:top-24">
          <BookingSummary
            service={selectedService}
            patientType={state.patientType}
            date={state.date}
            timeSlot={state.timeSlot}
            fullName={state.details.fullName}
            email={state.details.email}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingFlow;
