import Button from "@/components/fundations/elements/Button";
import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";

export default function NotFound() {
  return (
    <section>
      <Wrapper variant="standard" className="py-20 lg:py-32">
        <div className="max-w-lg">
          <Text
            tag="p"
            variant="textSM"
            className="font-mono text-base-500 dark:text-base-500"
          >
            404 error
          </Text>
          <Text
            tag="h1"
            variant="displayXL"
            className="mt-4 tracking-tight text-base-900 dark:text-white"
          >
            Page not found
          </Text>
          <Text
            tag="p"
            variant="textLG"
            className="mt-4 text-base-500 dark:text-base-400 leading-relaxed"
          >
            The page you are looking for may have been moved, deleted, or does
            not exist. Please check the URL and try again.
          </Text>
          <Button isLink size="base" variant="muted" href="/" className="mt-8 w-fit">
            Go back home
          </Button>
        </div>
      </Wrapper>
    </section>
  );
}
