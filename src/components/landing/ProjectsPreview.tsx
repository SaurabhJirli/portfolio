import Button from "@/components/fundations/elements/Button";
import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import ProjectCard1 from "@/components/projects/ProjectCard1";
import ProjectCard2 from "@/components/projects/ProjectCard2";
import RevealWrapper from "@/components/global/RevealWrapper";
import { getCollection } from "@/lib/content";

export default async function ProjectsPreview() {
  const allProjects = await getCollection("projects");
  const featured = allProjects[0];
  const rest = allProjects.slice(1, 3);

  return (
    <section>
      <Wrapper variant="standard" className="py-24 lg:py-36">
        <RevealWrapper stagger={0.1}>
          {/* Section header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-reveal>
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-text-muted">
                Projects
              </p>
              <Text
                tag="h2"
                variant="displayLG"
                className="mt-2 italic tracking-tight font-display text-text-primary"
              >
                Selected work
              </Text>
              <p className="mt-3 text-base leading-relaxed text-text-secondary max-w-md">
                Systems and interfaces I designed and built.
              </p>
            </div>
            <Button isLink size="xs" variant="muted" href="/projects/">
              All projects
            </Button>
          </div>

          {/* Featured project */}
          {featured && (
            <div className="mt-14" data-reveal>
              <ProjectCard2 post={featured} featured />
            </div>
          )}

          {/* Secondary projects */}
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {rest.map((post, i) => (
              <div key={post.slug} data-reveal>
                <ProjectCard1 post={post} index={i + 2} />
              </div>
            ))}
          </div>
        </RevealWrapper>
      </Wrapper>
    </section>
  );
}
