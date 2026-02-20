import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import StackCard2 from "@/components/stack/StackCard2";

export default function StackPage() {
  return (
    <section>
      <Wrapper variant="standard" className="py-24">
        <div className="text-center">
          <Text
            tag="h1"
            variant="displayXL"
            className="dark:text-white text-base-900 text-balance"
          >
            Software I use daily
            <span className="italic tracking-wide font-display dark:text-base-400 text-base-600">
              and recommend
            </span>
          </Text>
          <Text tag="p" variant="textLG" className="mt-4 dark:text-base-400 text-base-600">
            I get askeed about the tools that I use daily and be productive. Here
            is a list of my favorite software programs, gadgets, and other
            recommendations.
          </Text>
        </div>
        <StackCard2 />
      </Wrapper>
    </section>
  );
}
