import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import RevealWrapper from "@/components/global/RevealWrapper";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="scroll-mt-28 flex items-center min-h-[calc(100svh-80px)] py-24 lg:py-28 bg-base-50 dark:bg-base-900/50"
    >
      <Wrapper variant="standard">
        <RevealWrapper stagger={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — editorial context */}
            <div className="flex flex-col justify-center">
              <p
                className="text-xs font-mono uppercase tracking-[0.2em] text-base-400 dark:text-base-500"
                data-reveal
              >
                Work
              </p>

              <Text
                tag="h2"
                variant="displayLG"
                className="mt-4 tracking-tight text-base-900 dark:text-white"
                data-reveal
              >
                Where I&rsquo;m building right now
              </Text>

              <Text
                tag="p"
                variant="textBase"
                className="mt-5 text-base-500 dark:text-base-400 leading-relaxed max-w-[48ch]"
                data-reveal
              >
                Currently working in a full-stack role with a backend-leaning
                focus, contributing across product features, integrations, and
                reliable application flows.
              </Text>
            </div>

            {/* Right — role card */}
            <div className="flex items-center" data-reveal>
              <div className="w-full rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-950 p-8 sm:p-10">
                <Text
                  tag="h3"
                  variant="textXL"
                  className="font-medium tracking-tight text-base-900 dark:text-white"
                >
                  Software Development Engineer (SDE)
                </Text>

                <p className="mt-3 text-sm text-base-500 dark:text-base-400 leading-relaxed">
                  Touchcore Systems, Pune
                </p>

                <p className="mt-1.5 font-mono text-xs text-base-400 dark:text-base-500 tracking-wide">
                  October 2024 &mdash; Present
                </p>

                <div className="mt-6 pt-5 border-t border-base-100 dark:border-base-800 flex items-center gap-2">
                  <span
                    className="block size-1.5 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                  <span className="text-xs text-base-400 dark:text-base-500">
                    Current role
                  </span>
                </div>

                <p className="mt-4 text-sm text-base-400 dark:text-base-500 leading-relaxed max-w-[44ch]">
                  Building practical product features across backend, cloud, and
                  frontend surfaces.
                </p>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </Wrapper>
    </section>
  );
}
