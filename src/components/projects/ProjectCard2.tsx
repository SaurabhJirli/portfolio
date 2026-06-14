import Link from "next/link";
import type { Route } from "next";
import clsx from "clsx";
import Text from "@/components/fundations/elements/Text";
import type { ContentEntry } from "@/lib/content";

type ProjectData = {
  title?: string;
  subtitle?: string;
  pubDate?: string;
  status?: string;
  logo?: { url?: string };
};

const FLOW_NODES = ["Devices", "MQTT", "API", "Alerts", "Reports"] as const;

export default function ProjectCard2({
  post,
  featured = false,
  label,
}: {
  post: ContentEntry<ProjectData>;
  featured?: boolean;
  label?: string;
}) {
  const url = "/projects/" + post.slug;
  const title = post.data.title ?? "";
  const subtitle = post.data.subtitle ?? "";
  const isWip = post.data.status === "wip";
  const year = post.data.pubDate
    ? new Date(post.data.pubDate).getFullYear()
    : null;

  return (
    <Link
      href={url as Route}
      title={`Read more about ${title}`}
      className="group block"
    >
      {/* Outer shell — double-bezel */}
      <div
        className={clsx(
          "rounded-2xl border bg-surface-inset p-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isWip
            ? "border-accent-200/60 dark:border-accent-900/60 hover:border-accent-300 dark:hover:border-accent-700"
            : "border-border-subtle hover:border-border-strong"
        )}
      >
        {/* Inner core */}
        <div className="rounded-[calc(1rem-4px)] bg-surface p-8 sm:p-10 lg:p-12">
          <div
            className={
              featured
                ? "grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16"
                : ""
            }
          >
            {/* Left — editorial content */}
            <div className="flex flex-col">
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-3">
                {isWip && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-100 dark:bg-accent-950/60 border border-accent-200 dark:border-accent-800/50 text-[10px] font-mono uppercase tracking-[0.12em] text-accent-700 dark:text-accent-400">
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-50 animate-[wip-pulse_2.5s_ease-in-out_infinite]" />
                      <span className="relative inline-flex rounded-full size-1.5 bg-accent-600 dark:bg-accent-400" />
                    </span>
                    In progress
                  </span>
                )}
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
                  {label ?? (featured ? "Featured project" : "Project")}
                </span>
                {year && (
                  <span className="font-mono text-[11px] text-text-muted ml-auto tabular-nums">
                    {year}
                  </span>
                )}
              </div>

              <Text
                tag="h3"
                variant="displaySM"
                className="mt-5 font-display italic tracking-tight text-text-primary text-wrap-balance"
              >
                {title}
              </Text>

              <Text
                tag="p"
                variant="textBase"
                className="mt-4 text-text-secondary leading-relaxed max-w-xl"
              >
                {subtitle}
              </Text>

              {isWip && (
                <p className="mt-3 text-sm italic text-text-muted leading-relaxed">
                  Currently being refined — this case study evolves with the
                  project.
                </p>
              )}

              <div className="mt-auto pt-8">
                <span className="text-sm font-medium text-text-primary group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">
                  {isWip ? "Follow the build" : "Read case study"}
                  <span
                    className="inline-block ml-1.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-2"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </span>
              </div>
            </div>

            {/* Right — abstract system flow (featured only) */}
            {featured && (
              <div className="hidden lg:flex flex-col justify-center">
                <div className="rounded-xl border border-border-subtle bg-canvas p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted mb-5">
                    System flow
                  </p>
                  <div className="flex flex-col gap-0">
                    {FLOW_NODES.map((node, i) => (
                      <div key={node} className="flex flex-col items-start">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center justify-center size-6 rounded-md bg-surface-inset">
                            <span className="block size-1.5 rounded-full bg-text-muted" />
                          </span>
                          <span className="font-mono text-xs text-text-secondary tracking-wide">
                            {node}
                          </span>
                        </div>
                        {i < FLOW_NODES.length - 1 && (
                          <div className="ml-3 h-3 border-l border-border-subtle" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
