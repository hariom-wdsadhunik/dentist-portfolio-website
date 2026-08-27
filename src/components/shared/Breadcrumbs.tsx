import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@/components/ui/Icons";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = "" }) => {
  return (
    <nav aria-label="Breadcrumb" className={`text-xs font-medium text-[#78716C] ${className}`}>
      <ol className="flex items-center space-x-2 flex-wrap">
        <li>
          <Link href="/" className="hover:text-[#0D3B36] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRightIcon className="w-3 h-3 text-[#A8A29E]" />
              {isLast || !item.href ? (
                <span className="text-[#1C1917] font-semibold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[#0D3B36] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
