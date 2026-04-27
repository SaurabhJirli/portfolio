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
        <RevealWrapper stagger={0.06}>
          <div className="flex items-end justify-between" data-reveal>
            <Text
              tag="h2"
              variant="displayLG"
              className="italic tracking-tight font-display text-base-900 dark:text-white"
            >
              Projects
            </Text>
            <Button isLink size="xs" variant="muted" href="/projects/">
              See all
            </Button>
          </div>

          {featured && (
            <div className="mt-10" data-reveal>
              <ProjectCard2 post={featured} />
            </div>
          )}

          <div className="mt-4 grid gap-4 md:grid-cols-2" data-reveal>
            {rest.map((post) => (
              <ProjectCard1 key={post.slug} post={post} />
            ))}
          </div>
        </RevealWrapper>
      </Wrapper>
    </section>
  );
}
