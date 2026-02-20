import Text from "@/components/fundations/elements/Text";
import Wrapper from "@/components/fundations/containers/Wrapper";
import ProjectCard2 from "@/components/projects/ProjectCard2";
import { getCollection } from "@/lib/content";

export default async function ProjectsIndexPage() {
  const allProjects = await getCollection("projects");

  return (
    <section>
      <Wrapper className="py-24">
        <div className="text-center">
          <Text tag="h1" variant="displayXL" className="text-balance dark:text-white text-base-900">
            I like to build
            <span className="italic tracking-wide font-display dark:text-base-400 text-base-600">
              projects from scrach
            </span>
          </Text>
          <Text tag="p" variant="textLG" className="mt-4 dark:text-base-400 text-base-600">
            When I'm not working I build things that make me explore and learn,
            and I love to share my projects with the world.
          </Text>
        </div>
        <div className="flex flex-col mt-6 gap-2">
          {allProjects.map((post) => (
            <ProjectCard2 key={post.slug} post={post} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
