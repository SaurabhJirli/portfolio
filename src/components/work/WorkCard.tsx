import Text from "@/components/fundations/elements/Text";
import Button from "@/components/fundations/elements/Button";
import Plus from "@/components/fundations/icons/Plus";
import type { ContentEntry } from "@/lib/content";

type WorkData = {
  title?: string;
  subtitle?: string;
  pubDate?: string;
};

export default function WorkCard({ post }: { post: ContentEntry<WorkData> }) {
  const url = "/work/" + post.slug;
  const title = post.data.title ?? "";
  const subtitle = post.data.subtitle ?? "";
  const pubDate = post.data.pubDate
    ? new Date(post.data.pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      })
    : "";

  return (
    <article className="relative flex flex-col justify-between w-full h-full p-6 overflow-hidden shadow transition-all transform ring-1 min-h-96 rounded-2xl bg-linear-45 from-base-50 dark:from-base-800 duration-300 to-base-100 dark:to-base-950 ring-base-200 ring-inset group hover:shadow-light dark:hover:shadow-dark dark:ring-base-800">
      <div>
        <div className="flex items-center justify-between w-full">
          <Text
            tag="h3"
            variant="textBase"
            className="font-medium uppercase dark:text-white text-base-900"
          >
            {pubDate}
          </Text>
          <div className="p-1 text-white bg-black rounded-full dark:bg-base-50 dark:text-base-900 group-hover:-rotate-45 duration-300">
            <Plus className="size-5" />
          </div>
        </div>

        <Text
          tag="h3"
          variant="textBase"
          className="mt-4 font-medium uppercase dark:text-white text-base-900 text-balance"
        >
          {title}
        </Text>
      </div>

      <div className="flex flex-col items-start justify-between -mb-20 gap-12 duration-300 group-hover:mb-0">
        <Text
          tag="p"
          variant="textBase"
          className="mt-8 leading-6 dark:text-base-400 text-base-600 text-balance"
        >
          {subtitle}
        </Text>
        <Button isLink size="xs" variant="default" href={url} title={title}>
          Read more
        </Button>
      </div>
    </article>
  );
}
