import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import WorkCard from "@/components/work/WorkCard";
import { getCollection } from "@/lib/content";

export default async function WorkIndexPage() {
  const allWork = await getCollection("work");

  return (
    <section>
      <Wrapper variant="standard" className="py-20 lg:py-32">
        <div className="max-w-2xl">
          <Text tag="h1" variant="displayXL" className="text-text-primary tracking-tight">
            Work{" "}
            <span className="italic font-display text-text-muted">
              experience
            </span>
          </Text>
          <Text tag="p" variant="textLG" className="mt-4 text-text-secondary leading-relaxed">
            Where I've worked, what I did there, and the tools I used.
          </Text>
        </div>
        <div role="list" className="mt-12 grid gap-4 sm:grid-cols-2">
          {allWork.map((post) => (
            <WorkCard key={post.slug} post={post} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
