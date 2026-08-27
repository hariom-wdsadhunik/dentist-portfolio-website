import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export interface EditorialSplitProps {
  title: string;
  eyebrow?: string;
  body: React.ReactNode;
  imageSide?: "left" | "right";
  imageNode: React.ReactNode;
  cta?: React.ReactNode;
  bg?: "canvas" | "linen" | "white" | "forest";
  className?: string;
}

export const EditorialSplit: React.FC<EditorialSplitProps> = ({
  title,
  eyebrow,
  body,
  imageSide = "left",
  imageNode,
  cta,
  bg = "canvas",
  className = "",
}) => {
  const imageColumn = <div className="lg:col-span-5">{imageNode}</div>;

  const textColumn = (
    <div className="lg:col-span-7 space-y-6 text-left">
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-wider text-[#0D3B36] bg-[#F4F0E8] px-3 py-1 rounded-full border border-[#E7E2D8] inline-block">
          {eyebrow}
        </span>
      )}

      <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917]">
        {title}
      </h2>

      <div className="text-base text-[#44403C] leading-relaxed space-y-4">{body}</div>

      {cta && <div className="pt-2">{cta}</div>}
    </div>
  );

  return (
    <Section bg={bg} className={`py-16 md:py-24 border-b border-[#E7E2D8] ${className}`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {imageSide === "left" ? (
            <>
              {imageColumn}
              {textColumn}
            </>
          ) : (
            <>
              {textColumn}
              {imageColumn}
            </>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default EditorialSplit;
