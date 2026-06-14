import Button from "@/components/fundations/elements/Button";
import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import ProjectCard2 from "@/components/projects/ProjectCard2";
import RevealWrapper from "@/components/global/RevealWrapper";
import { getCollection, filterVisible, sortByDateDesc } from "@/lib/content";

export default async function ProjectsPreview() {
  const allProjects = filterVisible(
    sortByDateDesc(await getCollection("projects"))
  );
  const featured = allProjects[0];

  return (
    <section>
      <Wrapper variant="standard" className="py-24 lg:py-36">
        <RevealWrapper stagger={0.1}>
          {/* Section header */}
          <div data-reveal>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted">
              Projects
            </p>
            <Text
              tag="h2"
              variant="displayLG"
              className="mt-2 italic tracking-tight font-display text-text-primary"
            >
              Featured build
            </Text>
            <p className="mt-3 text-base leading-relaxed text-text-secondary max-w-md">
              A closer look at backend-heavy systems, cloud workflows, and
              product features I&apos;ve built.
            </p>
            <div className="mt-5 w-fit">
              <Button isLink size="xs" variant="muted" href="/projects/">
                View all projects
              </Button>
            </div>
          </div>

          {/* Featured project */}
          {featured && (
            <div className="mt-12" data-reveal>
              <ProjectCard2
                post={featured}
                featured
                label="Backend + IoT Platform"
              />
            </div>
          )}
        </RevealWrapper>
      </Wrapper>
    </section>
  );
}
