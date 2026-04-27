"use client";

import { useRef } from "react";
import Wrapper from "@/components/fundations/containers/Wrapper";
import useTextScrub from "@/lib/useTextScrub";
import useScrollReveal from "@/lib/useScrollReveal";

const STATEMENT =
  "I care about systems that are reliable, code that is clear, and products that respect the people using them.";

const words = STATEMENT.split(" ");

export default function Statement() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  useScrollReveal(sectionRef, { y: 12, duration: 0.35 });
  useTextScrub(textRef);

  return (
    <section ref={sectionRef} className="py-32 lg:py-48">
      <Wrapper variant="standard">
        <p
          ref={textRef}
          data-reveal
          className="mx-auto max-w-4xl text-center font-display italic text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight text-base-900 dark:text-white"
        >
          {words.map((word, i) => (
            <span key={i} className="inline-block mr-[0.3em] last:mr-0">
              {word}
            </span>
          ))}
        </p>
      </Wrapper>
    </section>
  );
}
