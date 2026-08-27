import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { ChevronRightIcon } from "@/components/ui/Icons";

export interface BookingDateTimeStepProps {
  selectedDate: string;
  selectedTimeSlot: string;
  onBack: () => void;
  onContinue: (date: string, timeSlot: string) => void;
}

// Sample demonstrative upcoming business dates
const SAMPLE_DATES = [
  { label: "Mon, Sep 1", value: "2026-09-01", day: "Monday" },
  { label: "Tue, Sep 2", value: "2026-09-02", day: "Tuesday" },
  { label: "Wed, Sep 3", value: "2026-09-03", day: "Wednesday" },
  { label: "Thu, Sep 4", value: "2026-09-04", day: "Thursday" },
  { label: "Fri, Sep 5", value: "2026-09-05", day: "Friday" },
];

const MORNING_SLOTS = ["09:00 AM", "10:30 AM", "11:30 AM"];
const AFTERNOON_SLOTS = ["01:30 PM", "03:00 PM", "04:30 PM"];

export const BookingDateTimeStep: React.FC<BookingDateTimeStepProps> = ({
  selectedDate,
  selectedTimeSlot,
  onBack,
  onContinue,
}) => {
  const [date, setDate] = useState<string>(selectedDate || SAMPLE_DATES[0].value);
  const [timeSlot, setTimeSlot] = useState<string>(selectedTimeSlot || MORNING_SLOTS[0]);
  const [error, setError] = useState<string | null>(null);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !timeSlot) {
      setError("Please select both a date and a time slot");
      return;
    }
    setError(null);
    onContinue(date, timeSlot);
  };

  return (
    <form onSubmit={handleNext} className="space-y-8 text-left">
      <div className="space-y-2">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
          02. Select Preferred Date &amp; Time
        </h2>
        <p className="text-sm text-[#44403C] leading-relaxed">
          Select your preferred appointment date and time slot from our sample studio schedule.
        </p>
      </div>

      {/* Demo Notice Disclaimer */}
      <div className="bg-[#F4F0E8] p-3 rounded-lg border border-[#E7E2D8] text-xs text-[#78716C]">
        💡 <strong>Portfolio Demo Availability:</strong> Slots shown below are sample demonstration times for website showcase.
      </div>

      {/* Date Picker Buttons */}
      <div className="space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917]">
          Select Date <span className="text-red-600">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {SAMPLE_DATES.map((item) => {
            const isSelected = date === item.value;
            return (
              <button
                key={item.value}
                type="button"
                onClick={() => setDate(item.value)}
                className={`p-3 rounded-xl border text-center transition-all ${
                  isSelected
                    ? "border-[#0D3B36] bg-[#0D3B36] text-white shadow-md"
                    : "border-[#E7E2D8] bg-white text-[#1C1917] hover:border-[#0D3B36]/30"
                }`}
              >
                <span className="block text-[11px] opacity-80 uppercase tracking-wider">
                  {item.day.slice(0, 3)}
                </span>
                <span className="block font-serif font-bold text-sm sm:text-base">
                  {item.label.split(", ")[1]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slot Selection */}
      <div className="space-y-4">
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917]">
          Select Time Slot <span className="text-red-600">*</span>
        </label>

        {/* Morning Slots */}
        <div className="space-y-2">
          <span className="text-xs font-semibold text-[#0D3B36] uppercase tracking-wider block">
            Morning Slots
          </span>
          <div className="grid grid-cols-3 gap-3">
            {MORNING_SLOTS.map((slot) => {
              const isSelected = timeSlot === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setTimeSlot(slot)}
                  className={`p-3 rounded-lg border text-center font-medium text-xs sm:text-sm transition-all ${
                    isSelected
                      ? "border-[#0D3B36] bg-[#0D3B36] text-white shadow"
                      : "border-[#E7E2D8] bg-white text-[#1C1917] hover:border-[#0D3B36]/30"
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>

        {/* Afternoon Slots */}
        <div className="space-y-2 pt-2">
          <span className="text-xs font-semibold text-[#0D3B36] uppercase tracking-wider block">
            Afternoon Slots
          </span>
          <div className="grid grid-cols-3 gap-3">
            {AFTERNOON_SLOTS.map((slot) => {
              const isSelected = timeSlot === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setTimeSlot(slot)}
                  className={`p-3 rounded-lg border text-center font-medium text-xs sm:text-sm transition-all ${
                    isSelected
                      ? "border-[#0D3B36] bg-[#0D3B36] text-white shadow"
                      : "border-[#E7E2D8] bg-white text-[#1C1917] hover:border-[#0D3B36]/30"
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {error && <p className="text-xs text-red-600 font-medium">{error}</p>}

      {/* Action Navigation */}
      <div className="pt-4 flex items-center justify-between gap-4">
        <Button type="button" variant="outline" size="md" onClick={onBack}>
          ← Back
        </Button>
        <Button type="submit" variant="primary" size="lg">
          Continue to Patient Details <ChevronRightIcon className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </form>
  );
};

export default BookingDateTimeStep;
