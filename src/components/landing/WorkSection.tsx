import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import RevealWrapper from "@/components/global/RevealWrapper";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="scroll-mt-28 flex items-center min-h-[calc(100svh-80px)] py-24 lg:py-28 bg-surface-inset"
    >
      <Wrapper variant="standard">
        <RevealWrapper stagger={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left — editorial context */}
            <div className="flex flex-col justify-center">
              <p
                className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted"
                data-reveal
              >
                Work
              </p>

              <Text
                tag="h2"
                variant="displayLG"
                className="mt-4 tracking-tight text-text-primary"
                data-reveal
              >
                Where I&rsquo;m building right now
              </Text>

              <Text
                tag="p"
                variant="textBase"
                className="mt-5 text-text-secondary leading-relaxed max-w-[48ch]"
                data-reveal
              >
                I&rsquo;m currently working in a backend-leaning full-stack
                role, contributing to product features, integrations, and
                application flows that need to stay reliable in real use.
              </Text>
            </div>

            {/* Right — role card */}
            <div className="flex items-center" data-reveal>
              <div className="w-full rounded-2xl border border-border-subtle bg-surface shadow-card p-8 sm:p-10">
                <Text
                  tag="h3"
                  variant="textXL"
                  className="font-medium tracking-tight text-text-primary"
                >
                  Software Development Engineer (SDE)
                </Text>

                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  Touchcore Systems, Pune
                </p>

                <p className="mt-1.5 font-mono text-xs text-text-muted tracking-wide">
                  October 2024 &mdash; Present
                </p>

                <div className="mt-6 pt-5 border-t border-border-subtle flex items-center gap-2">
                  <span
                    className="block size-1.5 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                  <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-text-muted">
                    Current position
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-text-muted">
                      Focus
                    </span>
                    <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                      Backend services, integrations, and product workflows
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-text-muted">
                      Contribution
                    </span>
                    <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                      Building practical features across backend, cloud, and frontend surfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </Wrapper>
    </section>
  );
}
