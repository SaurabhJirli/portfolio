import clsx from "clsx";

export type WrapperProps = {
  variant?: "standard" | "wide" | "prose";
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

const variantClasses = {
  standard: "px-6 sm:px-8 mx-auto max-w-5xl",
  wide: "px-6 sm:px-8 mx-auto max-w-6xl",
  prose:
    "prose prose-blockquote:border-l-base-400 prose-a:dark:text-base-400 text-base-600 hover:prose-a:text-white prose-headings:font-normal dark:prose-headings:text-white dark:prose-li:marker:text-white dark:text-base-400 text-base-600 prose-strong:font-medium prose-pre:ring-1 prose-pre:shadow dark:prose-strong:text-white mx-auto max-w-3xl prose-code:text-white prose-pre:ring-base-200 dark:prose-pre:ring-base-700",
};

export default function Wrapper({
  variant = "standard",
  className,
  id,
  children,
}: WrapperProps) {
  return (
    <div id={id} className={clsx(variantClasses[variant], className)}>
      {children}
    </div>
  );
}
