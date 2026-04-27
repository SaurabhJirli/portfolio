import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";

export default function NowPage() {
  return (
    <section>
      <Wrapper variant="standard" className="py-20 lg:py-32">
        <div className="text-center">
          <img
            width={200}
            height={200}
            src="/images/assets/avatar.png"
            alt="Saurabh Jirli"
            className="mx-auto size-16 md:size-20 rounded-xl ring-1 ring-base-200 dark:ring-base-800"
          />
          <Text
            tag="h1"
            variant="displayXL"
            className="mt-12 dark:text-white text-base-900 text-balance"
          >
            What I'm up to
            <span className="italic font-display"> right now</span>
          </Text>
          <Text
            tag="p"
            variant="textLG"
            className="mt-4 dark:text-base-400 text-base-600 text-balance"
          >
            A quick look at what I'm working on and learning.
          </Text>
        </div>
        <Wrapper variant="prose" className="mt-12">
          <h3>Current work</h3>
          <p>Updated March 2026.</p>
          <p>
            I'm a backend-leaning full-stack developer at <strong>Touchcore Systems</strong> in
            Pune. Most of my day-to-day work is around backend services, APIs, and data flows,
            but I also contribute to frontend and cloud when needed.
          </p>
          <h3>What I'm learning</h3>
          <p>
            Right now I'm spending more time improving my cloud and infrastructure knowledge
            across <strong>AWS</strong>, <strong>Azure</strong>, <strong>Docker</strong>,
            and <strong>Kubernetes</strong>, while continuing to get better at frontend
            development with <strong>Next.js</strong> and <strong>TypeScript</strong>.
          </p>
          <p>
            I'll update this page whenever my focus shifts.
          </p>
          <small>Last updated: March 2026</small>
        </Wrapper>
      </Wrapper>
    </section>
  );
}
