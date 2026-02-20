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

export default function Twitter({ size = "base", className, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={clsx("icon", sizes[size], className)}
      {...rest}
    >
      <path d="M244,72.2a68.2,68.2,0,0,1-19.8,5.4,34.4,34.4,0,0,0,15.1-19.1,68.8,68.8,0,0,1-21.8,8.3,34.4,34.4,0,0,0-59.3,23.5,35.1,35.1,0,0,0,.9,7.8A97.7,97.7,0,0,1,42.6,58.6a34.4,34.4,0,0,0,10.6,45.9A34.1,34.1,0,0,1,37.6,100v.4a34.4,34.4,0,0,0,27.6,33.7,34.6,34.6,0,0,1-15.5.6,34.4,34.4,0,0,0,32.1,23.9A69,69,0,0,1,32,188.4a69.5,69.5,0,0,1-8-.5,97.4,97.4,0,0,0,52.7,15.5c63.2,0,97.8-52.3,97.8-97.8,0-1.5,0-3-.1-4.4A70,70,0,0,0,244,72.2Z"></path>
    </svg>
  );
}
