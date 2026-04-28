"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import Wrapper from "@/components/fundations/containers/Wrapper";
import Logo from "@/components/assets/Logo";
import Burger from "@/components/fundations/icons/Burger";
import Plus from "@/components/fundations/icons/Plus";

const navLinks = [
  { text: "About", href: "/#about" },
  { text: "Work", href: "/#work" },
  { text: "Projects", href: "/projects/" },
  { text: "Stack", href: "/stack" },
  { text: "Contact", href: "/forms/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden-no-shift", open);

    if (open) {
      const links = document.querySelectorAll("#menuContent nav a");
      links.forEach((link, index) => {
        const element = link as HTMLElement;
        element.style.opacity = "0";
        element.style.transform = "translateY(12px)";
        element.style.transition = "none";
        setTimeout(() => {
          element.style.transition = `opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.06}s, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.06}s`;
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, 50);
      });
    }
  }, [open]);

  return (
    <header
      className={
        "sticky top-0 z-40 transition-all duration-300 " +
        (scrolled
          ? "bg-canvas/90 backdrop-blur-2xl border-b border-border-subtle"
          : "bg-transparent border-b border-transparent")
      }
    >
      <Wrapper variant="standard">
        <nav role="navigation" className="flex items-center justify-between h-16">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex items-center gap-2.5 group"
          >
            <Logo className="size-5 text-text-primary transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display text-lg tracking-tight text-text-primary">
              Saurabh Jirli
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href as Route}
                  className={
                    "relative px-3.5 py-2 text-[13px] tracking-wide transition-colors duration-200 " +
                    (active
                      ? "text-text-primary"
                      : "text-text-muted hover:text-text-primary")
                  }
                  aria-current={active ? "page" : undefined}
                >
                  {link.text}
                  {active && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-px bg-text-primary" />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            id="menuToggle"
            aria-controls="menu"
            aria-expanded={open}
            aria-label="Open menu"
            className="lg:hidden p-2 -mr-2 rounded-md text-text-primary hover:bg-surface transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-400"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            <Burger className="size-5 shrink-0" />
          </button>

          <div
            id="menuContent"
            aria-hidden={!open}
            inert={!open || undefined}
            className={
              "fixed inset-0 z-50 transition-opacity duration-300 ease-out bg-canvas/95 backdrop-blur-2xl lg:hidden " +
              (open ? "opacity-100" : "opacity-0 pointer-events-none")
            }
          >
            <Wrapper variant="standard" className="relative h-full flex flex-col">
              <div className="flex items-center justify-between h-16">
                <Link
                  href="/"
                  className="flex items-center gap-2.5"
                  onClick={() => setOpen(false)}
                >
                  <Logo className="size-5 text-text-primary" />
                  <span className="font-display text-lg tracking-tight text-text-primary">
                    Saurabh Jirli
                  </span>
                </Link>
                <button
                  id="closeMenu"
                  aria-label="Close menu"
                  className="p-2 -mr-2 rounded-md text-text-primary hover:bg-surface transition-colors duration-200"
                  onClick={() => setOpen(false)}
                >
                  <Plus className="size-5 shrink-0" />
                </button>
              </div>
              <nav role="navigation" className="flex flex-col mt-8 gap-1">
                {navLinks.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href as Route}
                      title={link.text}
                      aria-label={link.text}
                      aria-current={active ? "page" : undefined}
                      className={
                        "px-4 py-3 text-2xl rounded-lg transition-colors duration-200 " +
                        (active
                          ? "font-medium text-text-primary bg-surface-inset"
                          : "font-light text-text-primary hover:bg-surface")
                      }
                      onClick={() => setOpen(false)}
                    >
                      {link.text}
                    </Link>
                  );
                })}
              </nav>
            </Wrapper>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
}
