import React from "react";
import Button from "@/components/ui/Button";

export interface BookingErrorProps {
  message?: string;
  onRetry: () => void;
  onRestart: () => void;
}

export const BookingError: React.FC<BookingErrorProps> = ({
  message = "Unable to process the demonstration booking request.",
  onRetry,
  onRestart,
}) => {
  return (
    <div className="bg-white rounded-2xl border-2 border-red-300 p-8 text-center space-y-6 shadow-md max-w-xl mx-auto">
      <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto text-xl font-bold">
        !
      </div>
      <div className="space-y-2">
        <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
          Demonstration Error
        </h3>
        <p className="text-sm text-[#44403C] leading-relaxed">{message}</p>
      </div>
      <div className="pt-2 flex justify-center gap-4">
        <Button type="button" variant="outline" size="md" onClick={onRetry}>
          Retry Current Step
        </Button>
        <Button type="button" variant="primary" size="md" onClick={onRestart}>
          Start Over
        </Button>
      </div>
    </div>
  );
};

export default BookingError;
