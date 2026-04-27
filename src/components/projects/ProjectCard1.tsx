import Link from "next/link";
import type { Route } from "next";
import Text from "@/components/fundations/elements/Text";
import type { ContentEntry } from "@/lib/content";

type ProjectData = {
  title?: string;
  subtitle?: string;
};

export default function ProjectCard1({ post }: { post: ContentEntry<ProjectData> }) {
  const url = "/projects/" + post.slug;
  const title = post.data.title ?? "";
  const subtitle = post.data.subtitle ?? "";

  return (
    <Link
      href={url as Route}
      title={`Read more about ${title}`}
      className="group relative flex flex-col justify-between p-6 sm:p-8 border border-base-200 dark:border-base-800 rounded-2xl bg-white dark:bg-base-950 transition-all duration-300 ease-out hover:border-transparent hover:shadow-accent dark:hover:shadow-accent"
    >
      <Text
        tag="h3"
        variant="textLG"
        className="font-medium tracking-tight text-base-900 dark:text-white text-wrap-balance"
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
      <span className="mt-6 text-sm font-medium text-base-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200">
        View project
        <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">&rarr;</span>
      </span>
    </Link>
  );
}
