import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import StoreEntries1 from "@/components/store/StoreEntries1";
import { getCollection } from "@/lib/content";

export default async function StoreIndexPage() {
  const allProducts = await getCollection("store");

  return (
    <section>
      <Wrapper variant="standard" className="py-24">
        <div className="text-center">
          <Text tag="h1" variant="displayXL" className="dark:text-white text-base-900 text-balance">
            Digital products{" "}
            <span className="block italic font-light tracking-wide font-display">for your business</span>
          </Text>
          <Text tag="p" variant="textLG" className="mt-8 dark:text-base-400 text-base-600 text-balance">
            Shop my selection of digital products to help you grow your business,
            and to make your life easier and more productive.
          </Text>
        </div>
        <div className="flex flex-col mt-12 gap-2">
          {allProducts.map((post) => (
            <StoreEntries1 key={post.slug} post={post} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
