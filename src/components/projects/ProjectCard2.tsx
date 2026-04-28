import Link from "next/link";
import type { Route } from "next";
import Text from "@/components/fundations/elements/Text";
import type { ContentEntry } from "@/lib/content";

type ProjectData = {
  title?: string;
  subtitle?: string;
  pubDate?: string;
  logo?: { url?: string };
};

const FLOW_NODES = ["Devices", "MQTT", "API", "Alerts", "Reports"] as const;

export default function ProjectCard2({
  post,
  featured = false,
}: {
  post: ContentEntry<ProjectData>;
  featured?: boolean;
}) {
  const url = "/projects/" + post.slug;
  const title = post.data.title ?? "";
  const subtitle = post.data.subtitle ?? "";
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
      <div className="rounded-2xl border border-base-200/40 dark:border-base-800/40 bg-base-100/50 dark:bg-base-900/30 p-1.5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-base-300 dark:hover:border-base-700">
        {/* Inner core */}
        <div className="rounded-[calc(1rem-4px)] bg-white dark:bg-base-950 p-8 sm:p-10 lg:p-12">
          <div className={featured ? "grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16" : ""}>
            {/* Left — editorial content */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4">
                {featured && (
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent-600 dark:text-accent-400">
                    01
                  </span>
                )}
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-base-400 dark:text-base-500">
                  {featured ? "Featured project" : "Project"}
                </span>
                {year && (
                  <span className="font-mono text-[11px] text-base-400 dark:text-base-500 ml-auto">
                    {year}
                  </span>
                )}
              </div>

              <Text
                tag="h3"
                variant="displaySM"
                className="mt-5 font-display italic tracking-tight text-base-900 dark:text-white text-wrap-balance"
              >
                {title}
              </Text>

              <Text
                tag="p"
                variant="textBase"
                className="mt-4 text-base-500 dark:text-base-400 leading-relaxed max-w-xl"
              >
                {subtitle}
              </Text>

              <div className="mt-auto pt-8">
                <span className="text-sm font-medium text-base-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">
                  Read case study
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
                <div className="rounded-xl border border-base-200/60 dark:border-base-800/50 bg-base-50/80 dark:bg-base-900/40 p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-base-400 dark:text-base-600 mb-5">
                    System flow
                  </p>
                  <div className="flex flex-col gap-0">
                    {FLOW_NODES.map((node, i) => (
                      <div key={node} className="flex flex-col items-start">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center justify-center size-6 rounded-md bg-base-100 dark:bg-base-800 border border-base-200/60 dark:border-base-700/40">
                            <span className="block size-1.5 rounded-full bg-base-400 dark:bg-base-500" />
                          </span>
                          <span className="font-mono text-xs text-base-600 dark:text-base-400 tracking-wide">
                            {node}
                          </span>
                        </div>
                        {i < FLOW_NODES.length - 1 && (
                          <div className="ml-3 h-3 border-l border-base-200 dark:border-base-800" />
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
