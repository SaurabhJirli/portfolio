import Button from "@/components/fundations/elements/Button";
import Text from "@/components/fundations/elements/Text";
import type { ContentEntry } from "@/lib/content";

type StoreData = {
  title?: string;
  price?: string;
  description?: string;
  image?: { url?: string };
};

export default function StoreEntries1({ post }: { post: ContentEntry<StoreData> }) {
  const url = "/store/" + post.slug;
  const title = post.data.title ?? "";
  const price = post.data.price ?? "";
  const description = post.data.description ?? "";
  const image = post.data.image?.url ?? "";

  return (
    <div className="group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 p-6 sm:p-8 border border-base-200 dark:border-base-800 rounded-2xl bg-white dark:bg-base-950 transition-all duration-300 ease-out hover:border-transparent hover:shadow-accent dark:hover:shadow-accent">
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex items-baseline gap-3">
            <Text
              tag="h3"
              variant="textLG"
              className="font-medium tracking-tight text-base-900 dark:text-white"
            >
              {title}
            </Text>
            <span className="text-sm font-mono font-medium text-accent-700 dark:text-accent-400">
              ${price}
            </span>
          </div>
          <Text
            tag="p"
            variant="textBase"
            className="mt-3 text-base-500 dark:text-base-400 leading-relaxed"
          >
            {description}
          </Text>
        </div>
        <Button isLink size="sm" variant="default" href={url} title={title} className="mt-6 w-fit">
          View details
        </Button>
      </div>
      {image ? (
        <img
          src={image}
          alt={title}
          width={200}
          height={200}
          className="size-24 sm:size-32 rounded-xl object-cover ring-1 ring-base-200 dark:ring-base-800 order-first sm:order-last self-start"
        />
      ) : null}
    </div>
  );
}
