"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TextScrubOptions = {
  start?: string;
  end?: string;
  startOpacity?: number;
};

/**
 * Scrubs word-level opacity from dim to full as the user scrolls.
 * Container must hold <span> elements wrapping each word.
 *
 * Usage:
 *   const ref = useRef<HTMLElement>(null);
 *   useTextScrub(ref);
 *   <p ref={ref}>{words.map(w => <span key={w}>{w} </span>)}</p>
 */
export default function useTextScrub(
  containerRef: RefObject<HTMLElement | null>,
  options: TextScrubOptions = {}
) {
  const {
    start = "top 85%",
    end = "bottom 40%",
    startOpacity = 0.12,
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll("span");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(words, { opacity: 1 });
        return;
      }

      gsap.set(words, { opacity: startOpacity });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start,
          end,
          scrub: true,
        },
      });

      tl.to(words, {
        opacity: 1,
        duration: 1,
        stagger: 0.05,
        ease: "none",
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef, start, end, startOpacity]);
}
