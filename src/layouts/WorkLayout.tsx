import ScrollUpButton from "@/components/assets/ScrollUpButton";
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
        <Wrapper variant="standard" className="py-24">
          <div className="text-center">
            <Text tag="h1" variant="displayXL" className="dark:text-white text-base-900 text-balance">
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
                width={1200}
                height={600}
                className="object-cover object-center w-full mt-6 shadow rounded-2xl ring-1 max-h-72 dark:ring-base-800 ring-base-200"
              />
            ) : null}
            <div className="flex items-center justify-between">
              <Text className="mt-2 text-xs dark:text-white text-base-900">
                Concluded: <time dateTime={pubDate}>{pubDate}</time>
              </Text>
              <Button isLink size="sm" variant="muted" href={frontmatter.live} title={frontmatter.title}>
                See it live
              </Button>
            </div>
            <Wrapper variant="prose">{children}</Wrapper>
            <nav className="relative flex flex-col mt-24 text-xs md:flex-row lg:justify-between gap-4 lg:items-center">
              <div>
                {previous && (
                  <a href={`/work/${previous.slug}`} className="hover:opacity-80">
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
                  <a href={`/work/${next.slug}`} className="text-right hover:opacity-80">
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
