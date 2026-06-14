import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import ProjectCard2 from "@/components/projects/ProjectCard2";
import RevealWrapper from "@/components/global/RevealWrapper";
import { getCollection, filterVisible, sortByDateDesc } from "@/lib/content";

export default async function ProjectsIndexPage() {
  const allProjects = filterVisible(
    sortByDateDesc(await getCollection("projects"))
  );

  return (
    <section>
      <Wrapper variant="standard" className="py-24 lg:py-40">
        <RevealWrapper stagger={0.1}>
          <div className="max-w-2xl" data-reveal>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted">
              Portfolio
            </p>
            <Text
              tag="h1"
              variant="displayXL"
              className="mt-3 font-display italic tracking-tight text-text-primary"
            >
              Selected work
            </Text>
            <Text
              tag="p"
              variant="textLG"
              className="mt-4 text-text-secondary leading-relaxed max-w-lg"
            >
              A curated look at backend systems, cloud platforms, and the
              product features behind them.
            </Text>
          </div>

          <div className="flex flex-col mt-16 gap-6">
            {allProjects.map((post, i) => (
              <div key={post.slug} data-reveal>
                <ProjectCard2
                  post={post}
                  featured={i === 0}
                  label={i === 0 ? "Backend + IoT platform" : undefined}
                />
              </div>
            ))}
          </div>
        </RevealWrapper>
      </Wrapper>
    </section>
  );
}
