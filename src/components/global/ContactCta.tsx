import Button from "@/components/fundations/elements/Button";
import Text from "@/components/fundations/elements/Text";

export default function ContactCta() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div data-reveal className="group flex flex-col justify-between p-6 sm:p-8 border border-base-200 dark:border-base-700 rounded-2xl bg-white dark:bg-base-800 transition-all duration-300 ease-out hover:border-transparent hover:shadow-accent dark:hover:shadow-accent">
        <div>
          <Text
            tag="h3"
            variant="textLG"
            className="font-medium tracking-tight text-base-900 dark:text-white"
          >
            Say hello
          </Text>
          <Text
            tag="p"
            variant="textBase"
            className="mt-3 text-base-500 dark:text-base-400 leading-relaxed"
          >
            Have a question or want to work together? Drop me a message and I'll get back to you.
          </Text>
        </div>
        <Button
          isLink
          size="base"
          variant="default"
          href="/forms/contact"
          title="Send Saurabh a message"
          className="mt-8 w-fit"
        >
          Send a message
        </Button>
      </div>
      <div data-reveal className="group flex flex-col justify-between p-6 sm:p-8 border border-base-200 dark:border-base-700 rounded-2xl bg-white dark:bg-base-800 transition-all duration-300 ease-out hover:border-transparent hover:shadow-accent dark:hover:shadow-accent">
        <div>
          <Text
            tag="h3"
            variant="textLG"
            className="font-medium tracking-tight text-base-900 dark:text-white"
          >
            Or just connect
          </Text>
          <Text
            tag="p"
            variant="textBase"
            className="mt-3 text-base-500 dark:text-base-400 leading-relaxed"
          >
            Find me on GitHub, LinkedIn, or WhatsApp. Links are in the footer below.
          </Text>
        </div>
        <Button
          isLink
          size="base"
          variant="muted"
          href="https://www.linkedin.com/in/saurabhrjirli/"
          title="Connect on LinkedIn"
          className="mt-8 w-fit"
        >
          LinkedIn
        </Button>
      </div>
    </div>
  );
}
