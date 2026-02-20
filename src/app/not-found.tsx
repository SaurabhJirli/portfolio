import Button from "@/components/fundations/elements/Button";
import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";

export default function NotFound() {
  return (
    <section>
      <Wrapper variant="standard" className="py-24">
        <div className="text-center">
          <Text
            tag="h1"
            variant="displayXL"
            className="text-balance dark:text-white text-base-900"
          >
            Oh, oh...!
            <span className="italic tracking-wide font-display"> 404 error </span>
          </Text>
          <Text
            tag="p"
            variant="textLG"
            className="mt-4 dark:text-base-400 text-base-600"
          >
            An error has occurred. The page you are looking for may have been
            moved, deleted, or does not exist. Please try again. If the problem
            persists, please contact the site administrator.
          </Text>

          <Button isLink size="sm" variant="muted" href="/" className="mx-auto mt-8 w-fit">
            Go back home
          </Button>
        </div>
      </Wrapper>
    </section>
  );
}
