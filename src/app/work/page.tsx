import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import WorkCard from "@/components/work/WorkCard";
import LogoCloud from "@/components/assets/LogoCloud";
import { getCollection } from "@/lib/content";

export default async function WorkIndexPage() {
  const allWork = await getCollection("work");

  return (
    <section>
      <Wrapper variant="standard" className="py-24">
        <div className="text-center">
          <Text tag="h1" variant="displayXL" className="dark:text-white text-base-900 text-balance">
            Check out my{" "}
            <span className="italic tracking-wide font-display dark:text-base-400 text-base-600">
              portfolio
            </span>
          </Text>
          <Text tag="p" variant="textLG" className="mt-4 dark:text-base-400 text-base-600 text-balance">
            Hire me to build your next project from scratch, with a focus on
            design and development.
          </Text>
        </div>
        <LogoCloud />
        <div role="list" className="mt-12 grid gap-2 sm:grid-cols-2">
          {allWork.map((post) => (
            <WorkCard key={post.slug} post={post} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
