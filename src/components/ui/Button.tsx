import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "gold";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0D3B36] text-white hover:bg-[#082824] active:bg-[#051C1A] border border-transparent shadow-sm",
  secondary:
    "bg-[#F4F0E8] text-[#1C1917] hover:bg-[#E7E2D8] active:bg-[#DCD6C9] border border-[#E7E2D8]",
  outline:
    "bg-transparent text-[#1C1917] border border-[#E7E2D8] hover:bg-[#F4F0E8] hover:border-[#1C1917]",
  ghost:
    "bg-transparent text-[#1C1917] hover:bg-[#F4F0E8] border border-transparent",
  gold:
    "bg-[#D4A373] text-[#1C1917] hover:bg-[#C49363] font-semibold border border-transparent shadow-sm",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-xs tracking-wide uppercase font-semibold rounded-md min-h-[36px]",
  md: "px-5 py-2.5 text-sm font-semibold rounded-md min-h-[44px]",
  lg: "px-7 py-3.5 text-base font-semibold rounded-lg min-h-[52px]",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  external = false,
  disabled = false,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-sans transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D3B36] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none";
  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
