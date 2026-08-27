import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  clean?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  clean = false,
  ...props
}) => {
  return (
    <div
      className={`${clean ? "" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
