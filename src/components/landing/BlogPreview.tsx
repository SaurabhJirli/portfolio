import Text from "@/components/fundations/elements/Text";
import Button from "@/components/fundations/elements/Button";
import Wrapper from "@/components/fundations/containers/Wrapper";
import BlogCard from "@/components/blog/BlogCard";
import { getCollection } from "@/lib/content";

export default async function BlogPreview() {
  const allPosts = await getCollection("posts");

  return (
    <section>
      <Wrapper variant="standard" className="py-12">
        <div className="flex items-end justify-between">
          <Text
            tag="h2"
            variant="displaySM"
            className="italic tracking-wide dark:text-white text-base-900 font-display"
          >
            Blog
          </Text>
          <Button isLink size="xs" variant="muted" href="/blog">
            Read all my blog posts
          </Button>
        </div>
        <div className="mt-6 gap-2">
          {allPosts.slice(0, 1).map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
