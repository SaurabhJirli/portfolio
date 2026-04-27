import Text from "@/components/fundations/elements/Text";
import Button from "@/components/fundations/elements/Button";
import Wrapper from "@/components/fundations/containers/Wrapper";

export default function SubscribeCta() {
  return (
    <section className="border-t border-base-200 dark:border-base-800">
      <Wrapper variant="standard" className="py-20 lg:py-28">
        <div className="max-w-md mx-auto text-center">
          <Text
            tag="h3"
            variant="displaySM"
              className="italic tracking-tight font-display text-base-900 dark:text-white"
          >
            Subscribe
          </Text>
          <Text
            tag="p"
            variant="textBase"
            className="mt-3 text-base-500 dark:text-base-400 leading-relaxed"
          >
            Get notified when I publish something new, and unsubscribe at any
            time.
          </Text>
          <form>
            <div className="flex flex-col sm:flex-row max-w-sm mx-auto mt-6 gap-3">
              <input
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="flex-1 h-10 px-4 text-sm border border-base-200 dark:border-base-800 rounded-lg bg-white dark:bg-base-950 text-base-900 dark:text-white placeholder:text-base-400 dark:placeholder:text-base-600 focus:outline-none focus:border-base-400 dark:focus:border-base-600 transition-colors duration-200"
              />
              <Button type="submit" size="base" variant="default">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </Wrapper>
    </section>
  );
}
