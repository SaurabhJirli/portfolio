import ScrollUpButton from "@/components/assets/ScrollUpButton";
import Link from "next/link";
import type { Route } from "next";
import Button from "@/components/fundations/elements/Button";
import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import type { ContentEntry } from "@/lib/content";

type ProjectFrontmatter = {
  title?: string;
  subtitle?: string;
  pubDate?: string;
  live?: string;
  logo?: { url?: string; alt?: string };
  image?: { url?: string; alt?: string };
};

export default function ProjectsLayout({
  frontmatter,
  previous,
  next,
  children,
}: {
  frontmatter: ProjectFrontmatter;
  previous: ContentEntry<ProjectFrontmatter> | null;
  next: ContentEntry<ProjectFrontmatter> | null;
  children: React.ReactNode;
}) {
  const pubDate = frontmatter.pubDate
    ? new Date(frontmatter.pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      })
    : "";

  const hasLiveLink = frontmatter.live && frontmatter.live !== "#_";
  const hasImage = !!frontmatter.image?.url;

  return (
    <>
      <ScrollUpButton />
      <article>
        {/* Hero */}
        <Wrapper variant="standard" className="pt-24 lg:pt-40">
          <div className="max-w-3xl">
            {frontmatter.logo?.url ? (
              <img
                src={frontmatter.logo.url}
                alt={frontmatter.logo.alt ?? ""}
                width={200}
                height={200}
                className="size-12 rounded-xl md:size-14 ring-1 ring-base-200 dark:ring-base-800"
              />
            ) : null}
            <Text
              tag="h1"
              variant="display2XL"
              className={`${frontmatter.logo?.url ? "mt-8" : ""} tracking-tight text-base-900 dark:text-white text-wrap-balance`}
            >
              {frontmatter.title}
            </Text>
            <Text
              tag="p"
              variant="textLG"
              className="mt-5 text-base-500 dark:text-base-400 leading-relaxed max-w-[56ch]"
            >
              {frontmatter.subtitle}
            </Text>
          </div>
        </Wrapper>

        {/* Metadata divider */}
        <Wrapper variant="standard" className="mt-12 lg:mt-16">
          <div className="flex items-center justify-between py-4 border-y border-base-200 dark:border-base-800">
            <Text
              tag="p"
              variant="textSM"
              className="font-mono text-base-400 dark:text-base-500 tabular-nums"
            >
              <time dateTime={frontmatter.pubDate}>{pubDate}</time>
            </Text>
            {hasLiveLink ? (
              <Button
                isLink
                size="sm"
                variant="muted"
                href={frontmatter.live}
                title={frontmatter.title}
              >
                See it live
              </Button>
            ) : null}
          </div>
        </Wrapper>

        {/* Image — only when provided */}
        {hasImage ? (
          <Wrapper variant="wide" className="mt-12">
            <img
              src={frontmatter.image?.url ?? ""}
              alt={frontmatter.image?.alt ?? ""}
              width={1200}
              height={600}
              className="object-cover object-center w-full rounded-2xl ring-1 ring-base-200 dark:ring-base-800 max-h-[28rem]"
            />
          </Wrapper>
        ) : null}

        {/* Content */}
        <Wrapper
          variant="standard"
          className={`${hasImage ? "pt-16 lg:pt-20" : "pt-12 lg:pt-16"} pb-20 lg:pb-32`}
        >
          <Wrapper
            variant="prose"
            className="prose-h2:font-medium prose-h2:tracking-tight"
          >
            {children}
          </Wrapper>

          <nav className="flex items-center justify-between pt-8 mt-20 border-t border-base-200 dark:border-base-800 text-sm max-w-3xl mx-auto">
            <div>
              {previous && (
                <Link href={`/projects/${previous.slug}` as Route} className="group">
                  <span className="block text-xs font-mono text-base-400 dark:text-base-500 tracking-wide">
                    Previous
                  </span>
                  <span className="block mt-1.5 font-medium text-base-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200">
                    {previous.data.title}
                  </span>
                </Link>
              )}
            </div>
            <div className="text-right">
              {next && (
                <Link href={`/projects/${next.slug}` as Route} className="group">
                  <span className="block text-xs font-mono text-base-400 dark:text-base-500 tracking-wide">
                    Next
                  </span>
                  <span className="block mt-1.5 font-medium text-base-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200">
                    {next.data.title}
                  </span>
                </Link>
              )}
            </div>
          </nav>
        </Wrapper>
      </article>
    </>
  );
}
