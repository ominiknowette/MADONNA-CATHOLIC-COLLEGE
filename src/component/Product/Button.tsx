import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "dark";
  showArrow?: boolean;
};

/** Shared button styling for CTAs, forms, and dashboard actions. */
export default function Button({
  children,
  variant = "primary",
  showArrow = false,
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-mcc-wine text-white shadow-soft hover:bg-mcc-plum",
    secondary: "bg-white text-mcc-wine border border-mcc-wine hover:bg-mcc-blush",
    outline: "border border-mcc-line bg-white text-mcc-wine hover:border-mcc-wine hover:bg-mcc-blush",
    dark: "bg-mcc-plum text-white hover:bg-mcc-wine",
  };

  return (
    <button
      className={`inline-flex min-w-0 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </button>
  );
}
