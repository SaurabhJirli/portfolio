import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import StackCard1 from "@/components/stack/StackCard1";
import StackCard2 from "@/components/stack/StackCard2";

export default function StackPage() {
  return (
    <section>
      <Wrapper variant="standard" className="pt-24 lg:pt-36 pb-8">
        <div className="max-w-2xl">
          <Text
            tag="h1"
            variant="displayXL"
            className="text-base-900 dark:text-white tracking-tight"
          >
            Tools I{" "}
            <span className="italic font-display text-base-500 dark:text-base-400">
              use
            </span>
          </Text>
          <Text tag="p" variant="textLG" className="mt-4 text-base-400 dark:text-base-500 leading-relaxed max-w-lg">
            Languages, frameworks, databases, and infrastructure I work with regularly.
          </Text>
        </div>
      </Wrapper>
      <div className="max-w-7xl mx-auto">
        <StackCard1 />
      </div>
      <Wrapper variant="standard" className="pb-24 lg:pb-36">
        <StackCard2 />
      </Wrapper>
    </section>
  );
}
