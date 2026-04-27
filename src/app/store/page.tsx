import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import StoreEntries1 from "@/components/store/StoreEntries1";
import { getCollection } from "@/lib/content";

export default async function StoreIndexPage() {
  const allProducts = await getCollection("store");

  return (
    <section>
      <Wrapper variant="standard" className="py-20 lg:py-32">
        <div className="max-w-2xl">
          <Text tag="h1" variant="displayXL" className="text-base-900 dark:text-white tracking-tight">
            Templates{" "}
            <span className="block italic font-light font-display text-base-500 dark:text-base-400">
              I recommend
            </span>
          </Text>
          <Text tag="p" variant="textLG" className="mt-4 text-base-500 dark:text-base-400 leading-relaxed">
            Starter templates and themes I've found useful for building sites quickly.
          </Text>
        </div>
        <div className="flex flex-col mt-12 gap-4">
          {allProducts.map((post) => (
            <StoreEntries1 key={post.slug} post={post} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
