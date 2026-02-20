import Text from "@/components/fundations/elements/Text";
import Button from "@/components/fundations/elements/Button";
import Wrapper from "@/components/fundations/containers/Wrapper";

export default function ContactPage() {
  return (
    <section>
      <Wrapper variant="standard" className="py-24 lg:h-svh flex flrx-col items-center justify-center">
        <div className="w-full">
          <Text tag="h1" variant="displayMD" className="text-balance dark:text-white text-base-900 text-center">
            Get in touch
            <span className="block italic tracking-wide font-display">Send me a message</span>
          </Text>
          <form className="max-w-md mx-auto mt-6">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="sr-only">
                  First name
                </label>
                <div>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="Your name"
                    autoComplete="given-name"
                    className="flex-auto w-full h-10 px-3 py-2 text-center border-transparent rounded-full appearance-none outline outline-base-200 dark:outline-base-800 dark:text-white text-base-900 outline-inset shadow-base-800/5 dark:placeholder:text-base-400 dark:place-holder-text-base-600 duration-300 focus:border-base-500 focus:outline-none focus:outline-4 focus:outline-base-500/10 sm:text-sm bg-base-50 dark:bg-base-800"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="sr-only">
                  Last name
                </label>
                <div>
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Your last name"
                    id="last-name"
                    autoComplete="family-name"
                    className="flex-auto w-full h-10 px-3 py-2 text-center border-transparent rounded-full appearance-none outline outline-base-200 dark:outline-base-800 dark:text-white text-base-900 outline-inset shadow-base-800/5 dark:placeholder:text-base-400 dark:place-holder-text-base-600 duration-300 focus:border-base-500 focus:outline-none focus:outline-4 focus:outline-base-500/10 sm:text-sm bg-base-50 dark:bg-base-800"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="sr-only">
                  Company
                </label>
                <div>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Company name"
                    autoComplete="organization"
                    className="flex-auto w-full h-10 px-3 py-2 text-center border-transparent rounded-full appearance-none outline outline-base-200 dark:outline-base-800 dark:text-white text-base-900 outline-inset shadow-base-800/5 dark:placeholder:text-base-400 dark:place-holder-text-base-600 duration-300 focus:border-base-500 focus:outline-none focus:outline-4 focus:outline-base-500/10 sm:text-sm bg-base-50 dark:bg-base-800"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your best email!"
                    id="email"
                    autoComplete="email"
                    className="flex-auto w-full h-10 px-3 py-2 text-center border-transparent rounded-full appearance-none outline outline-base-200 dark:outline-base-800 dark:text-white text-base-900 outline-inset shadow-base-800/5 dark:placeholder:text-base-400 dark:place-holder-text-base-600 duration-300 focus:border-base-500 focus:outline-none focus:outline-4 focus:outline-base-500/10 sm:text-sm bg-base-50 dark:bg-base-800"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <div>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your message goes here..."
                    rows={4}
                    className="flex-auto w-full px-3 py-2 text-center border-transparent rounded-lg appearance-none resize outline outline-base-200 dark:outline-base-800 dark:text-white text-base-900 outline-inset shadow-base-800/5 dark:placeholder:text-base-400 dark:place-holder-text-base-600 duration-300 focus:border-base-500 focus:outline-none focus:outline-4 focus:outline-base-500/10 sm:text-sm bg-base-50 dark:bg-base-800"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <Button type="submit" size="base" variant="default" className="w-full">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Wrapper>
    </section>
  );
}
