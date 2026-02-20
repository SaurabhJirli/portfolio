import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import ChevronRight from "@/components/fundations/icons/ChevronRight";
import LogoCloud from "@/components/assets/LogoCloud";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Wrapper variant="standard" className="relative py-24">
        <div className="text-center">
          <div className="flex justify-center">
            <Text
              tag="a"
              variant="textSM"
              underlined={true}
              href="/studio"
              className="flex items-center gap-2 group text-base-900 dark:text-white"
            >
              Hire me 2 spots open
              <ChevronRight className="size-4" />
            </Text>
          </div>
          <div className="mt-8 text-balance">
            <Text
              tag="h1"
              variant="displayXL"
              className="flex items-baseline justify-center font-medium gap-3 dark:text-white text-base-900"
            >
              Hi, I'm Jarvis
              <img
                width={400}
                height={200}
                src="/images/assets/avatar.png"
                alt="#_"
                className="size-12 rounded-xl md:size-16 hover:scale-150 duration-300 hover:rotate-6 ease-in-out"
              />
              ,
            </Text>
            <Text
              tag="p"
              variant="displayXL"
              className="italic tracking-wide font-display dark:text-base-400 text-base-600"
            >
              software engineer.
            </Text>
          </div>
          <Text
            tag="p"
            variant="textLG"
            className="mt-4 dark:text-base-400 text-base-600 text-balance"
          >
            Crafting code, one line at a time: meet flaco, software engineer
            extraordinaire, yo!
          </Text>
          <LogoCloud />
        </div>
      </Wrapper>
    </section>
  );
}
