import Button from "@/components/fundations/elements/Button";
import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import type { ContentEntry } from "@/lib/content";

type StoreFrontmatter = {
  title?: string;
  price?: string;
  preview?: string;
  license?: string;
  description?: string;
  highlights?: string[];
  features?: { title: string; description: string }[];
  image?: { url?: string; alt?: string };
  images?: { url?: string; alt?: string }[];
};

export default function StoreLayout({
  frontmatter,
  previous,
  next,
  children,
}: {
  frontmatter: StoreFrontmatter;
  previous: ContentEntry<StoreFrontmatter> | null;
  next: ContentEntry<StoreFrontmatter> | null;
  children: React.ReactNode;
}) {
  return (
    <section>
      <Wrapper className="py-24">
        <div className="text-center">
          <Text tag="h1" variant="displayXL" className="dark:text-white text-base-900 text-balance">
            {frontmatter.title}
          </Text>

          <Text
            tag="p"
            variant="textLG"
            className="mt-8 dark:text-base-400 text-base-600 text-balance"
          >
            {frontmatter.description}
          </Text>
        </div>

        <div className="flex items-center justify-center mt-6 gap-4">
          <Button
            isLink
            size="sm"
            variant="muted"
            href={frontmatter.preview}
            title={frontmatter.preview}
            aria-label={frontmatter.preview}
          >
            Preview demo
          </Button>
          <Button isLink size="sm" variant="default" href="#_" title="your title" aria-label="your label">
            Buy {frontmatter.title} for ${frontmatter.price}
          </Button>
        </div>

        <div className="mt-12 space-y-12">
          {frontmatter.image?.url ? (
            <img
              src={frontmatter.image.url}
              alt={frontmatter.image.alt ?? ""}
              width={600}
              height={600}
              className="object-cover object-top w-full shadow rounded-2xl ring-1 dark:ring-base-800 ring-base-200"
            />
          ) : null}

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Text
              tag="h3"
              variant="displaySM"
              className="italic tracking-wide dark:text-white text-base-900 font-display"
            >
              Includes
            </Text>
            <ul role="list">
              {(frontmatter.highlights ?? []).map((highlight) => (
                <li key={highlight}>
                  <Text tag="p" variant="textSM" className="dark:text-base-400 text-base-600">
                    {highlight}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Text
              tag="h3"
              variant="displaySM"
              className="italic tracking-wide dark:text-white text-base-900 font-display"
            >
              License
            </Text>
            <Text tag="p" variant="textSM" className="dark:text-base-400 text-base-600">
              {frontmatter.license}
            </Text>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {(frontmatter.images ?? []).map((image) => (
              <img
                key={image.url}
                src={image.url}
                alt={image.alt}
                width={400}
                height={400}
                className="rounded-2xl shadow ring-1 aspect-[384/246] dark:ring-base-800 ring-base-200 w-full object-cover object-top"
              />
            ))}
          </div>
          <dl className="mt-6 grid gap-2 sm:grid-cols-2">
            {(frontmatter.features ?? []).map((feature) => (
              <div
                key={feature.title}
                className="relative flex flex-col p-6 overflow-hidden shadow transition-all transform ring-1 dark:ring-base-800 rounded-2xl bg-linear-45 from-base-50 dark:from-base-800 duration-300 to-base-100 dark:to-base-950 ring-base-200 ring-inset group hover:shadow-light dark:hover:shadow-dark"
              >
                <dt>
                  <Text tag="h3" variant="textLG" className="dark:text-white text-base-900">
                    {feature.title}
                  </Text>
                </dt>
                <dd className="mt-24">
                  <Text tag="p" variant="textLG" className="dark:text-base-400 text-base-600">
                    {feature.description}
                  </Text>
                </dd>
              </div>
            ))}
          </dl>
          <Wrapper variant="prose">{children}</Wrapper>
          <nav className="relative flex flex-col mt-24 text-xs md:flex-row lg:justify-between gap-4 lg:items-center">
            <div>
              {previous && (
                <a href={`/store/${previous.slug}`} className="hover:opacity-80">
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
                <a href={`/store/${next.slug}`} className="text-right hover:opacity-80">
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
  );
}
