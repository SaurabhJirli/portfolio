import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import StackCard1 from "@/components/stack/StackCard1";
import RevealWrapper from "@/components/global/RevealWrapper";

export default function StackPeview() {
  return (
    <section id="stack" className="scroll-mt-28 py-24 lg:py-32">
      <RevealWrapper stagger={0.06}>
        <Wrapper variant="standard">
          <div data-reveal>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted">
              Stack
            </p>
            <Text
              tag="h2"
              variant="displayLG"
              className="mt-2 italic tracking-tight font-display text-text-primary"
            >
              The working set
            </Text>
            <p className="mt-3 text-base leading-relaxed text-text-secondary max-w-md">
              Tools I use to build, ship, and maintain backend-heavy product systems.
            </p>
          </div>
        </Wrapper>
        <div className="max-w-7xl mx-auto mt-10" data-reveal>
          <StackCard1 />
        </div>
      </RevealWrapper>
    </section>
  );
}
