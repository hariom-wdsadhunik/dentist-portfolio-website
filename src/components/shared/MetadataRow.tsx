import React from "react";

export interface MetadataRowProps {
  items: Array<{ label: string; value: string }>;
  className?: string;
}

export const MetadataRow: React.FC<MetadataRowProps> = ({ items, className = "" }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-xl border border-[#E7E2D8] space-y-1 text-xs"
        >
          <span className="font-semibold uppercase tracking-wider text-[#0D3B36] block">
            {item.label}
          </span>
          <span className="font-medium text-[#1C1917] block text-sm">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

export default MetadataRow;
