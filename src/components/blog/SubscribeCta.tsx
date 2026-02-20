import Text from "@/components/fundations/elements/Text";
import Button from "@/components/fundations/elements/Button";
import Wrapper from "@/components/fundations/containers/Wrapper";

export default function SubscribeCta() {
  return (
    <section>
      <Wrapper className="py-12">
        <div className="text-center">
          <Text
            tag="h3"
            variant="displayXL"
            className="italic text-balance dark:text-white text-base-900 font-display"
          >
            Subscribe
          </Text>
          <Text
            tag="p"
            variant="textBase"
            className="mt-4 font-medium dark:text-base-400 text-base-600 text-balance"
          >
            Get notified when I publish something new, and unsubscribe at any
            time.
          </Text>
          <form>
            <div className="flex flex-col max-w-xs mx-auto mt-6 gap-2">
              <input
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="flex-auto w-full h-10 px-3 py-2 text-center border-transparent rounded-full appearance-none outline outline-base-200 dark:outline-base-800 dark:text-white text-base-900 outline-inset shadow-base-800/5 dark:placeholder:text-base-400 dark:place-holder-text-base-600 duration-300 focus:border-base-500 focus:outline-none focus:outline-4 focus:outline-base-500/10 sm:text-sm bg-base-50 dark:bg-base-800"
              />
              <Button type="submit" size="base" variant="default">
                Join me
              </Button>
            </div>
          </form>
        </div>
      </Wrapper>
    </section>
  );
}
