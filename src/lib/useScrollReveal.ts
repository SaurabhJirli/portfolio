"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollRevealOptions = {
  y?: number;
  delay?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  selector?: string;
};

/**
 * Animates child elements marked with `data-reveal` into view
 * when the container scrolls into the viewport.
 *
 * Usage:
 *   const ref = useRef<HTMLElement>(null);
 *   useScrollReveal(ref);
 *   <section ref={ref}><div data-reveal>...</div></section>
 */
export default function useScrollReveal(
  containerRef: RefObject<HTMLElement | null>,
  options: ScrollRevealOptions = {}
) {
  const {
    y = 18,
    delay = 0,
    duration = 0.7,
    stagger = 0.08,
    start = "top 88%",
    selector = "[data-reveal]",
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const targets = container.querySelectorAll(selector);
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(targets, { y, willChange: "transform, opacity" });

      ScrollTrigger.create({
        trigger: container,
        start,
        once: true,
        onEnter: () => {
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration,
            ease: "power2.out",
            stagger,
            delay,
            onComplete: () => {
              gsap.set(targets, { willChange: "auto" });
            },
          });
        },
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef, y, delay, duration, stagger, start, selector]);
}
