import clsx from "clsx";
import type { ReactNode } from "react";

export type ButtonProps = {
  variant?: "default" | "accent" | "muted" | "none";
  size?: "xxs" | "xs" | "sm" | "base" | "md" | "lg" | "xl";
  iconOnly?: boolean;
  gap?: "xs" | "sm" | "base" | "md" | "lg";
  isLink?: boolean;
  href?: string;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  icon?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const variantClass = {
  default: [
    "text-white",
    "bg-base-900",
    "hover:bg-base-800",
    "focus:outline-base-800",
    "dark:text-base-950",
    "dark:bg-base-100",
    "dark:hover:bg-base-200",
    "dark:focus:outline-base-300",
  ],
  accent: [
    "text-base-900",
    "bg-accent-300",
    "hover:bg-accent-400",
    "focus:outline-accent-400",
  ],
  muted: [
    "text-base-950",
    "bg-base-200",
    "hover:bg-base-100",
    "focus:outline-base-300",
    "dark:text-white",
    "dark:bg-base-900",
    "dark:hover:bg-base-800",
    "dark:focus:outline-base-800",
  ],
  none: [],
};

const sizes = {
  xxs: ["h-7.5", "px-4", "py-2", "text-xs"],
  xs: ["h-8", "px-4", "py-3", "text-xs"],
  sm: ["h-9", "px-4", "py-3", "text-sm"],
  base: ["h-10", "px-5", "py-4", "text-sm"],
  md: ["h-11", "px-5", "py-4", "text-base"],
  lg: ["h-12", "px-5", "py-4", "text-lg"],
  xl: ["h-13", "px-5", "py-4", "text-lg"],
};

const iconSizes = {
  xxs: ["size-7.5", "py-2", "text-xs"],
  xs: ["size-8", "text-xs"],
  sm: ["size-9", "text-sm"],
  base: ["size-10", "text-sm"],
  md: ["size-11", "text-base"],
  lg: ["size-12", "text-lg"],
  xl: ["size-13", "text-lg"],
};

const gapMap = {
  xs: ["gap-2"],
  sm: ["gap-4"],
  base: ["gap-8"],
  md: ["gap-10"],
  lg: ["gap-12"],
};

const baseClass = [
  "flex",
  "justify-center",
  "text-center",
  "rounded-full",
  "font-medium",
  "items-center",
  "duration-500",
  "ease-in-out",
  "transition-colors",
  "focus:outline-2",
  "focus:outline-offset-4",
];

export default function Button({
  variant = "default",
  size = "base",
  iconOnly = false,
  gap,
  isLink = false,
  href,
  className,
  leftIcon,
  rightIcon,
  icon,
  children,
  ...rest
}: ButtonProps) {
  const sizeClass = iconOnly ? iconSizes[size] : sizes[size];
  const gapClass = !iconOnly && gap ? gapMap[gap] : [];
  const classes = clsx(
    baseClass,
    variantClass[variant],
    sizeClass,
    gapClass,
    className
  );

  if (isLink) {
    return (
      <a href={href} className={classes} {...rest}>
        {iconOnly ? icon : null}
        {!iconOnly && (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {iconOnly ? icon : null}
      {!iconOnly && (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}
