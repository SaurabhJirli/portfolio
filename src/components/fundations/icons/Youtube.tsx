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

export default function Youtube({ size = "base", className, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={clsx("icon", sizes[size], className)}
      {...rest}
    >
      <path d="M245.2,74.6a32.1,32.1,0,0,0-22.6-22.7C202.8,47.2,128,47.2,128,47.2s-74.8,0-94.6,4.7A32.1,32.1,0,0,0,10.8,74.6C6.1,94.5,6.1,128,6.1,128s0,33.5,4.7,53.4a32.1,32.1,0,0,0,22.6,22.7c19.8,4.7,94.6,4.7,94.6,4.7s74.8,0,94.6-4.7a32.1,32.1,0,0,0,22.6-22.7c4.7-19.9,4.7-53.4,4.7-53.4S249.9,94.5,245.2,74.6ZM104,160V96l56,32Z"></path>
    </svg>
  );
}
