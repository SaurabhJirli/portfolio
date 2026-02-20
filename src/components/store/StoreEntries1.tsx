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
    <div className="p-2 shadow grid duration-300 sm:grid-cols-2 ring-base-200 group rounded-3xl hover:shadow-light dark:hover:shadow-dark bg-linear-45 from-base-50 dark:from-base-800 to-base-100 dark:to-base-950">
      <div className="relative flex flex-col justify-between h-full p-4 overflow-hidden rounded-2xl">
        <Text
          tag="h3"
          variant="textBase"
          className="flex items-center justify-between w-full font-medium uppercase dark:text-white text-base-900 text-balance"
        >
          {title} ${price}
        </Text>
        <div className="flex flex-col items-start justify-between gap-12 duration-300">
          <Text
            tag="p"
            variant="textSM"
            className="mt-8 leading-6 dark:text-base-400 text-base-600 text-balance"
          >
            {description}
          </Text>
          <Button isLink size="xs" variant="default" href={url} title={title}>
            Read more
          </Button>
        </div>
      </div>
      {image ? (
        <img
          src={image}
          alt={title}
          width={500}
          height={500}
          className="order-first object-cover object-left h-full rounded-2xl sm:order-last ring ring-base-200 dark:ring-base-950"
        />
      ) : null}
    </div>
  );
}
