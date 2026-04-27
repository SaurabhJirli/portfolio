"use client";

import { useEffect } from "react";

export default function ScrollUpButton() {
  useEffect(() => {
    const btn = document.getElementById("scroll-to-top-btn");
    if (!btn) return;

    function onScroll() {
      if (window.scrollY > 100) {
        btn!.classList.remove("opacity-0");
        btn!.classList.add("opacity-100");
      } else {
        btn!.classList.remove("opacity-100");
        btn!.classList.add("opacity-0");
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed z-50 bottom-4 right-4 lg:bottom-6 lg:right-6">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center justify-center font-semibold shadow-lg opacity-0 text-base-900 duration-300 rounded-xl size-12 bg-base-50 hover:bg-base-200 dark:bg-base-800 dark:hover:bg-base-900 dark:text-white dark:ring-base-800 ring-1 ring-inset ring-base-200 transition-opacity"
        id="scroll-to-top-btn"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up size-6"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 5l0 14"></path>
          <path d="M16 9l-4 -4"></path>
          <path d="M8 9l4 -4"></path>
        </svg>
      </button>
    </div>
  );
}
