import clsx from "clsx";
import type { ReactNode } from "react";

export type LinkProps = {
  variant?: "link" | "muted" | "accent" | "default";
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl";
  gap?: "xs" | "sm" | "base" | "md" | "lg";
  href: string;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const defaultClass = [
  "text-white dark:text-base-900",
  "bg-black dark:bg-white",
  "focus:outline-black dark:focus:outline-white",
];

const accentClass = [
  "text-white dark:text-base-900",
  "bg-accent-600 dark:bg-accent-500",
  "focus:outline-accent-600 dark:focus:outline-accent-600",
];

const mutedClass = [
  "text-base-500 dark:text-white",
  "bg-base-50 dark:bg-base-800",
  "focus:outline-base-500 dark:focus:outline-base-800",
];

const sizes = {
  xs: ["h-8", "px-4", "py-2", "text-xs"],
  sm: ["h-9", "px-4", "py-2", "text-xs"],
  base: ["h-10", "px-6", "py-3", "text-base"],
  md: ["h-11", "px-6", "py-3", "text-md"],
  lg: ["h-12", "px-6", "py-3", "text-lg"],
  xl: ["h-14", "px-6", "py-3", "text-base"],
};

const gapMap = {
  xs: ["gap-2"],
  sm: ["gap-4"],
  base: ["gap-8"],
  md: ["gap-10"],
  lg: ["gap-12"],
};

export default function Link({
  variant = "link",
  size = "base",
  gap,
  href,
  className,
  leftIcon,
  rightIcon,
  children,
  ...rest
}: LinkProps) {
  const variantClasses =
    variant === "link"
      ? []
      : [
          "font-medium",
          "group",
          "relative",
          "flex",
          "transition",
          "text-center",
          "outline-transparent",
          "rounded-full",
          "items-center",
          "justify-center",
          "duration-500",
          "ease-in-out",
          "transition-colors",
          "focus:outline-2",
          "outline-offset-2",
          "overflow-hidden",
          variant === "muted" && mutedClass,
          variant === "accent" && accentClass,
          variant === "default" && defaultClass,
          sizes[size],
          gap ? gapMap[gap] : null,
        ];

  return (
    <a href={href} className={clsx(variantClasses, className)} {...rest}>
      <span className="relative z-10 flex items-center">
        {leftIcon}
        {children}
        {rightIcon}
      </span>
      {variant !== "link" && (
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative w-8 h-full bg-white/20 dark:bg-base-950/10"></div>
        </div>
      )}
    </a>
  );
}
