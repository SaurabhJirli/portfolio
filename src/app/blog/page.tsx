import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import BlogCard from "@/components/blog/BlogCard";
import SubscribeCta from "@/components/blog/SubscribeCta";
import { getCollection, sortByDateDesc } from "@/lib/content";

export default async function BlogIndexPage() {
  const allPosts = await getCollection("posts");
  const sortedPosts = sortByDateDesc(allPosts);

  return (
    <>
      <section>
        <Wrapper variant="standard" className="py-20 lg:py-32">
          <div className="max-w-2xl">
            <Text
              tag="h1"
              variant="displayXL"
              className="text-base-900 dark:text-white tracking-tight"
            >
              Blog:{" "}
              <span className="italic font-display text-base-500 dark:text-base-400">
                notes and write-ups
              </span>
            </Text>
            <Text
              tag="p"
              variant="textLG"
              className="mt-4 text-base-500 dark:text-base-400 leading-relaxed"
            >
              Things I've learned, problems I've solved, and thoughts on software engineering.
            </Text>
          </div>
          <div className="flex flex-col mt-12 gap-4">
            {sortedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Wrapper>
      </section>
      <SubscribeCta />
    </>
  );
}
