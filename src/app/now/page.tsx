import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";

export default function NowPage() {
  return (
    <section>
      <Wrapper className="py-24">
        <div className="text-center">
          <img
            width={200}
            height={200}
            src="/images/assets/avatar.png"
            alt="#_"
            className="mx-auto size-12 rounded-xl md:size-24"
          />
          <Text
            tag="h1"
            variant="displayXL"
            className="mt-12 dark:text-white text-base-900 text-balance"
          >
            My now page
            <span className="italic tracking-wide font-display"> get to now me </span>
          </Text>
          <Text
            tag="p"
            variant="textLG"
            className="mt-4 dark:text-base-400 text-base-600 text-balance"
          >
            Learn about me and what I am up to right now.
          </Text>
        </div>
        <Wrapper variant="prose" className="mt-12">
          <h3>What I'm doing now</h3>
          <p>As of March 2025, here are a few things I'm focused on:</p>
          <ul>
            <li>
              Working as a freelance web developer and designer, taking on
              projects for clients across various industries.
            </li>
            <li>
              Learning React.js and improving my skills in front-end development
              to stay up to date with the latest web development trends.
            </li>
            <li>
              Reading books on personal development and productivity, trying to
              find ways to optimize my workflow and improve my work-life balance.
            </li>
            <li>
              Taking online courses on digital marketing and SEO to expand my
              skillset and offer additional services to my clients.
            </li>
            <li>
              Spending time outdoors and staying active through hiking and
              cycling, as a way to balance my work with physical activity and
              mental relaxation.
            </li>
          </ul>
          <h3>What I'm Not Doing</h3>
          <p>
            To focus on the things that matter most, here are a few things I'm
            intentionally not doing right now:
          </p>
          <ul>
            <li>
              Taking on any long-term commitments that would interfere with my
              ability to deliver quality work to my clients.
            </li>
            <li>
              Spending too much time on social media or other distractions that
              could take away from my productivity and creativity.
            </li>
            <li>
              Neglecting my physical and mental health by skipping workouts or
              not taking time to unwind and relax outside of work.
            </li>
          </ul>
          <p>
            This Now page reflects my current priorities and goals, and I will
            update it regularly as my focus and activities change over time.
          </p>
          <small>Published: 2024.00 - Last updated: 2024.00 </small>
        </Wrapper>
      </Wrapper>
    </section>
  );
}
