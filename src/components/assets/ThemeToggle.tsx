"use client";

import { useEffect } from "react";
import Button from "@/components/fundations/elements/Button";
import Toggle from "@/components/fundations/icons/Toggle";

export type ThemeToggleProps = {
  className?: string;
  "aria-label"?: string;
};

export default function ThemeToggle({ className, ...rest }: ThemeToggleProps) {
  useEffect(() => {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    function updateTheme(isDark: boolean) {
      document.documentElement.classList.toggle("dark", isDark);
      toggle.setAttribute("aria-checked", isDark ? "true" : "false");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    function initializeTheme() {
      const savedTheme = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const isDark = savedTheme ? savedTheme === "dark" : systemPrefersDark;
      updateTheme(isDark);
    }

    initializeTheme();

    const handleClick = () => {
      const isDark = toggle.getAttribute("aria-checked") === "true";
      updateTheme(!isDark);
    };

    toggle.addEventListener("click", handleClick);
    return () => toggle.removeEventListener("click", handleClick);
  }, []);

  return (
    <Button
      iconOnly
      size="sm"
      variant="muted"
      className={"fixed z-50 bottom-2 left-2 lg:bottom-4 lg:left-4 " + (className ?? "")}
      role="switch"
      aria-checked="false"
      id="theme-toggle"
      icon={<Toggle size="sm" />}
      {...rest}
    />
  );
}
