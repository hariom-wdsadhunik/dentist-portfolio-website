import React from "react";
import Link from "next/link";
import { PhoneIcon, CalendarIcon } from "@/components/ui/Icons";

export const MobileActionBar: React.FC = () => {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#FBF9F5]/95 backdrop-blur-md border-t border-[#E7E2D8] p-3 shadow-lg"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* Call Action Button */}
        <a
          href="tel:5125550199"
          className="flex items-center justify-center space-x-2 bg-[#F4F0E8] text-[#1C1917] hover:bg-[#E7E2D8] active:bg-[#DCD6C9] font-sans text-sm font-semibold py-3 px-4 rounded-lg border border-[#E7E2D8] transition-colors min-h-[48px]"
        >
          <PhoneIcon className="w-4 h-4 text-[#0D3B36]" />
          <span>Call Us</span>
        </a>

        {/* Book Action Button */}
        <Link
          href="/book"
          className="flex items-center justify-center space-x-2 bg-[#0D3B36] text-white hover:bg-[#082824] active:bg-[#051C1A] font-sans text-sm font-semibold py-3 px-4 rounded-lg shadow-sm transition-colors min-h-[48px]"
        >
          <CalendarIcon className="w-4 h-4 text-white" />
          <span>Book Online</span>
        </Link>
      </div>
    </aside>
  );
};

export default MobileActionBar;
