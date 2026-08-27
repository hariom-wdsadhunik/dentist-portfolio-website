import React from "react";

export interface BookingProgressProps {
  currentStep: 1 | 2 | 3;
}

export const BookingProgress: React.FC<BookingProgressProps> = ({ currentStep }) => {
  const steps = [
    { number: 1, label: "Select Service" },
    { number: 2, label: "Date & Time" },
    { number: 3, label: "Patient Details" },
  ];

  return (
    <nav aria-label="Booking Progress" className="w-full">
      <ol className="flex items-center justify-between gap-2 sm:gap-4 border-b border-[#E7E2D8] pb-6">
        {steps.map((step) => {
          const isActive = currentStep === step.number;
          const isCompleted = currentStep > step.number;

          return (
            <li key={step.number} className="flex-1 flex items-center space-x-2 sm:space-x-3">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors ${
                  isCompleted
                    ? "bg-[#0D3B36] text-white"
                    : isActive
                    ? "bg-[#D4A373] text-[#1C1917]"
                    : "bg-[#F4F0E8] text-[#78716C] border border-[#E7E2D8]"
                }`}
                aria-current={isActive ? "step" : undefined}
              >
                {isCompleted ? "✓" : `0${step.number}`}
              </div>

              <div className="hidden xs:block sm:block text-left">
                <span
                  className={`block text-[11px] uppercase tracking-wider font-bold ${
                    isActive ? "text-[#0D3B36]" : "text-[#78716C]"
                  }`}
                >
                  Step 0{step.number}
                </span>
                <span
                  className={`block text-xs sm:text-sm font-semibold truncate ${
                    isActive ? "text-[#1C1917]" : "text-[#78716C]"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BookingProgress;
