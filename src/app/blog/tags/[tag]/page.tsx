import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import BlogCard from "@/components/blog/BlogCard";
import { getCollection } from "@/lib/content";

export async function generateStaticParams() {
  const allPosts = await getCollection("posts");
  const uniqueTags = Array.from(
    new Set(allPosts.map((post) => (post.data as { tags?: string[] }).tags ?? []).flat())
  );
  return uniqueTags.map((tag) => ({ tag }));
}

export default async function TagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const allPosts = await getCollection("posts");
  const posts = allPosts.filter((post) =>
    ((post.data as { tags?: string[] }).tags ?? []).includes(tag)
  );

  return (
    <section>
      <Wrapper className="py-24">
        <div className="text-center">
          <Text
            tag="h1"
            variant="displayXL"
            className="text-balance dark:text-white text-base-900"
          >
            Blog posts
            <span className="block italic font-display"> tagged with {tag}</span>
          </Text>
          <Text
            tag="p"
            variant="textLG"
            className="mt-4 dark:text-base-400 text-base-600"
          >
            Find all the posts tagged with {tag}.
          </Text>
        </div>
        <div className="flex flex-col mt-12 gap-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
