import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import RevealWrapper from "@/components/global/RevealWrapper";

const FOCUS_ROWS = [
  {
    label: "Systems",
    text: "APIs, service boundaries, data movement, and backend flows that stay clear as the product grows.",
  },
  {
    label: "Infrastructure",
    text: "Cloud foundations across AWS and Azure, with Docker and Kubernetes for deployment-oriented thinking.",
  },
  {
    label: "Interfaces",
    text: "Focused Next.js and TypeScript work when a backend system needs a useful product surface.",
  },
];

export default function NowSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 flex items-center min-h-[calc(100svh-80px)] py-24 lg:py-28"
    >
      <Wrapper variant="standard">
        <RevealWrapper stagger={0.12} y={18}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
            <div data-reveal>
              <Text
                tag="h2"
                variant="displayLG"
                className="tracking-tight text-text-primary"
              >
                What I&rsquo;m focused on now
              </Text>
              <Text
                tag="p"
                variant="textLG"
                className="mt-5 text-text-secondary leading-relaxed max-w-[48ch]"
              >
                I&rsquo;m shaping myself around backend-heavy product
                engineering: building reliable systems, understanding the
                infrastructure around them, and carrying features far enough
                that people can actually use them.
              </Text>
              <p className="mt-6 text-xs font-mono text-text-muted tracking-wide">
                Current focus &middot; March 2026
              </p>
            </div>

            <div className="flex flex-col">
              {FOCUS_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  data-reveal
                  className={`py-5${
                    i < FOCUS_ROWS.length - 1
                      ? " border-b border-border-subtle"
                      : ""
                  }`}
                >
                  <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-text-muted">
                    {row.label}
                  </span>
                  <p className="mt-2 text-base leading-relaxed text-text-secondary">
                    {row.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </Wrapper>
    </section>
  );
}
