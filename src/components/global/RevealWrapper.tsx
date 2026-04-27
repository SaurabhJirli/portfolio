"use client";

import { useRef, type ReactNode } from "react";
import useScrollReveal from "@/lib/useScrollReveal";

type RevealWrapperProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  stagger?: number;
  y?: number;
};

export default function RevealWrapper({
  children,
  className,
  as: Tag = "div",
  stagger = 0.06,
  y = 14,
}: RevealWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref, { stagger, y });

  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement> & React.RefObject<HTMLElement>} className={className}>
      {children}
    </Tag>
  );
}
