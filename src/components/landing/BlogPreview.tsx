import Text from "@/components/fundations/elements/Text";
import Button from "@/components/fundations/elements/Button";
import Wrapper from "@/components/fundations/containers/Wrapper";
import BlogCard from "@/components/blog/BlogCard";
import RevealWrapper from "@/components/global/RevealWrapper";
import { getCollection } from "@/lib/content";

export default async function BlogPreview() {
  const allPosts = await getCollection("posts");

  return (
    <section>
      <Wrapper variant="standard" className="py-24 lg:py-36">
        <RevealWrapper stagger={0.12}>
          <div className="flex items-end justify-between" data-reveal>
            <Text
              tag="h2"
              variant="displayLG"
              className="italic tracking-tight font-display text-text-primary"
            >
              Blog
            </Text>
            <Button isLink size="xs" variant="muted" href="/blog">
              Read all
            </Button>
          </div>
          <div className="mt-10 flex flex-col gap-4" data-reveal>
            {allPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </RevealWrapper>
      </Wrapper>
    </section>
  );
}
