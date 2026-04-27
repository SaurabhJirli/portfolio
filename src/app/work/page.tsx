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
          <Text tag="h1" variant="displayXL" className="text-base-900 dark:text-white tracking-tight">
            Work{" "}
            <span className="italic font-display text-base-500 dark:text-base-400">
              experience
            </span>
          </Text>
          <Text tag="p" variant="textLG" className="mt-4 text-base-500 dark:text-base-400 leading-relaxed">
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
