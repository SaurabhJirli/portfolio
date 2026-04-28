import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import RevealWrapper from "@/components/global/RevealWrapper";

const FOCUS_ROWS = [
  {
    num: "01",
    text: "Backend services, APIs, and data flows",
  },
  {
    num: "02",
    text: "Cloud and infrastructure fundamentals across AWS, Azure, Docker, and Kubernetes",
  },
  {
    num: "03",
    text: "Frontend features with Next.js and TypeScript when the product needs it",
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
                What I&rsquo;m focused on{" "}
                <span className="italic font-display text-text-muted">
                  now
                </span>
              </Text>
              <Text
                tag="p"
                variant="textLG"
                className="mt-5 text-text-secondary leading-relaxed max-w-[48ch]"
              >
                Backend-leaning full-stack developer working across APIs, data
                flows, cloud-based applications, and IoT-related systems.
              </Text>
              <p className="mt-6 text-xs font-mono text-text-muted tracking-wide">
                Updated March 2026
              </p>
            </div>

            <div className="flex flex-col">
              {FOCUS_ROWS.map((row, i) => (
                <div
                  key={row.num}
                  data-reveal
                  className={`flex items-baseline gap-5 py-5${
                    i < FOCUS_ROWS.length - 1
                      ? " border-b border-border-subtle"
                      : ""
                  }`}
                >
                  <span className="shrink-0 text-xs font-mono text-text-muted tabular-nums">
                    {row.num}
                  </span>
                  <p className="text-base leading-relaxed text-text-secondary">
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
