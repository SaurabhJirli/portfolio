"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";
import Button from "@/components/fundations/elements/Button";
import SearchIcon from "@/components/fundations/icons/Search";

export type SearchItem = {
  title: string;
  description: string;
  slug: string;
};

export default function SearchClient({ posts }: { posts: SearchItem[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const fuse = useMemo(
    () =>
      new Fuse(posts, {
        keys: ["title", "description"],
        threshold: 0.3,
        includeMatches: true,
      }),
    [posts]
  );

  const results = query.trim() ? fuse.search(query.trim()) : [];

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div className="relative">
      <Button
        iconOnly
        size="sm"
        variant="muted"
        type="button"
        aria-label="Search posts"
        className="fixed z-50 bottom-2 right-2 lg:bottom-4 lg:right-4"
        onClick={() => setOpen(true)}
        icon={<SearchIcon size="sm" />}
      />
      <div
        className={
          "fixed inset-0 z-50 overflow-y-auto " + (open ? "" : "hidden")
        }
        role="dialog"
        aria-modal="true"
      >
        <div className="min-h-screen px-4 text-center">
          <div
            className="fixed inset-0 bg-zinc-950/50 backdrop-blur transition-opacity"
            onClick={() => setOpen(false)}
          ></div>
          <div className="relative inline-block w-full max-w-2xl px-8 mt-12 mb-8 text-left align-middle lg:mt-48 transition-all transform">
            <div className="hidden">
              <button
                type="button"
                className="ml-auto cursor-pointer text-zinc-400 hover:text-zinc-500"
                aria-label="Close search"
                onClick={() => setOpen(false)}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.877075 7.49988C0.877075 3.84219 3.84222 0.877045 7.49991 0.877045C11.1576 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1576 14.1227 7.49991 14.1227C3.84222 14.1227 0.877075 11.1575 0.877075 7.49988ZM7.49991 1.82704C4.36689 1.82704 1.82708 4.36686 1.82708 7.49988C1.82708 10.6329 4.36689 13.1727 7.49991 13.1727C10.6329 13.1727 13.1727 10.6329 13.1727 7.49988C13.1727 4.36686 10.6329 1.82704 7.49991 1.82704ZM9.85358 5.14644C10.0488 5.3417 10.0488 5.65829 9.85358 5.85355L8.20713 7.49999L9.85358 9.14644C10.0488 9.3417 10.0488 9.65829 9.85358 9.85355C9.65832 10.0488 9.34173 10.0488 9.14647 9.85355L7.50002 8.2071L5.85358 9.85355C5.65832 10.0488 5.34173 10.0488 5.14647 9.85355C4.95121 9.65829 4.95121 9.3417 5.14647 9.14644L6.79292 7.49999L5.14647 5.85355C4.95121 5.65829 4.95121 5.3417 5.14647 5.14644C5.34173 4.95118 5.65832 4.95118 5.85358 5.14644L7.50002 6.79289L9.14647 5.14644C9.34173 4.95118 9.65832 4.95118 9.85358 5.14644Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search posts..."
              className="flex-auto w-full h-10 px-3 py-2 text-center border-transparent rounded-full appearance-none outline outline-base-200 dark:outline-base-800 dark:text-white text-base-900 outline-inset shadow-base-800/5 dark:placeholder:text-base-400 dark:place-holder-text-base-600 duration-300 focus:border-base-500 focus:outline-none focus:outline-4 focus:outline-base-500/10 sm:text-sm bg-base-50 dark:bg-base-800"
            />
            <div className="w-full mt-2 overflow-hidden overflow-y-auto bg-white max-h-100 rounded-xl dark:bg-black divide-y divide-zinc-200 border-y border-zinc-200 dark:border-y-black dark:divide-white/5 scrollbar-hide">
              {!query.trim() ? null : results.length === 0 ? (
                <div className="p-8">
                  <h3 className="text-sm font-medium text-zinc-500">
                    There is nothing here...
                  </h3>
                </div>
              ) : (
                results.map((result) => (
                  <a
                    key={result.item.slug}
                    href={`/blog/posts/${result.item.slug}`}
                    className="block p-8 hover:bg-zinc-100 duration-300 dark:hover:bg-white/5"
                  >
                    <h3 className="block text-sm font-medium text-zinc-900 dark:text-white">
                      {result.item.title}
                    </h3>
                    <p className="block text-xs text-zinc-500">
                      {result.item.description}
                    </p>
                  </a>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
