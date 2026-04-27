import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import { getCollection } from "@/lib/content";

export default async function TagsIndexPage() {
  const allPosts = await getCollection("posts");
  const tags = Array.from(
    new Set(allPosts.map((post) => (post.data as { tags?: string[] }).tags ?? []).flat())
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
            <span className="block italic font-display"> tagged with</span>
          </Text>
          <Text
            tag="p"
            variant="textLG"
            className="mt-4 dark:text-base-400 text-base-600 text-balance"
          >
            Find all the posts tagged with a specific tag.
          </Text>
        </div>
        <ol className="mt-12 text-center grid-cols-2 grid md:grid-cols-3 gap-2" role="list">
          {tags.map((tag) => (
            <li key={tag}>
              <Text
                tag="a"
                variant="textSM"
                underlined={true}
                className="capitalize dark:text-white text-base-900"
                href={`/blog/tags/${tag}`}
              >
                {tag}
              </Text>
            </li>
          ))}
        </ol>
      </Wrapper>
    </section>
  );
}
