import Link from "next/link";
import type { Route } from "next";
import Text from "@/components/fundations/elements/Text";
import type { ContentEntry } from "@/lib/content";

type BlogData = {
  title?: string;
  description?: string;
  image?: { url?: string };
  pubDate?: string;
};

export default function BlogCard({ post }: { post: ContentEntry<BlogData> }) {
  const url = "/blog/posts/" + post.slug;
  const title = post.data.title ?? "";
  const description = post.data.description ?? "";
  const image = post.data.image?.url ?? "";
  const pubDate = post.data.pubDate
    ? new Date(post.data.pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      })
    : "";

  return (
    <Link
      href={url as Route}
      title={`Read more about ${title}`}
      aria-label={`Read more about ${title}`}
      className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 p-6 sm:p-8 border border-border-subtle rounded-2xl bg-surface transition-all duration-300 ease-out hover:border-border-strong"
    >
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-sm text-text-muted">
            <time className="font-mono text-xs">{pubDate}</time>
            <span className="text-border-subtle" aria-hidden="true">&middot;</span>
            <span className="font-mono text-xs">{post.readingTime}</span>
          </div>
          <Text
            tag="h3"
            variant="textLG"
            className="mt-3 font-medium tracking-tight text-text-primary text-wrap-balance"
          >
            {title}
          </Text>
          <Text
            tag="p"
            variant="textBase"
            className="mt-2 text-text-secondary leading-relaxed line-clamp-2"
          >
            {description}
          </Text>
        </div>
        <span className="mt-6 text-sm font-medium text-text-primary group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200">
          Read article
          <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">&rarr;</span>
        </span>
      </div>
      {image ? (
        <div className="overflow-hidden rounded-xl order-first sm:order-last self-start">
          <img
            src={image}
            alt={title}
            width={200}
            height={200}
            className="size-24 sm:size-32 rounded-xl object-cover ring-1 ring-border-subtle transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      ) : null}
    </Link>
  );
}
