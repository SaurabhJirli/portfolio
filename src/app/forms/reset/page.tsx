import Text from "@/components/fundations/elements/Text";
import Button from "@/components/fundations/elements/Button";
import Wrapper from "@/components/fundations/containers/Wrapper";

export default function ResetPage() {
  return (
    <section>
      <Wrapper variant="standard" className="py-24 lg:h-svh flex flrx-col items-center justify-center">
        <div className="w-full">
          <Text tag="h1" variant="displayMD" className="text-balance dark:text-white text-base-900 text-center">
            Go ahead and reset
            <span className="block italic tracking-wide font-display">your password</span>
          </Text>
          <form className="max-w-md mx-auto mt-6">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                aria-describedby="email"
                placeholder="Enter your email"
                className="flex-auto w-full h-10 px-3 py-2 text-center border-transparent rounded-full appearance-none outline outline-base-200 dark:outline-base-800 dark:text-white text-base-900 outline-inset shadow-base-800/5 dark:placeholder:text-base-400 dark:place-holder-text-base-600 duration-300 focus:border-base-500 focus:outline-none focus:outline-4 focus:outline-base-500/10 sm:text-sm bg-base-50 dark:bg-base-800"
              />
            </div>
            <div className="mt-2">
              <Button size="base" variant="default" type="submit" className="w-full">
                Send Reset Link
              </Button>
            </div>
            <Text tag="p" variant="textSM" className="mt-2 text-center dark:text-base-400 text-base-600">
              We'll email you a link to reset your password.
            </Text>
          </form>
        </div>
      </Wrapper>
    </section>
  );
}
