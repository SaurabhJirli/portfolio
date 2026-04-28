import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import RevealWrapper from "@/components/global/RevealWrapper";

const EXPERIENCE_AREAS = [
  "Backend services and APIs",
  "Cloud-based application work",
  "IoT-related systems",
  "Frontend features with Next.js and TypeScript",
];

export default function ExperienceSection() {
  return (
    <section className="py-24 lg:py-28 bg-base-50 dark:bg-base-900/50">
      <Wrapper variant="standard">
        <RevealWrapper stagger={0.1}>
          <div className="max-w-2xl" data-reveal>
            <Text
              tag="h2"
              variant="displayLG"
              className="tracking-tight text-base-900 dark:text-white"
            >
              Experience
            </Text>
          </div>

          <div
            className="mt-12 rounded-2xl border border-base-200 dark:border-base-800 bg-white dark:bg-base-950 p-8 sm:p-10 lg:p-12"
            data-reveal
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
              <div className="flex-1 min-w-0">
                <Text
                  tag="h3"
                  variant="textXL"
                  className="font-medium tracking-tight text-base-900 dark:text-white"
                >
                  Full-Stack Developer
                </Text>
                <p className="mt-2 text-sm text-base-400 dark:text-base-500 leading-relaxed">
                  Backend services &middot; Cloud applications &middot; IoT
                  systems &middot; Frontend features
                </p>
                <Text
                  tag="p"
                  variant="textBase"
                  className="mt-5 text-base-500 dark:text-base-400 leading-relaxed max-w-[52ch]"
                >
                  I work across backend APIs, data flows, cloud integrations, and
                  frontend features, depending on what the product needs.
                </Text>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-base-100 dark:border-base-800">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {EXPERIENCE_AREAS.map((area) => (
                  <li
                    key={area}
                    className="flex items-baseline gap-2.5 text-sm text-base-500 dark:text-base-400"
                  >
                    <span
                      className="mt-1.5 block size-1 shrink-0 rounded-full bg-accent-500/40"
                      aria-hidden="true"
                    />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealWrapper>
      </Wrapper>
    </section>
  );
}
