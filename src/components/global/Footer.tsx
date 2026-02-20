import Logo from "@/components/assets/Logo";
import Wrapper from "@/components/fundations/containers/Wrapper";
import Twitter from "@/components/fundations/icons/Twitter";
import Github from "@/components/fundations/icons/Github";
import Youtube from "@/components/fundations/icons/Youtube";

export default function Footer() {
  return (
    <footer>
      <Wrapper className="flex flex-col py-24">
        <a href="/" aria-label="Go to homepage">
          <Logo className="mx-auto size-8 dark:text-white text-base-900" />
        </a>

        <div className="flex justify-center mt-12 space-x-6">
          <a href="#" className="dark:text-base-400 text-base-600 hover:text-white">
            <span className="sr-only">X</span>
            <Twitter className="size-4" />
          </a>

          <a href="#" className="dark:text-base-400 text-base-600 hover:text-white">
            <span className="sr-only">YouTube</span>
            <Youtube className="size-4" />
          </a>

          <a href="#" className="dark:text-base-400 text-base-600 hover:text-white">
            <span className="sr-only">GitHub</span>
            <Github className="size-4" />
          </a>
        </div>
      </Wrapper>
    </footer>
  );
}
