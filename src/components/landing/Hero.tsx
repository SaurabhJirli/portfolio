"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import Button from "@/components/fundations/elements/Button";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll("[data-hero-reveal]");
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }
      gsap.set(targets, { opacity: 0, y: 14, willChange: "transform, opacity" });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.07,
        delay: 0,
        onComplete: () => {
          gsap.set(targets, { willChange: "auto" });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Ambient radial gradient — light mode */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 25% 50%, oklch(0.95 0.02 130 / 0.35), transparent 70%)",
        }}
      />
      {/* Ambient radial gradient — dark mode */}
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 25% 50%, oklch(0.2 0.03 130 / 0.2), transparent 70%)",
        }}
      />

      <Wrapper variant="wide" className="relative pt-24 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div className="max-w-3xl">
            <Text
              tag="p"
              variant="textSM"
              className="text-base-500 dark:text-base-400 font-mono tracking-wide"
              data-hero-reveal
            >
              Software Engineer
            </Text>

            <h1
              className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-display italic tracking-tight leading-[1.05] text-base-900 dark:text-white text-wrap-balance"
              data-hero-reveal
            >
              Hi, I'm Saurabh
            </h1>

            <p
              className="mt-4 text-xl sm:text-2xl font-light tracking-tight leading-snug text-base-500 dark:text-base-400"
              data-hero-reveal
            >
              I build things that work.
            </p>

            <Text
              tag="p"
              variant="textLG"
              className="mt-6 text-base-600 dark:text-base-400 leading-relaxed max-w-[52ch]"
              data-hero-reveal
            >
              Full-stack developer at Touchcore Systems, Pune. Mostly
              backend, but I also work on frontend and cloud when the
              project needs it.
            </Text>

            <div
              className="flex flex-wrap items-center gap-3 mt-10"
              data-hero-reveal
            >
              <Button isLink size="base" variant="default" href="/projects/">
                See my work
              </Button>
              <Button isLink size="base" variant="muted" href="/forms/contact">
                Get in touch
              </Button>
            </div>
          </div>

          {/* Avatar — visible across all breakpoints */}
          <div data-hero-reveal>
            <img
              width={400}
              height={400}
              src="/images/assets/avatar.png"
              alt="Saurabh Jirli"
              className="size-32 sm:size-40 lg:size-56 rounded-2xl object-cover ring-1 ring-base-200 dark:ring-base-800"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
