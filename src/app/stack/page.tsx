import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import StackCard2 from "@/components/stack/StackCard2";

export default function StackPage() {
  return (
    <section>
      <Wrapper variant="standard" className="py-20 lg:py-32">
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
          <Text tag="p" variant="textLG" className="mt-4 text-base-500 dark:text-base-400 leading-relaxed">
            Languages, frameworks, databases, and infrastructure I work with regularly.
          </Text>
        </div>
        <StackCard2 />
      </Wrapper>
    </section>
  );
}
