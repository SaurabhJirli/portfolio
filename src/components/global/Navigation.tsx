"use client";

import { useEffect, useState } from "react";
import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import Burger from "@/components/fundations/icons/Burger";
import Plus from "@/components/fundations/icons/Plus";

const navLinks = [
  { text: "Colors", href: "/system/colors" },
  { text: "Links", href: "/system/link" },
  { text: "Buttons", href: "/system/buttons" },
  { text: "Typography", href: "/system/typography" },
  { text: "Blog", href: "/blog" },
  { text: "Store", href: "/store/" },
  { text: "Projects", href: "/projects/" },
  { text: "Studio", href: "/studio" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden-no-shift", open);

    if (open) {
      const links = document.querySelectorAll("#menuContent nav a");
      links.forEach((link, index) => {
        const element = link as HTMLElement;
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "none";
        setTimeout(() => {
          element.style.transition = `opacity 0.3s ease-out ${index * 0.1}s, transform 0.3s ease-out ${index * 0.1}s`;
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, 50);
      });
    }
  }, [open]);

  return (
    <header>
      <Wrapper variant="standard">
        <nav role="navigation" className="items-center w-full py-4 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Text
              tag="a"
              variant="textXL"
              href="/"
              aria-label="Go to homepage"
              className="italic text-center font-display text-base-900 dark:text-white"
            >
              Jarvis
            </Text>
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              id="menuToggle"
              aria-controls="menu"
              aria-expanded={open}
              aria-label="Open menu"
              className="focus-visible:outline-none"
              onClick={() => setOpen((prev) => !prev)}
            >
              <span className="sr-only">Toggle menu</span>
              <Burger className="size-5 shrink-0 dark:text-white" />
            </button>
            <div
              id="menuContent"
              className={
                "fixed inset-0 z-50 transition-opacity duration-300 ease-in-out bg-white/20 dark:bg-black/50 backdrop-blur-xl " +
                (open ? "opacity-100" : "opacity-0 pointer-events-none")
              }
            >
              <Wrapper variant="standard" className="relative h-full px-8 py-4">
                <button
                  id="closeMenu"
                  aria-label="Close menu"
                  className="flex ml-auto text-base-900 dark:text-white"
                  onClick={() => setOpen(false)}
                >
                  <Plus className="transition duration-300 ease-in-out size-5 shrink-0 stroke-base-950 dark:stroke-white" />
                </button>
                <nav role="navigation" className="flex flex-col mt-4 gap-y-2">
                  {navLinks.map((link) => (
                    <div key={link.href} className="flex justify-end">
                      <Text
                        tag="a"
                        variant="textXL"
                        underlined={true}
                        href={link.href}
                        title={link.text}
                        aria-label={link.text}
                        className="block text-right dark:text-white text-base-900"
                      >
                        {link.text}
                      </Text>
                    </div>
                  ))}
                </nav>
              </Wrapper>
            </div>
          </div>
        </nav>
      </Wrapper>
    </header>
  );
}
