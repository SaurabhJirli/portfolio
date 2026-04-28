import Link from "next/link";
import type { Route } from "next";
import Text from "@/components/fundations/elements/Text";
import type { ContentEntry } from "@/lib/content";

type ProjectData = {
  title?: string;
  subtitle?: string;
};

const PROJECT_META: Record<string, string> = {
  "Event Pipeline": "Kafka \u00B7 Events \u00B7 Services",
  "This Portfolio": "Next.js \u00B7 TypeScript \u00B7 Tailwind",
};

export default function ProjectCard1({
  post,
  index = 2,
}: {
  post: ContentEntry<ProjectData>;
  index?: number;
}) {
  const url = "/projects/" + post.slug;
  const title = post.data.title ?? "";
  const subtitle = post.data.subtitle ?? "";
  const num = String(index).padStart(2, "0");
  const meta = PROJECT_META[title] ?? "";

  return (
    <Link
      href={url as Route}
      title={`Read more about ${title}`}
      className="group block h-full"
    >
      <div className="h-full flex flex-col rounded-xl border border-base-200/40 dark:border-base-800/40 bg-white dark:bg-base-950 p-6 sm:p-8 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-base-300 dark:hover:border-base-700 hover:bg-base-50/50 dark:hover:bg-base-900/30">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] text-accent-600 dark:text-accent-400 tracking-[0.15em]">
            {num}
          </span>
          {meta && (
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-base-400 dark:text-base-600">
              {meta}
            </span>
          )}
        </div>

        <Text
          tag="h3"
          variant="textLG"
          className="mt-4 font-medium tracking-tight text-base-900 dark:text-white text-wrap-balance"
        >
          {title}
        </Text>

        <Text
          tag="p"
          variant="textSM"
          className="mt-3 text-base-500 dark:text-base-400 leading-relaxed"
        >
          {subtitle}
        </Text>

        <div className="mt-auto pt-6">
          <span className="inline-flex items-center text-sm text-base-400 dark:text-base-500 group-hover:text-base-900 dark:group-hover:text-white transition-colors duration-300">
            View project
            <span
              className="inline-block ml-1 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1.5"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
