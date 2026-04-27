import Link from "next/link";
import type { Route } from "next";
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
            {frontmatter.description}
          </Text>
          <div className="flex items-center mt-6 gap-3">
            <Button
              isLink
              size="sm"
              variant="muted"
              href={frontmatter.preview}
              title="Preview demo"
            >
              Preview demo
            </Button>
            <Button isLink size="sm" variant="default" href="#_" title={`Buy ${frontmatter.title}`}>
              Buy for ${frontmatter.price}
            </Button>
          </div>
        </div>

        <div className="mt-12 space-y-12">
          {frontmatter.image?.url ? (
            <img
              src={frontmatter.image.url}
              alt={frontmatter.image.alt ?? ""}
              width={600}
              height={600}
              className="object-cover object-top w-full rounded-2xl ring-1 ring-base-200 dark:ring-base-800"
            />
          ) : null}

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 py-8 border-y border-base-200 dark:border-base-800">
            <Text
              tag="h3"
              variant="displaySM"
              className="italic tracking-tight font-display text-base-900 dark:text-white"
            >
              Includes
            </Text>
            <ul role="list" className="flex flex-col gap-1">
              {(frontmatter.highlights ?? []).map((highlight) => (
                <li key={highlight}>
                  <Text tag="p" variant="textSM" className="text-base-500 dark:text-base-400">
                    {highlight}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <Text
              tag="h3"
              variant="displaySM"
              className="italic tracking-tight font-display text-base-900 dark:text-white"
            >
              License
            </Text>
            <Text tag="p" variant="textSM" className="text-base-500 dark:text-base-400">
              {frontmatter.license}
            </Text>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {(frontmatter.images ?? []).map((image) => (
              <img
                key={image.url}
                src={image.url}
                alt={image.alt}
                width={400}
                height={400}
                className="rounded-2xl ring-1 ring-base-200 dark:ring-base-800 aspect-[384/246] w-full object-cover object-top"
              />
            ))}
          </div>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {(frontmatter.features ?? []).map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col p-6 border border-base-200 dark:border-base-800 rounded-2xl bg-white dark:bg-base-950 transition-all duration-300 ease-out hover:border-transparent hover:shadow-accent dark:hover:shadow-accent"
              >
                <dt>
                  <Text tag="h3" variant="textLG" className="font-medium text-base-900 dark:text-white">
                    {feature.title}
                  </Text>
                </dt>
                <dd className="mt-3">
                  <Text tag="p" variant="textBase" className="text-base-500 dark:text-base-400 leading-relaxed">
                    {feature.description}
                  </Text>
                </dd>
              </div>
            ))}
          </dl>
          <Wrapper variant="prose">{children}</Wrapper>
          <nav className="flex items-center justify-between pt-8 mt-8 border-t border-base-200 dark:border-base-800 text-sm">
            <div>
              {previous && (
                <Link href={`/store/${previous.slug}` as Route} className="group">
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
                <Link href={`/store/${next.slug}` as Route} className="group">
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
  );
}
