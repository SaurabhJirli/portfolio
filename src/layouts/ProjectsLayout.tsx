import ScrollUpButton from "@/components/assets/ScrollUpButton";
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

  return (
    <>
      <ScrollUpButton />
      <section>
        <Wrapper className="py-24">
          <div className="text-center">
            {frontmatter.logo?.url ? (
              <img
                src={frontmatter.logo.url}
                alt={frontmatter.logo.alt ?? ""}
                width={200}
                height={200}
                className="mx-auto shadow size-12 rounded-xl md:size-16 ring-base-200 dark:ring-base-800"
              />
            ) : null}
            <Text
              tag="h1"
              variant="displayXL"
              className="mt-8 italic tracking-wide text-balance dark:text-white text-base-900 font-display"
            >
              {frontmatter.title}
            </Text>
            <Text
              tag="p"
              variant="textLG"
              className="mt-4 dark:text-base-400 text-base-600 text-balance"
            >
              {frontmatter.subtitle}
            </Text>
          </div>
          <div className="space-y-6">
            {frontmatter.image?.url ? (
              <img
                src={frontmatter.image.url}
                alt={frontmatter.image.alt ?? ""}
                width={800}
                height={400}
                className="object-cover object-center w-full mt-6 shadow rounded-2xl max-h-100"
              />
            ) : null}
            <div className="flex items-center justify-between">
              <Text tag="p" variant="textSM" className="ml-2 dark:text-base-400 text-base-600">
                Published: <time dateTime={pubDate}>{pubDate}</time>
              </Text>
              <Button
                isLink
                size="base"
                variant="muted"
                href={frontmatter.live}
                title={frontmatter.title}
              >
                See it live
              </Button>
            </div>
            <Wrapper variant="prose">{children}</Wrapper>
            <nav className="relative flex flex-col mt-24 text-xs md:flex-row lg:justify-between gap-4 lg:items-center">
              <div>
                {previous && (
                  <a href={`/projects/${previous.slug}`} className="hover:opacity-80">
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
                  <a href={`/projects/${next.slug}`} className="text-right hover:opacity-80">
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
    </>
  );
}
