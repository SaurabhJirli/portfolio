import Text from "@/components/fundations/elements/Text";
import Button from "@/components/fundations/elements/Button";
import Plus from "@/components/fundations/icons/Plus";
import type { ContentEntry } from "@/lib/content";

type ProjectData = {
  title?: string;
  subtitle?: string;
};

export default function ProjectCard1({ post }: { post: ContentEntry<ProjectData> }) {
  const url = "/projects/" + post.slug;
  const title = post.data.title ?? "";
  const subtitle = post.data.subtitle ?? "";

  return (
    <div className="relative flex flex-col justify-between h-full p-8 overflow-hidden shadow ring-1 min-h-72 rounded-3xl ring-base-200 dark:ring-base-800 bg-linear-45 from-base-50 dark:from-base-800 duration-300 to-base-100 dark:to-base-950 ring-inset group hover:shadow-light dark:hover:shadow-dark transform transition-all">
      <a href={url} title={`Read more about ${title}`} className="absolute inset-0 z-10"></a>
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
      <div className="flex flex-col items-start justify-between -mb-20 group-hover:mb-0 gap-12 duration-300">
        <Text
          tag="p"
          variant="textBase"
          className="mt-8 dark:text-base-400 text-base-600 leading-6 text-balance"
        >
          {subtitle}
        </Text>
        <Button
          isLink
          size="xs"
          variant="default"
          href={url}
          title={`Read more about ${title}`}
          aria-hidden={true}
          className="pointer-events-none"
        >
          Read more
        </Button>
      </div>
    </div>
  );
}
