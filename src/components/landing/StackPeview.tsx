import Text from "@/components/fundations/elements/Text";
import Button from "@/components/fundations/elements/Button";
import Wrapper from "@/components/fundations/containers/Wrapper";
import StackCard1 from "@/components/stack/StackCard1";
import RevealWrapper from "@/components/global/RevealWrapper";

export default function StackPeview() {
  return (
    <section className="py-24 lg:py-36">
      <RevealWrapper stagger={0.06}>
        <Wrapper variant="standard">
          <div className="flex items-end justify-between" data-reveal>
            <Text
              tag="h2"
              variant="displayLG"
              className="italic tracking-tight font-display text-base-900 dark:text-white"
            >
              Stack
            </Text>
            <Button isLink size="xs" variant="muted" href="/stack">
              Full stack
            </Button>
          </div>
        </Wrapper>
        <div className="max-w-7xl mx-auto px-6 sm:px-8" data-reveal>
          <StackCard1 />
        </div>
      </RevealWrapper>
    </section>
  );
}
