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
        <Wrapper variant="standard" className="py-24">
          <div className="text-center">
            <Text
              tag="h1"
              variant="displayXL"
              className="text-balance dark:text-white text-base-900"
            >
              Welcome to my blog:
              <span className="italic tracking-wide font-display"> News and thoughts</span>
            </Text>
            <Text
              tag="p"
              variant="textLG"
              className="mt-4 dark:text-base-400 text-base-600 text-balance"
            >
              I write about everything that I learn, join me on my journey.
            </Text>
          </div>
          <div className="flex flex-col mt-12 gap-2">
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
