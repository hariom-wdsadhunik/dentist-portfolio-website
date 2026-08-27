import React from "react";

export interface CardGridProps {
  children: React.ReactNode;
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  className?: string;
}

export const CardGrid: React.FC<CardGridProps> = ({
  children,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  className = "",
}) => {
  const colClasses = `grid grid-cols-${columns.mobile || 1} md:grid-cols-${
    columns.tablet || 2
  } lg:grid-cols-${columns.desktop || 3} gap-6 md:gap-8`;

  return <div className={`${colClasses} ${className}`}>{children}</div>;
};

export default CardGrid;
