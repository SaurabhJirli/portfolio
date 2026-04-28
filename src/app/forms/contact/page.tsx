import Text from "@/components/fundations/elements/Text";
import Button from "@/components/fundations/elements/Button";
import Wrapper from "@/components/fundations/containers/Wrapper";

const INPUT_CLASS =
  "block w-full rounded-lg border border-border-subtle bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors duration-200 focus:border-border-strong focus:outline-none focus:ring-2 focus:ring-border-subtle";

export default function ContactPage() {
  return (
    <section>
      <Wrapper variant="standard" className="py-24 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20">
          {/* Left — editorial context */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted">
              Contact
            </p>
            <Text
              tag="h1"
              variant="displayLG"
              className="mt-4 tracking-tight text-text-primary"
            >
              Have something worth building?
            </Text>
            <Text
              tag="p"
              variant="textBase"
              className="mt-5 text-text-secondary leading-relaxed max-w-[48ch]"
            >
              Send a note about the product, system, or feature. I&rsquo;m open
              to backend-heavy full-stack work, dashboards, integrations, and
              clean product implementation.
            </Text>
            <div className="mt-8">
              <p className="text-sm text-text-muted">Prefer email?</p>
              <a
                href="mailto:saurabhrj2001@gmail.com"
                className="mt-1 inline-block text-sm font-medium text-text-primary hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-200"
              >
                saurabhrj2001@gmail.com
              </a>
            </div>
          </div>

          {/* Right — form card */}
          <div className="rounded-2xl border border-border-subtle bg-surface p-8 sm:p-10">
            <form
              action="https://formsubmit.co/saurabhrj2001@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New portfolio message" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="block text-[11px] font-mono uppercase tracking-[0.15em] text-text-muted mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={INPUT_CLASS}
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="block text-[11px] font-mono uppercase tracking-[0.15em] text-text-muted mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={INPUT_CLASS}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-[11px] font-mono uppercase tracking-[0.15em] text-text-muted mb-2"
                  >
                    What is this about?
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    placeholder="Project, collaboration, question..."
                    className={INPUT_CLASS}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-mono uppercase tracking-[0.15em] text-text-muted mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about the project or idea..."
                    className={`${INPUT_CLASS} resize-none`}
                  />
                </div>
              </div>

              <div className="mt-6">
                <Button type="submit" size="base" variant="default" className="w-full">
                  Send message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
