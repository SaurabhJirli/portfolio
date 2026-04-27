import ScrollUpButton from "@/components/assets/ScrollUpButton";
import Link from "next/link";
import type { Route } from "next";
import Button from "@/components/fundations/elements/Button";
import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import BlogCard from "@/components/blog/BlogCard";
import SubscribeCta from "@/components/blog/SubscribeCta";
import type { ContentEntry } from "@/lib/content";

type BlogFrontmatter = {
  title?: string;
  description?: string;
  pubDate?: string;
  tags?: string[];
  image?: { url?: string; alt?: string };
};

export default function BlogLayout({
  frontmatter,
  readingTime,
  previous,
  next,
  allPosts,
  children,
}: {
  frontmatter: BlogFrontmatter;
  readingTime: string;
  previous: ContentEntry<BlogFrontmatter> | null;
  next: ContentEntry<BlogFrontmatter> | null;
  allPosts: ContentEntry<BlogFrontmatter>[];
  children: React.ReactNode;
}) {
  const pubDate = frontmatter.pubDate
    ? new Date(frontmatter.pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      })
    : "";

  return (
    <>
      <ScrollUpButton />
      <section>
        <Wrapper variant="standard" className="py-20 lg:py-32">
          <div className="max-w-2xl">
            <Text
              tag="h1"
              variant="displayXL"
              className="tracking-tight text-base-900 dark:text-white"
            >
              {frontmatter.title}
            </Text>
            <div className="flex items-center gap-3 mt-4 text-sm font-mono text-base-500 dark:text-base-500">
              <time dateTime={pubDate}>{pubDate}</time>
              <span className="text-base-300 dark:text-base-700" aria-hidden="true">&middot;</span>
              <span>{readingTime}</span>
            </div>
            <Text
              tag="p"
              variant="textLG"
              className="mt-4 text-base-500 dark:text-base-400 leading-relaxed"
            >
              {frontmatter.description}
            </Text>
          </div>
          <div className="mt-12 space-y-12">
            {frontmatter.image?.url ? (
              <img
                src={frontmatter.image.url}
                alt={frontmatter.image.alt ?? ""}
                width={800}
                height={400}
                className="object-cover object-center w-full rounded-2xl ring-1 ring-base-200 dark:ring-base-800 max-h-72"
              />
            ) : null}
            <Wrapper variant="prose">{children}</Wrapper>
            <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-base-200 dark:border-base-800">
              {(frontmatter.tags ?? []).map((tag, index) => (
                <span key={tag}>
                  {index > 0 && (
                    <span className="text-base-300 dark:text-base-700" aria-hidden="true">&middot;</span>
                  )}
                  <Text
                    tag="a"
                    variant="textSM"
                    underlined={true}
                    href={`/blog/tags/${tag}`}
                    className="text-base-900 dark:text-white capitalize"
                  >
                    {tag}
                  </Text>
                </span>
              ))}
            </div>
            <nav className="flex items-center justify-between pt-8 mt-8 border-t border-base-200 dark:border-base-800 text-sm">
              <div>
                {previous && (
                  <Link href={`/blog/posts/${previous.slug}` as Route} className="group">
                    <span className="block text-xs font-mono text-base-500 dark:text-base-500">
                      Previous
                    </span>
                    <span className="block mt-1 font-medium text-base-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200">
                      {previous.data.title}
                    </span>
                  </Link>
                )}
              </div>
              <div className="text-right">
                {next && (
                  <Link href={`/blog/posts/${next.slug}` as Route} className="group">
                    <span className="block text-xs font-mono text-base-500 dark:text-base-500">
                      Next
                    </span>
                    <span className="block mt-1 font-medium text-base-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200">
                      {next.data.title}
                    </span>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </Wrapper>
      </section>
      <SubscribeCta />
      <section>
        <Wrapper variant="standard" className="py-20 lg:py-28">
          <div className="flex items-end justify-between">
            <Text
              tag="h3"
              variant="displaySM"
              className="italic tracking-tight font-display text-base-900 dark:text-white"
            >
              Latest articles
            </Text>
            <Button isLink size="xs" variant="muted" href="/blog">
              Read all
            </Button>
          </div>
          <div className="flex flex-col mt-8 gap-4">
            {allPosts.slice(0, 2).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Wrapper>
      </section>
    </>
  );
}
