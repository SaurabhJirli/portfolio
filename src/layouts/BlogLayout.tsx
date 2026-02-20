import ScrollUpButton from "@/components/assets/ScrollUpButton";
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
        <Wrapper className="py-24">
          <div className="text-center">
            <Text
              tag="h1"
              variant="displayXL"
              className="mt-8 italic tracking-wide dark:text-white text-base-900 text-balance font-display"
            >
              {frontmatter.title}
            </Text>
            <Text className="mt-2 text-xs dark:text-white text-base-900">
              Published: <time dateTime={pubDate}>{pubDate}</time>
              <span>&middot;</span>
              <span>{readingTime}</span>
            </Text>
            <Text
              tag="p"
              variant="textLG"
              className="mt-4 dark:text-base-400 text-base-600 text-balance"
            >
              {frontmatter.description}
            </Text>
          </div>
          <div className="space-y-12">
            {frontmatter.image?.url ? (
              <img
                src={frontmatter.image.url}
                alt={frontmatter.image.alt ?? ""}
                width={800}
                height={400}
                className="object-cover object-center w-full mt-6 shadow rounded-2xl ring-1 max-h-72 dark:ring-base-800 ring-base-200"
              />
            ) : null}
            <Wrapper variant="prose">{children}</Wrapper>
            <div className="flex flex-wrap items-center pt-4 mt-4 border-t gap-2 dark:border-base-900 border-base-200">
              {(frontmatter.tags ?? []).map((tag, index) => (
                <span key={tag}>
                  {index > 0 && (
                    <span className="text-black dark:text-white">&middot;</span>
                  )}
                  <Text
                    tag="a"
                    variant="textSM"
                    underlined={true}
                    href={`/blog/tags/${tag}`}
                    className="text-black capitalize dark:text-white"
                  >
                    {tag}
                  </Text>
                </span>
              ))}
            </div>
            <nav className="relative flex flex-col mt-24 text-xs md:flex-row lg:justify-between gap-4 lg:items-center">
              <div>
                {previous && (
                  <a href={`/blog/posts/${previous.slug}`} className="hover:opacity-80">
                    <span className="block font-medium uppercase text-base-900 dark:text-white">
                      Previous:
                    </span>
                    <span className="block text-base-500 dark:text-base-400">
                      {previous.data.title}
                    </span>
                  </a>
                )}
              </div>
              <div>
                {next && (
                  <a href={`/blog/posts/${next.slug}`} className="text-right hover:opacity-80">
                    <span className="block font-medium uppercase text-base-900 dark:text-white">
                      Next:
                    </span>
                    <span className="block text-base-500 dark:text-base-400">
                      {next.data.title}
                    </span>
                  </a>
                )}
              </div>
            </nav>
          </div>
        </Wrapper>
      </section>
      <SubscribeCta />
      <section>
        <Wrapper variant="standard" className="py-24">
          <div className="text-center">
            <div className="flex items-end justify-between">
              <Text
                tag="h3"
                variant="displaySM"
                className="italic tracking-wide dark:text-white text-base-900 font-display"
              >
                Latest articles
              </Text>
              <Button isLink size="xs" variant="muted" href="/blog">
                Read all my blog posts
              </Button>
            </div>
          </div>
          <div className="flex flex-col mt-12 gap-2">
            {allPosts.slice(0, 2).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Wrapper>
      </section>
    </>
  );
}
