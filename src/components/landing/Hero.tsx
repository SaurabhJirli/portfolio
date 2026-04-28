"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import Wrapper from "@/components/fundations/containers/Wrapper";
import Button from "@/components/fundations/elements/Button";

const TYPED_HEADLINE = "I build things that work.";

function useTypedLine(phrase: string, startDelay: number) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);

  const start = useCallback(() => setStarted(true), []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayed(phrase);
      setDone(true);
      return;
    }

    if (!started) return;

    let i = 0;
    let timeout: ReturnType<typeof setTimeout>;

    function scheduleNext() {
      timeout = setTimeout(() => {
        i++;
        setDisplayed(phrase.slice(0, i));
        if (i < phrase.length) {
          scheduleNext();
        } else {
          setDone(true);
        }
      }, 45);
    }

    const delay = setTimeout(() => {
      scheduleNext();
    }, startDelay);

    return () => {
      clearTimeout(delay);
      clearTimeout(timeout);
    };
  }, [phrase, startDelay, started]);

  return { displayed, done, start };
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const typed = useTypedLine(TYPED_HEADLINE, 150);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const targets = section.querySelectorAll("[data-hero-reveal]");
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(targets, { opacity: 1, y: 0 });
        typed.start();
        return;
      }
      gsap.set(targets, {
        opacity: 0,
        y: 14,
        willChange: "transform, opacity",
      });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.07,
        delay: 0,
        onComplete: () => {
          gsap.set(targets, { willChange: "auto" });
          typed.start();
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.95 0.02 130 / 0.35), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.2 0.03 130 / 0.2), transparent 70%)",
        }}
      />

      <Wrapper
        variant="wide"
        className="relative flex min-h-[calc(100svh-80px)] items-center py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-4xl text-center">
          <p
            className="text-sm text-text-muted font-mono tracking-wide"
            data-hero-reveal
          >
            Saurabh Jirli &mdash; Software Development Engineer
          </p>

          <h1
            className="mt-6 font-display italic tracking-tight leading-[1.08] text-text-primary text-wrap-balance"
            style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)" }}
            aria-label={TYPED_HEADLINE}
          >
            <span aria-hidden="true">{typed.displayed}</span>
            <span
              aria-hidden="true"
              className="inline-block w-[2.5px] h-[0.85em] align-middle ml-1 bg-base-400 dark:bg-base-500 rounded-full"
              style={{
                animation: typed.done
                  ? "heroCursorFade 1.6s ease-out forwards"
                  : "heroCursorBlink 0.9s steps(2, start) infinite",
              }}
            />
          </h1>

          <p
            className="mx-auto mt-6 text-lg sm:text-xl leading-relaxed text-text-secondary max-w-[54ch]"
            data-hero-reveal
          >
            Software development engineer building backend services, cloud-based
            applications, and IoT-related systems, with frontend work when the
            project needs it.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-3 mt-10"
            data-hero-reveal
          >
            <Button isLink size="base" variant="default" href="/projects/">
              View my work
            </Button>
            <Button isLink size="base" variant="muted" href="/forms/contact">
              Contact me
            </Button>
          </div>
        </div>
      </Wrapper>

      <style jsx>{`
        @keyframes heroCursorBlink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        @keyframes heroCursorFade {
          0% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          span[aria-hidden="true"] {
            animation: none !important;
            opacity: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
