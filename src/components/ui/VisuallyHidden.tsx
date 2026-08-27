import React from "react";

export interface VisuallyHiddenProps {
  children: React.ReactNode;
}

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => {
  return <span className="sr-only">{children}</span>;
};

export default VisuallyHidden;
