import Text from "@/components/fundations/elements/Text";
import Button from "@/components/fundations/elements/Button";
import Wrapper from "@/components/fundations/containers/Wrapper";

export default function SignUpPage() {
  return (
    <section>
      <Wrapper variant="standard" className="py-24 lg:h-svh flex flrx-col items-center justify-center">
        <div className="w-full">
          <Text tag="h1" variant="displayMD" className="text-balance dark:text-white text-base-900 text-center">
            Sign up to
            <span className="italic font-display"> Flaco </span>
          </Text>

          <form className="max-w-md mx-auto mt-6">
            <div className="grid grid-cols-1 gap-2">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="flex-auto w-full h-10 px-3 py-2 text-center border-transparent rounded-full appearance-none outline outline-base-200 dark:outline-base-800 dark:text-white text-base-900 outline-inset shadow-base-800/5 dark:placeholder:text-base-400 dark:place-holder-text-base-600 duration-300 focus:border-base-500 focus:outline-none focus:outline-4 focus:outline-base-500/10 sm:text-sm bg-base-50 dark:bg-base-800"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="flex-auto w-full h-10 px-3 py-2 text-center border-transparent rounded-full appearance-none outline outline-base-200 dark:outline-base-800 dark:text-white text-base-900 outline-inset shadow-base-800/5 dark:placeholder:text-base-400 dark:place-holder-text-base-600 duration-300 focus:border-base-500 focus:outline-none focus:outline-4 focus:outline-base-500/10 sm:text-sm bg-base-50 dark:bg-base-800"
                  />
                </div>
                <Text tag="p" variant="textXS" className="mt-2 dark:text-base-400 text-base-600">
                  Use at least 8 characters, 1 uppercase, 1 lowercase, 1 digit,
                  and 1 special character for your password.
                </Text>
              </div>
            </div>

            <div className="flex items-center py-4">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className="bg-white rounded border-base-200 dark:text-base-400 text-base-600 shadow-sm focus:border-base-300 focus:ring focus:ring-base-200 focus:ring-opacity-50 dark:bg-base-900 dark:border-base-700"
              />
              <label htmlFor="terms" className="block ml-2 text-sm leading-5 dark:text-base-400 text-base-600">
                I agree
              </label>
            </div>

            <div className="mt-2">
              <Button type="submit" size="base" variant="default" className="w-full">
                Sign up
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-between mt-2 gap-4">
              <Text tag="p" variant="textSM" className="dark:text-base-400 text-base-600">
                Already have an account?
              </Text>
              <Text tag="a" variant="textXS" underlined={true} className="text-base-900 dark:text-white" href="/forms/signin">
                Sign in instead
              </Text>
            </div>
          </form>
        </div>
      </Wrapper>
    </section>
  );
}
