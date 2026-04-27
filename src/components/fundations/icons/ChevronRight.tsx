import clsx from "clsx";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl";
};

const sizes = {
  xs: "size-3",
  sm: "size-4",
  base: "size-5",
  md: "size-6",
  lg: "size-7",
  xl: "size-8",
};

export default function ChevronRight({ size = "base", className, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx("icon", sizes[size], className)}
      {...rest}
    >
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  );
}
