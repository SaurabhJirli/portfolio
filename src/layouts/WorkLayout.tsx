import ScrollUpButton from "@/components/assets/ScrollUpButton";
import Link from "next/link";
import type { Route } from "next";
import Button from "@/components/fundations/elements/Button";
import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import type { ContentEntry } from "@/lib/content";

type WorkFrontmatter = {
  title?: string;
  subtitle?: string;
  pubDate?: string;
  live?: string;
  image?: { url?: string; alt?: string };
};

export default function WorkLayout({
  frontmatter,
  previous,
  next,
  children,
}: {
  frontmatter: WorkFrontmatter;
  previous: ContentEntry<WorkFrontmatter> | null;
  next: ContentEntry<WorkFrontmatter> | null;
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
            <Text tag="h1" variant="displayXL" className="tracking-tight text-base-900 dark:text-white">
              {frontmatter.title}
            </Text>
            <Text
              tag="p"
              variant="textLG"
              className="mt-4 text-base-500 dark:text-base-400 leading-relaxed"
            >
              {frontmatter.subtitle}
            </Text>
          </div>
          <div className="mt-12 space-y-8">
            {frontmatter.image?.url ? (
              <img
                src={frontmatter.image.url}
                alt={frontmatter.image.alt ?? ""}
                width={1200}
                height={600}
                className="object-cover object-center w-full rounded-2xl ring-1 ring-base-200 dark:ring-base-800 max-h-72"
              />
            ) : null}
            <div className="flex items-center justify-between py-4 border-b border-base-200 dark:border-base-800">
              <Text className="font-mono text-sm text-base-500 dark:text-base-500">
                Concluded: <time dateTime={pubDate}>{pubDate}</time>
              </Text>
              <Button isLink size="sm" variant="muted" href={frontmatter.live} title={frontmatter.title}>
                See it live
              </Button>
            </div>
            <Wrapper variant="prose">{children}</Wrapper>
            <nav className="flex items-center justify-between pt-8 mt-16 border-t border-base-200 dark:border-base-800 text-sm">
              <div>
                {previous && (
                  <Link href={`/work/${previous.slug}` as Route} className="group">
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
                  <Link href={`/work/${next.slug}` as Route} className="group">
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
    </>
  );
}
