import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "md" | "lg";

const baseStyles =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-dark shadow-soft hover:shadow-elevated",
  secondary:
    "bg-secondary text-white hover:opacity-90",
  outline:
    "border border-border bg-transparent text-ink hover:border-primary hover:text-primary",
  ghost: "bg-transparent text-ink hover:bg-surface-alt",
};

const sizeStyles: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

interface ButtonOwnProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
}

type ButtonProps = ButtonOwnProps &
  (ComponentPropsWithoutRef<"button"> | ComponentPropsWithoutRef<"a">);

/** Botão único para todo o site — variantes cobrem CTA primário, secundário e sutil */
export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as ComponentPropsWithoutRef<"a">)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
