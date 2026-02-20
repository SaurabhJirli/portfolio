import Button from "@/components/fundations/elements/Button";
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
    <article className="relative p-2 shadow grid sm:grid-cols-2 ring-base-200 dark:ring-base-800 group rounded-3xl hover:shadow-light dark:hover:shadow-dark bg-linear-45 from-white dark:from-base-800 duration-300 to-base-100 dark:to-base-950">
      <a
        href={url}
        title={title}
        aria-label={`Read more about ${title}`}
        className="absolute inset-0 z-10"
      ></a>
      <div className="relative flex flex-col justify-between h-full p-4 overflow-hidden md:min-h-96 rounded-2xl group">
        <div>
          <Text tag="p" variant="textXS" className="dark:text-base-400 text-base-600">
            <time>{pubDate}</time>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </Text>
          <Text
            tag="h3"
            variant="textBase"
            className="mt-4 font-medium uppercase dark:text-white text-base-900 text-balance"
          >
            {title}
          </Text>
        </div>
        <div className="relative flex flex-col items-start justify-between sm:-mb-20 sm:group-hover:mb-0 gap-12 duration-300">
          <Text
            tag="p"
            variant="textBase"
            className="mt-8 dark:text-base-400 text-base-600 leading-6 text-balance"
          >
            {description}
          </Text>
          <Button
            isLink
            size="xs"
            variant="default"
            href={url}
            aria-label={`Read more about ${title}`}
            aria-hidden={true}
            className="pointer-events-none"
          >
            Read more
          </Button>
        </div>
      </div>
      {image ? (
        <img
          src={image}
          alt={title}
          width={500}
          height={800}
          className="order-first object-cover w-full h-full rounded-2xl"
        />
      ) : null}
    </article>
  );
}
