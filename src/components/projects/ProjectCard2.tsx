import Link from "next/link";
import type { Route } from "next";
import Text from "@/components/fundations/elements/Text";
import type { ContentEntry } from "@/lib/content";

type ProjectData = {
  title?: string;
  subtitle?: string;
  logo?: { url?: string };
};

export default function ProjectCard2({ post }: { post: ContentEntry<ProjectData> }) {
  const url = "/projects/" + post.slug;
  const title = post.data.title ?? "";
  const subtitle = post.data.subtitle ?? "";
  const logo = post.data.logo?.url ?? "";

  return (
    <Link
      href={url as Route}
      title={`Read more about ${title}`}
      className="group relative grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 p-8 sm:p-10 rounded-2xl bg-base-50 dark:bg-base-900 border border-base-200/60 dark:border-base-800/60 transition-all duration-300 ease-out hover:border-transparent hover:shadow-accent dark:hover:shadow-accent"
    >
      <div className="flex flex-col justify-between">
        <div>
          <Text
            tag="h3"
            variant="textXL"
            className="font-medium tracking-tight text-base-900 dark:text-white text-wrap-balance"
          >
            {title}
          </Text>
          <Text
            tag="p"
            variant="textLG"
            className="mt-3 text-base-500 dark:text-base-400 leading-relaxed max-w-[56ch]"
          >
            {subtitle}
          </Text>
        </div>
        <span className="mt-8 text-sm font-medium text-base-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200">
          View project
          <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">&rarr;</span>
        </span>
      </div>
      {logo ? (
        <div className="overflow-hidden rounded-xl self-start order-first sm:order-last">
          <img
            src={logo}
            alt={title}
            width={200}
            height={200}
            className="size-16 sm:size-20 rounded-xl object-cover ring-1 ring-base-200 dark:ring-base-800 transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      ) : null}
    </Link>
  );
}
