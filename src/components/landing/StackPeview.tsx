import Text from "@/components/fundations/elements/Text";
import Button from "@/components/fundations/elements/Button";
import Wrapper from "@/components/fundations/containers/Wrapper";
import StackCard1 from "@/components/stack/StackCard1";

export default function StackPeview() {
  return (
    <section>
      <Wrapper variant="standard" className="py-12">
        <div className="flex items-end justify-between">
          <Text
            tag="h2"
            variant="displaySM"
            className="italic tracking-wide dark:text-white text-base-900 font-display"
          >
            Stack
          </Text>
          <Button isLink size="xs" variant="muted" href="/stack">
            Check out my whole stack
          </Button>
        </div>
        <StackCard1 />
      </Wrapper>
    </section>
  );
}
