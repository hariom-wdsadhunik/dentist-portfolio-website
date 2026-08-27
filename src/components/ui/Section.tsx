import React from "react";

export type SectionBackground = "canvas" | "linen" | "white" | "forest";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bg?: SectionBackground;
  className?: string;
  id?: string;
}

const bgMap: Record<SectionBackground, string> = {
  canvas: "bg-[#FBF9F5] text-[#1C1917]",
  linen: "bg-[#F4F0E8] text-[#1C1917]",
  white: "bg-white text-[#1C1917]",
  forest: "bg-[#0D3B36] text-white",
};

export const Section: React.FC<SectionProps> = ({
  children,
  bg = "canvas",
  className = "",
  id,
  ...props
}) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgMap[bg]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
