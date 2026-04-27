import Link from "next/link";
import type { Route } from "next";
import Text from "@/components/fundations/elements/Text";
import type { ContentEntry } from "@/lib/content";

type WorkData = {
  title?: string;
  subtitle?: string;
  pubDate?: string;
};

export default function WorkCard({ post }: { post: ContentEntry<WorkData> }) {
  const url = "/work/" + post.slug;
  const title = post.data.title ?? "";
  const subtitle = post.data.subtitle ?? "";
  const pubDate = post.data.pubDate
    ? new Date(post.data.pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      })
    : "";

  return (
    <Link
      href={url as Route}
      title={title}
      className="group flex flex-col justify-between p-6 sm:p-8 border border-base-200 dark:border-base-800 rounded-2xl bg-white dark:bg-base-950 transition-all duration-300 ease-out hover:border-transparent hover:shadow-accent dark:hover:shadow-accent"
    >
      <div>
        <Text
          tag="p"
          variant="textXS"
          className="font-mono text-base-500 dark:text-base-500"
        >
          {pubDate}
        </Text>
        <Text
          tag="h3"
          variant="textLG"
          className="mt-2 font-medium tracking-tight text-base-900 dark:text-white"
        >
          {title}
        </Text>
        <Text
          tag="p"
          variant="textBase"
          className="mt-3 text-base-500 dark:text-base-400 leading-relaxed"
        >
          {subtitle}
        </Text>
      </div>
      <span className="mt-6 text-sm font-medium text-base-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200">
        Read more
        <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  );
}
