import React from "react";
import Button from "@/components/ui/Button";
import { ChevronRightIcon } from "@/components/ui/Icons";
import { ServiceItem } from "@/lib/servicesData";

export interface RelatedServicesProps {
  services: ServiceItem[];
  title?: string;
}

export const RelatedServices: React.FC<RelatedServicesProps> = ({
  services,
  title = "Related Care Treatments",
}) => {
  if (!services || services.length === 0) return null;

  return (
    <div className="space-y-6 pt-8 border-t border-[#E7E2D8]">
      <h3 className="font-serif text-2xl font-bold text-[#1C1917]">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((item) => (
          <div
            key={item.id}
            className="bg-[#FBF9F5] p-6 rounded-xl border border-[#E7E2D8] space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-2.5 py-1 rounded border border-[#E7E2D8]">
                {item.category}
              </span>
              <h4 className="font-serif text-xl font-bold text-[#1C1917]">{item.name}</h4>
              <p className="text-xs text-[#44403C] leading-relaxed">{item.shortDescription}</p>
            </div>
            <div className="pt-2">
              <Button href={item.route} variant="ghost" size="sm">
                Explore Treatment <ChevronRightIcon className="ml-1 w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedServices;
