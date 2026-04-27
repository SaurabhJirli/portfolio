import clsx from "clsx";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

const textStyles: Record<string, string> = {
  display6XL: "text-4xl  sm:text-7xl md:text-9xl lg:text-[12rem]",
  display5XL: "text-4xl  sm:text-7xl md:text-8xl lg:text-[10rem]",
  display4XL: "text-4xl  sm:text-7xl md:text-8xl lg:text-9xl",
  display3XL: "text-5xl  sm:text-6xl md:text-7xl lg:text-8xl",
  display2XL: "text-5xl  sm:text-5xl md:text-6xl lg:text-7xl",
  displayXL: "text-4xl  sm:text-4xl md:text-5xl lg:text-6xl",
  displayLG: "text-3xl  sm:text-3xl md:text-4xl lg:text-5xl",
  displayMD: "text-2xl  sm:text-2xl md:text-3xl lg:text-4xl",
  displaySM: "text-lg  sm:text-xl md:text-2xl lg:text-3xl",
  displayXS: "text-base  sm:text-lg md:text-xl lg:text-2xl",
  textXL: "text-lg sm:text-xl md:text-2xl",
  textLG: "text-base sm:text-lg md:text-xl ",
  textBase: "text-base",
  textSM: "text-sm ",
  textXS: "text-xs ",
};

export type TextProps<T extends ElementType = "p"> = {
  tag?: T;
  variant?: keyof typeof textStyles;
  underlined?: boolean;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Text<T extends ElementType = "p">({
  tag,
  variant,
  underlined = false,
  className,
  leftIcon,
  rightIcon,
  children,
  ...rest
}: TextProps<T>) {
  const Tag = (tag ?? "p") as ElementType;
  const baseClasses = variant ? textStyles[variant] || textStyles.textBase : "";
  const underlineClasses =
    Tag === "a" && underlined
      ? "relative group after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black dark:after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
      : "";

  return (
    <Tag className={clsx(baseClasses, underlineClasses, className)} {...rest}>
      {leftIcon}
      {children}
      {rightIcon}
    </Tag>
  );
}
