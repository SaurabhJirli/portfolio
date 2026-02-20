import Button from "@/components/fundations/elements/Button";
import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import ProjectCard1 from "@/components/projects/ProjectCard1";
import { getCollection } from "@/lib/content";

export default async function ProjectsPreview() {
  const allProjects = await getCollection("projects");

  return (
    <section>
      <Wrapper variant="standard" className="py-12">
        <div className="flex items-end justify-between">
          <Text
            tag="h2"
            variant="displaySM"
            className="italic tracking-wide dark:text-white text-base-900 font-display"
          >
            Projects
          </Text>
          <Button isLink size="xs" variant="muted" href="/projects/">
            See them all
          </Button>
        </div>
        <div className="mt-6 grid gap-2 md:grid-cols-2">
          {allProjects.slice(0, 2).map((post) => (
            <ProjectCard1 key={post.slug} post={post} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
