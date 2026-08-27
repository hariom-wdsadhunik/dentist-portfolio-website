import React from "react";

export interface DividerProps {
  className?: string;
  vertical?: boolean;
}

export const Divider: React.FC<DividerProps> = ({ className = "", vertical = false }) => {
  if (vertical) {
    return <div className={`w-[1px] bg-[#E7E2D8] self-stretch ${className}`} role="separator" />;
  }
  return <hr className={`w-full border-t border-[#E7E2D8] my-4 ${className}`} />;
};

export default Divider;
