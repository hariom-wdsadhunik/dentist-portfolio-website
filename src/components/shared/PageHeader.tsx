import React from "react";
import Container from "@/components/ui/Container";

export interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  description?: string;
  breadcrumbs?: React.ReactNode;
  primaryCta?: React.ReactNode;
  secondaryCta?: React.ReactNode;
  bg?: "canvas" | "linen" | "forest";
  className?: string;
}

const bgStyles = {
  canvas: "bg-[#FBF9F5] text-[#1C1917] border-b border-[#E7E2D8]",
  linen: "bg-[#F4F0E8] text-[#1C1917] border-b border-[#E7E2D8]",
  forest: "bg-[#0D3B36] text-white border-b border-[#082824]",
};

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  eyebrow,
  description,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  bg = "canvas",
  className = "",
}) => {
  return (
    <header className={`py-12 md:py-16 ${bgStyles[bg]} ${className}`}>
      <Container>
        <div className="max-w-4xl space-y-4">
          {breadcrumbs && <div className="mb-2">{breadcrumbs}</div>}

          {eyebrow && (
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/5 border border-black/10 text-[#0D3B36] dark:bg-white/10 dark:border-white/20 dark:text-[#D4A373]">
              {eyebrow}
            </div>
          )}

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]">
            {title}
          </h1>

          {description && (
            <p className="font-sans text-base sm:text-lg opacity-90 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {primaryCta}
              {secondaryCta}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default PageHeader;
