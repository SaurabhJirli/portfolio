import Text from "@/components/fundations/elements/Text";
import Button from "@/components/fundations/elements/Button";
import Plus from "@/components/fundations/icons/Plus";
import type { ContentEntry } from "@/lib/content";

type ProjectData = {
  title?: string;
  subtitle?: string;
  logo?: { url?: string };
};

export default function ProjectCard2({ post }: { post: ContentEntry<ProjectData> }) {
  const url = "/projects/" + post.slug;
  const title = post.data.title ?? "";
  const subtitle = post.data.subtitle ?? "";
  const logo = post.data.logo?.url ?? "";

  return (
    <div className="p-2 shadow grid sm:grid-cols-2 ring-base-200 dark:ring-base-800 duration-300 group rounded-3xl hover:shadow-light dark:hover:shadow-dark bg-linear-45 from-base-50 dark:from-base-800 to-base-100 dark:to-base-950">
      <div className="relative flex flex-col justify-between h-full p-4 overflow-hidden min-h-72 rounded-2xl">
        <div className="flex items-center justify-between">
          <Text
            tag="h3"
            variant="textBase"
            className="font-medium uppercase dark:text-white text-base-900"
          >
            {title}
          </Text>
          <div className="p-1 text-white bg-black rounded-full dark:bg-base-50 dark:text-base-900 group-hover:-rotate-45 duration-300">
            <Plus className="size-5" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-between sm:-mb-20 sm:group-hover:mb-0 gap-12 duration-300">
          <Text
            tag="p"
            variant="textBase"
            className="mt-8 dark:text-base-400 text-base-600 leading-6 text-balance"
          >
            {subtitle}
          </Text>
          <Button isLink size="xs" variant="default" href={url} title={title}>
            Read more
          </Button>
        </div>
      </div>
      {logo ? (
        <img
          src={logo}
          alt={title}
          width={500}
          height={800}
          className="order-first object-cover w-full h-full rounded-2xl sm:order-last"
        />
      ) : null}
    </div>
  );
}
